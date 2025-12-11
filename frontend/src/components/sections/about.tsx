import { FadeInSection } from "@/components/ui/fade-in-section";
export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--background)] py-24 h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 translate-x-1/3 bg-[var(--secondary)]/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/3 -translate-x-1/4 bg-[var(--primary)]/20 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <div className="layout-container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <FadeInSection className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            About Cynalitx
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--foreground)]">
            Full-spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--primary)]">security leadership</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)]">
            Cynalitx is a full-spectrum cybersecurity partner offering strategic leadership, cloud and data protection,
            compliance advisory, advanced threat monitoring, and enterprise-grade security operations. We help
            organizations strengthen resilience, reduce cyber risks, and align security with business growth.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
