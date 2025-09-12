import HeroCarousel from "@components/HeroCarousel";

import herocarousel1 from "@images/heroCarousel1.jpeg";
import herocarousel2 from "@images/heroCarousel2.jpeg";
import herocarousel3 from "@images/heroCarousel3.jpeg";

const slides = [
  {
    image: herocarousel1,
    alt: "Sinergi dan Profesionalitas ABUJAPI Jabar",
    title: (
      <>
        Membangun Sinergi <br /> & Profesionalitas <br />
        <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
          ABUJAPI Jabar
        </span>
      </>
    ),
    description:
      "Bersama meningkatkan standar pengamanan melalui pelatihan, sertifikasi, dan kolaborasi.",
    primaryBtn: { text: "Daftar Anggota", link: "/profil/keanggotaan" },
    secondaryBtn: { text: "Pelajari Lebih Lanjut", link: "/profil" },
  },
  {
    image: herocarousel2,
    alt: "Jaringan Pengusaha Jasa Pengamanan ABUJAPI Jabar",
    title: (
      <>
        Jaringan <br /> Pengusaha Jasa Pengamanan <br />
        <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
          ABUJAPI Jabar
        </span>
      </>
    ),
    description:
      "Menjadi wadah komunikasi dan koordinasi antar perusahaan jasa pengamanan di Jawa Barat.",
    primaryBtn: { text: "Gabung Sekarang", link: "/profil/keanggotaan" },
    secondaryBtn: { text: "Pelajari Lebih Lanjut", link: "/profil" },
  },
  {
    image: herocarousel3,
    alt: "Laporan dan Pengaduan ABUJAPI Jabar",
    title: (
      <>
        Laporan & Pengaduan <br />
        <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
          ABUJAPI Jabar
        </span>
      </>
    ),
    description: "Lihat program kami secara mudah dan cepat.",
    primaryBtn: { text: "Lihat Program", link: "/profil/galeri" },
    secondaryBtn: { text: "Pelajari Lebih Lanjut", link: "/profil" },
  },
];

export default function HeroSection() {
  return (
    <section id="home" role="banner">
      <HeroCarousel slides={slides} />
    </section>
  );
}
