import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { MusicPlayer } from "@/components/features/music-player";
import { Snowfall } from "@/components/ui/snowfall";
import { PageTransition } from "@/components/ui/page-transition";
import { HangingOrnaments } from "@/components/ui/ornaments";

export const metadata: Metadata = {
  metadataBase: new URL("https://wish-christmas-to-your-love-one.vercel.app"),
  title: "Merry Christmas & Happy New Year",
  description: "Share a magical animated greeting card with your friends and family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >

        <Snowfall />
        <HangingOrnaments />
        <PageTransition>
          {children}
        </PageTransition>
        <MusicPlayer />
      </body>
    </html>
  );
}
