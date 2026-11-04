import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Contacto</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            ¿Tienes preguntas sobre MeConviene? ¿Quieres formar parte de nuestra red de comercios aliados? ¡Contáctanos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@meconviene.app</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+591 XXX-XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Bolivia, Latinoamérica</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h4 className="font-bold text-lg text-foreground mb-3">¿Tienes un comercio?</h4>
              <p className="text-muted-foreground mb-4">
                Únete a nuestra plataforma y llega a más clientes. Obtén insights valiosos sobre tu mercado y aumenta tu
                visibilidad online.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">Solicitar Información para Comercios</Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                  <Input placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Asunto</label>
                <Input placeholder="¿En qué podemos ayudarte?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <Textarea placeholder="Cuéntanos más sobre tu consulta o propuesta..." className="min-h-[120px]" />
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
