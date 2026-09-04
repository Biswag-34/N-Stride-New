"use client";

import { ArrowRight, ClipboardCheck, HeartPulse, Play, RefreshCw, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { leadCaptureHref } from "@/data/leadCapture";
import { stepAheadProgram } from "@/data/stepAhead";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { ImageDrop } from "./HomeDesignPrimitives";

const programItems = [
  { label: "Risk screening & assessment", icon: UserRound },
  { label: "Personalized care plan", icon: ClipboardCheck },
  { label: "Treatment & intervention", icon: HeartPulse },
  { label: "Follow-up & rehabilitation", icon: RefreshCw },
];

export function HomeStepAheadFeature() {
  return (
    <section className="bg-white py-6">
      <Container>
        <motion.div
          className="mx-auto grid max-w-[62rem] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div className="order-2 lg:order-1" variants={staggerItem}>
            <ImageDrop
              className="min-h-[18rem] shadow-[0_22px_55px_rgba(16,42,67,0.12)] sm:min-h-[22rem]"
              label=""
            >
              <div className="relative flex h-full min-h-[18rem] items-end overflow-hidden p-5 text-white sm:min-h-[22rem] sm:p-7">
                <Image
                  alt="Patient walking in supportive footwear for the Step-Ahead program"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  src="/home/step-ahead-walking-final.png"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,102,0.05),rgba(7,59,102,0.70))]" />
                <div className="relative z-10">
                  <p className="font-heading text-2xl font-semibold">Step-Ahead Program</p>
                  <p className="mt-1 max-w-[15rem] text-sm leading-6 text-white/88">Clinical care pathway and support</p>
                </div>
                <span className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-white/40 bg-primary text-white shadow-[0_18px_38px_rgba(7,59,102,0.25)]">
                  <Play aria-hidden="true" className="ml-0.5 h-6 w-6 fill-current" />
                </span>
              </div>
            </ImageDrop>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={staggerItem}>
            <h2 className="max-w-[31rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
              Step-Ahead: Structured care. Stronger outcomes.
            </h2>
            <p className="mt-4 max-w-[36rem] text-sm leading-7 text-text-secondary">
              {stepAheadProgram.overview}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
              {programItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="rounded-[0.85rem] border border-border-soft bg-white px-3 py-3 text-center shadow-[0_10px_24px_rgba(20,121,201,0.06)] sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none" key={item.label}>
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-soft-sky text-primary shadow-soft sm:h-14 sm:w-14">
                      <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <p className="mt-2 text-xs font-semibold leading-5 text-primary-dark sm:mt-3">{item.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-[0.65rem]" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/", type: "step-ahead" })}>
                Book Consultation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.65rem]" href="/step-ahead" variant="outline">
                View Program Details
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
