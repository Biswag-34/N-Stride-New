"use client";

import { ArrowRight, Boxes, ClipboardCheck, Footprints, GraduationCap, Repeat2, Settings2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { leadCaptureHref } from "@/data/leadCapture";
import { staggerContainer, staggerItem } from "@/lib/motion";

const fitRxSteps = [
  { label: "Assess", text: "Identify foot profile, pressure priority, activity and support needs.", icon: ClipboardCheck },
  { label: "Configure", text: "Select the appropriate wedge, arch, metatarsal, heel-raise or off-loading option.", icon: Settings2 },
  { label: "Fit", text: "Pair the selected insole with compatible N-Stride footwear and check comfort.", icon: Footprints },
];

const fitRxSystem = [
  { label: "Configurable insole kit", icon: Boxes },
  { label: "Guided team onboarding", icon: GraduationCap },
  { label: "Repeat supply support", icon: Repeat2 },
];

export function HomeFitRxFeature() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffffff_0%,#eefcff_45%,#eefbf7_100%)] py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-[#bfe9ed] bg-[linear-gradient(135deg,#f8feff,#ffffff_52%,#eefbf7)] p-4 shadow-[0_24px_70px_rgba(38,182,200,0.09)] sm:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <div aria-hidden="true" className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#dff4ff]/72 blur-3xl" />
          <div aria-hidden="true" className="absolute -left-32 bottom-0 h-72 w-96 rounded-full bg-[#eefcf4]/72 blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <motion.div className="relative order-2 min-h-[18rem] overflow-hidden rounded-[1rem] bg-[#eef7fb] shadow-[0_22px_55px_rgba(7,59,102,0.14)] sm:min-h-[22rem] md:aspect-[16/11] md:min-h-0 md:bg-white lg:order-1 lg:aspect-[7/6] xl:aspect-[16/11]" variants={staggerItem}>
              <Image
                alt="N-Stride FitRx clinical footwear customization demo"
                className="object-contain object-center md:p-3 lg:p-4"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                src="/home/fitrx-insoles-clinic.png"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(7,59,102,0.62))]" />
              <div className="absolute bottom-6 left-6 right-6 text-white [text-shadow:0_3px_18px_rgba(7,59,102,0.72)]">
                <p className="font-heading text-4xl font-extrabold leading-none sm:text-5xl">N-Stride FitRx</p>
                <p className="mt-3 text-base font-extrabold leading-6 sm:text-lg">Assess. Configure. Fit.</p>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={staggerItem}>
              <h2 className="max-w-[35rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                A guided insole and footwear service for clinics.
              </h2>
              <p className="mt-4 max-w-[38rem] text-sm leading-7 text-text-secondary">
                FitRx helps partners assess fit and pressure-support needs, select the appropriate N-Stride insole configuration, pair it with compatible therapeutic footwear and manage repeat fulfilment through one practical workflow.
              </p>
              <div className="mt-5 grid gap-2 md:mt-7 md:grid-cols-3 md:gap-3">
                {fitRxSteps.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-3 rounded-[0.75rem] border border-[#cfeeed] bg-white/86 px-3 py-2.5 shadow-[0_12px_30px_rgba(38,182,200,0.07)] md:block md:rounded-[0.9rem] md:px-4 md:py-4" key={item.label}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.6rem] bg-[#e7fbf8] text-[#009b92] md:h-10 md:w-10 md:rounded-[0.7rem]">
                        <Icon aria-hidden="true" className="h-4 w-4 md:h-5 md:w-5" />
                      </span>
                      <p className="font-heading text-sm font-bold text-primary-dark md:mt-4">{item.label}</p>
                      <p className="mt-2 hidden text-xs font-semibold leading-5 text-text-secondary md:block">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 grid gap-2 rounded-[0.8rem] bg-[#075d61] p-2.5 md:mt-5 md:grid-cols-3 md:gap-3 md:rounded-[0.95rem] md:p-3">
                {fitRxSystem.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center gap-2.5 rounded-[0.65rem] bg-white/10 px-3 py-2.5 text-xs font-bold text-white ring-1 ring-white/16 md:gap-3 md:rounded-[0.75rem] md:py-3" key={item.label}>
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#8edbd0]" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <Button className="w-full rounded-[0.65rem] xs:w-auto" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/", type: "fitrx" })}>
                  Bring FitRx to Your Clinic
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="w-full rounded-[0.65rem] bg-white/86 xs:w-auto" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/", type: "fitrx" })} variant="outline">
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
