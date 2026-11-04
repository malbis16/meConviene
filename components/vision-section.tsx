import { Card } from "@/components/ui/card"
import { Eye, Globe, Users, Zap, Target } from "lucide-react"

export function VisionSection() {
  return (
    <section id="vision" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra Visión</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Ser la aplicación líder en comparación digital en Bolivia y la región, reconocida por su imparcialidad,
            innovación y aporte al desarrollo del comercio electrónico y servicios digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Liderazgo Regional</h3>
            <p className="text-muted-foreground text-sm">Expandir por Bolivia y la región</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Decisiones Inteligentes</h3>
            <p className="text-muted-foreground text-sm">Facilitando elecciones informadas</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovación Digital</h3>
            <p className="text-muted-foreground text-sm">Tecnología para comparar en tiempo real</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Crecimiento de Negocios</h3>
            <p className="text-muted-foreground text-sm">Oportunidades para comercios digitales</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
