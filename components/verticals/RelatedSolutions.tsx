import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { ctas } from "@/data/ctas";
import { productShowcase } from "@/data/products";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type RelatedSolutionsProps = {
  vertical: Vertical;
};

export function RelatedSolutions({ vertical }: RelatedSolutionsProps) {
  const products = productShowcase.filter((product) => vertical.relatedProducts.includes(product.title));
  const matchedTitles = products.map((product) => product.title);
  const unmatched = vertical.relatedProducts.filter((item) => !matchedTitles.includes(item));
  const theme = getThemeClasses(vertical.theme);

  if (products.length === 0 && unmatched.length === 0) {
    return null;
  }

  const consultationFirst = vertical.id === "insight" || vertical.id === "wound-care" || vertical.id === "bio-fit";

  return (
    <section>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <ThemeBadge theme={vertical.theme}>Related solutions</ThemeBadge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
            Related ecosystem solutions
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-text-secondary">
            These are care-linked solution categories, not a selling grid. Purchase flows remain separate where relevant.
          </p>
        </div>
        <Button external={!consultationFirst} href={consultationFirst ? vertical.cta.primary.href : ctas.store.href} variant="outline">
          {consultationFirst ? vertical.cta.primary.label : "View Products on N-Stride Shop"}
          {!consultationFirst ? <ExternalLink aria-hidden="true" className="h-4 w-4" /> : null}
        </Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article className={cn("rounded-[1.25rem] border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card", theme.borderColor)} key={product.id}>
            <ThemeBadge theme={vertical.theme}>{product.category}</ThemeBadge>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">{product.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-text-secondary">{product.description}</p>
            <Link
              className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
              href={product.link}
              target={product.external ? "_blank" : undefined}
              rel={product.external ? "noreferrer" : undefined}
            >
              {product.external ? "View in shop" : "View pathway"}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>
        ))}
        {unmatched.map((solution) => (
          <div className="rounded-[1.25rem] border border-border-soft bg-background-soft p-5" key={solution}>
            <ThemeBadge theme={vertical.theme}>Solution</ThemeBadge>
            <p className="mt-4 text-lg font-semibold text-primary-dark">{solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
