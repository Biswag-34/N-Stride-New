import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type SectionVariant = "white" | "soft" | "blue" | "navy";

type SectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
  variant?: SectionVariant;
}>;

const variants: Record<SectionVariant, string> = {
  white: "bg-background text-text-primary",
  soft: "bg-background-soft text-text-primary",
  blue: "bg-primary text-white",
  navy: "bg-primary-dark text-white",
};

export function Section({ children, className, id, variant = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-[var(--section-padding)]", variants[variant], className)}
    >
      {children}
    </section>
  );
}
