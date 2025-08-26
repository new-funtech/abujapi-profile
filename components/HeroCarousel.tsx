// components/HeroCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  image: string;
  title: React.ReactNode;
  description: string;
  primaryBtn: { text: string; link: string | null };
  secondaryBtn: { text: string; link: string | null };
};

type HeroCarouselProps = {
  slides: Slide[];
  onSecondaryBtnClick?: (link: string | null) => void;
};

export default function HeroCarousel({
  slides,
  onSecondaryBtnClick,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Full Carousel Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay Text with Animation */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-white space-y-6 px-6"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
              {slides[current].title}
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
              {slides[current].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={slides[current].primaryBtn.link || "#"}
                className="inline-block border border-white text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                {slides[current].primaryBtn.text}
              </a>
              {slides[current].secondaryBtn.text && (
                <button
                  onClick={() =>
                    onSecondaryBtnClick?.(slides[current].secondaryBtn.link)
                  }
                  className="inline-block border border-white text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base"
                >
                  {slides[current].secondaryBtn.text}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-green-400 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
