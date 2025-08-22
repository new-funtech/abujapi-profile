"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const carouselImages = [
    "/images/carouselItem1.png",
    "/images/carouselItem2.png",
    "/images/carouselItem3.png",
  ];

  return (
    <div className="w-full max-w-full sm:max-w-md">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {carouselImages.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={img}
                alt={`Carousel ${index + 1}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
