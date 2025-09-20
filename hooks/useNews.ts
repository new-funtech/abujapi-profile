'use client';

import { useState, useEffect } from 'react';
import { ApiNewsItem, NewsApiResponse, NewsItem, transformApiNews } from '@/types/news';

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const response = await fetch('https://admin.bpdabujapijabar.or.id/api/news-list');
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data: NewsApiResponse = await response.json();
        
        if (data.success && data.data.data) {
          // Filter to only show published articles
          const publishedNews = data.data.data.filter(item => item.status === 'published');
          
          // Transform published data
          const transformedNews = publishedNews.map(transformApiNews);
          
          // Mark first item as featured if we have news
          if (transformedNews.length > 0) {
            transformedNews[0].featured = true;
          }
          
          setNews(transformedNews);
        } else {
          setNews([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return { news, loading, error };
}

export function useNewsDetail(slug: string) {
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNewsDetail() {
      try {
        setLoading(true);
        const response = await fetch(`https://admin.bpdabujapijabar.or.id/api/show-news/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news detail');
        }

        const data = await response.json();
        
        if (data.success && data.data) {
          const apiItem = data.data;
          // Transform single news item using the existing transformer
          const transformedArticle = transformApiNews(apiItem);
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