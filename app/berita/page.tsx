import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import newsData from "@utils/newsData";
import Link from "next/link";
import { BsBookmarksFill } from "react-icons/bs";

export default function NewsPage() {
  const newsList = newsData();

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Subheader: Breadcrumb Navigation */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-screen-2xl mx-auto px-6">
          <nav
            className="text-sm text-gray-600 font-medium flex items-center mx-22"
            aria-label="Breadcrumb"
          >
            <span className="text-gray-600 mr-2" aria-label="Bookmark Berita">
              <BsBookmarksFill className="w-4 h-4" />
            </span>
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors duration-300"
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

      <section className="flex-1 container mx-auto p-4">
        {newsList.map((news) => (
          <article key={news.slug} className="mb-8 p-4 bg-white rounded shadow">
            <img
              src={news.main_image}
              alt={news.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {news.date} — {news.location}
            </p>
            <p className="mb-2">{news.highlights.join(" ")}</p>
            <a
              href={news.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read more
            </a>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
