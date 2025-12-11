import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pokerService } from '../../../services/PokerService';
import { Star, CheckCircle, XCircle, ExternalLink, Gift, Users, Monitor } from 'lucide-react';
import { RoutePath, PokerSite } from '../../../models/types';

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [site, setSite] = useState<PokerSite | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSite = async () => {
        if (id) {
            const data = await pokerService.getReviewById(id);
            setSite(data);
        }
        setLoading(false);
    };
    fetchSite();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-poker-muted">Loading review...</div>;
  }

  if (!site) {
    return <div className="text-center py-20 text-poker-muted">Review not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <Link to={RoutePath.REVIEWS} className="text-sm text-poker-muted hover:text-poker-primary mb-4 inline-block">← Back to all reviews</Link>
      
      {/* Header Card */}
      <div className="bg-white dark:bg-poker-darkSurface rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <img src={site.logoUrl} className="w-64 h-64 object-cover rounded-full" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-32 h-32 rounded-2xl bg-white p-2 shadow-md border border-slate-100 dark:border-white/5">
                <img src={site.logoUrl} className="w-full h-full object-cover rounded-xl" alt={site.name} />
            </div>
            <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl font-bold text-poker-text dark:text-white mb-2">{site.name} Review</h1>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-poker-gold fill-poker-gold" />
                        <span className="font-bold text-lg text-poker-text dark:text-white">{site.rating}</span>
                        <span className="text-poker-muted">/ 5.0</span>
                    </div>
                </div>
                <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-100 dark:border-blue-800/30">
                    <Gift className="w-4 h-4 inline mr-2" />
                    {site.bonus}
                </div>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
                <a href={site.link} className="px-8 py-3 bg-poker-primary text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                    Visit Site <ExternalLink className="w-4 h-4" />
                </a>
                <div className="text-center text-xs text-poker-muted">
                    Promo Code: <span className="font-mono text-poker-text dark:text-white font-bold bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">{site.promoCode}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
            <section className="bg-white dark:bg-poker-darkSurface p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                <h2 className="text-xl font-bold text-poker-text dark:text-white mb-4">The Verdict</h2>
                <p className="text-poker-text dark:text-slate-300 leading-relaxed">
                    {site.verdict}
                </p>
            </section>

            <section className="bg-white dark:bg-poker-darkSurface p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                <h2 className="text-xl font-bold text-poker-text dark:text-white mb-4">Pros & Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">Pros</h3>
                        <ul className="space-y-3">
                            {site.pros?.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-poker-text dark:text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-3">Cons</h3>
                        <ul className="space-y-3">
                            {site.cons?.map((con, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-poker-text dark:text-slate-300">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
            <div className="bg-white dark:bg-poker-darkSurface p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                <h3 className="font-bold text-poker-text dark:text-white mb-4">Ratings Breakdown</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="flex items-center gap-2 text-poker-muted"><Monitor className="w-4 h-4" /> Software</span>
                            <span className="font-bold text-poker-text dark:text-white">{site.softwareRating}/5</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(site.softwareRating / 5) * 100}%` }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="flex items-center gap-2 text-poker-muted"><Users className="w-4 h-4" /> Traffic</span>
                            <span className="font-bold text-poker-text dark:text-white">{site.trafficRating}/5</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(site.trafficRating / 5) * 100}%` }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="flex items-center gap-2 text-poker-muted"><Gift className="w-4 h-4" /> Bonus</span>
                            <span className="font-bold text-poker-text dark:text-white">{site.bonusRating}/5</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(site.bonusRating / 5) * 100}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-poker-primary to-indigo-700 p-6 rounded-2xl text-white text-center">
                <h3 className="font-bold text-xl mb-2">Claim Your Bonus</h3>
                <p className="text-blue-100 text-sm mb-4">Use code <span className="font-bold text-white">{site.promoCode}</span> when you sign up.</p>
                <a href={site.link} className="block w-full py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                    Play Now
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;