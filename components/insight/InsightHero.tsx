"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, Cpu, ScanLine } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  InsightAsset,
  InsightContainer,
  InsightKicker,
  InsightPill,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

type InsightHeroProps = {
  vertical: Vertical;
};

const proof = [
  { icon: ScanLine, label: "Advanced Scanning" },
  { icon: Cpu, label: "AI-Powered Analysis" },
  { icon: BadgeCheck, label: "Clinical Decision Support" },
  { icon: ClipboardCheck, label: "Seamless Care Handoff" },
];

export function InsightHero({ vertical }: InsightHeroProps) {
  return (
    <InsightSection className="bg-[linear-gradient(105deg,#ffffff_0%,#fbfdff_42%,#eef8ff_100%)] pb-8 pt-7 xs:pb-9 xs:pt-8">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_73%_34%,rgba(38,182,200,0.12),transparent_31%)]" />
      <InsightWaveImage className="-bottom-36 right-0 h-64 w-[48rem] opacity-24 sm:h-80 sm:w-[72rem] sm:opacity-35" src="/insight/diagnostic-bg-soft.png" />
      <InsightContainer className="relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-text-secondary xs:mb-8">
          <Link className="hover:text-primary" href="/">Home</Link>
          <span>/</span>
          <Link className="hover:text-primary" href="/verticals">Verticals</Link>
          <span>/</span>
          <span className="text-primary-dark">Insight</span>
        </nav>
        <div className="grid items-center gap-7 lg:min-h-[470px] lg:grid-cols-[0.43fr_0.57fr] lg:gap-8">
          <InsightReveal>
            <InsightKicker>{vertical.shortName}</InsightKicker>
            <h1 className="mt-5 max-w-[40rem] font-heading text-[clamp(2.05rem,10vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.025em] text-primary-dark lg:leading-[0.98]">
              See more. Know deeper.
              <br />
              Guide better care.
            </h1>
            <p className="mt-6 max-w-[34rem] text-sm leading-7 text-text-secondary sm:text-[1.03rem] sm:leading-8">
              N-Stride Insight delivers advanced foot analysis and wound care assessment through intelligent
              diagnostics, precise scanning and clinical decision support.
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
                Book Foot Checkup
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href="/contact?type=foot-checkup" variant="outline">
                Explore Our Technology
              </Button>
            </div>
          </InsightReveal>

          <InsightReveal className="relative min-h-[260px] xs:min-h-[340px] sm:min-h-[390px]" delay={0.08}>
            <div className="absolute right-0 top-3 h-[86%] w-[86%] rounded-full bg-[#ddf1ff]/70 blur-[58px]" />
            <div className="absolute right-[6%] top-[5%] h-[82%] w-[78%] rounded-full border border-[#c9e6f8]/50" />
            <InsightAsset
              alt="N-Stride Insight foot analysis equipment and pressure dashboard"
              className="relative z-10 ml-auto min-h-[260px] w-full max-w-[770px] [mask-image:radial-gradient(ellipse_at_center,black_66%,transparent_90%)] xs:min-h-[340px] sm:min-h-[430px]"
              imageClassName="object-contain object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              src="/insight/hero-diagnostics.png"
            />
          </InsightReveal>
        </div>

        <InsightReveal className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => {
            const Icon = item.icon;
            return (
              <InsightPill className="justify-center rounded-none border-r border-[#c9e6f8] bg-transparent shadow-none ring-0" icon={<Icon className="h-4 w-4 text-primary" />} key={item.label}>
                {item.label}
              </InsightPill>
            );
          })}
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
