// components/HeroSection.tsx
"use client";

import HeroCarousel from "@components/HeroCarousel";

const slides = [
  {
    image: "https://storage.ganipedia.xyz/abujapi/assets/gallery5.jpeg",
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
    image: "https://storage.ganipedia.xyz/abujapi/assets/gallery6.jpeg",
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
    image: "https://storage.ganipedia.xyz/abujapi/assets/gallery8.jpeg",
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
