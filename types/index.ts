import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

// Values are placeholder tokens (e.g. "[ALAMAT TOKO]") until real business info is provided.
export interface ContactInfo {
  address: string;
  whatsapp: string;
  email: string;
  hours: string;
  mapUrl: string;
  mapEmbedUrl: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  locale: string;
  url: string;
  nav: NavItem[];
  contact: ContactInfo;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  origin?: string;
  featured?: boolean;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
}
