"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1)
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2)

  return (
    <section
      id="sobre-nosotros"
      className="py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/5 rounded-full animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado por transformar la experiencia de compra digital, conectando a consumidores con
            las mejores opciones de productos y servicios online de forma rápida, imparcial e informada.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <Card
            className={`p-8 border-2 hover:border-primary/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl group bg-gradient-to-br from-white to-primary/5 ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Misión</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Brindar a los consumidores una plataforma confiable e imparcial que les permita comparar precios,
              promociones y beneficios de diferentes servicios y productos online en tiempo real, ahorrando tiempo y
              dinero.
            </p>
          </Card>

          <Card
            className={`p-8 border-2 hover:border-secondary/50 transition-all duration-700 delay-200 transform hover:scale-105 hover:shadow-2xl group bg-gradient-to-br from-white to-secondary/5 ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                <Eye className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Visión</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ser la aplicación líder en comparación digital en Bolivia y la región, reconocida por su imparcialidad,
              innovación y aporte al desarrollo del comercio electrónico y servicios digitales.
            </p>
          </Card>
        </div>

        <div
          ref={valuesRef}
          className={`text-center transition-all duration-1000 ${
            valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary mr-3 animate-pulse" />
            Nuestros Valores
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-sm py-3 px-6 bg-primary text-white border-0 hover:scale-110 transition-transform duration-300 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparencia
            </Badge>
            <Badge className="text-sm py-3 px-6 bg-accent text-white border-0 hover:scale-110 transition-transform duration-300 shadow-lg animation-delay-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovación
            </Badge>
            <Badge className="text-sm py-3 px-6 bg-primary text-white border-0 hover:scale-110 transition-transform duration-300 shadow-lg animation-delay-400">
              <Sparkles className="w-4 h-4 mr-2" />
              Imparcialidad
            </Badge>
            <Badge className="text-sm py-3 px-6 bg-accent text-white border-0 hover:scale-110 transition-transform duration-300 shadow-lg animation-delay-600">
              <Sparkles className="w-4 h-4 mr-2" />
              Cercanía con el usuario
            </Badge>
            <Badge className="text-sm py-3 px-6 bg-primary text-white border-0 hover:scale-110 transition-transform duration-300 shadow-lg animation-delay-800">
              <Sparkles className="w-4 h-4 mr-2" />
              Compromiso con el desarrollo digital
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
