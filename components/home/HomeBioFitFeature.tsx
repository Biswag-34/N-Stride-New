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
    <section className="bg-white py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-[#ddd6fe] bg-[linear-gradient(135deg,#ffffff,#fbf8ff_48%,#f0fcff)] p-4 shadow-[0_24px_70px_rgba(90,103,216,0.1)] sm:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#e9ddff]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 left-10 h-72 w-96 rounded-full bg-[#dcf8ff]/70 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <motion.div variants={staggerItem}>
              <p className="inline-flex rounded-full bg-white/82 px-3 py-1 text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-accent-indigo ring-1 ring-[#ddd6fe]">
                {bioFit.name}
              </p>
              <h2 className="mt-4 max-w-[35rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                Bio-Fit: mobility restoration built around real patient needs.
              </h2>
              <p className="mt-4 max-w-[39rem] text-sm leading-7 text-text-secondary">
                {bioFit.shortDescription} The pathway connects assessment, fitting, adaptation guidance and rehabilitation support so every recommendation has a clear clinical purpose.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {capabilityCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className={`rounded-[0.9rem] border px-4 py-4 shadow-[0_12px_30px_rgba(90,103,216,0.06)] ${item.className}`} key={item.title}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-white/88 shadow-[0_10px_24px_rgba(16,42,67,0.08)]">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-heading text-sm font-bold text-primary-dark">{item.title}</p>
                      <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {bioFit.proofPoints.slice(0, 4).map((point) => (
                  <div className="flex items-start gap-2 rounded-[0.8rem] bg-white/78 px-3 py-3 text-xs font-bold leading-5 text-primary-dark ring-1 ring-[#e2dcff]" key={point}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-indigo" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-[0.65rem]" href="/verticals/bio-fit">
                  Explore Bio-Fit
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.65rem] bg-white/86" href={bioFit.cta.primary.href} variant="outline">
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
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(10,26,44,0),rgba(10,26,44,0.78))] px-5 pb-5 pt-24 text-white">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/74">Core pathway</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {bioFit.process.slice(0, 4).map((step) => (
                      <div className="rounded-[0.75rem] bg-white/12 px-3 py-3 text-xs font-bold leading-5 ring-1 ring-white/18 backdrop-blur-sm" key={step.title}>
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
