"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { staggerItem } from "@/lib/motion";

type MotionCardProps = PropsWithChildren<{
  className?: string;
}>;

export function MotionCard({ children, className }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("rounded-lg border border-border-soft/80 bg-surface-elevated shadow-card", className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("rounded-lg border border-border-soft/80 bg-surface-elevated shadow-card", className)}
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
