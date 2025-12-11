import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy - Cynalitx",
    description: "Privacy Policy for Cynalitx",
};

export default function PrivacyPage() {
    return (
        <main className="layout-container py-24 px-6 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home Page
            </Link>
            <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
                <p>Last updated: [Date]</p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
                <p>
                    Welcome to Cynalitx. We value your privacy and are dedicated to protecting your personal data.
                    This privacy policy explains how we collect, use, and safeguard your information when you visit our website
                    and use our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
                <p>
                    We may collect personal information that you voluntarily provide to us when you register on the website,
                    express an interest in obtaining information about us or our products and services, when you participate
                    in activities on the website, or otherwise when you contact us.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
                <p>
                    We use personal information collected via our website for a variety of business purposes described below.
                    We process your personal information for these purposes in reliance on our legitimate business interests,
                    in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Contact Us</h2>
                <p>
                    If you have questions or comments about this policy, you may email us at support@cynalitx.com.
                </p>
            </div>
        </main>
    );
}
