export interface PokerSite {
  id: string;
  name: string;
  rating: number; // 0-5
  bonus: string;
  promoCode: string;
  logoUrl: string;
  features: string[];
  reviewSummary: string;
  link: string;
  pros: string[];
  cons: string[];
  verdict: string;
  softwareRating: number;
  trafficRating: number;
  bonusRating: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content?: string;
}

export interface PromoOffer {
  id: string;
  siteName: string;
  offerTitle: string;
  code: string;
  expiry: string;
  verified: boolean;
  type: 'Deposit' | 'No Deposit' | 'Freeroll';
  description?: string;
  terms?: string[];
  stepsToClaim?: string[];
}

export interface Tournament {
  id: string;
  brand: string;
  brandLogoUrl: string;
  eventName: string;
  date: string;
  buyIn: string;
  prizePool: string;
  location: string;
  status: 'Upcoming' | 'Live' | 'Completed';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum RoutePath {
  HOME = '/',
  REVIEWS = '/reviews',
  POKER_SITES = '/poker-sites',
  PROMO_CODES = '/promo-codes',
  NEWS = '/news',
  CATEGORY = '/category/:slug',
}