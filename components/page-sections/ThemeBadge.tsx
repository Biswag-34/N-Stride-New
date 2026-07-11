import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { getThemeClasses, type ThemeName } from "@/lib/theme";

export type PageTheme = ThemeName;

type ThemeBadgeProps = PropsWithChildren<{
  className?: string;
  theme?: PageTheme;
}>;

export function ThemeBadge({ children, className, theme = "default" }: ThemeBadgeProps) {
  const themeClasses = getThemeClasses(theme);

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]",
        themeClasses.badgeClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
