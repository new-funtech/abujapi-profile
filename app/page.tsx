"use client";

import dynamic from "next/dynamic";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import AnimatedSection from "@components/AnimatedSection";

const HeroSection = dynamic(() => import("@components/HeroSection")); 
const GallerySection = dynamic(() => import("@components/GallerySection"), {
  ssr: false, 
});
const ServicesSection = dynamic(() => import("@components/ServicesSection"), {
  ssr: false,
});
const NewsSection = dynamic(() => import("@components/NewsSection"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("@components/AboutSection"), {
  ssr: false,
});

export default function Home() {
  const sections = [
    { component: HeroSection, key: "hero" },
    { component: GallerySection, key: "gallery" },
    { component: ServicesSection, key: "services" },
    { component: NewsSection, key: "news" },
    { component: AboutSection, key: "about" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {sections.map(({ component: Section, key }) => (
        <AnimatedSection key={key}>
          <Section />
        </AnimatedSection>
      ))}

      <Footer />
    </main>
  );
}
