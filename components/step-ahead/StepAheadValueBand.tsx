"use client";

import { CheckCircle2, Clock3, Handshake, LineChart, Repeat2 } from "lucide-react";

import { StepContainer, StepIconBubble, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

const values = [
  { title: "Proven clinical pathways and outcomes focus", icon: CheckCircle2 },
  { title: "Faster time-to-launch with expert handholding", icon: Clock3 },
  { title: "Improved patient retention & referrals", icon: Repeat2 },
  { title: "Strong ROI with new revenue streams", icon: LineChart },
  { title: "A partner you can count on, always", icon: Handshake },
];

export function StepAheadValueBand() {
  return (
    <StepSection className="py-9">
      <StepContainer>
        <StepReveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white px-8 py-9 shadow-[18px_28px_70px_rgba(20,121,201,0.075)] ring-1 ring-[#d8edf8]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-[url('/step-ahead/soft-green-wave.png')] bg-cover bg-bottom opacity-45"
            />
            <svg aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M5 15 C210 105 438 100 615 67 C800 32 965 41 1195 15" fill="none" stroke="#7ccf8d" strokeLinecap="round" strokeWidth="2.2" />
            </svg>
            <div className="relative">
              <StepKicker>Why partners choose Step-Ahead</StepKicker>
              <h2 className="mt-3 font-heading text-[clamp(1.55rem,2vw,2.15rem)] font-bold text-primary-dark">
                A partnership built for better care and better business.
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-5">
                {values.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-3 md:block" key={item.title}>
                      <StepIconBubble className="h-12 w-12 bg-[#f1fff5] text-[#4aa65a] shadow-[0_13px_30px_rgba(92,184,92,0.11)]" size="sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </StepIconBubble>
                      <p className="mt-0 max-w-[11rem] text-[0.8rem] font-bold leading-5 text-primary-dark md:mt-4">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </StepReveal>
      </StepContainer>
    </StepSection>
  );
}
