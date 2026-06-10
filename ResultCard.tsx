export const FAQ_ITEMS = [
  {
    q: "¿Cuánto es la multa por ir a 70 km/h en una zona de 50?",
    a: "Es una infracción leve: 100 € de multa (50 € con pronto pago) y no implica pérdida de puntos del carnet.",
  },
  {
    q: "¿Cuánto es la multa por ir a 150 km/h en autopista?",
    a: "En una vía con límite de 120 km/h se considera infracción leve: 100 € (50 € con pronto pago) y 0 puntos.",
  },
  {
    q: "¿Cuántos puntos se pierden por exceso de velocidad?",
    a: "Entre 0 y 6 puntos según el tramo: 0 en infracciones leves, 2/4/6 en graves y 6 en muy graves.",
  },
  {
    q: "¿Existe descuento por pronto pago?",
    a: "Sí, las sanciones económicas tienen una reducción del 50% si se abonan en los 20 días naturales siguientes a la notificación.",
  },
  {
    q: "¿Cuándo puede ser delito penal?",
    a: "Cuando se supera el límite en más de 60 km/h en vía urbana o más de 80 km/h en vía interurbana (Art. 379.1 CP).",
  },
];

export function Faq() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
        </header>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="glass group rounded-2xl p-5 transition open:shadow-elegant"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold">
                {item.q}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
