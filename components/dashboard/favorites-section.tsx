import Link from "next/link";
import { ChevronRight, Heart, Plus } from "lucide-react";

export function FavoritesSection() {
  return (
    <section className="mt-6">
      {/* Header */}
      <Link
        href="/shows"
        className="mb-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 shadow-[0_6px_14px_rgba(239,68,68,0.35)]">
            <Heart className="h-4 w-4 text-white" strokeWidth={2.2} />
          </div>

          <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
            Preferiti
          </h2>
        </div>

        <ChevronRight
          className="h-5 w-5 text-white/55"
          strokeWidth={2.2}
        />
      </Link>

      {/* Empty state */}
      <div className="flex gap-0.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-0.5">
          <button
            type="button"
            className="group relative flex shrink-0 items-center justify-center"
          >
            <div className="relative aspect-2/3 w-[30.5vw] min-w-28 max-w-31 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Plus
                  className="h-6 w-6 text-white/70 transition group-hover:scale-105"
                  strokeWidth={2.2}
                />

                <span className="text-[11px] font-medium text-foreground-muted">
                  Aggiungi ai preferiti
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
