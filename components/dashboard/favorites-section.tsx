import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

export function FavoritesSection() {
  return (
    <section className="mt-6">
      <Link
        href="/shows"
        className="mb-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 shadow-[0_6px_14px_rgba(239,68,68,0.35)]">
            <Heart className="h-4 w-4 text-white" strokeWidth={2.2} />
          </div>

          <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
            Serie TV preferite
          </h2>
        </div>

        <ChevronRight
          className="h-5 w-5 text-white/55"
          strokeWidth={2.2}
        />
      </Link>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-400/10" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(248,113,113,0.06),0_0_18px_rgba(239,68,68,0.10)]" />

        <div className="relative z-10 flex items-center justify-center">
          <p className="text-sm font-medium text-foreground-muted text-center">
            Ancora nessun preferito.
          </p>
        </div>
      </div>
    </section>
  );
}
