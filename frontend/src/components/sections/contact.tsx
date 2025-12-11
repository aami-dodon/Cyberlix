"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Background Blob */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-y-1/2 translate-x-1/4 bg-[var(--secondary)]/10 blur-[120px] rounded-full" />

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
                Speak with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">cybersecurity experts</span>
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
                Speak with our cybersecurity experts to strengthen your organization’s security posture and accelerate
                compliance readiness.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <div className="bg-[var(--primary)]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">Email Us</p>
                  <p className="text-lg font-semibold text-[var(--foreground)]">contact@cynalitx.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <div className="bg-[var(--secondary)]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[var(--secondary)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">Call Us</p>
                  <p className="text-lg font-semibold text-[var(--foreground)]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20">
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Our team is ready to assess your security needs, roadmap maturity, and deliver tactical programs that
                  protect critical assets. Share your priorities and we’ll craft a tailored engagement path.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
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
                  className="flex-1 h-12 text-base font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
                  variant="default"
                  size="lg"
                >
                  Request Consultation
                </Button>
                <Button
                  className="flex-1 h-12 text-base font-semibold border border-[var(--border)] hover:bg-[var(--secondary)]/10 hover:text-[var(--secondary)] hover:border-[var(--secondary)]/50 text-[var(--foreground)]"
                  variant="outline"
                  size="lg"
                >
                  Talk to a Cyber Expert
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
