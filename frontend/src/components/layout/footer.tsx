"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CynalitxLogo } from "@/components/ui/logo";

import Link from "next/link";
import { servicesData } from "@/config/services";

const legalLinks = ["Privacy", "Terms", "Security"];

export function Footer() {
  const year = new Date().getFullYear();

  // Split services into two columns
  const midPoint = Math.ceil(servicesData.length / 2);
  const leftServices = servicesData.slice(0, midPoint);
  const rightServices = servicesData.slice(midPoint);

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)]">
      <div className="layout-container grid gap-8 px-6 py-12 md:grid-cols-3 lg:gap-12">
        {/* Column 1: Brand (As requested: "Leave as is") */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CynalitxLogo className="h-6 w-6" />
            <p className="text-lg font-semibold text-[var(--foreground)]">Cynalitx</p>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            We build resilient platforms and teams that keep mission critical systems calm, clear, and trusted.
          </p>
        </div>

        {/* Column 2: Services (2 sub-columns with 8 services) */}
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)] mb-4">Services</p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="flex flex-col gap-2">
              {leftServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[var(--sidebar-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {rightServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[var(--sidebar-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Subscribe to Newsletter */}
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)] mb-4">Subscribe to Newsletter</p>
          <p className="text-sm mb-4 text-[var(--muted-foreground)]">
            Stay updated with our latest security insights and news.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[var(--background)]"
            />
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[var(--border)] px-6 py-4 text-xs text-[var(--muted-foreground)]">
        <div className="layout-container flex flex-wrap items-center justify-between gap-3">
          <span>© {year} Cynalitx. All rights reserved.</span>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[var(--sidebar-foreground)] hover:text-[var(--foreground)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
