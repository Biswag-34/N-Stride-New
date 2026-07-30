"use client";

import { ArrowRight, Boxes, ClipboardCheck, Footprints, GraduationCap, Repeat2, Settings2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";

const fitRxSteps = [
  { label: "Assess", text: "Screen needs and support requirements", icon: ClipboardCheck },
  { label: "Configure", text: "Select the right insole category", icon: Settings2 },
  { label: "Fit", text: "Pair with compatible N-Stride footwear", icon: Footprints },
];

const fitRxSystem = [
  { label: "Clinical insole kit", icon: Boxes },
  { label: "Partner training", icon: GraduationCap },
  { label: "Recurring fulfilment", icon: Repeat2 },
];

export function HomeFitRxFeature() {
  return (
    <section className="bg-white py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-[#c9e6f8] bg-[linear-gradient(135deg,#f8fcff,#ffffff_52%,#eefbf7)] p-4 shadow-[0_24px_70px_rgba(20,121,201,0.08)] sm:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <div aria-hidden="true" className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#dff4ff]/72 blur-3xl" />
          <div aria-hidden="true" className="absolute -left-32 bottom-0 h-72 w-96 rounded-full bg-[#eefcf4]/72 blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[1rem] bg-[#073b66] shadow-[0_22px_55px_rgba(7,59,102,0.14)]" variants={staggerItem}>
              <Image
                alt="NStride FitRx clinical footwear customization demo"
                className="object-cover object-center opacity-88"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                src="/home/resource-footwear-final.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,102,0.06),rgba(7,59,102,0.78))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[0.95rem] border border-white/24 bg-white/14 p-5 text-white shadow-[0_16px_38px_rgba(7,59,102,0.18)] backdrop-blur-md">
                <p className="font-heading text-2xl font-semibold">NStride FitRx</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/86">Assess. Configure. Fit.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <h2 className="max-w-[35rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                FitRx: clinical footwear customization for partners.
              </h2>
              <p className="mt-4 max-w-[38rem] text-sm leading-7 text-text-secondary">
                A partner-enabled system that combines a professional insole kit, compatible medical-grade footwear and a guided assessment workflow.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {fitRxSteps.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="rounded-[0.9rem] border border-[#d7ebfa] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(20,121,201,0.06)]" key={item.label}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-soft-sky text-primary">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-heading text-sm font-bold text-primary-dark">{item.label}</p>
                      <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 rounded-[0.95rem] bg-[#073b66] p-3 sm:grid-cols-3">
                {fitRxSystem.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-3 rounded-[0.75rem] bg-white/10 px-3 py-3 text-xs font-bold text-white ring-1 ring-white/16" key={item.label}>
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#8edbd0]" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-[0.65rem]" href="/contact?type=fitrx">
                  Bring FitRx to Your Business
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.65rem] bg-white/86" href="/contact?type=partner" variant="outline">
                  Talk to Partnerships
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
