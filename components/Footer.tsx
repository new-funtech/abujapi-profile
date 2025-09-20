import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50/95 via-blue-50/40 to-slate-50/30 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">BPD ABUJAPI</h2>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                Badan Pengurus Daerah Asosiasi Badan Usaha Jasa Pelaksana Konstruksi Indonesia 
                wilayah Jawa Barat yang berkomitmen untuk memajukan industri konstruksi.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-slate-500 transition-all duration-300">
                  <FaMapMarkerAlt className="text-sm text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-600 text-sm">Jawa Barat, Indonesia</span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-slate-500 transition-all duration-300">
                  <FaPhoneAlt className="text-sm text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="tel:+62123456789" className="text-slate-600 text-sm hover:text-blue-600 transition-colors duration-300">
                  +62 812-3456-789
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-slate-500 transition-all duration-300">
                  <FaEnvelope className="text-sm text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <a href="mailto:cs@bpdabujapijabar.or.id" className="text-slate-600 text-sm hover:text-blue-600 transition-colors duration-300">
                  cs@bpdabujapijabar.or.id
                </a>
              </div>
            </div>

          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-bold text-lg text-slate-800 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Tentang Kami", href: "/profil" },
                { name: "Sejarah", href: "/profil/sejarah" },
                { name: "Visi & Misi", href: "/profil/visi-misi" },
                { name: "Keanggotaan", href: "/profil/keanggotaan" },
                { name: "Galeri", href: "/profil/galeri" },
                { name: "Berita", href: "/berita" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-bold text-lg text-slate-800 mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Konsultasi Konstruksi",
                "Sertifikasi BUJP",
                "Pelatihan Teknis",
                "Pengembangan SDM",
                "Advokasi Anggota",
                "Networking Bisnis",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-slate-600 text-sm font-medium flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-800">Stay Connected</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dapatkan update terbaru tentang program, pelatihan, dan informasi penting 
                dari BPD ABUJAPI Jawa Barat.
              </p>
            </div>
            
            <form className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  aria-label="Enter your email address"
                  className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 group-hover:bg-white"
                />
              </div>
              <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold text-sm flex items-center justify-center gap-3 group"
            >
              <span>Subscribe Newsletter</span>
              <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200/50">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500">
              <span>© 2025 BPD ABUJAPI Jawa Barat. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
