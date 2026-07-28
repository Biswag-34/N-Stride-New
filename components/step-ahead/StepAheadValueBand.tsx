"use client";

import { CheckCircle2, Clock3, Handshake, LineChart, Repeat2 } from "lucide-react";

import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const values = [
  { title: "Proven clinical pathways and outcomes focus", icon: CheckCircle2 },
  { title: "Faster time-to-launch with expert handholding", icon: Clock3 },
  { title: "Improved patient retention & referrals", icon: Repeat2 },
  { title: "Strong ROI with new revenue streams", icon: LineChart },
  { title: "A partner you can count on, always", icon: Handshake },
];

export function StepAheadValueBand() {
  return (
    <StepSection className="bg-white py-9">
      <StepContainer>
        <StepReveal>
          <div className="relative overflow-hidden rounded-[1rem] bg-[linear-gradient(135deg,#073b66,#0f6eb9_58%,#eafaf0_58%,#ffffff)] px-5 py-7 shadow-[18px_28px_70px_rgba(20,121,201,0.11)] ring-1 ring-[#d8edf8] lg:px-7 lg:py-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-[url('/step-ahead/soft-green-wave.png')] bg-cover bg-bottom opacity-28"
            />
            <div className="relative grid gap-7 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
              <div className="text-white">
              <h2 className="font-heading text-[clamp(1.6rem,2.2vw,2.35rem)] font-bold leading-tight text-white">
                A partnership built for better care and better business.
              </h2>
                <p className="mt-4 text-sm leading-7 text-white/82">
                  Built for clinics and healthcare entrepreneurs who want a credible care service, not just equipment.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-5">
                {values.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="rounded-[0.85rem] bg-white/88 p-4 shadow-[0_14px_34px_rgba(7,59,102,0.1)] backdrop-blur" key={item.title}>
                      <StepIconBubble className="h-12 w-12 bg-[#f1fff5] text-[#4aa65a] shadow-none" size="sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </StepIconBubble>
                      <p className="mt-4 text-[0.8rem] font-bold leading-5 text-primary-dark">{item.title}</p>
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
