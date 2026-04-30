import { Package, Users, BarChart3, Shield, Zap, Database } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventario en tiempo real",
    description: "Control total de tu stock con alertas automáticas, seguimiento de productos y gestión de proveedores integrada.",
  },
  {
    icon: Users,
    title: "Gestión de usuarios",
    description: "Administra permisos y roles de tu equipo. Control de acceso granular para proteger la información sensible.",
  },
  {
    icon: BarChart3,
    title: "Reportes de ventas",
    description: "Dashboards interactivos con métricas clave. Analiza tendencias, márgenes y rendimiento en tiempo real.",
  },
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description: "Protección de datos con encriptación de nivel empresarial. Copias de seguridad automáticas y recuperación.",
  },
  {
    icon: Zap,
    title: "Rendimiento óptimo",
    description: "Aplicación de escritorio nativa que funciona sin conexión a internet. Velocidad y estabilidad garantizadas.",
  },
  {
    icon: Database,
    title: "Base de datos robusta",
    description: "SQL Server para máxima confiabilidad. Escalabilidad para crecer con tu negocio sin limitaciones.",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Todo lo que necesitas para gestionar tu negocio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Herramientas poderosas diseñadas para simplificar las operaciones diarias y 
            maximizar la productividad de tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 p-3 rounded-xl bg-accent/10 w-fit">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
