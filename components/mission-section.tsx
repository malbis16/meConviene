import { Card } from "@/components/ui/card"
import { Target } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mision" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra Misión</h2>
        </div>

        <Card className="p-8 md:p-12 text-center border-2">
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            <span className="text-primary font-semibold">Brindar a los consumidores</span> una plataforma confiable e
            imparcial que les permita comparar precios, promociones y beneficios de diferentes servicios y productos
            online en tiempo real,
            <span className="text-secondary font-semibold"> ahorrando tiempo y dinero</span>, y ofreciendo mayor
            visibilidad a comercios y plataformas digitales.
          </p>
        </Card>
      </div>
    </section>
  )
}
