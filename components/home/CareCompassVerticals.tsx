"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { verticals, type Vertical } from "@/data/verticals";
import { cn } from "@/lib/cn";

const themeStyles: Record<Vertical["theme"], { accent: string; bg: string; border: string; text: string }> = {
  kinetics: {
    accent: "#1479C9",
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
  insight: {
    accent: "#26B6C8",
    bg: "bg-accent-aqua/10",
    border: "border-accent-aqua/30",
    text: "text-accent-aqua",
  },
  woundCare: {
    accent: "#F5A623",
    bg: "bg-accent-amber/10",
    border: "border-accent-amber/35",
    text: "text-[#9A620D]",
  },
  bioFit: {
    accent: "#5A67D8",
    bg: "bg-accent-indigo/10",
    border: "border-accent-indigo/30",
    text: "text-accent-indigo",
  },
};

const desktopPlacement: Record<string, string> = {
  insight: "left-[calc(50%-10.5rem)] top-7 w-[21rem]",
  kinetics: "right-8 top-[calc(50%-7.5rem)] w-[21rem]",
  "bio-fit": "bottom-7 left-[calc(50%-10.5rem)] w-[21rem]",
  "wound-care": "left-8 top-[calc(50%-7.5rem)] w-[21rem]",
};

const directionReveal: Record<string, { x?: number; y?: number }> = {
  insight: { y: -18 },
  kinetics: { x: 18 },
  "bio-fit": { y: 18 },
  "wound-care": { x: -18 },
};

function getServicePreview(vertical: Vertical, expanded: boolean) {
  return vertical.services.slice(0, expanded ? 5 : 2);
}

export function CareCompassVerticals() {
  const [activeId, setActiveId] = useState("");
  const [openId, setOpenId] = useState(verticals[0]?.id ?? "");
  const activeVertical = verticals.find((vertical) => vertical.id === activeId);

  return (
    <Section id="verticals" className="overflow-hidden py-16 sm:py-20 lg:py-24" variant="soft">
      <Container>
        <SectionHeading
          align="center"
          description="Four connected verticals work together as one care ecosystem, so assessment, protection, wound care and mobility support can point in the same direction."
          eyebrow="Care compass"
          title="N-Stride Care Compass"
        />

        <div className="relative mx-auto mt-12 hidden min-h-[42rem] max-w-[74rem] overflow-hidden rounded-[2.25rem] border border-border-soft bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,250,255,0.9))] shadow-soft lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38,182,200,0.12),transparent_22rem)]" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1184 672" aria-hidden="true">
            <path d="M592 336 L592 176 M592 336 L900 336 M592 336 L592 496 M592 336 L284 336" fill="none" stroke="#C9E6F8" strokeLinecap="round" strokeWidth="16" />
            {verticals.map((vertical) => {
              const paths: Record<string, string> = {
                insight: "M592 336 L592 176",
                kinetics: "M592 336 L900 336",
                "bio-fit": "M592 336 L592 496",
                "wound-care": "M592 336 L284 336",
              };

              return (
                <motion.path
                  d={paths[vertical.id]}
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  key={vertical.id}
                  stroke={themeStyles[vertical.theme].accent}
                  strokeLinecap="round"
                  strokeWidth={activeId === vertical.id ? 4 : 2}
                  transition={{ duration: 0.55 }}
                  viewport={{ once: true }}
                  whileInView={{ pathLength: 1, opacity: activeId === vertical.id ? 0.78 : 0.26 }}
                />
              );
            })}
          </svg>

          <div className="absolute left-[calc(50%-6rem)] top-[calc(50%-6rem)] z-20 h-48 w-48">
            <motion.div
              className="flex h-48 w-48 flex-col items-center justify-center rounded-full border border-primary/20 bg-white p-5 text-center shadow-soft"
              initial={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, amount: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-heading text-base font-semibold text-primary-dark">N-Stride Care Ecosystem</p>
              <p className="mt-2 text-[0.7rem] leading-4 text-text-secondary">
                {activeVertical?.shortDescription ??
                  "One connected pathway for diagnosis, protection, treatment and restoration."}
              </p>
            </motion.div>
          </div>

          {verticals.map((vertical, index) => {
            const active = activeId === vertical.id;
            const style = themeStyles[vertical.theme];

            return (
              <article
                className={cn(
                  "absolute z-30 rounded-[1.35rem] border bg-white/94 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-card focus-within:-translate-y-1 focus-within:shadow-card",
                  desktopPlacement[vertical.id],
                  active ? style.border : "border-border-soft",
                )}
                key={vertical.id}
                onFocus={() => setActiveId(vertical.id)}
                onMouseEnter={() => setActiveId(vertical.id)}
              >
                <motion.div
                  className="p-4"
                  initial={{ opacity: 0, ...directionReveal[vertical.id] }}
                  transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.35 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", style.text)}>
                        {vertical.shortName}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug">{vertical.name}</h3>
                    </div>
                    <span className={cn("h-3 w-3 shrink-0 rounded-full", style.bg)} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{vertical.tagline}</p>
                  <div className={cn("mt-3 flex flex-wrap gap-2 overflow-hidden transition-all duration-300", active ? "max-h-28" : "max-h-16")}>
                    {getServicePreview(vertical, active).map((service) => (
                      <span
                        className={cn("rounded-full border px-2.5 py-1 text-xs font-semibold", style.bg, style.border, style.text)}
                        key={service}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link
                    className="mt-4 inline-flex items-center gap-2 rounded-md text-sm font-bold text-primary transition hover:text-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    href={vertical.href}
                  >
                    Explore {vertical.shortName}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </motion.div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 lg:hidden">
          {verticals.map((vertical) => {
            const open = openId === vertical.id;
            const style = themeStyles[vertical.theme];

            return (
              <article className={cn("overflow-hidden rounded-[1.25rem] border bg-white shadow-soft", open ? style.border : "border-border-soft")} key={vertical.id}>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  onClick={() => setOpenId(open ? "" : vertical.id)}
                  type="button"
                >
                  <span>
                    <span className={cn("block text-xs font-bold uppercase tracking-[0.14em]", style.text)}>
                      {vertical.shortName}
                    </span>
                    <span className="mt-1 block font-heading text-xl font-semibold text-primary-dark">
                      {vertical.name}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("h-5 w-5 text-primary transition", open && "rotate-180")}
                  />
                </button>
                {open ? (
                  <motion.div
                    className="border-t border-border-soft px-5 pb-5 pt-4"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <p className="text-sm leading-6 text-text-secondary">{vertical.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {vertical.services.slice(0, 6).map((service) => (
                        <Badge key={service} variant="neutral">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={vertical.href}>
                      Explore {vertical.shortName}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
