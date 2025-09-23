export interface ApiNewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published_at: string;
  status: string;
  created_by: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  tags: string[];
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  author_data: {
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
  };
  formatted_tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  author: {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    role?: string;
    deleted_at?: string | null;
    created_at?: string;
    updated_at?: string;
  };
}

export interface NewsApiResponse {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: ApiNewsItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

// Transform API data to match our local interface
export function transformApiNews(apiNews: ApiNewsItem): NewsItem {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractLocation = (content: string) => {
    const locationMatch = content.match(/^([A-Za-z\s]+),\s*\d+/);
    return locationMatch ? locationMatch[1].trim() : 'ABUJAPI Jabar';
  };

  return {
    id: apiNews.id.toString(),
    title: apiNews.title,
    slug: apiNews.slug,
    excerpt: apiNews.excerpt,
    content: apiNews.content
      .replace(/\\\//g, '/') // Unescape forward slashes
      .replace(/\\"/g, '"') // Unescape quotes
      .replace(/\r\n/g, '\n') // Normalize line endings
      .trim(), // Remove leading/trailing whitespace
    image: apiNews.image,
    author: apiNews.author_data?.name || apiNews.author?.name || 'Tim Redaksi ABUJAPI',
    date: formatDate(apiNews.published_at),
    publishedAt: apiNews.published_at,
    category: 'Berita',
    tags: apiNews.formatted_tags?.map(tag => tag.name) || apiNews.tags || [],
    location: extractLocation(apiNews.content),
    featured: false
  };
}

// Local interface for consistency
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  publishedAt: string;
  category: string;
  tags: string[];
  location: string;
  featured?: boolean;
}