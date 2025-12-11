"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
