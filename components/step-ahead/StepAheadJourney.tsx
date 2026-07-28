"use client";

import { motion } from "framer-motion";
import { TbCompass, TbPackage, TbRocket, TbSchool, TbTargetArrow, TbTrendingUp } from "react-icons/tb";

import { StepContainer, StepIconBubble, StepReveal, StepSection, stepEase } from "./StepAheadPrimitives";

const journey = [
  { title: "Discover & Plan", text: "Assess needs, define scope and build your business case.", icon: TbCompass },
  { title: "Configure & Equip", text: "Select the right solution package and get fully equipped.", icon: TbPackage },
  { title: "Train & Onboard", text: "Clinical training, SOPs and team readiness for confident launch.", icon: TbSchool },
  { title: "Launch & Deliver", text: "Go live with expert support and structured care pathways.", icon: TbRocket },
  { title: "Optimize & Grow", text: "Monitor outcomes, optimize workflows and grow referrals.", icon: TbTrendingUp },
  { title: "Scale Impact", text: "Expand services, strengthen brand and create lasting impact.", icon: TbTargetArrow },
];

export function StepAheadJourney() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-11">
      <StepContainer>
        <StepReveal className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="font-heading text-[clamp(1.85rem,2.8vw,2.75rem)] font-bold text-primary-dark">
              A guided pathway from setup to scale.
            </h2>
          </div>
        </StepReveal>

        <StepReveal>
          <div className="relative overflow-hidden rounded-[1.05rem] border border-[#c9e6f8]/80 bg-white/78 px-4 py-6 shadow-[0_18px_58px_rgba(20,121,201,0.07)] backdrop-blur lg:px-7 lg:py-8">
            <div aria-hidden="true" className="absolute left-9 top-8 bottom-8 w-px bg-[linear-gradient(180deg,transparent,#8acdf1,#80d8bf,#8acdf1,transparent)] lg:hidden" />
            <div aria-hidden="true" className="absolute left-[7%] right-[7%] top-[4.8rem] hidden h-px bg-[linear-gradient(90deg,transparent,#8acdf1,#80d8bf,#8acdf1,transparent)] lg:block" />
            <div className="relative grid gap-5 lg:grid-cols-6 lg:gap-2">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="relative flex items-center gap-4 pl-2 lg:flex-col lg:gap-3 lg:pl-0 lg:text-center"
                    key={step.title}
                    transition={{ delay: index * 0.04, duration: 0.5, ease: stepEase }}
                    whileHover={{ y: -6 }}
                  >
                    <StepIconBubble className="h-16 w-16 border-[#afd8f4] text-primary shadow-[0_16px_36px_rgba(20,121,201,0.12)]">
                      <Icon aria-hidden="true" className="h-8 w-8 stroke-[1.7]" />
                    </StepIconBubble>
                    <div className="max-w-[12rem]">
                      <p className="font-heading text-xs font-bold text-primary">0{index + 1}</p>
                      <h3 className="mt-1 font-heading text-base font-bold text-primary-dark">{step.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-text-secondary">{step.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="relative mt-6 grid gap-3 border-t border-[#d8edf8] pt-5 md:grid-cols-3">
              <div className="rounded-[0.75rem] bg-[#f7fcff] px-4 py-3">
                <p className="font-heading text-sm font-bold text-primary-dark">Setup clarity</p>
                <p className="mt-1 text-xs leading-5 text-text-secondary">space, package and launch plan aligned first</p>
              </div>
              <div className="rounded-[0.75rem] bg-[linear-gradient(135deg,#eaf8ff,#eefcf4)] px-4 py-3 text-center">
                <p className="font-heading text-sm font-bold text-primary-dark">Clinic enablement</p>
                <p className="mt-1 text-xs leading-5 text-text-secondary">training, equipment and SOPs move together</p>
              </div>
              <div className="rounded-[0.75rem] bg-[#f7fcff] px-4 py-3 md:text-right">
                <p className="font-heading text-sm font-bold text-primary-dark">Growth support</p>
                <p className="mt-1 text-xs leading-5 text-text-secondary">referrals, outcomes and review cadence</p>
              </div>
            </div>
          </div>
        </StepReveal>
      </StepContainer>
    </StepSection>
  );
}
