"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { verticals } from "@/data/verticals";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { homeIconMap, SectionKicker, toneStyles, type HomeTone } from "./HomeDesignPrimitives";

const verticalTone: Record<string, HomeTone> = {
  kinetics: "blue",
  insight: "aqua",
  "wound-care": "amber",
  "bio-fit": "indigo",
};

const verticalIcon: Record<string, keyof typeof homeIconMap> = {
  kinetics: "footwear",
  insight: "stethoscope",
  "wound-care": "bandage",
  "bio-fit": "biofit",
};

const verticalBg: Record<string, string> = {
  kinetics: "bg-[linear-gradient(135deg,rgba(221,241,255,0.95),rgba(255,255,255,0.88))]",
  insight: "bg-[linear-gradient(135deg,rgba(38,182,200,0.12),rgba(255,255,255,0.9))]",
  "wound-care": "bg-[linear-gradient(135deg,rgba(245,166,35,0.13),rgba(255,255,255,0.9))]",
  "bio-fit": "bg-[linear-gradient(135deg,rgba(90,103,216,0.12),rgba(255,255,255,0.9))]",
};

export function HomeVerticalCards() {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="mx-auto max-w-[78rem]">
          <SectionKicker>Our four specialist verticals</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">Expertise across every need</h2>
        </div>
        <motion.div
          className="mx-auto mt-7 grid max-w-[78rem] gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          {verticals.map((vertical) => {
            const tone = toneStyles[verticalTone[vertical.id] ?? "blue"];
            const Icon = homeIconMap[verticalIcon[vertical.id] ?? "activity"];

            return (
              <motion.article
                className={`rounded-[0.9rem] border p-6 shadow-[0_20px_46px_rgba(20,121,201,0.07)] transition hover:-translate-y-1 hover:shadow-card ${tone.border} ${verticalBg[vertical.id]}`}
                key={vertical.id}
                variants={staggerItem}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${tone.iconBg} ${tone.text}`}>
                  <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">{vertical.shortName}</h3>
                <p className="mt-3 min-h-[4.15rem] text-sm leading-6 text-text-secondary">{vertical.description}</p>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={vertical.href}>
                  Explore {vertical.shortName}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
