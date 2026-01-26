import React from 'react';
import { Search, Menu, X, ExternalLink, ChevronRight } from 'lucide-react';
import { useDocs } from '../context/DocsContext';
import { usefulLinks } from '../data/docsData';

interface DocsSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onNavigate?: () => void;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ isOpen = true, onClose, onNavigate }) => {
  const { sections, currentSection, currentPage, getSectionPages, setCurrentPage } = useDocs();
  const [expandedSections, setExpandedSections] = React.useState<string[]>([currentSection]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { searchDocs } = useDocs();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleNavigate = (sectionId: string, pageId: string) => {
    setCurrentPage(pageId);
    onNavigate?.();
    if (!expandedSections.includes(sectionId)) {
      setExpandedSections(prev => [...prev, sectionId]);
    }
    if (window.innerWidth < 1024) {
      onClose?.();
    }
  };

  const searchResults = searchQuery ? searchDocs(searchQuery) : [];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => onClose?.()}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-gray-900 border-r border-gray-800
          transform transition-transform duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-white font-bold text-lg">Docs</span>
              </a>
              <button
                onClick={onClose}
                className="lg:hidden text-gray-400 hover:text-white p-1"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
              />
            </div>

            {/* Search Results */}
            {searchQuery && searchResults.length > 0 && (
              <div className="absolute left-4 right-4 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
                {searchResults.map(page => (
                  <button
                    key={page.id}
                    onClick={() => {
                      handleNavigate(page.sectionId, page.id);
                      setSearchQuery('');
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700 text-sm"
                  >
                    <span className="text-white">{page.title}</span>
                    <span className="text-gray-500 block text-xs">{page.description}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {sections.map(section => (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-left
                    transition-colors duration-200
                    ${currentSection === section.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}
                  `}
                >
                  <span className="flex items-center gap-2">
                    <span>{section.icon}</span>
                    <span className="font-medium text-sm">{section.title}</span>
                  </span>
                  <ChevronRight
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      expandedSections.includes(section.id) ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Section Pages */}
                {expandedSections.includes(section.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {getSectionPages(section.id).map(page => (
                      <button
                        key={page.id}
                        onClick={() => handleNavigate(section.id, page.id)}
                        className={`
                          w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors duration-200
                          ${currentPage === page.id
                            ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                          }
                        `}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="p-4 border-t border-gray-800">
            <div className="space-y-2">
              <a
                href={usefulLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={usefulLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <span>Discord</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;
