import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-dvh px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-md flex-col justify-between">
        <div className="flex-1" />

        <section className="flex flex-col items-center text-center">
          <div className="relative mb-6 h-24 w-24 sm:h-28 sm:w-28">
            <Image
              src="/logo.png"
              alt="Logo SerialMente"
              fill
              priority
              className="object-contain"
            />
          </div>

          <p className="font-brand text-4xl leading-none text-white">
            SerialMente
          </p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-foreground-muted">
            Tieni traccia delle serie che ami, scopri nuovi titoli e vivi la tua
            esperienza in modo più personale.
          </p>
        </section>

        <section className="mt-10 flex flex-col gap-3">
          <Link
            href="/sign-in"
            className="flex h-12 items-center justify-center rounded-2xl bg-white px-4 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Accedi
          </Link>

          <Link
            href="/sign-up"
            className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Registrati
          </Link>
        </section>
      </div>
    </main>
  );
}
