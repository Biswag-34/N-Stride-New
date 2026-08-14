"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionKicker } from "./HomeDesignPrimitives";

const pathways: Array<{
  href: string;
  label: string;
}> = [
  { label: "Foot Checkup", href: "/contact?type=foot-checkup" },
  { label: "Doctor Consultation", href: "/contact" },
  { label: "Custom Footwear", href: "/verticals/kinetics" },
  { label: "Orthotics & Insoles", href: "/verticals/bio-fit" },
  { label: "NPWT VAC Therapy", href: "/verticals/wound-care" },
  { label: "Wound Care Support", href: "/contact?type=wound-care" },
  { label: "Prosthetics", href: "/verticals/bio-fit" },
  { label: "Rehab & Mobility", href: "/verticals/bio-fit" },
];

export function HomePathwayRail() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <Container>
        <motion.div
          className="relative px-0 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <svg className="pointer-events-none absolute inset-x-0 top-0 h-full w-full" viewBox="0 0 1600 280" preserveAspectRatio="none" aria-hidden="true">
            <path d="M40 24 H1480 C1535 24 1570 60 1570 115 V190 C1570 240 1535 260 1480 260 H80" fill="none" stroke="#C9E6F8" strokeWidth="1.5" />
          </svg>
          <SectionKicker>Solutions that make a difference</SectionKicker>
          <h2 className="mt-3 text-3xl font-semibold text-primary-dark">Explore our care pathways</h2>
          <motion.div className="relative mt-5 hidden overflow-hidden md:block" variants={staggerItem}>
            <div className="relative mx-auto aspect-[2172/724] w-full max-w-[82rem]">
              <Image
                alt="Explore our care pathways: foot checkup, consultation, custom footwear, orthotics, NPWT VAC therapy, wound care, prosthetics and mobility"
                className="object-contain"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                src="/home/care-pathways-final.png"
              />
              <div className="absolute inset-x-[1.5%] bottom-[8%] top-[18%] grid grid-cols-8">
                {pathways.map((pathway) => (
                  <Link
                    aria-label={pathway.label}
                    className="rounded-[1.2rem] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    href={pathway.href}
                    key={pathway.label}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="mt-5 grid gap-3 md:hidden" variants={staggerItem}>
            {pathways.map((pathway, index) => (
              <Link
                className="flex min-h-12 items-center justify-between gap-3 rounded-[0.75rem] border border-[#d7ebfa] bg-white px-4 py-3 text-sm font-bold text-primary-dark shadow-[0_10px_24px_rgba(20,121,201,0.05)]"
                href={pathway.href}
                key={pathway.label}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[0.55rem] bg-soft-sky text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{pathway.label}</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
