"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ctas } from "@/data/ctas";
import { productShowcase } from "@/data/products";
import { cn } from "@/lib/cn";

export function SolutionShowcase() {
  const desktopSolutions = productShowcase.slice(0, 5);

  return (
    <Section id="solutions" className="overflow-hidden py-16 sm:py-20 lg:py-24" variant="soft">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="These are care-linked solutions from the N-Stride ecosystem. Product purchases are handled through our dedicated ecommerce store."
            eyebrow="Care-linked solutions"
            title="Selected solutions from the N-Stride ecosystem"
          />
          <Button external href={ctas.store.href} variant="outline">
            View N-Stride Shop
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 hidden grid-cols-[0.88fr_1.12fr] gap-5 lg:grid">
          {desktopSolutions.slice(0, 1).map((item, index) => {
            const featured = index === 0;

            return (
              <motion.article
                className={cn(
                  "group flex flex-col overflow-hidden rounded-[1.5rem] border border-border-soft bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-card",
                  featured ? "min-h-[31rem]" : "min-h-0",
                )}
                initial={{ opacity: 0, y: 18 }}
                key={item.id}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                viewport={{ once: true, amount: 0.15 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={cn(featured ? "h-44" : "hidden xl:block xl:h-20")}>
                  <ImagePlaceholder aspect="wide" label={item.image} />
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <Badge variant={item.category === "Wound Care" ? "amber" : item.category === "Bio-Fit" ? "indigo" : "blue"}>
                    {item.category}
                  </Badge>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className={cn("mt-2 text-sm leading-6 text-text-secondary", !featured && "line-clamp-2")}>
                    {item.description}
                  </p>
                  <Link
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary transition group-hover:text-primary-dark"
                    href={item.link}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.external ? "View in shop" : "View care pathway"}
                    {item.external ? <ExternalLink aria-hidden="true" className="h-4 w-4" /> : <ArrowRight aria-hidden="true" className="h-4 w-4" />}
                  </Link>
                </div>
              </motion.article>
            );
          })}
          <div className="grid grid-cols-2 gap-5">
            {desktopSolutions.slice(1).map((item, index) => (
              <motion.article
                className="group flex min-h-[15rem] flex-col overflow-hidden rounded-[1.5rem] border border-border-soft bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-card"
                initial={{ opacity: 0, y: 18 }}
                key={item.id}
                transition={{ delay: (index + 1) * 0.04, duration: 0.4 }}
                viewport={{ once: true, amount: 0.15 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="hidden h-20 xl:block">
                  <ImagePlaceholder aspect="wide" label={item.image} />
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <Badge variant={item.category === "Wound Care" ? "amber" : item.category === "Bio-Fit" ? "indigo" : "blue"}>
                    {item.category}
                  </Badge>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                  <Link
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary transition group-hover:text-primary-dark"
                    href={item.link}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.external ? "View in shop" : "View care pathway"}
                    {item.external ? <ExternalLink aria-hidden="true" className="h-4 w-4" /> : <ArrowRight aria-hidden="true" className="h-4 w-4" />}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 lg:hidden">
          {productShowcase.map((item) => (
            <article className="min-w-[82%] snap-start rounded-xl border border-border-soft bg-white p-5 shadow-soft sm:min-w-[22rem]" key={item.id}>
              <ImagePlaceholder aspect="video" label={item.image} />
              <Badge variant="blue">{item.category}</Badge>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{item.description}</p>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.external ? "View in shop" : "View care pathway"}
                {item.external ? <ExternalLink aria-hidden="true" className="h-4 w-4" /> : <ArrowRight aria-hidden="true" className="h-4 w-4" />}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
