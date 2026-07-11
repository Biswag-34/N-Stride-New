import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type CardProps = PropsWithChildren<{
  className?: string;
  interactive?: boolean;
}>;

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-soft/80 bg-surface-elevated shadow-card",
        interactive && "transition duration-200 hover:-translate-y-1 hover:shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
