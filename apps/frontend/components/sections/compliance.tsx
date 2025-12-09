import { Check, Shield } from 'lucide-react';

import { assurances, caseStudies, complianceFrameworks } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ComplianceSection = () => (
  <section id="compliance" className="pb-20">
    <div className="mx-auto max-w-6xl px-6 space-y-10">
      <div className="space-y-3">
        <h2 className="section-heading">Compliance and Security Assurance</h2>
        <p className="section-subtitle">
          Coverage across ISO 27001, SOC2, GDPR, RBI cybersecurity guidelines, NIST CSF, and the
          emerging EU AI Act. Enterprise-grade encryption, zero-trust design, and continuous
          monitoring are built-in.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Framework coverage</CardTitle>
            <CardDescription>Unified control mapping and evidence automation.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.id}
                className="flex items-start gap-3 rounded-xl border border-border bg-muted/20 p-4"
              >
                <Shield className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{framework.name}</p>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security guarantees</CardTitle>
            <CardDescription>
              Designed for BFSI, healthcare, SaaS, telecom, and government.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {assurances.map((item) => (
              <div
                key={item.standard}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-foreground">{item.standard}</p>
                  <p>{item.statement}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <Card key={cs.sector}>
            <CardHeader>
              <CardTitle>{cs.sector} case study</CardTitle>
              <CardDescription>{cs.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {cs.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{outcome}</span>
                </div>
              ))}
              {cs.anonymous && (
                <p className="text-xs text-muted-foreground">
                  Client anonymized pending approvals.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
