import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { audiowide, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SerialMente",
  description: "Traccia le tue serie TV preferite.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="it" className={`${manrope.variable} ${audiowide.variable}`}>
        <body className="font-sans antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
