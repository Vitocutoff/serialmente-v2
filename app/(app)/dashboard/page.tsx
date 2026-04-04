import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader userName="Vito" />

      <main className="px-4 pb-8">
        <section className="pt-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm font-medium text-foreground-muted">
              Bentornato
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-white">
              Vito
            </h1>

            <p className="mt-4 max-w-xs text-sm leading-6 text-foreground-muted">
              La tua dashboard personale per seguire serie, progressi e attività.
            </p>
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm text-foreground-muted">
              Blocco di test per generare scroll e verificare l’header sticky.
            </p>
          </div>
        </section>

        <section className="mt-6 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">Continua a guardare</h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie in corso.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">Non iniziate</h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie da iniziare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">Completate</h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie completate.
            </p>
          </div>

          <div className="h-40" />
        </section>
      </main>
    </>
  );
}
