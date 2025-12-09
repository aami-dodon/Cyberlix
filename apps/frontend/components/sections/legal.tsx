import { FileLock2, ScrollText, ShieldCheck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const LegalSection = () => (
  <section id="privacy" className="pb-16">
    <div className="mx-auto max-w-6xl px-6 space-y-4">
      <div className="space-y-2">
        <h2 className="section-heading">Trust, Privacy, and Transparency</h2>
        <p className="section-subtitle">
          Privacy Policy, Terms of Use, Cookie Policy, and AI Transparency Notice are available on
          request. Security statements cover data handling, encryption, and zero-trust controls.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <FileLock2 className="h-5 w-5 text-primary" /> Privacy & Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Data is minimized, encrypted in transit and at rest, and processed under explicit
            consent with regional routing where applicable.
          </CardContent>
        </Card>
        <Card id="terms">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ScrollText className="h-5 w-5 text-primary" /> Terms of Use
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Service-level expectations, acceptable use, and audit cooperation clauses aligned to
            enterprise procurement.
          </CardContent>
        </Card>
        <Card id="cookies">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" /> AI Transparency Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            AI-driven decisions include explainability summaries, data lineage, and
            human-in-the-loop escalation paths.
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
