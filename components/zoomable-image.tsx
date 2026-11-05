"use client"

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import { Minus, Plus, RotateCcw, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const MIN_SCALE = 1
const MAX_SCALE = 5
const STEP = 0.5
const DOUBLE_TAP_SCALE = 2.5

type View = { scale: number; x: number; y: number }
const INITIAL_VIEW: View = { scale: 1, x: 0, y: 0 }

const clampScale = (scale: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale))

export function ZoomableImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>(INITIAL_VIEW)
  const [interacting, setInteracting] = useState(false)
  const [stage, setStage] = useState<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinch = useRef<{ distance: number; scale: number } | null>(null)
  const lastTap = useRef(0)
  const lastPointerType = useRef("mouse")
  const viewRef = useRef(view)
  viewRef.current = view

  // Evita que la imagen ampliada se aleje de los bordes del visor
  const clampView = useCallback(
    (next: View): View => {
      const image = imageRef.current
      const scale = clampScale(next.scale)
      if (!stage || !image) return { ...next, scale }
      const maxX = Math.max(0, (image.offsetWidth * scale - stage.clientWidth) / 2)
      const maxY = Math.max(0, (image.offsetHeight * scale - stage.clientHeight) / 2)
      return {
        scale,
        x: Math.min(maxX, Math.max(-maxX, next.x)),
        y: Math.min(maxY, Math.max(-maxY, next.y)),
      }
    },
    [stage],
  )

  // Hace zoom manteniendo fijo el punto (clientX, clientY); sin punto, usa el centro del visor
  const zoomTo = useCallback(
    (getScale: (current: number) => number, clientX?: number, clientY?: number) => {
      setView((prev) => {
        const scale = clampScale(getScale(prev.scale))
        if (!stage) return { ...prev, scale }
        const rect = stage.getBoundingClientRect()
        const px = (clientX ?? rect.left + rect.width / 2) - (rect.left + rect.width / 2)
        const py = (clientY ?? rect.top + rect.height / 2) - (rect.top + rect.height / 2)
        const ratio = scale / prev.scale
        return clampView({ scale, x: px - (px - prev.x) * ratio, y: py - (py - prev.y) * ratio })
      })
    },
    [stage, clampView],
  )

  const reset = useCallback(() => setView(INITIAL_VIEW), [])

  const toggleZoom = (clientX: number, clientY: number) => {
    if (viewRef.current.scale > MIN_SCALE) reset()
    else zoomTo(() => DOUBLE_TAP_SCALE, clientX, clientY)
  }

  // La rueda necesita un listener no pasivo para poder bloquear el scroll de la página
  useEffect(() => {
    if (!stage) return
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const factor = Math.exp(-event.deltaY * 0.0015)
      zoomTo((current) => current * factor, event.clientX, event.clientY)
    }
    const onResize = () => setView((prev) => clampView(prev))
    stage.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("resize", onResize)
    return () => {
      stage.removeEventListener("wheel", onWheel)
      window.removeEventListener("resize", onResize)
    }
  }, [stage, zoomTo, clampView])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    lastPointerType.current = event.pointerType
    event.currentTarget.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    setInteracting(true)

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinch.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), scale: viewRef.current.scale }
      return
    }

    if (event.pointerType === "touch") {
      const now = Date.now()
      if (now - lastTap.current < 300) {
        toggleZoom(event.clientX, event.clientY)
        lastTap.current = 0
      } else {
        lastTap.current = now
      }
    }
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId)
    if (!previous) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })

    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()]
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      const startScale = pinch.current.scale
      const startDistance = pinch.current.distance
      zoomTo(() => (startScale * distance) / startDistance, (a.x + b.x) / 2, (a.y + b.y) / 2)
      return
    }

    if (pointers.current.size === 1 && viewRef.current.scale > MIN_SCALE) {
      const dx = event.clientX - previous.x
      const dy = event.clientY - previous.y
      setView((prev) => clampView({ ...prev, x: prev.x + dx, y: prev.y + dy }))
    }
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    if (pointers.current.size === 0) setInteracting(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "+" || event.key === "=") zoomTo((current) => current + STEP)
    else if (event.key === "-") zoomTo((current) => current - STEP)
    else if (event.key === "0") reset()
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      reset()
      pointers.current.clear()
      pinch.current = null
      setInteracting(false)
    }
  }

  const zoomed = view.scale > MIN_SCALE

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Ampliar ${alt}`}
          className="group relative block w-full max-w-6xl cursor-zoom-in rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <img src={src} alt={alt} className={className} />
          <span className="absolute bottom-3 right-3 md:bottom-5 md:right-5 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
            <ZoomIn className="w-4 h-4" />
            Ampliar
          </span>
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        onKeyDown={handleKeyDown}
        className="flex flex-col gap-0 w-screen h-[100dvh] max-w-none sm:max-w-none p-0 rounded-none border-0 bg-background overflow-hidden"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Usa la rueda del mouse, los botones o pellizca la imagen para hacer zoom, y arrástrala para moverte.
        </DialogDescription>

        <div className="flex items-center justify-between gap-2 border-b px-4 py-2">
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="hidden md:inline">Rueda del mouse o doble clic para hacer zoom · Arrastra para moverte</span>
            <span className="md:hidden">Pellizca o toca dos veces para hacer zoom</span>
          </p>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" aria-label="Cerrar">
              <X className="w-5 h-5" />
            </Button>
          </DialogClose>
        </div>

        <div
          ref={setStage}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDoubleClick={(event) => {
            if (lastPointerType.current !== "touch") toggleZoom(event.clientX, event.clientY)
          }}
          className={`relative flex flex-1 min-h-0 items-center justify-center overflow-hidden touch-none select-none bg-muted/20 ${
            zoomed ? (interacting ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
          }`}
        >
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            draggable={false}
            className="max-w-full max-h-full object-contain will-change-transform"
            style={{
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              transition: interacting ? "none" : "transform 150ms ease-out",
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-1 border-t px-4 py-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Alejar"
            disabled={view.scale <= MIN_SCALE}
            onClick={() => zoomTo((current) => current - STEP)}
          >
            <Minus className="w-5 h-5" />
          </Button>
          <span className="w-14 text-center text-sm font-medium tabular-nums text-primary">
            {Math.round(view.scale * 100)}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Acercar"
            disabled={view.scale >= MAX_SCALE}
            onClick={() => zoomTo((current) => current + STEP)}
          >
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Restablecer zoom" disabled={!zoomed} onClick={reset}>
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
