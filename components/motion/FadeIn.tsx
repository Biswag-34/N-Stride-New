"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      transition={{ delay }}
      variants={fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
