const quickLinks = ["Overview", "Case Studies", "Careers", "Blog"];
const services = ["Cloud Ops", "Data Science", "Security", "Product Engineering"];
const resources = ["Guides", "Events", "Support", "Contact"];
const legalLinks = ["Privacy", "Terms", "Security"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)]">
      <div className="layout-container grid gap-8 px-6 py-12 text-sm md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">Cynalitx</p>
          <p className="mt-3 text-xs leading-relaxed">
            We build resilient platforms and teams that keep mission critical systems calm, clear, and trusted.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-[var(--sidebar-foreground)] hover:text-[var(--foreground)]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">Services</p>
          <ul className="mt-3 flex flex-col gap-2">
            {services.map((item) => (
              <li key={item} className="text-[var(--sidebar-foreground)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">Resources + Contact</p>
          <ul className="mt-3 flex flex-col gap-2">
            {resources.map((item) => (
              <li key={item} className="text-[var(--sidebar-foreground)]">
                {item}
              </li>
            ))}
            <li className="mt-2 text-[var(--foreground)] font-semibold">contact@cynalitx.com</li>
          </ul>
        </div>
      </div>
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
