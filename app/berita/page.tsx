import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import newsData from "@utils/newsData";
import Header from "@/components/Header";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function NewsPage() {
  const newsList = newsData();

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <section className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Berita Terbaru
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsList.map((news) => (
            <article
              key={news.slug}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Gambar */}
              <img
                src={news.main_image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />

              {/* Konten */}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {news.title}
                </h2>

                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-green-600" /> {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-green-600" /> {news.location}
                  </span>
                </div>

                <p className="text-gray-600 text-sm flex-1 line-clamp-3 mb-4">
                  {news.highlights.join(" ")}
                </p>

                <a
                  href={news.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm text-center shadow hover:bg-green-700 hover:scale-105 transition-transform duration-300"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
