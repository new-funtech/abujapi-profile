"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import carousel1 from "@/public/images/carouselItem1.png";
import carousel2 from "@/public/images/carouselItem2.png";
import carousel3 from "@/public/images/carouselItem3.png";


export default function HeroCarousel() {
  const carouselImages = [carousel1, carousel2, carousel3];

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
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
