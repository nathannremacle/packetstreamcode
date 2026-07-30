import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PacketStream Official Website & Referral Code 7uIB — $1/GB Residential Proxies",
  description:
    "Official PacketStream portal & verified referral code 7uIB. Access $1/GB residential proxies, direct login, app downloads for Windows/Mac/Linux/Android, and sell unused bandwidth.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "--oruELeHCRaGrujEpWx5dyE3XDdhISc3SsUIzRreQs",
    other: { "msvalidate.01": "1B090C601BEC723EBE06ED47FA491984" },
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    url: SITE_URL,
    title: "PacketStream Official Website & Referral Code 7uIB — $1/GB Residential Proxies",
    description: "Official PacketStream access portal. Verified referral code 7uIB for residential proxies ($1/GB) and bandwidth sharing earnings.",
    siteName: "PacketStream Official Portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "PacketStream Official Website & Referral Code 7uIB",
    description: "Official PacketStream referral portal. Residential proxies at $1/GB & passive income bandwidth sharing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
