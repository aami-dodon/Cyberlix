"use client";

import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Loader2 } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { useState } from "react";
import { toast } from "sonner";
import { home as homeContent } from "@/content";

const contactContent = homeContent.contact;
const supportEmail = contactContent.support.defaultEmail;
const supportPhone = contactContent.support.defaultPhone;
const supportPhoneHref = supportPhone.replace(/[^+\d]/g, "");

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 bg-background overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Blob */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-y-1/2 translate-x-1/4 bg-secondary/10 blur-[120px] rounded-full" />
      <BackgroundGrid />

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Text Content */}
          <FadeInSection className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {contactContent.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {contactContent.titlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                  {contactContent.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                {contactContent.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card variant="interactive" className="flex flex-row items-center gap-4 p-4">
                <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {contactContent.support.emailLabel}
                  </p>
                  <a href={`mailto:${supportEmail}`} className="text-base font-bold text-foreground hover:text-primary transition-colors break-words block">
                    {supportEmail}
                  </a>
                </div>
              </Card>

              <Card variant="interactive" className="flex flex-row items-center gap-4 p-4">
                <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {contactContent.support.phoneLabel}
                  </p>
                  <a href={`tel:${supportPhoneHref}`} className="text-base font-bold text-foreground hover:text-primary transition-colors break-words block">
                    {supportPhone}
                  </a>
                </div>
              </Card>
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection delay={200} className="flex flex-col h-full justify-end">
            <Card variant="glass" className="p-8 md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder={contactContent.placeholders.name}
                      aria-label="Name"
                      required
                      variant="glass"
                      size="lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="company"
                      placeholder={contactContent.placeholders.company}
                      aria-label="Company"
                      variant="glass"
                      size="lg"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      name="email"
                      placeholder={contactContent.placeholders.email}
                      type="email"
                      aria-label="Email"
                      required
                      variant="glass"
                      size="lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="phone"
                      placeholder={contactContent.placeholders.phone}
                      type="tel"
                      aria-label="Phone"
                      variant="glass"
                      size="lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder={contactContent.placeholders.message}
                    aria-label="Message"
                    required
                    variant="glass"
                    className="min-h-[150px] resize-none p-4"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    className="w-full rounded-full font-semibold transition-all duration-300"
                    variant="glow"
                    size="xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {contactContent.cta.loadingLabel}
                      </>
                    ) : (
                      contactContent.cta.label
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
