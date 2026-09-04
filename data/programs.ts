import type { Program } from "@/data/types";
import { leadCaptureHref } from "@/data/leadCapture";

export const programs = [
  {
    id: "step-ahead",
    name: "N-Stride Step-Ahead",
    shortName: "Step-Ahead",
    type: "Clinical Partnership Program",
    theme: "stepAhead",
    tagline: "Helping doctors, hospitals and nursing facilities build modern foot-care setups.",
    shortDescription:
      "A partner program for care providers who want structured foot-care workflows, product support and patient education.",
    longDescription:
      "N-Stride Step-Ahead is a clinical partnership program designed for doctors, hospitals, nursing facilities and care centres that want to strengthen foot-care delivery. The program supports setup planning, team education, inventory integration, patient education material and ongoing collaboration around therapeutic products, diagnostics and wound-care pathways.",
    audience: [
      "Doctors",
      "Hospitals",
      "Nursing facilities",
      "Diabetic care clinics",
      "Wound-care centres",
      "Rehabilitation centres",
      "Physiotherapy centres",
    ],
    includes: [
      "Modern foot-care setup guidance",
      "Initial training and education",
      "Inventory support with N-Stride products",
      "Foot-care workflow support",
      "Patient education material",
      "Ongoing collaboration support",
    ],
    setupJourney: [
      {
        title: "Partner Discussion",
        description:
          "Understand the facility type, patient profile, current workflows and foot-care goals.",
      },
      {
        title: "Setup Planning",
        description:
          "Define the care setup, product categories, education requirements and operational workflow.",
      },
      {
        title: "Team Training",
        description:
          "Support the clinical and care team with initial education around N-Stride pathways and product use.",
      },
      {
        title: "Inventory Integration",
        description:
          "Help align N-Stride therapeutic products and support materials with the facility's care model.",
      },
      {
        title: "Ongoing Support",
        description:
          "Continue collaboration through education, workflow refinement and care-program support.",
      },
    ],
    imageNeeds: [
      "Doctor and care team reviewing a foot-care setup plan",
      "Hospital or clinic partner consultation in a clean medical environment",
      "Training session with product and patient education material",
      "N-Stride product inventory arranged for a clinical partner setup",
    ],
    statusNote:
      "Program details are being structured and should be finalized with exact partner onboarding, commercial and training information.",
    cta: {
      primary: { label: "Partner with Step-Ahead", href: leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" }) },
      secondary: { label: "Contact N-Stride", href: "/contact" },
    },
    seo: {
      title: "N-Stride Step-Ahead | Clinical Foot-Care Partnership Program",
      description:
        "N-Stride Step-Ahead helps doctors, hospitals, nursing facilities and care centres build structured modern foot-care setups.",
    },
    title: "Step-Ahead partner program",
    description:
      "A modular partner program for doctors, hospitals, nursing facilities and care centres.",
    href: "/step-ahead",
    status: "placeholder",
  },
] satisfies Program[];
