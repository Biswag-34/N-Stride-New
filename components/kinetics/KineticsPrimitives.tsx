"use client";

import type { ComponentType, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

export const kineticEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: kineticEase } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export type IconComponent = ComponentType<{ className?: string }>;

export function KineticsSection({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("relative overflow-hidden bg-white", className)}>{children}</section>;
}

export function KineticsContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}

export function KineticsKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-[#ddecff] px-3 py-1 font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function KineticsIconBubble({
  children,
  className,
  color = "#1479c9",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-11 w-11" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_14px_32px_rgba(20,121,201,0.16)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function KineticsPlaceholder({
  label,
  className,
  dark,
  children,
}: PropsWithChildren<{ className?: string; dark?: boolean; label: string }>) {
  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate overflow-hidden rounded-[1.35rem] border border-[#c9e6f8] bg-[linear-gradient(135deg,#ffffff,#eaf6ff)] shadow-[0_24px_70px_rgba(7,59,102,0.11)]",
        dark &&
          "border-[#0f5797]/50 bg-[radial-gradient(circle_at_65%_32%,rgba(38,182,200,0.52),transparent_27%),linear-gradient(135deg,#073b66,#0d4f88_55%,#072845)] text-white",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 opacity-80",
          dark
            ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(20,121,201,0.11),transparent_27%),radial-gradient(circle_at_80%_12%,rgba(38,182,200,0.13),transparent_24%)]",
        )}
      />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-5">
        {children}
      </div>
    </div>
  );
}

export function KineticsArrowLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="group inline-flex items-center gap-2 rounded-md text-sm font-bold text-primary transition hover:text-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

export function MotionReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={false}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { delay, duration: 0.72, ease: kineticEase } },
      }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function SoftPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute text-primary/20", className)}
      fill="none"
      viewBox="0 0 520 260"
    >
      <path d="M2 166c82-65 137 16 205-42 55-46 74-100 169-90 75 8 105 60 142 23" stroke="currentColor" />
      <path d="M31 198c91-44 130 17 194-31 58-44 74-77 151-62 56 11 83 36 128 3" stroke="currentColor" />
      <path d="M88 231c76-29 120 0 171-36 50-35 73-61 132-46 38 10 67 23 98 0" stroke="currentColor" />
    </svg>
  );
}

export function DecorativeWave({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("w-full", className)} fill="none" viewBox="0 0 1000 70">
      <path
        d="M4 44C84 13 156 12 236 39C321 68 384 62 467 30C556-4 633 0 721 34C821 73 902 66 996 28"
        stroke="#8ac2f3"
        strokeLinecap="round"
        strokeWidth="2"
      />
      {[170, 420, 645, 860].map((x) => (
        <circle cx={x} cy={x === 420 ? 36 : x === 645 ? 28 : 40} fill="#1479c9" key={x} r="4" />
      ))}
    </svg>
  );
}

export function Pill({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#c9e6f8] bg-white/82 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_10px_28px_rgba(20,121,201,0.09)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function IconText({
  icon,
  title,
  text,
  className,
}: {
  className?: string;
  icon: ReactNode;
  text: string;
  title: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <KineticsIconBubble size="sm">{icon}</KineticsIconBubble>
      <div>
        <p className="font-heading text-sm font-bold text-primary-dark">{title}</p>
        <p className="text-xs font-medium text-text-secondary">{text}</p>
      </div>
    </div>
  );
}
