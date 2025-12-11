"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { servicesData } from "@/config/services";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
            <div className="layout-container">
                <FadeInSection>
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-6"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home Page
                    </Link>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                            Comprehensive cybersecurity solutions designed to protect your organization against evolving threats and ensure regulatory compliance.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {servicesData.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-8 transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--card)] hover:shadow-lg hover:-translate-y-1 flex flex-col"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] ring-1 ring-[var(--primary)]/20 transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                                        <service.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-[var(--muted-foreground)] mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-sm font-semibold text-[var(--primary)] group-hover:translate-x-1 transition-transform mt-auto">
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </main>
    );
}
