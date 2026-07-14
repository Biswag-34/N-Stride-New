"use client";

import { CheckCircle2, CircleOff, FlaskConical, Network } from "lucide-react";

import { StepContainer, StepIconBubble, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

const stats = [
  { icon: FlaskConical, value: "80M+", label: "People in India at risk of diabetic foot issues*" },
  { icon: CircleOff, value: "70%", label: "Amputations are preventable*" },
  { icon: Network, value: "500+", label: "Clinics can be equipped and supported" },
];

const audience = [
  "Launch a dedicated diabetic foot care service",
  "Expand existing care with a structured program",
  "Improve patient outcomes and reduce complications",
  "Create a new revenue stream with sustainable margins",
  "Differentiate their clinic in the community",
];

export function StepAheadWhy() {
  return (
    <StepSection className="bg-white py-[4.5rem]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[#d7ebfa]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#e6f2fb]" />
      <StepContainer>
        <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <StepReveal>
            <StepKicker>Why Step-Ahead exists</StepKicker>
            <h2 className="mt-4 max-w-[620px] font-heading text-[clamp(2rem,3.2vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-primary-dark">
              Bringing structured diabetic foot care to more communities.
            </h2>
            <p className="mt-5 max-w-[675px] text-[0.98rem] leading-8 text-text-secondary">
              Most clinics want to deliver better diabetic foot care but face real barriers - complete setup, high costs, lack of
              training and limited time. Step-Ahead removes the guesswork and gives you a ready-to-execute framework for clinical
              excellence and sustainable growth.
            </p>
            <div className="mt-10 grid max-w-[650px] gap-7 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="min-w-0" key={stat.value}>
                    <StepIconBubble className="h-12 w-12 border-transparent shadow-none" size="sm">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </StepIconBubble>
                    <p className="mt-4 font-heading text-[2rem] font-bold leading-none text-primary">{stat.value}</p>
                    <p className="mt-2 max-w-[10rem] text-xs leading-5 text-text-secondary">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-7 max-w-[520px] text-[0.68rem] leading-5 text-text-muted">
              *References for client verification before publication.
            </p>
          </StepReveal>

          <StepReveal delay={0.08}>
            <div className="relative mt-1 overflow-hidden rounded-[1.65rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(238,248,255,0.78))] p-8 shadow-[0_24px_70px_rgba(20,121,201,0.08)] ring-1 ring-[#d5eafa]">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#dff4ff] blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-[#ebfaef] blur-3xl" />
              <div className="relative">
                <StepKicker className="bg-white/80 text-primary">Who it is for</StepKicker>
                <h3 className="mt-4 max-w-[560px] font-heading text-[1.55rem] font-bold leading-tight text-primary-dark">
                  Designed for clinics and healthcare entrepreneurs who are ready to:
                </h3>
                <ul className="mt-6 space-y-4">
                  {audience.map((item) => (
                    <li className="flex gap-3 text-sm font-semibold leading-6 text-text-secondary" key={item}>
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
