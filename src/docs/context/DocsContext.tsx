import React, { createContext, useContext, useState, ReactNode } from 'react';
import { docSections, docPages, DocSection, DocPage } from '../data/docsData';

interface DocsContextType {
  sections: DocSection[];
  pages: DocPage[];
  currentSection: string;
  currentPage: string;
  setCurrentSection: (id: string) => void;
  setCurrentPage: (id: string) => void;
  getSectionPages: (sectionId: string) => DocPage[];
  getPageById: (pageId: string) => DocPage | undefined;
  getSectionById: (sectionId: string) => DocSection | undefined;
  searchDocs: (query: string) => DocPage[];
}

const DocsContext = createContext<DocsContextType | undefined>(undefined);

export const DocsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('getting-started');
  const [currentPage, setCurrentPage] = useState('welcome');

  const getSectionPages = (sectionId: string): DocPage[] => {
    return docPages
      .filter(page => page.sectionId === sectionId)
      .sort((a, b) => a.order - b.order);
  };

  const getPageById = (pageId: string): DocPage | undefined => {
    return docPages.find(page => page.id === pageId);
  };

  const getSectionById = (sectionId: string): DocSection | undefined => {
    return docSections.find(section => section.id === sectionId);
  };

  const searchDocs = (query: string): DocPage[] => {
    const lowercaseQuery = query.toLowerCase();
    return docPages.filter(
      page =>
        page.title.toLowerCase().includes(lowercaseQuery) ||
        page.description.toLowerCase().includes(lowercaseQuery)
    );
  };

  return (
    <DocsContext.Provider
      value={{
        sections: docSections.sort((a, b) => a.order - b.order),
        pages: docPages,
        currentSection,
        currentPage,
        setCurrentSection,
        setCurrentPage,
        getSectionPages,
        getPageById,
        getSectionById,
        searchDocs
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = (): DocsContextType => {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error('useDocs must be used within a DocsProvider');
  }
  return context;
};
