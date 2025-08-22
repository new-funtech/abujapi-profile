"use client";
import Link from "next/link";

interface SidebarProps {
  pathname: string;
}

export default function Sidebar({ pathname }: SidebarProps) {
  const menuItems = [
    { name: "Tentang", href: "/profil" },
    { name: "Sejarah Perusahaan", href: "/profil/sejarah" },
    { name: "Visi dan Misi", href: "/profil/visi-misi" },
    { name: "Struktur Organisasi", href: "/profil/struktur" },
    // { name: "Manajemen", href: "/profil/manajemen" },
    { name: "Galeri", href: "/profil/galeri" },
    { name: "Berita", href: "/berita" },
    { name: "Kontak", href: "/profil/kontak" },
  ];

  return (
    <aside className="w-full md:w-1/3 md:sticky md:top-0 z-10 md:border-r md:border-gray-300">
      {/* Sidebar Menu as Table */}
      <div className="md:px-4 pt-0 text-gray-700 font-medium">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="relative bg-green-600 text-white text-left py-2 px-0 pl-4 text-xs md:text-sm font-semibold border-b border-gray-200 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#2c3691]">
                Link Terkait
              </th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.name} className="border-b border-gray-200">
                <td className="py-0 px-0">
                  <Link
                    href={item.href}
                    className={`relative block text-gray-700 text-xs md:text-sm py-2 pl-4 transition-colors duration-300 
                      ${pathname === item.href ? "bg-green-100 text-green-600" : ""} 
                      hover:text-green-600
                      before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gray-300 
                      hover:before:bg-[#2c3691]
                      after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-green-100 
                      after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                      hover:after:scale-x-100 after:z-[-1]`}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}
