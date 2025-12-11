"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="bg-[var(--card)]/95 p-10">
      <div className="space-y-4 md:space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--sidebar-foreground)]/60">
          Get in Touch
        </p>
        <h2 className="text-3xl font-semibold text-[var(--foreground)]">
          Speak with our cybersecurity experts
        </h2>
        <p className="max-w-3xl text-lg text-[var(--sidebar-foreground)]/85">
          Speak with our cybersecurity experts to strengthen your organization’s security posture and accelerate
          compliance readiness.
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr,1fr]">
        <form className="flex flex-col gap-4 text-[var(--sidebar-foreground)]/80">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Name" aria-label="Name" />
            <Input placeholder="Company" aria-label="Company" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Email" type="email" aria-label="Email" />
            <Input placeholder="Phone" type="tel" aria-label="Phone" />
          </div>
          <Textarea placeholder="Message" aria-label="Message" />
          <div className="flex flex-wrap gap-3">
            <Button className="text-[var(--sidebar-foreground)]" variant="default" size="sm">
              Request Consultation
            </Button>
            <Button className="text-[var(--sidebar-foreground)]" variant="secondary" size="sm">
              Talk to a Cyber Expert
            </Button>
          </div>
        </form>
        <div className="space-y-3 text-[var(--sidebar-foreground)]/85">
          <p className="text-sm text-[var(--foreground)]">
            Our team is ready to assess your security needs, roadmap maturity, and deliver tactical programs that
            protect critical assets. Share your priorities and we’ll craft a tailored engagement path.
          </p>
          <p className="text-sm">
            <strong className="text-[var(--foreground)]">Email:</strong> contact@cynalitx.com
          </p>
          <p className="text-sm">
            <strong className="text-[var(--foreground)]">Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
      </div>
    </section>
  );
}
