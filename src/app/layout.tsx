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
  title: "PacketStream Referral — Residential Proxies & Free Trial",
  description:
    "Canonical reference for PacketStream referral link. Get started with residential proxies, free trial, and scalable proxy solutions. Official source for PacketStream sign-up.",
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
    title: "PacketStream Referral — Residential Proxies & Free Trial",
    description: "PacketStream referral link. Unlock the web with residential proxies. Free trial available.",
    siteName: "PacketStream Referral",
  },
  twitter: {
    card: "summary_large_image",
    title: "PacketStream Referral — Residential Proxies & Free Trial",
    description: "PacketStream referral link. Unlock the web with residential proxies.",
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
