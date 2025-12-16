import React from 'react';
import { ArrowLeftRight, Shield, Zap, Eye, ExternalLink, TrendingUp, DollarSign } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const BridgePage: React.FC = () => {
  const supportedChains = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      status: 'Available',
      direction: 'bidirectional'
    },
    {
      name: 'Polygon',
      symbol: 'MATIC',
      status: 'Available',
      direction: 'bidirectional'
    },
    {
      name: 'Other EVM Chains',
      symbol: 'Various',
      status: 'Coming Soon',
      direction: 'bidirectional'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'ERC-20 / ERC-721 Support',
      description: 'Bridge both fungible and non-fungible tokens securely across chains'
    },
    {
      icon: Shield,
      title: 'Secure, Audited Contracts',
      description: 'Smart contracts audited by leading security firms for maximum safety'
    },
    {
      icon: Eye,
      title: 'Real-time Tracking',
      description: 'Monitor your bridge transactions in real-time with detailed status updates'
    },
    {
      icon: Zap,
      title: 'Low Fees',
      description: 'Minimal bridging fees to maximize your asset transfers'
    }
  ];

  const bridgeSteps = [
    {
      step: 1,
      title: 'Connect Wallet',
      description: 'Connect your MetaMask or compatible wallet to the bridge interface'
    },
    {
      step: 2,
      title: 'Select Chains',
      description: 'Choose source and destination chains for your asset transfer'
    },
    {
      step: 3,
      title: 'Choose Asset',
      description: 'Select the token or NFT you want to bridge'
    },
    {
      step: 4,
      title: 'Confirm Transfer',
      description: 'Review details and confirm the bridge transaction'
    },
    {
      step: 5,
      title: 'Wait for Confirmation',
      description: 'Monitor the transfer progress until completion'
    }
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">
              RamaBridge
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Seamlessly move your assets between Ethereum, Polygon, and Ramestta with our secure, 
            fast, and low-cost bridge solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ramabridge.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ArrowLeftRight className="mr-2" size={20} />
              Launch Bridge
            </a>
            <button className="btn-secondary">
              View Tutorial
            </button>
          </div>
        </div>
      </section>

      {/* Bridge Architecture & Finality */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bridge Architecture</h2>
            <p className="text-xl text-gray-300 mb-8">Secure cross-chain asset transfers with programmable finality</p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="card p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Programmable Finality Tiers</h3>
              <p className="text-sm sm:text-base text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed px-2">
                RamaBridge offers three security tiers to match your specific use case and risk tolerance
              </p>
              <div className="overflow-x-auto -mx-4 sm:mx-0" style={{WebkitOverflowScrolling: 'touch'}}>
                <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                  <table className="w-full min-w-[600px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Finality Tier</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Confirmation Time</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Security Level</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">L3 Instant</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-green-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">~2 seconds</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Economic PoS</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base">Gaming, NFTs, Small transfers</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors bg-primary-900/20">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">L2 Hard Commit</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-primary-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">~7-10 min</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Polygon Checkpoint</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base">DeFi, Medium value</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">L1 Ultimate</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-blue-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">~15-30 min</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Ethereum Finality</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base">High value, Enterprise</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white">Note:</strong> Users can select their preferred finality tier based on transaction value and urgency.
                  Higher tiers provide stronger security guarantees but require longer confirmation times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Supported Networks</h2>
            <p className="text-xl text-gray-300">Bridge assets between these networks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportedChains.map((chain, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6 icon-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                  <span className="text-white font-bold text-lg">{chain.symbol}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{chain.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <ArrowLeftRight className="text-primary-400 mx-2 icon-bounce" size={20} style={{animationDelay: `${index * 0.3}s`}} />
                  <span className="text-gray-300">Ramestta</span>
                </div>
                <div className="flex justify-center">
                  {chain.status === 'Available' ? (
                    <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                      {chain.status}
                    </span>
                  ) : (
                    <span className="px-4 py-2 bg-yellow-900/50 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                      {chain.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Types Comparison */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bridge Infrastructure</h2>
            <p className="text-xl text-gray-300">Choose between PoS Bridge (Fast Path) and Plasma Bridge (Safety Path)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">PoS Bridge (Fast Path)</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Rapid asset transfer between Polygon L2 and Ramestta L3 with checkpoint-backed security.
                Optimized for retail users, DEX flows, and real-time applications.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Deposit (Polygon → Ramestta)</p>
                  <p className="text-xl font-bold text-green-400">~7 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Withdraw (Ramestta → Polygon)</p>
                  <p className="text-xl font-bold text-primary-400">~30 minutes</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Best For:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Gaming</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">NFTs</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">DeFi</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Small-Medium Value</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Plasma Bridge (Safety Path)</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                High-security bridge with fraud-proof protection and challenge periods.
                Designed for large-value transfers and institutional settlement with L1-grade trust.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Exit Time (with Challenge Period)</p>
                  <p className="text-xl font-bold text-blue-400">~15-30 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Security Model</p>
                  <p className="text-white font-medium">Merkle Proofs + Fraud Detection</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Best For:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">High-Value Transfers</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Institutional</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 bg-primary-900/20 border-primary-500/30">
            <h4 className="text-xl font-bold text-white mb-4">Plasma Bridge Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Merkle-Based Exit Proofs</p>
                  <p className="text-gray-300 text-sm">Cryptographic proofs against state commitments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Challenge Period Protection</p>
                  <p className="text-gray-300 text-sm">Time window to detect and prevent invalid exits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Mass Exit Failsafe</p>
                  <p className="text-gray-300 text-sm">Emergency exit mechanism for censorship resistance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Fraud Proof System</p>
                  <p className="text-gray-300 text-sm">On-chain verification prevents malicious state</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Bridge Integrations */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Third-Party Bridge Integrations</h2>
            <p className="text-xl text-gray-300">Modular cross-chain infrastructure for maximum interoperability</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="card p-4 sm:p-6 md:p-8">
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2">
                Ramestta supports optional integration with leading cross-chain frameworks, allowing multi-chain liquidity access,
                cross-chain messaging, and enterprise interoperability. All third-party adapters are audited and governance-approved.
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0" style={{WebkitOverflowScrolling: 'touch'}}>
                <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                  <table className="w-full min-w-[650px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Provider</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Capability</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Use Case</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">LayerZero</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Omni-chain messaging</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Cross-app communication</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6"><span className="px-2 sm:px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-[10px] sm:text-xs whitespace-nowrap">Integration Ready</span></td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Axelar</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Universal message passing</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Multi-chain liquidity</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6"><span className="px-2 sm:px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-[10px] sm:text-xs whitespace-nowrap">Integration Ready</span></td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Router Protocol</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Cross-chain swaps</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">DEX aggregation</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6"><span className="px-2 sm:px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-[10px] sm:text-xs whitespace-nowrap">Integration Ready</span></td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Wormhole</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Generic messaging</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Cross-chain assets</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6"><span className="px-2 sm:px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-[10px] sm:text-xs whitespace-nowrap">Planned</span></td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Chainlink CCIP</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Risk-managed transfers</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base whitespace-nowrap">Enterprise/Banking</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6"><span className="px-2 sm:px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-[10px] sm:text-xs whitespace-nowrap">Roadmap</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <Shield className="text-primary-400 mb-4" size={32} />
              <h4 className="text-lg font-bold text-white mb-2">Permissionless Adapters</h4>
              <p className="text-gray-300 text-sm">Upgradeable adapter contracts via governance</p>
            </div>
            <div className="card p-6">
              <Eye className="text-green-400 mb-4" size={32} />
              <h4 className="text-lg font-bold text-white mb-2">Rate Limits & Caps</h4>
              <p className="text-gray-300 text-sm">Per-asset direction caps with circuit breakers</p>
            </div>
            <div className="card p-6">
              <Zap className="text-secondary-400 mb-4" size={32} />
              <h4 className="text-lg font-bold text-white mb-2">Unified Events</h4>
              <p className="text-gray-300 text-sm">Standard events for explorers and indexers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bridge Features</h2>
            <p className="text-xl text-gray-300">Why choose RamaBridge for your cross-chain transfers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="feature-icon flex-shrink-0">
                    <feature.icon className="text-white relative z-10" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Bridge */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How to Bridge Assets</h2>
            <p className="text-xl text-gray-300">Simple steps to transfer your assets across chains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {bridgeSteps.map((step, index) => (
              <div key={index} className="card p-6 text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                {index < bridgeSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Stats */}
      <section className="section-padding bg-gray-950 text-white">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Bridge Statistics</h2>
            <p className="text-xl text-gray-300">Real-time bridge usage metrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">$50M+</div>
              <div className="text-gray-300">Total Value Bridged</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">25K+</div>
              <div className="text-gray-300">Bridge Transactions</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">5min</div>
              <div className="text-gray-300">Average Bridge Time</div>
            </div>
            <div className="stats-card">
              <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Model & RAMA Economics */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Bridge Fee Model & RAMA Economics</h2>
            <p className="text-xl text-gray-300">How bridge usage creates RAMA value and network sustainability</p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="card p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Unified Fee Distribution</h3>
              <p className="text-sm sm:text-base text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed px-2">
                Every bridge transaction generates fees that strengthen the RAMA ecosystem through treasury funding,
                token burns, and security reserves.
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0" style={{WebkitOverflowScrolling: 'touch'}}>
                <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                  <table className="w-full min-w-[700px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Revenue Source</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap">Fee Structure</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white">Distribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors bg-primary-900/20">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Bridge Fees (PoS/Plasma)</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-primary-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">Basis points on value</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base">40% Treasury • 40% Buyback & Burn • 20% Security Buffer</td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base whitespace-nowrap">Gas Fees (RAMA)</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-green-400 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">EIP-1559 base + priority</td>
                        <td className="py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base">Base fee burned • Priority fee to validators</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Automatic Buyback & Burn</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                40% of bridge fees are used to automatically buy back RAMA from the market and burn it permanently,
                creating deflationary pressure as bridge usage grows.
              </p>
              <div className="text-sm text-primary-400 font-semibold">
                More bridging = More RAMA burned
              </div>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Treasury Funding</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                40% of bridge fees fund the Ramestta treasury for protocol development, security audits,
                and ecosystem growth, reducing reliance on token sales.
              </p>
              <div className="text-sm text-green-400 font-semibold">
                Usage-based sustainability
              </div>
            </div>

            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Security Buffer</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                20% of bridge fees create an insurance buffer to absorb tail risks and protect against
                bridge-related security incidents, improving institutional trust.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Risk mitigation fund
              </div>
            </div>
          </div>

          <div className="card p-8 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 border-primary-500/30">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Three Independent Burn Vectors</h4>
            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              RAMA becomes increasingly deflationary through three mechanisms tied directly to network usage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">1</div>
                <h5 className="text-white font-semibold mb-2">EIP-1559 Gas Burn</h5>
                <p className="text-gray-300 text-sm">Base fee burned on every transaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">2</div>
                <h5 className="text-white font-semibold mb-2">Bridge Fee Buyback & Burn</h5>
                <p className="text-gray-300 text-sm">40% of bridge fees → RAMA burn</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <h5 className="text-white font-semibold mb-2">Swap Fee Buyback & Burn</h5>
                <p className="text-gray-300 text-sm">7% of RamesttaSwap fees → RAMA burn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="section-padding bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Security & Risk Management</h2>
            <p className="text-xl text-gray-300">Industry-leading security measures protect your assets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <Shield className="text-green-400 icon-bounce" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Audited Smart Contracts</h3>
              <p className="text-gray-300">All bridge contracts audited by leading security firms with ongoing bug bounty programs</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <Eye className="text-primary-400 icon-bounce" size={32} style={{animationDelay: '0.2s'}} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Transparent Operations</h3>
              <p className="text-gray-300">All bridge transactions publicly verifiable on-chain with real-time monitoring</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <Zap className="text-green-400 icon-bounce" size={32} style={{animationDelay: '0.4s'}} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
              <p className="text-gray-300">Optimized for speed and reliability with 99.9% uptime and circuit breakers</p>
            </div>
          </div>

          <div className="card p-8">
            <h4 className="text-xl font-bold text-white mb-6">Operational Controls</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Caps & Throttles</p>
                  <p className="text-gray-300 text-sm">Per-asset, per-direction caps prevent excessive concentration</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Circuit Breakers</p>
                  <p className="text-gray-300 text-sm">Emergency pause functionality with governance timelocks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Canonical Assets</p>
                  <p className="text-gray-300 text-sm">Stablecoins use explicit provenance to minimize wrapped asset risk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold mb-1">Proof & Monitoring</p>
                  <p className="text-gray-300 text-sm">On-chain proofs for exits with off-chain queue health monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bridge Your Assets?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience seamless cross-chain transfers with RamaBridge today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ramabridge.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Launch Bridge <ExternalLink className="ml-2" size={16} />
            </a>
            <button className="btn-secondary">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BridgePage;