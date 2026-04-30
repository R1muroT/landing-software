import Link from "next/link";
import { Box } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Box className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">CodeNova</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#caracteristicas" className="transition-colors hover:text-foreground">
              Características
            </Link>
            <Link href="#tecnologia" className="transition-colors hover:text-foreground">
              Tecnología
            </Link>
            <Link href="#equipo" className="transition-colors hover:text-foreground">
              Equipo
            </Link>
            <Link href="#contacto" className="transition-colors hover:text-foreground">
              Contacto
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeNova. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
