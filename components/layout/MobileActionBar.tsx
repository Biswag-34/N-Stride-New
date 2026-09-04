"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

import { brand } from "@/data/brand";

const contextByPath = [
  { match: "/verticals/kinetics", type: "product-guidance", label: "Kinetics" },
  { match: "/verticals/insight", type: "foot-checkup", label: "Insight" },
  { match: "/verticals/wound-care", type: "wound-care", label: "Wound Care" },
  { match: "/verticals/bio-fit", type: "bio-fit", label: "Bio-Fit" },
  { match: "/fitrx", type: "fitrx", label: "FitRx" },
  { match: "/step-ahead", type: "step-ahead", label: "Step-Ahead" },
  { match: "/contact", type: "general", label: "Contact" },
] as const;

function pageContext(pathname: string) {
  return contextByPath.find((item) => pathname.startsWith(item.match)) ?? { type: "general", label: "N-Stride" };
}

function whatsappHref(context: ReturnType<typeof pageContext>) {
  const digits = brand.contact.phoneHref.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hello N-Stride, I would like help with ${context.label}. Source: ${context.type}.`,
  );
  return `https://wa.me/${digits}?text=${message}`;
}

export function MobileActionBar() {
  const pathname = usePathname() ?? "/";
  const context = pageContext(pathname);
  const bookHref = `/contact?type=${context.type}&source=${encodeURIComponent(pathname)}&cta=mobile-bottom-book`;
  const actions = [
    { href: `tel:${brand.contact.phoneHref}`, icon: Phone, label: "Call" },
    { href: whatsappHref(context), icon: FaWhatsapp, label: "WhatsApp", external: true },
    { href: bookHref, icon: CalendarCheck, label: "Book" },
  ];

  return (
    <nav
      aria-label="Quick contact actions"
      className="mobile-action-bar fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 overflow-hidden rounded-t-[1.15rem] border-t border-white/24 bg-primary pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-18px_44px_rgba(7,59,102,0.28)] md:hidden"
    >
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            className="flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 border-l border-white/20 px-2 text-xs font-bold first:border-l-0"
            href={action.href}
            key={action.label}
            rel={action.external ? "noreferrer" : undefined}
            target={action.external ? "_blank" : undefined}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            <span>{action.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
