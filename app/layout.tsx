import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "./globals.css";
import logoImage from "@images/logo.ico";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Helper untuk mendapatkan URL gambar dari StaticImageData
const getImageUrl = (img: typeof logoImage) => img.src;

export const metadata: Metadata = {
  title: {
    default: "BPD Abujapi Jabar",
    template: "%s | BPD Abujapi Jabar",
  },
  description:
    "BPD Abujapi Jabar - Asosiasi Perusahaan Jasa Pengamanan Indonesia wilayah Jawa Barat. Informasi terbaru, program, dan layanan kami.",
  keywords: [
    "BPD Abujapi Jabar",
    "Abujapi",
    "Jasa Pengamanan",
    "Security",
    "Jawa Barat",
  ],
  authors: [
    {
      name: "BPD Abujapi Jabar",
      url: "https://bpdabujapijabar.or.id/",
    },
  ],
  creator: "BPD Abujapi Jabar",
  publisher: "BPD Abujapi Jabar",
  metadataBase: new URL("https://bpdabujapijabar.or.id/"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bpdabujapijabar.or.id/",
    siteName: "BPD Abujapi Jabar",
    title: "BPD Abujapi Jabar",
    description:
      "Asosiasi Perusahaan Jasa Pengamanan Indonesia wilayah Jawa Barat.",
    images: [
      {
        url: getImageUrl(logoImage), 
        width: 1200,
        height: 630,
        alt: "BPD Abujapi Jabar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPD Abujapi Jabar",
    description:
      "Asosiasi Perusahaan Jasa Pengamanan Indonesia wilayah Jawa Barat.",
    images: [getImageUrl(logoImage)],
    creator: "@usernameTwitter",
  },
  icons: {
    icon: getImageUrl(logoImage),
    apple: "/apple-touch-icon.png",
    shortcut: getImageUrl(logoImage), 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
