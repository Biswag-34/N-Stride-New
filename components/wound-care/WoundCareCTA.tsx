"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  WoundAsset,
  WoundBackgroundImage,
  WoundContainer,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

type WoundCareCTAProps = {
  vertical: Vertical;
};

const checklist = ["Personalized wound-care strategy", "Evidence-aligned protocols", "Ongoing support & follow-up"];

export function WoundCareCTA({ vertical }: WoundCareCTAProps) {
  return (
    <WoundSection className="pb-10 pt-6">
      <WoundBackgroundImage className="inset-x-0 top-0 h-40 w-full opacity-16" src="/wound-care/amber-wave.png" />
      <WoundContainer>
        <WoundReveal>
          <div className="relative isolate overflow-hidden rounded-[1.35rem] bg-[linear-gradient(105deg,#f4faff,#ffffff_50%,#fff4df)] px-8 py-8 shadow-[0_24px_70px_rgba(16,42,67,0.1)] ring-1 ring-[#efd8b3] md:px-12">
            <WoundAsset
              alt=""
              className="pointer-events-none absolute -right-12 bottom-0 h-40 w-64 opacity-26 mix-blend-multiply"
              imageClassName="object-contain object-right-bottom"
              sizes="20vw"
              src="/wound-care/foot-line-amber.png"
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.3fr_0.34fr_0.36fr] lg:items-center">
              <div>
                <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-text-muted">Next step</p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-primary-dark">
                  Let us build your wound-care plan.
                </h2>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Our care team is here to guide you at every step.
                </p>
              </div>
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary-dark" key={item}>
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex max-w-[22rem] flex-col gap-3">
                <Button className="rounded-[0.45rem]" href={vertical.cta.primary.href}>
                  Request Wound Care Support
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.45rem]" href="/contact?type=general" variant="outline">
                  Talk to Our Care Team
                </Button>
              </div>
            </div>
          </div>
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
  );
}
