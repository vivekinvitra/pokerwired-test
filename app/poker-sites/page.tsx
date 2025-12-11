import React, { useEffect, useState } from 'react';
import { pokerService } from '../../services/PokerService';
import { PokerSite } from '../../models/types';
import { Star, CheckCircle, ExternalLink, ShieldCheck, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const PokerSites: React.FC = () => {
  const [sites, setSites] = useState<PokerSite[]>([]);

  useEffect(() => {
    const fetchSites = async () => {
        const data = await pokerService.getReviews();
        setSites(data);
    };
    fetchSites();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-poker-text dark:text-white mb-6">Best Online Poker Sites 2024</h1>
        <p className="text-xl text-poker-muted dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the top-rated poker rooms available in your region. We test and review every site for security, game variety, and bonus value.
        </p>
      </div>

      <div className="space-y-6">
        {sites.map((site, index) => (
            <div key={site.id} className="bg-white dark:bg-poker-darkSurface rounded-2xl border border-poker-border dark:border-white/10 shadow-lg overflow-hidden flex flex-col md:flex-row">
                
                {/* Rank & Logo Column */}
                <div className="w-full md:w-48 bg-slate-50 dark:bg-black/20 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-poker-border dark:border-white/5 relative">
                    <div className="absolute top-0 left-0 bg-poker-primary text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                        #{index + 1}
                    </div>
                    <div className="w-24 h-24 rounded-xl bg-white p-2 shadow-sm border border-slate-100 dark:border-white/5 mb-3">
                        <img src={site.logoUrl} alt={site.name} className="w-full h-full object-cover rounded" />
                    </div>
                    <div className="flex items-center gap-1 text-poker-gold">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">{site.rating}</span>/5
                    </div>
                    <Link to={`/reviews/${site.id}`} className="text-xs text-poker-muted underline mt-2 hover:text-poker-primary">Read Review</Link>
                </div>

                {/* Info Column */}
                <div className="flex-grow p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-bold text-poker-text dark:text-white">{site.name}</h2>
                        {index === 0 && <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded border border-amber-200">Editor's Choice</span>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <ul className="space-y-2">
                            {site.features.slice(0,2).map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-poker-text dark:text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>
                         <ul className="space-y-2">
                            {site.pros.slice(0,2).map((pro, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-poker-text dark:text-slate-300">
                                    <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" /> {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <p className="text-sm text-poker-muted italic line-clamp-1">"{site.reviewSummary}"</p>
                </div>

                {/* Action Column */}
                <div className="w-full md:w-64 bg-slate-50 dark:bg-white/5 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-poker-border dark:border-white/5">
                    <div className="mb-4 text-center">
                        <span className="block text-xs uppercase tracking-wider text-poker-muted font-bold mb-1">Welcome Bonus</span>
                        <span className="block text-lg font-bold text-poker-primary leading-tight">{site.bonus}</span>
                    </div>
                    
                    <a href={site.link} className="w-full py-3 bg-poker-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 mb-3">
                        Play Now <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <div className="text-center text-xs text-poker-muted">
                        Use Code: <span className="font-mono font-bold bg-white dark:bg-black/30 px-1 rounded border border-slate-200 dark:border-white/10">{site.promoCode}</span>
                    </div>
                </div>

            </div>
        ))}
      </div>

      <div className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>How We Rate Poker Sites</h2>
          <p>We use a strict review process to ensure only the safest and most reliable poker rooms make our list. Our ranking factors include:</p>
          <ul>
              <li><strong>Security & Licensing:</strong> We only recommend sites regulated by reputable authorities.</li>
              <li><strong>Game Variety:</strong> A mix of Hold'em, Omaha, and exotic variants is essential.</li>
              <li><strong>Traffic:</strong> We track player volume to ensure you can find a game 24/7.</li>
              <li><strong>Bonuses:</strong> We verify terms and conditions to ensure offers are fair and valuable.</li>
          </ul>
      </div>
    </div>
  );
};

export default PokerSites;