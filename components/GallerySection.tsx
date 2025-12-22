"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowRight, BsShield, BsPeople, BsAward } from "react-icons/bs";
import ComplaintPage from "@components/ComplaintPage";
import galleryImage from "@images/heroCarousel3.jpeg";

export default function GallerySection() {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  const features = [
    {
      icon: BsShield,
      title: "Profesionalitas",
      description: "Standar pelatihan dan sertifikasi keamanan terbaik"
    },
    {
      icon: BsPeople,
      title: "Jaringan Kuat",
      description: "Koordinasi antar perusahaan jasa pengamanan"
    },
    {
      icon: BsAward,
      title: "Kualitas Terjamin",
      description: "Komitmen memberikan layanan keamanan terpercaya"
    }
  ];

  return (
    <section
      id="gallery"
      role="region"
      aria-label="Dokumentasi ABUJAPI Jabar"
      className="relative py-16 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-32 right-16 w-8 h-8 bg-gray-200 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gray-300 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tentang ABUJAPI Jabar
          </h2>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/30 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                <Image
                  src={galleryImage}
                  alt="Penguatan Kompetensi Satpam ABUJAPI Jabar"
                  fill
                  className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  Asosiasi Bujang Jaga Pengamanan Indonesia
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  ABUJAPI adalah asosiasi resmi yang menaungi Badan Usaha Jasa Pengamanan (BUJP) 
                  di seluruh Indonesia. Organisasi ini berfungsi sebagai wadah koordinasi, 
                  komunikasi, dan pembinaan perusahaan jasa pengamanan.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  BPD ABUJAPI Jabar adalah perpanjangan dari kepengurusan ABUJAPI di tingkat 
                  provinsi Jawa Barat, menghubungkan BUJP dengan berbagai pihak eksternal.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-white/30"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="/profil"
                  className="group inline-flex items-center space-x-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
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
