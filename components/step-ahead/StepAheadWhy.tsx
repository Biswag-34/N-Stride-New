"use client";

import { CircleOff, FlaskConical, Network } from "lucide-react";

import { stepAheadProgramVideo } from "@/data/media";
import { StepContainer, StepIconBubble, StepReveal, StepSection } from "./StepAheadPrimitives";

const stats = [
  { icon: FlaskConical, value: "89.8M", label: "Adults in India living with diabetes, IDF 2024" },
  { icon: CircleOff, value: "10.5%", label: "Adult diabetes prevalence reported by IDF" },
  { icon: Network, value: "Scalable", label: "Designed so more clinics can be equipped and supported" },
];

function DemoVideoPanel() {
  return (
    <div className="relative overflow-hidden rounded-[1rem] bg-[linear-gradient(180deg,rgba(7,59,102,0.12),rgba(7,59,102,0.68)),url('/requested-assets/stepahead-hero.png')] bg-cover bg-center shadow-[0_20px_58px_rgba(20,121,201,0.1)] ring-1 ring-[#cfe8f8]">
      <iframe
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full"
        frameBorder="0"
        src={stepAheadProgramVideo.src}
        title={stepAheadProgramVideo.title}
      />
    </div>
  );
}

export function StepAheadWhy() {
  return (
    <StepSection className="bg-white py-14">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[#d7ebfa]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#e6f2fb]" />
      <StepContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <StepReveal>
            <h2 className="max-w-[620px] font-heading text-[clamp(1.85rem,3vw,3rem)] font-bold leading-[1.04] text-primary-dark">
              Bring structured diabetic foot care closer to patients.
            </h2>
            <p className="mt-5 max-w-[675px] text-[0.98rem] leading-8 text-text-secondary">
              Many clinics lack dedicated tools, trained teams and standard workflows for diabetic foot care. Step-Ahead brings these essentials together so clinics can launch sooner and support patients closer to home.
            </p>
            <div className="mt-10 grid max-w-[650px] gap-5 md:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="min-w-0 rounded-[0.85rem] bg-[#f8fcff] p-3 md:bg-transparent md:p-0" key={stat.value}>
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
              Source:{" "}
              <a className="font-bold text-primary hover:underline" href="https://idf.org/our-network/regions-and-members/south-east-asia/members/india/" rel="noreferrer" target="_blank">
                International Diabetes Federation India country profile, 2024
              </a>
              .
            </p>
          </StepReveal>

          <StepReveal delay={0.08}>
            <DemoVideoPanel />
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
