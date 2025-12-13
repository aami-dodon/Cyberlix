import { AboutSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { LeadershipSection } from "@/components/sections/leadership";
import { ContactSection } from "@/components/sections/contact";
import { FeaturedInsightsSection } from "@/components/sections/featured-insights";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedInsightsSection />
      <WhyUsSection />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}
