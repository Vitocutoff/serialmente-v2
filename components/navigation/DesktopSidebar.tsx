"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clapperboard, House, Search, UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Home", icon: House },
  { href: "/shows", label: "Serie TV", icon: Clapperboard },
  { href: "/search", label: "Cerca", icon: Search },
  { href: "/profile", label: "Profilo", icon: UserRound },
];

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-dvh w-24 shrink-0 flex-col overflow-hidden border-r border-white/8 bg-white/4 backdrop-blur-2xl">
      {/* Background / depth layers */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-violet-400/10 to-transparent opacity-70" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_-1px_0_0_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.03),0_0_30px_rgba(139,92,246,0.06)]" />

      {/* LOGO */}
      <div className="relative flex items-center justify-center px-2 pt-8">
        <div className="pointer-events-none absolute inset-x-1 top-5 h-20 bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_72%)] blur-xl" />

        <div className="relative w-24">
          <Image
            src="/logo.png"
            alt="Logo SerialMente"
            width={1024}
            height={1024}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* NAV */}
      <nav className="relative mt-10 flex flex-1 flex-col items-center gap-3 px-3">
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
              className={cn(
                "group relative flex w-full flex-col items-center justify-center gap-1.5 rounded-2xl px-2 py-3 transition",
                isActive
                  ? "text-white"
                  : "text-white/50 hover:text-white/85"
              )}
            >
              {isActive && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-violet-400/18" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(139,92,246,0.08),0_0_18px_rgba(139,92,246,0.10)]" />
                </>
              )}

              <Icon className="relative h-5 w-5" strokeWidth={2.1} />

              <span className="relative text-[11px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
