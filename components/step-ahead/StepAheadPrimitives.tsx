"use client";

import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export const stepEase = [0.22, 1, 0.36, 1] as const;

export function StepSection({ children, className, id }: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section className={cn("relative overflow-hidden bg-white", className)} id={id}>
      {children}
    </section>
  );
}

export function StepContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1380px] px-5 xs:px-6 sm:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}

export function StepReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      transition={{ delay, duration: 0.72, ease: stepEase }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function StepKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-[#e7f4ff] px-3 py-1 font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StepIconBubble({
  children,
  className,
  color = "#1479c9",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-[#c9e6f8] bg-[linear-gradient(145deg,#ffffff,#f5fbff)] shadow-[0_16px_34px_rgba(20,121,201,0.13)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function StepPlaceholder({
  label,
  className,
  tone = "blue",
}: {
  className?: string;
  label: string;
  tone?: "blue" | "green";
}) {
  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate min-h-[13rem] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#ffffff,#f4faff_52%,#eef8ff)] shadow-[18px_24px_60px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8]",
        tone === "green" && "bg-[linear-gradient(135deg,#f4fff8,#ffffff_55%,#f4faff)] ring-[#cbeed5]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(20,121,201,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(92,184,92,0.12),transparent_24%)]"
      />
    </div>
  );
}

export function StepCurveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 right-0 z-10 h-20 w-full text-[#9dd5f7]",
        flip && "rotate-180",
        className,
      )}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 100"
    >
      <path d="M-20 72C232 122 380 70 604 68c242-2 394 62 638 1 88-22 151-50 218-55" stroke="currentColor" strokeWidth="2" />
      <path d="M-20 86C227 122 382 90 604 88c238-2 402 29 638-8 96-15 153-35 218-40" stroke="currentColor" strokeOpacity="0.32" />
    </svg>
  );
}

export function StepWaveField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#9dd5f7]/35", className)} fill="none" viewBox="0 0 900 220">
      {Array.from({ length: 6 }).map((_, index) => (
        <path
          d={`M-20 ${132 + index * 8}C124 ${42 + index * 5} 229 ${176 - index * 2} 366 ${104 + index * 5}C500 ${34 + index * 6} 592 ${178 - index * 3} 724 ${98 + index * 5}C790 ${58 + index * 3} 844 ${54 + index * 5} 924 ${72 + index * 6}`}
          key={index}
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function StepPill({
  children,
  icon,
  className,
}: PropsWithChildren<{ className?: string; icon?: ReactNode }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_12px_28px_rgba(20,121,201,0.09)] ring-1 ring-[#c9e6f8]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
