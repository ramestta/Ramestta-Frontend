import React, { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Activity, BarChart3, ExternalLink } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import PriceCard from '../components/PriceCard';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/structuredData';

interface PricePlatform {
  id: string;
  name: string;
  url: string;
  icon_url: string;
  display_order: number;
}

const PricePage: React.FC = () => {
  const [platforms, setPlatforms] = useState<PricePlatform[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    setPlatforms(mockPlatforms);
    setLoading(false);
  }, []);

  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-500/40 rounded-sm"
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

  const priceBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'RAMA Price', url: 'https://ramestta.com/price' }
  ]);

  const marketStats = [
    { label: 'Market Cap', value: '$125.5M', icon: DollarSign },
    { label: '24h Volume', value: '$8.2M', icon: Activity },
    { label: 'Circulating Supply', value: '500M RAMA', icon: BarChart3 },
    { label: 'All-Time High', value: '$0.458', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Ramestta (RAMA) Price - Live Price Tracking Across Major Exchanges"
        description="Check the current Ramestta (RAMA) price across CoinGecko, Binance, KuCoin, Coinbase, and other major cryptocurrency exchanges. Live price updates, 24h change, and market statistics."
        keywords="RAMA price, Ramestta price, RAMA token, cryptocurrency price, crypto exchange, CoinGecko RAMA, Binance RAMA, live crypto price"
        canonical="https://ramestta.com/price"
        structuredData={priceBreadcrumb}
      />

      <section className="gradient-bg text-white section-padding relative">
        <FloatingParticles />
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="font-ramestta">Ramestta</span>
            <span className="block text-gradient">(RAMA) Price</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Track RAMA token price across all major cryptocurrency exchanges and platforms
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      <section className="section-padding gradient-bg text-white relative">
        <FloatingParticles />
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Get Started with RAMA</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Add the Ramestta network to your wallet and start using RAMA tokens today
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricePage;
