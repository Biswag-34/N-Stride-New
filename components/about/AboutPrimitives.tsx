"use client";

import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export const aboutEase = [0.22, 1, 0.36, 1] as const;

export function AboutSection({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("relative overflow-hidden bg-white", className)}>{children}</section>;
}

export function AboutContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto w-full max-w-[1260px] px-6 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function AboutReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.72, ease: aboutEase }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function AboutKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit rounded-full bg-[#e7f4ff] px-3 py-1 font-heading text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AboutIconBubble({
  children,
  className,
  color = "#1479c9",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-[#d6ebfb] bg-white shadow-[0_18px_42px_rgba(20,121,201,0.12)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function AboutPlaceholder({ className, label }: { className?: string; label: string }) {
  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate overflow-hidden rounded-[1.45rem] bg-[linear-gradient(135deg,#fbfdff,#eff8ff)] shadow-[18px_24px_60px_rgba(20,121,201,0.08)] ring-1 ring-[#c9e6f8]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(38,182,200,0.10),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(20,121,201,0.10),transparent_32%)]"
      />
    </div>
  );
}

export function AboutWaveField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#9dd5f7]/35", className)} fill="none" viewBox="0 0 900 260">
      {Array.from({ length: 7 }).map((_, index) => (
        <path
          d={`M-30 ${128 + index * 11}C96 ${70 + index * 5} 204 ${194 - index * 2} 336 ${116 + index * 4}C484 ${28 + index * 7} 590 ${196 - index * 5} 730 ${106 + index * 5}C804 ${58 + index * 4} 866 ${62 + index * 3} 936 ${82 + index * 5}`}
          key={index}
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function AboutBackgroundArt({
  alt = "",
  className,
  src,
}: {
  alt?: string;
  className?: string;
  src: string;
}) {
  return (
    <Image
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={cn("pointer-events-none absolute select-none object-cover", className)}
      height={720}
      sizes="100vw"
      src={src}
      width={1800}
    />
  );
}

export function AboutArtImage({
  alt,
  className,
  imgClassName,
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        className={cn("object-contain", imgClassName)}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 760px, 100vw"
        src={src}
      />
    </div>
  );
}

export function AboutPill({
  children,
  icon,
  className,
}: PropsWithChildren<{ className?: string; icon?: ReactNode }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_12px_28px_rgba(20,121,201,0.08)] ring-1 ring-[#c9e6f8]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
