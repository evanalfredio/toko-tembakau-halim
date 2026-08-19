import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export interface MapCardProps {
  className?: string;
}

export function MapCard({ className }: MapCardProps) {
  return (
    <a
      href={siteConfig.contact.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka lokasi ${siteConfig.name} di Google Maps`}
      className={cn(
        "group relative block overflow-hidden rounded-lg border border-border",
        className,
      )}
    >
      <iframe
        src={siteConfig.contact.mapEmbedUrl}
        title={`Peta lokasi ${siteConfig.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent p-5">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-cream-100">
          <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
          Buka di Google Maps
        </span>
      </div>
    </a>
  );
}
