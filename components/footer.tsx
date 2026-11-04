import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/meconviene-logo.png"
                alt="MeConviene Logo"
                width={120}
                height={40}
                className="w-auto h-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              La plataforma líder en comparación de productos y servicios que conecta usuarios con las mejores opciones
              de compra online.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">
              Producto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Carreras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 hover:scale-105 transition-transform duration-300">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 hover:bg-primary/5 p-2 rounded-md transition-colors duration-300">
                <Mail className="w-4 h-4 text-primary hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground">info@meconviene.com</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-primary/5 p-2 rounded-md transition-colors duration-300">
                <Phone className="w-4 h-4 text-primary hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground">+591 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-primary/5 p-2 rounded-md transition-colors duration-300">
                <MapPin className="w-4 h-4 text-primary hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground">Santa Cruz, Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
            © 2025 MeConviene. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary hover:underline hover:scale-105 text-sm transition-all duration-300"
            >
              Términos de Servicio
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary hover:underline hover:scale-105 text-sm transition-all duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary hover:underline hover:scale-105 text-sm transition-all duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
