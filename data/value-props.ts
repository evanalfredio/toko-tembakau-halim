import { Award, Leaf, Handshake, Users } from "lucide-react";
import type { ValueProp } from "@/types";

export const valueProps: ValueProp[] = [
  {
    id: "kualitas",
    title: "Kualitas",
    description:
      "Setiap produk melalui proses seleksi yang cermat untuk menjaga standar mutu terbaik.",
    icon: Award,
  },
  {
    id: "pilihan",
    title: "Pilihan",
    description:
      "Ragam tembakau dan perlengkapan yang dikurasi untuk berbagai preferensi penikmat.",
    icon: Leaf,
  },
  {
    id: "kepercayaan",
    title: "Kepercayaan",
    description:
      "Dibangun di atas hubungan jangka panjang dan kejujuran kepada setiap pelanggan.",
    icon: Handshake,
  },
  {
    id: "pelayanan",
    title: "Pelayanan Personal",
    description:
      "Konsultasi langsung untuk membantu menemukan pilihan yang paling sesuai kebutuhan.",
    icon: Users,
  },
];
