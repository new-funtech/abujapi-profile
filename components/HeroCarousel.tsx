"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
            alt={slide.alt}
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
              {slides[current].primaryBtn.text && (
                <Link
                  href={slides[current].primaryBtn.link || "#"}
                  className="inline-block border border-white text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base"
                >
                  {slides[current].primaryBtn.text}
                </Link>
              )}
              {slides[current].secondaryBtn.text && (
                <Link
                  href={slides[current].secondaryBtn.link || "#"}
                  className="inline-block border border-white text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base"
                >
                  {slides[current].secondaryBtn.text}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        <div className="absolute bottom-6 w-full flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : "false"}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-green-400 scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
