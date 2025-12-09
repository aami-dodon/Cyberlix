import { Shield, Sparkles, Target } from 'lucide-react';

import { services } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ServicesSection = () => (
  <section id="services" className="pb-20">
    <div className="mx-auto max-w-6xl px-6 space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Badge variant="outline" className="mb-2 inline-flex items-center gap-2">
            <Shield className="h-4 w-4" /> Security Services
          </Badge>
          <h2 className="section-heading">
            Cybersecurity and AI assurance built for complex enterprises
          </h2>
          <p className="section-subtitle">
            Managed SOC, VAPT, cloud security posture, GRC consulting, AI governance audits, and
            incident response with automation-first playbooks.
          </p>
        </div>
        <div className="hidden rounded-xl border border-border bg-muted/20 p-4 text-sm text-muted-foreground md:block">
          <div className="flex items-center gap-2 text-foreground">
            <Target className="h-4 w-4 text-primary" />
            <span>Outcome-first delivery</span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Each engagement is mapped to measurable risk reduction, compliance readiness, and
            response SLAs.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="h-full">
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
