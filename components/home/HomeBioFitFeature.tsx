"use client";

import { ArrowRight, CheckCircle2, Footprints, HandHeart, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { verticals } from "@/data/verticals";
import { staggerContainer, staggerItem } from "@/lib/motion";

const bioFit = verticals.find((vertical) => vertical.id === "bio-fit")!;

const capabilityCards = [
  {
    title: "Prosthetics",
    text: "Custom fitting pathways shaped around function, comfort and day-to-day confidence.",
    icon: Footprints,
    className: "border-[#d7dafd] bg-[#f7f7ff] text-accent-indigo",
  },
  {
    title: "Orthotics",
    text: "Braces, supports and mobility devices selected around stability, adaptation and use.",
    icon: ShieldCheck,
    className: "border-[#d5ecff] bg-[#f4fbff] text-primary",
  },
  {
    title: "Silicone Restoration",
    text: "Cosmetic restoration planning with patient-specific fit, texture and reassurance in mind.",
    icon: Sparkles,
    className: "border-[#e6d8ff] bg-[#fbf7ff] text-[#7c3aed]",
  },
];

export function HomeBioFitFeature() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f7f4ff_46%,#eefaff_100%)] py-8 md:py-6">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-[#d8d0fa] bg-[linear-gradient(135deg,#ffffff,#fbf8ff_48%,#f0fcff)] p-4 shadow-[0_24px_70px_rgba(90,103,216,0.1)] sm:p-6 md:p-5 lg:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#e9ddff]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 left-10 h-72 w-96 rounded-full bg-[#dcf8ff]/70 blur-3xl" />

          <div className="relative grid gap-7 md:gap-5 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <motion.div variants={staggerItem}>
              <h2 className="max-w-[35rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl md:text-[2rem] lg:text-3xl">
                Bio-Fit: personalised solutions for mobility and restoration.
              </h2>
              <p className="mt-4 max-w-[39rem] text-sm leading-7 text-text-secondary md:max-w-[34rem] md:leading-6">
                Prosthetics, orthotics, mobility supports and silicone restoration planned around each person&apos;s fit, function and daily needs.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2">
                {capabilityCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className={`flex items-center gap-2 rounded-[0.75rem] border px-2.5 py-2.5 shadow-[0_12px_30px_rgba(90,103,216,0.06)] md:block md:rounded-[0.9rem] md:px-4 md:py-4 ${item.className}`} key={item.title}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.6rem] bg-white/88 shadow-[0_10px_24px_rgba(16,42,67,0.08)] md:h-10 md:w-10 md:rounded-[0.7rem]">
                        <Icon aria-hidden="true" className="h-4 w-4 md:h-5 md:w-5" />
                      </span>
                      <p className="font-heading text-xs font-bold leading-tight text-primary-dark md:mt-4 md:text-sm">{item.title}</p>
                      <p className="mt-2 hidden text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                {bioFit.proofPoints.slice(0, 4).map((point) => (
                  <div className="flex items-start gap-2 rounded-[0.8rem] bg-white/82 px-3 py-3 text-xs font-bold leading-5 text-primary-dark ring-1 ring-[#ded7ff] md:px-2.5 md:py-2.5 md:leading-4" key={point}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-indigo" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap md:mt-5">
                <Button className="w-full rounded-[0.65rem] xs:w-auto" href="/verticals/bio-fit">
                  Explore Bio-Fit
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="w-full rounded-[0.65rem] bg-white/86 xs:w-auto" href={bioFit.cta.primary.href} variant="outline">
                  {bioFit.cta.primary.label}
                </Button>
              </div>
            </motion.div>

            <motion.div className="relative" variants={staggerItem}>
              <div className="relative min-h-[25rem] overflow-hidden rounded-[1.1rem] border border-white bg-white shadow-[0_24px_58px_rgba(16,42,67,0.13)] sm:min-h-[30rem] lg:min-h-[34rem]">
                <Image
                  alt="Bio-Fit prosthetic fitting consultation"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  src="/requested-assets/biofit-who-help.png"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(10,26,44,0),rgba(10,26,44,0.78))] px-4 pb-4 pt-20 text-white sm:px-5 sm:pb-5 sm:pt-24 md:hidden">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/74">Core pathway</p>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:grid sm:grid-cols-2 sm:gap-2">
                    {bioFit.process.slice(0, 4).map((step) => (
                      <div className="rounded-full bg-white/14 px-2.5 py-1.5 text-[0.62rem] font-bold leading-tight ring-1 ring-white/18 backdrop-blur-sm sm:rounded-[0.75rem] sm:px-3 sm:py-3 sm:text-xs sm:leading-5" key={step.title}>
                        {step.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-6 hidden rounded-[0.9rem] bg-white px-4 py-3 shadow-[0_18px_40px_rgba(90,103,216,0.16)] ring-1 ring-[#e2dcff] sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-[#f4efff] text-accent-indigo">
                    <HandHeart aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary-dark">Fit. Adapt. Support.</p>
                    <p className="mt-1 text-xs font-semibold text-text-secondary">A practical mobility pathway.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
