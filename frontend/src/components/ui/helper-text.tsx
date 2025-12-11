import { cn } from "@/lib/utils"
import React from "react"

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export function HelperText({ className, ...props }: HelperTextProps) {
    return (
        <p
            className={cn("text-xs text-[var(--muted-foreground)] mt-1.5 ml-1", className)}
            {...props}
        />
    )
}
