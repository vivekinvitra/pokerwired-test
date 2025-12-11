import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pokerService } from '../../../services/PokerService';
import { Copy, CheckCircle, ArrowRight } from 'lucide-react';
import { RoutePath, PromoOffer } from '../../../models/types';

const PromoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<PromoOffer | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromo = async () => {
        if (id) {
            const data = await pokerService.getPromoById(id);
            setOffer(data);
        }
        setLoading(false);
    };
    fetchPromo();
  }, [id]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Code ${code} copied to clipboard!`);
  };

  if (loading) {
    return <div className="text-center py-20 text-poker-muted">Loading offer...</div>;
  }

  if (!offer) {
    return <div className="text-center py-20 text-poker-muted">Offer not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
      <Link to={RoutePath.PROMO_CODES} className="text-sm text-poker-muted hover:text-poker-primary mb-6 inline-block">← Back to all codes</Link>
      
      <div className="bg-white dark:bg-poker-darkSurface border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg">
        {/* Banner */}
        <div className={`h-32 w-full ${offer.type === 'No Deposit' ? 'bg-gradient-to-r from-emerald-600 to-teal-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} flex items-center justify-center`}>
            <h1 className="text-3xl font-bold text-white text-center px-4">{offer.siteName} Promo Code</h1>
        </div>

        <div className="p-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 className="text-2xl font-bold text-poker-text dark:text-white mb-2">{offer.offerTitle}</h2>
                <div className="flex items-center gap-2 text-sm text-poker-muted mb-6">
                    <span className="bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full">{offer.type}</span>
                    {offer.verified && <span className="text-emerald-500 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Verified working</span>}
                </div>
                
                <div className="w-full max-w-md bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 relative group">
                    <p className="text-xs text-poker-muted uppercase tracking-wider mb-2">Tap to Copy</p>
                    <button 
                        onClick={() => copyToClipboard(offer.code)}
                        className="text-4xl font-mono font-bold text-poker-primary w-full break-all hover:scale-105 transition-transform"
                    >
                        {offer.code}
                    </button>
                    <div className="absolute top-4 right-4">
                        <Copy className="w-5 h-5 text-slate-400" />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-poker-text dark:text-white mb-3">Offer Details</h3>
                    <p className="text-poker-text dark:text-slate-300 leading-relaxed">
                        {offer.description || "Use this exclusive code to unlock special benefits when you sign up."}
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-poker-text dark:text-white mb-3">How to Claim</h3>
                    <ol className="space-y-4">
                        {offer.stepsToClaim?.map((step, idx) => (
                            <li key={idx} className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center font-bold text-poker-primary">
                                    {idx + 1}
                                </div>
                                <p className="text-poker-text dark:text-slate-300 mt-1">{step}</p>
                            </li>
                        )) || <li className="text-poker-muted">Standard sign-up procedure applies.</li>}
                    </ol>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-white/5">
                    <h3 className="text-sm font-bold text-poker-muted uppercase mb-3">Terms & Conditions</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-poker-muted dark:text-slate-400">
                        {offer.terms?.map((term, i) => (
                            <li key={i}>{term}</li>
                        )) || <li>Standard T&Cs apply. 18+ only.</li>}
                    </ul>
                </section>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/10 text-center">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-poker-primary text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                    Go to {offer.siteName} <ArrowRight className="w-5 h-5 ml-2" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromoDetail;