"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";

const connectedBullets = [
  "Assessment directs the first care decision",
  "Footwear, wound care and restoration stay connected",
  "Follow-up keeps the care plan accountable",
  "Complex needs move into the right specialist vertical",
];

export function HomeConnectedCare() {
  return (
    <section className="bg-white py-10">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-[linear-gradient(135deg,#ffffff,#f8fcff)] p-4 shadow-[0_24px_70px_rgba(20,121,201,0.08)] xs:p-5 sm:rounded-[2rem] sm:p-8 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
        >
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <motion.div variants={staggerItem}>
              <h2 className="max-w-[24rem] text-2xl font-semibold leading-tight text-primary-dark xs:text-3xl sm:text-4xl">
                Connected care. Clearer outcomes.
              </h2>
              <p className="mt-4 max-w-[28rem] text-sm leading-7 text-text-secondary">
                One ecosystem links the right assessment, product, treatment and recovery support without making patients navigate disconnected paths.
              </p>
              <div className="mt-7 grid gap-3">
                {connectedBullets.map((item, index) => (
                  <div className="grid grid-cols-[auto_1fr] gap-3 rounded-[0.8rem] border border-[#d7ebfa] bg-white/78 px-3 py-3 text-sm font-semibold text-primary-dark shadow-[0_10px_24px_rgba(20,121,201,0.05)]" key={item}>
                    <span className="grid h-7 w-7 place-items-center rounded-[0.55rem] bg-soft-sky text-[0.7rem] font-bold text-primary">
                      0{index + 1}
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative -mx-3 min-h-[19rem] overflow-visible xs:min-h-[24rem] sm:min-h-[35rem] lg:-mr-14 lg:min-h-[36rem]" variants={staggerItem}>
              <div aria-hidden="true" className="absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#f8fcff,rgba(248,252,255,0))]" />
              <div aria-hidden="true" className="absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#f8fcff,rgba(248,252,255,0))]" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-24 bg-[linear-gradient(0deg,#f8fcff,rgba(248,252,255,0))]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,#f8fcff,rgba(248,252,255,0))]" />
              <Image
                alt="N-Stride connected care ecosystem"
                className="object-contain object-center drop-shadow-[0_24px_50px_rgba(20,121,201,0.08)]"
                fill
                priority={false}
                sizes="(min-width: 1024px) 840px, 100vw"
                src="/requested-assets/mainly.png"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
