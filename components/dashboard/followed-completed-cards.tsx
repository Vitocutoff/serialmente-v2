type MiniStatCardProps = {
  label: string;
  value: string;
};

function MiniStatCard({ label, value }: MiniStatCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-emerald-400/12" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(16,185,129,0.08),0_0_18px_rgba(16,185,129,0.14)]" />

      <p className="relative z-10 text-sm font-medium text-foreground-muted">
        {label}
      </p>

      <p className="relative z-10 mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
        {value}
      </p>
    </article>
  );
}

export function FollowedCompletedCards() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-3">
      <MiniStatCard label="Seguite" value="0" />
      <MiniStatCard label="Completate" value="0" />
    </section>
  );
}
