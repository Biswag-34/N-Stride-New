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
    <StepSection className="bg-white py-14">
      <StepContainer>
        <StepReveal>
          <div className="relative overflow-hidden rounded-[1.25rem] bg-[#073b66] px-5 py-6 shadow-[18px_28px_70px_rgba(20,121,201,0.13)] ring-1 ring-[#d8edf8] lg:px-7 lg:py-7">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(38,182,200,0.28),transparent_28%),radial-gradient(circle_at_86%_64%,rgba(92,184,92,0.28),transparent_30%)]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-[url('/step-ahead/soft-green-wave.png')] bg-cover bg-bottom opacity-22" />
            <div className="relative grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
              <div className="flex min-h-[22rem] flex-col justify-between rounded-[1rem] bg-white/10 p-6 text-white ring-1 ring-white/18 backdrop-blur">
                <div>
                  <h2 className="font-heading text-[clamp(1.65rem,2.3vw,2.45rem)] font-bold leading-tight text-white">
                    Partnership infrastructure for care and clinic growth.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    Step-Ahead connects clinical readiness, launch operations and business development in one partner program.
                  </p>
                </div>
                <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-[0.9rem] bg-white/12 text-center ring-1 ring-white/18">
                  {["Care", "Launch", "Growth"].map((item) => (
                    <div className="border-r border-white/16 px-3 py-4 last:border-r-0" key={item}>
                      <p className="font-heading text-lg font-bold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-5">
                {values.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="group relative min-h-[13rem] overflow-hidden rounded-[0.95rem] bg-white p-4 shadow-[0_14px_34px_rgba(7,59,102,0.1)] transition duration-300 hover:-translate-y-1" key={item.title}>
                      <div aria-hidden="true" className="absolute inset-x-4 top-0 h-[3px] rounded-full bg-[linear-gradient(90deg,#1479c9,#5cb85c)]" />
                      <StepIconBubble className="h-12 w-12 bg-[#f1fff5] text-[#4aa65a] shadow-none" size="sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </StepIconBubble>
                      <p className="mt-4 text-[0.84rem] font-bold leading-5 text-primary-dark">{item.title}</p>
                      <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                      <span className="absolute bottom-3 right-4 font-heading text-2xl font-bold text-[#e7f4ff]">0{index + 1}</span>
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
