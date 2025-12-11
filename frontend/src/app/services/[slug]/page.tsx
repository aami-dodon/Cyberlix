import { notFound } from "next/navigation";
import servicesContent from "@/content/services.json";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { mapServicesWithIcons } from "@/lib/service-icon-map";

const servicesData = mapServicesWithIcons(servicesContent.list);
const serviceDetailContent = servicesContent.detailPage;

// This is a server component by default in app directory
export function generateStaticParams() {
    return servicesContent.list.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[var(--background)] pt-32 pb-20">
            <BackgroundGrid />
            <div className="layout-container relative z-10">
                <FadeInSection>
                    <Link
                        href="/services"
                        className="inline-flex items-center text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> {serviceDetailContent.backLinkLabel}
                    </Link>
                </FadeInSection>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <FadeInSection delay={100}>
                        <div>
                            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] mb-6">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-[var(--muted-foreground)] leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="flex gap-4">
                                <Button size="lg" className="text-base" asChild>
                                    <Link href="/#contact">{serviceDetailContent.ctaLabel}</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <div className="bg-[var(--card)]/50 border border-[var(--border)] rounded-2xl p-8 lg:p-10">
                            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                                {serviceDetailContent.sectionHeading}
                            </h2>
                            <ul className="space-y-4">
                                {service.details.map((detail, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                                        <span className="text-[var(--muted-foreground)] text-lg">
                                            {detail}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </main>
    );
}
