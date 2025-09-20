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
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
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

  const formatReadTime = (content: string) => {
    const wordCount = content.replace(/<[^>]*>/g, '').split(' ').length;
    const readTimeMinutes = Math.ceil(wordCount / 200);
    return `${readTimeMinutes} menit`;
  };

  const extractLocation = (content: string) => {
    const locationMatch = content.match(/^([A-Za-z\s]+),\s*\d+/);
    return locationMatch ? locationMatch[1].trim() : 'ABUJAPI Jabar';
  };

  const generateTags = (keywords: string) => {
    return keywords.split(',').map(tag => tag.trim()).slice(0, 5);
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
    author: 'Tim Redaksi ABUJAPI',
    date: formatDate(apiNews.published_at),
    publishedAt: apiNews.published_at,
    category: 'Berita',
    tags: generateTags(apiNews.meta_keywords || ''),
    readTime: formatReadTime(apiNews.content),
    location: extractLocation(apiNews.content),
    views: Math.floor(Math.random() * 2000) + 100,
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
  readTime: string;
  location: string;
  views: number;
  featured?: boolean;
}