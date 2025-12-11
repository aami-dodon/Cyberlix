"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import "./globals.css"; // Ensure styles are loaded
import { RotateCcw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)] antialiased">
                <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
                        <svg
                            className="h-12 w-12 text-red-600 dark:text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h1 className="mt-6 text-3xl font-bold tracking-tight">
                        Critical Error
                    </h1>
                    <p className="mt-4 max-w-[500px] text-lg text-[var(--muted-foreground)]">
                        A critical error occurred and the application cannot recover. Please try refreshing the page.
                    </p>
                    <div className="mt-8">
                        <Button
                            onClick={() => reset()}
                            size="lg"
                            variant="outline"
                            className="rounded-full gap-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Try Again
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
