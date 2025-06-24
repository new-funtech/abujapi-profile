import Button from "@/components/Button";

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
          <Button href="/docs" variant="primary" size="md">
            Get Started
          </Button>
          <Button
            href="https://github.com/Ganiramadhan/nextjs-starter"
            target="_blank"
            variant="outline"
            size="md"
          >
            View on GitHub
          </Button>
        </div>
      </div>
    </main>
  );
}
