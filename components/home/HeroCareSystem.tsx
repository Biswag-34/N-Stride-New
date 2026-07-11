"use client";

import { ArrowRight, ExternalLink, HeartPulse, Handshake, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";

const nodes = [
  { label: "Insight", micro: "Checkup", className: "left-4 top-4 sm:left-7 sm:top-7", icon: Stethoscope },
  { label: "Kinetics", micro: "Protection", className: "right-4 top-4 sm:right-7 sm:top-7", icon: ShieldCheck },
  { label: "Wound Care", micro: "Treatment", className: "bottom-16 left-4 sm:bottom-7 sm:left-7", icon: HeartPulse },
  { label: "Bio-Fit", micro: "Restoration", className: "bottom-16 right-4 sm:bottom-7 sm:right-7", icon: Sparkles },
  { label: "Step-Ahead", micro: "Partners", className: "bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6", icon: Handshake },
];

export function HeroCareSystem() {
  const reduceMotion = useReducedMotion();
  const headlineLines = ["One Destination.", "Complete Foot & Lower-Limb Care."];

  return (
    <Section className="relative isolate overflow-hidden pb-14 pt-12 sm:pt-16 lg:pb-16" variant="soft">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(221,241,255,0.9),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,250,255,0.82))]" />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,1.05fr)]">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="aqua">Doctor-led foot, lower-body & limb care ecosystem</Badge>
            </motion.div>

            <h1 className="mt-5 max-w-[38.75rem] text-[2.45rem] font-semibold leading-[1.05] text-primary-dark sm:text-5xl lg:text-[3.45rem]">
              {headlineLines.map((line, index) => (
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  key={line}
                >
                  {line}
                  {index === headlineLines.length - 1 ? null : <span className="sr-only"> </span>}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-5 max-w-[39rem] text-sm leading-7 text-text-secondary sm:text-lg sm:leading-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55, ease: "easeOut" }}
            >
              {brand.secondaryTagline}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
            >
              <Button href={ctas.primary.href} size="lg">
                {ctas.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href={ctas.verticals.href} size="lg" variant="outline">
                {ctas.verticals.label}
              </Button>
              <Button external href={ctas.store.href} size="lg" variant="ghost">
                Visit N-Stride Shop
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="mt-5 hidden flex-wrap gap-2 text-xs font-semibold text-text-secondary sm:flex"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.45, ease: "easeOut" }}
            >
              {["Foot Checkup", "Therapeutic Footwear", "Wound Care", "Bio-Fit"].map((item) => (
                <span className="rounded-full border border-border-soft bg-white/75 px-3 py-1.5 shadow-soft" key={item}>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto h-[22rem] w-full max-w-[35rem] overflow-hidden rounded-[1.5rem] border border-border-soft bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(221,241,255,0.66))] shadow-card sm:h-[27rem] sm:rounded-[2rem] lg:h-[27rem]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            aria-label="N-Stride connected care system visual"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38,182,200,0.15),transparent_18rem)]" />
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/80 bg-white/35" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="1">
                  <stop stopColor="#1479C9" stopOpacity="0.34" />
                  <stop offset="1" stopColor="#26B6C8" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {[
                "M50 50 C40 42 33 33 25 25",
                "M50 50 C60 42 67 33 75 25",
                "M50 50 C40 58 33 64 25 70",
                "M50 50 C60 58 67 64 75 70",
                "M50 50 C50 63 50 74 50 86",
              ].map((d) => (
                <motion.path
                  d={d}
                  fill="none"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.65, duration: 1.05, ease: "easeOut" }}
                  key={d}
                  stroke="url(#heroLine)"
                  strokeDasharray="6 10"
                  strokeLinecap="round"
                  strokeWidth="0.55"
                />
              ))}
              {!reduceMotion
                ? [
                    { cx: 25, cy: 25 },
                    { cx: 75, cy: 25 },
                    { cx: 25, cy: 70 },
                    { cx: 75, cy: 70 },
                    { cx: 50, cy: 86 },
                  ].map((point, index) => (
                    <motion.circle
                      animate={{ opacity: [0.25, 0.85, 0.25], r: [0.5, 0.8, 0.5] }}
                      cx={point.cx}
                      cy={point.cy}
                      fill="#1479C9"
                      key={`${point.cx}-${point.cy}`}
                      transition={{ delay: index * 0.25, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))
                : null}
            </svg>

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 sm:h-36 sm:w-36">
              <motion.div
                className="flex h-full w-full flex-col items-center justify-center rounded-full border border-primary/20 bg-white text-center shadow-card"
                animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-heading text-base font-semibold text-primary-dark sm:text-xl">N-Stride</span>
                <span className="mt-1 max-w-20 text-[0.68rem] font-medium leading-4 text-text-secondary sm:max-w-24 sm:text-xs">
                  Connected care hub
                </span>
              </motion.div>
            </div>

            {nodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <motion.div
                  className={`absolute ${node.className} w-[5.9rem] sm:w-[8.75rem]`}
                  animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  transition={{
                    delay: 0.45 + index * 0.1,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  key={node.label}
                >
                  <motion.div
                    className="rounded-lg border border-border-soft bg-white/95 p-2 text-center shadow-soft backdrop-blur sm:p-3"
                    animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                    transition={{
                      delay: index * 0.15,
                      duration: 4.5 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon aria-hidden="true" className="mx-auto h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    <p className="mt-1.5 text-[0.72rem] font-bold text-primary-dark sm:mt-2 sm:text-sm">{node.label}</p>
                    <p className="mt-0.5 text-[0.64rem] font-semibold text-accent-aqua sm:mt-1 sm:text-xs">{node.micro}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
