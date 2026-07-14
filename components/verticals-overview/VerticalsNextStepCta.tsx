"use client";

import { ArrowRight, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctas } from "@/data/ctas";
import { fadeUp } from "@/lib/motion";
import { OverviewKicker } from "./VerticalsOverviewPrimitives";

export function VerticalsNextStepCta() {
  return (
    <section className="bg-white pb-14 pt-6">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-[linear-gradient(135deg,rgba(221,241,255,0.86),rgba(255,255,255,0.94))] px-6 py-8 shadow-[0_20px_58px_rgba(20,121,201,0.08)] sm:px-9 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-95 lg:block" aria-hidden="true">
            <Image
              alt=""
              className="object-cover object-right"
              fill
              sizes="520px"
              src="/verticals-overview/cta-curve.png"
            />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border-soft bg-white text-primary shadow-[0_18px_48px_rgba(20,121,201,0.14)]">
              <HeartHandshake aria-hidden="true" className="h-11 w-11" strokeWidth={1.55} />
            </div>
            <div>
              <OverviewKicker>Your next step</OverviewKicker>
              <h2 className="mt-3 max-w-[45rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-[2rem]">
                The right care starts with the right guidance.
              </h2>
              <p className="mt-3 max-w-[48rem] text-sm leading-7 text-text-secondary">
                Let our experts help you find the right vertical, or the right combination, for your needs.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-[0.55rem]" href={ctas.primary.href}>
                  Book Consultation
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.55rem]" href={ctas.stepAhead.href} variant="outline">
                  Partner with Step-Ahead
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
