import React from 'react';
import { ArrowLeftRight, Shield, Zap, TrendingUp, DollarSign, Droplets, Lock, ExternalLink, Code, Award } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const SwapPage: React.FC = () => {
  const swapFeatures = [
    {
      icon: Zap,
      title: 'Lightning-Fast Swaps',
      description: 'Execute token swaps in under 2 seconds with negligible gas fees ($0.0002-$0.001)'
    },
    {
      icon: Droplets,
      title: 'Deep Liquidity',
      description: 'Access canonical WETH, WBTC, and stablecoin pairs mirrored from Polygon liquidity'
    },
    {
      icon: TrendingUp,
      title: 'Low Slippage',
      description: 'Optimized routing and concentrated liquidity pools minimize price impact'
    },
    {
      icon: Shield,
      title: 'Audited & Secure',
      description: 'All smart contracts audited by leading security firms with ongoing monitoring'
    }
  ];

  const tokenPairs = [
    { base: 'RAMA', quote: 'USDT', tvl: '$2.5M', volume24h: '$450K' },
    { base: 'RAMA', quote: 'USDC', tvl: '$1.8M', volume24h: '$320K' },
    { base: 'RAMA', quote: 'POL', tvl: '$1.2M', volume24h: '$210K' },
    { base: 'WETH', quote: 'USDT', tvl: '$3.2M', volume24h: '$580K' },
    { base: 'WBTC', quote: 'USDC', tvl: '$2.1M', volume24h: '$390K' },
    { base: 'WETH', quote: 'RAMA', tvl: '$1.5M', volume24h: '$270K' }
  ];

  const lpIncentives = [
    {
      title: 'Base Swap Fees',
      percentage: '83%',
      description: 'Liquidity providers earn 83% of all swap fees from their pools',
      color: 'text-primary-400'
    },
    {
      title: 'Ecosystem Rewards',
      percentage: 'Variable',
      description: 'Additional RAMA emissions from the 80% Ecosystem Reward Pool based on TVL and volume',
      color: 'text-green-400'
    },
    {
      title: 'Longevity Bonus',
      percentage: 'Up to 2x',
      description: 'Long-term LPs receive multiplier bonuses on rewards for extended participation',
      color: 'text-secondary-400'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1: Foundation (Q1-Q2 2025)',
      items: [
        'AMM v2 launch with core pairs',
        'Router & Quoter API deployment',
        'Wallet integration (MetaMask, WalletConnect)',
        'Initial LP incentive program'
      ]
    },
    {
      phase: 'Phase 2: Enhancement (Q3-Q4 2025)',
      items: [
        'Concentrated liquidity (AMM v3)',
        'Limit orders & advanced trading',
        'Aggregator partnerships',
        'Mobile app launch'
      ]
    },
    {
      phase: 'Phase 3: Scale (2026)',
      items: [
        'Perpetual futures trading',
        'Cross-chain routing integration',
        'Institutional liquidity pools',
        'Gasless meta-transactions'
      ]
    }
  ];

  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary-500/40 rounded-sm"
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

  const injectGlobalStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0) translateX(20px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(10px) rotate(270deg);
        }
        100% {
          transform: translateY(0) translateX(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  };

  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">
              RamesttaSwap
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Native DEX on Ramestta L3 — Instant swaps, deep liquidity, and sub-cent fees for seamless on-chain trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ramaswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ArrowLeftRight className="mr-2" size={20} />
              Launch Swap
            </a>
            <button className="btn-secondary">
              View Pools
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why RamesttaSwap?</h2>
            <p className="text-xl text-gray-300">Built for speed, security, and immediate on-chain liquidity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {swapFeatures.map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Top Trading Pairs</h2>
            <p className="text-xl text-gray-300">Instant liquidity for RAMA and major assets</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                <thead className="bg-gray-800/50">
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 font-semibold text-white">Pair</th>
                    <th className="text-left py-4 px-6 font-semibold text-white">TVL</th>
                    <th className="text-left py-4 px-6 font-semibold text-white">24h Volume</th>
                    <th className="text-left py-4 px-6 font-semibold text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenPairs.map((pair, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white">{pair.base}</span>
                          <ArrowLeftRight className="text-primary-400" size={16} />
                          <span className="font-bold text-white">{pair.quote}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-green-400 font-semibold">{pair.tvl}</td>
                      <td className="py-4 px-6 text-gray-300 font-medium">{pair.volume24h}</td>
                      <td className="py-4 px-6">
                        <a
                          href="https://ramaswap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 font-medium"
                        >
                          Trade →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Fee Model & RAMA Economics</h2>
            <p className="text-xl text-gray-300">Every swap strengthens the ecosystem through burns, treasury, and LP rewards</p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Swap Fee Distribution (0.20% baseline)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-400 mb-2">83%</div>
                  <h4 className="text-white font-semibold mb-2">Liquidity Providers</h4>
                  <p className="text-gray-300 text-sm">Direct fee earnings to LPs</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">10%</div>
                  <h4 className="text-white font-semibold mb-2">Ramestta Treasury</h4>
                  <p className="text-gray-300 text-sm">Protocol development & ops</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary-400 mb-2">7%</div>
                  <h4 className="text-white font-semibold mb-2">Auto Buyback & Burn</h4>
                  <p className="text-gray-300 text-sm">Permanent RAMA deflation</p>
                </div>
              </div>
              <div className="relative h-4 rounded-full overflow-hidden flex">
                <div className="bg-primary-500 flex-[83]"></div>
                <div className="bg-green-500 flex-[10]"></div>
                <div className="bg-secondary-500 flex-[7]"></div>
              </div>
            </div>
          </div>

          <div className="card p-8 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 border-primary-500/30">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">RAMA Value Accrual</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="text-primary-400 mx-auto mb-4" size={40} />
                <h5 className="text-white font-semibold mb-2">Gas Fees</h5>
                <p className="text-gray-300 text-sm">All swaps pay RAMA gas → EIP-1559 base fee burn</p>
              </div>
              <div className="text-center">
                <TrendingUp className="text-secondary-400 mx-auto mb-4" size={40} />
                <h5 className="text-white font-semibold mb-2">Swap Fee Burn</h5>
                <p className="text-gray-300 text-sm">7% of swap fees automatically buyback & burn RAMA</p>
              </div>
              <div className="text-center">
                <DollarSign className="text-green-400 mx-auto mb-4" size={40} />
                <h5 className="text-white font-semibold mb-2">Treasury Growth</h5>
                <p className="text-gray-300 text-sm">10% of fees fund sustainable protocol development</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-sm text-gray-300 text-center leading-relaxed">
                <strong className="text-white">Net Effect:</strong> As swap volume increases, RAMA supply contracts through burns
                while treasury and LP incentives remain sustainable—creating long-term value unrelated to emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Liquidity Provider Incentives</h2>
            <p className="text-xl text-gray-300">Earn multiple revenue streams by providing liquidity</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {lpIncentives.map((incentive, index) => (
              <div key={index} className="card p-8">
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold ${incentive.color} mb-2`}>{incentive.percentage}</div>
                  <h3 className="text-xl font-bold text-white">{incentive.title}</h3>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">{incentive.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">How LP Rewards Are Calculated</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold mb-1">TVL-Weighted Distribution</p>
                  <p className="text-gray-300 text-sm">Higher TVL pools receive proportionally more ecosystem rewards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold mb-1">Volume Multiplier</p>
                  <p className="text-gray-300 text-sm">Pools with high trading volume earn bonus reward multipliers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="text-secondary-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold mb-1">Longevity Score</p>
                  <p className="text-gray-300 text-sm">Long-term LPs receive up to 2x multiplier on rewards over time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold mb-1">Impermanent Loss Protection</p>
                  <p className="text-gray-300 text-sm">Governance can allocate additional rewards to offset IL on strategic pairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Roadmap</h2>
            <p className="text-xl text-gray-300">RamesttaSwap evolution and upcoming features</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="card p-8">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{phase.phase}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Developer Integration</h2>
            <p className="text-xl text-gray-300">Build on top of RamesttaSwap with our SDK and APIs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Code className="text-primary-400 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Router & Quoter API</h3>
              <p className="text-gray-300 mb-6">REST and GraphQL endpoints for best-price routing and quote generation</p>
              <button className="btn-secondary text-sm">View Docs</button>
            </div>
            <div className="card p-8 text-center">
              <Shield className="text-green-400 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">SDK & Templates</h3>
              <p className="text-gray-300 mb-6">TypeScript SDK with pool creation templates and swap helpers</p>
              <button className="btn-secondary text-sm">Get Started</button>
            </div>
            <div className="card p-8 text-center">
              <Droplets className="text-secondary-400 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Indexing</h3>
              <p className="text-gray-300 mb-6">Subgraph support for The Graph and real-time event streaming</p>
              <button className="btn-secondary text-sm">Explore API</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Start Trading on RamesttaSwap</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience instant swaps with negligible fees and deep liquidity on Ramestta L3
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ramaswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Launch Swap <ExternalLink className="ml-2" size={16} />
            </a>
            <button className="btn-secondary">
              Provide Liquidity
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwapPage;
