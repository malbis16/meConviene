"use client"

import { useState, type MouseEvent } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type NavLink = { href: string; label: string }

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)

  // Cierra el menú y luego navega, para que el bloqueo de scroll del panel no impida bajar a la sección
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
      history.replaceState(null, "", href)
    }, 300)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir menú"
          className="md:hidden group transition-all duration-300 hover:scale-110 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          <Menu className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 motion-reduce:transition-none" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="md:hidden">
        <SheetHeader>
          <SheetTitle className="text-primary">Menú</SheetTitle>
          <SheetDescription className="sr-only">Navegación entre las secciones de la página</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col px-4 gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              className="rounded-md px-3 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-300 motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
