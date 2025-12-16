import React from 'react';
import { Shield, Layers, CheckCircle, Target, Cpu, Lock, Zap, Users } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import SEO from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';

const AboutPage: React.FC = () => {
  const architectureItems = [
    { label: 'Layer 1 (L1)', value: 'Ethereum', description: 'Settlement & ultimate security root', icon: Lock },
    { label: 'Layer 2 (L2)', value: 'Polygon PoS', description: 'Scalable execution & checkpointing', icon: Shield },
    { label: 'Layer 3 (L3)', value: 'Ramestta', description: 'Application-optimized performance layer', icon: Zap },
    { label: 'Consensus', value: 'Heimdall + Bor', description: 'Dual-layer PoS architecture', icon: Cpu }
  ];

  const securityTiers = [
    { tier: 'L3 Instant', time: '~2 seconds', security: 'Economic PoS', useCase: 'Payments, Gaming, NFTs' },
    { tier: 'L2 Hard Commit', time: '~7-10 minutes', security: 'Polygon Checkpoint', useCase: 'DeFi, Asset Issuance' },
    { tier: 'L1 Ultimate', time: '~15-30 minutes', security: 'Ethereum Finality', useCase: 'Cross-chain Settlement' }
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
  

  const aboutBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'About', url: 'https://ramestta.com/about' }
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, aboutBreadcrumb]
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="About Ramestta - Institutional-Grade Layer-3 Blockchain Architecture"
        description="Learn about Ramestta's Layer-3 blockchain architecture built on Polygon and secured by Ethereum. Discover our vision for global blockchain adoption with sub-2 second finality, programmable security tiers, and 100% EVM equivalence."
        keywords="Ramestta about, Layer 3 architecture, blockchain infrastructure, Ethereum security, Polygon scaling, blockchain vision, Web3 mission, decentralized technology, blockchain innovation"
        canonical="https://ramestta.com/about"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="font-ramestta">Ramestta</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
              Institutional-Grade Layer-3 Infrastructure
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Built on Polygon • Secured by Ethereum • Engineered for Real-World Adoption
            </p>
          </div>
        </div>
      </section>

      {/* What is Ramestta */}
      <section className="section-padding bg-black">
      <CubeBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">What is <span className="font-ramestta">Ramestta</span>?</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="font-ramestta">Ramestta</span> is an Ethereum-aligned Layer-3 (L3) blockchain that executes at scale on Polygon (L2)
                and inherits security from Ethereum (L1) via checkpointing and economic alignment.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="font-ramestta">Ramestta</span> delivers transaction throughput, latency, and cost profiles engineered for
                real-world mass adoption while retaining EVM compatibility for seamless developer migration.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Not a competitor to Ethereum or Polygon — but a specialized execution layer built to deliver
                the user experience and economics required by payments, gaming, DeFi, and enterprise workflows.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <Layers className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Layer-3 Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                The application-optimized performance layer sitting on Polygon (L2), completing the Ethereum scalability
                stack with deterministic fees, sub-second finality, and 65,000+ TPS capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding bg-gray-950">
      <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ramestta's architecture is designed for maximum security, scalability, and interoperability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureItems.map((item, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-primary-400 font-medium mb-2">{item.value}</p>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center px-3">Programmable Finality Tiers</h3>
            <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
                  <thead className="bg-gray-800/50">
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white">Finality Tier</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white">Time to Settle</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white hidden md:table-cell">Security Level</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold text-white hidden lg:table-cell">Ideal Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityTiers.map((tier, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 font-medium text-white text-xs sm:text-sm md:text-base">{tier.tier}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-primary-400 text-xs sm:text-sm md:text-base">{tier.time}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base hidden md:table-cell">{tier.security}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 text-gray-300 text-xs sm:text-sm md:text-base hidden lg:table-cell">{tier.useCase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Years of collaborative development by global blockchain developers, building a complete Layer-3 infrastructure
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-primary-400">2021-2022</div>
                    <div className="text-sm text-gray-500 mt-1">Genesis</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Foundation & Design</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Global developer community collaborated to architect Ramestta's Layer-3 specification. Core blockchain architecture, consensus mechanism research, and EVM compatibility layer development laid the groundwork for institutional-grade infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">Protocol Design</span>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">Community Formation</span>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">Technical Whitepaper</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-primary-400">2022-2023</div>
                    <div className="text-sm text-gray-500 mt-1">Infrastructure</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Core Components Delivered</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Heimdall consensus layer and Bor execution engine completed. Ramascan explorer launched with comprehensive transaction tracking and analytics. Testnet went live, enabling developer community testing and rapid iteration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Heimdall + Bor</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Ramascan Explorer</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Testnet Launch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-primary-400">2023-2024</div>
                    <div className="text-sm text-gray-500 mt-1">Bridging</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Complete Bridge Infrastructure</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Three bridge types implemented: PoS Bridge for fast transfers, Plasma Bridge for high throughput, and Third-Party Bridge integrations (LayerZero, Axelar, Hyperlane) for multi-chain connectivity. Full cross-chain interoperability achieved.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ PoS Bridge</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Plasma Bridge</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Third-Party Bridges</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-primary-400">2024</div>
                    <div className="text-sm text-gray-500 mt-1">Staking</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Validator & Delegator Systems</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Comprehensive validator dashboard with node monitoring and performance analytics. User-friendly delegator interface enabling one-click staking. Network security infrastructure with 100+ validators and $50M+ total staked value achieved.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Validator Interface</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Delegator Portal</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ 100+ Validators</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8 border-2 border-primary-500/50">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-primary-400">Oct 2024</div>
                    <div className="text-sm text-gray-500 mt-1">Mainnet</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Production Launch</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Mainnet genesis completed with all bridge types active. RamaSwap DEX, unified bridge UI, and comprehensive wallet integrations deployed. $25M initial TVL, 100+ active validators, 15,000+ daily active users, 99.95% uptime — production-ready Layer-3 infrastructure now live.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ Live Mainnet</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ $25M TVL</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ 99.95% Uptime</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">✓ 15K+ Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center card p-8 bg-gradient-to-r from-primary-900/20 to-purple-900/20 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Built by the Community, For the Community</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Ramestta represents the collective effort of developers, validators, and contributors from around the world.
                From initial architecture to mainnet launch, every component reflects years of collaboration, rigorous testing,
                and commitment to building institutional-grade blockchain infrastructure for real-world adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-950">
      <CubeBackground />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-ramestta">Ramestta</span> will become the global execution layer for finance, commerce, governments,
                AI automation, telecom, and consumer Internet. We envision a world where billions of users interact
                with blockchain invisibly, with zero friction, zero fear, and zero complexity — powered silently by <span className="font-ramestta">Ramestta</span>.
              </p>
            </div>

            {/* Mission */}
            <div className="card p-8">
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To establish the world's most trusted Layer-3 execution infrastructure — delivering Ethereum-grade security,
                Polygon-grade scalability, and sub-second real-world performance — for every sector of the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Ramestta?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ramestta combines the best of both worlds: Polygon's proven security and our innovative Layer 2 solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">EVM Equivalent</h3>
              <p className="text-gray-300">Not just compatible — fully equivalent. Zero code changes required</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-4">~2s</div>
              <h3 className="text-xl font-semibold mb-2">Block Time</h3>
              <p className="text-gray-300">Sub-second finality with programmable security tiers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-4">$0.0002</div>
              <h3 className="text-xl font-semibold mb-2">Target Gas Fee</h3>
              <p className="text-gray-300">Deterministic micro-fees — 1000× cheaper than L1/L2</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-4">65K+</div>
              <h3 className="text-xl font-semibold mb-2">TPS Capacity</h3>
              <p className="text-gray-300">Enterprise-grade throughput with horizontal scaling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;