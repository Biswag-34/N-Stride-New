"use client";

import Image from "next/image";
import { TbCompass, TbPackage, TbRocket, TbSchool, TbTargetArrow, TbTrendingUp } from "react-icons/tb";

import { StepContainer, StepIconBubble, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

const journey = [
  { title: "Discover & Plan", text: "Assess needs, define scope and build your business case.", icon: TbCompass },
  { title: "Configure & Equip", text: "Select the right solution package and get fully equipped.", icon: TbPackage },
  { title: "Train & Onboard", text: "Clinical training, SOPs and team readiness for confident launch.", icon: TbSchool },
  { title: "Launch & Deliver", text: "Go live with expert support and structured care pathways.", icon: TbRocket },
  { title: "Optimize & Grow", text: "Monitor outcomes, optimize workflows and grow referrals.", icon: TbTrendingUp },
  { title: "Scale Impact", text: "Expand services, strengthen brand and create lasting impact.", icon: TbTargetArrow },
];

export function StepAheadJourney() {
  return (
    <StepSection className="bg-white py-14">
      <StepContainer>
        <StepReveal className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <StepKicker>The Step-Ahead journey</StepKicker>
            <h2 className="mt-3 font-heading text-[clamp(2rem,3vw,3rem)] font-bold tracking-[-0.02em] text-primary-dark">
              A guided pathway from setup to scale.
            </h2>
          </div>
        </StepReveal>

        <StepReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-white px-5 py-8 shadow-[18px_24px_70px_rgba(20,121,201,0.08)] ring-1 ring-[#c9e6f8] lg:px-9 lg:py-10">
            <Image
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.16]"
              fill
              src="/step-ahead/journey-process-line.png"
              sizes="100vw"
            />
            <svg
              aria-hidden="true"
              className="absolute left-[6%] top-[5.35rem] hidden h-12 w-[88%] text-[#9fcdf4] lg:block"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1180 74"
            >
              <path
                d="M6 38C82 38 86 37 152 37H222C272 37 283 37 330 37H410C452 37 470 37 512 37H592C639 37 654 37 700 37H780C826 37 843 37 890 37H970C1038 37 1054 37 1174 37"
                stroke="currentColor"
                strokeDasharray="5 10"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <div className="relative grid gap-8 lg:grid-cols-6">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="relative text-center" key={step.title}>
                    <StepIconBubble className="mx-auto h-[4.7rem] w-[4.7rem] border-[#afd8f4] text-primary shadow-[0_18px_42px_rgba(20,121,201,0.12)]">
                      <Icon aria-hidden="true" className="h-8 w-8 stroke-[1.7]" />
                    </StepIconBubble>
                    <p className="mt-4 text-[0.68rem] font-bold text-text-muted">Step 0{index + 1}</p>
                    <h3 className="mt-1 font-heading text-base font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-[10.4rem] text-xs leading-5 text-text-secondary">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </StepReveal>
      </StepContainer>
    </StepSection>
  );
}
