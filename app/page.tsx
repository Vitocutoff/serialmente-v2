import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative h-svh w-full overflow-hidden">
      {/* Background mobile */}
      <Image
        src="/bgApp.png"
        alt="Background SerialMente mobile"
        fill
        priority
        className="object-cover md:hidden"
      />

      {/* Background desktop */}
      <Image
        src="/bgAppDesktop.png"
        alt="Background SerialMente desktop"
        fill
        priority
        className="hidden object-cover md:block"
      />

      {/* Overlay base */}
      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/45 to-black/80 md:from-black/20 md:via-black/35 md:to-black/75" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.08)_22%,transparent_48%)] md:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16)_0%,rgba(139,92,246,0.07)_18%,transparent_42%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.52)_100%)] md:bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.56)_100%)]" />

      <div className="relative z-10 flex h-full flex-col px-4 pb-6 pt-4 md:px-8 md:pb-10 md:pt-8">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <section className="animate-[fadeUp_700ms_ease-out] flex flex-col items-center">
            <div className="relative mb-6 flex h-28 w-28 items-center justify-center md:mb-8 md:h-36 md:w-36">
              <div className="absolute h-24 w-24 rounded-full bg-brand/30 blur-2xl md:h-32 md:w-32 md:blur-3xl" />

              <div className="relative h-28 w-28 md:h-36 md:w-36">
                <Image
                  src="/logo.png"
                  alt="Logo SerialMente"
                  fill
                  priority
                  sizes="(max-width: 767px) 112px, 144px"
                  className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] md:drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <p className="font-brand text-4xl text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-6xl xl:text-7xl">
              SerialMente
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-foreground-muted md:mt-6 md:max-w-2xl md:text-base md:leading-8 xl:text-lg">
              Tieni traccia delle tue serie preferite, scopri il tempo che
              dedichi alla visione e vivi la tua esperienza in modo più
              personale.
            </p>
          </section>

          {/* CTA mobile */}
          <section className="mt-10 flex w-full flex-col gap-3 md:hidden">
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

          {/* CTA desktop */}
          <section className="mt-10 hidden flex-wrap items-center justify-center gap-4 md:flex">
            <Link
              href="/sign-in"
              className="flex h-12 min-w-45 items-center justify-center rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-8 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(139,92,246,0.32)] transition hover:scale-[1.01]"
            >
              Accedi
            </Link>

            <Link
              href="/sign-up"
              className="flex h-12 min-w-45 items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              Registrati
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
