"use client";

import { Plus } from "lucide-react";
import { GiLegArmor } from "react-icons/gi";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";
import { TbSparkles } from "react-icons/tb";
import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitDottedField,
  BioFitIconBubble,
  BioFitReveal,
  BioFitSection,
  BioFitWaveImage,
} from "@/components/biofit/BioFitPrimitives";

type BioFitSolutionsProps = {
  vertical: Vertical;
};

const solutionCards = [
  {
    title: "Orthotics",
    subtitle: "Support. Alignment. Relief.",
    icon: GiLegArmor,
    items: ["Custom foot orthotics", "Ankle-foot orthoses (AFO)", "Knee, spinal & upper limb orthotic solutions", "Gait & posture support"],
    image: "orthotic fitting scene",
  },
  {
    title: "Prosthetics",
    subtitle: "Restore. Adapt. Thrive.",
    icon: PiPersonSimpleWalkDuotone,
    items: ["Upper & lower limb prosthetics", "Microprocessor & dynamic knee systems", "Custom sockets & liners", "Rehabilitation & training support"],
    image: "prosthetic fitting scene",
  },
  {
    title: "Silicone Alteration",
    subtitle: "Restore. Refine. Renew.",
    icon: TbSparkles,
    items: ["Silicone socket restoration", "Socket adjustments & relining", "Cosmetic restoration", "Comfort & fit enhancement"],
    image: "silicone alteration / restoration visual",
  },
];

export function BioFitSolutions({ vertical }: BioFitSolutionsProps) {
  return (
    <BioFitSection className="bg-white pb-16 pt-12">
      <BioFitWaveImage
        className="left-[-13rem] top-[-8rem] h-[52rem] w-[45rem] rotate-90 opacity-32 [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_70%,transparent_100%)]"
        src="/biofit/wave-divider-thin.png"
      />
      <div aria-hidden="true" className="absolute left-[-15rem] top-[-5rem] h-[50rem] w-[50rem] rounded-[48%] border border-[#b8a9fb]/30" />
      <div aria-hidden="true" className="absolute left-[-17rem] top-[-2rem] h-[43rem] w-[43rem] rounded-[48%] border border-[#b8a9fb]/12" />
      <BioFitDottedField className="-right-28 bottom-0 h-72 w-[42rem]" />
      <BioFitContainer>
        <div className="grid gap-8 lg:grid-cols-[0.22fr_0.78fr]">
          <BioFitReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Our solutions</h2>
            <p className="mt-4 max-w-[18rem] text-sm leading-7 text-text-secondary">
              Precision-crafted solutions designed around your body, your needs, and your goals.
            </p>
          </BioFitReveal>

          <BioFitReveal delay={0.08}>
            <div className="grid gap-7 lg:grid-cols-3">
              {solutionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    className="relative min-h-[370px] overflow-hidden rounded-tl-[2.65rem] rounded-tr-[2.65rem] rounded-br-[5.9rem] rounded-bl-[1.35rem] bg-white p-7 pb-[8.9rem] shadow-[0_18px_48px_rgba(90,103,216,0.06)] ring-1 ring-[#cfc3ff]"
                    key={card.title}
                  >
                    <div aria-hidden="true" className="absolute inset-x-7 bottom-8 h-[6.1rem] rounded-[1.05rem] bg-[linear-gradient(135deg,#f5f1ff,#ffffff_70%,#f9f7ff)]" />
                    <BioFitIconBubble className="h-11 w-11 bg-[#f8f5ff] shadow-[0_12px_26px_rgba(90,103,216,0.10)]" size="sm">
                      <Icon className="h-6 w-6" />
                    </BioFitIconBubble>
                    <h3 className="mt-5 font-heading text-lg font-bold text-[#7357d8]">{card.title}</h3>
                    <p className="mt-2 text-xs font-bold text-primary-dark">{card.subtitle}</p>
                    <ul className="mt-5 space-y-2.5">
                      {card.items.map((item) => (
                        <li className="flex gap-2 text-[0.82rem] leading-5 text-primary-dark" key={item}>
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7357d8]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute inset-x-7 bottom-8 h-[6.1rem] rounded-[1.05rem]" aria-label={card.image} />
                    <span className="absolute bottom-[-0.85rem] left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#ece8ff] text-[#7357d8] shadow-[0_12px_26px_rgba(90,103,216,0.18)] ring-1 ring-[#d8d0ff]">
                      <Plus aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </article>
                );
              })}
            </div>
            <p className="mt-5 text-xs font-semibold text-text-secondary">
              {vertical.shortDescription}
            </p>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
