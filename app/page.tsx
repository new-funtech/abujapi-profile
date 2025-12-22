import { Metadata } from 'next';
import { generateMetadata as createMetadata, generateStructuredData } from '../lib/seo';
import dynamic from "next/dynamic";
import { memo } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

// Generate metadata for SEO
export const metadata: Metadata = createMetadata({
  title: 'BPD ABUJAPI Jawa Barat | Pelatihan & Sertifikasi Profesional',
description: 'Website resmi Badan Pengurus Daerah ABUJAPI Jawa Barat. Menyediakan pelatihan dan sertifikasi profesional untuk meningkatkan kompetensi tenaga kerja di bidang keamanan dan jasa terkait.',
  keywords: [
    'ABUJAPI Jabar',
    'Instalasi Listrik',
    'Kontraktor Listrik',
    'Jasa Instalasi',
    'Sertifikasi BNSP',
    'Pelatihan Teknik',
    'Badan Usaha Jasa',
    'Organisasi Profesi',
    'Jawa Barat',
    'Bandung'
  ],
  url: 'https://abujapi-jabar.id',
});

// Optimized dynamic imports with loading states
const HeroSection = dynamic(() => import("@components/HeroSection"), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse" />,
}); 

const GallerySection = dynamic(() => import("@components/GallerySection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const ServicesSection = dynamic(() => import("@components/ServicesSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const NewsSection = dynamic(() => import("@components/NewsSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

// Memoized section wrapper for better performance
const SectionWrapper = memo(({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={className}>
    {children}
  </section>
));

SectionWrapper.displayName = 'SectionWrapper';

export default function Home() {
  const organizationData = generateStructuredData('organization');
  const websiteData = generateStructuredData('website');

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />

      <main className="bg-white min-h-screen flex flex-col">
        <Navbar />

        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper className="bg-gray-50">
          <GallerySection />
        </SectionWrapper>

        <SectionWrapper>
          <ServicesSection />
        </SectionWrapper>

        <SectionWrapper className="bg-gray-50">
          <NewsSection />
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}
