/**
 * PacketStream branding — aligned with https://packetstream.io
 * Residential proxies, Packeter Program, Reseller API.
 */

const BASE = "https://packetstream.io";

export const PACKETSTREAM_MEDIA = {
  siteUrl: BASE,
  appUrl: "https://app.packetstream.io",
  /** PacketStream: professional, dark/blue accent typical of proxy/security brands */
  colors: {
    primary: "#2563eb",   // blue-600
    secondary: "#e0e7ff", // indigo-100
    background: "#f8fafc",
    textSecondary: "#64748b",
    white: "#ffffff",
    black: "#0f172a",
  },
  typography: "Inter",
  homepage: {
    trustedByLabel: "Trusted by businesses worldwide for reliable residential proxies.",
  },
} as const;
