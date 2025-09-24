import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging Tailwind CSS classes
 * Combines clsx for conditional classes with tailwind-merge for conflict resolution
 *
 * @param inputs - Class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 *
 * Example usage:
 * cn('px-4 py-2', 'bg-blue-500', { 'text-white': isActive })
 * cn('p-4', 'px-6') // Results in 'py-4 px-6' (px-6 overrides px-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
