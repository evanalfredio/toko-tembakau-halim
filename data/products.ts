import type { Product } from "@/types";

// Dummy data — ganti item atau tambahkan produk asli kapan saja.
export const products: Product[] = [
  {
    id: "1",
    categoryId: "rajangan",
    name: "Tembakau Rajangan Klasik",
    slug: "tembakau-rajangan-klasik",
    description: "Rajangan halus dengan aroma khas, diproses secara tradisional.",
    image: "/images/products/rajangan-klasik.jpg",
    featured: true,
  },
  {
    id: "2",
    categoryId: "tingwe",
    name: "Tembakau Tingwe Pilihan",
    slug: "tembakau-tingwe-pilihan",
    description: "Tembakau rajangan lepas dengan papir linting, siap racik sendiri sesuai selera.",
    image: "/images/products/tingwe-pilihan.jpg",
    featured: true,
  },
  {
    id: "3",
    categoryId: "linting",
    name: "Racikan Kretek Cengkeh Halim",
    slug: "racikan-kretek-cengkeh-halim",
    description: "Racikan kretek cengkeh dan papir linting khas Halim, siap digulung sesuai selera.",
    image: "/images/products/kretek-cengkeh-racikan.jpg",
    featured: true,
  },
];
