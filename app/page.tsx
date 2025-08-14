import Navbar from "@components/Navbar";
import HeroSection from "@components/HeroSection";
import AboutSection from "@components/AboutSection";
import ServicesSection from "@components/ServicesSection";
import GallerySection from "@components/GallerySection";
import NewsSection from "@components/NewsSection";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <NewsSection />
      <Footer />
    </main>
  );
}
