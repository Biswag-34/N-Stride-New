"use client";

import Image from "next/image";
import { CheckCircle2, HeartPulse, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";

import {
  KineticsContainer,
  KineticsIconBubble,
  KineticsSection,
  MotionReveal,
  Pill,
} from "@/components/kinetics/KineticsPrimitives";

const bullets = [
  "Ergonomic lasts for natural alignment",
  "Breathable, antimicrobial & skin-friendly lining",
  "Shock-absorbing midsoles for less impact",
  "Durable outsoles for grip & stability",
  "Removable insoles for custom orthotics",
];

const features = [
  { icon: HeartPulse, label: "Clinically Informed" },
  { icon: Sparkles, label: "Movement Optimized" },
  { icon: ShieldCheck, label: "Built for Durability" },
  { icon: PackageCheck, label: "Everyday Confidence" },
];

export function KineticsScience() {
  return (
    <KineticsSection className="bg-white py-14">
      <KineticsContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.3fr_0.55fr_0.15fr]">
          <MotionReveal>
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
              Science in every stitch.
              <br />
              Comfort in every step.
            </h2>
            <p className="mt-5 text-sm leading-7 text-text-secondary">
              We combine clinical insight with advanced materials to deliver footwear that supports natural movement
              and long-term well-being.
            </p>
            <ul className="mt-5 space-y-3">
              {bullets.map((item) => (
                <li className="flex gap-2 text-sm font-semibold text-primary-dark" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-[#eaf6ff] shadow-[18px_24px_70px_rgba(20,121,201,0.14)]">
              <Image
                alt="Footwear sole technology detail"
                className="h-auto w-full"
                height={887}
                sizes="(min-width: 1024px) 720px, 92vw"
                src="/kinetics/sole.png"
                width={1774}
              />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="grid gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Pill className="justify-start rounded-xl px-3 py-3" key={feature.label}>
                    <KineticsIconBubble size="sm">
                      <Icon className="h-5 w-5" />
                    </KineticsIconBubble>
                    <span className="text-sm">{feature.label}</span>
                  </Pill>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </KineticsContainer>
    </KineticsSection>
  );
}
