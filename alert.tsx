import { useState } from "react";
import { SPEED_LIMITS, getTableForLimit } from "@/lib/fines";

export function SanctionsTable() {
  const [limit, setLimit] = useState(90);
  const rows = getTableForLimit(limit);

  return (
    <section id="tabla" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Tabla oficial de sanciones</h2>
          <p className="mt-3 text-muted-foreground">
            Selecciona un límite para ver los tramos, multas y puntos del carnet.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {SPEED_LIMITS.map((l) => (
            <button
              key={l}
              onClick={() => setLimit(l)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                limit === l
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "glass hover:bg-white/70"
              }`}
            >
              {l} km/h
            </button>
          ))}
        </div>

        <div className="glass overflow-hidden rounded-2xl shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/40 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-4">Velocidad detectada</th>
                  <th className="px-5 py-4">Tipo</th>
                  <th className="px-5 py-4">Multa</th>
                  <th className="px-5 py-4">Pronto pago</th>
                  <th className="px-5 py-4">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((t, i) => (
                  <tr key={i} className="border-t border-border/50">
                    <td className="px-5 py-4 font-medium">
                      {t.max === Infinity ? `Más de ${t.min - 1}` : `${t.min} – ${t.max}`} km/h
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          t.type === "Leve"
                            ? "bg-amber-100 text-amber-800"
                            : t.type === "Grave"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold">{t.fine} €</td>
                    <td className="px-5 py-4 text-muted-foreground">{Math.round(t.fine * 0.5)} €</td>
                    <td className="px-5 py-4">{t.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
