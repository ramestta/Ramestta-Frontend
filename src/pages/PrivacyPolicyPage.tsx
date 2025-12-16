import React from 'react';
import SEO from '../components/SEO';
import { Shield, Database, Lock, Eye, FileText, Globe, Smartphone, Server, Trash2, Mail, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Ramestta"
        description="Privacy Policy for Ramestta blockchain platform and RamaPay mobile wallet application"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 mb-6">
              <Shield className="w-10 h-10 text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last Updated: <span className="text-primary-400 font-medium">December 16, 2025</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">1. Introduction</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed pl-0 md:pl-16">
                Welcome to Ramestta. We are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our blockchain platform and services.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">2. Information We Collect</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16 space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-primary-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                    2.1 Information You Provide
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Wallet addresses when you interact with our blockchain', 'Contact information when you reach out to our support team', 'Account credentials if you create an account on our platform', 'Transaction data and smart contract interactions'].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-400">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-primary-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                    2.2 Automatically Collected Information
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Device information (browser type, operating system)', 'IP address and location data', 'Usage data and analytics', 'Cookies and similar tracking technologies'].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-400">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">3. How We Use Your Information</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16">
                <p className="text-gray-300 leading-relaxed mb-4">We use the collected information for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Providing and maintaining our blockchain services',
                    'Processing transactions and smart contract interactions',
                    'Improving user experience and platform functionality',
                    'Communicating with you about updates and changes',
                    'Detecting and preventing fraud or security issues',
                    'Complying with legal obligations and regulations'
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/30 flex items-start gap-2">
                      <span className="text-primary-400 font-bold">{index + 1}.</span>
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Data Sharing */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">4. Data Sharing and Disclosure</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="pl-0 md:pl-16">
                <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-4 mb-4">
                  <p className="text-green-400 font-medium">✓ We do not sell your personal information.</p>
                </div>
                <p className="text-gray-300 mb-3">We may share your information with:</p>
                <ul className="space-y-2">
                  {['Service providers who assist in operating our platform', 'Law enforcement when required by law', 'Third parties with your explicit consent'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-primary-400 font-medium">{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 5: Blockchain Data */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">5. Blockchain Data</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="pl-0 md:pl-16">
                <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-4">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-orange-400 font-medium">Please note:</span> Data written to the Ramestta blockchain is <span className="text-white font-semibold">public and immutable</span>. Once a transaction is recorded on the blockchain, it cannot be deleted or modified. This includes wallet addresses, transaction amounts, and smart contract interactions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Data Security */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">6. Data Security</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="pl-0 md:pl-16">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: '🔐', text: 'Encryption of data in transit and at rest' },
                    { icon: '🔍', text: 'Regular security audits and assessments' },
                    { icon: '🛡️', text: 'Access controls and authentication mechanisms' },
                    { icon: '📡', text: 'Continuous monitoring for security threats' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30 flex items-center gap-3 hover:bg-gray-800/60 transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: Your Rights */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">7. Your Rights</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="pl-0 md:pl-16">
                <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                <div className="flex flex-wrap gap-2">
                  {['Access your personal information', 'Request correction of inaccurate data', 'Request deletion of your personal data', 'Object to processing', 'Withdraw consent at any time'].map((item, index) => (
                    <span key={index} className="bg-primary-500/10 text-primary-300 px-4 py-2 rounded-full border border-primary-500/20 text-sm hover:bg-primary-500/20 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: Cookies */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <span className="text-2xl">🍪</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">8. Cookies and Tracking</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed pl-0 md:pl-16">
                We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
                For more information, please see our <a href="/cookie-policy" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Cookie Policy</a>.
              </p>
            </section>

            {/* Section 9: Children's Privacy */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">9. Children's Privacy</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed pl-0 md:pl-16">
                Our services are not intended for individuals under the age of <span className="text-white font-semibold">18</span>. We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Section 10: Changes */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">10. Changes to This Policy</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed pl-0 md:pl-16">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </section>

            {/* Section 11: RamaPay Mobile Application - Featured Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-900/30 via-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-primary-500/30 p-6 md:p-8">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 border border-primary-500/40 flex items-center justify-center shadow-lg shadow-primary-500/10">
                    <Smartphone className="w-7 h-7 text-primary-400" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full mb-2">MOBILE APP</span>
                    <h2 className="text-2xl font-bold text-white mb-1">11. RamaPay Mobile Application</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 pl-0 md:pl-[72px]">
                  This privacy policy also applies to the <span className="text-primary-400 font-semibold">RamaPay Wallet</span> mobile application ("App") available on Google Play Store and other platforms.
                  The following sections outline specific data practices for the mobile application.
                </p>

                <div className="pl-0 md:pl-[72px] space-y-6">
                  {/* 11.1 App-Specific Data Collection */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-primary-400" />
                      11.1 App-Specific Data Collection
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      The RamaPay App collects and stores the following data locally on your device:
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Wallet Data',
                          description: 'Your wallet seed phrase and private keys are encrypted and stored locally on your device using industry-standard encryption. We never have access to your private keys, ensuring complete ownership and control of your assets.',
                          icon: '🔑'
                        },
                        {
                          title: 'Transaction History',
                          description: 'Records of your blockchain transactions are stored locally for your convenience, allowing you to view past activity without requiring network connectivity.',
                          icon: '📜'
                        },
                        {
                          title: 'Preferences',
                          description: 'Your app settings, network preferences (Mainnet/Testnet), display options, and customization choices are stored to provide a personalized experience.',
                          icon: '⚙️'
                        },
                        {
                          title: 'Camera Access',
                          description: 'Camera permission is used solely for scanning QR codes for wallet addresses and WalletConnect sessions. No images are stored, transmitted, or processed beyond the QR code scanning functionality.',
                          icon: '📷'
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{item.icon}</span>
                            <h4 className="font-semibold text-primary-300">{item.title}</h4>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 11.2 Third-Party Services */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary-400" />
                      11.2 Third-Party Services Integration
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      The RamaPay App integrates with the following third-party services:
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          title: 'Blockchain RPC Providers',
                          description: 'To broadcast transactions to the Ramestta blockchain network and fetch real-time blockchain data including balances and transaction confirmations.',
                          color: 'from-blue-500/20 to-blue-600/10',
                          borderColor: 'border-blue-500/30'
                        },
                        {
                          title: 'Price Data Providers',
                          description: 'To display current RAMA token prices and market data from reliable cryptocurrency data aggregators.',
                          color: 'from-green-500/20 to-green-600/10',
                          borderColor: 'border-green-500/30'
                        },
                        {
                          title: 'WalletConnect',
                          description: 'An open protocol that enables secure connections between your wallet and decentralized applications (dApps) through encrypted communication channels.',
                          color: 'from-purple-500/20 to-purple-600/10',
                          borderColor: 'border-purple-500/30'
                        }
                      ].map((item, index) => (
                        <div key={index} className={`bg-gradient-to-r ${item.color} rounded-lg p-4 border ${item.borderColor}`}>
                          <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 11.3 Data Storage and Security */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-primary-400" />
                      11.3 Data Storage and Security
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      All sensitive data including seed phrases and private keys is encrypted using industry-standard <span className="text-white font-medium">AES-256 encryption</span> and stored in your device's secure enclave (Android Keystore on Android devices, Secure Enclave on iOS). This data never leaves your device.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                      {[
                        { icon: '🔐', text: 'Hardware-backed storage' },
                        { icon: '👆', text: 'Biometric auth' },
                        { icon: '🔢', text: 'PIN protection' },
                        { icon: '⏱️', text: 'Session timeout' },
                        { icon: '☁️', text: 'No cloud backup' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30 text-center hover:border-primary-500/30 transition-colors">
                          <span className="text-2xl block mb-1">{item.icon}</span>
                          <span className="text-gray-400 text-xs">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 11.4 Data Deletion */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Trash2 className="w-5 h-5 text-primary-400" />
                      11.4 Data Deletion
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      You have complete control over your data. Delete all app data by:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {[
                        'Remove wallet from app settings',
                        'Uninstall RamaPay application',
                        'Clear app data from device settings'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-gray-900/50 rounded-lg px-4 py-2 border border-gray-700/30">
                          <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs text-primary-400 font-bold">{index + 1}</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Warning Box */}
                    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/20 border border-yellow-500/40 rounded-xl p-4 flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-400 mb-1">Important Warning</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Once deleted, your wallet data <span className="text-white font-medium">cannot be recovered</span> without your seed phrase backup. Always ensure you have securely backed up your seed phrase before deleting app data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12: Contact Us */}
            <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">12. Contact Us</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16">
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/30 hover:border-primary-500/30 transition-colors">
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-lg">📧</span>
                      General Inquiries
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">Email:</p>
                    <a href="mailto:privacy@ramestta.com" className="text-primary-400 hover:text-primary-300 transition-colors">privacy@ramestta.com</a>
                    <p className="text-gray-400 text-sm mt-3 mb-1">Website:</p>
                    <a href="/contact" className="text-primary-400 hover:text-primary-300 transition-colors">ramestta.com/contact</a>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/30 hover:border-primary-500/30 transition-colors">
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-lg">📱</span>
                      RamaPay Mobile App Support
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">Email:</p>
                    <a href="mailto:support@ramestta.com" className="text-primary-400 hover:text-primary-300 transition-colors">support@ramestta.com</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
