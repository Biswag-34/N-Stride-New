"use client";

import { Activity, BrainCircuit, Camera, Footprints, MonitorCheck } from "lucide-react";
import { motion } from "framer-motion";

import {
  InsightAsset,
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
  insightEase,
} from "@/components/insight/InsightPrimitives";

const machines = [
  {
    icon: Footprints,
    title: "3D Foot Scan Platform",
    text: "Captures foot shape, posture and fit references for custom recommendations.",
    src: "/requested-assets/podograph.png",
    className: "lg:col-span-5",
  },
  {
    icon: Activity,
    title: "Dynamic Pressure Mapper",
    text: "Shows load concentration and pressure shifts during standing and movement.",
    src: "/insight/pressure-map-card.png",
    className: "lg:col-span-3",
  },
  {
    icon: Camera,
    title: "Wound Assessment Capture",
    text: "Documents wound visuals and healing indicators for follow-up decisions.",
    src: "/requested-assets/vasosense.png",
    className: "lg:col-span-3",
  },
  {
    icon: MonitorCheck,
    title: "Insight Clinical Console",
    text: "Brings scan, risk and recommendation views into one care dashboard.",
    src: "/insight/insight-dashboard.png",
    className: "lg:col-span-5",
  },
];

export function InsightConnectedEcosystem() {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-14">
      <InsightWaveImage className="inset-x-0 top-16 h-64 w-full opacity-72" src="/insight/connected-flow-bg.png" />
      <InsightContainer>
        <InsightReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-[2.35rem]">One platform. Complete care continuity.</h2>
        </InsightReveal>
        <InsightReveal className="relative mt-9 overflow-hidden rounded-[1.2rem] border border-[#c9e6f8]/70 bg-white/58 p-4 shadow-[0_26px_76px_rgba(20,121,201,0.08)] backdrop-blur sm:p-5 lg:p-6" delay={0.08}>
          <div aria-hidden="true" className="absolute left-8 right-8 top-1/2 hidden h-px bg-[linear-gradient(90deg,transparent,#8fcff4,#72d7c0,#8fcff4,transparent)] lg:block" />
          <div aria-hidden="true" className="absolute bottom-8 left-1/2 h-28 w-[72%] -translate-x-1/2 rounded-full bg-[#dff4ff]/74 blur-[46px]" />
          <div className="relative grid gap-4 lg:grid-cols-8">
            {machines.map((machine, index) => {
              const Icon = machine.icon;
              return (
                <motion.div
                  className={`group relative isolate min-h-[20rem] overflow-hidden rounded-[1rem] border border-[#d8ebf8]/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,249,255,0.64))] p-5 shadow-[0_16px_44px_rgba(20,121,201,0.08)] ${machine.className}`}
                  key={machine.title}
                  transition={{ delay: index * 0.05, duration: 0.6, ease: insightEase }}
                  whileHover={{ y: -6 }}
                >
                  <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#dff4ff]/70 blur-[34px] transition group-hover:scale-110" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-[0.7rem] font-bold text-primary">0{index + 1}</p>
                      <h3 className="mt-2 max-w-[16rem] font-heading text-xl font-bold leading-tight text-primary-dark">{machine.title}</h3>
                      <p className="mt-3 max-w-[19rem] text-sm font-semibold leading-6 text-text-secondary">{machine.text}</p>
                    </div>
                    <InsightIconBubble className="h-14 w-14 bg-white/86 shadow-none" color={index % 2 ? "#26b6c8" : "#1479c9"} size="lg">
                      <Icon className="h-7 w-7" />
                  </InsightIconBubble>
                  </div>
                  <div className="relative z-10 mt-4 min-h-[11rem]">
                    <InsightAsset
                      alt={machine.title}
                      className="absolute inset-x-0 bottom-0 min-h-[12rem]"
                      imageClassName="object-contain"
                      sizes="(max-width: 1024px) 92vw, 42vw"
                      src={machine.src}
                    />
                  </div>
                </motion.div>
              );
            })}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 right-8 hidden h-20 w-20 items-center justify-center rounded-full border border-[#c9e6f8] bg-white/70 text-primary shadow-[0_16px_38px_rgba(20,121,201,0.1)] lg:flex"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              <BrainCircuit className="h-8 w-8" />
            </motion.div>
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
