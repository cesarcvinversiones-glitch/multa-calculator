const VEHICLES = [
  { name: "Turismo / Motocicleta", autopista: "120 km/h", convencional: "90 km/h" },
  { name: "Autobús", autopista: "100 km/h", convencional: "90 km/h" },
  { name: "Vehículo derivado de turismo", autopista: "100 km/h", convencional: "90 km/h" },
  { name: "Vehículo mixto adaptable", autopista: "100 km/h", convencional: "90 km/h" },
  { name: "Camión", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Tractocamión", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Furgón / Furgoneta", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Autocaravana > 3.500 kg", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Vehículo articulado", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Automóvil con remolque", autopista: "90 km/h", convencional: "80 km/h" },
  { name: "Bicicleta", autopista: "45 km/h", convencional: "45 km/h" },
  { name: "Ciclomotor", autopista: "45 km/h", convencional: "45 km/h" },
];

export function SpeedLimitsDGT() {
  return (
    <section className="bg-gradient-to-b from-transparent to-muted/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Límites máximos de velocidad en España</h2>
          <p className="mt-3 text-muted-foreground">
            Velocidades genéricas según el tipo de vehículo (fuente: DGT).
          </p>
        </header>

        <div className="glass overflow-hidden rounded-2xl shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/40 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-4">Tipo de vehículo</th>
                  <th className="px-5 py-4">Autopista / Autovía</th>
                  <th className="px-5 py-4">Carretera convencional</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v) => (
                  <tr key={v.name} className="border-t border-border/50">
                    <td className="px-5 py-4 font-medium">{v.name}</td>
                    <td className="px-5 py-4">{v.autopista}</td>
                    <td className="px-5 py-4">{v.convencional}</td>
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
