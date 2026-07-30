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
    output: "Wound status",
    color: "#1479c9",
  },
  {
    icon: Droplets,
    code: "02",
    title: "Prepare",
    output: "Clean field",
    color: "#26b6c8",
  },
  {
    icon: Gauge,
    code: "03",
    title: "Apply VAC",
    output: "Therapy control",
    color: "#f5a623",
  },
  {
    icon: ShieldCheck,
    code: "04",
    title: "Protect",
    output: "Pressure relief",
    color: "#6f86a0",
  },
  {
    icon: Activity,
    code: "05",
    title: "Review",
    output: "Plan update",
    color: "#1d9a72",
  },
];

export function WoundCarePathway() {
  return (
    <WoundSection className="bg-[linear-gradient(180deg,#ffffff,#fbfdff_52%,#fffaf2)] py-16">
      <WoundBackgroundImage className="-right-24 top-0 hidden h-72 w-[62rem] opacity-14 lg:block" src="/wound-care/pathway-circles.png" />
      <WoundBackgroundImage className="-left-28 bottom-[-5rem] hidden h-64 w-[56rem] opacity-10 lg:block" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <WoundReveal>
            <h2 className="max-w-[25rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              Wound-care pathway architecture
            </h2>
            <p className="mt-5 max-w-[25rem] text-sm leading-7 text-text-secondary">
              A visual care map for assessment, VAC readiness, pressure protection and review.
            </p>
            <div className="mt-7 grid max-w-[25rem] grid-cols-3 overflow-hidden rounded-[0.9rem] bg-white shadow-[0_14px_38px_rgba(16,42,67,0.07)] ring-1 ring-[#c9e6f8]">
              {[
                ["Map", "status"],
                ["Treat", "VAC"],
                ["Guard", "review"],
              ].map(([label, value]) => (
                <div className="border-r border-[#d8ecf8] px-3 py-4 last:border-r-0" key={label}>
                  <p className="font-heading text-[0.68rem] font-bold uppercase text-[#8aa0b4]">{label}</p>
                  <p className="mt-1 text-xs font-bold leading-5 text-primary-dark">{value}</p>
                </div>
              ))}
            </div>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="relative isolate overflow-hidden rounded-tl-[2rem] rounded-tr-[0.85rem] rounded-br-[2rem] rounded-bl-[0.85rem] bg-white p-5 shadow-[0_24px_66px_rgba(16,42,67,0.09)] ring-1 ring-[#c9e6f8] md:p-7">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#fff2dd]/80 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-24 left-6 h-56 w-72 rounded-full bg-[#ddf1ff]/80 blur-3xl" />

              <div className="relative rounded-[1.15rem] bg-[linear-gradient(135deg,#fbfdff,#ffffff_58%,#fff9ee)] p-4 ring-1 ring-[#e4f1fa] md:p-6">
                <div className="grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
                  <div className="relative min-h-[21rem] overflow-hidden rounded-[1rem] bg-[linear-gradient(145deg,#073b66,#1479c9_55%,#fff2dd_55%,#ffffff)] p-5 text-white shadow-[0_18px_48px_rgba(16,42,67,0.1)]">
                    <div aria-hidden="true" className="absolute -right-14 -top-12 h-44 w-44 rounded-full bg-white/18 blur-2xl" />
                    <div aria-hidden="true" className="absolute bottom-0 left-0 h-32 w-full bg-[linear-gradient(0deg,rgba(255,255,255,0.22),transparent)]" />
                    <div className="relative flex h-full min-h-[18rem] flex-col justify-between">
                      <div>
                        <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/70">NPWT control point</p>
                        <p className="mt-3 max-w-[16rem] font-heading text-2xl font-bold leading-tight">Seal, pressure and protection move as one.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {["Seal", "Pressure", "Offload", "Review"].map((item) => (
                          <span className="rounded-[0.7rem] bg-white/14 px-3 py-2 text-xs font-bold ring-1 ring-white/24 backdrop-blur" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px bg-[linear-gradient(180deg,#1479c9,#26b6c8,#f5a623,#6f86a0,#1d9a72)] opacity-30" />
                    <div className="grid gap-3">
                    {steps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <article className="group relative z-10 grid grid-cols-[auto_1fr] items-center gap-4 rounded-[0.85rem] bg-white/90 p-3 shadow-[0_12px_30px_rgba(16,42,67,0.06)] ring-1 ring-[#d8ecf8] transition duration-300 hover:-translate-y-1 hover:bg-white" key={step.title}>
                          <span
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-[0.8rem] bg-white shadow-[0_12px_26px_rgba(16,42,67,0.07)] ring-1 ring-[#d8ecf8]"
                            style={{ color: step.color }}
                          >
                            <Icon aria-hidden="true" className="h-6 w-6" />
                          </span>
                          <div>
                            <p className="font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: step.color }}>
                              {step.code}
                            </p>
                            <h3 className="mt-1 font-heading text-sm font-bold leading-5 text-primary-dark">{step.title}</h3>
                            <p className="mt-2 w-fit rounded-full bg-[#f4faff] px-3 py-1 text-[0.7rem] font-bold text-primary-dark ring-1 ring-[#d8ecf8]">
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
