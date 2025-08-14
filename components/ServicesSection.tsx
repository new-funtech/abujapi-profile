import ServiceCard from "./ServiceCard";
import { FaUserCheck, FaHandsHelping, FaNetworkWired } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaUserCheck />,
      title: "Pelatihan & Sertifikasi",
      description:
        "Program pelatihan dan sertifikasi Satpam sesuai standar Kepolisian RI.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Pendampingan & Konsultasi",
      description:
        "Mendampingi anggota dalam penerapan sistem keamanan yang efektif.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Penguatan Organisasi",
      description: "Mengembangkan jejaring dan kolaborasi antar anggota.",
    },
  ];

  return (
    <section
      id="services"
      role="region"
      aria-label="Layanan ABUJAPI Jabar"
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Layanan <span className="text-green-600">Kami</span>
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          BPD ABUJAPI Jabar hadir untuk mendukung pengembangan badan usaha jasa
          pengamanan dan personelnya.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
