"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: "w-full",
          cardBox: "w-full",
          card:
            "w-full max-w-md rounded-[28px] border-0 bg-black/35 shadow-none backdrop-blur-2xl",
          header: "hidden",
          socialButtonsBlockButton:
            "h-12 rounded-2xl border border-white/10 bg-white text-black shadow-none hover:bg-white/90",
          socialButtonsBlockButtonText: "text-sm font-semibold",
          dividerLine: "bg-white/10",
          dividerText: "text-xs font-medium text-white/45",
          formFieldLabel: "text-sm font-medium text-white/80",
          formFieldInput:
            "h-12 rounded-2xl border border-white/10 bg-white/8 text-white placeholder:text-white/35 focus:border-violet-400 focus:ring-0",
          formButtonPrimary:
            "h-12 rounded-2xl border-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:opacity-95",
          footerActionText: "text-white/45",
          footerActionLink:
            "font-semibold text-white hover:text-white/85",
          identityPreviewText: "text-white/70",
          identityPreviewEditButton:
            "text-white/60 hover:text-white",
          formResendCodeLink:
            "text-white hover:text-white/85",
          alertText: "text-sm",
          formHeaderTitle: "hidden",
          formHeaderSubtitle: "hidden",
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
