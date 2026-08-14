"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { StepContainer, StepReveal, StepSection } from "./StepAheadPrimitives";

const bullets = [
  "Unified patient journey across needs",
  "Seamless referrals and shared insights",
  "Better outcomes through coordinated care",
  "More value for your clinic and your patients",
];

export function StepAheadEcosystem() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-14">
      <StepContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.31fr_0.43fr_0.26fr]">
          <StepReveal>
            <h2 className="font-heading text-[clamp(1.6rem,2.3vw,2.25rem)] font-bold leading-tight text-primary-dark">
              You are never building alone.
            </h2>
            <p className="mt-4 max-w-[22rem] text-sm leading-7 text-text-secondary">
              Step-Ahead is backed by N-Stride&apos;s integrated ecosystem of diagnostics, insight, therapeutics and restoration.
            </p>
            <Link className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-primary transition hover:text-primary-dark" href="/verticals">
              Explore the N-Stride ecosystem {"->"}
            </Link>
          </StepReveal>

          <StepReveal delay={0.08}>
            <div className="relative mx-auto aspect-[1.18/1] w-full max-w-[510px]">
              <Image
                alt="N-Stride ecosystem partnership model"
                className="object-contain drop-shadow-[0_24px_42px_rgba(20,121,201,0.08)]"
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                src="/step-ahead/ecosystem-program-graphic.png"
              />
            </div>
          </StepReveal>

          <StepReveal delay={0.12}>
            <div className="rounded-[1.45rem] bg-white/95 p-7 shadow-[16px_24px_55px_rgba(20,121,201,0.075)] ring-1 ring-[#d3eafa]">
              <ul className="space-y-4">
                {bullets.map((item) => (
                  <li className="flex gap-3 text-[0.84rem] font-semibold leading-6 text-text-secondary" key={item}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
