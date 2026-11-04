"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function BusinessCanvasSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1)
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2)

  return (
    <section
      id="canvas"
      className="relative py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-accent/10 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/5 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/3 rounded-full animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Business Model Canvas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Nuestro modelo de negocio estructurado para crear, entregar y capturar valor
          </p>
        </div>

        <div
          ref={imageRef}
          className={`flex justify-center transition-all duration-1000 delay-200 ${
            imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Business%20Plan%20Presentation%20in%20Dark%20Purple%20and%20Pink%20Geometric%20Style%20%282%29-A8ZSV1kYzdUEHbugKEUB4AEXfaVfSN.png"
            alt="Business Model Canvas - MeConviene"
            className="w-full max-w-6xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 border border-border/20"
          />
        </div>

        <div
          ref={ctaRef}
          className={`mt-16 text-center transition-all duration-1000 delay-400 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para revolucionar la experiencia de compra online?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a nosotros en la transformación digital del comercio. Conecta con miles de usuarios que buscan las
              mejores opciones de compra online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Contactar Ventas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
