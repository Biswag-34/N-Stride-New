"use client";

import { CheckCircle2, Clock3, Handshake, LineChart, Repeat2 } from "lucide-react";

import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const values = [
  { title: "Clinical confidence", text: "Protocols, training and review rhythm", icon: CheckCircle2 },
  { title: "Faster launch", text: "Setup guidance without operational guesswork", icon: Clock3 },
  { title: "Retention loop", text: "Follow-up care that brings patients back", icon: Repeat2 },
  { title: "Business upside", text: "New service lines with clearer ROI", icon: LineChart },
  { title: "Partner support", text: "A team behind your team", icon: Handshake },
];

export function StepAheadValueBand() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f8fcff)] py-10">
      <StepContainer>
        <StepReveal>
          <div className="relative overflow-hidden rounded-[1.05rem] bg-white px-5 py-5 shadow-[0_20px_54px_rgba(20,121,201,0.08)] ring-1 ring-[#d8edf8] lg:px-6 lg:py-6">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-2 bg-[linear-gradient(180deg,#1479c9,#26b6c8,#5cb85c)]"
            />
            <div className="relative grid gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
              <div className="rounded-[0.9rem] bg-[linear-gradient(135deg,#073b66,#0b6fac)] p-6 text-white shadow-[0_16px_38px_rgba(7,59,102,0.14)]">
                <div>
                  <h2 className="font-heading text-[clamp(1.65rem,2.3vw,2.45rem)] font-bold leading-tight text-white">
                    Partnership infrastructure for care and clinic growth.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    Step-Ahead connects clinical readiness, launch operations and business development in one partner program.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-[0.75rem] bg-white/12 text-center ring-1 ring-white/18">
                  {["Care", "Launch", "Growth"].map((item) => (
                    <div className="border-r border-white/16 px-3 py-3 last:border-r-0" key={item}>
                      <p className="font-heading text-sm font-bold text-white sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {values.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-3 overflow-hidden rounded-[0.8rem] bg-[#f8fcff] p-3 ring-1 ring-[#d8edf8] transition duration-300 hover:bg-white hover:ring-[#b8ddf2]" key={item.title}>
                      <StepIconBubble className="h-11 w-11 bg-white text-primary shadow-none ring-1 ring-[#d8edf8]" size="sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </StepIconBubble>
                      <div>
                        <p className="text-[0.84rem] font-bold leading-5 text-primary-dark">{item.title}</p>
                        <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                      </div>
                      <span className="font-heading text-lg font-bold text-[#c5e4f6]">0{index + 1}</span>
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
