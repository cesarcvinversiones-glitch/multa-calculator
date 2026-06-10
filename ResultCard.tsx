export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs leading-relaxed text-muted-foreground">
          La información ofrecida es orientativa y puede variar según la normativa vigente,
          márgenes aplicados, tipo de vía, vehículo y circunstancias concretas.
          Consulte siempre la notificación oficial o la normativa de la DGT.
        </p>
        <p className="mt-6 text-xs font-medium text-muted-foreground/70">
          by <span className="font-semibold text-foreground/80">Inusual</span>
        </p>
      </div>
    </footer>
  );
}
