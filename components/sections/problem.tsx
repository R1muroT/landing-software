import { AlertTriangle, Clock, FileSpreadsheet, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Hojas de cálculo desorganizadas",
    description: "Múltiples archivos Excel con información duplicada y desactualizada que dificultan el control real del negocio.",
  },
  {
    icon: Clock,
    title: "Pérdida de tiempo",
    description: "Horas dedicadas a tareas manuales que podrían automatizarse, restando tiempo para lo que realmente importa.",
  },
  {
    icon: TrendingDown,
    title: "Falta de visibilidad",
    description: "Sin reportes claros ni métricas precisas, tomar decisiones estratégicas se convierte en un juego de adivinanzas.",
  },
  {
    icon: AlertTriangle,
    title: "Errores humanos",
    description: "La gestión manual incrementa los errores en inventario, precios y facturación, afectando la rentabilidad.",
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            ¿Tu negocio enfrenta estos desafíos?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            La gestión manual de tu empresa consume recursos valiosos y limita tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-destructive/10">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
