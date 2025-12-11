import React, { useEffect, useState } from 'react';
import ReviewCard from '../../components/ReviewCard';
import { pokerService } from '../../services/PokerService';
import { PokerSite } from '../../models/types';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<PokerSite[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
        const data = await pokerService.getReviews();
        setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-poker-text dark:text-white mb-4">Poker Room Reviews</h1>
        <p className="text-poker-muted dark:text-slate-400 max-w-2xl mx-auto">
          We've analyzed traffic, software, rakes, and bonuses to rank the best online poker sites for 2024.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 bg-white dark:bg-poker-darkSurface p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
        <div className="text-sm font-semibold text-poker-text dark:text-white">
          Showing {reviews.length} Sites
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-poker-muted dark:text-slate-400">Sort by:</span>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-poker-text dark:text-white text-sm rounded-lg p-2 focus:outline-none focus:border-poker-primary">
                <option>Highest Rating</option>
                <option>Biggest Bonus</option>
                <option>Newest</option>
            </select>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((site, index) => (
          <ReviewCard key={site.id} site={site} rank={index + 1} />
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/5 text-center">
         <h3 className="text-xl font-bold text-poker-text dark:text-white mb-2">Can't decide where to play?</h3>
         <p className="text-poker-muted dark:text-slate-400 mb-6">Ask our AI Assistant in the bottom right corner for a personalized recommendation based on your game type!</p>
      </div>
    </div>
  );
};

export default Reviews;