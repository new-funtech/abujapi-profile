"use client";

import Image from "next/image";
import { useState } from "react";
import ComplaintPage from "@components/ComplaintPage";
import galleryImage from "@images/heroCarousel3.jpeg";

export default function GallerySection() {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  return (
    <section
      id="gallery"
      role="region"
      aria-label="Dokumentasi ABUJAPI Jabar"
      className="bg-white py-16 md:py-24"
    >
      <div className="space-y-12 md:space-y-20">
        {/* Bagian 1: Penguatan Kompetensi Satpam */}
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-18 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] w-full relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[400px] overflow-hidden group">
              <Image
                src={galleryImage}
                alt="Penguatan Kompetensi Satpam"
                fill
                className="object-cover rounded-2xl transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-5">
                {/* Overlay content bisa ditambahkan di sini */}
              </div>
            </div>
          </div>

          <div className="flex-[7] text-center md:text-left">
            <p className="text-gray-600 mb-4 text-base md:text-lg text-justify">
              ABUJAPI adalah asosiasi resmi yang menaungi Badan Usaha Jasa
              Pengamanan (BUJP) di seluruh Indonesia. Organisasi ini berfungsi
              sebagai wadah koordinasi, komunikasi, dan pembinaan perusahaan
              jasa pengamanan (security service). <br /> <br />
              BPD ABUJAPI Jabar adalah perpanjangan dari kepengurusan ABUJAPI di
              tingkat provinsi Jawa Barat. Perannya menghubungkan BUJP di
              wilayah Jawa Barat dengan BPP ABUJAPI (pusat) serta bersinergi
              dengan pihak eksternal seperti Polri, pemerintah daerah, dunia
              usaha, dan lembaga pendidikan/sertifikasi.
            </p>
            <a
              href="/profil"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-base"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>

      <ComplaintPage
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />
    </section>
  );
}
