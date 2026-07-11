import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "blue" | "aqua" | "green" | "amber" | "indigo" | "neutral";

type BadgeProps = PropsWithChildren<{
  variant?: BadgeVariant;
}>;

const variants: Record<BadgeVariant, string> = {
  blue: "bg-soft-sky text-primary",
  aqua: "bg-accent-aqua/10 text-accent-aqua",
  green: "bg-accent-green/10 text-accent-green",
  amber: "bg-accent-amber/10 text-[#9A620D]",
  indigo: "bg-accent-indigo/10 text-accent-indigo",
  neutral: "bg-background-soft text-text-secondary",
};

export function Badge({ children, variant = "blue" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
