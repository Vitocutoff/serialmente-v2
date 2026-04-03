import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-svh w-full">
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

      <div className="relative z-10 flex min-h-svh items-center justify-center px-4 py-6">
        <div className="w-full max-w-88">
          <p className="mb-5 text-center font-brand text-4xl text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
            SerialMente
          </p>

          {children}
        </div>
      </div>
    </main>
  );
}
