import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div>
          <p className="font-brand text-2xl">SerialMente</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Track, discover and share TV shows.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-foreground-muted">
            Base foundation pronta. Auth in configurazione.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/sign-in"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Accedi
          </Link>
          <Link
            href="/sign-up"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Registrati
          </Link>
        </div>
      </div>
    </main>
  );
}
