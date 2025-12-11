"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "contact@cynalitx.com";
const supportPhone =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "+1 (555) 123-4567";
const supportPhoneHref = supportPhone.replace(/[^+\d]/g, "");

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-[var(--background)] overflow-hidden h-screen flex flex-col justify-center">
      {/* Background Blob */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-y-1/2 translate-x-1/4 bg-[var(--secondary)]/10 blur-[120px] rounded-full" />

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Text Content */}
          <FadeInSection className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                Speak with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--foreground)]">cybersecurity experts</span>
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
                Speak with our cybersecurity experts to strengthen your organization’s security posture and accelerate
                compliance readiness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors">
                <div className="bg-[var(--primary)]/10 p-2.5 rounded-xl shrink-0">
                  <Mail className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Email Us</p>
                  <a href={`mailto:${supportEmail}`} className="text-base font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors truncate block">
                    {supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors">
                <div className="bg-[var(--primary)]/10 p-2.5 rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Call Us</p>
                  <a href={`tel:${supportPhoneHref}`} className="text-base font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors truncate block">
                    {supportPhone}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection delay={200} className="flex flex-col h-full justify-end">
            <div className="bg-[var(--card)] p-8 md:p-10 rounded-3xl border border-[var(--border)] shadow-2xl shadow-black/20 backdrop-blur-xl">
              <form className="flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      placeholder="Name"
                      aria-label="Name"
                      className="h-12 bg-black/20 border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/30 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Company"
                      aria-label="Company"
                      className="h-12 bg-black/20 border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/30 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      placeholder="Email"
                      type="email"
                      aria-label="Email"
                      className="h-12 bg-black/20 border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/30 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Phone"
                      type="tel"
                      aria-label="Phone"
                      className="h-12 bg-black/20 border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/30 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell us about your security needs..."
                    aria-label="Message"
                    className="min-h-[150px] bg-black/20 border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/30 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 resize-none p-4"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    className="w-full h-12 px-8 text-base font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 border border-[var(--primary)]/50"
                    variant="default"
                    size="lg"
                  >
                    Request Consultation
                  </Button>
                </div>
              </form>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
