import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/theme-toggle';

const links = [
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Cynalitx' },
  { href: '#insights', label: 'Insights' },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2 text-foreground">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-brand-primaryAlt shadow-glow" />
          <div>
            <p className="text-lg font-semibold">Cynalitx</p>
            <p className="text-xs text-muted-foreground">Intelligent Security. Responsible AI.</p>
          </div>
        </Link>
        <nav className="hidden items-center space-x-8 text-sm text-foreground md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="#contact">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
