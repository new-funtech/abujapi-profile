export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-sky-100 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          🚀 Next.js Starter Kit
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Build modern web apps faster with TypeScript, Tailwind CSS, and
          powerful defaults. Ready to scale from day one.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/docs"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="https://github.com/Ganiramadhan/nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-5 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
