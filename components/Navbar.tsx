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

      <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <Image
              src="https://storage.ganipedia.xyz/abujapi/assets/logo.png"
              alt="Logo ABUJAPI"
              width={50}
              height={50}
              className="object-contain"
              priority
              unoptimized
            />
            <span className="font-bold text-lg text-gray-800 tracking-wide">
              ABUJAPI
            </span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  item.isDropdown && setIsProfilDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.isDropdown && setIsProfilDropdownOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className={`flex items-center relative group transition-colors duration-300 ${
                    isAktif(item.href, item.exact)
                      ? "text-green-600"
                      : "hover:text-green-600"
                  }`}
                >
                  {item.name}
                  {item.isDropdown && (
                    <FiChevronDown
                      className={`ml-1 text-lg transition-transform duration-300 ${
                        isProfilDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                      isAktif(item.href, item.exact)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
                {item.isDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ease-in-out transform border-l-4 border-[#2c3691] ${
                      isProfilDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
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
                          className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300 ${
                            isAktif(subItem.href)
                              ? "text-green-600 font-semibold"
                              : ""
                          } ${hoveredMenuItem === subItem.name ? "pl-10" : "pl-4"}`}
                          onClick={() => setIsProfilDropdownOpen(false)}
                        >
                          <FiArrowRight
                            className={`absolute left-4 text-lg transition-opacity duration-300 ${
                              hoveredMenuItem === subItem.name
                                ? "opacity-100 mr-3"
                                : "opacity-0 mr-0"
                            }`}
                          />
                          <span className="transition-transform duration-300">
                            {subItem.name}
                          </span>
                        </Link>
                        {index < profilMenuItems.length - 1 && (
                          <hr className="border-t border-gray-200 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Tombol Buat Pengaduan */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsComplaintOpen(true)}
              onMouseEnter={() => setHoverHubungi(true)}
              onMouseLeave={() => setHoverHubungi(false)}
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 
                         shadow-md transition-transform duration-300 hover:scale-105"
            >
              Pengaduan
              {hoverHubungi ? (
                <FiArrowUpRight className="text-lg transition-transform duration-300" />
              ) : (
                <FiArrowRight className="text-lg transition-transform duration-300" />
              )}
            </button>
          </div>

          <button
            onClick={() => setMenuTerbuka(!menuTerbuka)}
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          >
            {menuTerbuka ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden transition-all duration-300 ${
            menuTerbuka ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div
                  className="flex items-center justify-between"
                  onClick={() =>
                    item.isDropdown &&
                    setIsProfilDropdownOpen(!isProfilDropdownOpen)
                  }
                >
                  <Link
                    href={item.href}
                    className={`transition-colors duration-300 ${
                      isAktif(item.href, item.exact)
                        ? "text-green-600 font-semibold"
                        : "hover:text-green-600"
                    }`}
                    onClick={() => !item.isDropdown && setMenuTerbuka(false)}
                  >
                    {item.name}
                  </Link>
                  {item.isDropdown && (
                    <FiChevronDown
                      className={`text-lg transition-transform duration-300 ${
                        isProfilDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {item.isDropdown && (
                  <div
                    className={`pl-4 pt-2 flex flex-col space-y-2 transition-all duration-300 ease-in-out transform border-l-4 border-[#2c3691] w-64 ${
                      isProfilDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 h-0 overflow-hidden"
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
                          className={`flex items-center text-sm transition-all duration-300 ${
                            isAktif(subItem.href)
                              ? "text-green-600 font-semibold"
                              : "hover:text-green-600"
                          } ${hoveredMenuItem === subItem.name ? "pl-10" : "pl-4"}`}
                          onClick={() => {
                            setMenuTerbuka(false);
                            setIsProfilDropdownOpen(false);
                          }}
                        >
                          <FiArrowRight
                            className={`absolute left-4 text-lg transition-opacity duration-300 ${
                              hoveredMenuItem === subItem.name
                                ? "opacity-100 mr-3"
                                : "opacity-0 mr-0"
                            }`}
                          />
                          <span className="transition-transform duration-300">
                            {subItem.name}
                          </span>
                        </Link>
                        {index < profilMenuItems.length - 1 && (
                          <hr className="border-t border-gray-200 mt-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setMenuTerbuka(false);
                setIsComplaintOpen(true);
              }}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
            >
              Buat Pengaduan
              <FiArrowUpRight className="text-lg" />
            </button>
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
