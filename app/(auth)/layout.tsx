import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-4 h-20 w-20">
            <Image
              src="/logo.png"
              alt="Logo SerialMente"
              width={80}
              height={80}
              priority
              className="object-contain"
            />
          </div>

          <p className="font-brand text-3xl text-white">SerialMente</p>

          <p className="mt-3 max-w-xs text-sm leading-6 text-foreground-muted">
            Accedi al tuo spazio personale dedicato alle serie TV.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {children}
        </div>
      </div>
    </main>
  );
}
