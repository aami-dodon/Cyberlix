"use client";

import { useLayoutEffect } from "react";

export function SnapScrollController() {
    useLayoutEffect(() => {
        document.documentElement.classList.add("snap-scrolling");
        return () => {
            document.documentElement.classList.remove("snap-scrolling");
        };
    }, []);

    return null;
}
