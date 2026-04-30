const team = [
  {
    name: "Samuel Gonzales",
    role: "CEO & Fundador",
    initials: "SG",
  },
  {
    name: "Jhon Tellez",
    role: "CTO & Co-Fundador",
    initials: "JT",
  },
];

export function Team() {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Nuestro equipo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Profesionales apasionados por crear soluciones que impulsan el éxito de tu negocio.
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8 flex-wrap max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
