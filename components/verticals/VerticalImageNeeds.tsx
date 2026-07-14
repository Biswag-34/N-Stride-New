import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Vertical } from "@/data/types";

type VerticalImageNeedsProps = {
  vertical: Vertical;
};

export function VerticalImageNeeds({ vertical }: VerticalImageNeedsProps) {
  return (
    <section aria-label="Development image checklist">
      <details className="group rounded-[1.25rem] border border-dashed border-border-soft bg-background-soft p-4">
        <summary className="cursor-pointer list-none text-sm font-bold text-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">
          Images needed for this page
          <span className="ml-2 text-xs font-semibold text-text-muted">(development checklist)</span>
        </summary>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Final N-Stride clinical and product imagery is shown as assets are approved.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {vertical.imageNeeds.map((image) => (
            <ImagePlaceholder aspect="video" key={image} label={image} />
          ))}
        </div>
      </details>
    </section>
  );
}
