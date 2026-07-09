'use client';

import { useState, useEffect } from 'react';
import { NewsApiResponse, NewsItem, transformApiNews } from '@/types/news';

interface UseNewsReturn {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalNews: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  goToPage: (page: number) => Promise<void>;
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
}

export function useNews(initialPage: number = 1, perPage: number = 10): UseNewsReturn {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  const fetchNews = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`https://admin.bpdabujapijabar.or.id/api/news-list?page=${page}&per_page=${perPage}`);
      // const response = await fetch(`http://127.0.0.1:8000/api/news-list?page=${page}&per_page=${perPage}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data: NewsApiResponse = await response.json();
      
      if (data.success && data.data.data) {
        const publishedNews = data.data.data.filter(item => item.status === 'published');
        const transformedNews = publishedNews.map(transformApiNews);
        
        if (transformedNews.length > 0 && page === 1) {
          transformedNews[0].featured = true;
        }
        
        setNews(transformedNews);
        setCurrentPage(data.data.current_page);
        setTotalPages(data.data.last_page);
        setTotalNews(data.data.total);
      } else {
        setNews([]);
        setTotalPages(1);
        setTotalNews(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
      setNews([]);
      setTotalPages(1);
      setTotalNews(0);
    } finally {
      setLoading(false);
    }
  };

  const goToPage = async (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      await fetchNews(page);
    }
  };

  const nextPage = async () => {
    if (currentPage < totalPages) {
      await fetchNews(currentPage + 1);
    }
  };

  const prevPage = async () => {
    if (currentPage > 1) {
      await fetchNews(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchNews(initialPage);
  }, []);

  return { 
    news, 
    loading, 
    error,
    currentPage,
    totalPages,
    totalNews,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    goToPage,
    nextPage,
    prevPage
  };
}

export function useNewsDetail(slug: string) {
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNewsDetail() {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:8000/api/show-news/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news detail');
        }

        const data = await response.json();
        
        if (data.success && data.data) {
          const transformedArticle = transformApiNews(data.data);
          setArticle(transformedArticle);
        } else {
          setError('Artikel tidak ditemukan');
          setArticle(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news detail');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchNewsDetail();
    }
  }, [slug]);

  return { article, loading, error };
}
