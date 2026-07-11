import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type ImageNeedPanelProps = {
  images: string[];
  title?: string;
};

export function ImageNeedPanel({ images, title = "Image requirements" }: ImageNeedPanelProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="rounded-[1.5rem] border border-dashed border-border-soft bg-background-soft p-5">
      <h2 className="text-xl font-semibold text-primary-dark">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {images.map((image) => (
          <ImagePlaceholder aspect="video" key={image} label={image} />
        ))}
      </div>
    </div>
  );
}
