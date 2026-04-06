import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-dvh w-full">
      {/* Mobile background */}
      <Image
        src="/bgApp.png"
        alt="Background SerialMente"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="object-cover md:hidden"
      />

      {/* Desktop background */}
      <Image
        src="/bgAppDesktop.png"
        alt="Background SerialMente desktop"
        fill
        priority
        sizes="(min-width: 768px) 100vw"
        className="hidden object-cover md:block"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0
                   bg-linear-to-b
                   from-black/30
                   via-black/45
                   to-black/80
                   md:from-black/20
                   md:via-black/30
                   md:to-black/70"
      />

      {/* Glow */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.08)_22%,transparent_48%)]
                   md:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.06)_18%,transparent_38%)]"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0
                   bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.52)_100%)]
                   md:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.16)_68%,rgba(0,0,0,0.52)_100%)]"
      />

      {/* Content */}
      <div
        className="relative z-10
                   flex
                   min-h-dvh
                   items-center
                   justify-center
                   px-4
                   py-6"
      >
        <div className="w-full max-w-88">
          <p
            className="mb-5
                       text-center
                       font-brand
                       text-4xl
                       text-white
                       drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]
                       md:mb-6 md:text-5xl"
          >
            SerialMente
          </p>

          {children}
        </div>
      </div>
    </main>
  );
}
