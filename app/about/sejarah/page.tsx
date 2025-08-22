"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";

export default function SejarahPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header: Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Subheader: Breadcrumb Navigation */}
        <section className="bg-gray-100 py-4">
          <div className="max-w-screen-2xl mx-auto px-6">
            <nav
              className="text-xs text-gray-600 font-medium flex items-center mx-22"
              aria-label="Breadcrumb"
            >
              <span
                className="text-gray-600 mr-2"
                aria-label="Bookmark Sejarah Perusahaan"
              >
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
                  <Link
                    href="/about"
                    className="hover:text-green-600 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <span
                    className="text-green-600 font-semibold"
                    aria-current="page"
                  >
                    Sejarah Perusahaan
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Content with Sidebar and Right Column */}
        <div className="max-w-screen-2xl px-6 py-8 flex flex-col md:flex-row md:items-stretch gap-4 mx-4 md:mx-30">
          {/* Sidebar */}
          <Sidebar pathname={pathname} />

          {/* Main Content */}
          <div className="md:w-3/5 md:border-r md:border-gray-300">
            <section className="mr-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                Sejarah & Perkembangan ABUJAPI Jabar
              </motion.h2>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    1. Awal Keberadaan & Kepemimpinan Awal
                  </h3>
                  <p>
                    Pada 2018, ABUJAPI Jabar menggelar Konferensi Industri Jasa
                    Pengamanan Nasional (KIPNAS) untuk menentang masuknya
                    perusahaan jasa pengamanan asing, serta mendorong
                    sertifikasi profesional bagi satpam lokal. Ketua BPD ABUJAPI
                    Jabar saat itu adalah Komaruddin Khalid. Konferensi ini
                    berlangsung di Bandung dan dibuka secara resmi oleh Presiden
                    Joko Widodo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2. Pembaruan Kepemimpinan
                  </h3>
                  <p>
                    Pada Juni 2019, Agus Vickram resmi terpilih sebagai Ketua
                    Umum BPD ABUJAPI Jabar periode 2019–2024. Ia membawakan visi
                    organisasi yang menekankan lima pilar utama: Konseptual,
                    Konsolidasi, Komitmen, Kongkritisasi, dan Kode Etik.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    3. Pelantikan dan Sinergi Lembaga
                  </h3>
                  <p>
                    Pada 11 Oktober 2019, dilaksanakan pelantikan dan pengukuhan
                    BPD ABUJAPI Jabar di Bandung oleh Dirbinpotmas Baharkam
                    Polri, Brigjen Pol. Drs. Ricky Francois Wakanno. Momentum
                    ini juga digunakan untuk menandatangani kerja sama dengan
                    KADIN Jabar. Tema utama: “Melalui ABUJAPI, Kita Perkuat
                    Hubungan Kelembagaan…”.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Sumber: Amal Khair Yasmin
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4. Penunjukan Korwil & Rakerda 2020
                  </h3>
                  <p>
                    Di akhir 2020, tepatnya 26 November, ABUJAPI Jabar
                    mengadakan Rapat Kerja Daerah (Rakerda) di Bandung. Dalam
                    kesempatan itu, dibentuk tiga Koordinator Wilayah (Korwil):
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Korwil 1: Bogor, Sukabumi, Cianjur</li>
                    <li>Korwil 2: Purwakarta, Subang, Karawang</li>
                    <li>Korwil 3: Cirebon, Indramayu, Kuningan, Majalengka</li>
                  </ul>
                  <p>
                    Rencana pembentukan Korwil untuk Bekasi dan Depok juga
                    disampaikan.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Sumber: Amal Khair Yasmin,{" "}
                    <Link
                      href="https://jurnalsecurity.com"
                      className="underline hover:text-green-600"
                    >
                      jurnalsecurity.com
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    5. Mendorong Sertifikasi dan Profesionalisme
                  </h3>
                  <p>
                    Pada 5 Oktober 2020, ABUJAPI Jabar bekerjasama dengan LSP
                    P-2 Sekuriti PP Polri dan BNSP untuk menyelenggarakan
                    sertifikasi kompetensi Gada Pratama bagi sekitar 200 satpam
                    se-Jawa Barat.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    6. Talk Show & Advokasi Hukum (2022)
                  </h3>
                  <p>
                    Tahun 2022, ABUJAPI Jabar mengadakan talk show bertema
                    “Mewujudkan Pemuliaan Profesi Satpam”, yang dikaitkan dengan
                    UU Cipta Kerja (UU No. 11 Tahun 2020) dan Perpol No. 4 Tahun
                    2020 tentang Pam Swakarsa. Acara ini melibatkan tokoh dari
                    Polri, Disnaker, akademisi, serta komunitas satpam seperti
                    KBS-RI dan PPS.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    7. Rakerda 2023: Digitalisasi & Perlindungan Hukum
                  </h3>
                  <p>
                    Pada 12 Desember 2023, di Karawang, ABUJAPI Jabar menggelar
                    Rakerda dengan tema yang menitikberatkan pada sinergi
                    teknologi digital, konsolidasi keamanan, dan peran BUJP
                    dalam mendukung Polri menghadapi Pemilu 2024. Ketua Umum BPP
                    ABUJAPI, Agoes Dermawan, hadir secara simbolis membuka acara
                    dengan pemukulan gong. Ketua BPD ABUJAPI Jabar, Agus
                    Vickram, juga mengingatkan pentingnya selektivitas dalam
                    penerimaan BUJP. Ditekankan pula bahwa struktur skala upah
                    harus digunakan untuk satpam, menggantikan acuan UMP, agar
                    lebih adil dan mengurangi potensi konflik.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Sumber: Tidak disebutkan
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Search and News */}
          <div className="md:w-1/5">
            <div>
              <input
                type="text"
                placeholder="Cari..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-gray-700"
                aria-label="Pencarian"
              />
            </div>
            <div className="bg-white shadow-md p-4 rounded-md mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Berita Terkini
              </h3>
              <div className="space-y-2">
                <p className="text-xs text-gray-600">Mon, 23/12/2024</p>
                <Link
                  href="/news/abujapi-event-2024"
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  BPD Abujapi Jabar Selenggarakan Acara...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
