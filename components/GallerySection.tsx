import Image from "next/image";
import {
  FaUsers,
  FaUserFriends,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import galleryImage1 from "@/public/images/carouselItem1.png";
import galleryImage2 from "@/public/images/carouselItem2.png";

export default function GallerySection() {
  const infoItems = [
    { icon: <FaUsers />, title: "Anggota", count: "500+" },
    { icon: <FaUserFriends />, title: "Komunitas", count: "20+" },
    { icon: <FaCalendarAlt />, title: "Agenda Acara", count: "50+" },
    { icon: <FaCreditCard />, title: "Pembayaran Online", count: "1000+" },
  ];

  return (
    <section
      id="gallery"
      role="region"
      aria-label="Galeri ABUJAPI Jabar"
      className="bg-white py-16 md:py-24"
    >
      <div className="space-y-12 md:space-y-20">
        {/* Bagian 1: Penguatan Kompetensi Satpam */}
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] max-w-[280px]">
            <Image
              src={galleryImage1}
              alt="Penguatan Kompetensi Satpam"
              width={280}
              height={168}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          <div className="flex-[7] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Penguatan Kompetensi Satpam
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Bagian 2: Kemitraan Strategis */}
        <div className="bg-gray-100 w-full py-10 md:py-12">
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Kemitraan Strategis
              </h3>
              <p className="text-gray-600 mb-4 text-base md:text-lg">
                Kerja sama dengan kepolisian, pemerintah, dan swasta untuk
                memperluas peran Satpam.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-2"
                >
                  <div className="text-xl text-green-600">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian 3: Digitalisasi Layanan */}
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-[5] max-w-[280px]">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={galleryImage2}
                alt="Digitalisasi Layanan"
                width={280}
                height={168}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
          <div className="flex-[7] text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Digitalisasi Layanan
            </h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
