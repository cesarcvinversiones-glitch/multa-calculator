import { useState } from "react";
import { SPEED_LIMITS, calculateFine, type FineResult } from "@/lib/fines";
import { ResultCard } from "./ResultCard";

export function Calculator() {
  const [limit, setLimit] = useState<number>(90);
  const [detected, setDetected] = useState<string>("");
  const [result, setResult] = useState<FineResult | null>(null);

  const handleCalc = (e: React.FormEvent) => {
    e.preventDefault();
    const d = parseInt(detected, 10);
    if (!d || d < 0) return;
    setResult(calculateFine(limit, d));
  };

  return (
    <section id="calculadora" className="relative -mt-20 px-6 pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="glass rounded-3xl p-6 shadow-elegant md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">Calculadora de multa</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Introduce el límite de la vía y la velocidad detectada por el radar.
          </p>

          <form onSubmit={handleCalc} className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium">
                <span aria-hidden>🚦</span> Velocidad máxima permitida
              </span>
              <select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-base font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
              >
                {SPEED_LIMITS.map((l) => (
                  <option key={l} value={l}>{l} km/h</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium">
                <span aria-hidden>🚗</span> Velocidad detectada
              </span>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={400}
                value={detected}
                onChange={(e) => setDetected(e.target.value)}
                placeholder="Ej: 138"
                className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-base font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!detected}
                className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Calcular multa
              </button>
            </div>
          </form>
        </div>

        {result && (
          <div className="mt-6">
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </section>
  );
}
