import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, Package, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Software de gestión de inventarios, ventas y usuarios para PYMEs
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Gestión integral para
            <br />
            <span className="text-muted-foreground">tu negocio</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
            Simplifica la administración de tu inventario, ventas y usuarios con nuestra 
            solución de escritorio potente y fácil de usar. Diseñado para pequeñas y 
            medianas empresas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button asChild size="lg" className="text-base px-8"> */}
              <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/573022775179?text=Hola,%20quiero%20información%20sobre%20el%20sistema"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
              >
                  Solicitar Demo
                </a>
              </div>
              {/* <Link href="#contacto">
                Solicitar Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            {/* </Button> */}
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="#caracteristicas">Ver Características</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card border border-border">
            <Package className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">1,000+</span>
            <span className="text-sm text-muted-foreground">Productos gestionados</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card border border-border">
            <BarChart3 className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">99.9%</span>
            <span className="text-sm text-muted-foreground">Tiempo de actividad</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card border border-border">
            <Users className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">1+</span>
            <span className="text-sm text-muted-foreground">Empresas confían</span>
          </div>
        </div>
      </div>
    </section>
  );
}
