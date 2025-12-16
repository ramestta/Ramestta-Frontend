import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  FileText, Shield, Users, Wallet, DollarSign, Scale, AlertTriangle, 
  Ban, Server, Lock, Smartphone, Globe, Mail, ChevronDown, ChevronUp,
  CheckCircle, XCircle, Gavel, RefreshCw, BookOpen, Cpu, Code, Zap
} from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accentColor?: string;
  badge?: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, children, accentColor = 'primary', badge }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const colorClasses: Record<string, { bg: string; border: string; gradient: string }> = {
    primary: { bg: 'bg-primary-500/10', border: 'border-primary-500/20', gradient: 'from-primary-500' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', gradient: 'from-orange-500' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/20', gradient: 'from-green-500' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', gradient: 'from-red-500' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', gradient: 'from-purple-500' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', gradient: 'from-blue-500' },
  };

  const colors = colorClasses[accentColor] || colorClasses.primary;

  return (
    <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start gap-3 sm:gap-4 text-left"
      >
        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {badge && (
              <span className="text-[10px] sm:text-xs font-semibold text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h2>
            <span className="ml-auto text-gray-400">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </div>
          <div className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${colors.gradient} to-transparent rounded-full mt-1`}></div>
        </div>
      </button>
      {isExpanded && (
        <div className="pl-0 sm:pl-14 md:pl-16 mt-4 animate-fadeIn">
          {children}
        </div>
      )}
    </section>
  );
};

const TermsOfServicePage: React.FC = () => {
  const tableOfContents = [
    'Acceptance of Terms',
    'Platform Services',
    'RamaPay Wallet Terms',
    'User Responsibilities',
    'Wallet & Private Keys',
    'Fees & Gas Costs',
    'Intellectual Property',
    'Disclaimers',
    'Smart Contracts',
    'Staking & Validators',
    'Regulatory Compliance',
    'Termination',
    'Dispute Resolution',
    'Contact Information'
  ];

  return (
    <>
      <SEO
        title="Terms of Service - Ramestta"
        description="Terms of Service for Ramestta blockchain platform and RamaPay mobile wallet application"
        keywords="Ramestta terms, terms of service, RamaPay terms, blockchain terms, crypto wallet terms"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
          <FloatingParticles />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 mb-4 sm:mb-6">
                <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
                Terms of Service
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mb-2">
                Ramestta Blockchain Platform & RamaPay Wallet
              </p>
              <p className="text-gray-500 text-sm">
                Last Updated: <span className="text-primary-400 font-medium">December 17, 2025</span>
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 mb-8 sm:mb-12">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <BookOpen size={18} className="text-primary-400" />
                Quick Navigation
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tableOfContents.map((item, index) => (
                  <a 
                    key={index}
                    href={`#section-${index + 1}`}
                    className="text-[10px] sm:text-xs bg-gray-800/50 text-gray-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700/50 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-200"
                  >
                    {index + 1}. {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 pb-20 space-y-4 sm:space-y-6">
          
          {/* Section 1: Acceptance of Terms */}
          <Section 
            id="section-1"
            icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="1. Acceptance of Terms"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                By accessing or using the Ramestta blockchain platform, RamaPay mobile wallet application, or any related services 
                (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute 
                a legally binding agreement between you and Rama Foundation ("we," "us," or "our").
              </p>
              <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-3 sm:p-4">
                <p className="text-orange-400 font-medium text-sm sm:text-base flex items-start gap-2">
                  <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>If you do not agree to these Terms, you must not access or use our Services.</span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-800/40 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <CheckCircle className="text-green-400 mb-2" size={20} />
                  <h4 className="text-white font-medium mb-1 text-sm sm:text-base">By Using Our Services</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">You confirm you are at least 18 years old and have legal capacity to enter into this agreement.</p>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <Globe className="text-blue-400 mb-2" size={20} />
                  <h4 className="text-white font-medium mb-1 text-sm sm:text-base">Jurisdiction</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">You agree these Terms are governed by applicable laws and you comply with local regulations.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section 2: Platform Services */}
          <Section 
            id="section-2"
            icon={<Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />}
            title="2. Description of Platform Services"
            accentColor="blue"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ramestta is an Institutional-Grade Layer-3 blockchain infrastructure built on Polygon and secured by Ethereum. 
                Our platform provides the following services:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: <Cpu size={20} />, title: 'Blockchain Infrastructure', desc: 'High-performance L3 network with 65,000+ TPS' },
                  { icon: <Code size={20} />, title: 'Smart Contracts', desc: 'EVM-compatible contract deployment & execution' },
                  { icon: <Zap size={20} />, title: 'Fast Transactions', desc: 'Sub-2 second finality with low gas fees' },
                  { icon: <Shield size={20} />, title: 'Validator Services', desc: 'Proof of Stake validation and staking' },
                  { icon: <Globe size={20} />, title: 'dApp Ecosystem', desc: 'Decentralized application support' },
                  { icon: <Wallet size={20} />, title: 'RamaPay Wallet', desc: 'Official mobile wallet application' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/40 rounded-lg p-3 sm:p-4 border border-gray-700/30 hover:border-primary-500/30 transition-colors">
                    <span className="text-primary-400 mb-2 block">{item.icon}</span>
                    <h4 className="text-white font-medium text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section 3: RamaPay Wallet Terms - Featured */}
          <Section 
            id="section-3"
            icon={<Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />}
            title="3. RamaPay Wallet Application Terms"
            accentColor="purple"
            badge="MOBILE APP"
          >
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                The RamaPay Wallet ("App") is our official self-custody mobile wallet for managing digital assets on the Ramestta 
                blockchain and other supported networks. By downloading and using RamaPay, you agree to the following terms:
              </p>

              {/* 3.1 Self-Custody */}
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-800/30 rounded-xl p-4 sm:p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Lock size={18} className="text-purple-400" />
                  3.1 Self-Custody Wallet
                </h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  {[
                    'RamaPay is a non-custodial wallet - you have sole control over your private keys',
                    'We do not store, access, or have the ability to recover your seed phrase or private keys',
                    'You are solely responsible for backing up and securing your recovery phrase',
                    'Loss of your recovery phrase means permanent loss of access to your assets'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.2 Supported Features */}
              <div className="bg-gray-800/40 rounded-xl p-4 sm:p-5 border border-gray-700/30">
                <h3 className="text-lg font-bold text-white mb-3">3.2 Wallet Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { icon: '💰', text: 'Multi-Network' },
                    { icon: '🔑', text: 'HD Wallet (BIP44)' },
                    { icon: '👆', text: 'Biometric Auth' },
                    { icon: '📱', text: 'QR Scanning' },
                    { icon: '🌐', text: 'dApp Browser' },
                    { icon: '💎', text: 'NFT Support' },
                    { icon: '📊', text: 'PoS Staking' },
                    { icon: '🔗', text: 'WalletConnect' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-2 sm:p-3 text-center border border-gray-700/30">
                      <span className="text-xl sm:text-2xl block mb-1">{item.icon}</span>
                      <span className="text-gray-400 text-[10px] sm:text-xs">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3.3 Supported Networks */}
              <div className="bg-gray-800/40 rounded-xl p-4 sm:p-5 border border-gray-700/30">
                <h3 className="text-lg font-bold text-white mb-3">3.3 Supported Networks</h3>
                <p className="text-gray-400 text-sm mb-3">RamaPay supports the following blockchain networks:</p>
                <div className="flex flex-wrap gap-2">
                  {['Ramestta Mainnet (1370)', 'Ramestta Testnet (1369)', 'Ethereum', 'Polygon', 'BNB Chain', 'Arbitrum', 'Optimism', 'Base', 'Avalanche', 'Fantom'].map((network, index) => (
                    <span key={index} className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${index < 2 ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'}`}>
                      {network}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3.4 Token Standards */}
              <div className="bg-gray-800/40 rounded-xl p-4 sm:p-5 border border-gray-700/30">
                <h3 className="text-lg font-bold text-white mb-3">3.4 Supported Token Standards</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { standard: 'Native', desc: 'RAMA, ETH, etc.' },
                    { standard: 'ERC-20', desc: 'Fungible Tokens' },
                    { standard: 'ERC-721', desc: 'NFTs' },
                    { standard: 'ERC-1155', desc: 'Multi-Token' },
                    { standard: 'ERC-875', desc: 'Batch Transfer' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-2 sm:p-3 border border-gray-700/30 text-center">
                      <span className="text-white font-mono text-xs sm:text-sm block">{item.standard}</span>
                      <span className="text-gray-500 text-[10px] sm:text-xs">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Section 4: User Responsibilities */}
          <Section 
            id="section-4"
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="4. User Responsibilities"
          >
            <div className="space-y-4">
              {/* Account Security */}
              <div className="bg-gray-800/40 rounded-xl p-4 sm:p-5 border border-gray-700/30">
                <h3 className="text-lg font-semibold text-primary-300 mb-3">4.1 Account Security</h3>
                <p className="text-gray-400 text-sm mb-3">You are responsible for:</p>
                <ul className="space-y-2">
                  {[
                    'Maintaining the confidentiality of your private keys, seed phrases, and wallet credentials',
                    'All activities that occur under your wallet addresses',
                    'Using strong passwords and enabling biometric authentication where available',
                    'Keeping your device and wallet software updated to the latest version'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prohibited Activities */}
              <div className="bg-red-900/20 rounded-xl p-4 sm:p-5 border border-red-600/30">
                <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <Ban size={18} />
                  4.2 Prohibited Activities
                </h3>
                <p className="text-gray-400 text-sm mb-3">You agree NOT to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Violate any applicable laws or regulations',
                    'Engage in fraudulent or deceptive practices',
                    'Use the platform for money laundering or terrorist financing',
                    'Deploy malicious smart contracts or code',
                    'Attempt to gain unauthorized access to our systems',
                    'Interfere with or disrupt platform operation',
                    'Infringe on intellectual property rights',
                    'Distribute spam, malware, or harmful content'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                      <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Section 5: Wallet and Private Keys */}
          <Section 
            id="section-5"
            icon={<Lock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />}
            title="5. Wallet and Private Keys"
            accentColor="orange"
          >
            <div className="space-y-4">
              <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-4">
                <p className="text-orange-300 font-medium text-sm sm:text-base mb-3">
                  ⚠️ Critical Information - Please Read Carefully
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Ramestta and RamaPay operate on a self-custody model. This means you, and only you, have control over your 
                  digital assets. With this control comes significant responsibility.
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">You acknowledge and agree that:</p>
              <div className="space-y-3">
                {[
                  { title: 'No Key Access', desc: 'We do not custody, control, or have access to your private keys or funds under any circumstances.' },
                  { title: 'Your Responsibility', desc: 'You are solely responsible for securing your private keys and seed phrases. Store them offline in a safe location.' },
                  { title: 'Permanent Loss Risk', desc: 'Loss of private keys or seed phrases will result in permanent and irreversible loss of your digital assets.' },
                  { title: 'Irreversible Transactions', desc: 'All transactions on the blockchain are final and cannot be reversed, cancelled, or refunded.' },
                  { title: 'No Recovery', desc: 'We cannot recover lost private keys, reset passwords for your wallet, or reverse transactions on your behalf.' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/40 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                    <h4 className="text-white font-medium mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section 6: Fees and Gas Costs */}
          <Section 
            id="section-6"
            icon={<DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />}
            title="6. Fees and Gas Costs"
            accentColor="green"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Using the Ramestta blockchain network requires payment of transaction fees (commonly known as "gas fees"). 
                These fees compensate validators for processing and securing transactions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-600/30">
                  <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Low Gas Fees</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Ramestta offers ultra-low transaction fees ranging from <span className="text-white font-mono">$0.0002 - $0.001</span> per transaction.</p>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">User Responsibility</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">You are responsible for ensuring sufficient RAMA tokens in your wallet to cover gas fees for transactions.</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm">
                {[
                  'Gas fees are determined by network congestion and transaction complexity',
                  'We do not control or receive gas fees - they go directly to network validators',
                  'Failed transactions may still consume gas fees',
                  'We reserve the right to adjust any platform-specific fee structures with reasonable notice'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-green-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Section 7: Intellectual Property */}
          <Section 
            id="section-7"
            icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="7. Intellectual Property"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                All content, trademarks, logos, and intellectual property related to Ramestta, RamaPay, and the Rama Foundation 
                are owned by Rama Foundation or its licensors and are protected by international copyright and trademark laws.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-white font-medium mb-2 text-sm sm:text-base">You May</h4>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-400 mt-0.5" /> Use our services as intended</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-400 mt-0.5" /> Reference Ramestta with proper attribution</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-400 mt-0.5" /> Build dApps on our open-source platform</li>
                  </ul>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-white font-medium mb-2 text-sm sm:text-base">You May Not</h4>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1">
                    <li className="flex items-start gap-2"><XCircle size={14} className="text-red-400 mt-0.5" /> Use our trademarks without permission</li>
                    <li className="flex items-start gap-2"><XCircle size={14} className="text-red-400 mt-0.5" /> Copy or redistribute proprietary content</li>
                    <li className="flex items-start gap-2"><XCircle size={14} className="text-red-400 mt-0.5" /> Create derivative works without consent</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Section 8: Disclaimers and Limitations */}
          <Section 
            id="section-8"
            icon={<AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />}
            title="8. Disclaimers and Limitations of Liability"
            accentColor="red"
          >
            <div className="space-y-4">
              {/* No Warranties */}
              <div className="bg-red-900/20 rounded-xl p-4 sm:p-5 border border-red-600/30">
                <h3 className="text-lg font-semibold text-red-400 mb-3">8.1 No Warranties</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  THE SERVICES ARE PROVIDED <span className="text-white font-semibold">"AS IS"</span> AND <span className="text-white font-semibold">"AS AVAILABLE"</span> WITHOUT 
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-gray-400 text-sm">We do not guarantee:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {[
                    'Uninterrupted or error-free operation of the platform',
                    'Security from unauthorized access, hacking, or cyber attacks',
                    'Accuracy, completeness, or reliability of blockchain data',
                    'Compatibility with all third-party services or dApps',
                    'Specific financial outcomes or returns on any investments'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-400">
                      <span className="text-red-400">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-gray-800/40 rounded-xl p-4 sm:p-5 border border-gray-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">8.2 Limitation of Liability</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAMESTTA AND RAMA FOUNDATION SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, 
                  DIGITAL ASSETS, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 9: Smart Contracts */}
          <Section 
            id="section-9"
            icon={<Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="9. Smart Contracts"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Smart contracts deployed on the Ramestta blockchain are autonomous, self-executing programs that operate exactly 
                as programmed. Once deployed, smart contracts are immutable and cannot be modified.
              </p>
              <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-4">
                <p className="text-orange-300 font-medium text-sm sm:text-base">We are NOT responsible for:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {[
                    'Bugs, vulnerabilities, or errors in smart contract code',
                    'Loss of funds due to smart contract failures or exploits',
                    'Third-party smart contracts, dApps, or DeFi protocols',
                    'Interactions with unaudited or malicious smart contracts',
                    'Rug pulls, scams, or fraudulent projects deployed on our network'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-orange-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm italic">
                Always DYOR (Do Your Own Research) before interacting with any smart contract or dApp.
              </p>
            </div>
          </Section>

          {/* Section 10: Staking & Validators */}
          <Section 
            id="section-10"
            icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />}
            title="10. Staking and Validator Services"
            accentColor="blue"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ramestta operates on a Proof of Stake (PoS) consensus mechanism. Users can participate in network security 
                by staking RAMA tokens or running validator nodes through RamaPay wallet.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-600/30">
                  <h4 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">Staking Rewards</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Staking rewards are distributed based on network protocol and are not guaranteed. APY may vary based on network conditions.</p>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Slashing Risk</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Validators may face slashing penalties for malicious behavior or extended downtime as per network protocol rules.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section 11: Regulatory Compliance */}
          <Section 
            id="section-11"
            icon={<Gavel className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="11. Regulatory Compliance"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                You agree to comply with all applicable laws and regulations in your jurisdiction when using our Services, 
                including but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '💰', title: 'Tax Obligations', desc: 'Cryptocurrency transactions may be subject to capital gains and income tax' },
                  { icon: '📋', title: 'Securities Laws', desc: 'Compliance with securities and financial regulations' },
                  { icon: '🔍', title: 'AML/KYC', desc: 'Anti-money laundering and Know Your Customer requirements' },
                  { icon: '🌍', title: 'Export Controls', desc: 'Sanctions and export control laws in your jurisdiction' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h4 className="text-white font-medium text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section 12: Termination */}
          <Section 
            id="section-12"
            icon={<RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="12. Termination"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We reserve the right to suspend or terminate your access to our Services at any time, without prior notice, 
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
              <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Upon Termination</h4>
                <ul className="space-y-1 text-sm">
                  {[
                    'Your right to access the platform and Services will immediately cease',
                    'Any pending transactions may be cancelled',
                    'Your blockchain data and on-chain assets remain accessible via other means',
                    'Provisions of these Terms that by their nature should survive will remain in effect'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-400">
                      <span className="text-primary-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Section 13: Dispute Resolution */}
          <Section 
            id="section-13"
            icon={<Scale className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="13. Dispute Resolution"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Any disputes arising from or related to these Terms shall be resolved through binding arbitration in accordance 
                with applicable laws. You agree to waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>
              <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Dispute Process</h4>
                <div className="flex flex-wrap gap-2">
                  {['1. Informal Resolution', '2. Mediation', '3. Binding Arbitration'].map((step, index) => (
                    <span key={index} className="bg-primary-500/10 text-primary-300 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-primary-500/20">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Section 14: Contact Information */}
          <Section 
            id="section-14"
            icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />}
            title="14. Contact Information"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                For questions, concerns, or feedback regarding these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="mailto:legal@ramestta.com" className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg p-4 border border-primary-500/30 hover:border-primary-400/50 transition-colors group">
                  <Mail className="text-primary-400 mb-2" size={24} />
                  <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-primary-300">Email</h4>
                  <p className="text-primary-400 text-xs sm:text-sm">legal@ramestta.com</p>
                </a>
                <a href="/contact" className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30 hover:border-primary-500/30 transition-colors group">
                  <Globe className="text-primary-400 mb-2" size={24} />
                  <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-primary-300">Website</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">ramestta.com/contact</p>
                </a>
              </div>
            </div>
          </Section>

          {/* Footer Note */}
          <div className="text-center py-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              By using Ramestta and RamaPay services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="/privacy-policy" className="text-primary-400 hover:text-primary-300 text-xs sm:text-sm underline underline-offset-2">Privacy Policy</a>
              <a href="/cookie-policy" className="text-primary-400 hover:text-primary-300 text-xs sm:text-sm underline underline-offset-2">Cookie Policy</a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default TermsOfServicePage;
