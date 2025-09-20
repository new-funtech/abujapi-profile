"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import ComplaintPage from "@components/ComplaintPage";
import Header from "./Header";
import logoImage from "@images/logo.png";



export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [hoverHubungi, setHoverHubungi] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [isProfilDropdownOpen, setIsProfilDropdownOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const pathname = usePathname();

  const profilMenuItems = [
    { name: "Tentang Kami", href: "/profil" },
    { name: "Sejarah Perusahaan", href: "/profil/sejarah" },
    { name: "Visi dan Misi", href: "/profil/visi-misi" },
    { name: "Keanggotaan", href: "/profil/keanggotaan" },
    { name: "Dokumentasi", href: "/profil/galeri" },
    { name: "Berita", href: "/berita" },
    { name: "Kontak", href: "/profil/kontak" },
  ];

  const menuItems = [
    { name: "Beranda", href: "/", exact: true },
    { name: "Profil", href: "/profil", exact: true, isDropdown: true },
    { name: "Keanggotaan", href: "/profil/keanggotaan" },
    { name: "Dokumentasi", href: "/profil/galeri" },
    { name: "Berita", href: "/berita" },
    { name: "Kontak", href: "/profil/kontak" },
  ];

  const isAktif = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <Header />

      <header className="backdrop-blur-md bg-gradient-to-r from-green-50/95 via-emerald-50/60 to-green-50/40 shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-green-200/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3">
          {/* Compact Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl flex items-center justify-center border border-green-200/30 group-hover:shadow-sm transition-all duration-300">
              <Image
                src={logoImage}
                alt="Logo ABUJAPI"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 tracking-tight">
                BPD ABUJAPI
              </span>
              <div className="text-xs text-slate-500">Jawa Barat</div>
            </div>
          </div>

          {/* Compact Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1 text-slate-700">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group px-2 py-1"
                onMouseEnter={() =>
                  item.isDropdown && setIsProfilDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.isDropdown && setIsProfilDropdownOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className={`flex items-center relative transition-all duration-300 px-3 py-2 rounded-lg text-sm ${
                    isAktif(item.href, item.exact)
                      ? "text-green-600 font-semibold bg-green-50/80"
                      : "hover:text-green-600 hover:bg-slate-50/80"
                  }`}
                >
                  {item.name}
                  {item.isDropdown && (
                    <FiChevronDown
                      className={`ml-1 text-sm transition-transform duration-300 ${
                        isProfilDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {item.isDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl py-3 z-50 transition-all duration-300 ease-in-out transform border border-slate-200/50 ${
                      isProfilDropdownOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {profilMenuItems.map((subItem, index) => (
                      <div
                        key={subItem.name}
                        onMouseEnter={() => setHoveredMenuItem(subItem.name)}
                        onMouseLeave={() => setHoveredMenuItem(null)}
                      >
                        <Link
                          href={subItem.href}
                          className={`flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600 transition-all duration-300 rounded-lg mx-2 group ${
                            isAktif(subItem.href)
                              ? "text-green-600 font-semibold bg-gradient-to-r from-green-50 to-emerald-50"
                              : ""
                          } ${hoveredMenuItem === subItem.name ? "pl-10" : "pl-4"}`}
                          onClick={() => setIsProfilDropdownOpen(false)}
                        >
                          <FiArrowRight
                            className={`absolute left-4 text-sm transition-all duration-300 text-green-500 ${
                              hoveredMenuItem === subItem.name
                                ? "opacity-100 transform translate-x-1"
                                : "opacity-0 transform translate-x-0"
                            }`}
                          />
                          <span className="transition-transform duration-300">
                            {subItem.name}
                          </span>
                        </Link>
                        {index < profilMenuItems.length - 1 && (
                          <hr className="border-t border-slate-200/60 mx-3 my-1" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Compact CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setIsComplaintOpen(true)}
              onMouseEnter={() => setHoverHubungi(true)}
              onMouseLeave={() => setHoverHubungi(false)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-700 
                        shadow-md transition-all duration-300 hover:shadow-lg text-sm group"
            >
              <span>Pengaduan</span>
              {hoverHubungi ? (
                <FiArrowUpRight className="text-sm transition-transform duration-300" />
              ) : (
                <FiArrowRight className="text-sm transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Compact Mobile Menu Toggle */}
          <button
            onClick={() => setMenuTerbuka(!menuTerbuka)}
            className="lg:hidden w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          >
            {menuTerbuka ? (
              <FiX className="text-lg transition-transform duration-300" />
            ) : (
              <FiMenu className="text-lg transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden bg-gradient-to-r from-green-50/98 via-emerald-50/80 to-green-50/70 backdrop-blur-md border-t border-green-200/50 overflow-hidden transition-all duration-500 shadow-xl ${
            menuTerbuka ? "max-h-[80vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2 max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name} className="group">
                <div className="flex items-center justify-between">
                  {item.isDropdown ? (
                    <button
                      className={`flex-1 text-left px-3 sm:px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium text-sm sm:text-base flex items-center justify-between ${
                        isAktif(item.href, item.exact)
                          ? "text-green-600 font-semibold bg-green-50/80"
                          : "text-slate-700 hover:text-green-600 hover:bg-slate-50/80"
                      }`}
                      onClick={() => setIsProfilDropdownOpen(!isProfilDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        className={`text-base sm:text-lg transition-transform duration-300 ${
                          isProfilDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex-1 px-3 sm:px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium text-sm sm:text-base ${
                        isAktif(item.href, item.exact)
                          ? "text-green-600 font-semibold bg-green-50/80"
                          : "text-slate-700 hover:text-green-600 hover:bg-slate-50/80"
                      }`}
                      onClick={() => setMenuTerbuka(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
                {item.isDropdown && (
                  <div
                    className={`mt-2 sm:mt-3 ml-2 sm:ml-4 mr-1 sm:mr-2 bg-gradient-to-r from-green-50/80 to-emerald-50/50 rounded-xl border border-green-200/40 overflow-hidden transition-all duration-500 ease-out ${
                      isProfilDropdownOpen
                        ? "max-h-[400px] sm:max-h-[500px] opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
                  >
                    <div className="p-2 sm:p-4 space-y-0.5 sm:space-y-1">
                      {profilMenuItems.map((subItem, index) => (
                        <div key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={`flex items-center text-xs sm:text-sm transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg group ${
                              isAktif(subItem.href)
                                ? "text-green-600 font-semibold bg-white/80 shadow-sm"
                                : "text-slate-700 hover:text-green-600 hover:bg-white/60"
                            }`}
                            onClick={() => {
                              setMenuTerbuka(false);
                              setIsProfilDropdownOpen(false);
                            }}
                          >
                            <FiArrowRight className="mr-2 sm:mr-3 text-sm sm:text-base text-green-500 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                            <span className="font-medium">{subItem.name}</span>
                          </Link>
                          {index < profilMenuItems.length - 1 && (
                            <hr className="border-t border-slate-200/40 mx-2 my-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Enhanced Mobile CTA Button */}
            <div className="pt-4 sm:pt-6 pb-2">
              <button
                onClick={() => {
                  setMenuTerbuka(false);
                  setIsComplaintOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-[1.02] group"
              >
                <span>Pengaduan</span>
                <FiArrowUpRight className="text-base sm:text-lg group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Modal Komplain */}
      <ComplaintPage
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />
    </>
  );
}