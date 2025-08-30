"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      image: "https://storage.ganipedia.xyz/abujapi/assets/gallery1.jpeg",
      title: "Pelatihan & Sertifikasi",
      subtitle:
        "Sertifikasi Gada Pratama untuk satpam sesuai Perpol No. 4/2020.",
    },
    // {
    //   image: "https://storage.ganipedia.xyz/abujapi/assets/gallery2.jpeg",
    //   title: "Advokasi & Hukum",
    //   subtitle: "Pendampingan hukum dan pengurusan SIO untuk BUJP.",
    // },
    // {
    //   image: "https://storage.ganipedia.xyz/abujapi/assets/gallery3.jpeg",
    //   title: "Konsolidasi & Jaringan",
    //   subtitle: "Membangun jejaring antar BUJP dan pihak eksternal.",
    // },
    // {
    //   image: "https://storage.ganipedia.xyz/abujapi/assets/gallery4.jpeg",
    //   title: "Promosi Jasa Lokal",
    //   subtitle: "Dorong penggunaan BUJP lokal bersama KADIN Jabar.",
    // },
    // {
    //   image: "https://storage.ganipedia.xyz/abujapi/assets/gallery5.jpeg",
    //   title: "Pengembangan Organisasi",
    //   subtitle: "Program strategis melalui Rakerda untuk BUJP.",
    // },
    {
      image: "https://storage.ganipedia.xyz/abujapi/assets/gallery9.jpeg",
      title: "Kegiatan Komunitas",
      subtitle: "Turnamen olahraga dan budaya Senyum, Sapa, Salam.",
    },
    {
      image: "https://storage.ganipedia.xyz/abujapi/assets/gallery7.jpeg",
      title: "Kerja Sama Lembaga",
      subtitle: "Sinergi dengan Polri, KADIN, dan BPJS Ketenagakerjaan.",
    },
  ];

  return (
    <section
      id="services"
      aria-label="Layanan BPD ABUJAPI Jabar"
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Layanan Kami
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Temukan berbagai layanan kami untuk mendukung profesionalisme dan
            pengembangan industri jasa pengamanan di Jawa Barat.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-[400px] border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover rounded-2xl transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination mt-10 flex justify-center gap-2"></div>
        </Swiper>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #16a34a;
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
