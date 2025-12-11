import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service - Cynalitx",
    description: "Terms of Service for Cynalitx",
};

export default function TermsPage() {
    return (
        <main className="layout-container py-24 px-6 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home Page
            </Link>
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>Last updated: December 12, 2025</p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Cynalitx (“we,” “us” or “our”), concerning your access to and use of our website and services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Representations</h2>
                <p>
                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Contact Us</h2>
                <p>
                    If you have questions or comments about these terms, you may email us at support@cynalitx.com.
                </p>
            </div>
        </main>
    );
}
