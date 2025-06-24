import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          🚀 Next.js Modern Starter Kit
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A sleek, powerful, and scalable boilerplate to kickstart your Next.js
          app with best practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
          <FeatureItem
            title="TypeScript"
            desc="Strongly typed support for scalable code."
          />
          <FeatureItem
            title="ESLint + Prettier"
            desc="Lint and auto-format your code for consistency."
          />
          <FeatureItem
            title="JWT Auth"
            desc="Secure authentication using JSON Web Tokens."
          />
          <FeatureItem
            title="RTK Query"
            desc="Efficient data fetching & caching with Redux Toolkit."
          />
          <FeatureItem
            title="Husky + Lint-Staged"
            desc="Prevent bad commits with Git hooks."
          />
        </div>

        <Link
          href="/login"
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow"
        >
          Get Started →
        </Link>
      </div>
    </main>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
