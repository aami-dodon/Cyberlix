import Link from 'next/link';

const navColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Products', href: '#products' },
      { label: 'Services', href: '#services' },
      { label: 'Resources', href: '#insights' },
      { label: 'Blog', href: '#insights' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Use', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
];

export const Footer = () => (
  <footer className="border-t border-border bg-background/90">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:gap-16">
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-foreground">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-brand-primaryAlt shadow-glow" />
          <div>
            <p className="text-xl font-semibold">Cynalitx</p>
            <p className="text-sm text-muted-foreground">Global cybersecurity and AI governance</p>
          </div>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Intelligent Security. Responsible AI. Global Expertise. We secure enterprises across
          India, SEA, Middle East, and North America.
        </p>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {socials.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
        {navColumns.map((column) => (
          <div key={column.title} className="space-y-3">
            <p className="text-sm font-semibold text-foreground">{column.title}</p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-border bg-background py-4 text-center text-xs text-muted-foreground">
      © 2025 Cynalitx. All rights reserved.
    </div>
  </footer>
);
