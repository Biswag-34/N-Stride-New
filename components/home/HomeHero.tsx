"use client";

import { ArrowRight, BadgeCheck, ExternalLink, Network, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";
import { fadeUp, scaleIn, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionKicker } from "./HomeDesignPrimitives";

const trustItems = [
  { title: "Expert Care", subtitle: "Clinical-led", icon: ShieldCheck },
  { title: "Integrated Solutions", subtitle: "All in one place", icon: Network },
  { title: "Proven Outcomes", subtitle: "Better results", icon: BadgeCheck },
];

function EcosystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="N-Stride care ecosystem visual"
      className="relative mx-auto aspect-[1448/1086] w-full max-w-[45rem] overflow-visible drop-shadow-[0_26px_50px_rgba(20,121,201,0.10)]"
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      variants={scaleIn}
    >
      <Image
        alt="N-Stride care ecosystem showing Kinetics, Insight, Bio-Fit and Wound Care"
        className="object-contain"
        fill
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
        src="/home/hero-ecosystem-final.png"
      />
    </motion.div>
  );
}

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-bottom bg-no-repeat pb-8 pt-11 sm:pt-12 lg:pb-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 78% 20%, rgba(38,182,200,0.10), transparent 28rem), linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,251,255,0.94) 100%), url('/home/decorative-wave-final.png')",
        backgroundSize: "auto, auto, 100% auto",
      }}
    >
      <div className="absolute inset-x-0 bottom-[-6rem] -z-10 h-52 rounded-[50%] border-t border-primary/20" />
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} variants={staggerContainer}>
            <motion.div variants={staggerItem}>
              <SectionKicker>All-in-one foot & lower-limb care ecosystem</SectionKicker>
            </motion.div>
            <motion.h1
              className="mt-5 max-w-[34rem] text-[2.65rem] font-semibold leading-[1.04] text-primary-dark sm:text-5xl lg:text-[3.72rem]"
              variants={fadeUp}
            >
              One ecosystem.
              <br />
              Every step of care.
              <br />
              Better outcomes.
            </motion.h1>
            <motion.p className="mt-5 max-w-[34rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8" variants={fadeUp}>
              N-Stride connects diagnostics, clinical expertise, advanced products and rehabilitation support across foot health,
              lower-limb care, wound care and mobility restoration.
            </motion.p>
            <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
              <Button className="rounded-[0.45rem] px-6" href={ctas.primary.href}>
                Book Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.45rem] px-6" href="/contact?type=general" variant="outline">
                Explore Our Ecosystem
              </Button>
            </motion.div>
            <motion.div className="mt-8 grid max-w-[34rem] gap-4 sm:grid-cols-3" variants={staggerContainer}>
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div className="flex items-center gap-3" key={item.title} variants={staggerItem}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft">
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
          </motion.div>

          <motion.div initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} variants={staggerContainer}>
            <EcosystemVisual />
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-primary" href={brand.ecommerceUrl} target="_blank" rel="noreferrer">
            Visit Store
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
