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
    <WoundSection className="bg-[linear-gradient(180deg,#ffffff,#fbfdff_58%,#fffaf2)] py-10">
      <WoundBackgroundImage className="-right-24 top-0 hidden h-56 w-[54rem] opacity-10 lg:block" src="/wound-care/pathway-circles.png" />
      <WoundContainer>
        <div className="grid items-center gap-6 lg:grid-cols-[0.32fr_0.68fr]">
          <WoundReveal>
            <h2 className="max-w-[25rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              Wound-care pathway architecture
            </h2>
            <p className="mt-4 max-w-[25rem] text-sm leading-7 text-text-secondary">
              A visual care map for assessment, VAC readiness, pressure protection and review.
            </p>
            <div className="mt-5 grid max-w-[25rem] grid-cols-1 overflow-hidden rounded-[0.75rem] bg-white shadow-[0_12px_30px_rgba(16,42,67,0.06)] ring-1 ring-[#c9e6f8] xs:grid-cols-3">
              {[
                ["Map", "status"],
                ["Treat", "VAC"],
                ["Guard", "review"],
              ].map(([label, value]) => (
                <div className="border-b border-[#d8ecf8] px-3 py-4 last:border-b-0 xs:border-b-0 xs:border-r xs:last:border-r-0" key={label}>
                  <p className="font-heading text-[0.68rem] font-bold uppercase text-[#8aa0b4]">{label}</p>
                  <p className="mt-1 text-xs font-bold leading-5 text-primary-dark">{value}</p>
                </div>
              ))}
            </div>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="relative isolate overflow-hidden rounded-[1.15rem] bg-white p-4 shadow-[0_18px_52px_rgba(16,42,67,0.08)] ring-1 ring-[#c9e6f8] md:p-5">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#e7f6ff]/80 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-24 left-6 h-48 w-64 rounded-full bg-[#fff2dd]/70 blur-3xl" />

              <div className="relative rounded-[0.95rem] bg-[linear-gradient(135deg,#fbfdff,#ffffff_62%,#fff9ee)] p-3 ring-1 ring-[#e4f1fa] md:p-4">
                <div className="grid gap-4 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch">
                  <div className="relative min-h-[15rem] overflow-hidden rounded-[0.9rem] bg-[linear-gradient(145deg,#f8fcff,#e8f7ff_54%,#fff8ec)] p-5 text-primary-dark shadow-[0_14px_34px_rgba(16,42,67,0.08)] ring-1 ring-[#c9e6f8]">
                    <div aria-hidden="true" className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#26b6c8]/18 blur-2xl" />
                    <div aria-hidden="true" className="absolute -bottom-16 -left-12 h-40 w-48 rounded-full bg-[#f5a623]/16 blur-2xl" />
                    <div className="relative flex h-full min-h-[13rem] flex-col justify-between">
                      <div>
                        <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">NPWT control point</p>
                        <p className="mt-3 max-w-[16rem] font-heading text-2xl font-bold leading-tight">Seal, pressure and protection move as one.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {["Seal", "Pressure", "Offload", "Review"].map((item) => (
                          <span className="rounded-[0.65rem] bg-white px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_8px_20px_rgba(16,42,67,0.05)] ring-1 ring-[#d8ecf8]" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                          <article className="group relative z-10 grid grid-cols-[auto_1fr] items-center gap-3 rounded-[0.8rem] bg-white/95 p-3 shadow-[0_10px_24px_rgba(16,42,67,0.055)] ring-1 ring-[#d8ecf8] transition duration-300 hover:bg-white hover:ring-[#b8ddf2]" key={step.title}>
                            <span
                              className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.7rem] bg-white shadow-[0_10px_22px_rgba(16,42,67,0.06)] ring-1 ring-[#d8ecf8]"
                              style={{ color: step.color }}
                            >
                              <Icon aria-hidden="true" className="h-5 w-5" />
                            </span>
                            <div>
                              <p className="font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: step.color }}>
                                {step.code}
                              </p>
                              <h3 className="mt-1 font-heading text-sm font-bold leading-5 text-primary-dark">{step.title}</h3>
                              <p className="mt-2 w-fit rounded-full bg-[#f4faff] px-2.5 py-1 text-[0.68rem] font-bold text-primary-dark ring-1 ring-[#d8ecf8]">
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
            <div className="mt-3 flex flex-col gap-3 rounded-[0.75rem] bg-white px-5 py-3 text-sm font-bold text-primary-dark shadow-[0_12px_34px_rgba(16,42,67,0.07)] ring-1 ring-[#c9e6f8] sm:flex-row sm:items-center sm:justify-between">
              <span>Personalized by wound status, device suitability, pressure risk and review response.</span>
              <a className="inline-flex min-h-11 items-center gap-2 text-primary" href="/contact?type=wound-care">
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
