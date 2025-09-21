"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsShield, BsStar, BsAward } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import partner1 from "@/public/images/logo.png";
import partner2 from "@/public/images/bumn-logo.png";
import partner3 from "@/public/images/kemenhan-logo.png";
import partner4 from "@/public/images/akpol-logo.png";
import partner5 from "@/public/images/polri-logo.png";
import partner6 from "@/public/images/kemenkes-logo.png";

export default function AboutSection() {

  const partners = [
    { 
      id: 1, 
      name: "ABUJAPI", 
      image: partner1, 
      description: "Asosiasi Bujang Jaga Pengamanan Indonesia" 
    },
    { 
      id: 2, 
      name: "BUMN", 
      image: partner2, 
      description: "Badan Usaha Milik Negara" 
    },
    { 
      id: 3, 
      name: "Kementerian Pertahanan", 
      image: partner3, 
      description: "Kementerian Pertahanan Republik Indonesia" 
    },
    { 
      id: 4, 
      name: "AKPOL", 
      image: partner4, 
      description: "Akademi Kepolisian" 
    },
    { 
      id: 5, 
      name: "POLRI", 
      image: partner5, 
      description: "Kepolisian Negara Republik Indonesia" 
    },
    { 
      id: 6, 
      name: "Kementerian Kesehatan", 
      image: partner6, 
      description: "Kementerian Kesehatan Republik Indonesia" 
    },
  ];

const stats = [
  { icon: FaHandshake, number: "50+", label: "Mitra Kerjasama" },
  { icon: BsShield, number: "15+", label: "Tahun Pengalaman" },
  { icon: BsStar, number: "100%", label: "Komitmen Kualitas" },
  { icon: BsAward, number: "24/7", label: "Layanan Terpercaya" },
];  return (
    <section 
      className="relative py-16 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-indigo-50/40 overflow-hidden"
    >
      {/* Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="partner-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#partner-grid)" />
        </svg>
        
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Tentang Kami
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ABUJAPI (Asosiasi Bujang Jaga Pengamanan Indonesia) adalah organisasi profesional yang 
            berkomitmen memberikan layanan keamanan terbaik dengan integritas tinggi dan standar internasional.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-white/30"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white text-lg" />
              </div>
              <div className="text-xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Mitra Kerjasama
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dipercaya oleh berbagai instansi pemerintah dan swasta untuk memberikan layanan keamanan terbaik
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="relative aspect-square flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={100}
                    height={100}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center p-4">
                  <div className="text-white text-center">
                    <h4 className="font-semibold text-sm mb-1">{partner.name}</h4>
                    <p className="text-xs opacity-90">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bergabunglah dengan Mitra Terpercaya
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari jaringan keamanan profesional yang telah dipercaya 
              oleh berbagai instansi di seluruh Indonesia.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Hubungi Kami
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
