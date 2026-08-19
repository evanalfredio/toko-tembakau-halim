import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-ink-900 to-ink-950 pb-16 pt-36 sm:pt-44">
      <Container size="wide">
        <FadeIn className="flex max-w-2xl flex-col gap-4">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="text-lg leading-relaxed text-foreground-muted">{description}</p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
