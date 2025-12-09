import { ComplianceSection } from '@/components/sections/compliance';
import { ContactSection } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { InsightsSection } from '@/components/sections/insights';
import { LegalSection } from '@/components/sections/legal';
import { ProductSection } from '@/components/sections/products';
import { ServicesSection } from '@/components/sections/services';
import { WhyUsSection } from '@/components/sections/why-us';

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <Hero />
      <ProductSection />
      <ServicesSection />
      <WhyUsSection />
      <ComplianceSection />
      <LegalSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}
