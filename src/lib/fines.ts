// Tabla oficial DGT — Anexo IV Ley sobre Tráfico, Circulación y Seguridad Vial
// Tramos por límite aplicable. Cada tramo: [min, max, fine€, points, type]

export type Severity = "none" | "leve" | "grave" | "muy_grave" | "delito";

export interface FineResult {
  severity: Severity;
  emoji: string;
  label: string;
  fine: number;
  earlyPayment: number;
  points: number;
  type: string;
  crime: boolean;
  legalRef: string;
  limit: number;
  detected: number;
}

interface Tier {
  min: number; // exclusivo del límite (min km/h del tramo)
  max: number; // inclusivo
  fine: number;
  points: number;
  type: "Leve" | "Grave" | "Muy grave";
}

// Tabla oficial Anexo IV
const TABLES: Record<number, Tier[]> = {
  20: [
    { min: 21, max: 40, fine: 100, points: 0, type: "Leve" },
    { min: 41, max: 50, fine: 300, points: 2, type: "Grave" },
    { min: 51, max: 60, fine: 400, points: 4, type: "Grave" },
    { min: 61, max: 70, fine: 500, points: 6, type: "Grave" },
    { min: 71, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  30: [
    { min: 31, max: 50, fine: 100, points: 0, type: "Leve" },
    { min: 51, max: 60, fine: 300, points: 2, type: "Grave" },
    { min: 61, max: 70, fine: 400, points: 4, type: "Grave" },
    { min: 71, max: 80, fine: 500, points: 6, type: "Grave" },
    { min: 81, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  40: [
    { min: 41, max: 60, fine: 100, points: 0, type: "Leve" },
    { min: 61, max: 70, fine: 300, points: 2, type: "Grave" },
    { min: 71, max: 80, fine: 400, points: 4, type: "Grave" },
    { min: 81, max: 90, fine: 500, points: 6, type: "Grave" },
    { min: 91, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  50: [
    { min: 51, max: 70, fine: 100, points: 0, type: "Leve" },
    { min: 71, max: 80, fine: 300, points: 2, type: "Grave" },
    { min: 81, max: 90, fine: 400, points: 4, type: "Grave" },
    { min: 91, max: 100, fine: 500, points: 6, type: "Grave" },
    { min: 101, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  60: [
    { min: 61, max: 90, fine: 100, points: 0, type: "Leve" },
    { min: 91, max: 110, fine: 300, points: 2, type: "Grave" },
    { min: 111, max: 120, fine: 400, points: 4, type: "Grave" },
    { min: 121, max: 130, fine: 500, points: 6, type: "Grave" },
    { min: 131, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  70: [
    { min: 71, max: 100, fine: 100, points: 0, type: "Leve" },
    { min: 101, max: 120, fine: 300, points: 2, type: "Grave" },
    { min: 121, max: 130, fine: 400, points: 4, type: "Grave" },
    { min: 131, max: 140, fine: 500, points: 6, type: "Grave" },
    { min: 141, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  80: [
    { min: 81, max: 110, fine: 100, points: 0, type: "Leve" },
    { min: 111, max: 130, fine: 300, points: 2, type: "Grave" },
    { min: 131, max: 140, fine: 400, points: 4, type: "Grave" },
    { min: 141, max: 150, fine: 500, points: 6, type: "Grave" },
    { min: 151, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  90: [
    { min: 91, max: 120, fine: 100, points: 0, type: "Leve" },
    { min: 121, max: 140, fine: 300, points: 2, type: "Grave" },
    { min: 141, max: 150, fine: 400, points: 4, type: "Grave" },
    { min: 151, max: 160, fine: 500, points: 6, type: "Grave" },
    { min: 161, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  100: [
    { min: 101, max: 130, fine: 100, points: 0, type: "Leve" },
    { min: 131, max: 150, fine: 300, points: 2, type: "Grave" },
    { min: 151, max: 160, fine: 400, points: 4, type: "Grave" },
    { min: 161, max: 170, fine: 500, points: 6, type: "Grave" },
    { min: 171, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  110: [
    { min: 111, max: 140, fine: 100, points: 0, type: "Leve" },
    { min: 141, max: 160, fine: 300, points: 2, type: "Grave" },
    { min: 161, max: 170, fine: 400, points: 4, type: "Grave" },
    { min: 171, max: 180, fine: 500, points: 6, type: "Grave" },
    { min: 181, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
  120: [
    { min: 121, max: 150, fine: 100, points: 0, type: "Leve" },
    { min: 151, max: 170, fine: 300, points: 2, type: "Grave" },
    { min: 171, max: 180, fine: 400, points: 4, type: "Grave" },
    { min: 181, max: 190, fine: 500, points: 6, type: "Grave" },
    { min: 191, max: Infinity, fine: 600, points: 6, type: "Muy grave" },
  ],
};

export const SPEED_LIMITS = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

export function calculateFine(limit: number, detected: number): FineResult {
  const base = {
    limit,
    detected,
    legalRef: "Anexo IV, RDL 6/2015 (Ley sobre Tráfico)",
  };

  if (!detected || detected <= limit) {
    return {
      ...base,
      severity: "none",
      emoji: "🟢",
      label: "Sin sanción",
      fine: 0,
      earlyPayment: 0,
      points: 0,
      type: "—",
      crime: false,
    };
  }

  // Delito penal Art. 379.1 CP
  const isUrban = limit <= 50;
  const exceso = detected - limit;
  const isCrime = isUrban ? exceso > 60 : exceso > 80;

  if (isCrime) {
    return {
      ...base,
      severity: "delito",
      emoji: "⚫",
      label: "Posible delito penal",
      fine: 0,
      earlyPayment: 0,
      points: 6,
      type: "Delito (Art. 379.1 CP)",
      crime: true,
      legalRef: "Art. 379.1 Código Penal",
    };
  }

  const table = TABLES[limit];
  const tier = table?.find((t) => detected >= t.min && detected <= t.max);

  if (!tier) {
    return {
      ...base,
      severity: "none",
      emoji: "🟢",
      label: "Sin sanción",
      fine: 0,
      earlyPayment: 0,
      points: 0,
      type: "—",
      crime: false,
    };
  }

  const severity: Severity =
    tier.type === "Leve" ? "leve" : tier.type === "Grave"
      ? (tier.points >= 4 ? "grave" : "grave")
      : "muy_grave";

  const meta = {
    leve: { emoji: "🟡", label: "Sanción leve" },
    grave: { emoji: "🟠", label: "Sanción grave" },
    muy_grave: { emoji: "🔴", label: "Sanción muy grave" },
  } as const;

  const m = meta[severity as "leve" | "grave" | "muy_grave"];

  return {
    ...base,
    severity,
    emoji: m.emoji,
    label: m.label,
    fine: tier.fine,
    earlyPayment: Math.round(tier.fine * 0.5),
    points: tier.points,
    type: tier.type,
    crime: false,
  };
}

export function getTableForLimit(limit: number): Tier[] {
  return TABLES[limit] ?? [];
}
