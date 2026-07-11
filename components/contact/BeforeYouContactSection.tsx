"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { prepGuides } from "@/data/contact";
import { cn } from "@/lib/cn";

export function BeforeYouContactSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          description="A few details can help the team understand your enquiry faster. Do not send sensitive photos unless the N-Stride team specifically asks for them through an appropriate channel."
          eyebrow="Preparation"
          title="Before you contact us"
        />
        <div className="mt-8 grid gap-3">
          {prepGuides.map((guide, index) => {
            const open = openIndex === index;

            return (
              <article className="overflow-hidden rounded-[1.2rem] border border-border-soft bg-white shadow-soft" key={guide.queryValue}>
                <button
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  type="button"
                >
                  <span className="font-heading text-base font-semibold text-primary-dark">{guide.title}</span>
                  <ChevronDown aria-hidden="true" className={cn("h-5 w-5 text-primary transition", open && "rotate-180")} />
                </button>
                {open ? (
                  <div className="border-t border-border-soft px-5 pb-5 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {guide.items.map((item) => (
                        <ThemeBadge key={item} theme="blue">
                          {item}
                        </ThemeBadge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
