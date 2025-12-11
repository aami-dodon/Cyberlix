"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    delay?: number;
}

export function FadeInSection({
    children,
    className,
    delay = 0,
    ...props
}: FadeInSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Unobserve after triggering once for a professional "entry" feel
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, {
            // Trigger when 10% of the element is visible
            threshold: 0.1,
            // Adjust margin to trigger slightly earlier/later if needed
            rootMargin: "0px 0px -50px 0px"
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={cn(
                "transition-all duration-1000 ease-out transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    );
}
