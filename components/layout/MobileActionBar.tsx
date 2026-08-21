import { CalendarCheck, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { brand } from "@/data/brand";

function whatsappHref() {
  const digits = brand.contact.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Hello N-Stride, I would like to enquire about foot/lower-limb care.");
  return `https://wa.me/${digits}?text=${message}`;
}

export function MobileActionBar() {
  const actions = [
    { href: `tel:${brand.contact.phone}`, icon: Phone, label: "Call" },
    { href: whatsappHref(), icon: FaWhatsapp, label: "WhatsApp", external: true },
    { href: "/contact", icon: CalendarCheck, label: "Book" },
  ];

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 overflow-hidden rounded-t-[1.15rem] border-t border-white/24 bg-primary text-white shadow-[0_-18px_44px_rgba(7,59,102,0.28)] md:hidden"
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
