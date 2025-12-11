import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pokerService } from '../../../services/PokerService';
import { NewsArticle, PokerSite } from '../../../models/types';
import { Calendar, User, Share2, Star, ChevronRight, Mail } from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [topSites, setTopSites] = useState<PokerSite[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        if (id) {
            const newsData = await pokerService.getNewsById(id);
            setArticle(newsData);
        }
        const sites = await pokerService.getReviews();
        setTopSites(sites.slice(0, 5));
        setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
     return <div className="py-20 text-center text-poker-muted">Loading article...</div>;
  }

  if (!article) {
      return <div className="py-20 text-center text-poker-muted">Article not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-poker-muted mb-6">
                <Link to="/news" className="hover:text-poker-primary">News</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-poker-text dark:text-white truncate max-w-[200px]">{article.title}</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-poker-text dark:text-white leading-tight mb-6">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-poker-border dark:border-white/10 pb-8">
                <div className="flex items-center gap-2 text-poker-text dark:text-slate-300 font-medium">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <User className="w-5 h-5 text-poker-muted" />
                    </div>
                    <span>By {article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-poker-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                </div>
                <div className="ml-auto">
                    <button className="flex items-center gap-2 text-poker-primary hover:underline">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                </div>
            </div>

            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-poker-text dark:text-slate-300">
                {/* Rendering HTML content safely or mock content */}
                {article.content ? (
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                ) : (
                    <>
                        <p className="lead text-xl text-poker-muted dark:text-slate-400 mb-6">{article.excerpt}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h3>Why this matters for players</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <ul>
                            <li>Key point about the news topic</li>
                            <li>Impact on the online poker ecosystem</li>
                            <li>What players should expect next</li>
                        </ul>
                    </>
                )}
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-poker-border dark:border-white/10 flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                    <User className="w-8 h-8 text-poker-muted" />
                </div>
                <div>
                    <h4 className="font-bold text-poker-text dark:text-white text-lg">About {article.author}</h4>
                    <p className="text-poker-muted text-sm mt-1">Senior poker editor and industry analyst. Covering live events and online regulation since 2015.</p>
                </div>
            </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
            
            {/* Top Sites Widget */}
            <div className="bg-white dark:bg-poker-darkSurface border border-poker-border dark:border-white/10 rounded-xl shadow-lg overflow-hidden sticky top-24">
                <div className="bg-slate-900 p-4">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <Star className="w-5 h-5 text-poker-gold fill-poker-gold" /> Top Poker Sites
                    </h3>
                </div>
                <div className="p-4 space-y-4">
                    {topSites.map((site, index) => (
                        <div key={site.id} className="flex items-center gap-3 pb-4 border-b border-dashed border-slate-200 dark:border-white/10 last:border-0 last:pb-0">
                             <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-poker-primary text-sm shrink-0">
                                {index + 1}
                             </div>
                             <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 dark:border-white/5 p-1 shrink-0">
                                <img src={site.logoUrl} alt={site.name} className="w-full h-full object-cover rounded" />
                             </div>
                             <div className="flex-grow min-w-0">
                                <div className="font-bold text-poker-text dark:text-white truncate">{site.name}</div>
                                <div className="text-xs text-poker-gold flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> {site.rating}
                                </div>
                             </div>
                             <a href={site.link} className="px-3 py-1.5 bg-poker-primary text-white text-xs font-bold rounded hover:bg-blue-600 transition-colors">
                                PLAY
                             </a>
                        </div>
                    ))}
                </div>
                <div className="p-3 bg-slate-50 dark:bg-white/5 text-center">
                    <Link to="/reviews" className="text-sm text-poker-primary font-bold hover:underline">View All Reviews</Link>
                </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-6 text-white text-center">
                <Mail className="w-10 h-10 mx-auto mb-4 text-poker-secondary" />
                <h3 className="font-bold text-xl mb-2">Get Poker News</h3>
                <p className="text-indigo-200 text-sm mb-4">Join 10,000+ players getting weekly strategies and bonuses.</p>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg text-slate-900 mb-2 focus:outline-none" />
                <button className="w-full py-2 bg-poker-primary rounded-lg font-bold hover:bg-blue-500 transition-colors">Subscribe</button>
            </div>
            
        </aside>

      </div>
    </div>
  );
};

export default NewsDetail;