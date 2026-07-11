import type { ThemeName } from "@/lib/theme";

export type InquiryType = {
  description: string;
  icon: "scan" | "shoe" | "wound" | "biofit" | "partner" | "message";
  queryValue: string;
  theme: ThemeName;
  title: string;
};

export type PrepGuide = {
  items: string[];
  queryValue: string;
  title: string;
};

export const inquiryTypes = [
  {
    title: "Foot Checkup",
    description: "Book or enquire about N-Stride Insight foot checkup, doctor consultation or home foot scan.",
    theme: "insight",
    queryValue: "foot-checkup",
    icon: "scan",
  },
  {
    title: "Footwear / Product Guidance",
    description:
      "Get guidance for diabetic footwear, therapeutic footwear, socks, insoles, off-loading footwear or care accessories.",
    theme: "kinetics",
    queryValue: "product-guidance",
    icon: "shoe",
  },
  {
    title: "Wound-Care Support",
    description: "Enquire about NPWT VAC dressing, modern wound-care support or off-loading guidance.",
    theme: "woundCare",
    queryValue: "wound-care",
    icon: "wound",
  },
  {
    title: "Bio-Fit Consultation",
    description: "Enquire about prosthetics, orthotics or silicone cosmetic restoration.",
    theme: "bioFit",
    queryValue: "bio-fit",
    icon: "biofit",
  },
  {
    title: "Step-Ahead Partnership",
    description:
      "For doctors, clinics, nursing homes and hospitals interested in the Diabetic Foot Care Business-in-a-Box program.",
    theme: "stepAhead",
    queryValue: "step-ahead",
    icon: "partner",
  },
  {
    title: "General Enquiry",
    description: "For any other N-Stride related question.",
    theme: "default",
    queryValue: "general",
    icon: "message",
  },
] satisfies InquiryType[];

export const prepGuides = [
  {
    queryValue: "foot-checkup",
    title: "For foot checkup",
    items: ["Current symptoms", "Diabetes history if applicable", "Previous reports if any", "Footwear currently used"],
  },
  {
    queryValue: "product-guidance",
    title: "For product guidance",
    items: ["Foot concern", "Shoe size", "Daily activity type", "Existing pain or pressure areas"],
  },
  {
    queryValue: "wound-care",
    title: "For wound-care support",
    items: ["Wound location", "Duration", "Current dressing or treatment", "Doctor advice if any", "Photos only if requested by team"],
  },
  {
    queryValue: "bio-fit",
    title: "For Bio-Fit",
    items: ["Requirement type: prosthetic, orthotic or silicone restoration", "Previous prescription or measurements if available", "Mobility goals"],
  },
  {
    queryValue: "step-ahead",
    title: "For Step-Ahead",
    items: ["Facility type", "Available space", "Patient profile", "Interest in Basic or Premium package", "Existing diabetic or wound-care setup"],
  },
] satisfies PrepGuide[];

export const contactFaqs = [
  {
    question: "Can I contact N-Stride for only product guidance?",
    answer:
      "Yes. N-Stride can guide users toward suitable footwear, socks, insoles, off-loading products or care accessories. Product purchases are handled through the dedicated N-Stride Shop.",
  },
  {
    question: "Can I book a foot checkup?",
    answer:
      "Yes. You can enquire about foot checkup, doctor consultation, online appointment or home foot scan depending on availability and your care requirement.",
  },
  {
    question: "Can I contact for wound-care support?",
    answer:
      "Yes. You can enquire about NPWT VAC dressing, modern wound-care support and off-loading guidance. The team can guide the next appropriate step.",
  },
  {
    question: "Can I enquire about prosthetics or orthotics?",
    answer: "Yes. Bio-Fit enquiries can include prosthetics, orthotics and silicone cosmetic restoration.",
  },
  {
    question: "How do doctors or hospitals enquire about Step-Ahead?",
    answer:
      "Select Step-Ahead Partnership in the enquiry form. The N-Stride team can discuss your facility type, patient profile, package fit and setup pathway.",
  },
  {
    question: "Is this form for emergency care?",
    answer:
      "No. This contact form is not for medical emergencies. For urgent or emergency medical issues, users should contact local emergency services or visit the nearest appropriate healthcare facility.",
  },
];
