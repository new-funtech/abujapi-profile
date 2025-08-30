"use client";

import Image from "next/image";
import {
  FaUsers,
  FaUserFriends,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import { useState } from "react";
import ComplaintPage from "@components/ComplaintPage";
import Link from "next/link";

export default function GallerySection() {
  // const infoItems = [
  //   { icon: <FaUsers />, title: "Anggota", count: "2,245" },
  //   { icon: <FaUserFriends />, title: "Komunitas", count: "45" },
  //   { icon: <FaCalendarAlt />, title: "Agenda Acara", count: "50" },
  //   { icon: <FaCreditCard />, title: "Pembayaran Online", count: "650" },
  // ];

  // const galleryImages = [
  //   "https://storage.ganipedia.xyz/abujapi/assets/gallery6.jpeg",
  //   "https://storage.ganipedia.xyz/abujapi/assets/gallery7.jpeg",
  //   "https://storage.ganipedia.xyz/abujapi/assets/gallery8.jpeg",
  //   "https://storage.ganipedia.xyz/abujapi/assets/gallery9.jpeg",
  // ];

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
          <div className="flex-[5] w-full relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 md:rounded-2xl">
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[400px] overflow-hidden group">
              <Image
                src="https://storage.ganipedia.xyz/abujapi/assets/gallery7.jpeg"
                alt="Penguatan Kompetensi Satpam"
                width={500}
                height={400}
                unoptimized
                className="object-cover rounded-2xl w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110 md:rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-5">
                {/* <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 line-clamp-2">
                  Penguatan Kompetensi Satpam
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                  Program pelatihan dan sertifikasi untuk meningkatkan
                  profesionalisme Satpam.
                </p> */}
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

        {/* Bagian 2: Kemitraan Strategis */}
        {/* <div className="bg-gradient-to-b from-gray-50 to-white w-full py-10 md:py-12">
          <div className="max-w-screen-xl mx-auto px-6 md:px-18 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 px-2 md:px-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-3">
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                  </div>
                  <div className="text-center pt-10">
                    <p className="text-gray-800 font-bold text-xl md:text-2xl">
                      {item.count}
                    </p>
                    <h4 className="text-sm md:text-base text-gray-600 font-medium mt-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 text-center md:text-left px-2 md:px-4">
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <Link key={index} href="/profil/galeri">
                    <div className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        width={500}
                        height={400}
                        unoptimized
                        className="object-cover rounded-xl w-full h-[20vh] sm:h-[30vh] md:h-[200px] transform transition-transform duration-500 ease-out hover:scale-105"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Bagian 3: Digitalisasi Layanan */}
        {/* <div className="max-w-screen-xl mx-auto px-6 md:px-18 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[400px] overflow-hidden group">
              <Image
                src="https://storage.ganipedia.xyz/abujapi/assets/gallery2.jpeg"
                alt="Digitalisasi Layanan"
                width={500}
                height={400}
                unoptimized
                className="object-cover rounded-2xl w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 line-clamp-2">
                  Digitalisasi Layanan
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                  Sistem berbasis web untuk administrasi dan pelaporan yang
                  efisien.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[7] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Digitalisasi Layanan
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg text-justify">
              BPD ABUJAPI Jawa Barat berkomitmen untuk menghadirkan layanan yang
              cepat, transparan, dan mudah diakses melalui pemanfaatan teknologi
              digital. Dengan sistem berbasis web, anggota dapat mengurus
              administrasi, pelatihan, hingga pelaporan secara online.
              Transformasi digital ini diharapkan mampu meningkatkan efisiensi
              kerja, memperkuat koordinasi antaranggota, serta memberikan
              pengalaman layanan yang lebih profesional dan modern.
            </p>
            <button
              onClick={() => setIsComplaintOpen(true)}
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-base cursor-pointer"
            >
              Kirim Pengaduan
            </button>
          </div>
        </div> */}
      </div>
      <ComplaintPage
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />
    </section>
  );
}
