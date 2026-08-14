"use client";

import { ArrowRight, BadgeCheck, CalendarCheck, ExternalLink, Network, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const trustItems = [
  { title: "Clinical-led", subtitle: "Expert care", icon: ShieldCheck },
  { title: "Connected", subtitle: "One ecosystem", icon: Network },
  { title: "Outcome-first", subtitle: "Clearer care", icon: BadgeCheck },
];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center pb-8 pt-8 xs:pt-10 sm:pt-12 lg:min-h-[620px] lg:pb-12"
      style={{
        backgroundImage: "url('/requested-assets/home-hero.png')",
        backgroundPosition: "center right",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_38%,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_46%,rgba(0,0,0,0)_74%)] md:hidden"
      />
      <Container className="relative z-10">
        <div className="flex min-h-0 items-center py-3 md:min-h-[520px] md:py-0">
          <motion.div
            className="relative max-w-[42rem] py-6 md:px-5"
            initial={false}
            animate={reduceMotion ? undefined : "visible"}
            variants={staggerContainer}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 inset-y-0 hidden rounded-[1.5rem] bg-[radial-gradient(ellipse_at_24%_45%,rgba(255,255,255,0.56),rgba(255,255,255,0.24)_48%,rgba(255,255,255,0)_78%)] backdrop-blur-[0.5px] md:block"
            />
            <motion.h1
              className="relative max-w-[34rem] text-[clamp(2.05rem,9vw,3.35rem)] font-semibold leading-[1.03] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.38)] sm:text-5xl md:text-primary-dark md:[text-shadow:0_2px_22px_rgba(255,255,255,0.72)]"
              variants={fadeUp}
            >
              Complete care. Clearer steps.
            </motion.h1>
            <motion.p className="relative mt-5 max-w-[34rem] text-sm leading-7 text-white/90 [text-shadow:0_2px_14px_rgba(0,0,0,0.32)] sm:text-base sm:leading-8 md:text-[#375368] md:[text-shadow:0_1px_16px_rgba(255,255,255,0.76)]" variants={fadeUp}>
              N-Stride connects diagnostics, clinical expertise, advanced products and rehabilitation support across foot health,
              lower-limb care, wound care and mobility restoration.
            </motion.p>
            <motion.div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={fadeUp}>
              <Button className="w-full rounded-[0.45rem] px-5 sm:w-auto sm:px-6" href={ctas.primary.href}>
                Book Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] border-primary/30 bg-white/78 px-5 sm:w-auto sm:px-6" href="/contact?type=general" variant="outline">
                Explore Our Ecosystem
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div className="relative mt-6 grid max-w-[24rem] grid-cols-3 gap-1.5 xs:gap-2 md:mt-8 md:max-w-[36rem] md:gap-3" variants={staggerContainer}>
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div className="group flex min-h-[4.35rem] flex-col items-center justify-center gap-1 rounded-[0.65rem] border border-white/82 bg-white/86 px-1.5 py-2 text-center shadow-[0_14px_32px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:bg-white md:min-h-0 md:flex-row md:justify-start md:gap-3 md:rounded-[0.8rem] md:bg-white/72 md:px-3 md:py-3 md:text-left md:shadow-[0_14px_32px_rgba(20,121,201,0.09)]" key={item.title} variants={staggerItem}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.55rem] bg-soft-sky text-primary shadow-[0_10px_22px_rgba(20,121,201,0.1)] md:h-9 md:w-9 md:rounded-[0.7rem]">
                      <Icon aria-hidden="true" className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.66rem] font-bold leading-tight text-primary-dark xs:text-[0.7rem] md:text-xs">{item.title}</span>
                      <span className="hidden text-[0.65rem] font-medium text-text-muted md:block">{item.subtitle}</span>
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div className="relative mt-4 flex max-w-[22rem] items-start gap-2 text-xs font-bold leading-5 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.32)] md:max-w-none md:items-center md:text-primary-dark md:[text-shadow:0_1px_14px_rgba(255,255,255,0.72)]" variants={fadeUp}>
              <CalendarCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary md:mt-0" />
              <span>Book, assess, plan and support through one coordinated ecosystem.</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <a className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary" href={brand.ecommerceUrl} target="_blank" rel="noreferrer">
            Visit Store
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
