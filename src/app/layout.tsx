import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lakshya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioningStatement,
  keywords: [
    "Lakshya",
    "Lakshya Dewangan",
    "Full-Stack Developer",
    "AI Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "IIIT Naya Raipur",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profile.name} | Full-Stack Developer`,
    description: profile.positioningStatement,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Full-Stack Developer & AI Engineering Explorer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-Stack Developer`,
    description: profile.positioningStatement,
    creator: "@Lakshya",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/images/icon.png" },
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${instrumentSans.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]">
        <div className="layout-container flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-1 w-full focus:outline-none">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
