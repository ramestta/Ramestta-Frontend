import React, { useState, useEffect } from 'react';
import { 
  Wallet, Shield, Smartphone, Key, Users, Layers, Globe, 
  Lock, Zap, Code, ChevronDown, ChevronRight, CheckCircle, 
  AlertTriangle, Download, ExternalLink, Server, Cpu, 
  Leaf, DollarSign, Vote, Network, Copy, Check, Menu, X,
  QrCode, Store, Clock, Receipt, CreditCard, History, Chrome
} from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/structuredData';
import ramaPayLogo from '../assets/RamaPay.png';
import ramaPayWalletLogo from '../assets/RamaPay Wallet.png';

const RamaPayPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const ramaPayBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'RamaPay', url: 'https://ramestta.com/ramapay' }
  ]);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'features', 'networks', 'hdwallet', 'walletmanagement', 'subaccounts', 'security', 'pos', 'pointofsale', 'dapp', 'download'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const toggleFeature = (id: string) => {
    setExpandedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'introduction', label: 'Intro', fullLabel: 'Introduction', icon: Wallet },
    { id: 'features', label: 'Features', fullLabel: 'Key Features', icon: Zap },
    { id: 'networks', label: 'Networks', fullLabel: 'Supported Networks', icon: Globe },
    { id: 'hdwallet', label: 'HD Wallet', fullLabel: 'HD Wallet System', icon: Key },
    { id: 'walletmanagement', label: 'Import', fullLabel: 'Wallet Management', icon: Users },
    { id: 'subaccounts', label: 'Accounts', fullLabel: 'Master & Sub-Accounts', icon: Layers },
    { id: 'security', label: 'Security', fullLabel: 'Security Features', icon: Shield },
    { id: 'pos', label: 'PoS', fullLabel: 'Proof of Stake', icon: Cpu },
    { id: 'pointofsale', label: 'POS', fullLabel: 'Point of Sale', icon: Store },
    { id: 'dapp', label: 'dApps', fullLabel: 'dApp Browser', icon: Code },
    { id: 'download', label: 'Download', fullLabel: 'Download', icon: Download },
  ];

  const keyFeatures = [
    {
      id: 'security',
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with hardware-backed key storage',
      details: [
        { label: 'HD Wallet', desc: 'BIP44 standard' },
        { label: 'Biometric Auth', desc: 'Fingerprint & Face' },
        { label: 'TEE/StrongBox', desc: 'Hardware security' },
        { label: 'AES-256', desc: 'Encrypted storage' },
        { label: 'Local Keys', desc: 'No server storage' }
      ]
    },
    {
      id: 'tokens',
      icon: Wallet,
      title: 'Token Management',
      description: 'Full support for all major token standards',
      details: [
        { label: 'Native RAMA', desc: 'Send & receive' },
        { label: 'ERC-20', desc: 'Fungible tokens' },
        { label: 'ERC-721', desc: 'NFT support' },
        { label: 'ERC-1155', desc: 'Multi-token' },
        { label: 'ERC-875', desc: 'Batch transfers' }
      ]
    },
    {
      id: 'web3',
      icon: Globe,
      title: 'Web3 & DeFi',
      description: 'Connect to the decentralized web',
      details: [
        { label: 'dApp Browser', desc: 'Built-in Web3' },
        { label: 'WalletConnect', desc: 'Desktop dApps' },
        { label: 'TokenScript', desc: 'Enhanced tokens' },
        { label: 'DEX Integration', desc: 'Swap support' }
      ]
    },
    {
      id: 'accounts',
      icon: Users,
      title: 'Account Management',
      description: 'Powerful multi-wallet organization',
      details: [
        { label: 'Multiple Masters', desc: 'Unlimited HD wallets' },
        { label: 'Sub-Accounts', desc: 'Derived accounts' },
        { label: 'Bulk Creation', desc: '1-50 accounts' },
        { label: 'Legacy Import', desc: 'Private keys' },
        { label: 'Watch Only', desc: 'Monitor addresses' }
      ]
    }
  ];

  const supportedNetworks = [
    { name: 'Ramestta Mainnet', chainId: 1370, symbol: 'RAMA', primary: true, rpc: 'https://blockchain.ramestta.com' },
    { name: 'Ramestta Testnet', chainId: 1369, symbol: 'RAMA', primary: true, rpc: 'https://testnet.ramestta.com' },
    { name: 'Ethereum', chainId: 1, symbol: 'ETH', primary: false },
    { name: 'Polygon', chainId: 137, symbol: 'MATIC', primary: false },
    { name: 'BNB Chain', chainId: 56, symbol: 'BNB', primary: false },
    { name: 'Avalanche', chainId: 43114, symbol: 'AVAX', primary: false },
    { name: 'Arbitrum', chainId: 42161, symbol: 'AETH', primary: false },
    { name: 'Optimism', chainId: 10, symbol: 'ETH', primary: false },
    { name: 'Base', chainId: 8453, symbol: 'ETH', primary: false },
    { name: 'Fantom', chainId: 250, symbol: 'FTM', primary: false },
  ];

  const posComparison = [
    { feature: 'Energy', pos: '~0.01 TWh', pow: '~150 TWh', winner: 'pos' },
    { feature: 'Hardware', pos: 'Standard PC', pow: 'ASICs', winner: 'pos' },
    { feature: 'Entry', pos: 'Stake tokens', pow: 'Buy hardware', winner: 'pos' },
    { feature: 'Block Time', pos: '~2 sec', pow: '~10 min', winner: 'pos' },
    { feature: 'Decentralization', pos: 'Democratic', pow: 'Pool concentration', winner: 'pos' },
  ];

  const importMethods = [
    { method: 'Seed Phrase', type: 'HD', useCase: 'MetaMask, Trust Wallet', icon: Key },
    { method: 'Private Key', type: 'Legacy', useCase: 'Single addresses', icon: Lock },
    { method: 'Keystore JSON', type: 'Legacy', useCase: 'Geth, MEW', icon: Code },
    { method: 'Watch Only', type: 'View', useCase: 'Monitor any address', icon: Globe },
    { method: 'Hardware', type: 'HW', useCase: 'Ledger, Trezor', icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <SEO
        title="RamaPay - Official Wallet for Ramestta Blockchain | HD Wallet & Web3"
        description="RamaPay is the official open-source mobile wallet for Ramestta blockchain. Features HD wallet, multi-network support, dApp browser, and enterprise-grade security."
        keywords="RamaPay, Ramestta wallet, RAMA wallet, HD wallet, crypto wallet, Web3 wallet, mobile wallet, blockchain wallet"
        canonical="https://ramestta.com/ramapay"
        structuredData={ramaPayBreadcrumb}
      />

      {/* Hero Section */}
      <section className="gradient-bg text-white py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src={ramaPayWalletLogo} 
              alt="RamaPay Wallet Logo" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span style={{ fontFamily: 'Zilap-Orion, sans-serif' }} className="tracking-wider">RAMAPAY</span>
            <span className="block text-gradient mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              The Official Ramestta Wallet
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Self-custody HD wallet with multi-network support, enterprise-grade security, 
            and seamless Web3 integration.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://play.google.com/store/apps/details?id=io.ramestta.wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-sm sm:text-base"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Download from Play Store
            </a>
            <a
              href="https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm sm:text-base"
            >
              <Chrome className="mr-2" size={18} />
              Add to Chrome
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="mr-1.5 text-green-400" size={14} />
              Open Source
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="mr-1.5 text-green-400" size={14} />
              50+ Networks
            </span>
            <span className="flex items-center bg-white/10 px-3 py-1.5 rounded-full">
              <CheckCircle className="mr-1.5 text-green-400" size={14} />
              v3.89
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center justify-between py-2">
            <span className="text-white font-medium text-sm">
              {sections.find(s => s.id === activeSection)?.fullLabel || 'Navigation'}
            </span>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          {/* Mobile Nav Dropdown */}
          {mobileNavOpen && (
            <div className="md:hidden py-2 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    <section.icon size={14} className="mr-1.5" />
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Desktop Nav */}
          <div className="hidden md:flex overflow-x-auto scrollbar-hide py-2 gap-1.5 lg:gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center px-3 lg:px-4 py-2 rounded-lg whitespace-nowrap text-xs lg:text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <section.icon size={14} className="mr-1.5" />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            Why <span className="text-gradient">RamaPay</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Globe, title: 'Native Ramestta', desc: 'First-class Mainnet & Testnet integration' },
              { icon: Key, title: 'Self-Custody', desc: 'Your keys, your crypto' },
              { icon: Code, title: 'Open Source', desc: 'MIT licensed, community-driven' },
              { icon: Network, title: 'Multi-Network', desc: '50+ EVM blockchains' },
              { icon: Users, title: 'Enterprise Ready', desc: 'Bulk wallet creation' },
              { icon: Shield, title: 'Battle-Tested', desc: 'Based on AlphaWallet' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 hover:border-primary-500/50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-950 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">Key Features</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base max-w-xl mx-auto px-4">
            Everything you need for secure crypto management
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {keyFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate">{feature.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {expandedFeatures.includes(feature.id) ? (
                      <ChevronDown className="text-gray-400" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>
                {expandedFeatures.includes(feature.id) && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-800 pt-3 sm:pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={14} />
                          <span className="text-white text-xs sm:text-sm font-medium">{detail.label}</span>
                          <span className="text-gray-400 text-xs hidden sm:inline">- {detail.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Networks Section */}
      <section id="networks" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">Supported Networks</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Ramestta + 50+ EVM blockchains
          </p>
          
          {/* Primary Networks */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-primary-400 mb-4 sm:mb-6 text-center">Primary Networks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {supportedNetworks.filter(n => n.primary).map((network, index) => (
                <div key={index} className="bg-gray-900/50 border-2 border-primary-500/50 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-sm sm:text-base font-bold text-white">{network.name}</h4>
                    <span className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium">
                      {network.symbol}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Chain ID:</span>
                      <span className="text-white font-mono">{network.chainId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">RPC:</span>
                      <button
                        onClick={() => copyToClipboard(network.rpc || '', `rpc-${network.chainId}`)}
                        className="flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        {copiedText === `rpc-${network.chainId}` ? (
                          <>
                            <Check size={12} className="mr-1" />
                            <span className="text-xs">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} className="mr-1" />
                            <span className="text-xs">Copy RPC</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Networks */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-300 mb-4 text-center">Additional Networks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {supportedNetworks.filter(n => !n.primary).map((network, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-2.5 sm:p-3 text-center">
                  <h4 className="text-xs sm:text-sm font-medium text-white truncate">{network.name}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">ID: {network.chainId}</p>
                </div>
              ))}
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-2.5 sm:p-3 flex items-center justify-center">
                <span className="text-gray-400 text-xs sm:text-sm">+40 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HD Wallet Section */}
      <section id="hdwallet" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-950 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">HD Wallet System</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base px-4">
            One seed phrase to rule them all
          </p>
          
          {/* Visual Diagram - Mobile Optimized */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center">How It Works</h3>
            
            {/* Mobile-friendly visual */}
            <div className="flex flex-col items-center space-y-4">
              {/* Master Seed */}
              <div className="bg-gradient-to-r from-purple-500 to-primary-500 rounded-xl px-4 sm:px-6 py-3 text-center">
                <Key className="mx-auto mb-1 text-white" size={24} />
                <span className="text-white font-bold text-sm sm:text-base">Master Seed</span>
                <span className="block text-white/80 text-xs">12/24 words</span>
              </div>
              
              {/* Arrow */}
              <div className="w-0.5 h-6 bg-gray-600"></div>
              
              {/* Master Key */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-center">
                <span className="text-gray-300 text-sm">Master Key (never stored)</span>
              </div>
              
              {/* Arrow */}
              <div className="w-0.5 h-6 bg-gray-600"></div>
              
              {/* Accounts */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-md">
                {['Main', 'Savings', 'Business'].map((acc, i) => (
                  <div key={i} className="bg-gray-800 border border-primary-500/30 rounded-lg p-2 sm:p-3 text-center">
                    <Wallet className="mx-auto mb-1 text-primary-400" size={18} />
                    <span className="text-white text-xs sm:text-sm font-medium">{acc}</span>
                    <span className="block text-gray-500 text-[10px] sm:text-xs">Index: {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BIP44 Path - Simplified for mobile */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">BIP44 Derivation</h3>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
              <code className="text-primary-400 text-xs sm:text-sm whitespace-nowrap">
                m / 44' / 60' / 0' / 0 / index
              </code>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { path: "...0/0", use: 'Main' },
                { path: "...0/1", use: 'Savings' },
                { path: "...0/2", use: 'Business' },
                { path: "...0/N", use: 'Any' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
                  <code className="text-primary-400 text-xs">{item.path}</code>
                  <span className="text-gray-400 text-xs">{item.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Key, title: 'Single Backup', desc: 'One phrase for all accounts' },
              { icon: Layers, title: 'Unlimited', desc: 'Billions of addresses' },
              { icon: Shield, title: 'Easy Recovery', desc: 'Restore with 12/24 words' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-white" size={20} />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet Management Section */}
      <section id="walletmanagement" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">Wallet Management</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Multiple import methods
          </p>
          
          {/* Import Methods */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {importMethods.map((method, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-4 flex items-center justify-between hover:border-primary-500/50 transition-colors">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <method.icon className="text-white" size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white">{method.method}</h3>
                    <p className="text-gray-400 text-xs truncate">{method.useCase}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs flex-shrink-0 ml-2">
                  {method.type}
                </span>
              </div>
            ))}
          </div>

          {/* Security Warning */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-4 sm:p-5">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-bold text-yellow-500 mb-3">Seed Phrase Security</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-green-400 font-medium mb-2 text-sm">✅ DO:</h5>
                    <ul className="space-y-1.5 text-gray-300 text-xs sm:text-sm">
                      <li>• Write on paper</li>
                      <li>• Make 2-3 copies</li>
                      <li>• Store separately</li>
                      <li>• Use metal backup</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-red-400 font-medium mb-2 text-sm">❌ DON'T:</h5>
                    <ul className="space-y-1.5 text-gray-300 text-xs sm:text-sm">
                      <li>• Take screenshots</li>
                      <li>• Use cloud storage</li>
                      <li>• Email/text yourself</li>
                      <li>• Keep one copy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Accounts Section */}
      <section id="subaccounts" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-950 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">Master & Sub-Accounts</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Powerful account organization
          </p>
          
          {/* Bulk Creation */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center">
              <Layers className="mr-2 text-primary-400" size={20} />
              Bulk Creation (1-50)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-gray-300 font-medium mb-3 text-sm">Use Cases:</h4>
                <div className="space-y-2">
                  {[
                    { use: 'Personal', count: '2-5' },
                    { use: 'Business', count: '10-20' },
                    { use: 'Exchange', count: '50+' },
                    { use: 'Gaming', count: '5-10' },
                    { use: 'Privacy', count: '10+' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
                      <span className="text-white text-xs sm:text-sm font-medium">{item.use}</span>
                      <span className="text-primary-400 text-xs">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-gray-300 font-medium mb-3 text-sm">Steps:</h4>
                <ol className="space-y-2">
                  {['Open Wallet Manager', 'Select Master', 'Tap "Bulk Add"', 'Enter count', 'Complete!'].map((step, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-gray-400">
                      <span className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-[10px] mr-2 flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Multiple Masters */}
          <div className="bg-gradient-to-r from-purple-500/10 to-primary-500/10 border-2 border-primary-500/30 rounded-xl p-4 sm:p-5">
            <div className="flex items-center mb-3">
              <Key className="text-primary-400 mr-2" size={20} />
              <h3 className="text-base sm:text-lg font-bold text-white">Multiple Master Wallets</h3>
            </div>
            <p className="text-gray-300 mb-4 text-xs sm:text-sm">
              Import unlimited independent HD wallets:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Business', 'Family', 'Security', 'Testing'].map((use, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-2 sm:p-3 text-center">
                  <span className="text-gray-300 text-xs sm:text-sm">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">Security Features</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Multi-layer protection
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                icon: Shield, 
                title: 'Hardware', 
                items: ['TEE/StrongBox', 'Secure Enclave', 'Biometric', 'PIN fallback']
              },
              { 
                icon: Lock, 
                title: 'Encryption', 
                items: ['AES-256', 'Local storage', 'Key derivation', 'Memory safe']
              },
              { 
                icon: Server, 
                title: 'Architecture', 
                items: ['No server keys', 'Local-first', 'Zero knowledge', 'Open source']
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-5">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-3 text-center">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={12} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PoS Section */}
      <section id="pos" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-950 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">
            Proof of Stake <span className="text-gradient">(PoS)</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            How Ramestta is changing the world
          </p>
          
          {/* Comparison Table */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center">PoS vs PoW</h3>
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium text-xs sm:text-sm">Feature</th>
                  <th className="text-center py-2 px-2 sm:px-3 text-green-400 font-medium text-xs sm:text-sm">PoS</th>
                  <th className="text-center py-2 px-2 sm:px-3 text-orange-400 font-medium text-xs sm:text-sm">PoW</th>
                </tr>
              </thead>
              <tbody>
                {posComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-2 px-2 sm:px-3 text-white text-xs sm:text-sm">{row.feature}</td>
                    <td className="py-2 px-2 sm:px-3 text-center text-green-400 text-xs sm:text-sm font-medium">{row.pos}</td>
                    <td className="py-2 px-2 sm:px-3 text-center text-gray-400 text-xs sm:text-sm">{row.pow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Benefits Grid */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">World-Changing Benefits</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Leaf, title: 'Green', desc: '99.99% less energy', color: 'text-green-400' },
              { icon: DollarSign, title: 'Democratic', desc: 'Anyone can participate', color: 'text-yellow-400' },
              { icon: Zap, title: 'Fast', desc: '65,000+ TPS', color: 'text-blue-400' },
              { icon: Vote, title: 'Governance', desc: 'Token holder voting', color: 'text-purple-400' },
              { icon: Shield, title: 'Secure', desc: 'Economic incentives', color: 'text-red-400' },
              { icon: Globe, title: 'Web3 Ready', desc: 'DeFi, NFTs, Gaming', color: 'text-cyan-400' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-4">
                <div className={`${item.color} mb-2 sm:mb-3`}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}n          </div>
        </div>
      </section>

      {/* Point of Sale Section */}
      <section id="pointofsale" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-yellow-500 to-primary-500 p-3 rounded-2xl">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">
            Point of Sale <span className="text-gradient">(POS)</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
            Accept crypto payments for your business with real-time fiat conversion and QR code generation
          </p>
          
          {/* How it Works */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">How It Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '1', icon: DollarSign, title: 'Enter Amount', desc: 'Input fiat amount (USD, EUR, INR, etc.)' },
                { step: '2', icon: Zap, title: 'Live Conversion', desc: 'Auto-converts to RAMA at live rates' },
                { step: '3', icon: QrCode, title: 'Generate QR', desc: 'Customer scans QR to pay' },
                { step: '4', icon: CheckCircle, title: 'Instant Payment', desc: 'Receive RAMA in your wallet' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center h-full">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                    <item.icon className="text-primary-400 mx-auto mb-3 mt-2" size={28} />
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* Payment Categories */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                <Receipt className="text-primary-400 mr-2" size={20} />
                Payment Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '🛒 Grocery', '🍽️ Food & Dining', '🛍️ Daily Needs', '💊 Pharmacy',
                  '📝 Stationary', '⛽ Fuel/Petrol', '🚗 Transport', '🅿️ Parking',
                  '🏠 Rent', '💡 Electricity', '💧 Water Bill', '🔥 Gas Bill',
                  '📶 Internet', '📱 Mobile', '🎒 School Fee', '🎓 College'
                ].map((category, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg px-2 py-1.5 text-center">
                    <span className="text-gray-300 text-xs">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                <Zap className="text-yellow-400 mr-2" size={20} />
                Key Features
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Real-time Fiat Conversion', desc: 'Live exchange rates for accurate pricing', icon: DollarSign },
                  { title: 'Multi-Currency Support', desc: 'Accept payments in USD, EUR, INR & more', icon: CreditCard },
                  { title: 'QR Code Generation', desc: 'Instant payment QR with invoice details', icon: QrCode },
                  { title: 'Transaction History', desc: 'Complete payment records with status', icon: History },
                  { title: '5-Minute Timer', desc: 'Rate lock during payment window', icon: Clock },
                  { title: 'Offline Storage', desc: 'All data stored locally on device', icon: Shield },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-white text-sm font-medium">{item.title}</span>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Profile */}
          <div className="bg-gradient-to-r from-purple-900/30 to-primary-900/30 border border-gray-700 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center">Business Profile Setup</h3>
            <p className="text-gray-400 text-center text-sm mb-4">
              Set up your merchant profile with business details, contact info, and custom logo for professional invoices
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Business Name', icon: Store },
                { label: 'Business Type', icon: Receipt },
                { label: 'Contact Info', icon: Smartphone },
                { label: 'Custom Logo', icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <item.icon className="text-primary-400 mx-auto mb-2" size={20} />
                  <span className="text-gray-300 text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 bg-green-900/20 border border-green-800/50 rounded-xl p-4 flex items-start space-x-3">
            <Shield className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-green-400 font-semibold text-sm mb-1">100% Privacy Focused</h4>
              <p className="text-gray-400 text-xs">
                All transaction data, business profile, and payment history are stored locally on your device. 
                No data is uploaded to any server - your business data stays with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* dApp Browser Section */}
      <section id="dapp" className="py-12 sm:py-16 md:py-20 px-4 bg-black relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center">dApp Browser</h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Access Web3 directly from your wallet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Built-in Features</h3>
              <div className="space-y-3">
                {[
                  { title: 'Web3 Browser', desc: 'Injected provider' },
                  { title: 'WalletConnect', desc: 'Desktop dApps' },
                  { title: 'TokenScript', desc: 'Enhanced tokens' },
                  { title: 'Universal Links', desc: 'Share via URL' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-white text-sm font-medium">{item.title}</span>
                      <span className="text-gray-400 text-xs ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Compatible dApps</h3>
              <div className="grid grid-cols-2 gap-2">
                {['RamaSwap', 'RamaBridge', 'Uniswap', 'OpenSea', 'Aave', 'SushiSwap'].map((dapp, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg px-3 py-2 text-center">
                    <span className="text-gray-300 text-xs sm:text-sm">{dapp}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">+ All EVM dApps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-gray-950 to-black relative">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Get RamaPay</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Download and take control of your crypto
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Android */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 sm:p-6">
              <img 
                src="/src/assets/RamaPay Wallet.png" 
                alt="RamaPay Wallet Logo" 
                className="w-10 h-10 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Android</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">v3.89 • Android 7.0+</p>
              <a
                href="https://play.google.com/store/apps/details?id=io.ramestta.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors text-sm"
              >
                <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Download from Play Store
              </a>
            </div>

            {/* Chrome Extension - NEW */}
            <div className="bg-gray-900/50 border border-primary-500/50 rounded-xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                NEW
              </div>
              <Chrome className="text-primary-400 mx-auto mb-3" size={40} />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Browser Extension</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">Chrome • Brave • Edge</p>
              <a
                href="https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  <path d="M21.17 8H12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3.95 6.06L8.54 14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10.88 21.94L15.46 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Add to Chrome
              </a>
            </div>
            
            {/* iOS */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 sm:p-6 opacity-60">
              <Smartphone className="text-gray-500 mx-auto mb-3" size={40} />
              <h3 className="text-lg sm:text-xl font-bold text-gray-500 mb-1">iOS</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4">Coming Soon</p>
              <button disabled className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-700 text-gray-400 font-bold rounded-lg cursor-not-allowed text-sm">
                <Download className="mr-2" size={16} />
                Coming Soon
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Technical Specs</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: 'Mobile Package', value: 'io.ramestta.wallet' },
                { label: 'Mobile Version', value: '3.89' },
                { label: 'Min SDK', value: 'API 24' },
                { label: 'Target', value: 'SDK 35' },
                { label: 'Extension', value: 'Chrome Web Store' },
                { label: 'Browsers', value: 'Chrome, Brave, Edge' },
                { label: 'License', value: 'MIT' },
                { label: 'Based On', value: 'AlphaWallet' },
              ].map((spec, index) => (
                <div key={index} className="bg-gray-800 rounded-lg px-3 py-2">
                  <span className="text-gray-500 block text-[10px] sm:text-xs">{spec.label}</span>
                  <span className="text-white font-medium text-xs sm:text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-purple-900 via-primary-900 to-purple-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready for Self-Custody?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            Join thousands trusting RamaPay for secure crypto management
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=io.ramestta.wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-sm sm:text-base"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Android App
            </a>
            <a
              href="https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg text-sm sm:text-base"
            >
              <Chrome className="mr-2" size={18} />
              Chrome Extension
            </a>
            <a
              href="https://github.com/obidua/RamaPay-android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm sm:text-base"
            >
              <ExternalLink className="mr-2" size={18} />
              Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RamaPayPage;
