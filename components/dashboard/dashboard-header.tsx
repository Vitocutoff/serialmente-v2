"use client";

import { Bell, Ellipsis } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type DashboardHeaderProps = {
  userName: string;
};

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setIsScrolled(y > 12);
      setShowTitle(y > 150);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl supports-backdrop-filter:bg-black/45"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-15 max-w-md items-center justify-between px-4">
        <button
          type="button"
          aria-label="Notifiche"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 shadow-[0_8px_18px_rgba(139,92,246,0.28)] transition active:scale-[0.96]"
        >
          <Bell className="h-4 w-4 text-black" strokeWidth={2.2} />
        </button>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={false}
            animate={{
              opacity: showTitle ? 1 : 0,
              y: showTitle ? 0 : 5,
              scale: showTitle ? 1 : 0.985,
            }}
            transition={{
              duration: 0.26,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[15px] font-semibold tracking-[-0.02em] text-white"
          >
            {userName}
          </motion.span>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full border transition active:scale-[0.96]",
            isScrolled
              ? "border-white/10 bg-white/8 text-white backdrop-blur-xl"
              : "border-transparent bg-black/20 text-white backdrop-blur-md"
          )}
        >
          <Ellipsis className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}
