import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./providers/theme-provider";
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
    default: "Cynalitx",
    template: "%s | Cynalitx",
  },
  description:
    "Cynalitx partners with life sciences teams to design, build, and scale software that accelerates transformative healthcare solutions.",
  metadataBase: new URL("https://cynalitx.com"),
  openGraph: {
    title: "Cynalitx",
    description:
      "Partner with Cynalitx to modernize your life sciences product with high-velocity design, engineering, and regulatory craftsmanship.",
    url: "https://cynalitx.com",
    siteName: "Cynalitx",
    images: [
      {
        url: "https://cynalitx.dodon.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cynalitx logo and modern healthcare interface",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynalitx",
    description:
      "Design and ship software for life sciences with Cynalitx—product partners for human-centered, compliant healthcare experiences.",
    creator: "@CynalitxLab",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProviderWrapper>
          <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
            <Header />
            <main className="flex-grow pt-0">{children}</main>
            <div className="snap-start">
              <Footer />
            </div>
            <Toaster />
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
