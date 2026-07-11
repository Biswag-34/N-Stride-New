export type CTA = {
  external?: boolean;
  href: string;
  label: string;
};

export type CTAGroup = {
  primary: CTA;
  secondary?: CTA;
};

export type SEO = {
  description: string;
  title: string;
};

export type NavigationItem = {
  children?: NavigationItem[];
  external?: boolean;
  href: string;
  label: string;
};

export type FooterNavigationGroup = {
  links: NavigationItem[];
  title: string;
};

export type VerticalTheme = "kinetics" | "insight" | "woundCare" | "bioFit";

export type VerticalProcessStep = {
  description: string;
  title: string;
};

export type Vertical = {
  audience: string[];
  cta: CTAGroup;
  description: string;
  eyebrow: string;
  href: string;
  icon: "footwear" | "diagnostics" | "wound-care" | "prosthetics";
  id: string;
  imageNeeds: string[];
  longDescription: string;
  name: string;
  process: VerticalProcessStep[];
  proofPoints: string[];
  relatedProducts: string[];
  seo: SEO;
  services: string[];
  shortDescription: string;
  shortName: string;
  tagline: string;
  technologyPoints: string[];
  theme: VerticalTheme;
  title: string;
};

export type Program = {
  audience: string[];
  cta: CTAGroup;
  description: string;
  href: string;
  id: string;
  imageNeeds: string[];
  includes: string[];
  longDescription: string;
  name: string;
  seo: SEO;
  setupJourney: VerticalProcessStep[];
  shortDescription: string;
  shortName: string;
  status: "placeholder" | "active";
  statusNote: string;
  tagline: string;
  theme: string;
  title: string;
  type: string;
};

export type ProductShowcase = {
  category: string;
  description: string;
  external?: boolean;
  id: string;
  image: string;
  link: string;
  title: string;
};

export type CarePathwayStep = {
  connectedVerticals: string[];
  description: string;
  icon: string;
  id: string;
  step: string;
  title: string;
};

export type ProofPillar = {
  description: string;
  icon: string;
  id: string;
  title: string;
};

export type Resource = {
  category: string;
  href: string;
  id: string;
  image: string;
  summary: string;
  title: string;
};

export type Stat = {
  description?: string;
  label: string;
  value: string;
};

export type FAQ = {
  answer: string;
  question: string;
};
