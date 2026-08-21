"use client";

import { ArrowRight, BadgeCheck, Building2, CalendarCheck, ExternalLink, Footprints, HeartPulse, Network, ShieldCheck, UserRound } from "lucide-react";
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

const mobileHelpItems = [
  { label: "Foot pain", href: "/contact?type=foot-checkup", icon: Footprints },
  { label: "Footwear", href: "/verticals/kinetics", icon: ShieldCheck },
  { label: "Wound care", href: "/contact?type=wound-care", icon: HeartPulse },
  { label: "Bio-Fit", href: "/verticals/bio-fit", icon: UserRound },
];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white md:hidden">
        <div className="absolute inset-x-0 top-0 h-[27rem] bg-[linear-gradient(180deg,#eef8ff,#ffffff)]" />
        <div className="relative min-h-[31rem] overflow-hidden px-4 pb-5 pt-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.93)_46%,rgba(255,255,255,0.18)_100%),url('/requested-assets/home-hero.png')] bg-cover bg-[58%_center]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,#ffffff_82%)]" />
          <div className="relative z-10 max-w-[18.5rem] pt-3">
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-primary">Connected care</p>
            <h1 className="mt-3 font-heading text-[2.35rem] font-extrabold leading-[1.03] text-primary-dark">
              Complete care. Clearer steps.
            </h1>
            <p className="mt-3 text-[0.9rem] font-medium leading-6 text-[#36536a]">
              Foot and lower-limb care with the right next step, from checkup to support.
            </p>
            <div className="mt-5 grid gap-2">
              <Button className="nstride-mobile-action w-full rounded-[0.7rem]" href={ctas.primary.href}>
                I need care
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="nstride-mobile-action w-full border-primary/45 bg-white/88 text-primary" href="/contact?type=step-ahead" variant="outline">
                <Building2 aria-hidden="true" className="h-4 w-4" />
                For clinics
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-12 px-4 pb-6">
          <div className="nstride-mobile-card grid grid-cols-3 divide-x divide-[#d7ebfa] overflow-hidden p-2.5">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="grid justify-items-center gap-1 px-1.5 py-1 text-center" key={item.title}>
                  <span className="grid h-8 w-8 place-items-center rounded-[0.65rem] bg-soft-sky text-primary">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="text-[0.66rem] font-extrabold leading-tight text-primary-dark">{item.title}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <h2 className="font-heading text-lg font-extrabold text-primary-dark">What do you need help with?</h2>
            <div className="nstride-mobile-chip-grid mt-3">
              {mobileHelpItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a className="nstride-mobile-card flex min-h-[4.3rem] items-center gap-2.5 px-3 py-2.5 text-xs font-extrabold text-primary-dark" href={item.href} key={item.label}>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.7rem] bg-[#eef8ff] text-primary">
                      <Icon aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" />
                    </span>
                    <span>{item.label}</span>
                    <ArrowRight aria-hidden="true" className="ml-auto h-3.5 w-3.5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    <section
      className="relative isolate hidden overflow-hidden bg-cover bg-center pb-8 pt-8 xs:pt-10 sm:pt-12 md:block lg:min-h-[620px] lg:pb-12"
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
    </>
  );
}
