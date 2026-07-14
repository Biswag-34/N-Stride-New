"use client";

import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/cn";

export const woundEase = [0.22, 1, 0.36, 1] as const;

export function WoundSection({ children, className, id }: PropsWithChildren<{ className?: string; id?: string }>) {
  return <section className={cn("relative overflow-hidden bg-white", className)} id={id}>{children}</section>;
}

export function WoundContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1380px] px-4 xs:px-5 sm:px-7 lg:px-10 xl:px-14", className)}>
      {children}
    </div>
  );
}

export function WoundKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-[#fff2dd] px-3 py-1 font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#b86b00]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function WoundReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={false}
      transition={{ delay, duration: 0.72, ease: woundEase }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function WoundIconBubble({
  children,
  className,
  color = "#f5a623",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-[#f5d9a6] bg-white shadow-[0_16px_34px_rgba(245,166,35,0.14)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function WoundAsset({
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

export function WoundBackgroundImage({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute bg-cover bg-center opacity-55 mix-blend-multiply", className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export function WoundPlaceholder({
  label,
  className,
  shape = "soft",
}: {
  className?: string;
  label: string;
  shape?: "device" | "image" | "soft";
}) {
  const shapeClass =
    shape === "device"
      ? "rounded-tl-[5rem] rounded-tr-[1.5rem] rounded-br-[5rem] rounded-bl-[1.5rem]"
      : shape === "image"
        ? "rounded-[1.35rem]"
        : "rounded-[1.25rem]";

  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate min-h-[12rem] overflow-hidden bg-[linear-gradient(135deg,#ffffff,#fff9ee_48%,#f4faff)] shadow-[18px_24px_60px_rgba(245,166,35,0.11)] ring-1 ring-[#efd8b3]",
        shapeClass,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,166,35,0.15),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(20,121,201,0.1),transparent_26%)]"
      />
    </div>
  );
}

export function WoundCurveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute left-0 right-0 z-10 h-20 w-full text-[#e9be73]", flip && "rotate-180", className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 100"
    >
      <path d="M-20 72C222 122 384 67 594 67c244 0 407 61 636 0 92-24 160-54 230-60" stroke="currentColor" strokeWidth="2" />
      <path d="M-20 84C224 122 372 88 593 86c239-2 411 29 636-8 101-16 164-37 231-40" stroke="currentColor" strokeOpacity="0.32" />
    </svg>
  );
}

export function WoundWaveField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#e9be73]/35", className)} fill="none" viewBox="0 0 720 180">
      {Array.from({ length: 6 }).map((_, index) => (
        <path
          d={`M-20 ${102 + index * 8}C98 ${32 + index * 6} 178 ${148 - index * 2} 302 ${86 + index * 4}C438 ${18 + index * 6} 504 ${154 - index * 3} 640 ${86 + index * 3}C684 ${64 + index * 3} 716 ${58 + index * 4} 748 ${66 + index * 5}`}
          key={index}
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function WoundPill({
  children,
  icon,
  className,
}: PropsWithChildren<{ className?: string; icon?: ReactNode }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_12px_28px_rgba(245,166,35,0.1)] ring-1 ring-[#efd8b3]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
