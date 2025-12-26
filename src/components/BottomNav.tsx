import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, Zap, BookOpen, MoreHorizontal, X, ChevronRight, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/store';
import ramaLogo from '../assets/RamaPay.png';

const BottomNav: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);
  const location = useLocation();
  const { logout, userToken } = useAuthStore();

  const primaryNav = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Ecosystem', href: '/ecosystem', icon: Layers },
    { name: 'Features', href: '/features', icon: Zap },
    { name: 'Resources', href: '#', icon: BookOpen, action: () => { setIsMoreOpen(true); setIsResourcesExpanded(true); } },
    { name: 'More', href: '#', icon: MoreHorizontal, action: () => setIsMoreOpen(true) },
  ];

  const resourcesItems = [
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Developers', href: '/developers' },
    { name: 'Validator', href: '/validator' },
    { name: 'Bridge', href: '/bridge' },
    { name: 'Swap', href: '/swap' },
    { name: 'Explorer', href: '/explorer' },
  ];

  const moreItems = [
    { name: 'About', href: '/about' },
    { name: 'Tokenomics', href: '/tokenomics' },
    { name: 'Blog', href: '/blog' },
    { name: 'News & Price', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isResourcesActive = () => resourcesItems.some(item => isActive(item.href));

  const handleNavClick = (item: typeof primaryNav[0]) => {
    if (item.action) {
      item.action();
    }
  };

  const handleMoreItemClick = () => {
    setIsMoreOpen(false);
    setIsResourcesExpanded(false);
  };

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800/50 z-50 safe-area-bottom">
        <div className="flex justify-around items-center py-2">
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = item.href === '#'
              ? (item.name === 'Resources' && isResourcesActive())
              : isActive(item.href);

            if (item.href === '#') {
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`flex flex-col items-center justify-center py-2 px-3 transition-all duration-200 ${
                    active ? 'text-primary-400' : 'text-gray-400'
                  }`}
                >
                  <Icon size={22} className="mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center py-2 px-3 transition-all duration-200 ${
                  active ? 'text-primary-400' : 'text-gray-400'
                }`}
              >
                <Icon size={22} className="mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {isMoreOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex items-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setIsMoreOpen(false);
              setIsResourcesExpanded(false);
            }}
          />

          <div className="relative w-full bg-gradient-to-b from-gray-900 to-black rounded-t-3xl shadow-2xl border-t border-gray-800/50 max-h-[85vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-lg z-10 px-6 py-4 border-b border-gray-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={ramaLogo}
                    alt="Ramestta Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Zilap-Orion' }}>Menu</h2>
                </div>
                <button
                  onClick={() => {
                    setIsMoreOpen(false);
                    setIsResourcesExpanded(false);
                  }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className="text-gray-300" />
                </button>
              </div>
            </div>

            <div className="px-6 py-6 space-y-6">
              <div>
                <button
                  onClick={() => setIsResourcesExpanded(!isResourcesExpanded)}
                  className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-200 border border-gray-700/50"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen size={20} className="text-primary-400" />
                    <span className="text-base font-semibold text-white">Resources</span>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${isResourcesExpanded ? 'rotate-90' : ''}`}
                  />
                </button>

                {isResourcesExpanded && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary-500/30 pl-4">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleMoreItemClick}
                        className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-primary-500/10 text-primary-400 font-medium'
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">Navigation</h3>
                {moreItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleMoreItemClick}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-500/10 text-primary-400 font-medium'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800">
                {userToken ? (
                  <button
                    onClick={() => {
                      logout();
                      handleMoreItemClick();
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-xl transition-all duration-200 border border-red-600/30"
                  >
                    <LogOut size={18} />
                    <span className="font-medium">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/developers"
                    onClick={handleMoreItemClick}
                    className="block w-full text-center py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-200 font-medium shadow-lg shadow-primary-900/50"
                  >
                    Start Building
                  </Link>
                )}
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="bg-gray-800/30 rounded-xl p-4 space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-3">Network Info</h4>
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Chain ID:</span>
                      <span className="text-white font-mono">1370</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">RPC:</span>
                      <span className="text-white font-mono text-[10px]">blockchain.ramestta.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Explorer:</span>
                      <span className="text-white font-mono text-[10px]">ramascan.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </>
  );
};

export default BottomNav;
