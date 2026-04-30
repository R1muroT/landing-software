import { Monitor, Database, Code } from "lucide-react";

const technologies = [
  {
    icon: Code,
    name: "C# (.NET)",
    description: "Framework robusto de Microsoft para desarrollo de aplicaciones empresariales de alto rendimiento.",
    features: ["Código compilado", "Tipado fuerte", "Ecosistema maduro"],
  },
  {
    icon: Database,
    name: "SQL Server",
    description: "Motor de base de datos líder en la industria con características avanzadas de seguridad y escalabilidad.",
    features: ["Alta disponibilidad", "Copias automáticas", "Transacciones ACID"],
  },
  {
    icon: Monitor,
    name: "Aplicación de escritorio",
    description: "Software nativo que aprovecha todo el potencial de tu hardware para un rendimiento excepcional.",
    features: ["Sin conexión requerida", "Inicio rápido", "Integración con Windows"],
  },
];

export function TechStack() {
  return (
    <section id="tecnologia" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Tecnología de confianza
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Construido con las tecnologías más confiables y probadas del mercado empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border"
            >
              <div className="mb-6 p-4 rounded-xl bg-primary w-fit">
                <tech.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {tech.description}
              </p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
