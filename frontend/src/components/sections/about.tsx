import { BackgroundGrid } from "@/components/ui/background-grid";
import { FadeInSection } from "@/components/ui/fade-in-section";
import homeContent from "@/content/home.json";

const aboutContent = homeContent.about;

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 h-96 w-96 translate-y-1/2 -translate-x-1/4 bg-primary/10 blur-[120px] rounded-full" />
      <BackgroundGrid />

      <div className="layout-container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <FadeInSection className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {aboutContent.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
            {aboutContent.headingPrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">{aboutContent.headingHighlight}</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {aboutContent.description}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
