import HeroCarousel from "@components/HeroCarousel";

export default function HeroSection() {
  return (
    <section id="home" role="banner" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-12 md:py-24">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Membangun Sinergi & <br />
            Profesionalitas <br />
            <span className="text-green-600">ABUJAPI Jabar</span>
          </h1>
          <p className="text-gray-600 mb-8 text-base sm:text-lg md:pr-10">
            Bersama meningkatkan standar pengamanan melalui pelatihan,
            sertifikasi, dan kolaborasi.
          </p>
          <a
            href="#"
            className="inline-block bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition-colors text-base sm:text-lg"
          >
            Daftar Anggota
          </a>
        </div>

        {/* Right Carousel */}
        <div className="flex-1 flex justify-center w-full">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
