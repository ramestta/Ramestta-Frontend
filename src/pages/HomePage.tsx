import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, DollarSign, Network, Code, TrendingUp, Layers, Clock, Lock, ArrowUpDown, Gamepad2, CreditCard, Building2, Vote, Palette, Globe } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import BlockchainGlobe from '../components/BlockchainGlobe';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, softwareApplicationSchema } from '../utils/structuredData';
import HeroBackground from '../components/HeroBackground';



const HomePage: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: 'True Layer-3 Architecture',
      description: 'Built on Polygon (L2), secured by Ethereum (L1) - the complete execution layer for mass adoption.'
    },
    {
      icon: Clock,
      title: 'Sub-2 Second Finality',
      description: 'Programmable finality with L3 instant (~2s), L2 hard (~7-10min), and L1 ultimate security.'
    },
    {
      icon: DollarSign,
      title: 'Deterministic Micro-Fees',
      description: 'Predictable transaction costs between $0.0002-$0.001 - 1000× cheaper than L1/L2 chains.'
    },
    {
      icon: Lock,
      title: 'Ethereum Security Inheritance',
      description: 'Inherits trust from Ethereum via Polygon checkpoints - economic and cryptographic guarantees.'
    },
    {
      icon: Code,
      title: '100% EVM Equivalence',
      description: 'Not just compatible - fully equivalent. Migrate from Polygon/Ethereum with zero code changes.'
    },
    {
      icon: TrendingUp,
      title: '65,000+ TPS Capacity',
      description: 'Enterprise-grade throughput with horizontal scaling via multi-instance architecture.'
    }
  ];

  const networkStats = [
    { label: 'Network Type', value: 'Layer-3 (L3)' },
    { label: 'Chain ID', value: '1370' },
    { label: 'Block Time', value: '~2 seconds' },
    { label: 'Throughput', value: '65,000+ TPS' },
    { label: 'Gas Fee Range', value: '$0.0002 - $0.001' },
    { label: 'Security Model', value: 'Ethereum-aligned PoS' },
    { label: 'RPC Endpoint', value: 'blockchain.ramestta.com' },
    { label: 'RPC Endpoint 2', value: 'blockchain2.ramestta.com' },
    { label: 'Explorer', value: 'ramascan.com' },
    { label: 'Bridge', value: 'ramabridge.com' },
    { label: 'Swap DApp', value: 'ramaswap.com' },
    { label: 'Add Network', value: 'chainlist.org/chain/1370' }
  ];

  const useCases = [
    {
      icon: CreditCard,
      title: 'Payments & Remittances',
      description: 'Real-time cross-border payments with $0.0002 fees and instant settlement. Perfect for merchant payments and remittances.',
      stats: 'Sub-2s finality'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & Metaverse',
      description: 'In-game economies with instant microtransactions, NFT items, and player-owned assets at scale.',
      stats: '65K+ TPS'
    },
    {
      icon: Building2,
      title: 'Enterprise DeFi',
      description: 'Institutional-grade DeFi with deterministic fees, programmable finality, and regulatory compliance.',
      stats: 'Ethereum security'
    },
    {
      icon: Palette,
      title: 'NFT Marketplaces',
      description: 'Mint, trade, and transfer NFTs with near-zero gas costs. Perfect for high-frequency trading.',
      stats: '$0.0002 per mint'
    },
    {
      icon: Vote,
      title: 'DAOs & Governance',
      description: 'On-chain voting and governance with low costs enabling true decentralized decision-making.',
      stats: 'Full EVM support'
    },
    {
      icon: Globe,
      title: 'IoT & Machine Economy',
      description: 'Micropayments for connected devices and machine-to-machine transactions at scale.',
      stats: 'High throughput'
    }
  ];

  const technologyStack = [
    {
      layer: 'L1',
      name: 'Ethereum',
      role: 'Ultimate Settlement',
      description: 'Root chain security and finality',
      color: 'from-blue-500 to-blue-600'
    },
    {
      layer: 'L2',
      name: 'Polygon PoS',
      role: 'Checkpoint Layer',
      description: 'Scalable execution and checkpoints',
      color: 'from-purple-500 to-purple-600'
    },
    {
      layer: 'L3',
      name: 'Ramestta',
      role: 'Execution Layer',
      description: 'High-performance app-specific chain',
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  const integrations = [
    { name: 'MetaMask', category: 'Wallet' },
    { name: 'WalletConnect', category: 'Wallet' },
    { name: 'Hardhat', category: 'Dev Tool' },
    { name: 'Remix', category: 'IDE' },
    { name: 'Ethers.js', category: 'Library' },
    { name: 'Web3.js', category: 'Library' },
    { name: 'OpenZeppelin', category: 'Security' },
    { name: 'The Graph', category: 'Indexing' }
  ];

  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
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
    style.setAttribute('data-float-animation', 'true');
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
  

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, softwareApplicationSchema]
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="Ramestta - Institutional-Grade Layer-3 Blockchain Infrastructure"
        description="Ramestta is an Ethereum-aligned Layer-3 blockchain built on Polygon. Experience sub-2 second finality, $0.0002-$0.001 fees, 65,000+ TPS with 100% EVM compatibility. Fast, scalable, secure blockchain for payments, gaming, and DeFi."
        keywords="Ramestta, Layer 3 blockchain, L3 blockchain, Polygon Layer 3, Ethereum Layer 3, EVM compatible blockchain, fast blockchain, scalable blockchain, low gas fees, blockchain gaming, DeFi blockchain, Web3 infrastructure, Polygon PoS, blockchain payments, decentralized finance, smart contracts"
        canonical="https://ramestta.com/"
        structuredData={combinedSchema}
      />
      
      {/* Hero Section */}
      <section className="text-white section-padding relative min-h-screen flex items-center">
<HeroBackground />

        <div className="container-max text-center relative z-10 w-full">
          <div className="flex justify-center mb-6 sm:mb-8 glow-effect animate-hero-text">
            <BlockchainGlobe />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 animate-hero-text">
            <span className="font-ramestta">RAMESTTA</span>
            <span className="block text-gradient mt-2">
              Institutional-Grade Layer-3 Infrastructure
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 text-primary-400 font-semibold px-2 animate-hero-text" style={{ animationDelay: '0.2s' }}>
            Built on Polygon • Secured by Ethereum • Engineered for Real-World Adoption
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-3 animate-hero-text" style={{ animationDelay: '0.4s' }}>
            The missing execution layer in Web3 infrastructure. Sub-2s finality, $0.0002-$0.001 fees,
            65,000+ TPS - with Ethereum-level trust and zero developer friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-3 max-w-3xl mx-auto animate-hero-buttons">
            <Link to="/developers" className="btn-primary flex justify-center items-center text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              Start Building <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/explorer" className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              View Explorer
            </Link>
            <Link to="/bridge" className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              Bridge Assets
            </Link>
          </div>
        </div>
      </section>

      {/* What is Ramestta */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What is <span className="font-ramestta">Ramestta</span>?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-ramestta">Ramestta</span> is an Ethereum-aligned Layer-3 (L3) blockchain built on Polygon (L2),
              engineered to deliver institutional-grade scalability, deterministic fees, and sub-second finality —
              without compromising trust, security, or developer compatibility.
            </p>
            <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">L1</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Ethereum</h3>
                  <p className="text-sm text-gray-400">Settlement & Security</p>
                </div>
                <div className="text-3xl text-primary-400">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">L2</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Polygon</h3>
                  <p className="text-sm text-gray-400">Scalable Execution</p>
                </div>
                <div className="text-3xl text-primary-400">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">L3</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Ramestta</h3>
                  <p className="text-sm text-gray-400">Performance & Adoption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ramestta */}
      <section className="section-padding bg-black relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why <span className="font-ramestta">Ramestta</span>?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ramestta completes the Ethereum scalability stack - not as a competitor, but as the final adoption-ready Layer-3
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 relative z-10 hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Built for Real-World Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From payments to gaming to enterprise applications - Ramestta powers the next generation of blockchain applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-8 group hover:scale-105 transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <useCase.icon className="text-white" size={28} />
                  </div>
                  <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium">
                    {useCase.stats}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">The Complete Security Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Inherit security from Ethereum while achieving unprecedented performance on Layer-3
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {technologyStack.map((tech, index) => (
                <div key={index} className="flex items-center mb-6 last:mb-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-xl flex flex-col items-center justify-center mr-6 flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{tech.layer}</span>
                    <span className="text-white/80 text-xs">{tech.role.split(' ')[0]}</span>
                  </div>
                  <div className="flex-grow card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{tech.name}</h3>
                        <p className="text-primary-400 text-sm font-medium">{tech.role}</p>
                      </div>
                      <p className="text-gray-400 text-sm mt-2 md:mt-0">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Connection lines */}
              <div className="absolute left-10 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-primary-500 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Ecosystem Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works seamlessly with your favorite Web3 tools and frameworks - no migration required
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="card p-4 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-white font-semibold mb-1">{integration.name}</div>
                <div className="text-xs text-primary-400">{integration.category}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/developers" className="text-primary-400 hover:text-primary-300 inline-flex items-center font-medium">
              View All Integrations <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Institutional-Grade Network Parameters</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Production-ready specifications for enterprise deployment</p>
          </div>
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-gray-700 overflow-hidden">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <table className="w-full border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-600">
                      <th className="text-left py-4 sm:py-5 px-4 sm:px-8 text-sm sm:text-lg font-bold text-white tracking-wide border-r border-gray-700 whitespace-nowrap">Parameter</th>
                      <th className="text-left py-4 sm:py-5 px-4 sm:px-8 text-sm sm:text-lg font-bold text-white tracking-wide whitespace-nowrap">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {networkStats.map((stat, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50 transition-all duration-200 group">
                        <td className="py-3 sm:py-4 px-4 sm:px-8 font-semibold text-gray-200 text-xs sm:text-base group-hover:text-white transition-colors border-r border-gray-700 whitespace-nowrap">
                          {stat.label}
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-8 text-primary-400 font-mono text-xs sm:text-base font-medium group-hover:text-primary-300 transition-colors whitespace-nowrap">
                          {stat.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 group hover:scale-105 transition-all duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center">
                  <ArrowUpDown className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  Exchange
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Buy and sell RAMA tokens on major exchanges
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.bitmart.com/trade/en-US?symbol=RAMA_USDT&layout=pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <div>
                    <div className="text-white font-semibold">BitMart</div>
                    <div className="text-sm text-gray-400">RAMA/USDT</div>
                  </div>
                  <ArrowRight className="text-primary-400" size={16} />
                </a>
                <a
                  href="https://www.koinpark.com/trade/RAMA-INR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <div>
                    <div className="text-white font-semibold">Koinpark</div>
                    <div className="text-sm text-gray-400">RAMA/INR</div>
                  </div>
                  <ArrowRight className="text-primary-400" size={16} />
                </a>
              </div>
            </div>

            <a
              href="https://chainlist.org/chain/1370"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 group hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <Network className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  Add Network
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Add Ramestta network to MetaMask with one click via Chainlist. Chain ID: 1370
              </p>
              <span className="text-primary-400 inline-flex items-center font-medium">
                Add to Wallet <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </a>

            <Link to="/news" className="card p-8 group hover:scale-105 transition-all duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-primary-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  Latest News
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Stay updated with latest Ramestta news from Yahoo Finance, Forbes, and other major publications
              </p>
              <span className="text-primary-400 inline-flex items-center font-medium">
                Read News <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white relative">
        <FloatingParticles />

        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build on <span className="font-ramestta">Ramestta</span>?</h2>
          <p className="text-xl mb-4 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The first blockchain actually ready to power payments, gaming, DeFi, and national digital infrastructure — today.
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Zero code changes. Zero migration friction. Ethereum-level security. Web2-level performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/developers" className="btn-primary text-lg px-8 py-4">
              Start Building <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
            <Link to="/ecosystem" className="btn-secondary text-lg px-8 py-4">
              Explore Ecosystem
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;