"use client";

import { ArrowRight, BarChart3, FileCheck2, Handshake, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const proofItems = [
  {
    icon: FileCheck2,
    title: "Proven Clinical Model",
    text: "Evidence-aligned pathways and protocols",
  },
  {
    icon: RefreshCcw,
    title: "End-to-End Support",
    text: "From setup to scale - we are with you at every step",
  },
  {
    icon: Handshake,
    title: "Partner-First Mindset",
    text: "Built for clinics, designed for impact and growth",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    text: "Better patient results, stronger clinic outcomes",
  },
];

export function StepAheadHero() {
  return (
    <StepSection className="bg-[url('/requested-assets/stepahead-hero.png')] bg-cover bg-center">
      <StepContainer className="relative grid items-center gap-8 pb-12 pt-8 xs:pb-14 xs:pt-10 sm:gap-10 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
        <StepReveal className="max-w-[690px]">
          <h1 className="max-w-[650px] font-heading text-[clamp(2rem,6.5vw,3.9rem)] font-bold leading-[1.04] text-primary-dark lg:leading-[1.02]">
            <span className="block">Launch diabetic foot-care services with confidence.</span>
          </h1>
          <p className="mt-5 max-w-[610px] text-sm leading-7 text-text-secondary sm:text-[1rem] sm:leading-8">
            A complete program to help clinics launch and scale a modern diabetic foot care service - with the right technology,
            training, inventory and step-by-step service development support.
          </p>

          <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:gap-4">
            <Button className="w-full rounded-[0.55rem] px-5 shadow-[0_16px_32px_rgba(20,121,201,0.18)] xs:w-auto xs:px-7" href="/contact?type=step-ahead" size="lg">
              Book a Strategy Call
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="w-full rounded-[0.55rem] bg-white/80 px-5 xs:w-auto xs:px-7" href="/contact?type=step-ahead" size="lg" variant="outline">
              Download Program Overview
            </Button>
          </div>
        </StepReveal>

        <StepReveal delay={0.1} className="relative">
          <div className="relative ml-auto min-h-[230px] max-w-[720px] xs:min-h-[270px] sm:min-h-[330px]" />
        </StepReveal>

        <div className="col-span-full grid gap-x-7 gap-y-4 pt-0 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <StepReveal className="flex items-start gap-4" delay={0.06 * index} key={item.title}>
                <StepIconBubble className="h-14 w-14 border-transparent bg-white/76 shadow-[0_12px_28px_rgba(20,121,201,0.1)]" size="md">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </StepIconBubble>
                <div>
                  <p className="font-heading text-[0.86rem] font-bold text-primary-dark">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-text-secondary">{item.text}</p>
                </div>
              </StepReveal>
            );
          })}
        </div>
      </StepContainer>
    </StepSection>
  );
}
