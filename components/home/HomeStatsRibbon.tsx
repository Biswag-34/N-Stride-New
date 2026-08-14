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
    <section className="relative z-10 overflow-hidden bg-white py-6">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.1rem] border border-[#d7ebfa] bg-[linear-gradient(135deg,#073b66,#1479c9_54%,#eaf8ff)] p-3 shadow-[0_22px_58px_rgba(20,121,201,0.12)]"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_86%_80%,rgba(255,255,255,0.28),transparent_26%)]" />
          <div className="relative grid grid-cols-1 gap-3 xs:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  className="flex min-w-0 items-center gap-4 rounded-[0.9rem] bg-white px-4 py-4 shadow-[0_14px_34px_rgba(7,59,102,0.09)]"
                  key={stat.label}
                  variants={staggerItem}
                  custom={index}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[0.8rem] bg-soft-sky text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-2xl font-semibold text-primary-dark">{stat.value}</span>
                    <span className="block text-xs font-bold text-primary-dark/70">{stat.label}</span>
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
