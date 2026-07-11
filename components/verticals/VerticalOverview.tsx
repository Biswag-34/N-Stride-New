import { GitBranch, Link2 } from "lucide-react";
import Link from "next/link";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { brand } from "@/data/brand";
import type { Vertical } from "@/data/types";
import { verticals } from "@/data/verticals";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type VerticalOverviewProps = {
  vertical: Vertical;
};

const connectedVerticals: Record<string, string[]> = {
  kinetics: ["Insight", "Wound Care"],
  insight: ["Kinetics", "Wound Care", "Bio-Fit"],
  "wound-care": ["Insight", "Kinetics"],
  "bio-fit": ["Insight"],
};

export function VerticalOverview({ vertical }: VerticalOverviewProps) {
  const theme = getThemeClasses(vertical.theme);
  const connected = connectedVerticals[vertical.id] ?? [];
  const connectedItems = connected
    .map((shortName) => verticals.find((item) => item.shortName === shortName))
    .filter(Boolean) as Vertical[];

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
      <div>
        <ThemeBadge theme={vertical.theme}>Overview</ThemeBadge>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
          Built as part of one connected care ecosystem.
        </h2>
        <p className="mt-5 leading-8 text-text-secondary">{vertical.shortDescription}</p>
        <p className="mt-4 leading-8 text-text-secondary">{vertical.longDescription}</p>
        <p className="mt-5 rounded-[1.1rem] border border-border-soft bg-background-soft p-4 text-sm font-semibold leading-6 text-primary-dark">
          Part of the N-Stride connected care ecosystem: {brand.positioningStatement}
        </p>
      </div>

      <div className={cn("relative overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-card", theme.borderColor)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(38,182,200,0.12),transparent_18rem)]" />
        <div className="relative">
          <span className={cn("flex h-12 w-12 items-center justify-center rounded-lg", theme.softBackground, theme.textColor)}>
            <GitBranch aria-hidden="true" className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-2xl font-semibold text-primary-dark">Role in the care pathway</h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">{vertical.tagline}</p>
          <div className="my-6 h-px bg-gradient-to-r from-border-soft via-primary/30 to-border-soft" />
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-text-muted">Connected with</p>
          <div className="mt-4 grid gap-3">
            {connectedItems.map((item) => (
              <Link
                className="group flex items-center justify-between rounded-[1rem] border border-border-soft bg-background-soft px-4 py-3 text-sm font-semibold text-primary-dark transition hover:border-primary/30 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                href={item.href}
                key={item.id}
              >
                <span className="flex items-center gap-3">
                  <Link2 aria-hidden="true" className={cn("h-4 w-4", getThemeClasses(item.theme).textColor)} />
                  {item.shortName}
                </span>
                <span className="text-primary opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">View</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
