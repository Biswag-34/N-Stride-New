"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ClipboardList, Headphones, MonitorCog, PackageCheck, Settings2 } from "lucide-react";

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
        <StepReveal className="mx-auto max-w-[760px] text-center">
          <h2 className="font-heading text-[clamp(1.85rem,2.8vw,2.75rem)] font-bold leading-tight text-primary-dark">
            Choose the program level that fits your clinic.
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            Every plan follows the same launch process, then scales by equipment depth, training intensity and support duration.
          </p>
        </StepReveal>

        <StepReveal className="mt-7" delay={0.06}>
          <div className="relative overflow-hidden rounded-[1rem] border border-[#c9e6f8]/80 bg-white/76 p-4 shadow-[0_18px_58px_rgba(20,121,201,0.07)] backdrop-blur lg:p-5">
            <div aria-hidden="true" className="absolute left-8 right-8 top-[3.4rem] hidden h-px bg-[linear-gradient(90deg,transparent,#8acdf1,#80d8bf,#8acdf1,transparent)] lg:block" />
            <div className="relative grid gap-4 md:grid-cols-5">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="flex items-center gap-3 rounded-[0.85rem] bg-[#f8fcff] p-3 md:block md:text-center"
                    key={item.title}
                    transition={{ delay: index * 0.04, duration: 0.45, ease: stepEase }}
                    whileHover={{ y: -4 }}
                  >
                    <StepIconBubble className="h-14 w-14 shadow-[0_12px_28px_rgba(20,121,201,0.1)] md:mx-auto" size="md">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </StepIconBubble>
                    <div className="md:mt-3">
                      <p className="font-heading text-sm font-bold text-primary-dark">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-text-secondary">{item.text}</p>
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
                    ? "group relative h-full overflow-hidden rounded-[1rem] border border-[#80d98f] bg-[linear-gradient(135deg,#ffffff,#f2fff5)] p-6 shadow-[0_24px_70px_rgba(92,184,92,0.15)]"
                    : "group relative h-full overflow-hidden rounded-[1rem] border border-[#c9e6f8] bg-white p-6 shadow-[0_18px_54px_rgba(20,121,201,0.08)]"
                }
                transition={{ duration: 0.45, ease: stepEase }}
                whileHover={{ scale: 1.025, y: -7 }}
              >
                <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#dff4ff]/70 blur-[42px] transition group-hover:scale-125" />
                <div className="relative grid gap-5 sm:grid-cols-[0.42fr_0.58fr]">
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary-dark">{program.name}</p>
                    <p className={program.featured ? "mt-4 font-heading text-[3rem] font-bold leading-none text-[#319147]" : "mt-4 font-heading text-[3rem] font-bold leading-none text-primary"}>
                      {program.price}
                    </p>
                    <p className="mt-4 text-sm font-semibold leading-6 text-text-secondary">{program.line}</p>
                    <Button className="mt-6 rounded-[0.5rem]" href="/contact?type=step-ahead">
                      Enquire Now
                    </Button>
                  </div>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li className="flex gap-2 text-sm leading-6 text-text-secondary" key={feature}>
                        <CheckCircle2 aria-hidden="true" className={program.featured ? "mt-1 h-4 w-4 shrink-0 text-[#45a858]" : "mt-1 h-4 w-4 shrink-0 text-primary"} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StepReveal>
          ))}
        </div>
      </StepContainer>
    </StepSection>
  );
}
