const NEWS = [
  {
    emoji: "🐶",
    medio: "HuffPost",
    titular: "La foto de radar más surrealista: parecía que el perro conducía",
    resumen:
      "La fotografía captada por el radar mostraba a un perro ocupando gran parte del asiento del conductor, generando una imagen viral que parecía mostrar al animal conduciendo.",
  },
  {
    emoji: "🏘️",
    medio: "El País Motor",
    titular: "Un radar puso más de 4.000 multas al día en un pueblo de 120 habitantes",
    resumen:
      "Un pequeño municipio instaló un radar que terminó registrando decenas de miles de infracciones en pocas semanas.",
  },
  {
    emoji: "🏎️",
    medio: "La Vanguardia",
    titular: "Un radar detectó un coche a 413 km/h",
    resumen:
      "Una velocidad extraordinaria captada por un radar generó enorme repercusión mediática por superar ampliamente los registros habituales.",
  },
];

export function NewsCards() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Curiosidades sobre radares y multas</h2>
          <p className="mt-3 text-muted-foreground">Tres historias reales que se hicieron virales.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.titular}
              className="paper-card rounded-2xl p-6 transition hover:-translate-y-1"
              style={{ color: "var(--paper-ink)" }}
            >
              <div className="flex items-center justify-between border-b border-current/20 pb-3">
                <span className="text-3xl" aria-hidden>{n.emoji}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest opacity-70">
                  {n.medio}
                </span>
              </div>
              <h3
                className="mt-4 text-xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {n.titular}
              </h3>
              <p className="mt-3 text-sm opacity-80">{n.resumen}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
