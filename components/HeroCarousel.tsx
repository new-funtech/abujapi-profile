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
    <div className="w-full max-w-md">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {carouselImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Carousel ${index + 1}`}
              width={500} 
              height={300}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
