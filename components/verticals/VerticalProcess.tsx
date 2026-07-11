"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type VerticalProcessProps = {
  vertical: Vertical;
};

export function VerticalProcess({ vertical }: VerticalProcessProps) {
  const reduceMotion = useReducedMotion();
  const theme = getThemeClasses(vertical.theme);

  return (
    <section>
      <ThemeBadge theme={vertical.theme}>Care process</ThemeBadge>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">How this vertical works</h2>
      <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-border-soft bg-background-soft p-5 sm:p-6">
        <motion.div
          className="absolute left-10 top-10 hidden h-1 rounded-full bg-border-soft lg:block"
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={reduceMotion ? undefined : { width: "calc(100% - 5rem)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {vertical.process.map((step, index) => (
            <motion.article
              className="relative rounded-[1.25rem] border border-border-soft bg-white p-5 shadow-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              key={step.title}
              transition={{ delay: index * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <span className={cn("flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white", theme.textColor === "text-primary" ? "bg-primary" : theme.softBackground, theme.textColor !== "text-primary" && theme.textColor)}>
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
