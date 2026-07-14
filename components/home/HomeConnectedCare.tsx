"use client";

import { CheckCircle2, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionKicker } from "./HomeDesignPrimitives";

const connectedBullets = [
  "Seamless data sharing across care points",
  "Specialist collaboration for complex cases",
  "Evidence-based protocols & best practices",
  "Continuous support throughout the journey",
];

export function HomeConnectedCare() {
  return (
    <section className="bg-white py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-[radial-gradient(circle_at_72%_36%,rgba(221,241,255,0.72),transparent_30rem),linear-gradient(135deg,#ffffff,#f8fcff)] p-4 shadow-[0_24px_70px_rgba(20,121,201,0.08)] xs:p-5 sm:rounded-[2.25rem] sm:p-8 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
        >
          <div className="grid gap-9 lg:grid-cols-[0.48fr_1.52fr] lg:items-center">
            <motion.div variants={staggerItem}>
              <SectionKicker>One ecosystem. Connected care.</SectionKicker>
              <h2 className="mt-4 max-w-[27rem] text-2xl font-semibold leading-tight text-primary-dark xs:text-3xl sm:text-4xl">
                Designed for connection. Built for better outcomes.
              </h2>
              <p className="mt-4 max-w-[31rem] text-sm leading-7 text-text-secondary">
                N-Stride unifies people, technology, products and expertise across four specialist verticals. Our
                integrated approach ensures seamless coordination, smarter decisions and improved patient outcomes.
              </p>
              <div className="mt-7 grid gap-3">
                {connectedBullets.map((item) => (
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary-dark" key={item}>
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative min-h-[16rem] overflow-visible xs:min-h-[20rem] sm:min-h-[31rem] lg:min-h-[33rem]" variants={staggerItem}>
              <Image
                alt="N-Stride connected care ecosystem"
                className="object-contain"
                fill
                priority={false}
                sizes="(min-width: 1024px) 820px, 100vw"
                src="/home/connected-care-final.png"
              />
            </motion.div>
          </div>
          <motion.div
            className="mx-auto mt-3 flex max-w-[48rem] flex-col items-center justify-center gap-3 rounded-[0.7rem] border border-border-soft bg-white/82 px-4 py-3 text-center shadow-[0_18px_44px_rgba(20,121,201,0.07)] xs:flex-row xs:gap-4 xs:px-5"
            variants={staggerItem}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-soft">
              <UserRound aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="text-xs font-semibold leading-5 text-text-secondary">
              <span className="block font-bold text-primary-dark">At the center of everything is you.</span>
              Personalized care pathways. Coordinated teams. Better results.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
