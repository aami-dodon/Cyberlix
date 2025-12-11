import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import securityContent from "@/content/security.json";

export const metadata: Metadata = {
    title: securityContent.metadata.title,
    description: securityContent.metadata.description,
};

export default function SecurityPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[var(--background)] py-24 px-6">
            <BackgroundGrid />
            <div className="layout-container relative z-10 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> {securityContent.backLinkLabel}
            </Link>
            <h1 className="text-4xl font-bold mb-8 text-foreground">{securityContent.heading}</h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>{securityContent.lastUpdated}</p>

                {securityContent.sections.map((section) => (
                    <section key={section.heading} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{section.heading}</h2>
                        {section.body.map((paragraph, index) => (
                            <p key={`${section.heading}-${index}`}>{paragraph}</p>
                        ))}
                    </section>
                ))}
            </div>
            </div>
        </main>
    );
}
