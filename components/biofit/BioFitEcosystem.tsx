"use client";

import { BadgeCheck, Layers3, ScanLine } from "lucide-react";

import {
  BioFitContainer,
  BioFitDottedField,
  BioFitAsset,
  BioFitSection,
  BioFitReveal,
} from "@/components/biofit/BioFitPrimitives";

const bioFitDetails = [
  {
    icon: ScanLine,
    title: "What it does",
    text: "Maps the person's body, movement goals and clinical needs into a practical fitting pathway.",
  },
  {
    icon: BadgeCheck,
    title: "Why it is different",
    text: "It treats comfort, function, appearance and adaptation as one connected outcome, instead of only supplying a device.",
  },
  {
    icon: Layers3,
    title: "What is inside",
    text: "Prosthetics, orthotics, silicone restoration, custom fitting, mobility supports and guided refinement.",
  },
];

export function BioFitEcosystem() {
  return (
    <BioFitSection className="bg-white pb-16 pt-16">
      <BioFitDottedField className="-left-28 bottom-0 h-72 w-[42rem] opacity-70" />
      <BioFitDottedField className="-right-24 top-4 h-80 w-[38rem] opacity-50" />
      <BioFitContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.43fr_0.57fr]">
          <BioFitReveal>
            <h2 className="max-w-[34rem] font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
              What is Bio-Fit?
            </h2>
            <p className="mt-5 max-w-[35rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              Bio-Fit is N-Stride&apos;s restoration vertical for people who need prosthetic, orthotic or silicone
              cosmetic solutions. It combines assessment, custom fitting, fabrication direction and real-world
              adaptation support so the final outcome feels usable, stable and personal.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Body-led", "Clinic-guided", "Life-ready"].map((item) => (
                <div className="rounded-[0.65rem] border border-[#ddd4ff] bg-[#fbf9ff]/80 px-4 py-3 text-sm font-bold text-[#7357d8]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </BioFitReveal>

          <BioFitReveal delay={0.08}>
            <div className="relative isolate overflow-hidden rounded-tl-[3.2rem] rounded-tr-[0.9rem] rounded-br-[3.8rem] rounded-bl-[0.9rem] bg-[linear-gradient(135deg,#f8f5ff,#ffffff_58%,#f0fbff)] p-4 shadow-[0_26px_70px_rgba(90,103,216,0.10)] ring-1 ring-[#ded7ff]">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#b8a9fb]/30 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-24 left-10 h-56 w-72 rounded-full bg-[#26b6c8]/14 blur-3xl" />
              <div className="relative grid gap-4 md:grid-cols-[0.44fr_0.56fr]">
                <BioFitAsset
                  alt="Bio-Fit prosthetic fitting and restoration support"
                  className="min-h-[310px] rounded-tl-[2.4rem] rounded-tr-[0.5rem] rounded-br-[2.6rem] rounded-bl-[0.5rem]"
                  imageClassName="object-cover object-center"
                  src="/biofit/target-who-help-arch.png"
                />
                <div className="grid gap-3">
                  {bioFitDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div className="group rounded-[0.75rem] bg-white/82 p-5 shadow-[0_16px_38px_rgba(90,103,216,0.08)] ring-1 ring-[#e7e1ff] transition duration-300 hover:-translate-y-1 hover:bg-white" key={detail.title}>
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-[0.55rem] bg-[#7357d8] text-white shadow-[0_12px_26px_rgba(115,87,216,0.22)]">
                            <Icon aria-hidden="true" className="h-5 w-5" />
                          </span>
                          <h3 className="font-heading text-base font-bold text-primary-dark">{detail.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-text-secondary">{detail.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
