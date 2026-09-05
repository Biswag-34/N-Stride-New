"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Building2, CalendarClock, ClipboardCheck, MapPin, MessageCircle, PackageCheck, UserRoundCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { leadCaptureHref } from "@/data/leadCapture";

import { StepContainer, StepReveal, StepSection, stepEase } from "./StepAheadPrimitives";

const enquirySignals = [
  { title: "Institution type", text: "Clinic, hospital, rehab, pharmacy or distributor.", icon: Building2 },
  { title: "Program interest", text: "Step-Ahead, FitRx, franchise or help choosing.", icon: ClipboardCheck },
  { title: "Launch goal", text: "Foot-care service, footwear-insole service or training.", icon: PackageCheck },
  { title: "Scale signal", text: "Patient volume, city, state and number of locations.", icon: BarChart3 },
  { title: "Callback window", text: "Preferred time reaches the partnerships team.", icon: CalendarClock },
];

const launchPath = [
  { label: "Scope", icon: UserRoundCheck },
  { label: "Setup", icon: PackageCheck },
  { label: "Train", icon: ClipboardCheck },
  { label: "Review", icon: MessageCircle },
];

export function StepAheadPartnershipFlow() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#f5fbff,#ffffff)] px-4 py-8 md:px-0 md:py-14">
      <StepContainer className="px-0 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-5 lg:grid-cols-[0.4fr_0.6fr] lg:items-stretch">
          <StepReveal>
            <div className="relative h-full overflow-hidden rounded-[1.15rem] bg-[#061f3b] p-4 text-white shadow-[0_24px_70px_rgba(6,31,59,0.18)] ring-1 ring-[#bfe5f7] md:p-6">
              <div className="absolute inset-0 opacity-[0.18]">
                <Image
                  alt="Step-Ahead clinic partnership visual"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  src="/requested-assets/stepahead-hero.png"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,31,59,0.96),rgba(6,31,59,0.7))]" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[0.8rem] bg-white text-primary shadow-[0_14px_32px_rgba(0,0,0,0.18)]">
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                </span>
                <h2 className="mt-5 max-w-[31rem] font-heading text-[1.65rem] font-extrabold leading-tight md:text-3xl">
                  From enquiry to launch, the partnership path stays organized.
                </h2>
                <p className="mt-3 max-w-[34rem] text-sm leading-6 text-white/72">
                  Step-Ahead enquiries capture the real setup signals first, so the follow-up can focus on fit, scope and the next clinic move.
                </p>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {launchPath.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        className="rounded-[0.8rem] bg-white/[0.09] p-2.5 text-center ring-1 ring-white/12"
                        key={item.label}
                        transition={{ delay: index * 0.05, duration: 0.42, ease: stepEase }}
                        whileHover={{ y: -4 }}
                      >
                        <Icon aria-hidden="true" className="mx-auto h-4 w-4 text-[#8edbd0]" />
                        <p className="mt-2 font-heading text-[0.68rem] font-extrabold leading-tight text-white">{item.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </StepReveal>

          <StepReveal delay={0.08}>
            <div className="grid h-full gap-3 rounded-[1.15rem] border border-[#d7ebfa] bg-white p-3 shadow-[0_18px_54px_rgba(20,121,201,0.07)] sm:grid-cols-2 lg:grid-cols-5">
              {enquirySignals.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="relative min-h-[8.25rem] overflow-hidden rounded-[0.95rem] bg-[#fbfdff] p-3 ring-1 ring-[#d8edf8]"
                    key={item.title}
                    transition={{ delay: 0.04 * index, duration: 0.45, ease: stepEase }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="absolute right-2 top-2 font-heading text-2xl font-extrabold text-[#d7ebfa]">0{index + 1}</span>
                    <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                    <p className="mt-5 font-heading text-sm font-extrabold leading-tight text-primary-dark">{item.title}</p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                  </motion.div>
                );
              })}
              <div className="rounded-[0.95rem] bg-[#eefbf7] p-3 ring-1 ring-[#c9eee8] sm:col-span-2 lg:col-span-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#009b92]" />
                    <p className="text-xs font-semibold leading-5 text-[#31556a]">
                      Returning institutional leads can be reconnected without asking for the same details again.
                    </p>
                  </div>
                  <Button className="w-full rounded-[0.6rem] sm:w-auto" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })}>
                    Start Partnership Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
