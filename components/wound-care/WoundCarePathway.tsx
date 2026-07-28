"use client";

import { Activity, ArrowRight, ClipboardCheck, Droplets, Gauge, ShieldCheck } from "lucide-react";

import {
  WoundBackgroundImage,
  WoundContainer,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

const steps = [
  {
    icon: ClipboardCheck,
    code: "01",
    title: "Assess",
    signal: "Depth, exudate, infection risk",
    output: "Risk category",
    color: "#1479c9",
  },
  {
    icon: Droplets,
    code: "02",
    title: "Prepare",
    signal: "Cleanse, protect, seal field",
    output: "Therapy-ready bed",
    color: "#26b6c8",
  },
  {
    icon: Gauge,
    code: "03",
    title: "VAC setup",
    signal: "Dressing, seal, pressure",
    output: "Controlled therapy",
    color: "#f5a623",
  },
  {
    icon: ShieldCheck,
    code: "04",
    title: "Protect",
    signal: "Friction, footwear, mobility",
    output: "Recurrence guard",
    color: "#6f86a0",
  },
  {
    icon: Activity,
    code: "05",
    title: "Review",
    signal: "Healing trend, alert triggers",
    output: "Adjusted plan",
    color: "#1d9a72",
  },
];

export function WoundCarePathway() {
  return (
    <WoundSection className="bg-[linear-gradient(180deg,#ffffff,#fbfdff_52%,#fffaf2)] py-12">
      <WoundBackgroundImage className="-right-24 top-0 h-72 w-[62rem] opacity-14" src="/wound-care/pathway-circles.png" />
      <WoundBackgroundImage className="-left-28 bottom-[-5rem] h-64 w-[56rem] opacity-10" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer>
        <div className="grid items-start gap-8 lg:grid-cols-[0.3fr_0.7fr]">
          <WoundReveal>
            <h2 className="max-w-[25rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              Wound-care pathway architecture
            </h2>
            <p className="mt-5 max-w-[25rem] text-sm leading-7 text-text-secondary">
              A smooth clinical flow from wound assessment to NPWT VAC setup, protection and review.
            </p>
            <div className="mt-7 grid max-w-[25rem] grid-cols-3 overflow-hidden rounded-[0.85rem] bg-white shadow-[0_14px_38px_rgba(16,42,67,0.07)] ring-1 ring-[#c9e6f8]">
              {[
                ["Input", "wound status"],
                ["Core", "VAC setup"],
                ["Loop", "review plan"],
              ].map(([label, value]) => (
                <div className="border-r border-[#d8ecf8] px-3 py-4 last:border-r-0" key={label}>
                  <p className="font-heading text-[0.68rem] font-bold uppercase text-[#8aa0b4]">{label}</p>
                  <p className="mt-1 text-xs font-bold leading-5 text-primary-dark">{value}</p>
                </div>
              ))}
            </div>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="relative isolate overflow-hidden rounded-tl-[2rem] rounded-tr-[0.75rem] rounded-br-[2rem] rounded-bl-[0.75rem] bg-white p-5 shadow-[0_24px_66px_rgba(16,42,67,0.09)] ring-1 ring-[#c9e6f8] md:p-7">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#fff2dd]/80 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-24 left-6 h-56 w-72 rounded-full bg-[#ddf1ff]/80 blur-3xl" />

              <div className="relative rounded-[1.1rem] bg-[linear-gradient(135deg,#fbfdff,#ffffff_58%,#fff9ee)] p-4 ring-1 ring-[#e4f1fa] md:p-5">
                <div className="flex flex-col gap-3 border-b border-[#d8ecf8] pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#8aa0b4]">
                      Pathway sequence
                    </p>
                    <p className="mt-1 text-sm font-bold text-primary-dark">
                      Assess - Prepare - VAC setup - Protect - Review
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-[#fff2dd] px-3 py-1.5 text-xs font-bold text-[#b86b00]">
                    NPWT-ready flow
                  </span>
                </div>

                <div className="relative mt-7">
                  <div aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-[linear-gradient(180deg,#1479c9,#26b6c8,#f5a623,#6f86a0,#1d9a72)] opacity-28 lg:left-[7%] lg:right-[7%] lg:top-[2.05rem] lg:bottom-auto lg:h-px lg:w-auto" />
                  <div className="grid gap-4 lg:grid-cols-5 lg:gap-3">
                    {steps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <article className="group relative z-10 grid grid-cols-[auto_1fr] gap-4 rounded-[0.9rem] bg-white/88 p-4 shadow-[0_14px_34px_rgba(16,42,67,0.06)] ring-1 ring-[#d8ecf8] transition duration-300 hover:-translate-y-1 hover:bg-white lg:block lg:min-h-[13.25rem] lg:text-center" key={step.title}>
                          <div className="absolute inset-x-4 top-0 hidden h-[3px] rounded-full lg:block" style={{ backgroundColor: step.color }} />
                          <span
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-tl-[1rem] rounded-tr-[0.35rem] rounded-br-[1rem] rounded-bl-[0.35rem] bg-white shadow-[0_12px_26px_rgba(16,42,67,0.07)] ring-1 ring-[#d8ecf8] lg:mx-auto"
                            style={{ color: step.color }}
                          >
                            <Icon aria-hidden="true" className="h-6 w-6" />
                          </span>
                          <div>
                            <p className="font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em] lg:mt-4" style={{ color: step.color }}>
                              {step.code}
                            </p>
                            <h3 className="mt-1 font-heading text-sm font-bold leading-5 text-primary-dark">{step.title}</h3>
                            <p className="mt-2 text-xs leading-5 text-text-secondary">{step.signal}</p>
                            <p className="mt-3 w-fit rounded-full bg-[#f4faff] px-3 py-1 text-[0.7rem] font-bold text-primary-dark ring-1 ring-[#d8ecf8] lg:mx-auto">
                              {step.output}
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 rounded-[0.85rem] bg-white px-5 py-4 text-sm font-bold text-primary-dark shadow-[0_16px_40px_rgba(16,42,67,0.08)] ring-1 ring-[#c9e6f8] sm:flex-row sm:items-center sm:justify-between">
              <span>Personalized by wound status, device suitability, pressure risk and review response.</span>
              <a className="inline-flex items-center gap-2 text-primary" href="/contact?type=wound-care">
                Request pathway guidance
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </WoundReveal>
        </div>
      </WoundContainer>
    </WoundSection>
  );
}
