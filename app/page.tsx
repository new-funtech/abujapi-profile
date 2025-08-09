"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              🏢 BPD Abujapi Jabar
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Meningkatkan profesionalisme dan kolaborasi badan usaha jasa
              pengamanan di Jawa Barat.
            </p>
            <Button
              href="/login"
              variant="primary"
              size="lg"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Masuk Member Area
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="https://i.pinimg.com/736x/88/c5/54/88c5548281b71c1632dd69b0e6274171.jpg"
              alt="Logo BPD Abujapi Jabar"
              width={300}
              height={300}
              className="rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Layanan & Informasi
          </h2>
          <p className="text-gray-600 mt-3">
            Akses informasi, program, dan layanan yang kami sediakan untuk anggota.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureItem
            icon="📄"
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
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p className="text-sm opacity-80">
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
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 text-center animate-fadeInUp">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
