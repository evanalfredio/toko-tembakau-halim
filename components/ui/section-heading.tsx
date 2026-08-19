import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "./badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-foreground-muted">{description}</p>
      ) : null}
    </FadeIn>
  );
}
