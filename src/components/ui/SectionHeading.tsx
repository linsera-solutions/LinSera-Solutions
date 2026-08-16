import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.14em]",
            dark ? "text-accent2" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight tracking-tight md:text-4xl",
          dark ? "text-white" : "text-ink"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", dark ? "text-slate-300" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
