"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight, BsPlay } from "react-icons/bs";

type Slide = {
  image: string | StaticImageData;
  alt: string;
  title: React.ReactNode;
  description: string;
  primaryBtn: { text: string; link: string | null };
  secondaryBtn: { text: string; link: string | null };
};

type HeroCarouselProps = {
  slides: Slide[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide with pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full h-[100vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <svg className="absolute top-20 right-20 w-24 h-24 text-white/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 13.74L18.18 20.74L12 17.27L5.82 20.74L7 13.74L2 9L8.91 8.26L12 2Z"/>
        </svg>
        <svg className="absolute bottom-20 left-20 w-20 h-20 text-white/8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H15.5L19 6.5V9H21ZM7 13C8.1 13 9 13.9 9 15S8.1 17 7 17 5 16.1 5 15 5.9 13 7 13ZM19 17C19 18.1 18.1 19 17 19S15 18.1 15 17 15.9 15 17 15 19 15.9 19 17Z"/>
        </svg>
        <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-white/6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-green-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-emerald-300/20 rounded-full animate-pulse"></div>
      </div>

      {/* Enhanced Carousel Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
      ))}

      {/* Enhanced Content with Better Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center text-white space-y-4"
            >
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md border border-white/20"
              >
                <BsPlay className="w-3 h-3 mr-1.5" />
                ABUJAPI Jawa Barat
              </motion.div>

              {/* Enhanced Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-lg"
              >
                {slides[current].title}
              </motion.h1>

              {/* Enhanced Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md"
              >
                {slides[current].description}
              </motion.p>

              {/* Enhanced Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              >
                {slides[current].primaryBtn.text && (
                  <Link
                    href={slides[current].primaryBtn.link || "#"}
                    className="group inline-flex items-center justify-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    {slides[current].primaryBtn.text}
                    <motion.span
                      className="ml-1.5"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                )}
                {slides[current].secondaryBtn.text && (
                  <Link
                    href={slides[current].secondaryBtn.link || "#"}
                    className="inline-flex items-center justify-center border-2 border-white/70 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {slides[current].secondaryBtn.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <BsChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <BsChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Enhanced Indicator Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : "false"}
            className={`relative transition-all duration-300 ${
              index === current 
                ? "w-12 h-3 bg-white rounded-full" 
                : "w-3 h-3 bg-white/60 rounded-full hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
