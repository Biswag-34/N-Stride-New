import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { type PageTheme, ThemeBadge } from "./ThemeBadge";

type ProofPointGridProps = {
  description?: string;
  points: string[];
  title?: string;
  variant?: PageTheme;
};

export function ProofPointGrid({ description, points, title, variant = "blue" }: ProofPointGridProps) {
  return (
    <div>
      {title ? <SectionHeading description={description} title={title} /> : null}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {points.map((point) => (
          <article className="rounded-[1.2rem] border border-border-soft bg-white p-5 shadow-soft" key={point}>
            <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-accent-aqua" />
            <p className="mt-4 text-sm leading-6 text-text-secondary">{point}</p>
            <div className="mt-4">
              <ThemeBadge theme={variant}>Trust point</ThemeBadge>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
