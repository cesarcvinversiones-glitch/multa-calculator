export function Hero() {
  const scrollToCalc = () => {
    document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden hero-bg">
      {/* Blobs difuminados */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.25 250) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.18 230) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.1 240) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-28 text-center md:pt-28 md:pb-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Actualizado con la normativa DGT vigente
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-6xl">
          ¿Cuánto sería tu multa por exceso de velocidad?
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
          Calcula en segundos la sanción aproximada por exceso de velocidad en España.
          Obtén información sobre multa económica, descuento por pronto pago, pérdida de puntos
          y posible delito penal.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToCalc}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-elegant transition hover:scale-[1.02] hover:bg-white/95"
          >
            Calcular multa
            <span className="transition group-hover:translate-x-0.5">→</span>
          </button>
          <a
            href="#tabla"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Ver tabla oficial
          </a>
        </div>
      </div>
    </section>
  );
}
