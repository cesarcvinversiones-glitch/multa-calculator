export function AdSlot({ label = "Espacio publicitario" }: { label?: string }) {
  return (
    <div className="px-6 py-6">
      <div
        aria-label={label}
        className="mx-auto flex h-24 max-w-4xl items-center justify-center rounded-2xl border border-dashed border-border bg-muted/50 text-xs uppercase tracking-widest text-muted-foreground md:h-28"
      >
        {label}
      </div>
    </div>
  );
}
