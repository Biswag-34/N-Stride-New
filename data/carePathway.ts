import type { CarePathwayStep } from "@/data/types";

export const carePathway = [
  {
    id: "understand",
    step: "01",
    title: "Understand",
    description:
      "Begin with the person's symptoms, risk factors, footwear use, mobility needs and care goals.",
    connectedVerticals: ["Insight", "Kinetics"],
    icon: "clipboard-list",
  },
  {
    id: "diagnose",
    step: "02",
    title: "Diagnose",
    description:
      "Use foot checkups, consultation, home scan support and pressure or gait observations to guide next steps.",
    connectedVerticals: ["Insight"],
    icon: "scan-search",
  },
  {
    id: "protect",
    step: "03",
    title: "Protect",
    description:
      "Recommend therapeutic footwear, off-loading options, socks, insoles or accessories to support daily protection.",
    connectedVerticals: ["Kinetics", "Insight"],
    icon: "shield-check",
  },
  {
    id: "treat",
    step: "04",
    title: "Treat",
    description:
      "Coordinate wound-care support, NPWT VAC dressing pathways and off-loading guidance under clinical direction.",
    connectedVerticals: ["Wound Care", "Kinetics"],
    icon: "heart-pulse",
  },
  {
    id: "restore",
    step: "05",
    title: "Restore",
    description:
      "Support mobility, alignment, functional adaptation or cosmetic restoration through Bio-Fit pathways.",
    connectedVerticals: ["Bio-Fit"],
    icon: "move",
  },
  {
    id: "continue",
    step: "06",
    title: "Continue",
    description:
      "Keep care connected with follow-up, education, product updates and partner-led support when needed.",
    connectedVerticals: ["Insight", "Kinetics", "Wound Care", "Bio-Fit", "Step-Ahead"],
    icon: "refresh-cw",
  },
] satisfies CarePathwayStep[];
