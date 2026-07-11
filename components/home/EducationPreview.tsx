"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/data/resources";

export function EducationPreview() {
  const featured = resources.slice(0, 3);
  const remaining = resources.slice(3);

  return (
    <Section id="resources" className="py-16 sm:py-20 lg:py-24" variant="soft">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Simple education for diabetic foot care, footwear decisions, wound-care support and mobility restoration."
            eyebrow="Education"
            title="Understand your feet before problems become serious"
          />
          <Button href="/resources" variant="outline">
            Explore Resources
          </Button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.article
            className="rounded-[1.75rem] border border-border-soft bg-white p-5 shadow-card"
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ImagePlaceholder aspect="wide" label={featured[0]?.image ?? "Featured resource image"} />
            <Badge variant="aqua">{featured[0]?.category}</Badge>
            <h3 className="mt-4 text-2xl font-semibold">{featured[0]?.title}</h3>
            <p className="mt-3 leading-7 text-text-secondary">{featured[0]?.summary}</p>
            <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={featured[0]?.href ?? "/resources"}>
              Read guide
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.article>

          <div className="grid gap-4">
            {featured.slice(1).map((resource, index) => (
              <motion.article
                className="rounded-[1.25rem] border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/20"
                initial={{ opacity: 0, y: 18 }}
                key={resource.id}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div>
                  <Badge variant="neutral">{resource.category}</Badge>
                  <h3 className="mt-3 text-xl font-semibold">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{resource.summary}</p>
                  <Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary" href={resource.href}>
                    Read guide
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {remaining.map((resource) => (
            <Link
              className="rounded-lg border border-border-soft bg-white px-4 py-3 text-sm font-semibold text-primary-dark shadow-soft transition hover:border-primary/35 hover:text-primary"
              href={resource.href}
              key={resource.id}
            >
              {resource.title}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
