import type { ComponentType, ReactNode } from "react";
import {
  Activity,
  ClipboardCheck,
  HandHeart,
  UserRound,
} from "lucide-react";
import { FaBandage, FaPersonWalkingWithCane, FaUserDoctor } from "react-icons/fa6";
import { GiLeg } from "react-icons/gi";
import {
  TbBone,
  TbClipboardCheck,
  TbHeartHandshake,
  TbRefresh,
  TbReportSearch,
  TbShieldCheck,
  TbShoe,
  TbStethoscope,
  TbUserHeart,
  TbWalk,
} from "react-icons/tb";

import { cn } from "@/lib/cn";

export type HomeTone = "blue" | "aqua" | "amber" | "indigo" | "green";

export const toneStyles: Record<
  HomeTone,
  {
    bg: string;
    border: string;
    glow: string;
    iconBg: string;
    text: string;
  }
> = {
  blue: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    glow: "shadow-[0_22px_55px_rgba(20,121,201,0.13)]",
    iconBg: "bg-primary/10",
    text: "text-primary",
  },
  aqua: {
    bg: "bg-accent-aqua/10",
    border: "border-accent-aqua/25",
    glow: "shadow-[0_22px_55px_rgba(38,182,200,0.13)]",
    iconBg: "bg-accent-aqua/10",
    text: "text-accent-aqua",
  },
  amber: {
    bg: "bg-accent-amber/10",
    border: "border-accent-amber/25",
    glow: "shadow-[0_22px_55px_rgba(245,166,35,0.14)]",
    iconBg: "bg-accent-amber/10",
    text: "text-[#B36B09]",
  },
  indigo: {
    bg: "bg-accent-indigo/10",
    border: "border-accent-indigo/25",
    glow: "shadow-[0_22px_55px_rgba(90,103,216,0.13)]",
    iconBg: "bg-accent-indigo/10",
    text: "text-accent-indigo",
  },
  green: {
    bg: "bg-accent-green/10",
    border: "border-accent-green/25",
    glow: "shadow-[0_22px_55px_rgba(92,184,92,0.13)]",
    iconBg: "bg-accent-green/10",
    text: "text-accent-green",
  },
};

export const homeIconMap = {
  activity: Activity,
  bandage: FaBandage,
  biofit: FaPersonWalkingWithCane,
  bone: TbBone,
  clipboard: TbClipboardCheck,
  consult: FaUserDoctor,
  check: ClipboardCheck,
  footwear: TbShoe,
  heart: TbHeartHandshake,
  leg: GiLeg,
  mobility: TbWalk,
  refresh: TbRefresh,
  scan: TbReportSearch,
  shield: TbShieldCheck,
  stethoscope: TbStethoscope,
  support: HandHeart,
  user: UserRound,
  userCare: TbUserHeart,
} satisfies Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean; strokeWidth?: number }>>;

export function SectionKicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex rounded-full bg-soft-sky/70 px-3 py-1 text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function IconBubble({
  children,
  className,
  tone = "blue",
}: {
  children: ReactNode;
  className?: string;
  tone?: HomeTone;
}) {
  const toneClass = toneStyles[tone];

  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-[0_18px_38px_rgba(20,121,201,0.12)]",
        toneClass.border,
        toneClass.text,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ImageDrop({
  children,
  className,
  label,
}: {
  children?: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-background-soft", className)}>
      {label ? (
        <div className="absolute left-4 top-4 z-10 rounded-sm bg-primary-dark/70 px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/90">
          {label}
        </div>
      ) : null}
      {children ?? (
        <div className="flex h-full min-h-[14rem] items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(221,241,255,0.85),rgba(255,255,255,0.78))] px-6 text-center text-sm font-semibold text-primary">
          Image area
        </div>
      )}
    </div>
  );
}
