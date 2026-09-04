"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { leadCaptureHref } from "@/data/leadCapture";
import { StepContainer, StepReveal, StepSection } from "./StepAheadPrimitives";

const bullets = [
  "Unified patient journey across needs",
  "Seamless referrals and shared insights",
  "Clearer follow-up through coordinated care",
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
            <div className="overflow-hidden rounded-[1.25rem] bg-[#071f3a] p-2 text-white shadow-[16px_24px_55px_rgba(20,121,201,0.13)] ring-1 ring-[#bfe5f7]">
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.06] p-4">
                <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#8edbd0]">Connected care loop</p>
                <div className="mt-4 grid gap-2.5">
                  {bullets.map((item, index) => (
                    <div className="grid grid-cols-[2.4rem_1fr_auto] items-center gap-3 rounded-[0.85rem] bg-white p-2.5 text-primary-dark shadow-[0_12px_28px_rgba(0,0,0,0.1)]" key={item}>
                      <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-soft-sky font-heading text-xs font-extrabold text-primary">0{index + 1}</span>
                      <span className="text-[0.82rem] font-bold leading-5 text-text-secondary">{item}</span>
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>
                <Link className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-[0.65rem] bg-[#8edbd0] px-4 text-xs font-extrabold text-[#06223e] transition hover:bg-white" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })}>
                  Discuss a Step-Ahead Partnership
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
