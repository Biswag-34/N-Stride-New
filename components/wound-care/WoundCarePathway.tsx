"use client";

import { ArrowRight, Bandage, ChartNoAxesCombined, HeartPulse, Search, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  WoundBackgroundImage,
  WoundContainer,
  WoundIconBubble,
  WoundKicker,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

const steps = [
  { icon: Search, title: "Assess", text: "Evaluate wound status, risk factors & goals." },
  { icon: ShieldCheck, title: "Prepare", text: "Optimize wound bed & manage infection risk." },
  { icon: Bandage, title: "Dress", text: "Apply NPWT VAC dressing with precision." },
  { icon: ChartNoAxesCombined, title: "Support", text: "Monitor progress, manage pressure & care needs." },
  { icon: HeartPulse, title: "Recover", text: "Promote healing, prevent relapse & restore function." },
];

export function WoundCarePathway() {
  return (
    <WoundSection className="bg-[linear-gradient(180deg,#ffffff,#fbfdff)] py-9">
      <WoundBackgroundImage className="-right-24 top-16 h-56 w-[58rem] opacity-20" src="/wound-care/pathway-circles.png" />
      <WoundContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.3fr_0.7fr]">
          <WoundReveal>
            <WoundKicker>Care pathway</WoundKicker>
            <h2 className="mt-4 max-w-[24rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              A structured pathway for better healing outcomes
            </h2>
            <p className="mt-5 max-w-[24rem] text-sm leading-7 text-text-secondary">
              A stepwise, evidence-informed pathway that supports every stage of the wound-care journey.
            </p>
            <Button className="mt-6 rounded-[0.45rem] border-[#f5a623] text-[#b86b00]" href="/contact?type=wound-care" variant="outline">
              Explore the Pathway
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="rounded-[1.35rem] bg-white/92 p-6 shadow-[0_22px_60px_rgba(16,42,67,0.07)] ring-1 ring-[#c9e6f8]/90 backdrop-blur">
              <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                <div className="absolute left-[8%] right-[8%] top-10 hidden h-px border-t border-dashed border-[#9dd5f7] lg:block" />
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div className="relative text-center" key={step.title}>
                      <WoundIconBubble className="mx-auto bg-white/96" color={index === 2 ? "#f5a623" : "#1479c9"} size="lg">
                        <Icon className="h-7 w-7" />
                      </WoundIconBubble>
                      <p className="mt-4 font-heading text-xs font-bold text-primary-dark">0{index + 1}</p>
                      <h3 className="mt-1 font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                      <p className="mx-auto mt-2 max-w-[9rem] text-xs leading-5 text-text-secondary">{step.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 rounded-[1rem] bg-[#f4faff] px-5 py-3 text-sm font-bold text-primary-dark shadow-[0_12px_32px_rgba(20,121,201,0.08)] ring-1 ring-[#c9e6f8] sm:flex-row sm:items-center sm:justify-between">
              <span>Every pathway is personalized based on wound type, patient condition and clinical goals.</span>
              <a className="inline-flex items-center gap-2 text-primary" href="/contact?type=wound-care">
                See clinical guidance & protocols
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </WoundReveal>
        </div>
      </WoundContainer>
    </WoundSection>
  );
}
