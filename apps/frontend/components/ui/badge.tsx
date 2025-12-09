import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide';
    const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
      default: 'bg-primary/15 text-primary border border-primary/30',
      outline: 'border border-border text-foreground',
      ghost: 'bg-muted text-muted-foreground',
    };

    return <span ref={ref} className={cn(base, variants[variant], className)} {...props} />;
  },
);

Badge.displayName = 'Badge';
