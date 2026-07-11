import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
