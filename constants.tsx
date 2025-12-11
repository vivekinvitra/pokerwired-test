import { PokerSite, NewsArticle, PromoOffer, Tournament } from './models/types';
import { Trophy, Shield, Zap, Globe } from 'lucide-react';
import React from 'react';

export const POKER_SITES: PokerSite[] = [
  {
    id: 'gg-poker',
    name: 'GGPoker',
    rating: 4.9,
    bonus: '100% Match up to $600',
    promoCode: 'WIREDVIP',
    logoUrl: 'https://picsum.photos/seed/gg/200/200',
    features: ['Fish Buffet Rewards', 'Smart HUD', 'Massive Tournaments'],
    reviewSummary: 'The world\'s largest poker room with innovative features and huge prize pools.',
    link: '#ggpoker',
    pros: ['Massive player traffic 24/7', 'Innovative software features (staking, smart HUD)', 'Huge tournament guarantees (WSOP Online)'],
    cons: ['No HUDs allowed (except internal Smart HUD)', 'Rake can be higher for high stakes'],
    verdict: 'GGPoker is the undisputed king of online poker in 2024. Whether you are a grinder or a recreational player, the software and promotions are unmatched.',
    softwareRating: 5.0,
    trafficRating: 5.0,
    bonusRating: 4.5
  },
  {
    id: 'pokerstars',
    name: 'PokerStars',
    rating: 4.8,
    bonus: '$30 Free Play or 100% up to $600',
    promoCode: 'STARS600',
    logoUrl: 'https://picsum.photos/seed/stars/200/200',
    features: ['Best Software', 'Home Games', 'Zoom Poker'],
    reviewSummary: 'The industry standard for software stability and game variety.',
    link: '#pokerstars',
    pros: ['Industry-leading software stability', 'Wide variety of mixed games', 'Excellent security and fast withdrawals'],
    cons: ['Rewards system is harder to clear than competitors', 'Tougher competition at mid-stakes'],
    verdict: 'PokerStars remains the gold standard for software and game integrity. It is the best place for mixed game players and tournament grinders.',
    softwareRating: 5.0,
    trafficRating: 4.8,
    bonusRating: 4.2
  },
  {
    id: '888poker',
    name: '888poker',
    rating: 4.5,
    bonus: '$88 Free No Deposit Needed',
    promoCode: 'NEW888',
    logoUrl: 'https://picsum.photos/seed/888/200/200',
    features: ['Soft Fields', 'Blast Poker', 'Daily Freerolls'],
    reviewSummary: 'Excellent for beginners with softer competition and great no-deposit offers.',
    link: '#888poker',
    pros: ['Very soft competition', 'Great no-deposit bonus for new players', 'Excellent webcam tables'],
    cons: ['Software feels slightly dated', 'Traffic is lower than GG or Stars'],
    verdict: '888poker is the perfect site for casual players and beginners. The fields are incredibly soft, making it easier to win.',
    softwareRating: 3.8,
    trafficRating: 4.0,
    bonusRating: 4.9
  },
  {
    id: 'wpt-global',
    name: 'WPT Global',
    rating: 4.6,
    bonus: '100% Match up to $1,200',
    promoCode: 'WPTWIRE',
    logoUrl: 'https://picsum.photos/seed/wpt/200/200',
    features: ['WPT Satellites', 'NFT Avatars', 'Global Pool'],
    reviewSummary: 'The new challenger bringing the WPT experience online with a massive welcome bonus.',
    link: '#wptglobal',
    pros: ['Massive welcome bonus', 'Access to global liquidity pool', 'Exclusive satellites to live WPT events'],
    cons: ['Mobile-focused interface might annoy desktop users', 'Newer platform has occasional bugs'],
    verdict: 'WPT Global is the most exciting new entrant. If you want to qualify for live events and enjoy a massive deposit match, this is the place.',
    softwareRating: 4.2,
    trafficRating: 4.3,
    bonusRating: 5.0
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'WSOP 2025 Schedule Announced: What to Expect',
    excerpt: 'The World Series of Poker has released the preliminary schedule for 2025, featuring record-breaking guarantees.',
    category: 'Tournaments',
    author: 'Daniel Smyth',
    date: 'Oct 24, 2024',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    content: `<p>The World Series of Poker (WSOP) has officially unveiled the preliminary schedule for its 2025 iteration, setting the stage for what organizers promise will be the "biggest and boldest" series in history. Returning to the Las Vegas Strip, the series will once again take place at the Horseshoe and Paris Las Vegas.</p>
    <h3>Record-Breaking Guarantees</h3>
    <p>Among the highlights is the confirmation of the Main Event, which will maintain its $10,000 buy-in. Last year's event shattered attendance records, and officials are aiming even higher for 2025. "We are building on the momentum of the past few years to deliver an experience that every poker player dreams of," said WSOP Executive Director Ty Stewart.</p>
    <h3>New Events on the Horizon</h3>
    <p>Rumors are circulating about several new bracelet events, including a Mystery Bounty PLO tournament and a higher buy-in Seniors Event. The full schedule is expected to be released in early 2025, but players can already start planning their summer pilgrimage.</p>
    <p>Stay tuned to PokerWired for full breakdowns of the schedule as more details emerge.</p>`
  },
  {
    id: '2',
    title: 'Top 5 Strategies for Mystery Bounty Tournaments',
    excerpt: 'Mystery Bounties are taking the world by storm. Here is how to adjust your math and aggression.',
    category: 'Strategy',
    author: 'Ike Haxton',
    date: 'Oct 22, 2024',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    content: `<p>Mystery Bounty tournaments have revolutionized the live and online poker landscape. Unlike standard KOs, where the bounty value is fixed, Mystery Bounties offer a randomized prize that is only revealed after you eliminate a player and draw an envelope (or open a chest online).</p>
    <h3>1. Survive Until the Bounty Stage</h3>
    <p>In most Mystery Bounty events, the bounties only kick in during Day 2 or after the money bubble bursts. This means your early game strategy should be focused purely on survival and chip accumulation, similar to a standard freezeout. Do not make -EV calls early just to bust a player.</p>
    <h3>2. Adjust Your Calling Ranges Late</h3>
    <p>Once bounties are in play, the math changes drastically. If the top bounty is massive (e.g., $100k in a $1k buy-in), the chip value of covering a short stack skyrockets. You should be calling significantly wider when you cover opponents.</p>
    <h3>3. Know the Remaining Bounty Pool</h3>
    <p>Always keep an eye on the tournament clock or lobby to see which big bounties have already been pulled. If the top prizes are gone, revert to a more standard strategy.</p>`
  },
  {
    id: '3',
    title: 'Online Poker Regulation: New States Entering the Fold?',
    excerpt: 'Rumors swirl about New York and Kentucky potentially legalizing online poker in the coming legislative session.',
    category: 'Industry',
    author: 'Sarah Cole',
    date: 'Oct 20, 2024',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    content: `<p>The landscape of regulated online poker in the United States could be set for a major expansion in 2025. Legislative sources in New York and Kentucky have indicated renewed interest in bills that would legalize and regulate interactive gaming, including poker.</p>
    <p>New York State Senator Joseph Addabbo has been a vocal proponent of iGaming, arguing that the state is losing millions in potential tax revenue to neighboring New Jersey and Pennsylvania. "It's time to bring these activities out of the shadows and into a regulated market that protects consumers and benefits the state," Addabbo stated in a recent interview.</p>
    <p>Meanwhile, Kentucky is exploring online poker as part of a broader sports betting expansion package. If successful, these states could join the Multi-State Internet Gaming Agreement (MSIGA), potentially creating a liquidity pool rivaling international sites.</p>`
  },
  {
    id: '4',
    title: 'Review: Is PLO5 the Future of Cash Games?',
    excerpt: 'Why five-card Pot Limit Omaha is attracting action players away from traditional Hold\'em tables.',
    category: 'Opinion',
    author: 'Tom Dwan',
    date: 'Oct 18, 2024',
    imageUrl: 'https://picsum.photos/seed/news4/600/400',
    content: `<p>If you've logged into GGPoker or PokerStars recently, you may have noticed the explosion of 5-Card Pot Limit Omaha (PLO5) tables. Once a niche variant, PLO5 is rapidly becoming the game of choice for high-action players.</p>
    <h3>More Cards, More Action</h3>
    <p>The appeal is simple: five cards give you more playable hands and more ways to connect with the board. This leads to bigger pots, more multi-way action, and inevitably, higher variance. For recreational players, this is a dream; for pros, it requires a significant adjustment in hand selection.</p>
    <p>In traditional PLO, top two pair or a naked nut flush draw might be strong enough to stack off. In PLO5, the equities run much closer together, meaning you often need the nuts with redraws to feel comfortable getting 100 big blinds in.</p>`
  }
];

export const PROMO_OFFERS: PromoOffer[] = [
  {
    id: 'p1',
    siteName: 'GGPoker',
    offerTitle: 'Exclusive $600 Match + Ticket',
    code: 'WIREDVIP',
    expiry: 'Dec 31, 2024',
    verified: true,
    type: 'Deposit',
    description: 'Get a 100% matched bonus on your first deposit up to $600. The bonus is released in $5 increments for every $20 paid in rake.',
    terms: ['New players only', 'Min deposit $10', 'Wagering requirement applies', '18+'],
    stepsToClaim: ['Download GGPoker App', 'Create an Account', 'Enter code WIREDVIP during registration', 'Make a deposit of at least $10']
  },
  {
    id: 'p2',
    siteName: '888poker',
    offerTitle: '$88 Free Play (No Deposit)',
    code: 'AUTOMATIC',
    expiry: 'Ongoing',
    verified: true,
    type: 'No Deposit',
    description: 'Receive $88 in free play just for signing up. No deposit required. The bonus is granted in tournament tickets and pending bonus.',
    terms: ['New players only', 'Email verification required', 'Bonus expires in 7 days', '18+'],
    stepsToClaim: ['Register at 888poker via our link', 'Verify your email address', 'Log in to claim your free package']
  },
  {
    id: 'p3',
    siteName: 'PokerStars',
    offerTitle: 'Spin & Go Ticket Bundle',
    code: 'SPIN100',
    expiry: 'Nov 30, 2024',
    verified: true,
    type: 'Deposit',
    description: 'Deposit $20 or more and receive $30 worth of Spin & Go tickets instantly.',
    terms: ['Min deposit $20', 'Tickets expire in 21 days', '18+'],
    stepsToClaim: ['Register at PokerStars', 'Go to Cashier', 'Select Deposit', 'Enter code SPIN100']
  },
  {
    id: 'p4',
    siteName: 'PartyPoker',
    offerTitle: '$30 Free Play',
    code: 'PARTY30',
    expiry: 'Dec 15, 2024',
    verified: false,
    type: 'Deposit',
    description: 'Deposit $10 and get $10 in tickets. Deposit $20 and get $30 in tickets.',
    terms: ['New players only', 'Min deposit $10', '18+'],
    stepsToClaim: ['Register at PartyPoker', 'Deposit at least $10', 'Tickets credited automatically']
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    brand: 'WPT',
    brandLogoUrl: 'https://picsum.photos/seed/wptlogo/100/100',
    eventName: 'WPT World Championship',
    date: 'Dec 03 - Dec 21, 2024',
    buyIn: '$10,400',
    prizePool: '$40,000,000 GTD',
    location: 'Wynn Las Vegas',
    status: 'Upcoming'
  },
  {
    id: '2',
    brand: 'WSOP',
    brandLogoUrl: 'https://picsum.photos/seed/wsoplogo/100/100',
    eventName: 'WSOP Paradise',
    date: 'Dec 06 - Dec 19, 2024',
    buyIn: '$5,300',
    prizePool: '$50,000,000 GTD',
    location: 'Atlantis Bahamas',
    status: 'Upcoming'
  },
  {
    id: '3',
    brand: 'EPT',
    brandLogoUrl: 'https://picsum.photos/seed/eptlogo/100/100',
    eventName: 'EPT Prague',
    date: 'Dec 04 - Dec 15, 2024',
    buyIn: '€5,300',
    prizePool: '€5,000,000 Est.',
    location: 'Hilton Prague',
    status: 'Live'
  },
   {
    id: '4',
    brand: 'GG',
    brandLogoUrl: 'https://picsum.photos/seed/gglogo/100/100',
    eventName: 'WSOP Winter Circuit',
    date: 'Dec 15 - Jan 10, 2025',
    buyIn: '$525',
    prizePool: '$100,000,000 GTD',
    location: 'GGPoker (Online)',
    status: 'Upcoming'
  },
  {
    id: '5',
    brand: '888',
    brandLogoUrl: 'https://picsum.photos/seed/888logo/100/100',
    eventName: 'The Festival Online',
    date: 'Jan 05 - Jan 25, 2025',
    buyIn: '$109',
    prizePool: '$1,000,000 GTD',
    location: '888poker (Online)',
    status: 'Upcoming'
  }
];

export const CATEGORIES = [
  { name: 'Tournaments', icon: <Trophy className="w-5 h-5" />, slug: 'tournaments' },
  { name: 'Strategy', icon: <Zap className="w-5 h-5" />, slug: 'strategy' },
  { name: 'Industry News', icon: <Globe className="w-5 h-5" />, slug: 'industry' },
  { name: 'Security', icon: <Shield className="w-5 h-5" />, slug: 'security' },
];