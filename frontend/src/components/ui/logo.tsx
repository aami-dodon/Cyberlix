import { cn } from "@/lib/utils";

export function CyberlixLogo({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("text-primary", className)}
            {...props}
        >
            {/* Outer Hexagon Shield */}
            <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" />

            {/* Inner Core Circuit */}
            <path
                d="M50 25V40 M50 60V75 M35 50H25 M75 50H65"
                strokeWidth="6"
            />

            {/* Central Node */}
            <path
                d="M50 50m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"
                strokeWidth="6"
            />

            {/* Dynamic Accents */}
            <circle cx="50" cy="15" r="4" fill="currentColor" stroke="none" className="animate-pulse" />
        </svg>
    );
}

