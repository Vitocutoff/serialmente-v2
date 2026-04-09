import Link from "next/link";
import { ChevronRight, List, Plus } from "lucide-react";

export function ListsSection() {
  return (
    <section className="mt-6">
      <Link
        href="/profile"
        className="mb-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
            <List className="h-4 w-4 text-white" strokeWidth={2.2} />
          </div>

          <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
            Le mie liste
          </h2>
        </div>

        <ChevronRight
          className="h-5 w-5 text-white/55"
          strokeWidth={2.2}
        />
      </Link>

      <button
        type="button"
        className="group relative flex w-full items-center justify-center"
      >
        <div className="relative flex min-h-34 w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-xl transition active:scale-[0.99]">

          {/* Glow soft neutro */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/6" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_0_16px_rgba(255,255,255,0.06)]" />

          <Plus
            className="relative h-7 w-7 text-white/70 transition group-hover:scale-105"
            strokeWidth={2.2}
          />

          <span className="relative mt-2 text-sm font-medium text-foreground-muted">
            Crea lista
          </span>
        </div>
      </button>
    </section>
  );
}
