import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import newsImage1 from "@/public/images/news-1.jpg";
import newsImage2 from "@/public/images/news-2.jpg";
import newsImage3 from "@/public/images/news-3.jpg";

export default function NewsSection() {
  const newsItems = [
    {
      image: newsImage1,
      title: "Pelantikan Pengurus Baru BPD Abujapi Jabar 2025–2028",
      alt: "Pelantikan Pengurus Baru BPD Abujapi Jabar",
    },
    {
      image: newsImage2,
      title: "Pelatihan Satpam Gada Pratama Angkatan 15",
      alt: "Pelatihan Satpam Gada Pratama",
    },
    {
      image: newsImage3,
      title: "Rapat Koordinasi & Evaluasi Program Kerja 2025",
      alt: "Rapat Koordinasi BPD Abujapi Jabar",
    },
  ];

  return (
    <section
      id="news"
      role="region"
      aria-label="Berita dan Informasi BPD Abujapi Jabar"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Berita & Informasi Terbaru BPD Abujapi Jabar
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          Dapatkan berita terbaru, agenda kegiatan, dan informasi penting
          seputar BPD Abujapi Jabar. Simak perkembangan industri pengamanan,
          keanggotaan, serta program pelatihan dan sertifikasi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="relative group mb-16 sm:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-56 sm:h-64 md:h-72">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 mx-auto w-11/12 bg-white p-5 rounded-lg shadow-lg transform translate-y-12 group-hover:-translate-y-8 transition-all duration-300 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors text-sm"
                >
                  Detail Berita
                  <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
