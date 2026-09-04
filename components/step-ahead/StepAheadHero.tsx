"use client";

import { ArrowRight, BarChart3, FileCheck2, Handshake, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { leadCaptureHref } from "@/data/leadCapture";

import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const proofItems = [
  {
    icon: FileCheck2,
    title: "Structured Care Model",
    text: "Evidence-aligned pathways and protocols",
  },
  {
    icon: RefreshCcw,
    title: "Connected Support",
    text: "From setup to scale - we are with you at every step",
  },
  {
    icon: Handshake,
    title: "Partner-First Mindset",
    text: "Built for clinics, designed for impact and growth",
  },
  {
    icon: BarChart3,
    title: "Clearer Tracking",
    text: "Documentation, follow-up and service visibility",
  },
];

export function StepAheadHero() {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white md:hidden">
      <div className="relative min-h-[29rem] overflow-hidden px-4 pb-5 pt-6 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,102,0.94)_0%,rgba(7,59,102,0.76)_43%,rgba(7,59,102,0.16)_100%),url('/requested-assets/stepahead-hero.png')] bg-cover bg-[63%_center]" />
        <div className="relative z-10 max-w-[18.5rem]">
          <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#73dcff]">Step-Ahead</p>
          <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-white">
            Launch a structured diabetic foot-care service.
          </h1>
          <p className="mt-3 text-[0.88rem] font-medium leading-6 text-white/88">
            Equipment, training, starter inventory and launch support in one configurable program.
          </p>
        </div>
      </div>
      <div className="-mt-12 px-4 pb-6">
        <div className="grid gap-2">
          {proofItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="nstride-mobile-card grid min-h-[4.35rem] grid-cols-[2rem_3rem_1fr] items-center gap-2 px-3 py-2.5" key={item.title}>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-extrabold text-white">{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-[0.75rem] bg-soft-sky text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-extrabold text-primary-dark">{item.title}</span>
                  <span className="mt-0.5 block text-[0.72rem] font-medium leading-4 text-text-secondary">{item.text}</span>
                </span>
              </div>
            );
          })}
        </div>
        <Button className="nstride-mobile-action mt-4 w-full rounded-[0.75rem]" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })} size="lg">
          Discuss Step-Ahead partnership
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </section>

    <StepSection className="hidden bg-[url('/requested-assets/stepahead-hero.png')] bg-cover bg-center md:block">
      <StepContainer className="relative grid items-center gap-8 pb-12 pt-8 xs:pb-14 xs:pt-10 sm:gap-10 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
        <StepReveal className="max-w-[690px]">
          <h1 className="max-w-[650px] font-heading text-[clamp(2rem,6.5vw,3.9rem)] font-bold leading-[1.04] text-primary-dark lg:leading-[1.02]">
            <span className="block">Launch a structured diabetic foot-care service in your clinic.</span>
          </h1>
          <p className="mt-5 max-w-[610px] text-sm leading-7 text-text-secondary sm:text-[1rem] sm:leading-8">
            A configurable partnership program combining equipment, training, starter inventory, operating procedures and launch support.
          </p>

          <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:gap-4">
            <Button className="w-full rounded-[0.55rem] px-5 shadow-[0_16px_32px_rgba(20,121,201,0.18)] xs:w-auto xs:px-7" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })} size="lg">
              Book a Strategy Call
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="w-full rounded-[0.55rem] bg-white/80 px-5 xs:w-auto xs:px-7" href={leadCaptureHref({ cta: "request_program_overview", source: "/step-ahead", type: "step-ahead" })} size="lg" variant="outline">
              Request Program Overview
            </Button>
          </div>
        </StepReveal>

        <StepReveal delay={0.1} className="relative">
          <div className="relative ml-auto aspect-[16/9] max-w-[720px] md:min-h-[330px]" />
        </StepReveal>

        <div className="col-span-full grid gap-x-7 gap-y-4 pt-0 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
