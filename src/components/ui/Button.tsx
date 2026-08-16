import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<string, string> = {
  primary: "bg-accent text-white hover:bg-accent/90",
  secondary: "border border-border text-ink hover:border-ink/40 bg-transparent",
  ghost: "text-ink hover:text-accent",
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
