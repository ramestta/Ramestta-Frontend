import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  Cookie, Shield, Settings, BarChart3, Globe, Clock, 
  ToggleLeft, ToggleRight, Database, Smartphone, Monitor,
  Mail, ExternalLink, ChevronDown, ChevronUp, CheckCircle,
  AlertTriangle, Lock, Trash2, Info
} from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

interface CookieCardProps {
  type: string;
  title: string;
  description: string;
  examples: string[];
  duration: string;
  essential?: boolean;
  icon: React.ReactNode;
  color: string;
}

const CookieCard: React.FC<CookieCardProps> = ({ type, title, description, examples, duration, essential, icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border ${essential ? 'border-green-500/30' : 'border-gray-700/50'} overflow-hidden hover:border-primary-500/30 transition-all duration-300`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-5 text-left"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${color} flex items-center justify-center`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded-full">
                {type}
              </span>
              {essential && (
                <span className="text-[10px] sm:text-xs font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  REQUIRED
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">{description}</p>
          </div>
          <span className="text-gray-400 flex-shrink-0">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 animate-fadeIn">
          <div className="pl-0 sm:pl-16 space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-2">Examples:</p>
              <div className="flex flex-wrap gap-1.5">
                {examples.map((example, idx) => (
                  <span key={idx} className="text-[10px] sm:text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full border border-gray-700/30">
                    {example}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Clock size={14} className="text-primary-400" />
              <span className="text-gray-400">Duration:</span>
              <span className="text-white font-medium">{duration}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CookiePolicyPage: React.FC = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(true);

  const cookieTypes: CookieCardProps[] = [
    {
      type: 'Essential',
      title: 'Essential Cookies',
      description: 'Required for the website to function properly. These cannot be disabled.',
      examples: ['Session ID', 'Authentication', 'Security tokens', 'CSRF protection', 'Load balancing'],
      duration: 'Session - 1 year',
      essential: true,
      icon: <Lock size={20} className="text-green-400" />,
      color: 'bg-green-500/10 border border-green-500/20'
    },
    {
      type: 'Analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our platform by collecting anonymous data.',
      examples: ['Page views', 'Navigation patterns', 'Time on site', 'Traffic sources', 'Device info'],
      duration: 'Up to 2 years',
      essential: false,
      icon: <BarChart3 size={20} className="text-blue-400" />,
      color: 'bg-blue-500/10 border border-blue-500/20'
    },
    {
      type: 'Functional',
      title: 'Functionality Cookies',
      description: 'Enable enhanced features and personalization of your experience.',
      examples: ['Language preferences', 'Theme settings', 'Dashboard layout', 'Recent activity'],
      duration: 'Up to 1 year',
      essential: false,
      icon: <Settings size={20} className="text-purple-400" />,
      color: 'bg-purple-500/10 border border-purple-500/20'
    },
    {
      type: 'Third-Party',
      title: 'Third-Party Cookies',
      description: 'Set by external services we integrate with for enhanced functionality.',
      examples: ['Google Analytics', 'WalletConnect', 'CDN providers', 'Social media'],
      duration: 'Varies by provider',
      essential: false,
      icon: <Globe size={20} className="text-orange-400" />,
      color: 'bg-orange-500/10 border border-orange-500/20'
    }
  ];

  return (
    <>
      <SEO
        title="Cookie Policy - Ramestta"
        description="Cookie Policy for Ramestta blockchain platform and RamaPay mobile wallet application"
        keywords="Ramestta cookies, cookie policy, privacy, tracking, blockchain cookies"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
          <FloatingParticles />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 mb-4 sm:mb-6">
                <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
                Cookie Policy
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mb-2">
                How we use cookies to enhance your experience
              </p>
              <p className="text-gray-500 text-sm">
                Last Updated: <span className="text-primary-400 font-medium">December 17, 2025</span>
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-gradient-to-br from-primary-900/30 to-gray-800/50 rounded-2xl border border-primary-500/30 p-4 sm:p-6 mb-8 sm:mb-12">
              <div className="flex items-start gap-3 mb-4">
                <Info size={20} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Quick Summary</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    We use cookies to keep you logged in, remember your preferences, and understand how you use our platform. 
                    Essential cookies are required for the site to work. You can manage optional cookies below.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 pl-0 sm:pl-8">
                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-green-500/20">
                  <CheckCircle size={14} />
                  <span>No tracking for ads</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-green-500/20">
                  <CheckCircle size={14} />
                  <span>No data selling</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-green-500/20">
                  <CheckCircle size={14} />
                  <span>Full user control</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 pb-20 space-y-6 sm:space-y-8">
          
          {/* Section 1: What Are Cookies */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">1. What Are Cookies?</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                Cookies are small text files stored on your device when you visit websites. They help us provide you with a 
                better experience by remembering your preferences and understanding how you use our platform.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: '📁', title: 'Small Files', desc: 'Stored locally on your device' },
                  { icon: '🔒', title: 'Secure', desc: 'Cannot access other data' },
                  { icon: '⚡', title: 'Fast', desc: 'Improve site performance' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/30 text-center">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h4 className="text-white font-medium text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Cookie Types */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">2. Types of Cookies We Use</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cookieTypes.map((cookie, idx) => (
                <CookieCard key={idx} {...cookie} />
              ))}
            </div>
          </section>

          {/* Section 3: Cookie Preferences */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">3. Manage Your Preferences</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16 space-y-4">
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                You have control over which optional cookies are enabled. Essential cookies cannot be disabled as they are 
                required for the website to function.
              </p>
              
              {/* Cookie Toggle Controls */}
              <div className="space-y-3">
                {/* Essential - Always On */}
                <div className="bg-gray-800/40 rounded-xl p-4 border border-green-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-green-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">Essential Cookies</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Required for site functionality</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs font-medium">Always On</span>
                    <div className="w-10 h-6 bg-green-500/30 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics - Toggleable */}
                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 flex items-center justify-between hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <BarChart3 size={20} className="text-blue-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">Analytics Cookies</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Help us improve our platform</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className="flex items-center gap-2"
                  >
                    <span className={`text-xs font-medium ${analyticsEnabled ? 'text-primary-400' : 'text-gray-500'}`}>
                      {analyticsEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                    {analyticsEnabled ? (
                      <ToggleRight size={32} className="text-primary-400" />
                    ) : (
                      <ToggleLeft size={32} className="text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Functional - Toggleable */}
                <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 flex items-center justify-between hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Settings size={20} className="text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">Functionality Cookies</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Remember your preferences</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setFunctionalEnabled(!functionalEnabled)}
                    className="flex items-center gap-2"
                  >
                    <span className={`text-xs font-medium ${functionalEnabled ? 'text-primary-400' : 'text-gray-500'}`}>
                      {functionalEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                    {functionalEnabled ? (
                      <ToggleRight size={32} className="text-primary-400" />
                    ) : (
                      <ToggleLeft size={32} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-gray-500 text-xs italic mt-4">
                Note: This is a demonstration. Actual cookie preferences are managed through your browser settings.
              </p>
            </div>
          </section>

          {/* Section 4: Blockchain Storage */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full mb-1 inline-block">
                  BLOCKCHAIN
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">4. Blockchain-Specific Storage</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16">
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                In addition to cookies, we use browser storage technologies to enhance your blockchain experience:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { 
                    title: 'Local Storage', 
                    desc: 'Wallet preferences, transaction history cache, user settings',
                    icon: <Monitor size={18} className="text-blue-400" />
                  },
                  { 
                    title: 'Session Storage', 
                    desc: 'Active sessions, pending transactions, temporary data',
                    icon: <Clock size={18} className="text-green-400" />
                  },
                  { 
                    title: 'IndexedDB', 
                    desc: 'Transaction logs, smart contract ABIs, larger datasets',
                    icon: <Database size={18} className="text-purple-400" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: RamaPay Mobile App */}
          <section className="bg-gradient-to-br from-primary-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-primary-500/30 p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 border border-primary-500/40 flex items-center justify-center">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full mb-1 inline-block">
                  MOBILE APP
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">5. RamaPay Mobile App</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16">
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                The RamaPay mobile wallet application does not use traditional cookies. Instead, it uses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Secure Enclave', desc: 'Hardware-backed storage for private keys', icon: '🔐' },
                  { title: 'Encrypted Preferences', desc: 'App settings stored locally with AES-256', icon: '⚙️' },
                  { title: 'Session Tokens', desc: 'Secure authentication for dApp connections', icon: '🔑' },
                  { title: 'Cache Data', desc: 'Temporary storage for improved performance', icon: '💾' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 mt-4">
                <p className="text-gray-300 text-xs sm:text-sm">
                  <span className="text-primary-400 font-medium">Note:</span> All data stored by RamaPay remains on your device 
                  and is never transmitted to our servers. You have full control over your data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Managing Cookies */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">6. How to Manage Cookies</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16 space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                You can control cookies through your browser settings:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { browser: 'Chrome', icon: '🌐', url: 'chrome://settings/cookies' },
                  { browser: 'Firefox', icon: '🦊', url: 'about:preferences#privacy' },
                  { browser: 'Safari', icon: '🧭', url: 'Preferences > Privacy' },
                  { browser: 'Edge', icon: '📘', url: 'edge://settings/privacy' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/30 text-center hover:border-primary-500/30 transition-colors">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h4 className="text-white font-medium text-sm">{item.browser}</h4>
                    <p className="text-gray-500 text-[10px] font-mono">{item.url}</p>
                  </div>
                ))}
              </div>

              <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-xs sm:text-sm">
                    <span className="text-orange-400 font-medium">Warning:</span> Disabling essential cookies may prevent 
                    you from using certain features of our platform, including wallet connections and authentication.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Cookie Lifespan */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">7. Cookie Lifespan</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { type: 'Session Cookies', desc: 'Deleted when you close your browser', duration: 'Browser session', color: 'text-green-400' },
                  { type: 'Persistent Cookies', desc: 'Remain until expiration or manual deletion', duration: 'Days to years', color: 'text-blue-400' },
                  { type: 'First-Party Cookies', desc: 'Set directly by Ramestta', duration: 'Varies', color: 'text-purple-400' },
                  { type: 'Third-Party Cookies', desc: 'Set by external services we integrate', duration: 'Varies by provider', color: 'text-orange-400' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                    <h4 className={`font-medium text-sm sm:text-base ${item.color}`}>{item.type}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.desc}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      <Clock size={12} className="inline mr-1" />
                      {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8: Updates & Contact */}
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">8. Updates & Contact</h2>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full mt-1"></div>
              </div>
            </div>
            <div className="pl-0 sm:pl-16 space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                We may update this Cookie Policy periodically. We will notify you of changes by updating the 
                "Last Updated" date at the top of this page.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="mailto:privacy@ramestta.com" className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg p-4 border border-primary-500/30 hover:border-primary-400/50 transition-colors group flex items-center gap-3">
                  <Mail className="text-primary-400" size={24} />
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-primary-300">Email Us</h4>
                    <p className="text-primary-400 text-xs sm:text-sm">privacy@ramestta.com</p>
                  </div>
                </a>
                <a href="/contact" className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30 hover:border-primary-500/30 transition-colors group flex items-center gap-3">
                  <Globe className="text-primary-400" size={24} />
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-primary-300">Contact Form</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">ramestta.com/contact</p>
                  </div>
                </a>
              </div>

              {/* Additional Resources */}
              <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 mt-4">
                <h4 className="text-white font-medium text-sm mb-3">Additional Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'AllAboutCookies.org', url: 'https://allaboutcookies.org' },
                    { name: 'YourOnlineChoices.eu', url: 'https://youronlinechoices.eu' },
                    { name: 'NAI Opt-Out', url: 'https://networkadvertising.org' }
                  ].map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs sm:text-sm text-primary-400 hover:text-primary-300 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700/30 hover:border-primary-500/30 transition-colors"
                    >
                      {link.name}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center py-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              By continuing to use Ramestta, you consent to our use of cookies as described in this policy.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="/privacy-policy" className="text-primary-400 hover:text-primary-300 text-xs sm:text-sm underline underline-offset-2">Privacy Policy</a>
              <a href="/terms-of-service" className="text-primary-400 hover:text-primary-300 text-xs sm:text-sm underline underline-offset-2">Terms of Service</a>
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

export default CookiePolicyPage;
