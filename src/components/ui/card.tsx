import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "sticker" | "spray";
  children: ReactNode;
}

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles = "transition-all";

  const variants = {
    default: "bg-zinc-900/50 p-6",
    bordered:
      "border border-zinc-800 p-6 hover:border-accent hover:shadow-[4px_4px_0_0_var(--accent)]",
    sticker:
      "bg-zinc-900 p-6 rotate-[-1deg] hover:rotate-0 border-2 border-zinc-800 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]",
    spray:
      "relative p-6 bg-zinc-900/80 before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent before:opacity-0 hover:before:opacity-100",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function CardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag className={`text-xl font-bold text-white ${className}`}>
      {children}
    </Tag>
  );
}

export interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return <p className={`text-zinc-400 ${className}`}>{children}</p>;
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
