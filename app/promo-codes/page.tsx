import React, { useEffect, useState } from 'react';
import { pokerService } from '../../services/PokerService';
import { Copy, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PromoOffer } from '../../models/types';

const PromoCodes: React.FC = () => {
  const [offers, setOffers] = useState<PromoOffer[]>([]);

  useEffect(() => {
    const fetchPromos = async () => {
        const data = await pokerService.getPromos();
        setOffers(data);
    };
    fetchPromos();
  }, []);
  
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Code ${code} copied to clipboard!`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-poker-text dark:text-white mb-4">Exclusive Poker Promo Codes</h1>
        <p className="text-poker-muted dark:text-slate-400">
          Boost your bankroll with these verified bonus codes. We negotiate directly with operators to get you the best deals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white dark:bg-poker-darkSurface border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
            <div className={`h-2 w-full ${offer.type === 'No Deposit' ? 'bg-emerald-500' : 'bg-poker-primary'}`} />
            
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
                    offer.type === 'No Deposit' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' 
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'
                }`}>
                    {offer.type}
                </span>
                {offer.verified && (
                    <div className="flex items-center gap-1 text-xs text-poker-muted dark:text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-500" /> Verified
                    </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-poker-text dark:text-white mb-1">{offer.siteName}</h3>
              <p className="text-lg text-poker-muted dark:text-slate-300 font-medium mb-6">{offer.offerTitle}</p>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border border-dashed border-slate-300 dark:border-white/20 flex items-center justify-between mb-4 cursor-pointer hover:border-poker-primary hover:bg-white dark:hover:bg-slate-800 transition-colors" onClick={() => copyToClipboard(offer.code)}>
                <code className="text-poker-text dark:text-poker-gold font-mono font-bold text-lg">{offer.code}</code>
                <Copy className="w-4 h-4 text-slate-400 hover:text-poker-primary transition-colors" />
              </div>

              <p className="text-xs text-poker-muted dark:text-slate-500 text-center mb-4">Expires: {offer.expiry}</p>
              
              <Link to={`/promo-codes/${offer.id}`} className="flex items-center justify-center gap-1 text-sm text-poker-primary hover:underline">
                <Info className="w-3 h-3" /> More Details
              </Link>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5 text-center">
                 <button 
                    onClick={() => copyToClipboard(offer.code)}
                    className="text-sm font-bold text-poker-primary hover:text-blue-700 dark:hover:text-white transition-colors w-full"
                 >
                    Copy & Claim Bonus
                 </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCodes;