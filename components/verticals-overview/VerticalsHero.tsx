"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { overviewIconMap } from "./VerticalsOverviewPrimitives";

const heroMetrics = [
  { label: "Clinical-led solutions", icon: overviewIconMap.protect },
  { label: "Integrated care journey", icon: overviewIconMap.partner },
  { label: "Technology powered", icon: overviewIconMap.analysis },
  { label: "Outcome focused", icon: overviewIconMap.outcome },
];

function HeroEcosystemVisual() {
  return (
    <div
      aria-label="N-Stride connected care verticals visual"
      className="relative mx-auto aspect-[488/374] w-full max-w-[min(38.5rem,92vw)] overflow-visible drop-shadow-[0_18px_38px_rgba(20,121,201,0.08)] sm:drop-shadow-[0_24px_48px_rgba(20,121,201,0.08)]"
    >
      <Image
        alt="N-Stride connected care ecosystem with Kinetics, Insight, Wound Care and Bio-Fit"
        className="object-contain"
        fill
        priority
        sizes="(min-width: 1024px) 620px, 100vw"
        src="/verticals-overview/hero-ecosystem-crop.png"
      />
    </div>
  );
}

export function VerticalsHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_30%,rgba(38,182,200,0.12),transparent_31rem),linear-gradient(180deg,#ffffff_0%,#f4faff_100%)] pb-10 pt-8 xs:pt-10 sm:pt-14 lg:pb-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} variants={staggerContainer}>
            <motion.h1 className="max-w-[32rem] text-[clamp(2.08rem,10vw,2.8rem)] font-semibold leading-[1.05] text-primary-dark sm:text-5xl lg:text-[3.55rem]" variants={fadeUp}>
              One Ecosystem.
              <br />
              Four Verticals.
              <br />
              Complete Care.
            </motion.h1>
            <motion.p className="mt-5 max-w-[35rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8" variants={fadeUp}>
              N-Stride brings together four specialized care verticals under one connected ecosystem, so every step is supported with precision, purpose and partnership.
            </motion.p>
            <motion.div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap" variants={fadeUp}>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-6" href={ctas.primary.href}>
                Book Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-6" href={ctas.stepAhead.href} variant="outline">
                Partner with Step-Ahead
              </Button>
            </motion.div>
            <motion.div className="mt-9 grid max-w-[42rem] grid-cols-2 gap-4 sm:grid-cols-4" variants={staggerContainer}>
              {heroMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <motion.div className="flex items-center gap-3" key={metric.label} variants={staggerItem}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft">
                      <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <span className="text-[0.7rem] font-bold leading-4 text-primary-dark">{metric.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <HeroEcosystemVisual />
        </div>
      </Container>

      <div className="mt-6 flex justify-center lg:hidden">
        <Link className="inline-flex items-center gap-2 text-sm font-bold text-primary" href={brand.ecommerceUrl} target="_blank" rel="noreferrer">
          Visit Store
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
