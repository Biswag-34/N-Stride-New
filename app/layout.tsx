import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import "@/app/globals.css";
import { PageShell } from "@/components/layout/PageShell";
import { siteMeta } from "@/data/siteMeta";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${sora.variable}`} lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
