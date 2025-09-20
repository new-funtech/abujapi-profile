"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsShield, BsAward, BsPeople, BsArrowRight } from "react-icons/bs";

import serviceImage1 from "@images/heroCarousel2.jpeg";
import serviceImage2 from "@images/serviceImage1.jpeg";
import serviceImage3 from "@images/serviceImage2.jpeg";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const services = [
    {
      id: 1,
      image: serviceImage1,
      icon: BsAward,
      title: "Pelatihan & Sertifikasi",
      subtitle: "Sertifikasi Gada Pratama untuk satpam sesuai Perpol No. 4/2020.",
      features: ["Sertifikasi Resmi", "Pelatihan Berkualitas", "Standar Nasional"],
      link: "/profil/sejarah"
    },
    {
      id: 2,
      image: serviceImage2,
      icon: BsPeople,
      title: "Kegiatan Komunitas",
      subtitle: "Turnamen olahraga dan budaya Senyum, Sapa, Salam.",
      features: ["Event Olahraga", "Kegiatan Sosial", "Networking"],
      link: "/profil/galeri"
    },
    {
      id: 3,
      image: serviceImage3,
      icon: BsShield,
      title: "Kerja Sama Lembaga",
      subtitle: "Sinergi dengan Polri, KADIN, dan BPJS Ketenagakerjaan.",
      features: ["Partnership Resmi", "Kolaborasi Strategis", "Dukungan Penuh"],
      link: "/profil/visi-misi"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="Layanan BPD ABUJAPI Jabar"
      className="relative bg-white py-16 md:py-20 overflow-hidden"
    >
      {/* Background Elements - Minimal */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200 mb-6"
          >
            <BsShield className="w-4 h-4 mr-2" />
            Layanan Unggulan
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900"
          >
            Layanan Profesional
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Temukan berbagai layanan unggulan kami untuk mendukung profesionalisme dan 
            pengembangan industri jasa pengamanan di Jawa Barat.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Link key={service.id} href={service.link} className="block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden h-[420px] border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Service Icon */}
                  <div className="absolute top-4 left-4 bg-green-800/80 backdrop-blur-sm p-2.5 rounded-lg shadow-md">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Service Number Badge */}
                  <div className="absolute top-4 right-4 bg-green-800/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col h-[164px]">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.subtitle}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="inline-flex items-center justify-center bg-gray-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
                    <span>Pelajari Lebih Lanjut</span>
                    <BsArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
