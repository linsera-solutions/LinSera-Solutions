import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-soft px-3 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
