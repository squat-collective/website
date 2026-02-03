import type { HTMLAttributes, ReactNode } from "react";

// Heading with street art style
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "title" | "subtitle" | "tag";
  gradient?: boolean;
  glitch?: boolean;
  children: ReactNode;
}

export function Heading({
  as: Tag = "h1",
  variant = "title",
  gradient = false,
  glitch = false,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const variants = {
    display: "text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter",
    title: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    subtitle: "text-xl md:text-2xl font-semibold",
    tag: "font-mono text-sm uppercase tracking-widest text-accent",
  };

  const gradientClass = gradient ? "gradient-text" : "";
  const glitchClass = glitch ? "glitch" : "";

  return (
    <Tag
      className={`${variants[variant]} ${gradientClass} ${glitchClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Text component
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "small" | "mono";
  muted?: boolean;
  children: ReactNode;
}

export function Text({
  variant = "body",
  muted = false,
  className = "",
  children,
  ...props
}: TextProps) {
  const variants = {
    body: "text-base leading-relaxed",
    lead: "text-lg md:text-xl leading-relaxed",
    small: "text-sm",
    mono: "font-mono text-sm",
  };

  const mutedClass = muted ? "text-zinc-400" : "text-zinc-300";

  return (
    <p className={`${variants[variant]} ${mutedClass} ${className}`} {...props}>
      {children}
    </p>
  );
}

// Code/Terminal style text
export interface CodeTextProps {
  children: ReactNode;
  className?: string;
}

export function CodeText({ children, className = "" }: CodeTextProps) {
  return (
    <span className={`font-mono text-accent ${className}`}>
      <span className="text-zinc-500">{">"}</span> {children}
      <span className="animate-pulse">_</span>
    </span>
  );
}

// Highlight text like spray paint
export interface HighlightProps {
  children: ReactNode;
  color?: "accent" | "secondary" | "white";
  className?: string;
}

export function Highlight({
  children,
  color = "secondary",
  className = "",
}: HighlightProps) {
  const colors = {
    accent: "text-accent",
    secondary: "text-accent-secondary",
    white: "text-white",
  };

  return (
    <span
      className={`relative ${colors[color]} ${className}`}
      style={{
        textShadow: "0 0 20px currentColor",
      }}
    >
      {children}
    </span>
  );
}
