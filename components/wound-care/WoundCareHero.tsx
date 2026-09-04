"use client";

import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope, UserRoundCheck } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import { leadCaptureHref } from "@/data/leadCapture";
import {
  WoundAsset,
  WoundBackgroundImage,
  WoundContainer,
  WoundPill,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

type WoundCareHeroProps = {
  vertical: Vertical;
};

const proof = [
  { icon: Stethoscope, label: "Evidence-aligned care" },
  { icon: UserRoundCheck, label: "Personalized support" },
  { icon: HeartPulse, label: "Guided pathways" },
  { icon: ShieldCheck, label: "Structured follow-up" },
];

export function WoundCareHero({ vertical }: WoundCareHeroProps) {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white px-4 pb-6 pt-6 md:hidden">
      <div className="absolute inset-x-0 top-0 h-[27rem] bg-[linear-gradient(180deg,#fff5f1,#ffffff)]" />
      <div className="relative z-10">
        <div className="relative min-h-[26rem] overflow-hidden rounded-b-[1.25rem]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.93)_45%,rgba(255,255,255,0.25)_100%),url('/wound-care/hero-vac-setup-cutout.png')] bg-contain bg-[right_1.25rem] bg-no-repeat" />
          <div className="relative max-w-[18rem] pt-2">
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#df4a46]">Wound Care</p>
            <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-primary-dark">
              Specialist support for foot wounds.
            </h1>
            <p className="mt-3 text-[0.88rem] font-medium leading-6 text-[#5f4a42]">
              Coordinated wound-care support with clinician-led direction.
            </p>
            <Button className="nstride-mobile-action mt-5 w-full bg-[#ef4444] hover:bg-[#cf2f2f]" href={vertical.cta.primary.href}>
              Request wound-care support
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 rounded-[0.9rem] border border-[#facaca] bg-[#fff3f1] px-3 py-3 text-[0.74rem] font-bold leading-5 text-[#8c1f1b]">
          If a wound has redness, swelling, pain, discharge or fever, seek urgent medical care.
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {proof.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <div className="nstride-mobile-card grid justify-items-center gap-1 px-2 py-3 text-center" key={item.label}>
                <Icon aria-hidden="true" className="h-5 w-5 text-[#df4a46]" />
                <span className="text-[0.62rem] font-extrabold leading-tight text-primary-dark">{item.label.replace(" care", "")}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <WoundSection className="hidden bg-[linear-gradient(105deg,#ffffff,#fbfdff_56%,#fff7e8)] pb-12 pt-8 md:block">
      <WoundBackgroundImage className="bottom-[-2rem] right-0 h-[24rem] w-[54rem] opacity-20 sm:h-[31rem] sm:w-[70rem] sm:opacity-30" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer className="relative">
        <div className="grid items-start gap-7 lg:min-h-[445px] lg:grid-cols-[0.52fr_0.48fr] lg:gap-9">
          <WoundReveal>
            <h1 className="max-w-[42rem] font-heading text-[clamp(1.7rem,5.4vw,3.62rem)] font-bold leading-[1.04] text-primary-dark">
              <span className="block">Clinician-guided support for complex foot and lower-limb wounds.</span>
            </h1>
            <p className="mt-5 max-w-[36rem] font-heading text-lg font-semibold leading-7 text-[#b86b00] sm:text-xl sm:leading-8">
              Wound assessment, dressing planning, pressure off-loading coordination and follow-up.
            </p>
            <p className="mt-4 max-w-[35rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              N-Stride includes NPWT support when clinically appropriate, with care routed through qualified supervision.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
                Request Wound Care Support
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/verticals/wound-care", type: "step-ahead" })} variant="outline">
                Partner with Step-Ahead
              </Button>
            </div>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="relative aspect-[4/3] min-h-0 md:min-h-[335px]">
              <div className="absolute right-[4%] top-[10%] h-[78%] w-[82%] rounded-[3.5rem] bg-[#fff2dd]/38 blur-[48px]" />
              <WoundAsset
                alt="NPWT VAC dressing setup with device and wound dressing"
                className="relative z-10 ml-auto min-h-full max-w-[590px] overflow-visible shadow-none md:min-h-[335px]"
                imageClassName="object-contain object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                src="/wound-care/hero-vac-setup-cutout.png"
              />
              <WoundAsset
                alt=""
                className="pointer-events-none absolute -right-20 top-[-0.5rem] z-20 hidden h-[350px] w-[240px] opacity-34 mix-blend-multiply sm:block"
                imageClassName="object-contain object-right"
                sizes="20vw"
                src="/wound-care/foot-line-amber.png"
              />
            </div>
          </WoundReveal>
        </div>
        <WoundReveal className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => {
            const Icon = item.icon;
            return <WoundPill className="justify-center bg-transparent shadow-none ring-0" icon={<Icon className="h-4 w-4 text-primary" />} key={item.label}>{item.label}</WoundPill>;
          })}
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
    </>
  );
}
