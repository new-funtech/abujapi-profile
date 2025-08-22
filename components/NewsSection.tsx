"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import newsData from "@utils/newsData";

import "swiper/css";
import "swiper/css/pagination";

export default function NewsSection() {
  const newsItems = newsData();

  return (
    <section
      id="news"
      aria-label="Berita dan Informasi BPD Abujapi Jabar"
      className="bg-gray-50 py-12 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
          Berita & Informasi Terbaru BPD Abujapi Jabar
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Dapatkan berita terbaru, agenda kegiatan, dan informasi penting
          seputar BPD Abujapi Jabar. Simak perkembangan industri pengamanan,
          keanggotaan, serta program pelatihan dan sertifikasi.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16} 
          slidesPerView={1}
          loop={true} 
          grabCursor={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="relative"
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.slug}>
              <div className="group relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                {/* Image */}
                <div className="w-full h-48 sm:h-56 md:h-60 relative">
                  <Image
                    src={item.main_image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg md:text-lg font-semibold mb-1 line-clamp-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-2">
                    {item.date} — {item.location}
                  </p>

                  <div className="flex-1">
                    <p className="text-gray-700 text-sm sm:text-base mb-3 line-clamp-3">
                      {item.highlights.join(" ")}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={item.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 text-white text-xs sm:text-sm font-semibold py-2 px-3 rounded-lg shadow hover:bg-green-700 hover:shadow-md transition-all duration-300 w-full text-center"
                  >
                    Detail Berita <FaArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="custom-pagination mt-6 flex justify-center"></div>
        </Swiper>
      </div>
    </section>
  );
}
