import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const defaultSEO: SEOConfig = {
  title: 'BPD ABUJAPI Jawa Barat',
  description: 'Badan Pengurus Daerah Asosiasi Badan Usaha Jasa Pelaksana Instalasi Jawa Barat - Organisasi profesional untuk pengembangan industri instalasi di Jawa Barat',
  keywords: [
    'ABUJAPI',
    'ABUJAPI Jabar',
    'Jasa Instalasi',
    'Badan Usaha Jasa',
    'Jawa Barat',
    'Organisasi Profesi',
    'Sertifikasi',
    'Pelatihan'
  ],
  image: '/images/logo.png',
  url: 'https://bpdabujapijabar.or.id',
  type: 'website'
};

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
  const seo = { ...defaultSEO, ...config };
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(', '),
    authors: [{ name: 'BPD ABUJAPI Jawa Barat' }],
    creator: 'BPD ABUJAPI Jawa Barat',
    publisher: 'BPD ABUJAPI Jawa Barat',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seo.url || 'https://abujapi-jabar.id'),
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: 'BPD ABUJAPI Jawa Barat',
      images: [
        {
          url: seo.image || '/images/logo.png',
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: 'id_ID',
      type: seo.type || 'website',
      ...(seo.type === 'article' && {
        publishedTime: seo.publishedTime,
        modifiedTime: seo.modifiedTime,
        section: seo.section,
        tags: seo.tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image || '/images/logo.png'],
      creator: '@abujapi_jabar',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export function generateStructuredData(type: 'organization' | 'website' | 'article', data?: Record<string, unknown>) {
  const baseUrl = 'https://abujapi-jabar.id';
  
  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BPD ABUJAPI Jawa Barat',
        alternateName: 'ABUJAPI Jabar',
        description: 'Badan Pengurus Daerah Asosiasi Badan Usaha Jasa Pelaksana Instalasi Jawa Barat',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-22-1234567',
          contactType: 'customer service',
          areaServed: 'ID',
          availableLanguage: 'Indonesian',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Contoh Alamat No. 123',
          addressLocality: 'Bandung',
          addressRegion: 'Jawa Barat',
          postalCode: '40123',
          addressCountry: 'ID',
        },
        sameAs: [
          'https://facebook.com/abujapi.jabar',
          'https://instagram.com/abujapi_jabar',
          'https://linkedin.com/company/abujapi-jabar',
        ],
      };
      
    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BPD ABUJAPI Jawa Barat',
        url: baseUrl,
        description: 'Website resmi Badan Pengurus Daerah ABUJAPI Jawa Barat',
        publisher: {
          '@type': 'Organization',
          name: 'BPD ABUJAPI Jawa Barat',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };
      
    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data?.title,
        description: data?.description,
        image: data?.image || `${baseUrl}/images/logo.png`,
        author: {
          '@type': 'Organization',
          name: 'BPD ABUJAPI Jawa Barat',
        },
        publisher: {
          '@type': 'Organization',
          name: 'BPD ABUJAPI Jawa Barat',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data?.publishedTime,
        dateModified: data?.modifiedTime || data?.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data?.url || baseUrl,
        },
      };
      
    default:
      return null;
  }
}