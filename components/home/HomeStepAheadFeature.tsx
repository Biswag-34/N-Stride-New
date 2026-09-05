"use client";

import { ArrowRight, ClipboardCheck, HeartPulse, RefreshCw, UserRound } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { leadCaptureHref } from "@/data/leadCapture";
import { stepAheadProgramVideo } from "@/data/media";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { ImageDrop } from "./HomeDesignPrimitives";

const programItems = [
  { label: "Clinic setup", text: "Select the right diagnostic and care configuration.", icon: UserRound },
  { label: "Train the team", text: "Prepare staff with workflows, SOPs and practical onboarding.", icon: ClipboardCheck },
  { label: "Launch the service", text: "Go live with equipment, starter inventory and patient-flow guidance.", icon: HeartPulse },
  { label: "Review and grow", text: "Strengthen follow-up, visibility and service delivery with ongoing support.", icon: RefreshCw },
];

const programSignals = ["Diagnostic setup", "Training + SOPs", "Starter inventory", "Launch support"];

export function HomeStepAheadFeature() {
  return (
    <section className="bg-[linear-gradient(135deg,#f4fbff_0%,#effcf4_48%,#ffffff_100%)] py-6">
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
              <div className="relative h-full min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,rgba(7,59,102,0.12),rgba(7,59,102,0.68)),url('/home/step-ahead-walking-final.png')] bg-cover bg-center text-white sm:min-h-[22rem]">
                <iframe
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  src={stepAheadProgramVideo.src}
                  title={stepAheadProgramVideo.title}
                />
              </div>
            </ImageDrop>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={staggerItem}>
            <h2 className="max-w-[31rem] text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
              Launch diabetic foot care in your clinic.
            </h2>
            <p className="mt-4 max-w-[36rem] text-sm leading-7 text-text-secondary">
              Step-Ahead combines diagnostic equipment, team training, SOPs, starter inventory and launch guidance so clinics can build a structured diabetic foot-care service without designing every workflow from scratch.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
              {programItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="rounded-[0.85rem] border border-[#d4eedc] bg-white/78 px-3 py-3 text-center shadow-[0_10px_24px_rgba(67,145,83,0.08)] sm:border-[#d4eedc] sm:bg-white/45 sm:px-2 sm:py-3 sm:shadow-none" key={item.label}>
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f8eb] text-[#2f8a49] shadow-[0_12px_26px_rgba(47,138,73,0.11)] sm:h-14 sm:w-14">
                      <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <p className="mt-2 text-xs font-semibold leading-5 text-primary-dark sm:mt-3">{item.label}</p>
                    <p className="mt-1 hidden text-[0.68rem] font-medium leading-4 text-text-secondary md:block">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid gap-2 rounded-[0.8rem] bg-[#164f43] p-2.5 md:grid-cols-4">
              {programSignals.map((signal) => (
                <div className="rounded-[0.65rem] bg-white/12 px-3 py-2 text-center text-xs font-bold text-white ring-1 ring-white/18" key={signal}>
                  {signal}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-[0.65rem]" href="/step-ahead">
                Explore Step-Ahead
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.65rem]" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/", type: "step-ahead" })} variant="outline">
                Discuss a Clinic Partnership
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
