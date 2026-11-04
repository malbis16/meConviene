import { Card } from "@/components/ui/card"
import { Target, TrendingUp, Smartphone, Award, Zap, BarChart3 } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: Target,
      title: "Información centralizada y confiable",
      description:
        "Proporcionar datos que permitan ahorrar tiempo y dinero a los usuarios al momento de comprar o contratar servicios online",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de visibilidad para comercios",
      description: "Generar publicidad segmentada para comercios y plataformas digitales, incluyendo pequeños negocios",
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Reportes y análisis de datos",
      description:
        "Ofrecer insights para apoyar la toma de decisiones estratégicas de comercios y plataformas asociadas",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Impulsar la adopción digital",
      description: "Promover la transformación digital del comercio online en Bolivia y la región",
      color: "primary",
    },
    {
      icon: Award,
      title: "Posicionarse como plataforma líder",
      description:
        "Ser la opción confiable y preferida por usuarios para comparar precios y promociones en diversas categorías",
      color: "secondary",
    },
  ]

  return (
    <section
      id="objetivos"
      className="py-20 px-4 bg-gradient-to-br from-background to-muted/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-5 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-10 w-16 h-16 bg-secondary/5 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float animation-delay-800"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 opacity-0 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nuestros Objetivos
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {objectives.map((objective, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-fade-in-scale p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-${objective.color}/50 group bg-gradient-to-br from-white to-${objective.color}/5 w-full sm:w-80 lg:w-72`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                    objective.color === "primary"
                      ? "from-primary/20 to-primary/10"
                      : objective.color === "secondary"
                        ? "from-secondary/20 to-secondary/10"
                        : "from-accent/20 to-accent/10"
                  } group-hover:animate-pulse`}
                >
                  <objective.icon
                    className={`w-10 h-10 ${
                      objective.color === "primary"
                        ? "text-primary"
                        : objective.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    } group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-bold text-xl mb-3 text-balance ${
                      objective.color === "primary"
                        ? "text-primary"
                        : objective.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  >
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 opacity-0 animate-slide-in-up animation-delay-600">
          <Card className="p-10 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/30 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-primary mr-3 group-hover:animate-pulse" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Objetivo General
              </h3>
            </div>
            <p className="text-xl text-muted-foreground text-balance max-w-4xl mx-auto leading-relaxed">
              <strong className="text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Facilitar la toma de decisiones inteligentes para los consumidores digitales
              </strong>{" "}
              mediante una plataforma imparcial que centraliza y compara precios, promociones y beneficios de múltiples
              categorías online, al mismo tiempo que genera valor para comercios y plataformas digitales.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
