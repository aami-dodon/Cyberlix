import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
    return (
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden">
            {/* Background Gradient elements for premium feel */}
            <div className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
            <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />

            <div className="relative z-10 flex max-w-2xl flex-col items-center p-8 text-center">
                <div className="mb-6 rounded-full bg-[var(--primary)]/10 p-4 text-[var(--primary)] border border-[var(--primary)]/20">
                    <Clock className="h-8 w-8" />
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--muted-foreground)]">
                    Coming Soon
                </h1>

                <p className="mt-6 text-lg text-[var(--muted-foreground)]">
                    We are working hard to bring you something amazing. This page is currently under construction and will be available shortly. Stay tuned for updates.
                </p>

                <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild className="w-full rounded-full gap-2 px-8" size="lg">
                        <Link href="/">
                            Return Home <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
