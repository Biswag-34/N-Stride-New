"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { staggerContainer } from "@/lib/motion";

type StaggerGroupProps = PropsWithChildren<{
  className?: string;
}>;

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.15 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
