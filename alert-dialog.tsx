import type { FineResult } from "@/lib/fines";

const severityStyles: Record<string, string> = {
  none: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/30",
  leve: "from-amber-300/20 to-amber-300/5 border-amber-400/40",
  grave: "from-orange-500/20 to-orange-500/5 border-orange-500/40",
  muy_grave: "from-red-500/20 to-red-500/5 border-red-500/40",
  delito: "from-slate-900/30 to-slate-900/10 border-slate-700/50",
};

export function ResultCard({ result }: { result: FineResult }) {
  const tone = severityStyles[result.severity];

  if (result.severity === "none") {
    return (
      <div className={`glass rounded-3xl border bg-gradient-to-br p-8 ${tone}`}>
        <div className="flex items-center gap-3 text-2xl font-bold">
          <span aria-hidden className="text-3xl">{result.emoji}</span>
          {result.label}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          No existe sanción porque la velocidad introducida no supera el límite seleccionado.
        </p>
      </div>
    );
  }

  return (
    <div className={`glass rounded-3xl border bg-gradient-to-br p-6 shadow-elegant md:p-8 ${tone}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span aria-hidden className="text-3xl">{result.emoji}</span>
        <h3 className="text-2xl font-bold">{result.label}</h3>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        <Row icon="🚦" label="Límite aplicable" value={`${result.limit} km/h`} />
        <Row icon="🚗" label="Velocidad detectada" value={`${result.detected} km/h`} />
        {!result.crime && (
          <>
            <Row icon="💰" label="Multa económica" value={`${result.fine} €`} highlight />
            <Row icon="🏷️" label="Pronto pago (50%)" value={`${result.earlyPayment} €`} />
          </>
        )}
        <Row icon="🎯" label="Puntos del carnet" value={`${result.points} puntos`} />
        <Row icon="📋" label="Tipo de infracción" value={result.type} />
        <Row icon="⚖️" label="Posible delito penal" value={result.crime ? "Sí" : "No"} />
        <Row icon="📜" label="Referencia legal" value={result.legalRef} />
      </dl>

      {result.crime && (
        <div className="mt-6 rounded-2xl border border-slate-700/40 bg-slate-900/5 p-4 text-sm">
          Este caso podría ser constitutivo de <strong>delito contra la seguridad vial</strong>
          {" "}(Art. 379.1 CP). Las penas pueden incluir prisión de 3 a 6 meses, multa,
          trabajos comunitarios y retirada del permiso.
        </div>
      )}
    </div>
  );
}

function Row({
  icon,
  label,
  value,
  highlight,
}: { icon: string; label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl bg-white/50 px-4 py-3 backdrop-blur">
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <span aria-hidden>{icon}</span>
        {label}
      </span>
      <span className={`text-right text-sm font-semibold ${highlight ? "text-lg text-primary" : ""}`}>
        {value}
      </span>
    </div>
  );
}
