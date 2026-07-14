"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeartPulse, ShieldCheck } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import { fadeUp, IconText, KineticsContainer, KineticsKicker, kineticEase, MotionReveal } from "@/components/kinetics/KineticsPrimitives";

type KineticsHeroProps = {
  vertical: Vertical;
};

const heroLabels = [
  { label: "Support that moves with you", className: "left-[38%] top-[22%]" },
  { label: "Protection that lasts", className: "left-[24%] top-[50%]" },
  { label: "Guidance that fits", className: "right-[7%] top-[43%]" },
];

export function KineticsHero({ vertical }: KineticsHeroProps) {
  const reduceMotion = useReducedMotion();
  const secondaryCta = vertical.cta.secondary ?? {
    external: true,
    href: "https://nstride.shop",
    label: "Explore Footwear",
  };

  return (
    <section className="relative isolate overflow-hidden bg-white shadow-[inset_0_-18px_35px_rgba(20,121,201,0.06)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_77%_43%,rgba(20,121,201,0.2),transparent_34%),radial-gradient(circle_at_61%_74%,rgba(221,241,255,0.65),transparent_34%)]"
      />
      <KineticsContainer className="relative grid min-h-[560px] items-center gap-6 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:py-0">
        <motion.div
          animate="visible"
          className="max-w-[33rem]"
          initial={false}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <KineticsKicker>{vertical.shortName}</KineticsKicker>
          </motion.div>
          <motion.h1
            className="mt-4 max-w-[31rem] font-heading text-[clamp(2.25rem,4vw,4rem)] font-bold leading-[0.98] tracking-[-0.02em] text-primary-dark"
            variants={fadeUp}
          >
            Movement deserves the right foundation.
          </motion.h1>
          <motion.p className="mt-5 max-w-[30rem] text-base leading-7 text-text-secondary" variants={fadeUp}>
            N-Stride Kinetics brings therapeutic footwear and performance-driven design together for protection,
            comfort and confidence in every step.
          </motion.p>
          <motion.div className="mt-6 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <Button className="min-h-10 rounded-[0.45rem] px-6 text-xs" href={vertical.cta.primary.href}>
              Book Foot Checkup
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              className="min-h-10 rounded-[0.45rem] px-6 text-xs"
              external={secondaryCta.external}
              href={secondaryCta.href}
              variant="outline"
            >
              Explore Footwear
            </Button>
          </motion.div>
          <motion.div className="mt-10 grid gap-4 sm:grid-cols-3" variants={fadeUp}>
            <IconText icon={<GiRunningShoe className="h-5 w-5" />} text="movement" title="Built for everyday" />
            <IconText icon={<HeartPulse className="h-5 w-5" />} text="fit & comfort" title="Clinically guided" />
            <IconText icon={<ShieldCheck className="h-5 w-5" />} text="loved by users" title="Trusted by specialists," />
          </motion.div>
        </motion.div>

        <MotionReveal className="relative min-h-[350px] lg:h-[560px]">
          <div className="relative ml-auto h-full min-h-[350px] w-full max-w-[900px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-10 right-[-4%] z-0 h-[48%] w-[88%] rounded-[50%] bg-[#bce2fb]/70 blur-[48px]"
            />
            <div
              aria-hidden="true"
              className="absolute right-[3%] top-[2%] z-0 h-[88%] w-[88%] rounded-[42%] bg-[#dff1ff]/80 blur-[64px]"
            />
            <div className="relative z-10 h-full min-h-[350px] overflow-hidden">
              <Image
                alt="Therapeutic footwear worn indoors"
                className="object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 900px, 94vw"
                src="/kinetics/hero.png"
                style={{
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 7%, #000 20%, #000 100%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 7%, #000 20%, #000 100%)",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.72)_10%,transparent_24%,transparent_82%,rgba(221,241,255,0.13)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[32%] bg-[linear-gradient(0deg,rgba(188,226,251,0.76),rgba(188,226,251,0.22)_42%,transparent)]" />
              <div className="absolute -left-10 bottom-0 h-32 w-[72%] rounded-full bg-[#dff1ff]/56 blur-3xl" />
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[2%] bottom-[8%] z-20 h-[42%] w-[92%]"
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
              <div className="absolute bottom-[9%] right-[8%] z-20 flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-full border border-white/72 bg-white/14 text-center font-heading text-[0.48rem] font-bold uppercase tracking-[0.15em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] backdrop-blur-sm">
                Comfort fit tested
              </div>
            </div>
            {heroLabels.map((item, index) => (
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                className={`absolute z-20 hidden rounded-full border border-white/50 bg-primary-dark/34 px-4 py-3 text-xs font-bold leading-snug text-white shadow-[0_12px_28px_rgba(7,59,102,0.18)] backdrop-blur-md md:block ${item.className}`}
                key={item.label}
                transition={{ delay: index * 0.25, duration: 5.2, ease: kineticEase, repeat: Infinity }}
              >
                <span className="mr-2 inline-flex h-4 w-4 rounded-full border border-white/60 align-middle" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </MotionReveal>
      </KineticsContainer>
    </section>
  );
}
