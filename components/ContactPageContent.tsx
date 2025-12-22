'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      {/* Modern Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 relative overflow-hidden"
      >
        {/* Modern Background Pattern with SVG */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-32 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* SVG Background Elements */}
          <svg className="absolute top-10 left-10 w-16 h-16 text-blue-400/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 8V7L15 1H9V3H15.5L19 6.5V8H21ZM21 9H19V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V4C5 2.9 5.9 2 7 2H9V1H7C4.8 1 3 2.8 3 5V20C3 22.2 4.8 24 7 24H17C19.2 24 21 22.2 21 20V9Z"/>
            <path d="M7 7H17V9H7V7ZM7 11H14V13H7V11ZM7 15H17V17H7V15Z"/>
          </svg>
          
          <svg className="absolute top-20 right-20 w-12 h-12 text-slate-400/15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
          </svg>
          
          <svg className="absolute bottom-16 right-16 w-20 h-20 text-blue-300/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
          </svg>
          
          <svg className="absolute bottom-10 left-16 w-14 h-14 text-slate-300/15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
          </svg>
          
          {/* Additional Contact-related SVG */}
          <svg className="absolute top-1/4 right-1/4 w-10 h-10 text-blue-200/12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
              <BsEnvelopeFill className="w-4 h-4 mr-2" />
              Hubungi Kami
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Kontak
              <span className="block text-white mt-1">
                ABUJAPI Jabar
              </span>
            </h1>

            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Hubungi kami untuk informasi dan konsultasi ABUJAPI Jawa Barat
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <BsClockFill className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Respon Cepat</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsPhoneFill className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Cards */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : '_self'}
                rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-white p-6 rounded-2xl shadow-md border border-slate-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-md transition-transform transform group-hover:scale-110 group-hover:rotate-3">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-900 font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-slate-500">{info.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


     {/* Contact Form & Map */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Kirim Pesan</h2>
                <p className="text-slate-600">Isi formulir di bawah untuk menghubungi kami</p>
              </div>

              {alert.show && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    alert.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {alert.message}
                </div>
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
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
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
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
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
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Media Sosial</h3>
                <p className="text-slate-600 mb-6">Ikuti kami di media sosial untuk update terbaru</p>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Hubungi kami di ${social.icon.name || 'Social Media'}`}
                      className={`w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-transparent transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
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
      </section>

    </>
  );
}