"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { navigationLinks } from "@/data/navigation";

type MobileMenuProps = {
  onClose: () => void;
  open: boolean;
};

export function MobileMenu({ onClose, open }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="border-t border-border-soft bg-white/95 shadow-soft lg:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-container px-4 py-4 xs:px-5 xs:py-5">
            <div className="grid gap-2">
              {navigationLinks.map((item) => (
                <Link
                  className="rounded-md px-3 py-3 text-sm font-semibold text-primary-dark transition hover:bg-background-soft"
                  href={item.href}
                  key={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 grid gap-3 xs:grid-cols-2">
              <Button href="/contact" onClick={onClose} size="md">
                Book Consultation
              </Button>
              <Button external href={brand.ecommerceUrl} onClick={onClose} size="md" variant="outline">
                Visit Store
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
