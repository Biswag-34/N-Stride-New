import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { footerNavigation } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-background-soft">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-heading text-2xl font-semibold text-primary-dark">{SITE_NAME}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-text-secondary">{brand.summary}</p>
            <div className="mt-6 space-y-2 text-sm text-text-secondary" id="contact">
              <p>{brand.contact.phone}</p>
              <p>{brand.contact.email}</p>
              <p>{brand.contact.address}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-dark">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http");

                    return (
                      <li key={`${group.title}-${link.href}`}>
                        {isExternal ? (
                          <a
                            className="text-sm text-text-secondary transition hover:text-primary"
                            href={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            className="text-sm text-text-secondary transition hover:text-primary"
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-soft pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
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
