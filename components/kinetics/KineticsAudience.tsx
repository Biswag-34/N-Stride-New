"use client";

import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  KineticsContainer,
  KineticsKicker,
  KineticsSection,
  MotionReveal,
} from "@/components/kinetics/KineticsPrimitives";

type KineticsAudienceProps = {
  vertical: Vertical;
};

export function KineticsAudience({ vertical }: KineticsAudienceProps) {
  const audience = [
    "People managing diabetes",
    "Individuals with foot pain or deformities",
    "Athletes & active individuals",
    "Professionals on their feet all day",
    "Seniors seeking stability & comfort",
  ];

  return (
    <KineticsSection className="py-20">
      <KineticsContainer>
        <div className="grid items-center gap-7 lg:grid-cols-[0.26fr_0.6fr_0.14fr]">
          <MotionReveal>
            <KineticsKicker>Who this helps</KineticsKicker>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-primary-dark">
              For every step.
              <br />
              For every story.
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              From daily walkers to athletes, from sensitive feet to complex conditions, Kinetics is built for real
              lives in motion.
            </p>
            <ul className="mt-5 space-y-3">
              {audience.map((item) => (
                <li className="flex items-start gap-2 text-sm font-semibold text-primary-dark" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[1.45rem] shadow-[18px_24px_60px_rgba(20,121,201,0.13)]">
              <Image
                alt={vertical.imageNeeds[3] ?? "Person walking freely with lower-limb support"}
                className="h-auto w-full"
                height={675}
                sizes="(min-width: 1024px) 760px, 92vw"
                src="/kinetics/step.webp"
                width={1200}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,102,0.22),transparent_42%,rgba(255,255,255,0.05))]" />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.14}>
            <div className="relative z-10 rounded-[1.25rem] bg-white p-7 shadow-[-18px_22px_55px_rgba(20,121,201,0.15)] lg:-ml-16">
              <Quote aria-hidden="true" className="h-8 w-8 fill-[#1479c9]/12 text-primary" />
              <p className="mt-7 font-heading text-lg font-bold leading-relaxed text-primary-dark">
                Good footwear is not a luxury. It is daily care for your future.
              </p>
            </div>
          </MotionReveal>
        </div>
      </KineticsContainer>
    </KineticsSection>
  );
}
