import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useChainId, useSwitchChain } from 'wagmi';
import ramaLogo from '../assets/RamaPay.png';

const Footer: React.FC = () => {
  const productLinks = [
    { name: 'RamaPay', href: '/ramapay' },
    { name: 'Bridge', href: '/bridge' },
    { name: 'Swap', href: '/swap' },
    { name: 'Explorer', href: '/explorer' },
    { name: 'Validator', href: '/validator' },
  ];

  const foundationLinks = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Tokenomics', href: '/tokenomics' },
  ];

  const resources = [
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Developers', href: '/developers' },
    { name: 'Blog', href: '/blog' },
    { name: 'News & Price', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/ramestta', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/Ramestta-Blockchain/', icon: Github },
    { name: 'Instagram', href: 'https://www.instagram.com/ramestta/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/Ramestta/', icon: Facebook },
    { name: 'Telegram', href: '#', icon: MessageCircle },
    { name: 'Email', href: 'mailto:support@ramestta.com', icon: Mail },
  ];


  // ===========================================================
  // Switch to Ramestta function
  // ===========================================================

  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount();
  const { switchChain } = useSwitchChain();
  const currentChainId = useChainId();


  useEffect(() => {
    if (isConnected && address && currentChainId !== 1370) {
      switchChain({ chainId: 1370 });
    }
  }, [isConnected, address, currentChainId, switchChain]);



  const ramesttaNetwork = async () => {
    try {
      await open()
    } catch (error) {
      console.log("Error switching to Raemestta network:", error)
    }
  }

  return (
    <footer className="bg-black text-white border-t border-gray-800/50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src={ramaLogo}
                alt="Ramestta Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl  font-ramestta">Ramestta</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Institutional-grade Layer-3 blockchain infrastructure built on Polygon and secured by Ethereum. Experience sub-2 second finality, 65,000+ TPS, and deterministic micro-fees with 100% EVM compatibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rama Foundation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rama Foundation</h3>
            <ul className="space-y-2">
              {foundationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Network</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">
                <span className="text-white">Chain ID:</span> 1370
              </div>
              <div className="text-gray-400">
                <span className="text-white">RPC:</span> blockchain.ramestta.com
              </div>
              <div className="text-gray-400">
                <span className="text-white">Explorer:</span> ramascan.com
              </div>
              <div className="space-y-2 text-sm">

                <button
                  onClick={ramesttaNetwork}
                  className="flex items-center space-x-3 px-4 py-3 mt-4 rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition-all duration-200 border border-white outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask Icon" className="w-6 h-6" />
                  <span className="text-base font-medium">Connect to Ramestta</span>
                </button>

              </div>
            </div>
          </div>







        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} <span className="font-ramestta">Ramestta</span>. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              <span className="text-gray-600">|</span>
              <Link to="/cookie-policy" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Built with ❤️ for the decentralized future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;