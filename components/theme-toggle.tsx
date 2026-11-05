"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar entre modo claro y oscuro"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      {/* El icono visible depende de la clase .dark, así no hay desajuste al hidratar */}
      <Sun className="w-5 h-5 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0 motion-reduce:transition-none" />
      <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100 motion-reduce:transition-none" />
    </Button>
  )
}
