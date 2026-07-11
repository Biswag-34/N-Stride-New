import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

import { type PageTheme, ThemeBadge } from "./ThemeBadge";

type ServiceGridProps = {
  description?: string;
  items: string[];
  title?: string;
  variant?: PageTheme;
};

export function ServiceGrid({ description, items, title, variant = "default" }: ServiceGridProps) {
  return (
    <div>
      {title ? <SectionHeading description={description} title={title} /> : null}
      <div className={cn("grid gap-3", title && "mt-8", "sm:grid-cols-2 lg:grid-cols-3")}>
        {items.map((item) => (
          <div className="rounded-[1.1rem] border border-border-soft bg-white px-4 py-3 shadow-soft" key={item}>
            <ThemeBadge theme={variant}>{item}</ThemeBadge>
          </div>
        ))}
      </div>
    </div>
  );
}
