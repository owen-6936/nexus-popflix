import { cn } from "@/lib/utils"; // Utility to merge classNames
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "badge" | "milestone";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-md radius-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-opacity-80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-80",
    accent: "bg-accent text-accent-foreground hover:bg-opacity-80",
    badge: "bg-badge text-badge-foreground hover:bg-opacity-80",
    milestone: "bg-milestone text-milestone-foreground hover:bg-opacity-80",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        base,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        loading && "animate-pulse",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
