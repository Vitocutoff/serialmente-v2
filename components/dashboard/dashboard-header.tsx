"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { AnimatePresence, motion } from "motion/react";
import { Bell, Ellipsis, LogOut, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

type DashboardHeaderProps = {
  userName: string;
};

const menuTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  const { signOut } = useClerk();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    setIsMenuOpen(false);
    await signOut({ redirectUrl: "/" });
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-black/55 backdrop-blur-2xl supports-backdrop-filter:bg-black/45"
            : "bg-transparent"
        )}
      >
        <div className="relative mx-auto flex h-15 max-w-md items-center justify-between px-4">
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

          <motion.button
            type="button"
            aria-label="Apri menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            animate={{
              scale: isMenuOpen ? 1.04 : 1,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "relative z-60 flex h-9 w-9 items-center justify-center rounded-full transition active:scale-[0.96]",
              isMenuOpen
                ? "bg-white/14 text-white shadow-[0_8px_18px_rgba(255,255,255,0.08)] backdrop-blur-xl"
                : isScrolled
                  ? "bg-white/8 text-white backdrop-blur-xl"
                  : "bg-black/20 text-white backdrop-blur-md"
            )}
          >
            <motion.div
              animate={{
                rotate: isMenuOpen ? 90 : 0,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Ellipsis className="h-4 w-4" strokeWidth={2.2} />
            </motion.div>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Chiudi menu"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.985 }}
              transition={menuTransition}
              className="fixed inset-x-0 top-0 z-55"
            >
              <div className="mx-auto max-w-md px-4 pt-18">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                  <Link
                    href="/privacy"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 text-sm font-medium text-white/90 transition hover:bg-white/8 active:bg-white/10"
                  >
                    <Shield className="h-4 w-4" strokeWidth={2.2} />
                    Privacy
                  </Link>

                  <div className="mx-4 h-px bg-white/8" />

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-medium text-red-300 transition hover:bg-white/8 active:bg-white/10"
                  >
                    <LogOut className="h-4 w-4" strokeWidth={2.2} />
                    Log out
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
