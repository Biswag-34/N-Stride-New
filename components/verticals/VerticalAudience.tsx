"use client";

import { CheckCircle2, UsersRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";

type VerticalAudienceProps = {
  vertical: Vertical;
};

export function VerticalAudience({ vertical }: VerticalAudienceProps) {
  const reduceMotion = useReducedMotion();
  const theme = getThemeClasses(vertical.theme);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.74fr_1fr] lg:items-center">
      <div className="rounded-[1.5rem] border border-border-soft bg-background-soft p-4">
        <ImagePlaceholder aspect="wide" label={vertical.imageNeeds[1] ?? `${vertical.shortName} audience visual`} />
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className={cn("flex h-10 w-10 items-center justify-center rounded-md", theme.softBackground, theme.textColor)}>
            <UsersRound aria-hidden="true" className="h-5 w-5" />
          </span>
          <ThemeBadge theme={vertical.theme}>Who this helps</ThemeBadge>
        </div>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">Who this helps</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {vertical.audience.map((item, index) => (
            <motion.div
              className="flex items-start gap-3 rounded-[1rem] border border-border-soft bg-white p-4 shadow-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              key={item}
              transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <CheckCircle2 aria-hidden="true" className={cn("mt-0.5 h-5 w-5 shrink-0", theme.textColor)} />
              <p className="text-sm font-semibold leading-6 text-primary-dark">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
