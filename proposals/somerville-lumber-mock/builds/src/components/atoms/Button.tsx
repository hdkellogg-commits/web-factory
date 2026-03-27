"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes safely.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

/**
 * Atom: Button
 * A modular, prop-driven button component following brand standards.
 */
export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-brand-secondary text-neutral-dark hover:bg-brand-secondary/90",
    secondary: "bg-brand-primary text-white hover:bg-brand-primary/90",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button
      className={cn(
        "rounded-xl transition-all duration-200 active:scale-95 tracking-wider uppercase font-sans",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
