"use client";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
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
  { icon: ClipboardCheck, label: "Professional review" },
  { icon: ShieldCheck, label: "Triage" },
  { icon: BadgeCheck, label: "Decision" },
  { icon: ClipboardCheck, label: "Handoff" },
];

export function InsightHero({ vertical }: InsightHeroProps) {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white px-4 pb-6 pt-6 md:hidden">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,#eefaff,#ffffff)]" />
      <div className="relative z-10">
        <div className="relative min-h-[25.5rem] overflow-hidden rounded-b-[1.25rem]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_44%,rgba(255,255,255,0.28)_100%),url('/insight/hero-diagnostics.png')] bg-contain bg-[right_1rem] bg-no-repeat" />
          <div className="relative max-w-[17.75rem] pt-2">
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#0f9ed8]">Insight</p>
            <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-primary-dark">
              Understand your feet better.
            </h1>
            <p className="mt-3 text-[0.88rem] font-medium leading-6 text-[#36536a]">
              Foot scans, pressure checks and guided next-step recommendations.
            </p>
            <Button className="nstride-mobile-action mt-5 w-full" href={vertical.cta.primary.href}>
              Book a foot checkup
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="nstride-mobile-card mt-4 grid grid-cols-4 gap-1 p-2.5">
          {proof.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <div className="grid justify-items-center gap-1 text-center" key={item.label}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#eaf8ff] text-primary">
                  <Icon aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" />
                </span>
                <span className="text-[0.62rem] font-extrabold leading-tight text-primary-dark">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <InsightSection className="hidden bg-[linear-gradient(112deg,#ffffff_0%,#fbfdff_38%,#edf8ff_100%)] pb-9 pt-10 xs:pb-11 xs:pt-11 md:block">
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
              3D scanning, pressure mapping, gait observation and structured risk assessment are interpreted by trained professionals and do not replace professional judgment.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
                Book Foot Checkup
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href="#technology" variant="outline">
                View Assessment Technology
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
    </>
  );
}
