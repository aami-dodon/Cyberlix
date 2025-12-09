import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cynalitx | Intelligent Security & Responsible AI",
  description:
    "Cynalitx unifies cybersecurity, GRC automation, and AI oversight into one glocal platform for resilient, compliant enterprises.",
  keywords: [
    "Cynalitx",
    "cybersecurity consulting",
    "GRC automation platform",
    "AI governance",
    "AI compliance",
    "managed SOC",
  ],
  openGraph: {
    title: "Cynalitx — Intelligent Security. Responsible AI.",
    description:
      "Next-generation cybersecurity, GRC automation, and AI oversight for regulated industries across India, APAC, the Middle East, and North America.",
    siteName: "Cynalitx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynalitx | Cybersecurity & AI Governance",
    description:
      "Unified security, compliance, and responsible AI controls with global expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
