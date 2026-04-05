export function FollowedCompletedCards() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-3">
      <article className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
        <p className="text-sm font-medium text-foreground-muted">
          Seguite
        </p>

        <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
          0
        </p>
      </article>

      <article className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
        <p className="text-sm font-medium text-foreground-muted">
          Completate
        </p>

        <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
          0
        </p>
      </article>
    </section>
  );
}
