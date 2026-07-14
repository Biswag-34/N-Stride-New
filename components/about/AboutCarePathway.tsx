"use client";

import { ClipboardList, FileSearch, HeartHandshake, HeartPulse, ListChecks, UserRoundCheck } from "lucide-react";

import { AboutArtImage, AboutContainer, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

const steps = [
  { title: "Understand", description: "We listen, assess and understand your concerns.", icon: UserRoundCheck, color: "#2d82d8" },
  { title: "Diagnose", description: "Clinical exams, scans and expert insight.", icon: ClipboardList, color: "#43bda0" },
  { title: "Plan", description: "Personalized care plan across the right verticals.", icon: ListChecks, color: "#4f92e4" },
  { title: "Treat", description: "Advanced treatment and product interventions.", icon: HeartPulse, color: "#41b85a" },
  { title: "Restore", description: "Rehabilitation, recovery and function.", icon: FileSearch, color: "#d99b17" },
  { title: "Continue", description: "Ongoing support to prevent recurrence.", icon: HeartHandshake, color: "#8058e7" },
];

export function AboutCarePathway() {
  return (
    <AboutSection className="border-y border-[#dbeef9] bg-white py-16">
      <AboutContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[0.28fr_0.72fr]">
          <AboutReveal>
            <AboutKicker>How N-Stride connects care</AboutKicker>
            <h2 className="mt-5 font-heading text-[clamp(2rem,3.25vw,3.05rem)] font-bold leading-[1.08] text-primary-dark">
              A guided pathway
              <br />
              <span className="text-primary">from first step to better outcomes.</span>
            </h2>
            <p className="mt-6 max-w-[360px] text-[0.95rem] leading-7 text-text-secondary">
              Every journey is unique. Our pathway ensures the right care, at the right time, by the right specialists.
            </p>
          </AboutReveal>

          <AboutReveal delay={0.08}>
            <div className="relative hidden min-h-[322px] lg:block">
              <AboutArtImage
                alt="Six-step N-Stride guided care pathway"
                className="absolute inset-0"
                src="/about/care-pathway.png"
              />
              <div className="relative z-10 grid min-h-[322px] grid-cols-6 gap-4 px-3 pt-[13.7rem] text-center">
                {steps.map((step, index) => (
                  <div key={step.title}>
                    <p className="text-[0.68rem] font-bold" style={{ color: step.color }}>
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-base font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[8.4rem] text-[0.72rem] leading-5 text-text-secondary">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="rounded-[1.1rem] bg-white p-5 text-center shadow-[0_18px_42px_rgba(20,121,201,0.10)] ring-1 ring-[#d7ebf8]" key={step.title}>
                    <Icon aria-hidden="true" className="mx-auto h-8 w-8" style={{ color: step.color }} />
                    <p className="mt-4 text-xs font-bold" style={{ color: step.color }}>
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-base font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[12rem] text-sm leading-6 text-text-secondary">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
