"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, ShieldCheck } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import { fadeUp, IconText, KineticsContainer, MotionReveal } from "@/components/kinetics/KineticsPrimitives";

type KineticsHeroProps = {
  vertical: Vertical;
};

export function KineticsHero({ vertical }: KineticsHeroProps) {
  const secondaryCta = vertical.cta.secondary ?? {
    external: true,
    href: "https://nstride.shop",
    label: "Explore Footwear",
  };

  return (
    <>
    <section className="relative isolate overflow-hidden bg-white md:hidden">
      <div className="relative min-h-[28rem] overflow-hidden px-4 pb-5 pt-6">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_43%,rgba(255,255,255,0.2)_100%),url('/kinetics/hero.png')] bg-cover bg-[62%_center]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,#ffffff_86%)]" />
        <div className="relative z-10 max-w-[18rem]">
          <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#009b92]">Kinetics</p>
          <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-primary-dark">
            Move with greater confidence.
          </h1>
          <p className="mt-3 text-[0.88rem] font-medium leading-6 text-[#36536a]">
            Therapeutic footwear and fit support for protected everyday movement.
          </p>
          <Button className="nstride-mobile-action mt-5 w-full bg-[#009b92] hover:bg-[#087a74]" href={vertical.cta.primary.href}>
            Book an assessment
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-[#cdebf0] px-4 pb-6">
        {["Assessment", "Fit support", "Mobility"].map((item) => (
          <div className="grid justify-items-center gap-1 bg-[#f5fcfd] px-2 py-3 text-center first:rounded-l-[0.9rem] last:rounded-r-[0.9rem]" key={item}>
            <GiRunningShoe className="h-5 w-5 text-[#009b92]" />
            <span className="text-[0.68rem] font-extrabold leading-tight text-primary-dark">{item}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="relative isolate hidden overflow-hidden bg-[linear-gradient(115deg,#ffffff_0%,#fbfdff_42%,#eef8ff_100%)] md:block">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(20,121,201,0.18),transparent_32%),radial-gradient(circle_at_62%_80%,rgba(221,241,255,0.68),transparent_33%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,#ffffff_78%)]" />
      <KineticsContainer className="relative grid items-center gap-7 py-9 xs:py-11 lg:min-h-[560px] lg:grid-cols-[0.78fr_1.22fr] lg:gap-6 lg:py-0">
        <motion.div
          animate="visible"
          className="max-w-[34rem]"
          initial={false}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1
            className="max-w-[28rem] font-heading text-[clamp(2rem,6vw,3.45rem)] font-bold leading-[1.04] text-primary-dark lg:leading-[1.02]"
            variants={fadeUp}
          >
            <span className="block">Protected steps.</span>
            <span className="block">Confident movement.</span>
          </motion.h1>
          <motion.p className="mt-5 max-w-[30rem] text-sm leading-7 text-text-secondary sm:text-base" variants={fadeUp}>
            N-Stride Kinetics brings therapeutic footwear and performance-driven design together for protection,
            comfort and confidence in every step.
          </motion.p>
          <motion.div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap" variants={fadeUp}>
            <Button className="min-h-12 w-full rounded-[0.45rem] px-5 text-xs xs:w-auto xs:px-6 md:min-h-11 lg:min-h-10" href={vertical.cta.primary.href}>
              Book Foot Checkup
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              className="min-h-12 w-full rounded-[0.45rem] px-5 text-xs xs:w-auto xs:px-6 md:min-h-11 lg:min-h-10"
              external={secondaryCta.external}
              href={secondaryCta.href}
              variant="outline"
            >
              Explore Footwear
            </Button>
          </motion.div>
          <motion.div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10" variants={fadeUp}>
            <IconText icon={<GiRunningShoe className="h-5 w-5" />} text="movement" title="Built for everyday" />
            <IconText icon={<HeartPulse className="h-5 w-5" />} text="fit & comfort" title="Clinically guided" />
            <IconText icon={<ShieldCheck className="h-5 w-5" />} text="loved by users" title="Trusted by specialists," />
          </motion.div>
        </motion.div>

        <MotionReveal className="relative aspect-[4/3] min-h-0 md:min-h-[320px] lg:h-[560px]">
          <div className="relative ml-auto h-full min-h-0 w-full max-w-[900px] md:min-h-[320px] lg:min-h-[350px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-12 right-[-4%] z-0 h-[48%] w-[88%] rounded-[50%] bg-[#bce2fb]/70 blur-[52px]"
            />
            <div
              aria-hidden="true"
              className="absolute right-[3%] top-[1%] z-0 h-[88%] w-[88%] rounded-[42%] bg-[#dff1ff]/84 blur-[72px]"
            />
            <div className="relative z-10 h-full min-h-0 md:min-h-[320px] lg:min-h-[350px]">
              <Image
                alt="Therapeutic footwear worn indoors"
                className="object-cover object-[58%_50%] mix-blend-multiply md:object-center"
                fill
                priority
                sizes="(min-width: 1024px) 900px, 94vw"
                src="/kinetics/hero.png"
                style={{
                  maskImage:
                    "radial-gradient(ellipse at 56% 48%, #000 54%, rgba(0,0,0,0.82) 67%, transparent 93%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at 56% 48%, #000 54%, rgba(0,0,0,0.82) 67%, transparent 93%)",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.76)_8%,transparent_25%,transparent_78%,rgba(238,248,255,0.42)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(0deg,#ffffff_0%,rgba(244,250,255,0.72)_32%,transparent_82%)]" />
              <div className="absolute -left-10 bottom-0 h-36 w-[78%] rounded-full bg-[#dff1ff]/62 blur-3xl" />
              <div className="absolute bottom-[7%] right-[14%] z-20 flex items-center gap-2 rounded-full border border-white/82 bg-white/46 px-4 py-2 text-xs font-bold text-primary-dark shadow-[0_14px_34px_rgba(7,59,102,0.12)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Comfort fit tested
              </div>
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[4%] bottom-[9%] z-20 h-[34%] w-[88%]"
                fill="none"
                viewBox="0 0 760 190"
              >
                <path
                  d="M5 151C90 66 167 112 253 93C354 70 393-5 510 27C604 52 656 106 755 56"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeWidth="16"
                  style={{ filter: "blur(18px)", opacity: 0.28 }}
                />
                <path
                  d="M24 158C112 83 183 125 268 101C362 74 412 12 517 39C610 63 666 110 748 74"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                  opacity="0.42"
                />
                <path
                  d="M44 178C126 122 188 147 278 124C374 100 423 45 514 65C594 82 655 112 724 91"
                  stroke="#ffffff"
                  strokeDasharray="4 9"
                  strokeLinecap="round"
                  strokeWidth="1.1"
                  opacity="0.22"
                />
              </svg>
            </div>
          </div>
        </MotionReveal>
      </KineticsContainer>
    </section>
    </>
  );
}
