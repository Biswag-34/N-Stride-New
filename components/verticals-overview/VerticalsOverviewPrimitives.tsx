"use client";

import type { ComponentType, ReactNode } from "react";
import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { FaBandage, FaUserDoctor } from "react-icons/fa6";
import { GiRunningShoe } from "react-icons/gi";
import {
  PiChartLineUpDuotone,
  PiHeartbeatDuotone,
  PiPersonSimpleWalkDuotone,
  PiShieldCheckDuotone,
  PiStethoscopeDuotone,
} from "react-icons/pi";
import { TbDeviceHeartMonitor, TbFileAnalytics } from "react-icons/tb";

import { cn } from "@/lib/cn";

export type VerticalTone = "kinetics" | "insight" | "woundCare" | "bioFit" | "blue" | "aqua";

export const verticalToneStyles: Record<
  VerticalTone,
  {
    accent: string;
    bg: string;
    border: string;
    glow: string;
    iconBg: string;
    path: string;
    ring: string;
    text: string;
  }
> = {
  kinetics: {
    accent: "#1479C9",
    bg: "bg-primary/10",
    border: "border-primary/25",
    glow: "shadow-[0_24px_58px_rgba(20,121,201,0.16)]",
    iconBg: "bg-primary",
    path: "from-primary via-primary to-primary/45",
    ring: "ring-primary/18",
    text: "text-primary",
  },
  insight: {
    accent: "#26B6C8",
    bg: "bg-accent-aqua/10",
    border: "border-accent-aqua/25",
    glow: "shadow-[0_24px_58px_rgba(38,182,200,0.16)]",
    iconBg: "bg-accent-aqua",
    path: "from-accent-aqua via-accent-aqua to-accent-aqua/45",
    ring: "ring-accent-aqua/18",
    text: "text-accent-aqua",
  },
  woundCare: {
    accent: "#F5A623",
    bg: "bg-accent-amber/10",
    border: "border-accent-amber/30",
    glow: "shadow-[0_24px_58px_rgba(245,166,35,0.16)]",
    iconBg: "bg-accent-amber",
    path: "from-accent-amber via-accent-amber to-accent-amber/45",
    ring: "ring-accent-amber/18",
    text: "text-[#B36B09]",
  },
  bioFit: {
    accent: "#5A67D8",
    bg: "bg-accent-indigo/10",
    border: "border-accent-indigo/25",
    glow: "shadow-[0_24px_58px_rgba(90,103,216,0.16)]",
    iconBg: "bg-accent-indigo",
    path: "from-accent-indigo via-accent-indigo to-accent-indigo/45",
    ring: "ring-accent-indigo/18",
    text: "text-accent-indigo",
  },
  blue: {
    accent: "#1479C9",
    bg: "bg-primary/10",
    border: "border-primary/25",
    glow: "shadow-[0_24px_58px_rgba(20,121,201,0.14)]",
    iconBg: "bg-primary",
    path: "from-primary via-primary to-primary/45",
    ring: "ring-primary/18",
    text: "text-primary",
  },
  aqua: {
    accent: "#26B6C8",
    bg: "bg-accent-aqua/10",
    border: "border-accent-aqua/25",
    glow: "shadow-[0_24px_58px_rgba(38,182,200,0.14)]",
    iconBg: "bg-accent-aqua",
    path: "from-accent-aqua via-accent-aqua to-accent-aqua/45",
    ring: "ring-accent-aqua/18",
    text: "text-accent-aqua",
  },
};

export const overviewIconMap = {
  analysis: TbFileAnalytics,
  arrow: ArrowRight,
  bandage: FaBandage,
  care: HeartHandshake,
  check: CheckCircle2,
  diagnostics: PiStethoscopeDuotone,
  foot: GiRunningShoe,
  outcome: Sparkles,
  partner: PiChartLineUpDuotone,
  protect: PiShieldCheckDuotone,
  pulse: PiHeartbeatDuotone,
  restore: PiPersonSimpleWalkDuotone,
  monitor: TbDeviceHeartMonitor,
  userDoctor: FaUserDoctor,
} satisfies Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean; strokeWidth?: number }>>;

export function OverviewKicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex rounded-full bg-soft-sky/75 px-3 py-1 text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function CircularIcon({
  children,
  className,
  tone = "kinetics",
}: {
  children: ReactNode;
  className?: string;
  tone?: VerticalTone;
}) {
  const toneClass = verticalToneStyles[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border bg-white text-primary shadow-[0_18px_42px_rgba(20,121,201,0.12)]",
        toneClass.border,
        toneClass.text,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function VerticalImagePlaceholder({
  className,
  icon: Icon,
  label,
  tone,
}: {
  className?: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean; strokeWidth?: number }>;
  label: string;
  tone: VerticalTone;
}) {
  const toneClass = verticalToneStyles[tone];

  return (
    <div
      aria-label={label}
      className={cn(
        "relative flex min-h-[11.5rem] items-center justify-center overflow-hidden rounded-[1.2rem] border bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.95),rgba(244,250,255,0.72))]",
        toneClass.border,
        className,
      )}
    >
      <div className={cn("absolute inset-x-8 bottom-8 h-16 rounded-full blur-xl", toneClass.bg)} />
      <div className="relative flex flex-col items-center text-center">
        <span className={cn("flex h-16 w-16 items-center justify-center rounded-full text-white shadow-soft", toneClass.iconBg)}>
          <Icon aria-hidden={true} className="h-8 w-8" strokeWidth={1.55} />
        </span>
      </div>
    </div>
  );
}
