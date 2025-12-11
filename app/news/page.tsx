import React, { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard';
import { pokerService } from '../../services/PokerService';
import { NewsArticle } from '../../models/types';

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
        const data = await pokerService.getNews();
        setArticles(data);
    };
    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
       <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <h1 className="text-4xl font-bold text-poker-text dark:text-white mb-4">Latest Poker News</h1>
            <p className="text-poker-muted dark:text-slate-400 max-w-2xl">
            Stay updated with tournament results, industry legislation, and strategy articles from the pros.
            </p>
        </div>
        
        {/* Simple Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Tournaments', 'Strategy', 'Industry', 'Opinion'].map((cat) => (
                <button 
                    key={cat}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        cat === 'All' 
                        ? 'bg-poker-primary text-white' 
                        : 'bg-white dark:bg-poker-darkSurface border border-slate-200 dark:border-white/10 text-poker-muted dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-poker-text dark:hover:text-white'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;