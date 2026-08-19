import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { valueProps } from "@/data/value-props";

export function Benefits() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Kenapa Halim"
        title="Nilai yang Kami Jaga"
        description="Empat prinsip yang menjadi fondasi setiap produk dan layanan yang kami tawarkan."
      />
      <Stagger className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
        {valueProps.map((value) => (
          <StaggerItem
            key={value.id}
            className="flex flex-col gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0"
          >
            <value.icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
            <h3 className="font-display text-lg font-semibold text-foreground">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {value.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
