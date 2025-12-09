import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const gradientBorder =
  'border border-transparent bg-gradient-to-r from-brand-neon via-brand-accent to-brand-primary';
