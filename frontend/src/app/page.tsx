import { AboutSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { LeadershipSection } from "@/components/sections/leadership";
import { ContactSection } from "@/components/sections/contact";
import { SnapScrollController } from "@/components/utils/snap-scroll-controller";

export default function Home() {
  return (
    <>
      <SnapScrollController />
      <div className="snap-start">
        <HeroSection />
      </div>
      <div className="snap-start">
        <AboutSection />
      </div>
      <div className="snap-start">
        <ServicesSection />
      </div>
      <div className="snap-start">
        <WhyUsSection />
      </div>
      <div className="snap-start">
        <LeadershipSection />
      </div>
      <div className="snap-start">
        <ContactSection />
      </div>
    </>
  );
}
