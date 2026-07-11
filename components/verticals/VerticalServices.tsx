import { Info } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type VerticalServicesProps = {
  vertical: Vertical;
};

function splitServices(services: string[]) {
  const chunkSize = Math.ceil(services.length / 3);
  return [services.slice(0, chunkSize), services.slice(chunkSize, chunkSize * 2), services.slice(chunkSize * 2)].filter((group) => group.length > 0);
}

export function VerticalServices({ vertical }: VerticalServicesProps) {
  const theme = getThemeClasses(vertical.theme);
  const groups = splitServices(vertical.services);

  return (
    <section>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <ThemeBadge theme={vertical.theme}>Scope</ThemeBadge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">Solutions inside this vertical</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-text-secondary">
          Recommendations depend on the patient condition, evaluation and care requirement.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div className={cn("rounded-[1.5rem] border bg-white p-5 shadow-soft", index === 1 ? theme.borderColor : "border-border-soft")} key={index}>
            <div className="flex items-center justify-between">
              <span className={cn("h-2.5 w-2.5 rounded-full", theme.softBackground)} />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted">Care scope</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.map((service) => (
                <span className={cn("rounded-full border px-3 py-2 text-sm font-semibold", theme.badgeClass)} key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-[1.15rem] border border-border-soft bg-background-soft p-4 text-sm leading-6 text-text-secondary">
        <Info aria-hidden="true" className={cn("mt-0.5 h-5 w-5 shrink-0", theme.textColor)} />
        <p>This section describes care-linked solution categories. It is not an ecommerce product grid and does not replace clinical evaluation.</p>
      </div>
    </section>
  );
}
