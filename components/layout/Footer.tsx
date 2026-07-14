import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { footerNavigation } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const socialIcons = {
    Instagram,
    Facebook,
    YouTube: Youtube,
  };

  return (
    <footer className="border-t border-border-soft bg-[linear-gradient(180deg,#f4faff,#edf7ff)]">
      <Container className="py-9">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_2.45fr]">
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
            <div className="mt-4 space-y-1.5 text-[0.82rem] leading-6 text-text-secondary" id="contact">
              <p>{brand.contact.phone}</p>
              <p>{brand.contact.email}</p>
              <p>{brand.contact.address}</p>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {group.title}
                </h2>
                <ul className="mt-3 space-y-2.5">
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
                          <Link
                            className="text-[0.82rem] text-text-secondary transition hover:text-primary"
                            href={link.href}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary-dark">
                Stay connected
              </h2>
              <div className="mt-3 flex gap-2.5">
                {brand.socialLinks.map((link) => {
                  const Icon = socialIcons[link.label as keyof typeof socialIcons];

                  return (
                    <a
                      aria-label={link.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white text-primary-dark shadow-soft transition hover:border-primary/35 hover:bg-primary hover:text-white"
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
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-border-soft pt-5 text-[0.78rem] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 lg:hidden">
            {brand.socialLinks.map((link) => (
              <a className="transition hover:text-primary" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

