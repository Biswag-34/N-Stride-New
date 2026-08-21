"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";
import { verticals } from "@/data/verticals";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { overviewIconMap } from "./VerticalsOverviewPrimitives";

const heroMetrics = [
  { label: "Clinical-led solutions", icon: overviewIconMap.protect },
  { label: "Integrated care journey", icon: overviewIconMap.partner },
  { label: "Technology powered", icon: overviewIconMap.analysis },
  { label: "Outcome focused", icon: overviewIconMap.outcome },
];

export function VerticalsHero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f4fbff,#ffffff)] px-4 pb-6 pt-5 md:hidden">
      <div className="absolute -right-16 top-6 h-48 w-48 rounded-full bg-soft-sky/70 blur-3xl" />
      <div className="relative z-10">
        <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-primary">Choose care</p>
        <h1 className="mt-3 font-heading text-[1.82rem] font-extrabold leading-[1.08] text-primary-dark">
          Find the N-Stride care path you need.
        </h1>
        <p className="mt-2 text-[0.86rem] font-medium leading-6 text-text-secondary">
          Footwear, diagnostics, wound support and restoration, connected in one ecosystem.
        </p>

        <div className="mt-5 grid gap-2.5">
          {verticals.slice(0, 4).map((vertical) => {
            const Icon = vertical.id === "kinetics"
              ? overviewIconMap.foot
              : vertical.id === "insight"
                ? overviewIconMap.diagnostics
                : vertical.id === "wound-care"
                  ? overviewIconMap.bandage
                  : overviewIconMap.restore;

            return (
              <Link className="nstride-mobile-card grid min-h-[5.3rem] grid-cols-[3.25rem_1fr_auto] items-center gap-3 px-3 py-2.5" href={vertical.href} key={vertical.id}>
                <span className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-[0.85rem] bg-[#eef8ff] text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-heading text-sm font-extrabold text-primary-dark">{vertical.shortName}</span>
                  <span className="mt-0.5 block text-[0.75rem] font-medium leading-5 text-text-secondary">{vertical.description}</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-primary" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <section
      className="relative isolate hidden overflow-hidden bg-cover bg-center pb-10 pt-8 xs:pt-10 sm:pt-14 md:block lg:min-h-[650px] lg:pb-14"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 38%, rgba(255,255,255,0.42) 66%, rgba(255,255,255,0.08) 100%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(244,250,255,0.62)), url('/verticals-overview/hero-verticals-banner.png')",
        backgroundPosition: "center right",
      }}
    >
      <div aria-hidden="true" className="absolute inset-y-0 left-0 z-0 w-36 bg-[linear-gradient(90deg,#ffffff,rgba(255,255,255,0))]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-0 h-28 bg-[linear-gradient(180deg,rgba(244,250,255,0),#ffffff_88%)]" />
      <Container className="relative z-10">
        <div className="flex min-h-0 items-center py-4 md:min-h-[540px] md:py-0">
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
            <motion.div className="mt-9 grid max-w-[42rem] grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-4" variants={staggerContainer}>
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
        </div>
      </Container>

      <div className="mt-6 flex justify-center lg:hidden">
        <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary" href={brand.ecommerceUrl} target="_blank" rel="noreferrer">
          Visit Store
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
    </>
  );
}
