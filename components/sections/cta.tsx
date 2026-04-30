import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-primary p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-primary-foreground text-balance">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 text-pretty">
              Agenda una demostración gratuita y descubre cómo GestorPro puede 
              optimizar las operaciones de tu empresa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link href="mailto:contacto@gestorpro.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Solicitar Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="tel:+521234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Sin compromiso
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Configuración asistida
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Soporte técnico incluido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
