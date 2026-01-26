import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Info,
  Zap,
  Layers,
  Coins,
  BookOpen,
  Code,
  Shield,
  ArrowLeftRight,
  Search,
  FileText,
  Newspaper,
  Mail,
  ChevronRight,
  LogOut,
  Link as LinkIcon,
  Wallet
} from 'lucide-react';
import { useAuthStore } from '../store/store';
import ramaLogo from '../assets/RamaPay.png';

const FloatingMenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);
  const location = useLocation();
  const { logout, userToken } = useAuthStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const primaryNav = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Features', href: '/features', icon: Zap },
    { name: 'Ecosystem', href: '/ecosystem', icon: Layers },
    { name: 'Tokenomics', href: '/tokenomics', icon: Coins },
  ];

  const resourcesItems = [
    { name: 'RamaPay', href: '/ramapay', icon: Wallet },
    { name: 'Whitepaper', href: '/whitepaper', icon: FileText },
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Validator', href: '/validator', icon: Shield },
    { name: 'Bridge', href: '/bridge', icon: LinkIcon },
    { name: 'Swap', href: '/swap', icon: ArrowLeftRight },
    { name: 'Explorer', href: '/explorer', icon: Search },
  ];

  const moreItems = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'News & Price', href: '/news', icon: Newspaper },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsResourcesExpanded(false);
    setIsMoreExpanded(false);
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
    setIsResourcesExpanded(false);
    setIsMoreExpanded(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[99999] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700 rotate-90'
            : 'bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 floating-menu-pulse'
        }`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{
          touchAction: 'manipulation',
          isolation: 'isolate',
          pointerEvents: 'auto',
          contain: 'layout style'
        }}
      >
        {isOpen ? (
          <X size={24} className="text-white sm:w-7 sm:h-7" />
        ) : (
          <Menu size={24} className="text-white sm:w-7 sm:h-7" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] animate-fade-in"
            onClick={handleBackdropClick}
            style={{ touchAction: 'none' }}
          />

          <div className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 lg:w-96 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black border-l border-primary-500/30 shadow-2xl z-[9999] overflow-y-auto animate-slide-in-right" style={{ touchAction: 'pan-y' }}>
            <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-lg z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-800/50">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src={ramaLogo}
                  alt="Ramestta Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <h2 className=" text-white font-ramestta" >
                  Ramestta
                </h2>
              </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">
                  Main Menu
                </h3>
                {primaryNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        isActive(item.href)
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50 shadow-lg shadow-primary-900/50'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent hover:border-gray-700/50'
                      }`}
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsResourcesExpanded(!isResourcesExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-200 border border-gray-700/50 hover:border-primary-500/30 group"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen size={20} className="text-primary-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base font-semibold text-white">Resources</span>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${
                      isResourcesExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {isResourcesExpanded && (
                  <div className="mt-2 space-y-1 ml-2 border-l-2 border-primary-500/30 pl-3">
                    {resourcesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                            isActive(item.href)
                              ? 'bg-primary-500/10 text-primary-400 font-medium'
                              : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <Icon size={18} className="group-hover:scale-110 transition-transform" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsMoreExpanded(!isMoreExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-200 border border-gray-700/50 hover:border-secondary-500/30 group"
                >
                  <div className="flex items-center space-x-3">
                    <FileText size={20} className="text-secondary-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base font-semibold text-white">More</span>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${
                      isMoreExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {isMoreExpanded && (
                  <div className="mt-2 space-y-1 ml-2 border-l-2 border-secondary-500/30 pl-3">
                    {moreItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                            isActive(item.href)
                              ? 'bg-secondary-500/10 text-secondary-400 font-medium'
                              : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <Icon size={18} className="group-hover:scale-110 transition-transform" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-800">
                {userToken ? (
                  <button
                    onClick={() => {
                      logout();
                      handleLinkClick();
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-xl transition-all duration-200 border border-red-600/30"
                  >
                    <LogOut size={18} />
                    <span className="font-medium">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/developers"
                    onClick={handleLinkClick}
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl transition-all duration-200 font-medium shadow-lg shadow-primary-900/50"
                  >
                    Start Building
                  </Link>
                )}
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 space-y-3 border border-gray-700/30">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Network Info</span>
                  </h4>
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-400">Chain ID:</span>
                      <span className="text-white font-mono bg-gray-900/50 px-2 py-1 rounded">1370</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-400">RPC:</span>
                      <span className="text-white font-mono text-[10px] bg-gray-900/50 px-2 py-1 rounded truncate max-w-[180px]">
                        blockchain.ramestta.com
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-400">Explorer:</span>
                      <span className="text-white font-mono text-[10px] bg-gray-900/50 px-2 py-1 rounded">
                        ramascan.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingMenuButton;
