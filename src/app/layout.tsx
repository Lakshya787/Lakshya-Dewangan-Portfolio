import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Sans } from "next/font/google";
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
  title: "Lakshya Portfolio",
  description: "Personal portfolio website for Lakshya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased">
        <div className="layout-container">{children}</div>
      </body>
    </html>
  );
}

