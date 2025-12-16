import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Users, Code, TrendingUp, Zap, Building2, Gamepad2, Wallet, Globe, Smartphone, ShoppingCart } from 'lucide-react';
import ProjectSubmissionForm from '../components/ProjectSubmissionForm';

const EcosystemPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const featuredDapps = [
    {
      name: 'RamesttaSwap',
      description: 'Native DEX on Ramestta L3 with instant swaps and deep liquidity',
      category: 'DeFi',
      url: '/swap',
      features: ['AMM v2/v3', 'LP Incentives', 'Sub-cent Fees', 'RAMA Base Pairs']
    },
    {
      name: 'RamaBridge',
      description: 'Securely move assets to/from Polygon & Ethereum',
      category: 'Infrastructure',
      url: 'https://ramabridge.com',
      features: ['Cross-chain Transfers', 'Multi-asset Support', 'Secure Protocol', 'Fast Bridging']
    },
    {
      name: 'MumbleChat',
      description: 'End-to-end encrypted wallet-based chat system',
      category: 'Social',
      url: '#',
      features: ['E2E Encryption', 'Wallet Integration', 'Decentralized', 'Privacy First']
    }
  ];

  const ecosystemStats = [
    { metric: 'Deployed Contracts', value: '3,500+', icon: Code },
    { metric: 'dApps', value: '80+', icon: Zap },
    { metric: 'Total Users', value: '100,000+', icon: Users },
    { metric: 'Active Validators', value: '60+', icon: TrendingUp }
  ];

  const targetSectors = [
    {
      icon: Wallet,
      title: 'Payments & Remittances',
      description: 'Real-time cross-border payments with $0.0002 fees',
      metrics: ['Sub-2s settlement', 'Predictable costs', 'Global reach'],
      status: 'Active'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & NFTs',
      description: 'In-game economies with instant microtransactions',
      metrics: ['65K+ TPS capacity', 'Sub-cent fees', 'Instant finality'],
      status: 'Active'
    },
    {
      icon: Building2,
      title: 'Enterprise & Finance',
      description: 'Institutional DeFi with regulatory compliance',
      metrics: ['Programmable finality', 'Ethereum security', 'EVM equivalent'],
      status: 'Growing'
    },
    {
      icon: Globe,
      title: 'Government & Identity',
      description: 'National digital infrastructure and identity systems',
      metrics: ['Scalable identity', 'Document verification', 'Audit trails'],
      status: 'Pilot'
    },
    {
      icon: Smartphone,
      title: 'Telecom & IoT',
      description: 'Micropayments for connected devices and data',
      metrics: ['High throughput', 'Low latency', 'Machine-to-machine'],
      status: 'Growing'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Web3 payment rails for online and physical commerce',
      metrics: ['Instant checkout', 'Near-zero fees', 'No chargebacks'],
      status: 'Active'
    }
  ];

  const adoptionStrategy = [
    {
      phase: 'Phase 1: Foundation',
      period: 'Q1-Q2 2025',
      focus: 'Infrastructure & Developer Adoption',
      milestones: [
        'Developer grants program launch',
        'SDK and tooling ecosystem',
        'Technical documentation & tutorials',
        'Hackathons and bounties'
      ]
    },
    {
      phase: 'Phase 2: Growth',
      period: 'Q3-Q4 2025',
      focus: 'dApp Ecosystem & User Acquisition',
      milestones: [
        'Launch 50+ production dApps',
        'Strategic DeFi partnerships',
        'Gaming studio integrations',
        'Reach 500K+ active users'
      ]
    },
    {
      phase: 'Phase 3: Scale',
      period: '2026',
      focus: 'Enterprise & Institutional Adoption',
      milestones: [
        'Enterprise blockchain solutions',
        'Government pilot programs',
        'Payment processor integration',
        'Achieve 5M+ users'
      ]
    }
  ];

  const categories = [
    { name: 'DeFi', count: 25, color: 'bg-primary-500' },
    { name: 'NFTs', count: 18, color: 'bg-green-500' },
    { name: 'Gaming', count: 15, color: 'bg-secondary-500' },
    { name: 'Infrastructure', count: 12, color: 'bg-primary-600' },
    { name: 'Social', count: 8, color: 'bg-green-400' },
    { name: 'Others', count: 22, color: 'bg-gray-500' }
  ];
  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm"
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
  
  // Call this once when the component mounts
  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }
  

  return (
    <>
      <ProjectSubmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl  mb-6">
            <span className='font-ramestta'>Ramestta</span>
            <span className="block text-gradient font-bold">
              Ecosystem
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover the growing ecosystem of dApps, protocols, and tools built on <span className='font-ramestta'>Ramestta</span> .
          </p>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">dApp Categories</h2>
            <p className="text-xl text-gray-300">Explore projects across different categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.count} projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured dApps */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured dApps & Platforms</h2>
            <p className="text-xl text-gray-300">Leading applications built on Ramestta</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredDapps.map((dapp, index) => (
              <div key={index} className="card p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{dapp.name}</h3>
                      <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30">
                        {dapp.category}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{dapp.description}</p>
                  </div>
                  {dapp.url.startsWith('/') ? (
                    <a
                      href={dapp.url}
                      className="flex-shrink-0 w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:scale-110"
                    >
                      <ExternalLink size={20} className="text-gray-300 group-hover:text-white" />
                    </a>
                  ) : (
                    <a
                      href={dapp.url}
                      className="flex-shrink-0 w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="text-gray-300 group-hover:text-white" />
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {dapp.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build & Join */}
      <section className="section-padding bg-gray-950 text-white">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Build & Join the Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to contribute to the Ramestta ecosystem? Submit your project or explore existing contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="card p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Submit Your Project</h3>
              <p className="text-gray-300 mb-6">
                Get your dApp featured in the Ramestta ecosystem directory and reach more users.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary relative z-10"
                style={{ pointerEvents: 'auto' }}
              >
                Submit Project
              </button>
            </div>
            <div className="card p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore Contracts</h3>
              <p className="text-gray-300 mb-6">
                Browse all deployed smart contracts on Ramascan and discover new opportunities.
              </p>
              <a
                href="https://ramascan.com"
                className="btn-secondary relative z-10"
                target="_blank"
                rel="noopener noreferrer"
                style={{ pointerEvents: 'auto' }}
              >
                View on Ramascan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Target Sectors</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Institutional-grade infrastructure engineered for real-world adoption across key sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetSectors.map((sector, index) => (
              <div key={index} className="card p-8 group hover:scale-105 transition-transform duration-200">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                    <sector.icon className="text-white" size={28} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sector.status === 'Active' ? 'bg-green-900/50 text-green-300 border border-green-500/30' :
                    sector.status === 'Growing' ? 'bg-blue-900/50 text-blue-300 border border-blue-500/30' :
                    'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {sector.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{sector.description}</p>
                <div className="space-y-2">
                  {sector.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Strategy */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Adoption Strategy</h2>
            <p className="text-xl text-gray-300">Strategic roadmap for ecosystem growth and mass adoption</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {adoptionStrategy.map((phase, index) => (
              <div key={index} className="card p-8 relative ">
                <div className="absolute top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="mt-4 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                  <p className="text-primary-400 font-semibold mb-4">{phase.period}</p>
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Primary Focus</p>
                    <p className="text-white font-medium">{phase.focus}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-3">Key Milestones</p>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Ecosystem Revolution</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            The Ramestta ecosystem is rapidly growing. Be part of the infrastructure powering the next generation of blockchain applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/developers" className="btn-primary">
              Start Building
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default EcosystemPage;