import type { FooterNavigationGroup, NavigationItem } from "@/data/types";

import { brand } from "@/data/brand";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Verticals",
    href: "/verticals",
    children: [
      { label: "N-Stride Kinetics", href: "/verticals/kinetics" },
      { label: "N-Stride Insight", href: "/verticals/insight" },
      { label: "NPWT VAC & Wound Care", href: "/verticals/wound-care" },
      { label: "N-Stride Bio-Fit", href: "/verticals/bio-fit" },
    ],
  },
  { label: "FitRx", href: "/fitrx" },
  { label: "Step-Ahead", href: "/step-ahead" },
  { label: "Contact", href: "/contact" },
  { label: "Visit Store", href: brand.ecommerceUrl, external: true },
] satisfies NavigationItem[];

export const navigationLinks: NavigationItem[] = navigation.filter((item) => !item.external);

export const footerNavigation = [
  {
    title: "Care Verticals",
    links: [
      { label: "N-Stride Kinetics", href: "/verticals/kinetics" },
      { label: "N-Stride Insight", href: "/verticals/insight" },
      { label: "NPWT VAC & Wound Care", href: "/verticals/wound-care" },
      { label: "N-Stride Bio-Fit", href: "/verticals/bio-fit" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "FitRx", href: "/fitrx" },
      { label: "Step-Ahead", href: "/step-ahead" },
      { label: "Book Consultation", href: "/contact" },
    ],
  },
  {
    title: "N-Stride",
    links: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Visit Store", href: brand.ecommerceUrl, external: true },
    ],
  },
] satisfies FooterNavigationGroup[];
