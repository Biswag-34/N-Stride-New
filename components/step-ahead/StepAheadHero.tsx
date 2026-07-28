"use client";

import Image from "next/image";
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
    <StepSection className="bg-[linear-gradient(112deg,#ffffff_0%,#f6fbff_58%,#eef8ff_100%)]">
      <div aria-hidden="true" className="absolute inset-0 opacity-44">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          src="/step-ahead/ambient-stepahead-bg.png"
          sizes="100vw"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,#ffffff_86%)]" />
      <StepContainer className="relative grid items-center gap-6 pb-9 pt-3 xs:pb-10 xs:pt-4 sm:gap-10 lg:min-h-[520px] lg:grid-cols-[0.95fr_1.05fr] lg:py-5">
        <StepReveal className="max-w-[690px]">
          <h1 className="max-w-[650px] font-heading text-[clamp(2rem,7vw,4.05rem)] font-bold leading-[1.04] text-primary-dark lg:leading-[1]">
            <span className="block whitespace-nowrap">Step-Ahead clinics.</span>
            <span className="block whitespace-nowrap">Built to launch.</span>
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
          <div className="absolute bottom-2 right-[8%] h-24 w-[72%] rounded-full bg-[#d8f1ff]/78 blur-[42px]" />
          <div className="relative ml-auto min-h-[230px] max-w-[720px] xs:min-h-[270px] sm:min-h-[330px]">
            <Image
              alt="Diabetic foot care clinic setup illustration"
              className="object-contain object-center mix-blend-multiply"
              fill
              priority
              src="/step-ahead/hero-clinic-program.png"
              sizes="(min-width: 1024px) 48vw, 100vw"
              style={{
                maskImage: "radial-gradient(ellipse at center, #000 57%, rgba(0,0,0,0.78) 73%, transparent 94%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, #000 57%, rgba(0,0,0,0.78) 73%, transparent 94%)",
              }}
            />
          </div>
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
