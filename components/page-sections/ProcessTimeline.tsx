import { cn } from "@/lib/cn";

import { type PageTheme, ThemeBadge } from "./ThemeBadge";

type ProcessTimelineProps = {
  orientation?: "horizontal" | "vertical";
  steps: { description: string; title: string }[];
  variant?: PageTheme;
};

export function ProcessTimeline({ orientation = "horizontal", steps, variant = "default" }: ProcessTimelineProps) {
  const horizontal = orientation === "horizontal";

  return (
    <div className={cn("relative", horizontal && "lg:rounded-[1.75rem] lg:border lg:border-border-soft lg:bg-background-soft lg:p-6")}>
      <div className={cn("grid gap-4", horizontal && "lg:grid-cols-4")}>
        {steps.map((step, index) => (
          <article className="relative rounded-[1rem] border border-border-soft bg-white p-4 shadow-soft xs:rounded-[1.2rem] xs:p-5" key={step.title}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <ThemeBadge theme={variant}>Step {index + 1}</ThemeBadge>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
