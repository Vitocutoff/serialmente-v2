type TimeUnitProps = {
  value: string;
  label: string;
};

function TimeUnit({ value, label }: TimeUnitProps) {
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

type StatCardProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

function StatCard({ className = "", title, children }: StatCardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-400/12" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(16,185,129,0.08),0_0_18px_rgba(16,185,129,0.14)]" />

      <p className="relative z-10 text-center text-sm font-medium text-foreground-muted">
        {title}
      </p>

      <div className="relative z-10">{children}</div>
    </article>
  );
}

export function StatsCards() {
  return (
    <section className="mt-4 grid grid-cols-12 gap-3">
      <StatCard className="col-span-8" title="Tempo visione">
        <div className="mt-4 grid grid-cols-4 gap-2">
          <TimeUnit value="0" label="Anni" />
          <TimeUnit value="0" label="Mesi" />
          <TimeUnit value="0" label="Giorni" />
          <TimeUnit value="0" label="Ore" />
        </div>
      </StatCard>

      <StatCard className="col-span-4" title="Episodi">
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold tracking-[-0.03em] text-white">
            0
          </p>

          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
            Visti
          </p>
        </div>
      </StatCard>
    </section>
  );
}
