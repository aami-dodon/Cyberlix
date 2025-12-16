import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyberlix",
    template: "%s | Cyberlix",
  },
  description:
    "Cyberlix fuses advanced AI threat detection with battle-tested human intellect to secure your most critical digital assets against tomorrow's adversaries.",
  metadataBase: new URL("https://cyberlix.com"),
  openGraph: {
    title: "Cyberlix",
    description:
      "Intelligence-Led Security for the Quantum Era. We provide elite defense mechanisms and strategic intelligence.",
    url: "https://cyberlix.com",
    siteName: "Cyberlix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyberlix - Next-Generation Cyber Defense",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberlix",
    description:
      "Cyberlix fuses advanced AI threat detection with battle-tested human intellect to secure your most critical digital assets.",
    creator: "@CyberlixSecurity",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
          <Header />
          <main className="flex-grow pt-0">{children}</main>
          <div className="snap-start">
            <Footer />
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
