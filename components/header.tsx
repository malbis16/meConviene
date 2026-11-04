import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#canvas", label: "Business Canvas" },
  { href: "#contacto", label: "Contacto" },
]

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-muted-foreground hover:text-primary font-medium transition-all duration-300 hover:-translate-y-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <a href="#contacto">Contacto</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0">
            Descargar App
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden group transition-all duration-300 hover:scale-110 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <Menu className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 motion-reduce:transition-none" />
          </Button>
        </div>
      </div>
    </header>
  )
}
