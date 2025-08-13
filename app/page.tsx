import Navbar from "@components/Navbar";
import HeroSection from "@components/HeroSection";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
