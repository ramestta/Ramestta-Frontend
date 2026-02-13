import React from 'react';
import { Coins, TrendingUp, Lock, Users, PieChart, Shield, Zap, DollarSign } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const TokenomicsPage: React.FC = () => {
  const supplyInfo = [
    { label: 'Total Supply', value: '1,000,000,000 RAMA', icon: Coins },
    { label: 'Initial Circulating', value: '5,000,000 RAMA (0.5%)', icon: TrendingUp },
    { label: 'Token Type', value: 'Native Gas Token', icon: Zap },
    { label: 'Decimals', value: '18', icon: DollarSign }
  ];

  const distribution = [
    { category: 'Validator + Ecosystem Reward Pool', percentage: 80, amount: '800,000,000', color: 'bg-primary-500', description: 'Mixed Utility — Secures network via staking AND powers adoption incentives (DEX/DeFi/partners/liquidity)' },
    { category: 'Core Project Development', percentage: 15, amount: '150,000,000', color: 'bg-blue-500', description: 'Long-term protocol engineering, security audits, infrastructure expansion' },
    { category: 'Marketing & Ecosystem Expansion', percentage: 4, amount: '40,000,000', color: 'bg-green-500', description: 'Growth, partnerships, global expansion, mass onboarding' },
    { category: 'Closed Community & Strategic Investors', percentage: 0.5, amount: '5,000,000', color: 'bg-secondary-500', description: 'Strategic alignment, advisory-level supporters only' },
    { category: 'Public Circulating Float at Genesis', percentage: 0.5, amount: '5,000,000', color: 'bg-yellow-500', description: 'Ultra-low initial supply = price stability + anti-dump protection' }
  ];

  const emissionSchedule = [
    { year: 'Year 1-10', rate: '1% annually', amount: '~10M RAMA/year', highlight: true },
    { year: 'Year 11+', rate: '0% (emissions end)', amount: '0 RAMA', highlight: false }
  ];

  const utilities = [
    {
      icon: Zap,
      title: 'Transaction Fees',
      description: 'Pay for all on-chain transactions with deterministic micro-fees ($0.0002-$0.001)'
    },
    {
      icon: Shield,
      title: 'Validator Staking',
      description: 'Stake RAMA to become a validator and earn block rewards and transaction fees'
    },
    {
      icon: Users,
      title: 'Governance Rights',
      description: 'Vote on network upgrades, parameter changes, and ecosystem proposals'
    },
    {
      icon: TrendingUp,
      title: 'Staking Rewards',
      description: 'Earn passive income by staking RAMA tokens with validators'
    }
  ];

  const tokenMetrics = [
    { metric: 'Max Supply', value: '1B RAMA', icon: Lock },
    { metric: 'Initial Circulating', value: '5M RAMA (0.5%)', icon: TrendingUp },
    { metric: 'Annual Inflation', value: '1% (10 years)', icon: DollarSign },
    { metric: 'Validator Pool', value: '800M (80%)', icon: Shield }
  ];

  const vestingSchedule = [
    {
      category: 'Validator + Ecosystem Pool (80%)',
      schedule: '10-year emission schedule',
      unlock: '1% annual inflation for validator rewards + ecosystem incentives'
    },
    {
      category: 'Core Development (15%)',
      schedule: '4-year linear vesting',
      unlock: 'Quarterly unlock for protocol engineering and security audits'
    },
    {
      category: 'Marketing & Growth (4%)',
      schedule: '3-year gradual release',
      unlock: 'Released based on partnership milestones and adoption metrics'
    },
    {
      category: 'Strategic Investors (0.5%)',
      schedule: '2-year vesting with 6-month cliff',
      unlock: 'Advisory-level alignment with long-term lock-up'
    },
    {
      category: 'Public Float (0.5%)',
      schedule: 'Available at genesis',
      unlock: 'Ultra-low initial supply for price stability'
    }
  ];

  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    <div className="min-h-screen bg-black overflow-x-hidden w-full max-w-[100vw]">
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="font-ramestta">RAMA</span>
            <span className="block text-gradient">
              Tokenomics
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Sustainable token economics designed for long-term network security, adoption, and value creation
          </p>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Token Overview</h2>
            <p className="text-xl text-gray-300">Key metrics and supply information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplyInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{info.label}</h3>
                <p className="text-lg font-bold text-white">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Token Distribution</h2>
            <p className="text-xl text-gray-300 mb-8">1,000,000,000 RAMA allocated for long-term network security and sustainable growth</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="card p-8">
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {distribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${item.color} rounded`}></div>
                    <span className="text-sm text-gray-300">{item.category} ({item.percentage}%)</span>
                  </div>
                ))}
              </div>
              <div className="relative h-8 rounded-full overflow-hidden flex">
                {distribution.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} flex items-center justify-center`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    {item.percentage >= 10 && (
                      <span className="text-white font-bold text-xs">{item.percentage}%</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distribution.map((item, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 ${item.color} rounded mr-3`}></div>
                  <h3 className="text-lg font-bold text-white">{item.category}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary-400">{item.percentage}%</span>
                  <span className="text-gray-400 ml-2">({item.amount} RAMA)</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Emission Schedule</h2>
            <p className="text-xl text-gray-300">Decreasing inflation model for sustainable long-term growth</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto -mx-3 sm:mx-0" style={{WebkitOverflowScrolling: 'touch'}}>
              <div className="inline-block min-w-full align-middle px-3 sm:px-0">
                <table className="w-full min-w-[500px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                  <thead className="bg-gray-800/50">
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Period</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Annual Emission Rate</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap hidden sm:table-cell">Estimated Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emissionSchedule.map((schedule, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-700 hover:bg-gray-800/50 transition-colors ${
                          schedule.highlight ? 'bg-primary-900/20' : ''
                        }`}
                      >
                        <td className="py-3 sm:py-4 px-3 sm:px-6 font-medium text-white text-xs sm:text-sm md:text-base">{schedule.year}</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-6 text-primary-400 font-semibold text-xs sm:text-sm md:text-base">{schedule.rate}</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-300 text-xs sm:text-sm md:text-base hidden sm:table-cell">{schedule.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 card p-6">
              <div className="flex items-start space-x-3">
                <TrendingUp className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-2">Three Deflationary Mechanisms</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    RAMA has three independent burn vectors: (1) EIP-1559 base fee burn on all gas transactions,
                    (2) Bridge fee buyback & burn (7% of bridge volume), and (3) RamesttaSwap fee buyback & burn (7% of swap fees).
                    Combined with only 1% annual inflation for 10 years, RAMA becomes increasingly deflationary as network usage scales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Vesting Schedule</h2>
            <p className="text-xl text-gray-300">Transparent unlock schedules for long-term alignment</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vestingSchedule.map((vesting, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <Lock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{vesting.category}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Schedule</p>
                  <p className="text-white font-medium">{vesting.schedule}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Unlock Pattern</p>
                  <p className="text-gray-300 text-sm">{vesting.unlock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Token Utility</h2>
            <p className="text-xl text-gray-300">Multiple use cases driving RAMA token demand</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {utilities.map((utility, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="feature-icon flex-shrink-0">
                    <utility.icon className="text-white relative z-10" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{utility.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{utility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Current Metrics</h2>
            <p className="text-xl text-gray-300">Live token statistics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tokenMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">{metric.value}</div>
                <div className="text-gray-300 font-medium">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Economic Sustainability</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              <span className="font-ramestta">Ramestta</span>'s tokenomics create sustainable value accrual through usage, not speculation.
              With 1 billion fixed supply, ultra-low initial float (0.5%), and three independent burn mechanisms tied to
              bridge, swap, and gas activity, RAMA supply contracts as adoption grows. The 80% Validator + Ecosystem Pool
              funds productive security and liquidity, not wasteful inflation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="card p-6">
                <PieChart className="text-primary-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Fixed Supply</h3>
                <p className="text-gray-300 text-sm">1B max supply with 0.5% initial float</p>
              </div>
              <div className="card p-6">
                <TrendingUp className="text-green-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Triple Burn Mechanism</h3>
                <p className="text-gray-300 text-sm">Gas + Bridge + Swap fees create structural deflation</p>
              </div>
              <div className="card p-6">
                <Shield className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Sustainable Rewards</h3>
                <p className="text-gray-300 text-sm">1% annual inflation funds validators for 10 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenomicsPage;
