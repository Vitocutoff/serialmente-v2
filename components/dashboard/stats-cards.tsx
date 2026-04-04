function TimeUnit({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="min-w-0 text-center">
      <p className="text-xl font-semibold tracking-[-0.03em] text-white">
        {value}
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
        {label}
      </p>
    </div>
  );
}

export function StatsCards() {
  return (
    <section className="mt-4 grid grid-cols-12 gap-3">
      <article className="col-span-8 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <p className="text-center text-sm font-medium text-foreground-muted">
          Tempo visione
        </p>

        <div className="mt-4 grid grid-cols-4 gap-2">
          <TimeUnit value="0" label="Anni" />
          <TimeUnit value="0" label="Mesi" />
          <TimeUnit value="0" label="Giorni" />
          <TimeUnit value="0" label="Ore" />
        </div>
      </article>

      <article className="col-span-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <p className="text-center text-sm font-medium text-foreground-muted">
          Episodi
        </p>

        <div className="mt-4 text-center">
          <p className="text-xl font-semibold tracking-[-0.03em] text-white">
            0
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
            Visti
          </p>
        </div>
      </article>
    </section>
  );
}
