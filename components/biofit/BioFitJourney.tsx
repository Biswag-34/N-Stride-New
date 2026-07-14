"use client";

import { ArrowRight, BadgeCheck, Ruler, ScanLine, Sparkles } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  BioFitContainer,
  BioFitAsset,
  BioFitIconBubble,
  BioFitReveal,
  BioFitSection,
} from "@/components/biofit/BioFitPrimitives";

const journey = [
  { icon: ScanLine, title: "Understand", text: "We listen, assess and understand your goals." },
  { icon: Ruler, title: "Design", text: "We plan a solution tailored to your body and lifestyle." },
  { icon: Sparkles, title: "Craft", text: "Precision fabrication using advanced materials & tech." },
  { icon: BadgeCheck, title: "Fit & Refine", text: "We ensure optimal fit, comfort and function." },
  { icon: PiPersonSimpleWalkDuotone, title: "Adapt & Thrive", text: "Ongoing support to help you move forward." },
];

export function BioFitJourney() {
  return (
    <BioFitSection className="bg-[linear-gradient(90deg,#ffffff,#fbf9ff)] py-12">
      <BioFitAsset
        alt=""
        className="pointer-events-none absolute -left-24 top-0 h-full w-[22rem] opacity-75"
        imageClassName="object-cover object-left"
        src="/biofit/skeleton-network-left.png"
      />
      <BioFitContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.64fr_0.36fr]">
          <BioFitReveal className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Your fitting & adaptation journey</h2>
            <p className="mt-3 text-sm text-text-secondary">A guided, collaborative process built around you.</p>
            <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <span aria-hidden="true" className="absolute left-10 right-10 top-8 hidden border-t border-dashed border-[#b8a9fb]/70 lg:block" />
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="relative text-center" key={step.title}>
                    {index < journey.length - 1 ? (
                      <ArrowRight aria-hidden="true" className="absolute left-[calc(50%+2.05rem)] top-6 hidden h-5 w-20 text-[#b8a9fb] lg:block" />
                    ) : null}
                    <BioFitIconBubble className="relative z-10 mx-auto h-16 w-16 bg-[#fbf9ff]" size="lg">
                      <Icon className="h-7 w-7" />
                    </BioFitIconBubble>
                    <h3 className="mt-5 font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-5 text-text-secondary">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </BioFitReveal>
          <BioFitReveal delay={0.1}>
            <div className="relative">
              <BioFitAsset
                alt="Bio-Fit patient running with prosthetic support by the sea"
                className="min-h-[330px] rounded-tl-[12rem] rounded-tr-[1.25rem] rounded-br-none rounded-bl-[1.25rem] shadow-[18px_22px_58px_rgba(90,103,216,0.08)]"
                imageClassName="object-cover object-[45%_50%]"
                src="/biofit/runner-sea-tech.png"
              />
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-white/75" fill="none" viewBox="0 0 420 320">
                <path d="M220 70h120M220 110h98M220 150h112M220 190h86" stroke="currentColor" strokeDasharray="5 10" strokeLinecap="round" />
                <path d="M214 58c36 54 34 118-4 186" stroke="currentColor" strokeOpacity=".9" />
              </svg>
            </div>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
