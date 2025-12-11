import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../models/types';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <article className="flex flex-col bg-white dark:bg-poker-darkSurface rounded-xl overflow-hidden border border-poker-border dark:border-white/5 group hover:border-poker-primary/30 dark:hover:border-white/10 transition-all h-full shadow-sm hover:shadow-lg dark:hover:shadow-none">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-poker-darkBg/80 backdrop-blur-sm text-poker-text dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
          {article.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-poker-muted dark:text-slate-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-poker-text dark:text-white mb-3 leading-snug group-hover:text-poker-primary transition-colors">
          <Link to={`/news/${article.id}`}>
             {article.title}
          </Link>
        </h3>
        
        <p className="text-poker-muted dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <Link to={`/news/${article.id}`} className="inline-flex items-center text-sm font-medium text-poker-primary hover:text-poker-primaryHover dark:hover:text-white transition-colors mt-auto">
          Read Full Story <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;