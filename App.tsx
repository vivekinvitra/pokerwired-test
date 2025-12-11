import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Import Page Controllers
import Home from './app/page';
import Reviews from './app/reviews/page';
import ReviewDetail from './app/reviews/[id]/page';
import PromoCodes from './app/promo-codes/page';
import PromoDetail from './app/promo-codes/[id]/page';
import News from './app/news/page';
import NewsDetail from './app/news/[id]/page';
import PokerSites from './app/poker-sites/page';
import Category from './pages/Category'; // Keeping Category as legacy page for now
import { RoutePath } from './models/types';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.REVIEWS} element={<Reviews />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path={RoutePath.POKER_SITES} element={<PokerSites />} />
          <Route path={RoutePath.PROMO_CODES} element={<PromoCodes />} />
          <Route path="/promo-codes/:id" element={<PromoDetail />} />
          <Route path={RoutePath.NEWS} element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path={RoutePath.CATEGORY} element={<Category />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;