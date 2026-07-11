import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import type { Vertical } from "@/data/types";
import { verticals } from "@/data/verticals";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type RelatedVerticalsProps = {
  current: Vertical;
};

export function RelatedVerticals({ current }: RelatedVerticalsProps) {
  const related = verticals.filter((vertical) => vertical.id !== current.id);

  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <ThemeBadge theme={current.theme}>Also connected with</ThemeBadge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
            Connected with the N-Stride ecosystem
          </h2>
        </div>
      </div>
      <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
        <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-border-soft lg:block" />
        {related.map((vertical) => {
          const theme = getThemeClasses(vertical.theme);

          return (
            <Link
              className="group relative rounded-[1.25rem] border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
              href={vertical.href}
              key={vertical.id}
            >
              <span className={cn("absolute -top-2 left-6 h-4 w-4 rounded-full border-4 border-white", theme.softBackground)} />
              <ThemeBadge theme={vertical.theme}>{vertical.shortName}</ThemeBadge>
              <h3 className="mt-4 text-xl font-semibold text-primary-dark">{vertical.name}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{vertical.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Explore {vertical.shortName}
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
