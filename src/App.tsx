


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import EcosystemPage from './pages/EcosystemPage';
import DevelopersPage from './pages/DevelopersPage';
import ValidatorPage from './pages/ValidatorPage';
import BridgePage from './pages/BridgePage';
import SwapPage from './pages/SwapPage';
import ExplorerPage from './pages/ExplorerPage';
import TokenomicsPage from './pages/TokenomicsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import WhitepaperPage from './pages/WhitepaperPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import Login from './pages/Login';
import UserPanel from './pages/UserPanel';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import RamaPayPage from './pages/RamaPayPage';

import ScrollToTop from './components/ScrollToTop';
import BlogPostForm from './components/BlogPostForm';
import { useAuthStore } from './store/store';
import { projectId, metadata, networks, wagmiAdapter } from './config';
import { createAppKit } from '@reown/appkit/react';

// React Query
const queryClient = new QueryClient();

// AppKit setup
const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: 'light' as const,
  themeVariables: {
    '--w3m-accent': '#000000',
  }
};

createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: { analytics: true },
});

function App() {
  const userToken = null; // useAuthStore((s) => s.userToken);
  const isAdmin = false;  // useAuthStore((s) => s.isAdmin);

  return (
    <HelmetProvider>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ScrollToTop />
            <Toaster />

            <Routes>
              {/* -------------------- */}
              {/* Normal pages with header/footer */}
              {/* -------------------- */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/ecosystem" element={<EcosystemPage />} />
                <Route path="/developers" element={<DevelopersPage />} />
                <Route path="/validator" element={<ValidatorPage />} />
                <Route path="/bridge" element={<BridgePage />} />
                <Route path="/swap" element={<SwapPage />} />
                <Route path="/explorer" element={<ExplorerPage />} />
                <Route path="/tokenomics" element={<TokenomicsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/ramapay" element={<RamaPayPage />} />
                <Route path="/blog-post" element={<BlogPostForm />} />

                <Route
                  path="/user-panel"
                  element={userToken && !isAdmin ? <UserPanel /> : <Login />}
                />
                <Route
                  path="/admin-panel"
                  element={userToken && isAdmin ? <AdminPanel /> : <Login />}
                />
              </Route>

              {/* -------------------- */}
              {/* Whitepaper full-screen isolated layout */}
              {/* -------------------- */}
              <Route path="/whitepaper" element={<WhitepaperPage />} />
              <Route path="/whitepaper/:sectionId" element={<WhitepaperPage />} />

              {/* -------------------- */}
              {/* Standalone pages */}
              {/* -------------------- */}
              <Route path="/login" element={<Login />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </HelmetProvider>
  );
}

export default App;
