"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";
import { cn } from "@/lib/cn";

export function StepAheadFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          description="Practical answers for providers evaluating the Step-Ahead program."
          eyebrow="FAQ"
          title="Step-Ahead questions"
        />
        <div className="mt-8 grid gap-3">
          {stepAheadProgram.faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <article className="overflow-hidden rounded-[1.2rem] border border-border-soft bg-white shadow-soft" key={faq.question}>
                <button
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  type="button"
                >
                  <span className="font-heading text-base font-semibold text-primary-dark">{faq.question}</span>
                  <ChevronDown aria-hidden="true" className={cn("h-5 w-5 shrink-0 text-primary transition", open && "rotate-180")} />
                </button>
                {open ? <p className="border-t border-border-soft px-5 pb-5 pt-4 text-sm leading-7 text-text-secondary">{faq.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
