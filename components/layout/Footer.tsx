import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { footerNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { SITE_NAME } from "@/lib/constants";

const socialHoverStyles: Record<string, string> = {
  Facebook: "hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white",
  Instagram: "hover:border-transparent hover:bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)] hover:text-white",
  YouTube: "hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white",
};

export function Footer() {
  const socialIcons = {
    Instagram,
    Facebook,
    YouTube: Youtube,
  };

  return (
    <footer className="border-t border-border-soft bg-background text-text-primary">
      <Container className="py-6 sm:py-7">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.95fr_0.62fr] lg:items-start">
          <div>
            <Link className="relative block h-9 w-36" href="/">
              <Image
                alt={`${SITE_NAME} logo`}
                className="object-contain object-left"
                fill
                sizes="144px"
                src="/brand/logo-header.png"
              />
            </Link>
            <p className="mt-3 max-w-md text-[0.82rem] leading-6 text-text-secondary">{brand.summary}</p>
            <div className="mt-3 space-y-2 text-[0.8rem] leading-5 text-text-secondary" id="contact">
              <p className="flex items-start gap-2">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{brand.contact.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{brand.contact.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{brand.contact.address}</span>
              </p>
            </div>
          </div>

          <div className="grid gap-5 xs:grid-cols-2 lg:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http");

                    return (
                      <li key={`${group.title}-${link.href}`}>
                        {isExternal ? (
                          <a
                            className="text-[0.82rem] text-text-secondary transition hover:text-primary"
                            href={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link className="text-[0.82rem] text-text-secondary transition hover:text-primary" href={link.href}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary-dark">
              Stay connected
            </h2>
            <div className="mt-4 flex gap-2.5">
              {brand.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <a
                    aria-label={link.label}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-primary-dark shadow-soft transition duration-300 hover:scale-105",
                      socialHoverStyles[link.label],
                    )}
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : link.label.slice(0, 1)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-border-soft pt-4 text-[0.78rem] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nayapada&apos;s N-Stride. All rights reserved.</p>
          <p className="font-heading font-bold text-primary-dark">Crafted By Biswa</p>
        </div>
      </Container>
    </footer>
  );
}
