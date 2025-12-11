import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, ShieldCheck, Users, Calendar, MapPin, Trophy } from 'lucide-react';
import NewsCard from '../../components/NewsCard';
import { CATEGORIES } from '../../constants';
import { RoutePath, NewsArticle, Tournament } from '../../models/types';
import { pokerService } from '../../services/PokerService';

const Home: React.FC = () => {
  // Controller Logic: Fetching data from Service
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const tours = await pokerService.getTournaments();
        const news = await pokerService.getNews();
        setTournaments(tours);
        setLatestNews(news.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-20">
      
      {/* Big Banner Hero Section */}
      <section className="relative -mt-8 py-24 md:py-32 bg-slate-950 dark:bg-black overflow-hidden">
         {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-poker-primary/20 z-10"></div>
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-poker-primary/10 to-transparent z-10 mix-blend-overlay"></div>
             <img 
                src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop" 
                alt="Poker Background" 
                className="w-full h-full object-cover opacity-40 saturate-150"
             />
        </div>

        <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poker-primary/10 border border-poker-primary/20 text-poker-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-poker-primary animate-pulse"></span>
                    Live Action
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">PLAY SMARTER.</span>
                    <span className="block text-poker-primary">WIN BIGGER.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                    The ultimate guide to online poker. We provide honest reviews, exclusive no-deposit bonuses, and cutting-edge strategy for 2024.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={RoutePath.REVIEWS} className="px-8 py-4 bg-poker-primary hover:bg-poker-primaryHover text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-poker-primary/25 text-lg transform hover:scale-105">
                        Find Top Poker Sites <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link to={RoutePath.PROMO_CODES} className="px-8 py-4 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 border border-white/20 transition-all text-lg text-center backdrop-blur-sm">
                        View Bonuses
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 -mt-10 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/category/${cat.slug}`}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-poker-darkSurface border border-slate-200 dark:border-white/5 rounded-2xl hover:border-poker-primary/50 dark:hover:border-poker-primary/30 hover:shadow-xl transition-all group shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 mb-3 group-hover:text-poker-primary group-hover:bg-red-50 dark:group-hover:bg-white/10 transition-colors">
                {cat.icon}
              </div>
              <span className="text-sm font-semibold text-poker-text dark:text-slate-200">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Major Tournaments Table */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-poker-text dark:text-white mb-2">Upcoming Major Tournaments</h2>
              <p className="text-poker-muted dark:text-slate-400">The biggest events happening live and online.</p>
            </div>
            <Link to={RoutePath.CATEGORY.replace(':slug', 'tournaments')} className="hidden md:flex items-center text-poker-primary font-semibold hover:text-poker-primaryHover transition-colors text-sm">
                View All Events <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
        
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-poker-darkSurface shadow-md">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-poker-text dark:text-slate-300">
                    <thead className="bg-slate-50 dark:bg-black/20 text-xs uppercase font-bold text-poker-muted border-b border-slate-200 dark:border-white/5">
                        <tr>
                            <th className="px-6 py-4">Brand</th>
                            <th className="px-6 py-4">Event</th>
                            <th className="px-6 py-4">Dates</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Buy-In</th>
                            <th className="px-6 py-4 text-right">Prize Pool</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                        {tournaments.map((tour) => (
                            <tr key={tour.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 p-1">
                                        <img src={tour.brandLogoUrl} alt={tour.brand} className="w-full h-full object-contain rounded-full" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-poker-text dark:text-white">
                                    {tour.eventName}
                                    {tour.status === 'Live' && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 animate-pulse">LIVE</span>}
                                </td>
                                <td className="px-6 py-4 text-poker-muted whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" /> {tour.date}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-poker-muted whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> {tour.location}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{tour.buyIn}</td>
                                <td className="px-6 py-4 text-right font-bold text-poker-secondary">{tour.prizePool}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md text-xs font-bold hover:opacity-90 transition-opacity">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 dark:bg-white/5 py-16 border-y border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-poker-gold shadow-sm">
                 <Award className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-poker-text dark:text-white">Unbiased Reviews</h3>
                 <p className="text-poker-muted dark:text-slate-400 text-sm mt-2">We test every site with real money to ensure fair play.</p>
               </div>
             </div>
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-poker-secondary shadow-sm">
                 <ShieldCheck className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-poker-text dark:text-white">Verified Bonuses</h3>
                 <p className="text-poker-muted dark:text-slate-400 text-sm mt-2">Our team checks promo codes weekly for validity.</p>
               </div>
             </div>
             <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-poker-primary shadow-sm">
                 <Users className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-poker-text dark:text-white">Community Driven</h3>
                 <p className="text-poker-muted dark:text-slate-400 text-sm mt-2">Join thousands of players sharing strategies and tips.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-poker-text dark:text-white">Latest Headlines</h2>
            <Link to={RoutePath.NEWS} className="flex items-center text-poker-primary font-semibold hover:text-poker-primaryHover transition-colors text-sm">
                Read All News <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;