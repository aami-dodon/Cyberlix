import { Cpu, Globe2, Network, Radar } from 'lucide-react';

import { differentiators } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const icons = [Radar, Cpu, Network, Globe2];

export const WhyUsSection = () => (
  <section id="why-us" className="pb-20">
    <div className="mx-auto max-w-6xl px-6 space-y-6">
      <div className="space-y-3">
        <h2 className="section-heading">Why Cynalitx</h2>
        <p className="section-subtitle">
          Faster compliance, proactive risk detection, and globally aligned AI governance backed by
          expert security analysts and data scientists.
        </p>
        <p className="text-sm text-brand-neon">
          Mission: To empower global enterprises with intelligent, ethical, and resilient security
          ecosystems.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <Card key={item.title} className="h-full">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-neon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
