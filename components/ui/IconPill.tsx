import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type IconPillProps = {
  icon: ReactNode;
  label: string;
  tone?: "blue" | "aqua" | "green" | "amber" | "indigo" | "neutral";
};

const tones: Record<NonNullable<IconPillProps["tone"]>, string> = {
  blue: "bg-soft-sky text-primary",
  aqua: "bg-accent-aqua/10 text-accent-aqua",
  green: "bg-accent-green/10 text-accent-green",
  amber: "bg-accent-amber/10 text-[#9A620D]",
  indigo: "bg-accent-indigo/10 text-accent-indigo",
  neutral: "bg-background-soft text-text-secondary",
};

export function IconPill({ icon, label, tone = "blue" }: IconPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold",
        tones[tone],
      )}
    >
      <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">
        {icon}
      </span>
      {label}
    </span>
  );
}
