import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-foreground shadow-inner outline-none transition focus:border-ring focus:ring-2 focus:ring-ring',
        'placeholder:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

export { Input };
