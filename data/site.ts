import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Toko Tembakau Halim",
  shortName: "Halim",
  tagline: "Tembakau Pilihan, Warisan Tak Lekang Waktu",
  description:
    "Toko Tembakau Halim menghadirkan pilihan tembakau berkualitas dengan pengalaman dan kepercayaan yang dibangun dari waktu ke waktu.",
  locale: "id-ID",
  url: "https://tokotembakauhalim.com",
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Produk", href: "/produk" },
    { label: "Kontak", href: "/kontak" },
  ],
  contact: {
    address: "Jl. Patimura No.1, Mojorejo, Kec. Junrejo, Kota Batu, Jawa Timur 65321",
    whatsapp: "085646402753",
    email: "admin@tokotembakauhalim.com",
    hours: "09.00 - 16.00",
    mapUrl: "https://maps.app.goo.gl/N9vy4HYALiaELr6q7",
    mapEmbedUrl: "https://maps.google.com/maps?q=-7.9013787,112.5588973&z=16&output=embed",
  },
};
