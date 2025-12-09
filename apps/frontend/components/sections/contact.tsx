'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ShieldCheck } from 'lucide-react';
import { z } from 'zod';

import { products, services } from '@/lib/data';
import { submitContact } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@cynalitx/utils';
import { ContactRequest } from '@cynalitx/types';
import { useMutation } from '@tanstack/react-query';

const contactFormSchema = contactSchema.extend({
  message: contactSchema.shape.message.default(''),
  interest: contactSchema.shape.interest.or(z.literal('')).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const [submittedId, setSubmittedId] = useState<string | undefined>();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      country: '',
      message: '',
      interest: undefined,
      source: 'website',
      captchaToken: '',
    },
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: (res) => {
      setSubmittedId(res.data?.ticketId);
      form.reset({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        country: '',
        message: '',
        interest: undefined,
        source: 'website',
        captchaToken: '',
      });
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const payload: ContactRequest = {
      ...values,
      interest: values.interest || undefined,
    };
    mutation.mutate(payload);
  };

  return (
    <section id="contact" className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <Badge variant="outline">Request a demo or security review</Badge>
            <h2 className="section-heading">Talk to our cyber and AI governance specialists</h2>
            <p className="section-subtitle">
              Share your objectives—GRC automation, AI oversight, red teaming, or compliance
              readiness. Routing goes straight to our global pre-sales team.
            </p>
            <div className="rounded-2xl border border-border bg-muted/20 p-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Security-first handling</span>
              </div>
              <p className="mt-2 text-xs">
                Data is encrypted in transit and stored with zero-trust principles. Captcha required
                to reduce spam.
              </p>
            </div>
            {submittedId && (
              <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                Received. Ticket ID: {submittedId}. A specialist will reach out within 1 business
                day.
              </p>
            )}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 555 000 0000" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Organization" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.company?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <Input placeholder="CISO, CTO, Risk Lead" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.role?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Country" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.country?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interest (Product or Service)</FormLabel>
                      <FormControl>
                        <select
                          value={field.value ?? ''}
                          onChange={(event) => field.onChange(event.target.value || undefined)}
                          className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground shadow-inner outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                        >
                          <option value="" className="text-foreground">
                            Select an option
                          </option>
                          <optgroup label="Products">
                            {products.map((product) => (
                              <option
                                key={product.id}
                                value={product.id}
                                className="text-foreground"
                              >
                                {product.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Services">
                            {services.map((service) => (
                              <option
                                key={service.id}
                                value={service.id}
                                className="text-foreground"
                              >
                                {service.name}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                      </FormControl>
                      <FormMessage>{form.formState.errors.interest?.message as string}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder="Share objectives, timelines, or critical systems"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>{form.formState.errors.message?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="captchaToken"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Captcha</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter captcha response" {...field} />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">
                        Required to prevent automated spam. Integrate with reCAPTCHA or hCaptcha.
                      </p>
                      <FormMessage>{form.formState.errors.captchaToken?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                  {mutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting
                    </span>
                  ) : (
                    'Submit secure request'
                  )}
                </Button>
                {mutation.isError && (
                  <p className="text-xs text-red-400">
                    {(mutation.error as Error).message ||
                      'Unable to submit right now. Please try again.'}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
