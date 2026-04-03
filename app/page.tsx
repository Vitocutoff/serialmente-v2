import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative h-svh w-full overflow-hidden">
      <Image
        src="/bgApp.png"
        alt="Background SerialMente"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.08)_22%,transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.52)_100%)]" />

      <div className="relative z-10 flex h-full flex-col px-4 pb-6 pt-4">
        <div className="flex-1" />

        <section className="animate-[fadeUp_700ms_ease-out] flex flex-col items-center text-center">
          <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
            <div className="absolute h-24 w-24 rounded-full bg-brand/30 blur-2xl" />

            <div className="relative h-28 w-28">
              <Image
                src="/logo.png"
                alt="Logo SerialMente"
                width={112}
                height={112}
                priority
                className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <p className="font-brand text-4xl text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
            SerialMente
          </p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-foreground-muted">
            Tieni traccia delle tue serie preferite, scopri il tempo che dedichi
            alla visione e molto altro ancora.
          </p>
        </section>

        <section className="mt-10 flex flex-col gap-3">
          <Link
            href="/sign-in"
            className="flex h-12 items-center justify-center rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] transition active:scale-[0.97]"
          >
            Accedi
          </Link>

          <Link
            href="/sign-up"
            className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-white backdrop-blur-xl transition active:scale-[0.97]"
          >
            Registrati
          </Link>
        </section>
      </div>
    </main>
  );
}
