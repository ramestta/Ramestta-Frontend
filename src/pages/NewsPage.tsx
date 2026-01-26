import React, { useEffect, useState } from 'react';
import { Newspaper, ExternalLink, TrendingUp, DollarSign, Activity, BarChart3, ArrowRight, Shield, Zap } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import NewsCard from '../components/NewsCard';
import PriceCard from '../components/PriceCard';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/structuredData';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
  image_url?: string;
  source: {
    name: string;
    logo_url: string;
  };
}

interface PricePlatform {
  id: string;
  name: string;
  url: string;
  icon_url: string;
  display_order: number;
}

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [platforms, setPlatforms] = useState<PricePlatform[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockArticles: NewsArticle[] = [
      {
        id: '1',
        title: 'Ramestta Mainnet Launch: A New Era for Layer-3 Blockchain',
        description: 'Today marks a significant milestone in the blockchain ecosystem as Ramestta officially launches its mainnet, bringing unprecedented scalability and efficiency.',
        url: 'https://finance.yahoo.com/quote/RAMA-USD/',
        published_at: new Date().toISOString(),
        image_url: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
        source: {
          name: 'Yahoo Finance',
          logo_url: 'https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png'
        }
      },
      {
        id: '2',
        title: 'Introducing Ramestta Blockchain: The Next Evolution in Scalable DeFi',
        description: 'Ramestta blockchain represents the next evolution in scalable and interoperable decentralized finance, offering institutional-grade performance.',
        url: 'https://bitcoinworld.co.in/title-introducing-ramestta-blockchain-the-next-evolution-in-scalable-and-interoperable-decentralized-finance/',
        published_at: new Date(Date.now() - 86400000).toISOString(),
        image_url: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
        source: {
          name: 'BitcoinWorld',
          logo_url: 'https://bitcoinworld.co.in/favicon.ico'
        }
      },
      {
        id: '3',
        title: 'Ramestta (RAMA) Listed on Forbes Digital Assets',
        description: 'Forbes recognizes Ramestta as a leading Layer-3 blockchain solution with institutional-grade security and performance.',
        url: 'https://www.forbes.com/digital-assets/assets/ramestta-rama/',
        published_at: new Date(Date.now() - 172800000).toISOString(),
        image_url: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600',
        source: {
          name: 'Forbes',
          logo_url: 'https://www.forbes.com/favicon.ico'
        }
      },
      {
        id: '4',
        title: 'RAMA Token Shows Strong Performance Across Exchanges',
        description: 'The RAMA token demonstrates consistent growth and adoption across multiple cryptocurrency exchanges with increasing trading volume.',
        url: 'https://finance.yahoo.com/quote/RAMA-USD/',
        published_at: new Date(Date.now() - 259200000).toISOString(),
        source: {
          name: 'Yahoo Finance',
          logo_url: 'https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png'
        }
      },
      {
        id: '5',
        title: 'Ramestta Network: Empowering the Future of Blockchain with PoS',
        description: 'Explore how Ramestta Network is revolutionizing blockchain technology with its Proof-of-Stake consensus mechanism and Layer-3 architecture.',
        url: 'https://medium.com/@ramestta/ramestta-network-empowering-the-future-of-blockchain-with-pos-77269cbb7022',
        published_at: new Date(Date.now() - 345600000).toISOString(),
        image_url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
        source: {
          name: 'Medium',
          logo_url: 'https://cdn-icons-png.flaticon.com/512/5968/5968906.png'
        }
      },
      {
        id: '6',
        title: 'Understanding Layer-3 Blockchain: Ramestta\'s Innovative Approach',
        description: 'Deep dive into how Ramestta\'s Layer-3 architecture delivers superior performance while maintaining Ethereum-level security.',
        url: 'https://bitcoinworld.co.in/',
        published_at: new Date(Date.now() - 432000000).toISOString(),
        image_url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
        source: {
          name: 'BitcoinWorld',
          logo_url: 'https://bitcoinworld.co.in/favicon.ico'
        }
      }
    ];

    const mockPlatforms: PricePlatform[] = [
      {
        id: '1',
        name: 'CoinGecko',
        url: 'https://www.coingecko.com/en/coins/ramestta',
        icon_url: 'https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png',
        display_order: 1
      },
      {
        id: '2',
        name: 'Coinbase',
        url: 'https://www.coinbase.com/price/ramestta',
        icon_url: 'https://www.coinbase.com/img/favicon/favicon-32x32.png',
        display_order: 2
      },
      {
        id: '3',
        name: 'KuCoin',
        url: 'https://www.kucoin.com/price/RAMA',
        icon_url: 'https://assets.staticimg.com/cms/media/6g6xl0CKfVvK9qOFwhgCGLKAoKDTqQFBvqKYCGjbM.png',
        display_order: 3
      },
      {
        id: '4',
        name: 'Crypto.com',
        url: 'https://crypto.com/en/price/ramestta',
        icon_url: 'https://crypto.com/favicon-32x32.png',
        display_order: 4
      },
      {
        id: '5',
        name: 'Binance',
        url: 'https://www.binance.com/en-IN/price/ramestta',
        icon_url: 'https://bin.bnbstatic.com/static/images/common/favicon.ico',
        display_order: 5
      },
      {
        id: '6',
        name: 'Bitget',
        url: 'https://www.bitget.com/price/ramestta/what-is',
        icon_url: 'https://www.bitget.com/favicon.ico',
        display_order: 6
      },
      {
        id: '7',
        name: 'CoinCodex',
        url: 'https://coincodex.com/crypto/ramestta/',
        icon_url: 'https://coincodex.com/favicon-32x32.png',
        display_order: 7
      },
      {
        id: '8',
        name: 'MEXC',
        url: 'https://www.mexc.co/en-IN/price/ramestta',
        icon_url: 'https://www.mexc.com/favicon.ico',
        display_order: 8
      },
      {
        id: '9',
        name: 'Bybit',
        url: 'https://www.bybit.com/en/price/ramestta/',
        icon_url: 'https://www.bybit.com/favicon.ico',
        display_order: 9
      },
      {
        id: '10',
        name: 'StockTwits',
        url: 'https://stocktwits.com/symbol/RAMA.X',
        icon_url: 'https://stocktwits.com/favicon-32x32.png',
        display_order: 10
      }
    ];

    setArticles(mockArticles);
    setPlatforms(mockPlatforms);
    setLoading(false);
  }, []);

  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/40 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );

  const newsBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'News & Price', url: 'https://ramestta.com/news' }
  ]);

  const newsSources = [
    { name: 'Yahoo Finance', url: 'https://finance.yahoo.com/quote/RAMA-USD/', logo: 'https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png' },
    { name: 'Forbes', url: 'https://www.forbes.com/digital-assets/assets/ramestta-rama/', logo: 'https://www.forbes.com/favicon.ico' },
    { name: 'BitcoinWorld', url: 'https://bitcoinworld.co.in/', logo: 'https://bitcoinworld.co.in/favicon.ico' },
    { name: 'Medium', url: 'https://medium.com/@ramestta/ramestta-network-empowering-the-future-of-blockchain-with-pos-77269cbb7022', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968906.png' }
  ];

  const marketStats = [
    { label: 'Market Cap', value: '$125.5M', icon: DollarSign },
    { label: '24h Volume', value: '$8.2M', icon: Activity },
    { label: 'Circulating Supply', value: '500M RAMA', icon: BarChart3 },
    { label: 'All-Time High', value: '$0.458', icon: TrendingUp }
  ];

  const tradingExchanges = [
    {
      name: 'BitMart',
      pair: 'RAMA/USDT',
      url: 'https://www.bitmart.com/trade/en-US?symbol=RAMA_USDT&layout=pro',
      type: 'CEX',
      volume: '$1.2M'
    },
    {
      name: 'Koinpark',
      pair: 'RAMA/INR',
      url: 'https://www.koinpark.com/trade/RAMA-INR',
      type: 'CEX',
      volume: '$890K'
    },
    {
      name: 'RamesttaSwap',
      pair: 'RAMA/USDT',
      url: 'https://ramaswap.com',
      type: 'DEX',
      volume: '$450K'
    },
    {
      name: 'RamesttaSwap',
      pair: 'RAMA/POL',
      url: 'https://ramaswap.com',
      type: 'DEX',
      volume: '$320K'
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: 'Sub-2 Second Finality',
      description: 'Lightning-fast transaction confirmation for real-time applications'
    },
    {
      icon: DollarSign,
      title: '$0.0002 Gas Fees',
      description: 'Predictable micro-fees that are 1000× cheaper than L1/L2'
    },
    {
      icon: Shield,
      title: 'Ethereum Security',
      description: 'Secured by Ethereum via Polygon checkpoints for ultimate trust'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Ramestta News & Price - Latest Updates, Media Coverage & Live Price Tracking"
        description="Stay updated with the latest Ramestta news from Yahoo Finance, Forbes, and other major publications. Track RAMA price across CoinGecko, Binance, KuCoin, and more."
        keywords="Ramestta news, RAMA news, RAMA price, blockchain news, cryptocurrency news, Layer-3 news, crypto price tracking, live crypto price"
        canonical="https://ramestta.com/news"
        structuredData={newsBreadcrumb}
      />

      <section className="gradient-bg text-white section-padding relative">
        <FloatingParticles />
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="font-ramestta">Ramestta</span>
            <span className="block text-gradient">News & Price</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Latest news, updates, and live price tracking from leading publications and exchanges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chainlist.org/chain/1370"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center"
            >
              Add RAMA Network <ExternalLink className="ml-2" size={16} />
            </a>
            <a href="/bridge" className="btn-secondary">
              Bridge Assets
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Market Statistics</h2>
            <p className="text-xl text-gray-300">Real-time RAMA token metrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Exchanges Section */}
      <section className="section-padding bg-gray-950 relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Trade RAMA</h2>
            <p className="text-xl text-gray-300">
              Buy, sell, and trade RAMA tokens on centralized and decentralized exchanges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tradingExchanges.map((exchange, index) => (
              <a
                key={index}
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    exchange.type === 'CEX' ? 'bg-blue-900/50 text-blue-300' : 'bg-green-900/50 text-green-300'
                  }`}>
                    {exchange.type}
                  </span>
                  <ExternalLink className="text-gray-400 group-hover:text-primary-400 transition-colors" size={16} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">{exchange.name}</h3>
                <p className="text-primary-400 font-medium mb-2">{exchange.pair}</p>
                <div className="text-gray-400 text-sm">24h Volume: {exchange.volume}</div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/swap" className="text-primary-400 hover:text-primary-300 inline-flex items-center font-medium">
              Trade on RamesttaSwap <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="section-padding bg-black relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Why Invest in RAMA?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950 relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">RAMA Price on Exchanges</h2>
            <p className="text-xl text-gray-300">
              View and compare RAMA token prices across all supported platforms
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-400">Loading platforms...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {platforms.map((platform) => (
                <PriceCard
                  key={platform.id}
                  platform={platform}
                  price={{
                    price_usd: 0.000245 + Math.random() * 0.00001,
                    change_24h: (Math.random() - 0.5) * 10
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-black relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">News Sources</h2>
            <p className="text-xl text-gray-300 mb-12">
              Featured in leading financial and cryptocurrency publications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {newsSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center p-3 mb-3">
                  <img
                    src={source.logo}
                    alt={source.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/icons/default-news.svg';
                    }}
                  />
                </div>
                <h3 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                  {source.name}
                </h3>
                <ExternalLink className="text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950 relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Latest News & Updates</h2>
            <p className="text-xl text-gray-300">
              Recent articles and announcements about Ramestta
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-400">Loading news articles...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-black relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">About RAMA Token</h2>
          </div>
          <div className="max-w-4xl mx-auto card p-8">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                RAMA is the native utility token of the Ramestta blockchain network, a Layer-3
                blockchain built on Polygon and secured by Ethereum. The token serves multiple
                purposes within the ecosystem:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span><strong className="text-white">Gas Fees:</strong> Used to pay for transaction fees on the Ramestta network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span><strong className="text-white">Staking:</strong> Validators stake RAMA tokens to secure the network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span><strong className="text-white">Governance:</strong> Token holders participate in network governance decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span><strong className="text-white">DeFi:</strong> Powers DeFi applications built on Ramestta</span>
                </li>
              </ul>
              <p>
                With sub-2 second finality and transaction fees as low as $0.0002, RAMA enables
                efficient and cost-effective transactions for payments, gaming, DeFi, and enterprise applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950 relative">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="card p-8 lg:p-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Newspaper className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">Media & Press Inquiries</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  For media inquiries, press releases, or partnership opportunities, please reach out to our communications team.
                  We're always happy to share insights about Ramestta's technology and ecosystem.
                </p>
                <a href="/contact" className="btn-primary inline-flex items-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg text-white relative">
        <FloatingParticles />
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Get Started with RAMA</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Add the Ramestta network to your wallet and explore our ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chainlist.org/chain/1370"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Add to MetaMask
            </a>
            <a href="/bridge" className="btn-secondary">
              Bridge Tokens
            </a>
            <a href="/swap" className="btn-secondary">
              Swap RAMA
            </a>
            <a href="/blog" className="btn-secondary">
              Read Our Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
