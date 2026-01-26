import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronLeft, ChevronRight, ExternalLink, Home } from 'lucide-react';
import { DocsProvider, useDocs } from './context/DocsContext';
import DocsSidebar from './components/DocsSidebar';
import { getPageComponent } from './pageRegistry';
import { docSections, docPages } from './data/docsData';

// Main documentation content area
const DocsContent: React.FC = () => {
  const { currentPage, setCurrentPage } = useDocs();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Sync URL with current page
  useEffect(() => {
    const pageFromUrl = searchParams.get('page');
    if (pageFromUrl && pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (currentPage) {
      setSearchParams({ page: currentPage });
    }
  }, [currentPage]);
  
  // Get current page info
  const currentPageInfo = docPages.find(p => p.id === currentPage);
  const currentSection = currentPageInfo 
    ? docSections.find(s => s.id === currentPageInfo.sectionId)
    : null;
  
  // Get previous and next pages for navigation
  const currentIndex = docPages.findIndex(p => p.id === currentPage);
  const prevPage = currentIndex > 0 ? docPages[currentIndex - 1] : null;
  const nextPage = currentIndex < docPages.length - 1 ? docPages[currentIndex + 1] : null;
  
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Home size={14} />
            Home
          </button>
          <span>/</span>
          <span>Docs</span>
          {currentSection && (
            <>
              <span>/</span>
              <span>{currentSection.title}</span>
            </>
          )}
          {currentPageInfo && (
            <>
              <span>/</span>
              <span className="text-white">{currentPageInfo.title}</span>
            </>
          )}
        </div>
        
        {/* Page Content */}
        <article className="docs-content prose prose-invert max-w-none">
          {getPageComponent(currentPage)}
        </article>
        
        {/* Page Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
          {prevPage ? (
            <button
              onClick={() => setCurrentPage(prevPage.id)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Previous</div>
                <div className="text-sm">{prevPage.title}</div>
              </div>
            </button>
          ) : (
            <div />
          )}
          
          {nextPage ? (
            <button
              onClick={() => setCurrentPage(nextPage.id)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500">Next</div>
                <div className="text-sm">{nextPage.title}</div>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div />
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            Found an issue with this page?{' '}
            <a 
              href="https://github.com/AamirAlam/ramestta-frontend/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Report on GitHub <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile header with menu toggle
const MobileHeader: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-3">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-white">Docs</span>
        </button>
        
        <button
          onClick={onToggle}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

// Mobile sidebar overlay
const MobileSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-gray-900 overflow-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
          <span className="font-semibold text-white">Navigation</span>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <DocsSidebar onNavigate={onClose} />
      </div>
    </div>
  );
};

// Main DocsPage component
const DocsPageInner: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Mobile Header */}
      <MobileHeader 
        isOpen={mobileMenuOpen} 
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
      />
      
      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0 sticky top-0 h-screen overflow-auto border-r border-gray-800 bg-gray-900/50">
          {/* Logo */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <div className="font-bold text-white">Ramestta</div>
                <div className="text-xs text-gray-400">Documentation</div>
              </div>
            </a>
          </div>
          
          <DocsSidebar />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <DocsContent />
        </main>
      </div>
    </div>
  );
};

// Wrapper with provider
const DocsPage: React.FC = () => {
  return (
    <DocsProvider>
      <DocsPageInner />
    </DocsProvider>
  );
};

export default DocsPage;
