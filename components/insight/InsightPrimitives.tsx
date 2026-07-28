"use client";

import type { ComponentType, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/cn";

export const insightEase = [0.22, 1, 0.36, 1] as const;

export type InsightIcon = ComponentType<{ className?: string }>;

export function InsightSection({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("relative overflow-hidden bg-white", className)}>{children}</section>;
}

export function InsightContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1380px] px-4 xs:px-5 sm:px-7 lg:px-10 xl:px-14", className)}>
      {children}
    </div>
  );
}

export function InsightKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
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

export function InsightReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      transition={{ delay, duration: 0.72, ease: insightEase }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function InsightIconBubble({
  children,
  className,
  color = "#1479c9",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-[#c9e6f8] bg-white shadow-[0_16px_34px_rgba(20,121,201,0.13)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function InsightAsset({
  alt,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  src,
}: {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  src: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        className={cn("object-cover", imageClassName)}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

export function InsightWaveImage({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute bg-cover bg-center opacity-70 mix-blend-multiply", className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export function InsightPlaceholder({
  label,
  className,
  shape = "soft",
}: {
  className?: string;
  label: string;
  shape?: "dashboard" | "device" | "soft";
}) {
  const shapeClass =
    shape === "device"
      ? "rounded-t-[5rem] rounded-br-[1.25rem] rounded-bl-[1.25rem]"
      : shape === "dashboard"
        ? "rounded-[1.25rem]"
        : "rounded-[1.35rem]";

  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate min-h-[11rem] overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f4faff_52%,#eef8ff)] shadow-[18px_24px_60px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8]",
        shapeClass,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(38,182,200,0.14),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(20,121,201,0.12),transparent_24%)]"
      />
    </div>
  );
}

export function InsightWaveField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#9dd5f7]", className)} fill="none" viewBox="0 0 900 180">
      {Array.from({ length: 5 }).map((_, index) => (
        <path
          d={`M-20 ${92 + index * 10}C92 ${19 + index * 8} 185 ${153 - index * 2} 304 ${85 + index * 5}C430 ${13 + index * 8} 536 ${154 - index * 3} 666 ${82 + index * 4}C760 ${31 + index * 6} 826 ${37 + index * 5} 922 ${71 + index * 6}`}
          key={index}
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
          strokeOpacity={0.28 - index * 0.025}
        />
      ))}
    </svg>
  );
}

export function InsightCurveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute left-0 right-0 z-10 h-20 w-full text-[#9dd5f7]", flip && "rotate-180", className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 100"
    >
      <path d="M-20 72C218 116 358 62 584 66c244 4 394 58 642 0 94-22 161-48 234-50" stroke="currentColor" strokeWidth="2" />
      <path d="M-20 84C223 121 369 84 586 84c231 0 397 31 636-4 104-16 168-38 238-40" stroke="currentColor" strokeOpacity="0.32" />
    </svg>
  );
}

export function InsightPill({
  children,
  icon,
  className,
}: PropsWithChildren<{ className?: string; icon?: ReactNode }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/88 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_12px_28px_rgba(20,121,201,0.09)] ring-1 ring-[#c9e6f8]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
