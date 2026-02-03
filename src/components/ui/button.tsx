import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "tag";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider transition-all";

  const variants = {
    primary:
      "border-2 border-accent bg-accent text-black hover:bg-transparent hover:text-accent hover:shadow-[4px_4px_0_0_var(--accent)]",
    secondary:
      "border-2 border-zinc-700 text-zinc-300 hover:border-accent-secondary hover:text-accent-secondary hover:shadow-[4px_4px_0_0_var(--accent-secondary)]",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    tag: "bg-zinc-800 text-accent border border-zinc-700 skew-x-[-5deg] hover:bg-accent hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Link variant for navigation
export interface ButtonLinkProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "tag";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external = false,
}: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider transition-all";

  const variants = {
    primary:
      "border-2 border-accent bg-accent text-black hover:bg-transparent hover:text-accent hover:shadow-[4px_4px_0_0_var(--accent)]",
    secondary:
      "border-2 border-zinc-700 text-zinc-300 hover:border-accent-secondary hover:text-accent-secondary hover:shadow-[4px_4px_0_0_var(--accent-secondary)]",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    tag: "bg-zinc-800 text-accent border border-zinc-700 skew-x-[-5deg] hover:bg-accent hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
