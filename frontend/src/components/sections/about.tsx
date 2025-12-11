export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--background)] py-24 h-screen snap-start flex items-center">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 h-96 w-96 translate-y-1/2 -translate-x-1/4 bg-[var(--primary)]/10 blur-[120px] rounded-full" />

      <div className="layout-container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            About Cynalitx
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--foreground)]">
            Full-spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--primary)]">security leadership</span>
          </h2>
        </div>

        <div>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)]">
            Cynalitx is a full-spectrum cybersecurity partner offering strategic leadership, cloud and data protection,
            compliance advisory, advanced threat monitoring, and enterprise-grade security operations. We help
            organizations strengthen resilience, reduce cyber risks, and align security with business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
