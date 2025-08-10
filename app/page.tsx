"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 text-white py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl">
              🛡️ BPD Abujapi Jabar
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-lg mx-auto md:mx-0">
              Meningkatkan profesionalisme dan kolaborasi badan usaha jasa
              pengamanan di Jawa Barat.
            </p>
            <Button
              href="/login"
              variant="primary"
              size="lg"
              className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-2xl hover:bg-yellow-300 transition duration-300"
            >
              Masuk Member Area
            </Button>
          </div>
          {/* Optional Image or Illustration could go here */}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
            Layanan & Informasi
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Akses informasi, program, dan layanan yang kami sediakan untuk anggota.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          <FeatureItem
            icon="🛡️"
            title="Tentang Kami"
            desc="Visi, misi, dan tujuan organisasi dalam memajukan jasa pengamanan."
          />
          <FeatureItem
            icon="📅"
            title="Program Kerja"
            desc="Kegiatan, pelatihan, dan rencana kerja untuk meningkatkan kompetensi."
          />
          <FeatureItem
            icon="👥"
            title="Keanggotaan"
            desc="Syarat, pendaftaran, dan manfaat menjadi anggota resmi."
          />
          <FeatureItem
            icon="📰"
            title="Berita & Kegiatan"
            desc="Update informasi terbaru seputar organisasi dan industri."
          />
          <FeatureItem
            icon="📞"
            title="Kontak"
            desc="Hubungi kami untuk pertanyaan atau kerjasama."
          />
          <FeatureItem
            icon="🔒"
            title="Member Area"
            desc="Akses eksklusif untuk anggota terdaftar."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8 text-center">
        <p className="text-sm opacity-80 select-none">
          © {new Date().getFullYear()} BPD Abujapi Jabar. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-gradient-to-tr from-blue-50 to-indigo-50 border border-indigo-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 text-center cursor-default">
      <div className="text-5xl mb-5 text-indigo-700">{icon}</div>
      <h3 className="font-semibold text-xl mb-3 text-indigo-900">{title}</h3>
      <p className="text-gray-700 text-base">{desc}</p>
    </div>
  );
}
