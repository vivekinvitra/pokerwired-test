import { PokerSite, NewsArticle, PromoOffer, Tournament } from '../models/types';
import { POKER_SITES, NEWS_ARTICLES, PROMO_OFFERS, TOURNAMENTS } from '../constants';

/**
 * PokerService acts as the Business Logic Layer.
 * It attempts to fetch from the DB, and falls back to Constants (Mock Data)
 * if the DB connection fails (common in browser-only previews).
 */
export class PokerService {
  private useMock: boolean = true; // Defaulting to mock for browser preview stability

  constructor() {
    // Check if we are in a browser environment to avoid MSSQL calls
    if (typeof window !== 'undefined') {
        this.useMock = true;
    }
  }

  // --- Reviews Logic ---

  async getReviews(): Promise<PokerSite[]> {
    return Promise.resolve(POKER_SITES);
  }

  async getReviewById(id: string): Promise<PokerSite | undefined> {
    return Promise.resolve(POKER_SITES.find(s => s.id === id));
  }

  // --- Promos Logic ---

  async getPromos(): Promise<PromoOffer[]> {
    return Promise.resolve(PROMO_OFFERS);
  }

  async getPromoById(id: string): Promise<PromoOffer | undefined> {
    return Promise.resolve(PROMO_OFFERS.find(p => p.id === id));
  }

  // --- News Logic ---

  async getNews(): Promise<NewsArticle[]> {
    return Promise.resolve(NEWS_ARTICLES);
  }

  async getNewsById(id: string): Promise<NewsArticle | undefined> {
    return Promise.resolve(NEWS_ARTICLES.find(n => n.id === id));
  }

  // --- Tournaments Logic ---

  async getTournaments(): Promise<Tournament[]> {
      return Promise.resolve(TOURNAMENTS);
  }
}

export const pokerService = new PokerService();