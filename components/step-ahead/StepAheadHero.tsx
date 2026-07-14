"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, FileCheck2, Handshake, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { StepContainer, StepIconBubble, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

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
    <StepSection className="bg-[linear-gradient(112deg,#ffffff_0%,#f6fbff_58%,#eef8ff_100%)]">
      <div aria-hidden="true" className="absolute inset-0 opacity-70">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          src="/step-ahead/ambient-stepahead-bg.png"
          sizes="100vw"
        />
      </div>

      <StepContainer className="relative grid items-center gap-8 py-9 xs:py-11 sm:gap-12 sm:py-14 lg:min-h-[560px] lg:grid-cols-[0.96fr_1.04fr] lg:py-16">
        <StepReveal className="max-w-[690px]">
          <StepKicker>Diabetic foot care business-in-a-box</StepKicker>
          <h1 className="mt-5 max-w-[720px] font-heading text-[clamp(2.12rem,10vw,5.1rem)] font-bold leading-[1.02] tracking-[-0.03em] text-primary-dark lg:leading-[0.98]">
            Step-Ahead.
            <br />
            Build. Deliver. Transform.
          </h1>
          <p className="mt-6 max-w-[620px] text-sm leading-7 text-text-secondary sm:text-[1.05rem] sm:leading-8">
            A complete program to help clinics launch and scale a modern diabetic foot care service - with the right technology,
            training, inventory and step-by-step service development support.
          </p>

          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:gap-4">
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
          <div className="relative ml-auto min-h-[230px] max-w-[705px] overflow-hidden rounded-[1.1rem] bg-[#edf7ff]/80 shadow-[0_22px_58px_rgba(20,121,201,0.12)] ring-1 ring-[#bedcf2] xs:min-h-[270px] sm:min-h-[305px] sm:rounded-[1.45rem] sm:shadow-[0_28px_80px_rgba(20,121,201,0.14)]">
            <Image
              alt="Diabetic foot care clinic setup illustration"
              className="object-cover object-center opacity-[0.74]"
              fill
              priority
              src="/step-ahead/hero-clinic-program.png"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,250,255,0.2),rgba(255,255,255,0.18)_45%,rgba(231,244,255,0.55))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),rgba(255,255,255,0.62)_78%)]" />
            <div className="absolute left-1/2 top-1/2 flex max-w-[260px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center" aria-label="Diabetic foot care clinic program illustration">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-primary shadow-[0_16px_38px_rgba(20,121,201,0.14)] ring-1 ring-white/70">
                <Handshake aria-hidden="true" className="h-6 w-6" />
              </span>
            </div>
          </div>
        </StepReveal>

        <div className="col-span-full grid gap-x-7 gap-y-5 pt-1 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <StepReveal className="flex items-start gap-3" delay={0.06 * index} key={item.title}>
                <StepIconBubble className="h-9 w-9 border-transparent bg-white/70 shadow-none" size="sm">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </StepIconBubble>
                <div>
                  <p className="font-heading text-[0.8rem] font-bold text-primary-dark">{item.title}</p>
                  <p className="mt-1 text-[0.7rem] leading-5 text-text-secondary">{item.text}</p>
                </div>
              </StepReveal>
            );
          })}
        </div>
      </StepContainer>
    </StepSection>
  );
}
