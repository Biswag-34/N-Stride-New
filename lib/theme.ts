export type ThemeName = "kinetics" | "insight" | "woundCare" | "bioFit" | "stepAhead" | "default" | "blue" | "aqua" | "green" | "amber" | "indigo";

export type ThemeClasses = {
  accentColor: string;
  badgeClass: string;
  borderColor: string;
  gradientClass: string;
  ringClass: string;
  softBackground: string;
  textColor: string;
};

const themes: Record<ThemeName, ThemeClasses> = {
  default: {
    accentColor: "#1479C9",
    badgeClass: "border-border-soft bg-white text-primary-dark",
    borderColor: "border-border-soft",
    gradientClass: "from-white via-background-soft to-white",
    ringClass: "ring-primary/15",
    softBackground: "bg-background-soft",
    textColor: "text-primary",
  },
  blue: {
    accentColor: "#1479C9",
    badgeClass: "border-primary/20 bg-primary/10 text-primary",
    borderColor: "border-primary/20",
    gradientClass: "from-primary/10 via-background-soft to-white",
    ringClass: "ring-primary/15",
    softBackground: "bg-primary/10",
    textColor: "text-primary",
  },
  aqua: {
    accentColor: "#26B6C8",
    badgeClass: "border-accent-aqua/25 bg-accent-aqua/10 text-accent-aqua",
    borderColor: "border-accent-aqua/25",
    gradientClass: "from-accent-aqua/10 via-background-soft to-white",
    ringClass: "ring-accent-aqua/15",
    softBackground: "bg-accent-aqua/10",
    textColor: "text-accent-aqua",
  },
  green: {
    accentColor: "#5CB85C",
    badgeClass: "border-accent-green/25 bg-accent-green/10 text-accent-green",
    borderColor: "border-accent-green/25",
    gradientClass: "from-accent-green/10 via-background-soft to-white",
    ringClass: "ring-accent-green/15",
    softBackground: "bg-accent-green/10",
    textColor: "text-accent-green",
  },
  amber: {
    accentColor: "#F5A623",
    badgeClass: "border-accent-amber/30 bg-accent-amber/10 text-[#9A620D]",
    borderColor: "border-accent-amber/30",
    gradientClass: "from-accent-amber/10 via-background-soft to-white",
    ringClass: "ring-accent-amber/15",
    softBackground: "bg-accent-amber/10",
    textColor: "text-[#9A620D]",
  },
  indigo: {
    accentColor: "#5A67D8",
    badgeClass: "border-accent-indigo/25 bg-accent-indigo/10 text-accent-indigo",
    borderColor: "border-accent-indigo/25",
    gradientClass: "from-accent-indigo/10 via-background-soft to-white",
    ringClass: "ring-accent-indigo/15",
    softBackground: "bg-accent-indigo/10",
    textColor: "text-accent-indigo",
  },
  kinetics: {
    accentColor: "#1479C9",
    badgeClass: "border-primary/20 bg-primary/10 text-primary",
    borderColor: "border-primary/20",
    gradientClass: "from-primary/10 via-background-soft to-white",
    ringClass: "ring-primary/15",
    softBackground: "bg-primary/10",
    textColor: "text-primary",
  },
  insight: {
    accentColor: "#26B6C8",
    badgeClass: "border-accent-aqua/25 bg-accent-aqua/10 text-accent-aqua",
    borderColor: "border-accent-aqua/25",
    gradientClass: "from-accent-aqua/10 via-background-soft to-white",
    ringClass: "ring-accent-aqua/15",
    softBackground: "bg-accent-aqua/10",
    textColor: "text-accent-aqua",
  },
  woundCare: {
    accentColor: "#F5A623",
    badgeClass: "border-accent-amber/30 bg-accent-amber/10 text-[#9A620D]",
    borderColor: "border-accent-amber/30",
    gradientClass: "from-accent-amber/10 via-background-soft to-white",
    ringClass: "ring-accent-amber/15",
    softBackground: "bg-accent-amber/10",
    textColor: "text-[#9A620D]",
  },
  bioFit: {
    accentColor: "#5A67D8",
    badgeClass: "border-accent-indigo/25 bg-accent-indigo/10 text-accent-indigo",
    borderColor: "border-accent-indigo/25",
    gradientClass: "from-accent-indigo/10 via-background-soft to-white",
    ringClass: "ring-accent-indigo/15",
    softBackground: "bg-accent-indigo/10",
    textColor: "text-accent-indigo",
  },
  stepAhead: {
    accentColor: "#5CB85C",
    badgeClass: "border-accent-green/25 bg-accent-green/10 text-accent-green",
    borderColor: "border-accent-green/25",
    gradientClass: "from-accent-green/10 via-background-soft to-white",
    ringClass: "ring-accent-green/15",
    softBackground: "bg-accent-green/10",
    textColor: "text-accent-green",
  },
};

export function getThemeClasses(theme: ThemeName | string = "default") {
  return themes[theme as ThemeName] ?? themes.default;
}
