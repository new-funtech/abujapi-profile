import HeroCarousel from "@components/HeroCarousel";

import herocarousel1 from "@images/heroCarousel1.jpeg";
import herocarousel2 from "@images/heroCarousel2.jpeg";
import herocarousel3 from "@images/heroCarousel3.jpeg";

const slides = [
  {
    image: herocarousel3,
    alt: "Sinergi dan Profesionalitas ABUJAPI Jabar",
    title: (
      <>
        Sinergi & Profesionalitas <br />
        <span className="font-bold">
          ABUJAPI Jabar
        </span>
      </>
    ),
    description:
      "Meningkatkan standar pengamanan melalui pelatihan dan sertifikasi profesional.",
    primaryBtn: { text: "Daftar Anggota", link: "/profil/keanggotaan" },
    secondaryBtn: { text: "Selengkapnya", link: "/profil" },
  },
  {
    image: herocarousel2,
    alt: "Jaringan Pengusaha Jasa Pengamanan ABUJAPI Jabar",
    title: (
      <>
        Jaringan Pengusaha <br />
        <span className="font-bold">
          Jasa Pengamanan
        </span>
      </>
    ),
    description:
      "Wadah komunikasi dan koordinasi perusahaan jasa pengamanan di Jawa Barat.",
    primaryBtn: { text: "Gabung Sekarang", link: "/profil/keanggotaan" },
    secondaryBtn: { text: "Selengkapnya", link: "/profil" },
  },
  {
    image: herocarousel1,
    alt: "Laporan dan Pengaduan ABUJAPI Jabar",
    title: (
      <>
        Laporan & Pengaduan <br />
        <span className="font-bold">
          ABUJAPI Jabar
        </span>
      </>
    ),
    description: "Layanan laporan dan pengaduan yang mudah dan responsif.",
    primaryBtn: { text: "Lihat Program", link: "/profil/galeri" },
    secondaryBtn: { text: "Selengkapnya", link: "/profil" },
  },
];

export default function HeroSection() {
  return (
    <section id="home" role="banner">
      <HeroCarousel slides={slides} />
    </section>
  );
}
