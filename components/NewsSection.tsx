"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Berita & Informasi Terbaru
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Dapatkan berita terbaru, agenda kegiatan, serta informasi penting seputar
            BPD Abujapi Jabar. Selalu up-to-date dengan perkembangan industri.
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
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.slug}>
              <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden group">
                  <Image
                    src={item.main_image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover rounded-t-2xl transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">
                    {item.date} — {item.location}
                  </p>

                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.highlights.join(" ")}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium border border-green-200"
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
                    className="group inline-flex items-center justify-center gap-2 bg-green-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-md hover:bg-green-700 transition-all duration-300 w-full"
                  >
                    <span>Detail Berita</span>
                    <span className="relative w-4 h-4">
                      <FaArrowRight className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1" />
                      <FaArrowUpRightFromSquare className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    </span>
                  </a>
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
