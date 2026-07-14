"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { verticals } from "@/data/verticals";
import { staggerContainer, staggerItem } from "@/lib/motion";
import {
  overviewIconMap,
  OverviewKicker,
  verticalToneStyles,
  type VerticalTone,
} from "./VerticalsOverviewPrimitives";

const verticalDisplay: Record<
  string,
  {
    chapterTitle: string;
    deliverables: string[];
    imageLabel: string;
    imageSrc: string;
    icon: keyof typeof overviewIconMap;
    tone: VerticalTone;
  }
> = {
  kinetics: {
    chapterTitle: "All Footwear Solutions",
    deliverables: [
      "Therapeutic footwear for all foot types",
      "Diabetic and pressure-relief footwear",
      "Activity, comfort and lifestyle shoes",
      "Custom footwear solutions",
    ],
    imageLabel: "Kinetics footwear visual",
    imageSrc: "/verticals-overview/kinetics-footwear-cutout.png",
    icon: "foot",
    tone: "kinetics",
  },
  insight: {
    chapterTitle: "Foot & Wound Analysis",
    deliverables: [
      "Foot pressure analysis & gait assessment",
      "Wound imaging & measurement",
      "Risk screening & early detection",
      "Data-driven care recommendations",
    ],
    imageLabel: "Insight equipment visual",
    imageSrc: "/verticals-overview/insight-equipment-cutout.png",
    icon: "diagnostics",
    tone: "insight",
  },
  "wound-care": {
    chapterTitle: "NPWT VAC Dressing System & Support",
    deliverables: [
      "NPWT VAC dressing systems",
      "Wound management protocols",
      "Professional training & support",
      "Follow-up & healing monitoring",
    ],
    imageLabel: "NPWT VAC setup visual",
    imageSrc: "/verticals-overview/wound-care-npwt-cutout.png",
    icon: "bandage",
    tone: "woundCare",
  },
  "bio-fit": {
    chapterTitle: "Orthotics, Prosthetics & Silicone Alteration",
    deliverables: [
      "Orthotic solutions custom & prefabricated",
      "Prosthetic fittings & rehabilitation support",
      "Silicone alteration & restoration",
      "Fit, function & long-term care",
    ],
    imageLabel: "orthotics/prosthetics/silicone visual",
    imageSrc: "/verticals-overview/biofit-devices-cutout.png",
    icon: "restore",
    tone: "bioFit",
  },
};

export function VerticalsPromiseTimeline() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="text-center">
          <OverviewKicker>The N-Stride promise</OverviewKicker>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
            Care that connects. Outcomes that matter.
          </h2>
          <p className="mx-auto mt-3 max-w-[46rem] text-sm leading-7 text-text-secondary">
            Our four verticals work together across every stage of your care journey.
          </p>
        </div>

        <motion.div
          className="relative mx-auto mt-9 max-w-[64rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={staggerContainer}
        >
          <div className="pointer-events-none absolute -bottom-5 -top-8 left-[-0.35rem] hidden w-[17.5rem] md:block" aria-hidden="true">
            <Image
              alt=""
              className="object-fill object-left"
              fill
              sizes="170px"
              src="/verticals-overview/timeline-curve.png"
            />
          </div>

          <div className="grid gap-4">
            {verticals.map((vertical, index) => {
              const item = verticalDisplay[vertical.id];
              if (!item) return null;
              const tone = verticalToneStyles[item.tone];
              const ArrowIcon = overviewIconMap.arrow;
              const CheckIcon = overviewIconMap.check;

              return (
                <motion.article className="relative md:pl-[6.35rem]" key={vertical.id} variants={staggerItem}>
                  <div
                    className={`absolute left-[-0.05rem] top-10 z-10 hidden h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border-[8px] border-white bg-gradient-to-br ${tone.path} font-heading text-xl font-bold text-white shadow-[0_14px_34px_rgba(20,121,201,0.16)] md:flex`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative grid gap-5 overflow-hidden rounded-[0.85rem] bg-white p-3.5 shadow-[12px_16px_42px_rgba(7,59,102,0.06),inset_1px_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(201,230,248,0.48)] md:grid-cols-[15rem_17rem_1fr] md:p-4 lg:gap-6">
                    <div className={`absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-gradient-to-b ${tone.path} opacity-30`} aria-hidden="true" />
                    <div className="relative min-h-[8.8rem] overflow-hidden rounded-[0.65rem] bg-[linear-gradient(180deg,#ffffff,#f7fbff)]">
                      <Image
                        alt={item.imageLabel}
                        className="object-contain"
                        fill
                        sizes="(min-width: 768px) 240px, 100vw"
                        src={item.imageSrc}
                      />
                    </div>

                    <div className="flex flex-col justify-center border-border-soft md:border-r md:pr-6">
                      <p className={`text-[0.58rem] font-extrabold uppercase tracking-[0.18em] ${tone.text}`}>
                        Chapter {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight text-primary-dark">{vertical.shortName}</h3>
                      <p className="mt-1 font-heading text-base font-semibold leading-5 text-primary-dark">{item.chapterTitle}</p>
                      <p className="mt-3 text-xs leading-5 text-text-secondary">{vertical.shortDescription}</p>
                      <Link
                        className={`mt-4 inline-flex items-center gap-2 text-xs font-bold ${tone.text} rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20`}
                        href={vertical.href}
                      >
                        Explore {vertical.shortName}
                        <ArrowIcon aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className={`text-[0.58rem] font-extrabold uppercase tracking-[0.18em] ${tone.text}`}>What this vertical delivers</p>
                      <ul className="mt-4 grid gap-2.5">
                        {item.deliverables.map((deliverable) => (
                          <li className="flex items-start gap-2.5 text-[0.72rem] font-semibold leading-4 text-primary-dark" key={deliverable}>
                            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tone.bg} ${tone.text}`}>
                              <CheckIcon aria-hidden="true" className="h-3 w-3" />
                            </span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
