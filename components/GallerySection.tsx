"use client";

import Image from "next/image";
import {
  FaUsers,
  FaUserFriends,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import galleryImage1 from "@/public/images/carouselItem1.png";
import galleryImage2 from "@/public/images/carouselItem2.png";
import { useState } from "react";
import ComplaintPage from "@components/ComplaintPage";

export default function GallerySection() {
  const infoItems = [
    { icon: <FaUsers />, title: "Anggota", count: "2,245" },
    { icon: <FaUserFriends />, title: "Komunitas", count: "45" },
    { icon: <FaCalendarAlt />, title: "Agenda Acara", count: "50" },
    { icon: <FaCreditCard />, title: "Pembayaran Online", count: "650" },
  ];

  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  return (
    <section
      id="gallery"
      role="region"
      aria-label="Galeri ABUJAPI Jabar"
      className="bg-white py-16 md:py-24"
    >
      <div className="space-y-12 md:space-y-20">
        {/* Bagian 1: Penguatan Kompetensi Satpam */}
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] max-w-[280px]">
            <Image
              src={galleryImage1}
              alt="Penguatan Kompetensi Satpam"
              width={280}
              height={168}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          <div className="flex-[7] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Penguatan Kompetensi Satpam
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg">
              PD ABUJAPI Jawa Barat berkomitmen untuk terus meningkatkan
              kompetensi dan profesionalisme Satuan Pengamanan (Satpam) melalui
              pelatihan, sertifikasi, dan uji kompetensi yang sesuai dengan
              standar nasional. Program ini mencakup pembekalan keterampilan
              teknis, pengetahuan hukum, etika profesi, serta kemampuan
              komunikasi yang dibutuhkan dalam menjaga keamanan dan ketertiban.
              Dengan penguatan kompetensi ini, diharapkan Satpam dapat
              memberikan layanan pengamanan yang lebih efektif, humanis, dan
              profesional di berbagai lingkungan kerja.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Bagian 2: Kemitraan Strategis */}
        <div className="bg-gray-50 w-full py-10 md:py-12">
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Kemitraan Strategis
              </h3>
              <p className="text-gray-600 mb-4 text-base md:text-lg">
                Kerja sama dengan kepolisian, pemerintah, dan swasta untuk
                memperluas peran Satpam.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 px-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg flex items-center space-x-3"
                >
                  <div className="text-3xl md:text-4xl text-green-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-lg">
                      {item.count}
                    </p>
                    <h4 className="text-sm text-gray-500">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian 3: Digitalisasi Layanan */}
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] max-w-[280px]">
            <Image
              src={galleryImage2}
              alt="Digitalisasi Layanan"
              width={280}
              height={168}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          <div className="flex-[7] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Digitalisasi Layanan
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg">
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
        </div>
      </div>
      <ComplaintPage
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />
    </section>
  );
}
