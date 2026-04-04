import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProfileOverviewCard } from "@/components/dashboard/profile-overview-card";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader userName="Vito" />

      <main className="px-4 pb-8 pt-4">
        <ProfileOverviewCard />
        <StatsCards />

        <section className="mt-6 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">
              Continua a guardare
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie in corso.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">
              Non iniziate
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie da iniziare.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white">
              Completate
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Qui arriveranno le serie completate.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
