import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { InteraktDesktopWidget } from "@/components/layout/InteraktDesktopWidget";
import { LeadCaptureProvider } from "@/components/lead-capture/LeadCaptureProvider";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <LeadCaptureProvider>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <MobileActionBar />
      <InteraktDesktopWidget />
    </LeadCaptureProvider>
  );
}
