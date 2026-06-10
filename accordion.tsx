export function PenalBlock() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="glass rounded-3xl border-l-4 border-l-slate-900 p-8 shadow-elegant md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl" aria-hidden>⚖️</span>
            <h2 className="text-2xl font-bold md:text-3xl">Artículo 379 del Código Penal</h2>
          </div>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Superar en más de <strong>60 km/h</strong> el límite en vía urbana
            o más de <strong>80 km/h</strong> el límite en vía interurbana puede
            constituir <strong>delito contra la seguridad vial</strong>.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Posibles penas
            </h3>
            <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
              {[
                "Prisión de 3 a 6 meses",
                "Multa de 6 a 12 meses",
                "Trabajos en beneficio de la comunidad",
                "Retirada del permiso de conducir",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 rounded-xl bg-white/50 px-4 py-3">
                  <span className="mt-0.5 text-primary">▸</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
