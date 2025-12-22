"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNews } from "@/hooks/useNews";

import "swiper/css";
import "swiper/css/pagination";

export default function NewsSection() {
  const { news: newsItems, loading, error } = useNews();

  if (loading) {
    return (
      <section
        id="news"
        aria-label="Berita dan Informasi BPD Abujapi Jabar"
        className="bg-white py-16 md:py-20"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Berita & Informasi
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-base max-w-2xl mx-auto">
              Ikuti perkembangan terkini, kegiatan, dan informasi penting dari 
              BPD ABUJAPI Jabar untuk tetap terhubung dengan komunitas profesional keamanan.
            </p>
          </div>

          {/* Loading skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse mb-3 w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse mb-4 w-4/5"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !newsItems) {
    return (
      <section
        id="news"
        aria-label="Berita dan Informasi BPD Abujapi Jabar"
        className="bg-white py-16 md:py-20"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Berita & Informasi
            </h2>
            <p className="mt-3 text-gray-600">
              Maaf, terjadi kesalahan saat memuat berita. Silakan coba lagi nanti.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="news"
      aria-label="Berita dan Informasi BPD Abujapi Jabar"
      className="bg-white py-16 md:py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Berita & Informasi
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-base max-w-2xl mx-auto">
            Ikuti perkembangan terkini, kegiatan, dan informasi penting dari 
            BPD ABUJAPI Jabar untuk tetap terhubung dengan komunitas profesional keamanan.
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
          {newsItems.slice(0, 6).map((item) => (
            <SwiperSlide key={item.slug}>
              <div className="relative bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5">
                {/* Image */}
                <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover rounded-t-xl transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold mb-2 line-clamp-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    {item.date} — {item.location}
                  </p>

                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/berita/${item.slug}`}
                    className="group inline-flex items-center justify-center gap-2 bg-blue-800 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 w-full"
                  >
                    <span>Detail Berita</span>
                    <span className="relative w-3 h-3">
                      <FaArrowRight className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1" />
                      <FaArrowUpRightFromSquare className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    </span>
                  </Link>
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
          background: #2563eb;
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
