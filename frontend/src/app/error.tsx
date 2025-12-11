"use client";

import { useEffect } from "react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[var(--background)] p-4 text-center">
            <BackgroundGrid />
            <div className="relative z-10 rounded-full bg-red-100 p-4 dark:bg-red-900/20">
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
            <div className="relative z-10 flex flex-col items-center justify-center">
                <h2 className="mt-6 text-3xl font-bold tracking-tight">
                    Something went wrong!
                </h2>
                <p className="mt-4 max-w-[500px] text-lg text-[var(--muted-foreground)]">
                    We apologize for the inconvenience. An unexpected error has occurred.
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
        </div>
    );
}
