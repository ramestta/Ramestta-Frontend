import React, { lazy, Suspense } from 'react';

// Lazy load all documentation pages
const WelcomePage = lazy(() => import('./pages/getting-started/WelcomePage'));
const OverviewPage = lazy(() => import('./pages/getting-started/OverviewPage'));
const QuickStartPage = lazy(() => import('./pages/getting-started/QuickStartPage'));
const MainnetPage = lazy(() => import('./pages/network/MainnetPage'));
const TestnetPage = lazy(() => import('./pages/network/TestnetPage'));
const RpcEndpointsPage = lazy(() => import('./pages/network/RpcEndpointsPage'));
const L3ArchitecturePage = lazy(() => import('./pages/architecture/L3ArchitecturePage'));
const SdkOverviewPage = lazy(() => import('./pages/sdk/SdkOverviewPage'));
const SdkEthersPage = lazy(() => import('./pages/sdk/SdkEthersPage'));
const SdkWeb3Page = lazy(() => import('./pages/sdk/SdkWeb3Page'));
const ContractAddressesPage = lazy(() => import('./pages/contracts/ContractAddressesPage'));
const BridgeOverviewPage = lazy(() => import('./pages/bridge/BridgeOverviewPage'));

// Page registry mapping page IDs to components
export const pageRegistry: Record<string, React.LazyExoticComponent<React.FC>> = {
  // Getting Started
  'welcome': WelcomePage,
  'overview': OverviewPage,
  'quick-start': QuickStartPage,
  
  // Network
  'mainnet': MainnetPage,
  'testnet': TestnetPage,
  'rpc-endpoints': RpcEndpointsPage,
  
  // Architecture
  'l3-architecture': L3ArchitecturePage,
  'heimdall': L3ArchitecturePage, // Placeholder - can create separate page
  'bor': L3ArchitecturePage, // Placeholder - can create separate page
  
  // SDK
  'sdk-overview': SdkOverviewPage,
  'sdk-installation': SdkOverviewPage, // Placeholder
  'sdk-ethers': SdkEthersPage,
  'sdk-web3': SdkWeb3Page,
  
  // Contracts
  'contract-addresses': ContractAddressesPage,
  'staking-contracts': ContractAddressesPage, // Placeholder
  'bridge-contracts': ContractAddressesPage, // Placeholder
  
  // Validators (Placeholders)
  'become-validator': SdkOverviewPage,
  'validator-requirements': SdkOverviewPage,
  'staking-rewards': SdkOverviewPage,
  
  // Bridge
  'bridge-overview': BridgeOverviewPage,
  'deposit-withdraw': BridgeOverviewPage, // Placeholder
  
  // Wallet (Placeholders)
  'ramapay-setup': SdkOverviewPage,
  'wallet-integration': SdkOverviewPage,
  
  // API (Placeholders)
  'rpc-methods': RpcEndpointsPage,
  'explorer-api': SdkOverviewPage,
};

// Loading component for Suspense
export const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-400 text-sm">Loading documentation...</p>
    </div>
  </div>
);

// Get page component by ID with fallback
export const getPageComponent = (pageId: string): React.ReactNode => {
  const PageComponent = pageRegistry[pageId];
  
  if (!PageComponent) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400">
          The documentation page "{pageId}" does not exist or is under construction.
        </p>
      </div>
    );
  }
  
  return (
    <Suspense fallback={<PageLoader />}>
      <PageComponent />
    </Suspense>
  );
};
