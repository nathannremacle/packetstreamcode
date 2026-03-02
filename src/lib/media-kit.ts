/**
 * PacketStream branding — aligned with https://packetstream.io
 * All assets from /public/images (local).
 */
export const PACKETSTREAM_MEDIA = {
  siteUrl: "https://packetstream.io",
  appUrl: "https://app.packetstream.io",
  /** Logo — official from packetstream.io */
  logos: {
    horizontal: "/images/PacketStream%20logo.png",
  },
  /** Hero & sections — local images from packetstream.io */
  images: {
    /** Residential proxies for unrestricted data access — seule image de cette section */
    dataJourney: "/images/14.webp",
    /** Features: Residential Proxies = 1-1, Packeter Program = 2-1, Reseller API = 3 */
    residentialProxies: "/images/1-1.webp",
    packeterProgram: "/images/2-1.webp",
    resellerApi: "/images/3.webp",
    /** Our mission is your success */
    mission: "/images/9-1.webp",
    /** Testimonials */
    person1: "/images/person-1.png",
    person2: "/images/person-2.png",
    person3: "/images/person-3.png",
  },
  colors: {
    primary: "#2563eb",
    secondary: "#e0e7ff",
    background: "#f8fafc",
    textSecondary: "#64748b",
    white: "#ffffff",
    black: "#0f172a",
  },
  typography: "Inter",
  homepage: {
    trustedByLabel: "Trusted by businesses worldwide for reliable residential proxies.",
  },
  /** Testimonials — from packetstream.io */
  testimonials: [
    {
      quote: "PacketStream has revolutionized the way we access and analyze data. Their residential proxy network is not only fast but also incredibly reliable. It's an essential tool that has significantly enhanced our market research capabilities.",
      name: "James C.",
      role: "Software Engineer",
      image: "/images/person-1.png",
    },
    {
      quote: "PacketStream's proxy network has been instrumental in our international marketing campaigns. It provides us with the accurate, localized data we need to make informed decisions and tailor our strategies effectively. Their service reliability and support are unmatched.",
      name: "Maria G.",
      role: "Director of Digital Marketing",
      image: "/images/person-2.png",
    },
    {
      quote: "Using PacketStream has been a game changer for our product development team. The ability to bypass geo-restrictions means we can truly test our applications on a global scale. PacketStream is a partner we trust for navigating the complexities of the digital world.",
      name: "Liam C.",
      role: "Head of Engineering",
      image: "/images/person-3.png",
    },
  ],
} as const;
