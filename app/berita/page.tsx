import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import newsData from "@utils/newsData";
import Link from "next/link";
import { BsBookmarksFill } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Header from "@/components/Header";

export default function NewsPage() {
  const newsList = newsData();

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      {/* <Header/> */}
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center"
            aria-label="Breadcrumb"
          >
            <BsBookmarksFill className="w-4 h-4 mr-2" />
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span
                  className="text-green-600 font-semibold"
                  aria-current="page"
                >
                  Berita
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* News List */}
      <section className="flex-1 max-w-screen-xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Berita Terbaru
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <article
              key={news.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <img
                  src={news.main_image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {news.title}
                </h2>

                <p className="text-gray-500 text-sm flex items-center mb-1">
                  <FaCalendarAlt className="mr-2 text-gray-400" /> {news.date}
                </p>
                <p className="text-gray-500 text-sm flex items-center mb-3">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />{" "}
                  {news.location}
                </p>

                <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">
                  {news.highlights.join(" ")}
                </p>

                <a
                  href={news.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 font-medium hover:text-green-700 transition"
                >
                  Baca Selengkapnya <FaArrowRight className="ml-2 w-4 h-4" />
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
