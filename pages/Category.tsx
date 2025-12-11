import React from 'react';
import { useParams } from 'react-router-dom';
import { NEWS_ARTICLES, POKER_SITES } from '../constants';
import NewsCard from '../components/NewsCard';
import ReviewCard from '../components/ReviewCard';
import { FolderOpen } from 'lucide-react';

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const title = slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ') : 'Category';

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 bg-white dark:bg-poker-darkSurface rounded-2xl flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-sm">
            <FolderOpen className="w-8 h-8 text-poker-primary" />
        </div>
        <div>
            <h1 className="text-4xl font-bold text-poker-text dark:text-white mb-2">{title}</h1>
            <p className="text-poker-muted dark:text-slate-400">Browse all content related to {title}.</p>
        </div>
      </div>

      <div className="space-y-12">
        
        {/* Category specific content mock */}
        <section>
            <h2 className="text-2xl font-bold text-poker-text dark:text-white mb-6 pl-4 border-l-4 border-poker-primary">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {NEWS_ARTICLES.slice(0, 2).map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </section>

         <section>
            <h2 className="text-2xl font-bold text-poker-text dark:text-white mb-6 pl-4 border-l-4 border-poker-gold">Recommended Sites for {title}</h2>
            <div className="grid grid-cols-1 gap-6">
                {POKER_SITES.slice(0, 2).map((site, idx) => (
                    <ReviewCard key={site.id} site={site} rank={idx + 1} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default Category;