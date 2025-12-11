import React from 'react';
import { Star, CheckCircle, ExternalLink, Gift, ArrowRight } from 'lucide-react';
import { PokerSite } from '../models/types';
import { Link } from 'react-router-dom';

interface ReviewCardProps {
  site: PokerSite;
  rank?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ site, rank }) => {
  return (
    <div className="group relative bg-white dark:bg-poker-darkSurface border border-poker-border dark:border-white/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-poker-primary/5 transition-all duration-300">
      {rank && (
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-poker-primary text-white flex items-center justify-center font-bold shadow-lg z-10">
          {rank}
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-poker-border dark:border-white/10 bg-white relative shadow-sm">
            <img src={site.logoUrl} alt={site.name} className="w-full h-full object-cover p-2" />
        </div>

        {/* Content Section */}
        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h3 className="text-2xl font-bold text-poker-text dark:text-white">{site.name}</h3>
            <div className="flex items-center justify-center md:justify-start gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full border border-amber-100 dark:border-amber-900/30">
              <Star className="w-4 h-4 text-poker-gold fill-poker-gold" />
              <span className="text-poker-text dark:text-amber-100 font-bold">{site.rating}</span>
              <span className="text-poker-muted dark:text-slate-500 text-xs">/ 5.0</span>
            </div>
          </div>
          
          <p className="text-poker-muted dark:text-slate-400 text-sm mb-4 line-clamp-2">{site.reviewSummary}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {site.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="flex-shrink-0 w-full md:w-48 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-poker-border dark:border-white/5 pt-4 md:pt-0 md:pl-6">
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-poker-gold text-sm font-bold mb-1">
                    <Gift className="w-4 h-4" />
                    <span>Bonus</span>
                </div>
                <div className="text-poker-text dark:text-white font-semibold text-sm leading-tight mb-3">
                    {site.bonus}
                </div>
            </div>
            
            <a 
                href={site.link} 
                className="w-full py-3 bg-poker-primary hover:bg-blue-600 text-white font-bold text-center rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
                Play Now <ExternalLink className="w-4 h-4" />
            </a>
            
            <Link 
                to={`/reviews/${site.id}`}
                className="text-center text-sm font-medium text-poker-muted dark:text-slate-400 hover:text-poker-primary dark:hover:text-white transition-colors flex items-center justify-center gap-1"
            >
                Read Review <ArrowRight className="w-3 h-3" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;