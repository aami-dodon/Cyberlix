import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function CynalitxLogo({ className, ...props }: LogoProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("text-primary", className)}
            {...props}
        >
            {/* Modern Shield Outline */}
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

            {/* Circuit/Node Network Inside */}
            <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
            <path d="M12 6v4" className="opacity-70" />
            <path d="M12 14v4" className="opacity-70" />
            <path d="M8.5 14l3.5-2" className="opacity-70" />
            <path d="M15.5 14l-3.5-2" className="opacity-70" />

            {/* Side Nodes */}
            <circle cx="8" cy="15" r="1.5" fill="currentColor" className="opacity-80" stroke="none" />
            <circle cx="16" cy="15" r="1.5" fill="currentColor" className="opacity-80" stroke="none" />
        </svg>
    );
}
