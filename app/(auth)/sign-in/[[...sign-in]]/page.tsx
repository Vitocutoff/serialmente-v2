"use client";

import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative w-full">
      {/* LOGO custom (in alto a sinistra, fuori dal flow) */}
      <div className="absolute left-4 top-4 z-20">
        <Image
          src="/logo.png"
          alt="Logo SerialMente"
          width={44}
          height={44}
          priority
          className="object-contain"
        />
      </div>

      <SignIn
        appearance={{
          options: {
            // 🚫 NON usare più logo Clerk
            socialButtonsPlacement: "top",
            socialButtonsVariant: "blockButton",
          },
          elements: {
            rootBox: "w-full",
            cardBox: "w-full",

            card:
              "w-full rounded-[24px] border border-white/10 bg-white/5 px-4 pt-8 pb-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl",

            headerTitle:
              "text-[1.75rem] font-semibold tracking-[-0.02em] text-white text-center",

            headerSubtitle: "hidden",

            socialButtonsBlockButton:
              "h-11 rounded-xl border border-white/10 bg-white text-[14px] font-medium text-black hover:bg-white/90",

            dividerLine: "bg-white/10",
            dividerText: "text-[12px] text-white/40",

            formFieldLabel: "mb-1.5 text-[14px] text-white/78",

            formFieldInput:
              "h-11 rounded-xl border border-white/10 bg-white/10 px-4 text-[16px] text-white placeholder:text-[14px] placeholder:text-white/40 focus:border-violet-400",

            formButtonPrimary:
              "mt-1 h-11 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)]",

            footerAction: "pt-4",
            footerActionText: "text-[14px] text-white/45",
            footerActionLink: "font-semibold text-white",
          },
        }}
      />
    </div>
  );
}
