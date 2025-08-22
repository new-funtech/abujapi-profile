import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import newsData from "@utils/newsData";


export default function NewsPage() {
  const newsList = newsData(); 

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

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
