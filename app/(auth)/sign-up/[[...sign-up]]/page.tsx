"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "w-full",
          cardBox: "w-full",
          card:
            "w-full max-w-md rounded-[28px] border-0 bg-black/35 px-5 py-6 shadow-none backdrop-blur-2xl",

          headerTitle: "text-[2rem] font-semibold tracking-[-0.02em] text-white",
          headerSubtitle: "mt-2 text-[15px] leading-6 text-white/55",

          socialButtonsBlockButton:
            "h-12 rounded-2xl border border-white/10 bg-white text-[15px] font-medium text-black shadow-none hover:bg-white/90",
          socialButtonsBlockButtonText: "text-[15px] font-medium",

          dividerLine: "bg-white/10",
          dividerText: "text-[13px] font-medium text-white/40",

          formFieldLabel: "mb-2 text-[15px] font-medium text-white/78",

          formFieldInput:
            "h-12 rounded-2xl border border-white/10 bg-white/8 px-4 text-[16px] text-white placeholder:text-[15px] placeholder:text-white/35 focus:border-violet-400 focus:ring-0",

          formButtonPrimary:
            "mt-2 h-12 rounded-2xl border-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:opacity-95",

          footerAction: "pt-5",
          footerActionText: "text-[15px] text-white/45",
          footerActionLink: "font-semibold text-white hover:text-white/85",

          formResendCodeLink: "text-[14px] text-white hover:text-white/85",
          identityPreviewText: "text-[14px] text-white/70",
          identityPreviewEditButton: "text-[14px] text-white/60 hover:text-white",
          alertText: "text-[14px]",
        },
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "blockButton",
          logoImageUrl: "/logo.png",
          logoPlacement: "inside",
        },
      }}
    />
  );
}
