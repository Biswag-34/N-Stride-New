"use client";

import { Activity, BadgeCheck, HandHeart, Network } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { value: "10K+", label: "Patients Supported", icon: HandHeart },
  { value: "50+", label: "Clinical Partners", icon: BadgeCheck },
  { value: "4", label: "Specialist Verticals", icon: Network },
  { value: "1", label: "Connected Mission", icon: Activity },
];

export function HomeStatsRibbon() {
  return (
    <section className="relative z-10 -mt-6 overflow-hidden bg-white pb-5">
      <Container>
        <motion.div
          className="relative px-0 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <svg className="pointer-events-none absolute inset-x-[-8%] top-[-1rem] h-[10.5rem] w-[116%]" viewBox="0 0 1800 210" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M-40 116 C190 44 398 87 610 94 C804 101 1020 106 1234 66 C1425 30 1616 22 1735 58 C1812 82 1818 148 1748 174 C1655 209 1430 194 1245 187 C996 177 752 177 508 185 C294 193 112 180 -40 130"
              fill="none"
              stroke="#BFDDF4"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
            <path
              d="M18 119 C250 69 430 105 632 111 C835 118 1044 122 1250 85 C1418 55 1580 51 1685 74"
              fill="none"
              stroke="#DDF1FF"
              strokeLinecap="round"
              strokeWidth="1.2"
            />
          </svg>
          <div className="relative mx-auto grid max-w-[70rem] grid-cols-2 gap-y-5 bg-white/60 backdrop-blur-sm lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  className="flex items-center justify-center gap-4 border-border-soft px-4 py-2 lg:border-r lg:last:border-r-0"
                  key={stat.label}
                  variants={staggerItem}
                  custom={index}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-soft-sky/85 text-primary shadow-[0_12px_24px_rgba(20,121,201,0.08)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-2xl font-semibold text-primary-dark">{stat.value}</span>
                    <span className="block text-xs font-semibold text-text-secondary">{stat.label}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
