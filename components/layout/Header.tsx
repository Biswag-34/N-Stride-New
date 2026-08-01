"use client";

import { ArrowRight, ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { navigationLinks } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/cn";

const verticalDropdownTone = [
  "text-primary hover:bg-[#e9f7ff]",
  "text-[#2f8a49] hover:bg-[#eafaf0]",
  "text-[#b06a04] hover:bg-[#fff5e3]",
  "text-[#7357d8] hover:bg-[#f3efff]",
];

const verticalShortNames = ["Kinetics", "Insight", "Wound Care", "Bio-Fit"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname() ?? "";
  const bioFitPage = pathname?.startsWith("/verticals/bio-fit") ?? false;

  useEffect(() => {
    const closeDropdown = () => setActiveDropdown(null);

    window.addEventListener("scroll", closeDropdown, { passive: true });

    return () => window.removeEventListener("scroll", closeDropdown);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-white/96 shadow-[0_8px_28px_rgba(16,42,67,0.045)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between gap-3 px-4 xs:px-5 sm:px-6 lg:px-8">
        <Link
          aria-label={`${SITE_NAME} home`}
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-8 w-36 shrink-0 overflow-hidden rounded-sm xs:h-9 xs:w-40">
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
            const dropdownOpen = activeDropdown === item.href;
            const itemColor = active && bioFitPage ? "text-[#7357d8]" : active ? "text-primary" : "text-text-secondary";
            const underlineColor = bioFitPage ? "after:bg-[#7357d8]" : "after:bg-primary";

            return (
              <div
                className="relative flex min-h-14 items-center"
                key={item.href}
                onBlur={(event) => {
                  const nextTarget = event.relatedTarget;

                  if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                    setActiveDropdown(null);
                  }
                }}
                onFocus={() => {
                  if (item.children) {
                    setActiveDropdown(item.href);
                  }
                }}
                onMouseEnter={() => {
                  if (item.children) {
                    setActiveDropdown(item.href);
                  }
                }}
                onMouseLeave={() => {
                  if (item.children) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <Link
                  className={cn(
                    "relative inline-flex items-center gap-1 px-3.5 py-2 text-[0.82rem] font-semibold transition hover:text-primary-dark after:absolute after:bottom-0 after:left-3.5 after:h-[3px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-[calc(100%-1.75rem)]",
                    itemColor,
                    underlineColor,
                    active && "after:w-[calc(100%-1.75rem)]",
                  )}
                  href={item.href}
                >
                  {item.label}
                  {item.children ? <ChevronDown aria-hidden="true" className={cn("h-3.5 w-3.5 transition duration-300", dropdownOpen && "rotate-180")} /> : null}
                </Link>
                {item.children ? (
                  <div
                    className={cn(
                      "pointer-events-none invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 opacity-0 transition duration-200",
                      dropdownOpen && "pointer-events-auto visible translate-y-0 opacity-100",
                    )}
                  >
                    <div className="overflow-hidden rounded-[0.85rem] border border-[#d6ecf8] bg-white p-1.5 shadow-[0_18px_46px_rgba(16,42,67,0.14)]">
                      <div className="grid gap-1">
                        {item.children.map((child, index) => {
                          const childActive = pathname.startsWith(child.href);
                          const tone = verticalDropdownTone[index] ?? verticalDropdownTone[0];
                          const label = verticalShortNames[index] ?? child.label;

                          return (
                            <Link
                              className={cn(
                                "group/drop flex items-center justify-between gap-3 rounded-[0.65rem] px-3 py-2 font-heading text-[0.78rem] font-bold transition",
                                tone,
                                childActive && "bg-[#f8fcff]",
                              )}
                              href={child.href}
                              key={child.href}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{label}</span>
                              <ArrowRight
                                aria-hidden="true"
                                className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-200 group-hover/drop:translate-x-0 group-hover/drop:opacity-100 group-focus-visible/drop:translate-x-0 group-focus-visible/drop:opacity-100"
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
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
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-soft bg-white text-primary-dark shadow-soft transition hover:bg-background-soft xs:h-11 xs:w-11 lg:hidden",
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
