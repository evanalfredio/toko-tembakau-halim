import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/data/site";

const title = "Kebijakan Privasi";
const description = "Kebijakan Privasi Toko Tembakau Halim.";
const effectiveDate = "20 Agustus 2026";

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: `${title} | ${siteConfig.name}`, description },
};

function PolicySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">{heading}</h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground-muted">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kebijakan Privasi"
        title="Kebijakan Privasi"
        description={`Berlaku sejak ${effectiveDate}. Halaman ini menjelaskan bagaimana ${siteConfig.name} memperlakukan informasi pengunjung website ini.`}
      />

      <Section tone="base" containerSize="narrow" className="pt-0 pb-20 sm:pb-24">
        <FadeIn className="flex flex-col gap-14">
          <PolicySection heading="1. Pendahuluan">
            <p>
              {siteConfig.name} (&ldquo;kami&rdquo;) menghargai privasi setiap pengunjung
              website ini ({siteConfig.url}). Kebijakan Privasi ini menjelaskan jenis
              informasi yang mungkin kami kumpulkan saat Anda mengunjungi atau
              menggunakan website kami, bagaimana informasi tersebut digunakan, dan
              hak-hak yang Anda miliki terkait informasi tersebut.
            </p>
            <p>
              Dengan menggunakan website ini, Anda menyetujui praktik yang dijelaskan
              dalam Kebijakan Privasi ini.
            </p>
          </PolicySection>

          <PolicySection heading="2. Informasi yang Kami Kumpulkan">
            <h3 className="text-lg font-semibold text-foreground">
              a. Data yang Diberikan Langsung oleh Pengguna
            </h3>
            <p>
              Website ini tidak memiliki formulir pendaftaran, formulir kontak,
              maupun fitur pembuatan akun. Kami tidak secara otomatis mengumpulkan
              data pribadi Anda melalui website ini.
            </p>
            <p>
              Apabila Anda memilih untuk menghubungi kami melalui tautan WhatsApp
              atau tautan email yang tersedia di website ini, Anda akan diarahkan
              keluar dari website menuju aplikasi WhatsApp atau aplikasi email Anda.
              Informasi yang Anda berikan pada percakapan tersebut (misalnya nama,
              nomor telepon, alamat email, atau isi pesan) diberikan langsung kepada
              kami melalui layanan pihak ketiga tersebut (WhatsApp atau penyedia
              email Anda), bukan disimpan oleh sistem website ini.
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              b. Data Teknis dan Perangkat
            </h3>
            <p>
              Website ini di-hosting menggunakan layanan Vercel. Sebagaimana
              umumnya penyedia hosting dan infrastruktur internet, Vercel dapat
              mencatat data teknis dasar secara otomatis saat Anda mengakses
              website, seperti alamat IP, jenis perangkat dan browser, halaman yang
              diakses, dan waktu akses, untuk keperluan operasional, keamanan, dan
              performa layanan. Kami tidak memasang alat analitik, pelacak
              (tracker), atau piksel pemasaran tambahan pada website ini.
            </p>
          </PolicySection>

          <PolicySection heading="3. Penggunaan Informasi">
            <p>Informasi teknis sebagaimana dijelaskan di atas digunakan untuk:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Menjaga website tetap berjalan dengan baik dan aman;</li>
              <li>Mendeteksi dan mencegah penyalahgunaan atau gangguan keamanan;</li>
              <li>Memahami performa teknis website secara umum.</li>
            </ul>
            <p>
              Kami tidak menjual, menyewakan, atau membagikan informasi pengunjung
              kepada pihak ketiga untuk kepentingan pemasaran.
            </p>
          </PolicySection>

          <PolicySection heading="4. Cookies dan Teknologi Serupa">
            <p>
              Website ini tidak memasang cookie pelacakan (tracking cookies) atau
              menggunakan penyimpanan lokal (localStorage/sessionStorage) untuk
              mengumpulkan data pengunjung. Penyedia hosting (Vercel) dan peta
              tertanam (Google Maps, lihat bagian 5) dapat menggunakan cookie
              teknis sesuai dengan kebijakan privasi masing-masing layanan
              tersebut, di luar kendali langsung kami.
            </p>
          </PolicySection>

          <PolicySection heading="5. Layanan Pihak Ketiga">
            <p>Website ini menggunakan layanan pihak ketiga berikut:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Google Maps</span> —
                digunakan untuk menampilkan peta lokasi toko kami secara langsung
                di halaman Kontak. Saat peta dimuat, Google dapat mengumpulkan data
                sesuai dengan kebijakan privasi Google.
              </li>
              <li>
                <span className="font-medium text-foreground">WhatsApp</span> —
                tautan &ldquo;Hubungi via WhatsApp&rdquo; akan membuka aplikasi atau
                situs WhatsApp milik Meta. Percakapan yang terjadi melalui WhatsApp
                tunduk pada kebijakan privasi WhatsApp/Meta.
              </li>
              <li>
                <span className="font-medium text-foreground">Vercel</span> —
                penyedia layanan hosting dan infrastruktur untuk menjalankan
                website ini (lihat bagian 2b).
              </li>
            </ul>
            <p>
              Kami tidak menggunakan alat analitik pihak ketiga (seperti Google
              Analytics), piksel iklan (seperti Meta Pixel), sistem pembayaran
              online, atau login pihak ketiga pada website ini.
            </p>
          </PolicySection>

          <PolicySection heading="6. Keamanan Data">
            <p>
              Kami mengandalkan langkah-langkah keamanan standar dari penyedia
              hosting untuk melindungi website ini dari akses yang tidak sah.
              Karena website ini tidak mengumpulkan atau menyimpan data pribadi
              pengguna dalam basis data milik kami, risiko kebocoran data pribadi
              melalui website ini relatif minim.
            </p>
          </PolicySection>

          <PolicySection heading="7. Penyimpanan Data">
            <p>
              Kami tidak menyimpan data pribadi pengunjung di server atau basis
              data milik kami sendiri. Data teknis dasar yang tercatat oleh
              penyedia hosting (lihat bagian 2b) disimpan dan dikelola sesuai
              kebijakan retensi data dari penyedia tersebut.
            </p>
          </PolicySection>

          <PolicySection heading="8. Hak Pengguna">
            <p>
              Karena website ini tidak mengumpulkan atau menyimpan data pribadi
              Anda secara langsung, tidak ada data pribadi dalam sistem kami yang
              perlu diakses, diperbarui, atau dihapus. Jika Anda pernah menghubungi
              kami melalui WhatsApp atau email dan ingin percakapan tersebut
              dihapus dari perangkat/akun kami, Anda dapat menghubungi kami melalui
              informasi kontak pada bagian 11 untuk mengajukan permintaan tersebut.
            </p>
          </PolicySection>

          <PolicySection heading="9. Privasi Anak">
            <p>
              Website ini ditujukan untuk pengunjung dewasa dan tidak ditujukan
              maupun dipasarkan kepada anak-anak. Kami tidak dengan sengaja
              mengumpulkan data pribadi dari anak di bawah umur melalui website
              ini.
            </p>
          </PolicySection>

          <PolicySection heading="10. Perubahan Kebijakan Privasi">
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu
              untuk mencerminkan perubahan pada website atau praktik kami.
              Perubahan akan berlaku sejak tanggal pembaruan dipublikasikan pada
              halaman ini.
            </p>
          </PolicySection>

          <PolicySection heading="11. Kontak">
            <p>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan
              hubungi kami melalui:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Email: {siteConfig.contact.email}</li>
              <li>WhatsApp: {siteConfig.contact.whatsapp}</li>
              <li>Alamat: {siteConfig.contact.address}</li>
            </ul>
          </PolicySection>

          <p className="text-sm text-foreground-subtle">
            Tanggal berlaku: {effectiveDate}
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
