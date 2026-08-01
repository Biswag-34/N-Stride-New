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
      <Container className="relative z-10">
        <div className="flex min-h-[520px] items-center">
          <motion.div
            className="max-w-[42rem] py-6"
            initial={false}
            animate={reduceMotion ? undefined : "visible"}
            variants={staggerContainer}
          >
            <motion.h1
              className="max-w-[34rem] text-[clamp(2.05rem,9vw,3.35rem)] font-semibold leading-[1.03] text-primary-dark sm:text-5xl"
              variants={fadeUp}
            >
              Complete care. Clearer steps.
            </motion.h1>
            <motion.p className="mt-5 max-w-[34rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8" variants={fadeUp}>
              N-Stride connects diagnostics, clinical expertise, advanced products and rehabilitation support across foot health,
              lower-limb care, wound care and mobility restoration.
            </motion.p>
            <motion.div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap" variants={fadeUp}>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-6" href={ctas.primary.href}>
                Book Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] border-primary/30 bg-white/78 px-5 xs:w-auto xs:px-6" href="/contact?type=general" variant="outline">
                Explore Our Ecosystem
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div className="mt-8 grid max-w-[36rem] gap-3 xs:grid-cols-3" variants={staggerContainer}>
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div className="group flex items-center gap-3 rounded-[0.8rem] border border-white/78 bg-white/72 px-3 py-3 shadow-[0_14px_32px_rgba(20,121,201,0.09)] transition hover:-translate-y-1 hover:bg-white" key={item.title} variants={staggerItem}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.7rem] bg-soft-sky text-primary shadow-[0_10px_22px_rgba(20,121,201,0.1)]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold text-primary-dark">{item.title}</span>
                      <span className="block text-[0.65rem] font-medium text-text-muted">{item.subtitle}</span>
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary-dark" variants={fadeUp}>
              <CalendarCheck aria-hidden="true" className="h-4 w-4 text-primary" />
              Book, assess, plan and support through one coordinated ecosystem.
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-primary" href={brand.ecommerceUrl} target="_blank" rel="noreferrer">
            Visit Store
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
