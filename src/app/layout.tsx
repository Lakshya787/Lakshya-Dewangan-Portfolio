import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
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

export const metadata: Metadata = {
  title: "Lakshya | Full-Stack Developer",
  description:
    "Portfolio of Lakshya — Full-Stack Developer building scalable web applications and exploring AI Engineering in Playful Geometric style.",
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
