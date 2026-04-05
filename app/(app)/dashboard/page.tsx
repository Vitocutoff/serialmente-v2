import { ContinueWatchingSection } from "@/components/dashboard/continue-watching-section";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FavoritesSection } from "@/components/dashboard/favorites-section";
import { FollowedCompletedCards } from "@/components/dashboard/followed-completed-cards";
import { ListsSection } from "@/components/dashboard/lists-section";
import { ProfileOverviewCard } from "@/components/dashboard/profile-overview-card";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader userName="Vito" />

      <main className="px-4 pb-8 pt-4">
        <ProfileOverviewCard />
        <StatsCards />
        <ContinueWatchingSection />
        <FavoritesSection />
        <ListsSection />
        <FollowedCompletedCards />
      </main>
    </>
  );
}
