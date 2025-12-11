import { cn } from "@/lib/utils";

type BackgroundGridProps = {
  className?: string;
};

export function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10",
        className
      )}
    />
  );
}
