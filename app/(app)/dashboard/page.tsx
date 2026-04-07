"use client";

import { useState } from "react";

import { ContinueWatchingSection } from "@/components/dashboard/continue-watching-section";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FavoritesSection } from "@/components/dashboard/favorites-section";
import { FollowedCompletedCards } from "@/components/dashboard/followed-completed-cards";
import { ListsSection } from "@/components/dashboard/lists-section";
import { ProfileOverviewCard } from "@/components/dashboard/profile-overview-card";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  const [nickname, setNickname] = useState("Scegli nome");

  return (
    <>
      <DashboardHeader userName={nickname} />

      <main className="px-4 pt-4 pb-10">
        <div className="space-y-0">
          <ProfileOverviewCard
            nickname={nickname}
            onChangeNickname={setNickname}
          />

          <StatsCards />
          <ContinueWatchingSection />
          <FavoritesSection />
          <ListsSection />
          <FollowedCompletedCards />
        </div>
      </main>
    </>
  );
}
