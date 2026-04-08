"use client";

import { Camera, Pencil, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProfileOverviewCardProps = {
  nickname: string;
  onChangeNickname: (value: string) => void;
};

export function ProfileOverviewCard({
  nickname,
  onChangeNickname,
}: ProfileOverviewCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(nickname);

  const textInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isEditing) return;

    const frame = requestAnimationFrame(() => {
      textInputRef.current?.focus();
      textInputRef.current?.select();
    });

    return () => cancelAnimationFrame(frame);
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = draft.trim();

    onChangeNickname(trimmed || "Scegli nome");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(nickname);
    setIsEditing(false);
  };

  const handleOpenEdit = () => {
    setDraft(nickname === "Scegli nome" ? "" : nickname);
    setIsEditing(true);
  };

  const handleOpenGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleOpenCamera = () => {
    cameraInputRef.current?.click();
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-violet-400/12" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(139,92,246,0.10),0_0_20px_rgba(139,92,246,0.16)]" />

      <p className="relative z-10 text-sm font-medium text-foreground-muted">
        Bentornato
      </p>

      <div className="relative z-10 mt-4 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300">
            Nickname
          </p>

          {!isEditing ? (
            <>
              <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-white">
                {nickname}
              </p>

              <button
                type="button"
                onClick={handleOpenEdit}
                className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/8 px-2.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                <Pencil className="h-3.5 w-3.5" strokeWidth={2.1} />
                Modifica
              </button>
            </>
          ) : (
            <div className="mt-2">
              <input
                ref={textInputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave();
                  if (e.key === "Escape") handleCancel();
                }}
                placeholder="Inserisci nome"
                className="h-10 w-full rounded-2xl border border-white/10 bg-white/10 px-3 text-[16px] text-white outline-none placeholder:text-white/35 focus:border-violet-400"
              />

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-3 py-2 text-[13px] font-medium text-white transition active:scale-[0.98]"
                >
                  Salva
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-[13px] font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
                >
                  Annulla
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative shrink-0">
          <button
            type="button"
            onClick={handleOpenGallery}
            className="group relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/8 transition hover:bg-white/10 active:scale-[0.98]"
            aria-label="Scegli una foto dal dispositivo"
          >
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(139,92,246,0.12),0_0_14px_rgba(139,92,246,0.16)]" />

            <Plus
              className="relative h-7 w-7 text-white/85 transition group-hover:scale-105"
              strokeWidth={2.1}
            />
          </button>

          <button
            type="button"
            onClick={handleOpenCamera}
            className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-amber-400 text-black shadow-[0_8px_18px_rgba(251,191,36,0.28)] transition active:scale-[0.96]"
            aria-label="Scatta una foto"
          >
            <Camera className="h-4 w-4" strokeWidth={2.2} />
          </button>

          <input
            ref={galleryInputRef}
            type="file"
            accept="image/*"
            className="hidden"
          />

          <input
            ref={cameraInputRef}
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
