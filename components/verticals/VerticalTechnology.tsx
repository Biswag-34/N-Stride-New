import { Activity, CircleDot } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type VerticalTechnologyProps = {
  vertical: Vertical;
};

export function VerticalTechnology({ vertical }: VerticalTechnologyProps) {
  const theme = getThemeClasses(vertical.theme);

  return (
    <section className="grid gap-6 rounded-[1.75rem] border border-border-soft bg-background-soft p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-soft">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,230,248,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(201,230,248,0.35)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative">
          <span className={cn("flex h-12 w-12 items-center justify-center rounded-lg", theme.softBackground, theme.textColor)}>
            <Activity aria-hidden="true" className="h-6 w-6" />
          </span>
          <ThemeBadge className="mt-6" theme={vertical.theme}>
            Care logic
          </ThemeBadge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark">Technology, expertise & care logic</h2>
          <p className="mt-4 leading-7 text-text-secondary">
            This layer explains the methods, assessment inputs and product logic that shape {vertical.shortName} recommendations.
          </p>
        </div>
      </div>
      <div className="grid gap-3">
        {vertical.technologyPoints.map((point) => (
          <div className="flex gap-3 rounded-[1rem] border border-border-soft bg-white p-4 shadow-soft" key={point}>
            <CircleDot aria-hidden="true" className={cn("mt-0.5 h-5 w-5 shrink-0", theme.textColor)} />
            <p className="text-sm leading-6 text-text-secondary">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
