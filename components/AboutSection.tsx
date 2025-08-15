import Image from "next/image";
import partner1 from "@/public/images/logo.png";
import partner2 from "@/public/images/bumn-logo.png";
import partner3 from "@/public/images/kemenhan-logo.png";
import partner4 from "@/public/images/akpol-logo.png";
import partner5 from "@/public/images/polri-logo.png";
import partner6 from "@/public/images/kemenkes-logo.png";

export default function AboutSection() {
  const partners = [
    { src: partner1, alt: "Logo ABUJAPI" },
    { src: partner2, alt: "Logo BUMN" },
    { src: partner3, alt: "Logo Kementerian Pertahanan" },
    { src: partner4, alt: "Logo Akademi Kepolisian" },
    { src: partner5, alt: "Logo Kepolisian Republik Indonesia" },
    { src: partner6, alt: "Logo Kementerian Kesehatan" },
  ];

  return (
    <section
      id="about"
      role="region"
      aria-label="Mitra dan Kolaborator ABUJAPI Jabar"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Mitra & Kolaborator
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          Kami bekerja sama dengan instansi pemerintah, perusahaan swasta, dan
          lembaga pelatihan untuk menciptakan tenaga pengamanan yang
          profesional.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={100}
                className="h-auto max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
