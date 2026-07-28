"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Footprints, Route, ScanLine } from "lucide-react";

import {
  KineticsContainer,
  KineticsIconBubble,
  KineticsSection,
  MotionReveal,
} from "@/components/kinetics/KineticsPrimitives";

const journey = [
  { icon: ScanLine, title: "Assess", text: "We study your feet, movement & needs." },
  { icon: BadgeCheck, title: "Recommend", text: "You get footwear or supports that fit your goals." },
  { icon: Footprints, title: "Fit & Adapt", text: "Precision fitting for comfort, protection & performance." },
  { icon: Route, title: "Follow Up", text: "Ongoing guidance as your needs evolve." },
];

export function KineticsJourney() {
  return (
    <KineticsSection className="py-14">
      <KineticsContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-[#073b66] shadow-[18px_28px_70px_rgba(7,59,102,0.2)]">
              <Image
                alt="Foot pressure to footwear pathway illustration"
                className="h-auto w-full"
                height={933}
                sizes="(min-width: 1024px) 520px, 92vw"
                src="/kinetics/ojw.png"
                width={1308}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,102,0.18),transparent_62%)]" />
            </div>
          </MotionReveal>

          <MotionReveal>
            <h2 className="max-w-[41rem] font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
              From understanding to the right fit-every step guided.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="relative text-center" key={step.title}>
                    {index < journey.length - 1 ? (
                      <ArrowRight
                        aria-hidden="true"
                        className="absolute left-[calc(50%+2.1rem)] top-9 hidden h-5 w-20 text-[#8ac2f3] lg:block"
                      />
                    ) : null}
                    <KineticsIconBubble className="mx-auto" size="lg">
                      <Icon className="h-8 w-8" />
                    </KineticsIconBubble>
                    <p className="mt-5 text-xs font-bold text-primary-dark">0{index + 1}</p>
                    <h3 className="mt-1 font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[10.5rem] text-xs leading-5 text-text-secondary">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </KineticsContainer>
    </KineticsSection>
  );
}
