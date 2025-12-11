import Database from '../lib/Database';
import { PokerSite, NewsArticle, PromoOffer, Tournament } from '../models/types';
import { POKER_SITES, NEWS_ARTICLES, PROMO_OFFERS, TOURNAMENTS } from '../constants';

/**
 * PokerService acts as the Business Logic Layer.
 * It attempts to fetch from the DB, and falls back to Constants (Mock Data)
 * if the DB connection fails (common in browser-only previews).
 */
export class PokerService {
  private db: Database;
  private useMock: boolean = true; // Defaulting to mock for browser preview stability

  constructor() {
    this.db = Database.getInstance();
    // Check if we are in a browser environment to avoid MSSQL calls
    if (typeof window !== 'undefined') {
        this.useMock = true;
    }
  }

  // --- Reviews Logic ---

  async getReviews(): Promise<PokerSite[]> {
    if (this.useMock) return Promise.resolve(POKER_SITES);

    try {
      const query = `SELECT * FROM PokerSites ORDER BY rating DESC`;
      return await this.db.query<PokerSite>(query);
    } catch (e) {
      console.warn('Falling back to mock reviews');
      return Promise.resolve(POKER_SITES);
    }
  }

  async getReviewById(id: string): Promise<PokerSite | undefined> {
    if (this.useMock) return Promise.resolve(POKER_SITES.find(s => s.id === id));

    try {
      const query = `SELECT * FROM PokerSites WHERE id = @id`;
      const results = await this.db.query<PokerSite>(query, { id });
      return results[0];
    } catch (e) {
      return Promise.resolve(POKER_SITES.find(s => s.id === id));
    }
  }

  // --- Promos Logic ---

  async getPromos(): Promise<PromoOffer[]> {
    if (this.useMock) return Promise.resolve(PROMO_OFFERS);

    try {
      const query = `SELECT * FROM PromoOffers`;
      return await this.db.query<PromoOffer>(query);
    } catch (e) {
      return Promise.resolve(PROMO_OFFERS);
    }
  }

  async getPromoById(id: string): Promise<PromoOffer | undefined> {
    if (this.useMock) return Promise.resolve(PROMO_OFFERS.find(p => p.id === id));
    
    try {
        const query = `SELECT * FROM PromoOffers WHERE id = @id`;
        const results = await this.db.query<PromoOffer>(query, { id });
        return results[0];
    } catch (e) {
        return Promise.resolve(PROMO_OFFERS.find(p => p.id === id));
    }
  }

  // --- News Logic ---

  async getNews(): Promise<NewsArticle[]> {
    if (this.useMock) return Promise.resolve(NEWS_ARTICLES);

    try {
      const query = `SELECT * FROM NewsArticles ORDER BY date DESC`;
      return await this.db.query<NewsArticle>(query);
    } catch (e) {
      return Promise.resolve(NEWS_ARTICLES);
    }
  }

  async getNewsById(id: string): Promise<NewsArticle | undefined> {
    if (this.useMock) return Promise.resolve(NEWS_ARTICLES.find(n => n.id === id));

    try {
      const query = `SELECT * FROM NewsArticles WHERE id = @id`;
      const results = await this.db.query<NewsArticle>(query, { id });
      return results[0];
    } catch (e) {
      return Promise.resolve(NEWS_ARTICLES.find(n => n.id === id));
    }
  }

  // --- Tournaments Logic ---

  async getTournaments(): Promise<Tournament[]> {
      if (this.useMock) return Promise.resolve(TOURNAMENTS);

      try {
          const query = `SELECT * FROM Tournaments ORDER BY date ASC`;
          return await this.db.query<Tournament>(query);
      } catch (e) {
          return Promise.resolve(TOURNAMENTS);
      }
  }
}

export const pokerService = new PokerService();