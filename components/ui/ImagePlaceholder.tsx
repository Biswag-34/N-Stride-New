import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  aspect?: "square" | "video" | "portrait" | "wide";
  label: string;
};

const aspects: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/7]",
};

export function ImagePlaceholder({ aspect = "video", label }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border-soft bg-background-soft p-6 text-center text-primary",
        aspects[aspect],
      )}
    >
      <ImageIcon aria-hidden="true" className="mb-3 h-8 w-8" strokeWidth={1.8} />
      <span className="max-w-full break-words text-sm font-semibold [overflow-wrap:anywhere]">{label}</span>
    </div>
  );
}
