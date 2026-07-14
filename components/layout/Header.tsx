"use client";

import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { navigationLinks } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const bioFitPage = pathname?.startsWith("/verticals/bio-fit") ?? false;

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-white/96 shadow-[0_8px_28px_rgba(16,42,67,0.045)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          aria-label={`${SITE_NAME} home`}
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-9 w-40 shrink-0 overflow-hidden rounded-sm">
            <Image
              alt={`${SITE_NAME} logo`}
              className="object-contain"
              fill
              priority
              sizes="160px"
              src="/brand/logo-header.png"
            />
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "relative inline-flex min-h-14 items-center gap-1 px-3.5 text-[0.82rem] font-semibold text-text-secondary transition hover:text-primary-dark after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-transparent after:transition",
                  active && (bioFitPage ? "text-[#7357d8] after:bg-[#7357d8]" : "text-primary after:bg-primary"),
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
                {item.children ? <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button className={cn("min-h-9 rounded-[0.45rem] px-4 text-xs", bioFitPage && "bg-[#7357d8] hover:bg-[#5a42bd]")} href="/contact" size="md">
            Book Consultation
          </Button>
          <Button className={cn("min-h-9 rounded-[0.45rem] px-4 text-xs", bioFitPage && "border-[#7357d8] text-[#7357d8]")} external href={brand.ecommerceUrl} size="md" variant="outline">
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
