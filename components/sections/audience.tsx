import { Store, Building2, ShoppingBag, Warehouse, CheckCircle } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Tiendas minoristas",
    benefits: ["Control de inventario", "Punto de venta integrado", "Gestión de clientes"],
  },
  {
    icon: Building2,
    title: "Distribuidoras",
    benefits: ["Rutas de entrega", "Facturación masiva", "Control de créditos"],
  },
  {
    icon: ShoppingBag,
    title: "Comercios en general",
    benefits: ["Multi-sucursal", "Reportes consolidados", "Gestión de proveedores"],
  },
  {
    icon: Warehouse,
    title: "Almacenes",
    benefits: ["Ubicaciones de stock", "Lotes y caducidades", "Picking optimizado"],
  },
];

export function Audience() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Diseñado para pequeñas y medianas empresas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Soluciones adaptadas a las necesidades específicas de cada tipo de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/5 w-fit">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{audience.title}</h3>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {benefit}
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
