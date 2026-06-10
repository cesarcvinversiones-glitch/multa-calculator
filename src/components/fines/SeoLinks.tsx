const ITEMS = [
  { title: "Multa por ir a 70 en zona de 50", desc: "Sanción leve. Sin pérdida de puntos." },
  { title: "Multa por ir a 90 en zona de 50", desc: "Grave: 400 € y 4 puntos." },
  { title: "Multa por ir a 150 en autopista", desc: "Sanción leve si el límite es 120." },
  { title: "Multa por ir a 180 km/h en autopista", desc: "Grave: 400 € y 4 puntos." },
  { title: "Multa por ir a 200 km/h en autopista", desc: "Muy grave: 600 € y 6 puntos." },
  { title: "Cuándo un exceso de velocidad es delito", desc: "Art. 379.1 CP: +60 urbano / +80 interurbano." },
];

export function SeoLinks() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Multas por velocidad más consultadas</h2>
          <p className="mt-3 text-muted-foreground">
            Casos frecuentes en España con su sanción aproximada.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <a
              key={i.title}
              href="#calculadora"
              className="glass group flex flex-col gap-2 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <h3 className="text-base font-semibold">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
              <span className="mt-2 text-sm font-medium text-primary transition group-hover:translate-x-1">
                Calcular ahora →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
