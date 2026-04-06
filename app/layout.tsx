import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { itIT } from "@clerk/localizations";

import { audiowide, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SerialMente",
  description: "Traccia le tue serie TV preferite.",
  applicationName: "SerialMente",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider localization={itIT}>
      <html
        lang="it"
        className={`${manrope.variable} ${audiowide.variable}`}
      >
        <body className="font-sans antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
