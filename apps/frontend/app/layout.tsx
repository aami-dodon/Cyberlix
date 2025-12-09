import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';

import { Footer } from '@/components/shared/footer';
import { Navbar } from '@/components/shared/navbar';
import { QueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' });

export const metadata: Metadata = {
  title: 'Cynalitx | Intelligent Security. Responsible AI.',
  description:
    'Cynalitx unifies cybersecurity, GRC automation, and AI oversight with glocal expertise across India, SEA, Middle East, and North America.',
  keywords: [
    'cybersecurity services 2025',
    'AI governance tools',
    'GRC automation platform',
    'AI compliance',
    'managed SOC',
    'VAPT',
    'cloud security',
    'AI oversight',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesk.variable} bg-background text-foreground`}>
        <ThemeProvider>
          <QueryProvider>
            <Navbar />
            <main className="bg-gradient-to-b from-transparent to-background">{children}</main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
