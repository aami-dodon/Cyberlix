import { cn } from "@/lib/utils";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export function CynalitxLogo({ className, ...props }: LogoProps) {
    return (
        <img
            src="/logo.png"
            alt="Cynalitx Logo"
            className={cn("object-contain", className)}
            {...props}
        />
    );
}
