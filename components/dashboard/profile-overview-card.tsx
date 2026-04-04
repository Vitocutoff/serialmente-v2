"use client";

import { Camera, Pencil, Plus } from "lucide-react";

export function ProfileOverviewCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <p className="text-sm font-medium text-foreground-muted">Bentornato</p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-muted">
            Nickname
          </p>

          <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-white">
            Scegli nome
          </p>

          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/8 px-2.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
          >
            <Pencil className="h-3.5 w-3.5" strokeWidth={2.1} />
            Modifica
          </button>
        </div>

        <div className="relative shrink-0">
          <label
            htmlFor="profile-image"
            className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/8 transition hover:bg-white/10"
          >
            <Plus
              className="h-6 w-6 text-white/85 transition group-hover:scale-105"
              strokeWidth={2.1}
            />
            <span className="sr-only">Carica foto profilo</span>
          </label>

          <label
            htmlFor="profile-image"
            className="absolute -bottom-1 -right-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-violet-500 text-black shadow-[0_8px_18px_rgba(139,92,246,0.28)] transition active:scale-[0.96]"
          >
            <Camera className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span className="sr-only">Scatta o scegli una foto</span>
          </label>

          <input
            id="profile-image"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
          />
        </div>
      </div>
    </section>
  );
}
