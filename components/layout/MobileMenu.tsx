"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ExternalLink, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  onClose: () => void;
  open: boolean;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

export function MobileMenu({ onClose, open, triggerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);
  const [openGroup, setOpenGroup] = useState<string | null>("/verticals");

  useEffect(() => {
    if (!open) {
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusTimer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
        ?.focus();
    }, 40);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [onClose, open, triggerRef]);

  useEffect(() => {
    if (open && previousPathname.current !== pathname) {
      onClose();
      triggerRef.current?.focus();
    }

    previousPathname.current = pathname;
  }, [onClose, open, pathname, triggerRef]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname?.startsWith(href);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-14 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-primary-dark/36 backdrop-blur-[2px]"
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            type="button"
          />
          <motion.div
            ref={panelRef}
            aria-labelledby="mobile-navigation-title"
            aria-modal="true"
            className="absolute inset-x-0 top-0 max-h-full overflow-y-auto border-t border-border-soft bg-white shadow-[0_24px_70px_rgba(7,59,102,0.18)]"
            id="mobile-navigation-drawer"
            initial={{ y: -16 }}
            animate={{ y: 0 }}
            exit={{ y: -16 }}
            role="dialog"
          >
            <div className="mx-auto max-w-container px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 xs:px-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-dark" id="mobile-navigation-title">
                  Navigation
                </h2>
                <button
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-soft bg-white text-primary-dark shadow-soft"
                  onClick={() => {
                    onClose();
                    triggerRef.current?.focus();
                  }}
                  type="button"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                <div className="grid gap-2">
                  {navigationLinks.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <button
                          aria-controls={`mobile-group-${item.href.replace(/\W/g, "")}`}
                          aria-expanded={openGroup === item.href}
                          className={cn(
                            "flex min-h-12 w-full items-center justify-between rounded-md px-3 text-left text-sm font-semibold text-primary-dark transition hover:bg-background-soft",
                            isActive(item.href) && "bg-background-soft text-primary",
                          )}
                          onClick={() => setOpenGroup((current) => (current === item.href ? null : item.href))}
                          type="button"
                        >
                          <span>{item.label}</span>
                          <ChevronDown aria-hidden="true" className={cn("h-4 w-4 transition", openGroup === item.href && "rotate-180")} />
                        </button>
                      ) : (
                        <Link
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={cn(
                            "flex min-h-12 items-center rounded-md px-3 text-sm font-semibold text-primary-dark transition hover:bg-background-soft",
                            isActive(item.href) && "bg-background-soft text-primary",
                          )}
                          href={item.href}
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      )}
                      {item.children ? (
                        <div className={cn("mt-1 grid gap-1 border-l border-border-soft pl-3", openGroup !== item.href && "hidden")} id={`mobile-group-${item.href.replace(/\W/g, "")}`}>
                          <Link
                            aria-current={pathname === item.href ? "page" : undefined}
                            className={cn(
                              "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-text-secondary transition hover:bg-background-soft hover:text-primary-dark",
                              pathname === item.href && "bg-background-soft text-primary",
                            )}
                            href={item.href}
                            onClick={onClose}
                          >
                            All Verticals
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              aria-current={isActive(child.href) ? "page" : undefined}
                              className={cn(
                                "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-text-secondary transition hover:bg-background-soft hover:text-primary-dark",
                                isActive(child.href) && "bg-background-soft text-primary",
                              )}
                              href={child.href}
                              key={child.href}
                              onClick={onClose}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </nav>
              <div className="mt-5 grid gap-3 xs:grid-cols-2">
                <Button className="min-h-12" href="/contact" onClick={onClose} size="md">
                  Book Consultation
                </Button>
                <Button className="min-h-12" external href={brand.ecommerceUrl} onClick={onClose} size="md" variant="outline">
                  Visit Store
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
