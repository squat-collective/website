import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "stencil" | "drip";
  children: ReactNode;
}

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono text-xs uppercase tracking-wider";

  const variants = {
    default: "bg-accent/20 text-accent px-3 py-1",
    outline: "border border-accent text-accent px-3 py-1",
    stencil:
      "bg-zinc-800 text-white px-3 py-1 skew-x-[-8deg] border-l-4 border-accent",
    drip: "relative bg-accent text-black px-3 py-1 before:absolute before:bottom-0 before:left-1/4 before:w-1 before:h-2 before:bg-accent before:translate-y-full",
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

// Number badge for lists
export interface NumberBadgeProps {
  number: string | number;
  className?: string;
}

export function NumberBadge({ number, className = "" }: NumberBadgeProps) {
  return (
    <span className={`font-mono text-sm text-accent ${className}`}>
      {number.toString().padStart(2, "0")}
    </span>
  );
}
