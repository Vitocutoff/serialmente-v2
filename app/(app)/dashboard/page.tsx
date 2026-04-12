"use client";

import { useState } from "react";
import { Bell, Ellipsis } from "lucide-react";

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
      {/* MOBILE */}
      <div className="md:hidden">
        <DashboardHeader userName={nickname} />

        <main className="px-4 pt-4 pb-10">
          <ProfileOverviewCard
            nickname={nickname}
            onChangeNickname={setNickname}
          />

          <StatsCards />
          <ContinueWatchingSection />
          <FavoritesSection />
          <ListsSection />
          <FollowedCompletedCards />
        </main>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <main className="space-y-6">
          {/* Top header desktop */}
          <section className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-foreground-muted">
                Bentornato
              </p>

              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white xl:text-5xl">
                {nickname}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground-muted xl:text-[15px]">
                La tua dashboard personale per seguire serie, preferiti, liste e
                statistiche di visione in un unico spazio.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifiche"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 text-black shadow-[0_10px_24px_rgba(139,92,246,0.28)] transition hover:scale-[1.02]"
              >
                <Bell className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                aria-label="Menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                <Ellipsis className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>
          </section>

          {/* First row */}
          <section className="grid grid-cols-12 gap-6">
            <div className="col-span-7 xl:col-span-8">
              <ProfileOverviewCard
                nickname={nickname}
                onChangeNickname={setNickname}
              />
            </div>

            <div className="col-span-5 xl:col-span-4">
              <StatsCards />
            </div>
          </section>

          {/* Continue watching */}
          <section>
            <ContinueWatchingSection />
          </section>

          {/* Favorites + Lists */}
          <section className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <FavoritesSection />
            </div>

            <div className="col-span-6">
              <ListsSection />
            </div>
          </section>

          {/* Followed / Completed */}
          <section>
            <FollowedCompletedCards />
          </section>
        </main>
      </div>
    </>
  );
}
