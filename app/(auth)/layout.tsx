export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-8 text-center">
          <p className="font-brand text-3xl text-white">SerialMente</p>
          <p className="mt-3 text-sm text-foreground-muted">
            Il tuo spazio per seguire, scoprire e vivere le serie TV.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {children}
        </div>
      </div>
    </main>
  );
}
