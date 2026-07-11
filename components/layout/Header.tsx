"use client";

import { ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { navigationLinks } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          aria-label={`${SITE_NAME} home`}
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-12 w-44 shrink-0 overflow-hidden rounded-sm bg-white">
            <Image
              alt={`${SITE_NAME} logo`}
              className="object-contain"
              fill
              priority
              sizes="176px"
              src="/brand/logo-header.png"
            />
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-semibold text-text-secondary transition hover:bg-background-soft hover:text-primary-dark"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#consultation" size="md">
            Book Consultation
          </Button>
          <Button external href={brand.ecommerceUrl} size="md" variant="outline">
            Visit Store
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-soft bg-white text-primary-dark shadow-soft transition hover:bg-background-soft lg:hidden",
          )}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      <MobileMenu onClose={() => setMenuOpen(false)} open={menuOpen} />
    </header>
  );
}
