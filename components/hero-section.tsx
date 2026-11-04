"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Smartphone, TrendingUp, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function HeroSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation(0.2)
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation(0.2)
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation(0.2)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-accent/10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/5 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/3 rounded-full animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/images/meconviene-logo.png"
                alt="MeConviene Logo"
                width={600}
                height={240}
                className="h-40 md:h-52 w-auto transform hover:scale-105 transition-all duration-300 drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <div
            ref={subtitleRef}
            className={`transition-all duration-1000 delay-200 ${
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 italic">
              "Tus mejores opciones, en un solo lugar"
            </p>
          </div>

          <div
            ref={descriptionRef}
            className={`transition-all duration-1000 delay-400 ${
              descriptionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
              La primera app que centraliza precios, promociones y ofertas de todos los productos y servicios online.
              Ahorra tiempo y dinero con cada compra.
            </p>
          </div>

          <div
            ref={buttonsRef}
            className={`transition-all duration-1000 delay-600 ${
              buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Descargar App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mt-16">
          <Card
            className={`p-6 text-center border-2 hover:border-primary/50 transition-all duration-700 transform hover:scale-105 hover:shadow-xl group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <Search className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-primary">Búsqueda Inteligente</h3>
            <p className="text-muted-foreground">Encuentra el mejor precio para tu producto favorito en segundos</p>
          </Card>

          <Card
            className={`p-6 text-center border-2 hover:border-secondary/50 transition-all duration-700 delay-200 transform hover:scale-105 hover:shadow-xl group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <TrendingUp className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-secondary">Comparación en Tiempo Real</h3>
            <p className="text-muted-foreground">Precios actualizados de tiendas y plataformas de comercio online</p>
          </Card>

          <Card
            className={`p-6 text-center border-2 hover:border-accent/50 transition-all duration-700 delay-400 transform hover:scale-105 hover:shadow-xl group ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
              <Zap className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-accent">Experiencia Rápida</h3>
            <p className="text-muted-foreground">Interfaz optimizada para decisiones rápidas y eficientes</p>
          </Card>
        </div>

        <div ref={statsRef} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div
            className={`transition-all duration-1000 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl font-bold text-primary mb-2">+1000</div>
            <div className="text-muted-foreground">Comercios Conectados</div>
          </div>
          <div
            className={`transition-all duration-1000 delay-200 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl font-bold text-secondary mb-2">50%</div>
            <div className="text-muted-foreground">Ahorro Promedio</div>
          </div>
          <div
            className={`transition-all duration-1000 delay-400 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Disponibilidad</div>
          </div>
        </div>
      </div>
    </section>
  )
}
