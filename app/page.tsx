export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <section className="bg-white max-w-xl w-full rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Welcome to BPD Abu Jabar
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          This domain is fully active and operational. We are committed to providing you with the best service and up-to-date information.
        </p>
        <a
          href="https://bpdabujapijabar.or.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-medium px-8 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-colors"
        >
          Visit Official Website
        </a>
      </section>
    </main>
  );
}
