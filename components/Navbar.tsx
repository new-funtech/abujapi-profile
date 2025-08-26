"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import ComplaintPage from "@components/ComplaintPage";

export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [hoverHubungi, setHoverHubungi] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false); // state modal
  const pathname = usePathname();

  const menuItems = [
    { name: "Beranda", href: "/", exact: true },
    { name: "Profil", href: "/profil", exact: true },
    { name: "Keanggotaan", href: "/profil/keanggotaan" },
    { name: "Galeri", href: "/profil/galeri" },
    { name: "Berita", href: "/berita" },
    { name: "Kontak", href: "/profil/kontak" },
  ];

  const isAktif = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <Image
              src="https://storage.ganipedia.xyz/abujapi/assets/logo.png"
              alt="Logo ABUJAPI"
              width={40}
              height={40}
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
              <Link
                key={item.name}
                href={item.href}
                className={`relative group transition-colors duration-300 ${
                  isAktif(item.href, item.exact)
                    ? "text-green-600"
                    : "hover:text-green-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                    isAktif(item.href, item.exact)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
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
            menuTerbuka ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isAktif(item.href, item.exact)
                    ? "text-green-600 font-semibold"
                    : "hover:text-green-600"
                }`}
                onClick={() => setMenuTerbuka(false)}
              >
                {item.name}
              </Link>
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
