"use client";

import type { ComponentType, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/cn";

export const bioFitEase = [0.22, 1, 0.36, 1] as const;

export type BioFitIcon = ComponentType<{ className?: string }>;

export function BioFitSection({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("relative overflow-hidden bg-white text-primary-dark", className)}>{children}</section>;
}

export function BioFitContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1380px] px-4 xs:px-5 sm:px-7 lg:px-10 xl:px-14", className)}>
      {children}
    </div>
  );
}

export function BioFitKicker({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full bg-[#ece8ff] px-3 py-1 font-heading text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#6d56d9]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function BioFitReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.72, ease: bioFitEase }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function BioFitIconBubble({
  children,
  className,
  color = "#7357d8",
  size = "md",
}: PropsWithChildren<{ className?: string; color?: string; size?: "sm" | "md" | "lg" }>) {
  const sizeClass = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-[#ddd4ff] bg-[linear-gradient(145deg,#ffffff,#f6f2ff)] shadow-[0_16px_34px_rgba(90,103,216,0.13),inset_0_1px_0_rgba(255,255,255,0.95)]",
        sizeClass,
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function BioFitPlaceholder({
  label,
  className,
  shape = "soft",
}: {
  className?: string;
  label: string;
  shape?: "arch" | "capsule" | "cut" | "soft";
}) {
  const shapeClass =
    shape === "arch"
      ? "rounded-t-[9rem] rounded-br-[2rem] rounded-bl-[0.5rem]"
      : shape === "capsule"
        ? "rounded-[999px]"
        : shape === "cut"
          ? "rounded-tl-[5rem] rounded-tr-[1.25rem] rounded-br-[5rem] rounded-bl-[1.25rem]"
          : "rounded-[1.35rem]";

  return (
    <div
      aria-label={label}
      className={cn(
        "relative isolate min-h-[13rem] overflow-hidden bg-[linear-gradient(135deg,#f8f5ff,#ffffff_48%,#eef8ff)] shadow-[18px_24px_60px_rgba(90,103,216,0.10)]",
        shapeClass,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(115,87,216,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(38,182,200,0.12),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(216,208,255,0.38),transparent)]"
      />
    </div>
  );
}

export function BioFitCurveDivider({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 right-0 z-10 h-28 w-full text-[#b8a9fb]",
        flip && "rotate-180",
        className,
      )}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 120"
    >
      <path d="M-20 90C210 137 384 91 592 86c240-6 414 70 646 8 96-26 166-58 222-63" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
      <path d="M-20 101C224 137 371 106 592 103c238-3 399 39 640-3 113-20 178-47 228-51" stroke="currentColor" strokeLinecap="round" strokeOpacity="0.32" strokeWidth="1.2" />
      <path d="M-20 108C222 143 360 120 592 116c230-4 401 20 640-9 107-13 174-31 228-36" stroke="currentColor" strokeDasharray="3 11" strokeLinecap="round" strokeOpacity="0.22" />
    </svg>
  );
}

export function BioFitDottedField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#b8a9fb]/35", className)} fill="none" viewBox="0 0 520 260">
      {Array.from({ length: 8 }).map((_, index) => (
        <path
          d={`M${-12 + index * 8} ${175 + index * 5}C108 ${105 + index * 6} 208 ${245 - index * 3} 356 ${150 + index * 4}C422 ${108 + index * 4} 472 ${108 + index * 2} 536 ${132 + index * 3}`}
          key={index}
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function BioFitSkeletonField({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute text-[#b8a9fb]/35", className)} fill="none" viewBox="0 0 320 420">
      <path d="M102 16c-25 52-12 92 12 128 28 42 31 74-4 118-30 38-38 82 0 132" stroke="currentColor" strokeWidth="1.6" />
      <path d="M170 18c-36 75-27 123 12 181 26 39 21 88-18 151" stroke="currentColor" strokeOpacity=".55" />
      <path d="M64 178c42 18 92 15 140-4M62 246c52 16 96 13 134-7M84 330c35 14 72 11 114-3" stroke="currentColor" strokeDasharray="2 8" strokeLinecap="round" strokeOpacity=".65" />
      {[0, 1, 2, 3].map((item) => (
        <circle cx={238} cy={86 + item * 74} key={item} r="14" stroke="currentColor" />
      ))}
      {[0, 1, 2, 3, 4].map((item) => (
        <path d={`M36 ${92 + item * 48}C104 ${54 + item * 44} 168 ${118 + item * 28} 282 ${78 + item * 40}`} key={`line-${item}`} stroke="currentColor" strokeDasharray="2 9" strokeLinecap="round" strokeOpacity=".42" />
      ))}
    </svg>
  );
}

export function BioFitSoftDivider({
  className,
  color = "#b8a9fb",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute left-0 right-0 z-10 h-24 w-full", className)} fill="none" preserveAspectRatio="none" viewBox="0 0 1440 110">
      <path d="M-20 64C190 104 370 40 582 54c238 16 406 78 656 11 91-24 154-45 222-50" stroke={color} strokeLinecap="round" strokeOpacity=".72" strokeWidth="2.1" />
      <path d="M-20 76C200 110 362 64 584 72c242 9 405 44 656 9 98-14 162-29 222-34" stroke={color} strokeDasharray="3 10" strokeLinecap="round" strokeOpacity=".24" />
    </svg>
  );
}

export function BioFitWaveImage({
  className,
  src = "/biofit/wave-divider-wide.png",
}: {
  className?: string;
  src?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 right-0 z-0 bg-cover bg-center opacity-70 mix-blend-multiply",
        className,
      )}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export function BioFitPill({
  children,
  icon,
  className,
}: PropsWithChildren<{ className?: string; icon?: ReactNode }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/86 px-3 py-2 text-xs font-bold text-primary-dark shadow-[0_12px_28px_rgba(90,103,216,0.11)] ring-1 ring-[#d8d0ff]",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function BioFitAsset({
  alt,
  className,
  imageClassName,
  priority,
  src,
}: {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        className={cn("object-cover", imageClassName)}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        src={src}
      />
    </div>
  );
}
