import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, Twitter, Facebook, Instagram } from 'lucide-react';
import { RoutePath } from '../models/types';
import AiAssistant from './AiAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial theme check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: RoutePath.HOME },
    { name: 'Poker Sites', path: RoutePath.POKER_SITES },
    { name: 'Reviews', path: RoutePath.REVIEWS },
    { name: 'Promo Codes', path: RoutePath.PROMO_CODES },
    { name: 'News', path: RoutePath.NEWS },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-poker-border dark:border-white/5 bg-white/90 dark:bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to={RoutePath.HOME} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-poker-primary to-orange-600 flex items-center justify-center text-white font-bold shadow-lg shadow-poker-primary/20 group-hover:shadow-poker-primary/40 transition-all">
              P
            </div>
            <span className="text-xl font-bold tracking-tight text-poker-text dark:text-white">
              Poker<span className="text-poker-primary">Wired</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-poker-primary ${
                  location.pathname === link.path ? 'text-poker-primary' : 'text-poker-muted dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-poker-muted hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <div className="h-6 w-px bg-poker-border dark:bg-slate-700 mx-1"></div>

            <Link to={RoutePath.REVIEWS} className="px-5 py-2 bg-poker-primary text-white font-bold rounded-full text-sm hover:bg-poker-primaryHover shadow-lg shadow-poker-primary/25 transition-all">
              Play Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleTheme}
                className="p-2 text-poker-text dark:text-white"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
                className="p-2 text-poker-text dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-poker-surface dark:bg-poker-darkSurface border-b border-poker-border dark:border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-poker-primary' : 'text-poker-text dark:text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-poker-border dark:bg-white/10 my-2" />
            <Link to={RoutePath.REVIEWS} className="w-full py-3 bg-poker-primary text-white font-bold rounded-lg text-center shadow-lg shadow-poker-primary/20">
              Top Poker Sites
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        {children}
      </main>

      {/* AI Chat Widget */}
      <AiAssistant />

      {/* Footer */}
      <footer className="bg-white dark:bg-poker-darkSurface border-t border-poker-border dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-poker-primary to-orange-600 flex items-center justify-center text-xs font-bold text-white">
                  P
                </div>
                <span className="text-lg font-bold text-poker-text dark:text-white">PokerWired</span>
              </div>
              <p className="text-poker-muted dark:text-slate-400 text-sm leading-relaxed">
                Your ultimate guide to online poker. We provide honest reviews, exclusive bonus codes, and the latest industry news to help you win big.
              </p>
            </div>
            
            <div>
              <h4 className="text-poker-text dark:text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-poker-muted dark:text-slate-400">
                <li><Link to={RoutePath.POKER_SITES} className="hover:text-poker-primary dark:hover:text-white transition-colors">Poker Sites</Link></li>
                <li><Link to={RoutePath.REVIEWS} className="hover:text-poker-primary dark:hover:text-white transition-colors">Room Reviews</Link></li>
                <li><Link to={RoutePath.PROMO_CODES} className="hover:text-poker-primary dark:hover:text-white transition-colors">No Deposit Bonuses</Link></li>
                <li><Link to={RoutePath.NEWS} className="hover:text-poker-primary dark:hover:text-white transition-colors">Latest News</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-poker-text dark:text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-poker-muted dark:text-slate-400">
                <li><Link to="/category/tournaments" className="hover:text-poker-primary dark:hover:text-white transition-colors">Tournaments</Link></li>
                <li><Link to="/category/cash-games" className="hover:text-poker-primary dark:hover:text-white transition-colors">Cash Games</Link></li>
                <li><Link to="/category/software" className="hover:text-poker-primary dark:hover:text-white transition-colors">Software Reviews</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-poker-text dark:text-white font-bold mb-4">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-poker-primary hover:text-white dark:hover:bg-poker-primary transition-all text-poker-muted dark:text-slate-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-poker-primary hover:text-white dark:hover:bg-poker-primary transition-all text-poker-muted dark:text-slate-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-poker-primary hover:text-white dark:hover:bg-poker-primary transition-all text-poker-muted dark:text-slate-300"><Instagram className="w-4 h-4" /></a>
              </div>
              <p className="text-xs text-poker-muted dark:text-slate-500">
                Gambling involves risk. Please gamble responsibly. 18+ only.
              </p>
            </div>
          </div>
          
          <div className="border-t border-poker-border dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-poker-muted dark:text-slate-500 text-xs">© 2024 PokerWired Redux. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-poker-muted dark:text-slate-500">
              <a href="#" className="hover:text-poker-text dark:hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-poker-text dark:hover:text-slate-300">Terms of Service</a>
              <a href="#" className="hover:text-poker-text dark:hover:text-slate-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;