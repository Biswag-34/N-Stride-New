import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  description,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-text-secondary sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
