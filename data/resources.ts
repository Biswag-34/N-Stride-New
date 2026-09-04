import type { Resource } from "@/data/types";

export const resourceReviewNotice =
  "N-Stride resources are being prepared for clinical review with author, reviewer, publication date, review date, references, disclaimer and relevant CTA details before publication.";

export const resourceReviewTopics = [
  "Diabetic foot warning signs",
  "Off-loading basics",
  "Therapeutic footwear decisions",
  "Foot checkup expectations",
  "NPWT VAC dressing basics",
  "Prosthetics and orthotics education",
] as const;

export const draftResources = [
  {
    id: "diabetic-foot-warning-signs",
    title: "Diabetic Foot Warning Signs",
    category: "Diabetic Foot Care",
    summary:
      "A practical guide to symptoms and changes that should prompt timely foot-care attention.",
    image: "Calm diabetic foot-care education visual",
    href: "/resources/diabetic-foot-warning-signs",
  },
  {
    id: "why-off-loading-matters",
    title: "Why Off-Loading Matters",
    category: "Pressure Protection",
    summary:
      "An educational overview of pressure reduction and why off-loading may be recommended in wound or risk management.",
    image: "Off-loading footwear with pressure map graphic",
    href: "/resources/why-off-loading-matters",
  },
  {
    id: "when-custom-footwear-helps",
    title: "When Custom Footwear Helps",
    category: "Therapeutic Footwear",
    summary:
      "A simple explanation of when standard footwear may not be enough and how customization can support comfort.",
    image: "Custom footwear consultation",
    href: "/resources/when-custom-footwear-helps",
  },
  {
    id: "what-happens-in-foot-checkup",
    title: "What Happens in a Foot Checkup?",
    category: "Diagnostics",
    summary:
      "A patient-friendly walkthrough of foot screening, consultation and care recommendation steps.",
    image: "Doctor performing foot checkup",
    href: "/resources/what-happens-in-a-foot-checkup",
  },
  {
    id: "npwt-vac-dressing-basics",
    title: "NPWT VAC Dressing Basics",
    category: "Wound Care",
    summary:
      "A responsible introduction to NPWT VAC dressing support and why it should be guided by clinical teams.",
    image: "NPWT VAC supplies without graphic wound imagery",
    href: "/resources/npwt-vac-dressing-basics",
  },
  {
    id: "prosthetics-orthotics-explained",
    title: "Prosthetics & Orthotics Explained",
    category: "Bio-Fit",
    summary:
      "A clear primer on prosthetics, orthotics and support devices for mobility and functional adaptation.",
    image: "Prosthetics and orthotics education visual",
    href: "/resources/prosthetics-orthotics-explained",
  },
] satisfies Resource[];

export const resources = [] satisfies Resource[];
