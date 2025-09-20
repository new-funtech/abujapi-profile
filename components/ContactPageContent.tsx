'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsEnvelopeFill, BsPhoneFill, BsGeoAltFill, BsClockFill, BsSendFill, BsWhatsapp, BsInstagram, BsTwitter } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface ContactInfo {
  icon: IconType;
  title: string;
  value: string;
  description: string;
  action: string;
}

interface SocialMedia {
  icon: IconType;
  url: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: BsPhoneFill,
    title: "Telepon",
    value: "(022) 123-4567",
    description: "Senin - Jumat, 08:00 - 17:00",
    action: "tel:+62221234567"
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    description: "24/7 Customer Service",
    action: "https://wa.me/6281234567890"
  },
  {
    icon: BsEnvelopeFill,
    title: "Email",
    value: "info@abujapi-jabar.org",
    description: "Respon dalam 24 jam",
    action: "mailto:info@abujapi-jabar.org"
  },
  {
    icon: BsGeoAltFill,
    title: "Alamat",
    value: "Bandung, Jawa Barat",
    description: "Kantor Pusat",
    action: "#"
  }
];

const socialMedia: SocialMedia[] = [
  {
    icon: BsWhatsapp,
    url: "https://wa.me/6281234567890",
    color: "hover:bg-green-600 hover:text-white"
  },
  {
    icon: BsInstagram,
    url: "https://instagram.com/abujapi_jabar",
    color: "hover:bg-pink-600 hover:text-white"
  },
  {
    icon: BsTwitter,
    url: "https://twitter.com/abujapi_jabar",
    color: "hover:bg-blue-600 hover:text-white"
  }
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });
  
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const mapRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-10%" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-10%" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-10%" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAlert({
        show: true,
        message: 'Pesan berhasil dikirim! Kami akan membalas dalam 24 jam.',
        type: 'success'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      setAlert({
        show: true,
        message: 'Terjadi kesalahan. Silakan coba lagi.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setAlert({ show: false, message: '', type: 'success' });
      }, 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-slate-200 rounded-full opacity-25"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 mb-6"
            >
              <BsEnvelopeFill className="w-4 h-4 mr-2" />
              Hubungi Kami
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-slate-900">Kontak </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700">ABUJAPI Jabar</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Hubungi kami untuk informasi lebih lanjut tentang layanan, keanggotaan,
              atau konsultasi mengenai ABUJAPI Jawa Barat
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600"
            >
              <div className="flex items-center space-x-2">
                <BsClockFill className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Respon Cepat</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <BsPhoneFill className="w-5 h-5 text-green-600" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Cards */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : '_self'}
                rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:scale-105 cursor-pointer hover:border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-900 font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-slate-500">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        className="bg-slate-50 py-16"
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Kirim Pesan</h2>
                <p className="text-slate-600">Isi formulir di bawah untuk menghubungi kami</p>
              </div>

              {alert.show && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-6 ${
                    alert.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {alert.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-slate-400 bg-white"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-slate-400 bg-white"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-slate-400 bg-white"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-slate-400 bg-white"
                      placeholder="Subjek pesan"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none placeholder:text-slate-400 bg-white"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <BsSendFill className="mr-2 w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                ref={mapRef}
                initial="hidden"
                animate={isMapInView ? "visible" : "hidden"}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">Lokasi Kami</h3>
                <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.21936124596!2d107.57311!3d-6.90389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                    title="Lokasi ABUJAPI Jawa Barat di Bandung"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Media Sosial</h3>
                <p className="text-slate-600 mb-6">Ikuti kami di media sosial untuk update terbaru</p>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-transparent transition-all duration-200 transform hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Jam Operasional</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-700">Senin - Jumat</span>
                    <span className="text-slate-600">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-700">Sabtu</span>
                    <span className="text-slate-600">08:00 - 12:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-700">Minggu</span>
                    <span className="text-red-600 font-medium">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}