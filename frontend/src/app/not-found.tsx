import Link from "next/link";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[var(--background)] p-4 text-center">
            <BackgroundGrid />
            <div className="relative z-10 flex flex-col items-center justify-center">
                <h1 className="text-[150px] font-bold leading-none text-[var(--primary)] text-transparent bg-clip-text bg-gradient-to-b from-[var(--primary)] to-[var(--primary)]/50">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    Page Not Found
                </h2>
                <p className="mt-4 max-w-[500px] text-lg text-[var(--muted-foreground)]">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
                    moved, deleted, or never existed.
                </p>
                <div className="mt-8 flex gap-4">
                    <Button asChild size="xl" className="rounded-full">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
