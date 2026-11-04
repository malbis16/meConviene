import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/meconviene-logo.png"
            alt="MeConviene Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Sobre Nosotros
          </a>
          <a href="#objetivos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Objetivos
          </a>
          <a href="#canvas" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Business Canvas
          </a>
          <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
          >
            <a href="#contacto">Contacto</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg">Descargar App</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
