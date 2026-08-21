"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardList, Headphones, MonitorCog, PackageCheck, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { StepContainer, StepIconBubble, StepReveal, StepSection, stepEase } from "./StepAheadPrimitives";

const process = [
  { title: "Technology", text: "diagnostic and foot-care setup", icon: MonitorCog },
  { title: "Training", text: "clinical workflow and team readiness", icon: ClipboardList },
  { title: "Inventory", text: "starter kits, tools and consumables", icon: PackageCheck },
  { title: "Operations", text: "SOPs, patient flow and launch support", icon: Settings2 },
  { title: "Support", text: "remote guidance and review cadence", icon: Headphones },
];

const programs = [
  {
    name: "Step-Ahead Essential",
    price: "Rs. 3.5L",
    line: "For clinics launching a focused diabetic foot-care service.",
    features: [
      "Essential assessment and care setup",
      "Core instruments, kits and starter inventory",
      "Team orientation and launch SOPs",
      "Clinic marketing starter support",
      "3 months remote launch guidance",
    ],
  },
  {
    name: "Step-Ahead Advanced",
    price: "Rs. 5L",
    line: "For clinics that want stronger diagnostics and growth support.",
    featured: true,
    features: [
      "Expanded diagnostic and care setup",
      "Enhanced instruments, kits and consumables",
      "Advanced team training and care workflows",
      "Patient education and outreach toolkit",
      "6 months remote support with review sessions",
    ],
  },
];

export function StepAheadPackages() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f5fbff)] py-14" id="packages">
      <StepContainer>
        <StepReveal className="grid gap-5 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">Package design</p>
            <h2 className="mt-3 max-w-[34rem] font-heading text-[clamp(1.85rem,2.8vw,2.75rem)] font-bold leading-tight text-primary-dark">
              Pick a clinic launch engine, not a loose bundle.
            </h2>
          </div>
          <p className="max-w-[43rem] text-sm leading-7 text-text-secondary lg:justify-self-end">
            Each level is built around the same operating spine, then tuned by depth of equipment, training and support.
          </p>
        </StepReveal>

        <StepReveal className="mt-7" delay={0.06}>
          <div className="overflow-hidden rounded-[1.15rem] bg-[#061f3b] text-white shadow-[0_26px_78px_rgba(6,31,59,0.2)] ring-1 ring-[#bfe5f7] lg:grid lg:grid-cols-[0.28fr_0.72fr]">
            <div className="border-b border-white/12 p-5 lg:border-b-0 lg:border-r lg:p-6">
              <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#8edbd0]">Launch spine</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight">One setup logic across every package.</h3>
              <p className="mt-3 text-xs font-semibold leading-5 text-white/62">
                Step-Ahead starts with the clinic workflow first, then wraps tools, training and support around it.
              </p>
            </div>
            <div className="grid gap-2.5 p-4 sm:grid-cols-2 lg:grid-cols-5 lg:p-5">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="relative overflow-hidden rounded-[0.9rem] bg-white/[0.08] p-3 ring-1 ring-white/10 md:text-center"
                    key={item.title}
                    transition={{ delay: index * 0.04, duration: 0.45, ease: stepEase }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="absolute right-2 top-2 font-heading text-xl font-extrabold text-white/10">0{index + 1}</span>
                    <StepIconBubble className="h-14 w-14 border-white/20 bg-white text-primary shadow-[0_12px_28px_rgba(0,0,0,0.15)] md:mx-auto" size="md">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </StepIconBubble>
                    <div className="md:mt-3">
                      <p className="font-heading text-sm font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-white/58">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </StepReveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {programs.map((program, index) => (
            <StepReveal delay={0.08 + index * 0.06} key={program.name}>
              <motion.div
                className={
                  program.featured
                    ? "group relative h-full overflow-hidden rounded-[1.15rem] border border-[#80d98f] bg-[linear-gradient(135deg,#ffffff,#f2fff5)] p-5 shadow-[0_24px_70px_rgba(92,184,92,0.15)] md:p-6"
                    : "group relative h-full overflow-hidden rounded-[1.15rem] border border-[#c9e6f8] bg-white p-5 shadow-[0_18px_54px_rgba(20,121,201,0.08)] md:p-6"
                }
                transition={{ duration: 0.45, ease: stepEase }}
                whileHover={{ scale: 1.025, y: -7 }}
              >
                <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#dff4ff]/70 blur-[42px] transition group-hover:scale-125" />
                <div className="relative grid gap-5 md:grid-cols-[0.38fr_0.62fr]">
                  <div className={program.featured ? "rounded-[0.95rem] bg-[#0f5132] p-4 text-white" : "rounded-[0.95rem] bg-[#073b66] p-4 text-white"}>
                    <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-white/64">{program.featured ? "Advanced setup" : "Essential setup"}</p>
                    <p className="mt-3 font-heading text-2xl font-bold leading-tight">{program.name}</p>
                    <p className="mt-4 font-heading text-[3rem] font-bold leading-none">{program.price}</p>
                    <p className="mt-4 text-sm font-semibold leading-6 text-white/75">{program.line}</p>
                    <Button className="mt-6 w-full justify-center rounded-[0.55rem] bg-white text-primary hover:bg-[#eef8ff]" href="/contact?type=step-ahead">
                      Enquire Now
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid content-start gap-3">
                    <p className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Included modules</p>
                    <div className="grid gap-2">
                      {program.features.map((feature) => (
                        <div className="grid grid-cols-[auto_1fr] items-start gap-2 rounded-[0.75rem] bg-white/78 px-3 py-2 text-sm font-semibold leading-5 text-text-secondary ring-1 ring-[#d8edf8]" key={feature}>
                          <CheckCircle2 aria-hidden="true" className={program.featured ? "mt-0.5 h-4 w-4 shrink-0 text-[#45a858]" : "mt-0.5 h-4 w-4 shrink-0 text-primary"} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StepReveal>
          ))}
        </div>
      </StepContainer>
    </StepSection>
  );
}
