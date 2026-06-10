# Calculadora de Multas por Exceso de Velocidad (España)

## Nota sobre el stack
La plantilla base de Lovable es TanStack Start (no Vite+React "pelado"). Reemplazar el bootstrap rompería el entorno de preview. Solución pragmática que cumple tu requisito funcional:

- Toda la app vive en **una única ruta `/`** (`src/routes/index.tsx`).
- **Cero** server functions, cero `server.ts` activo, cero loaders, cero auth, cero pagos, cero Cloud.
- Compila a HTML/JS/CSS estático desplegable en Vercel/cualquier CDN.
- Resultado equivalente a "React + Vite puro" para el usuario final; solo cambia el andamiaje interno.

Si más adelante quieres migrar a Vite plano, es trivial portar los componentes (son JSX/TS puros sin APIs de TanStack).

## Estructura de archivos
```text
src/
  routes/
    index.tsx              # única página, ensambla las secciones
    __root.tsx             # ajustes SEO globales (title, description, OG, JSON-LD)
  components/fines/
    Hero.tsx
    Calculator.tsx
    ResultCard.tsx
    SanctionsTable.tsx     # tabla oficial de tramos
    SpeedLimitsDGT.tsx     # límites por tipo de vehículo
    NewsCards.tsx          # 3 curiosidades estilo recorte
    SeoLinks.tsx           # tarjetas "multas más consultadas"
    Faq.tsx
    PenalBlock.tsx         # Art. 379 CP
    AdSlot.tsx             # placeholder "Espacio publicitario"
    Footer.tsx
  lib/
    fines.ts               # lógica pura de cálculo + tabla DGT tipada
  styles.css               # tokens glassmorphism (gradientes, blur, sombras)
```

## Lógica de cálculo (`lib/fines.ts`)
Tabla oficial DGT (Anexo IV Ley Tráfico). Función `calculateFine(limit, detected)` devuelve:

```ts
type Severity = "none" | "leve" | "grave" | "muy_grave" | "delito";
interface Result {
  severity: Severity;
  fine: number;        // €
  earlyPayment: number;// 50% si aplica
  points: number;
  type: string;        // "Leve" | "Grave" | "Muy grave"
  crime: boolean;
  legalRef: string;
  emoji: "🟢"|"🟡"|"🟠"|"🔴"|"⚫";
}
```

Tramos (ejemplo límite 90): 91–110 leve 100€/0pt; 111–130 grave 300€/2pt; 131–140 grave 400€/4pt; 141–150 grave 500€/6pt; 151+ muy grave 600€/6pt. Tabla completa para los 11 límites del selector. Delito penal si `detected − limit > 60` (urbano, lim ≤50) o `> 80` (interurbano). Pronto pago = 50% salvo muy graves sin reducción cuando proceda.

## Diseño
- Tailwind v4 con tokens en `src/styles.css`:
  - `--bg-hero`: degradado `oklch` azul oscuro → azul eléctrico → gris claro.
  - `--glass-bg`, `--glass-border`, `--shadow-elegant`, `--blur-card`.
  - Tipografía: Space Grotesk (display) + Inter (body) vía `<link>` en `__root.tsx`.
- Hero con dos "blobs" circulares difuminados (absolute, blur-3xl, opacidad baja).
- Tarjetas: `backdrop-blur`, borde semitransparente, `rounded-2xl`, sombra suave.
- Noticias: variante "papel antiguo" (fondo crema, borde fino, serif para titular, leve textura via gradient sutil).
- Semáforo de resultado: badge grande con emoji + color según severidad.
- Responsive mobile-first; tablas con scroll horizontal en móvil.

## Contenido (literal del brief)
- Hero: título, subtítulo y botón "Calcular multa" (scroll a calculadora).
- Calculadora: select 20–120 km/h + input numérico vacío (placeholder, sin `0`).
- Resultado: tarjeta con los 8 datos + estado "Sin sanción" cuando proceda.
- Tabla de sanciones completa, bloque DGT con todos los tipos de vehículo listados, 3 noticias curiosas, 6 tarjetas SEO, FAQ (5 preguntas), bloque delito penal Art. 379 CP, footer con disclaimer + "by Inusual".
- 3 `AdSlot` placeholders: bajo Hero, entre calculadora y noticias, antes del footer.

## SEO
- `__root.tsx`: viewport, charset, OG site_name, JSON-LD `WebSite`.
- `index.tsx` `head()`:
  - title: "Calculadora de Multas por Exceso de Velocidad en España"
  - description del brief
  - og:title, og:description, og:type=website, og:url="/"
  - canonical "/"
  - JSON-LD `FAQPage` con las 5 preguntas.
- Único `<h1>` en Hero, `<h2>` por sección, `<h3>` dentro.
- Sin imágenes pesadas, sin fuentes externas innecesarias, tablas semánticas.

## Fuera de alcance
Backend, login, pagos, scripts reales de AdSense, generación de imágenes, multi-página/rutas adicionales.
