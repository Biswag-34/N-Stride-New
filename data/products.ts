import type { ProductShowcase } from "@/data/types";

export const productShowcase = [
  {
    id: "diabetic-footwear",
    title: "Diabetic Footwear",
    category: "Therapeutic Footwear",
    description:
      "Footwear designed for protective comfort, pressure awareness and daily support for people managing diabetic foot-care needs.",
    image: "Placeholder image: diabetic footwear on a clean clinical surface",
    link: "https://nstride.shop",
    external: true,
  },
  {
    id: "custom-footwear",
    title: "Custom Footwear",
    category: "Customization",
    description:
      "Made-to-need footwear pathways for people who require fit, support or comfort beyond standard options.",
    image: "Placeholder image: custom footwear fitting or measurement moment",
    link: "https://nstride.shop",
    external: true,
  },
  {
    id: "off-loading-footwear",
    title: "Off-Loading Footwear",
    category: "Pressure Protection",
    description:
      "Footwear solutions that help reduce pressure on sensitive areas as part of a clinician-guided care plan.",
    image: "Placeholder image: off-loading footwear with care-plan notes",
    link: "https://nstride.shop",
    external: true,
  },
  {
    id: "therapeutic-socks",
    title: "Therapeutic Socks",
    category: "Socks",
    description:
      "Diabetic, compression, gel and toe-alignment sock options for comfort, protection and lower-limb support.",
    image: "Placeholder image: therapeutic socks arranged as a care set",
    link: "https://nstride.shop",
    external: true,
  },
  {
    id: "insoles-inserts",
    title: "Insoles & Inserts",
    category: "Support Accessories",
    description:
      "Sports, orthotic, heel cup and arch support insole options for personalized support and footwear comfort.",
    image: "Placeholder image: insoles and inserts displayed with labels",
    link: "https://nstride.shop",
    external: true,
  },
  {
    id: "npwt-vac-support",
    title: "NPWT VAC Support",
    category: "Wound Care",
    description:
      "NPWT VAC dressing support and care-pathway coordination for complex wound-care needs under clinical direction.",
    image: "Placeholder image: NPWT VAC support supplies in a non-graphic clinical setup",
    link: "/verticals/wound-care",
  },
  {
    id: "prosthetics-orthotics",
    title: "Prosthetics & Orthotics",
    category: "Mobility Restoration",
    description:
      "Patient-specific prosthetic, orthotic, brace and support pathways for function, comfort and adaptation.",
    image: "Placeholder image: prosthetic and orthotic consultation scene",
    link: "/verticals/bio-fit",
  },
  {
    id: "silicone-cosmetic-restoration",
    title: "Silicone Cosmetic Restoration",
    category: "Bio-Fit",
    description:
      "Silicone restoration services planned around appearance, comfort and patient-specific restoration needs.",
    image: "Placeholder image: silicone restoration material or discreet consultation scene",
    link: "/verticals/bio-fit",
  },
] satisfies ProductShowcase[];

export const productCategories = productShowcase.map((item) => ({
  key: item.id,
  title: item.title,
  description: item.description,
}));
