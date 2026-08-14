"use client";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ClipboardCheck,
  Gauge,
  Radar,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  InsightAsset,
  InsightContainer,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

type InsightHeroProps = {
  vertical: Vertical;
};

const proof = [
  { icon: ScanLine, label: "3D scan" },
  { icon: Activity, label: "Pressure" },
  { icon: Gauge, label: "Gait" },
  { icon: Radar, label: "Risk" },
  { icon: BrainCircuit, label: "AI read" },
  { icon: ShieldCheck, label: "Triage" },
  { icon: BadgeCheck, label: "Decision" },
  { icon: ClipboardCheck, label: "Handoff" },
];

export function InsightHero({ vertical }: InsightHeroProps) {
  return (
    <InsightSection className="bg-[linear-gradient(112deg,#ffffff_0%,#fbfdff_38%,#edf8ff_100%)] pb-9 pt-10 xs:pb-11 xs:pt-11">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_73%_34%,rgba(38,182,200,0.13),transparent_32%)]" />
      <InsightWaveImage className="-bottom-36 right-0 h-64 w-[48rem] opacity-24 sm:h-80 sm:w-[72rem] sm:opacity-38" src="/insight/diagnostic-bg-soft.png" />
      <InsightContainer className="relative">
        <div className="grid items-center gap-7 lg:min-h-[510px] lg:grid-cols-[0.4fr_0.6fr] lg:gap-8">
          <InsightReveal>
            <h1 className="max-w-[34rem] font-heading text-[clamp(1.95rem,6.2vw,3.85rem)] font-bold leading-[1.04] text-primary-dark lg:leading-[1]">
              <span className="block md:whitespace-nowrap">Know the foot.</span>
              <span className="block md:whitespace-nowrap">Direct the care.</span>
            </h1>
            <p className="mt-5 max-w-[33rem] text-sm leading-7 text-text-secondary sm:text-[1rem] sm:leading-8">
              N-Stride Insight delivers advanced foot analysis and wound care assessment through intelligent
              diagnostics, precise scanning and clinical decision support.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
                Book Foot Checkup
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href="/contact?type=foot-checkup" variant="outline">
                Explore Our Technology
              </Button>
            </div>
          </InsightReveal>

          <InsightReveal className="relative aspect-[4/3] min-h-0 md:min-h-[420px]" delay={0.08}>
            <div className="absolute right-0 top-3 h-[86%] w-[88%] rounded-full bg-[#dff4ff]/85 blur-[70px]" />
            <div className="absolute bottom-8 right-[6%] h-24 w-[72%] rounded-full bg-white/80 blur-[34px]" />
            <InsightAsset
              alt="N-Stride Insight foot analysis equipment and pressure dashboard"
              className="relative z-10 ml-auto min-h-full w-full max-w-[790px] mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_58%,rgba(0,0,0,0.78)_72%,transparent_94%)] md:min-h-[450px]"
              imageClassName="object-contain object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              src="/insight/hero-diagnostics.png"
            />
            <div className="absolute bottom-1 left-0 right-0 z-20 mx-auto w-[min(100%,46rem)] px-2 sm:bottom-4">
              <div className="relative overflow-hidden rounded-[0.8rem] border border-white/72 bg-white/72 px-2.5 py-2.5 shadow-[0_18px_48px_rgba(20,121,201,0.14)] backdrop-blur-xl">
                <div aria-hidden="true" className="absolute left-7 right-7 top-[2rem] h-px bg-[linear-gradient(90deg,transparent,#7ccbef,#70d7c0,#7ccbef,transparent)]" />
                <div className="relative grid grid-cols-4 gap-2 sm:grid-cols-8">
                  {proof.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div className="group flex flex-col items-center gap-1.5" key={item.label}>
                        <span className="grid h-10 w-10 place-items-center rounded-full border border-[#c9e6f8] bg-[linear-gradient(145deg,#ffffff,#ecf8ff)] text-primary shadow-[0_8px_22px_rgba(20,121,201,0.13)] transition duration-300 group-hover:-translate-y-1 group-hover:text-[#26b6c8]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-h-[1.8rem] text-center text-[0.66rem] font-bold leading-tight text-primary-dark/82">
                          {index + 1}. {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </InsightReveal>
        </div>
      </InsightContainer>
    </InsightSection>
  );
}
