"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { leadCaptureHref } from "@/data/leadCapture";
import { StepContainer, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

const faqs = [
  "How long does it take to launch the service?",
  "Can I upgrade my package later?",
  "What kind of space is required?",
  "What ongoing support do you provide?",
  "Do you provide training for our team?",
  "Is financing available?",
];

export function StepAheadFAQ() {
  return (
    <StepSection className="border-t border-[#dcecf7] py-12">
      <StepContainer>
        <StepReveal className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <StepKicker>Frequently asked questions</StepKicker>
            <h2 className="mt-3 font-heading text-[clamp(1.55rem,2vw,2.05rem)] font-bold text-primary-dark">
              Answers to help you take the next step.
            </h2>
          </div>
          <Link className="text-sm font-bold text-primary transition hover:text-primary-dark" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })}>
            Still have questions? Contact our team {"->"}
          </Link>
        </StepReveal>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((question) => (
            <button
              className="flex min-h-[3.2rem] items-center justify-between rounded-[0.45rem] border border-[#cfe8f8] bg-white px-5 text-left text-[0.82rem] font-bold text-primary-dark shadow-[0_8px_20px_rgba(20,121,201,0.035)] transition hover:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
              key={question}
              type="button"
            >
              {question}
              <ChevronDown aria-hidden="true" className="h-4 w-4 text-primary" />
            </button>
          ))}
        </div>
      </StepContainer>
    </StepSection>
  );
}
