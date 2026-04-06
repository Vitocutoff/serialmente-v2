"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clapperboard, House, Search, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    href: "/dashboard",
    label: "Home",
    icon: House,
  },
  {
    href: "/shows",
    label: "Serie TV",
    icon: Clapperboard,
  },
  {
    href: "/search",
    label: "Cerca",
    icon: Search,
  },
  {
    href: "/profile",
    label: "Profilo",
    icon: UserRound,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur-2xl supports-backdrop-filter:bg-black/55">
      <div className="mx-auto max-w-md px-2 pb-[max(8px,env(safe-area-inset-bottom))]">
        <div className="flex h-18 items-center justify-around">
          {items.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="group flex min-w-16 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 transition active:scale-[0.97]"
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-200",
                    isActive ? "text-white" : "text-white/45"
                  )}
                  strokeWidth={2.1}
                />

                <span
                  className={cn(
                    "text-[11px] font-medium transition-colors duration-200",
                    isActive ? "text-white" : "text-white/45"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
