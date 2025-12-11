import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Security - Cynalitx",
    description: "Security information for Cynalitx",
};

export default function SecurityPage() {
    return (
        <main className="layout-container py-24 px-6 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home Page
            </Link>
            <h1 className="text-4xl font-bold mb-8 text-foreground">Security</h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>Last updated: December 12, 2025</p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Our Commitment to Security</h2>
                <p>
                    At Cynalitx, specific attention is paid to the security of our platform and the protection of your data. We employ industry-standard security practices to ensure that your information remains safe.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Data Protection</h2>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Monitoring and Reporting</h2>
                <p>
                    We continuously monitor our systems for potential vulnerabilities and attacks. If you believe you have found a security vulnerability in our service, please report it to us at security@cynalitx.com.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Certified Processes</h2>
                <p>
                    Our security processes are designed to meet the rigorous standards expected by enterprise clients. We regularly review and update our security policies to adapt to evolving threats.
                </p>
            </div>
        </main>
    );
}
