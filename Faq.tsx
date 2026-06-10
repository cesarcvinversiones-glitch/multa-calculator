@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-paper: var(--paper);
  --color-paper-ink: var(--paper-ink);
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
}

:root {
  --radius: 1rem;
  --background: oklch(0.985 0.005 240);
  --foreground: oklch(0.18 0.04 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.04 260);
  --primary: oklch(0.55 0.22 255);
  --primary-foreground: oklch(0.99 0 0);
  --muted: oklch(0.96 0.01 250);
  --muted-foreground: oklch(0.5 0.03 255);
  --accent: oklch(0.65 0.2 250);
  --accent-foreground: oklch(0.99 0 0);
  --border: oklch(0.9 0.015 250);
  --ring: oklch(0.6 0.2 255);
  --paper: oklch(0.96 0.02 85);
  --paper-ink: oklch(0.22 0.02 60);

  --hero-gradient: linear-gradient(
    135deg,
    oklch(0.22 0.09 265) 0%,
    oklch(0.32 0.18 258) 35%,
    oklch(0.5 0.22 252) 65%,
    oklch(0.88 0.02 250) 100%
  );
  --glass-bg: color-mix(in oklch, white 60%, transparent);
  --glass-bg-dark: color-mix(in oklch, white 12%, transparent);
  --glass-border: color-mix(in oklch, white 35%, transparent);
  --shadow-elegant: 0 20px 50px -20px oklch(0.22 0.12 260 / 0.35);
  --shadow-soft: 0 8px 30px -10px oklch(0.22 0.12 260 / 0.18);
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 { font-family: var(--font-display); letter-spacing: -0.02em; }
}

@utility glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-soft);
}

@utility glass-dark {
  background: var(--glass-bg-dark);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid color-mix(in oklch, white 18%, transparent);
}

@utility hero-bg {
  background: var(--hero-gradient);
}

@utility shadow-elegant {
  box-shadow: var(--shadow-elegant);
}

@utility paper-card {
  background:
    radial-gradient(circle at 20% 10%, oklch(0.94 0.025 85) 0%, transparent 50%),
    radial-gradient(circle at 80% 90%, oklch(0.93 0.03 75) 0%, transparent 50%),
    oklch(0.96 0.02 85);
  border: 1px solid oklch(0.82 0.04 75);
  box-shadow: 0 1px 0 oklch(1 0 0 / 0.6) inset, 0 10px 25px -15px oklch(0.3 0.05 60 / 0.35);
}
