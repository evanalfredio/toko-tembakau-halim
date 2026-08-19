import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion/fade-in";

export function BrandStatement() {
  return (
    <Section tone="surface" containerSize="narrow" className="text-center">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
          &ldquo;Bagi kami, tembakau bukan sekadar produk — melainkan warisan yang dijaga
          dengan ketelitian, dan disajikan dengan penuh rasa hormat kepada setiap
          penikmatnya.&rdquo;
        </p>
        <div className="mt-6 h-px w-16 bg-accent" />
      </FadeIn>
    </Section>
  );
}
