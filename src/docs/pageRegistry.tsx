import React, { lazy, Suspense } from 'react';

// Lazy load all documentation pages
const WelcomePage = lazy(() => import('./pages/getting-started/WelcomePage'));
const OverviewPage = lazy(() => import('./pages/getting-started/OverviewPage'));
const QuickStartPage = lazy(() => import('./pages/getting-started/QuickStartPage'));
const MainnetPage = lazy(() => import('./pages/network/MainnetPage'));
const TestnetPage = lazy(() => import('./pages/network/TestnetPage'));
const RpcEndpointsPage = lazy(() => import('./pages/network/RpcEndpointsPage'));
const L3ArchitecturePage = lazy(() => import('./pages/architecture/L3ArchitecturePage'));
const HeimdallPage = lazy(() => import('./pages/architecture/HeimdallPage'));
const BorPage = lazy(() => import('./pages/architecture/BorPage'));
const SdkOverviewPage = lazy(() => import('./pages/sdk/SdkOverviewPage'));
const SdkInstallationPage = lazy(() => import('./pages/sdk/SdkInstallationPage'));
const SdkEthersPage = lazy(() => import('./pages/sdk/SdkEthersPage'));
const SdkWeb3Page = lazy(() => import('./pages/sdk/SdkWeb3Page'));
const ContractAddressesPage = lazy(() => import('./pages/contracts/ContractAddressesPage'));
const StakingContractsPage = lazy(() => import('./pages/contracts/StakingContractsPage'));
const BridgeOverviewPage = lazy(() => import('./pages/bridge/BridgeOverviewPage'));
const DepositWithdrawPage = lazy(() => import('./pages/bridge/DepositWithdrawPage'));

// Developers
const DevSetupPage = lazy(() => import('./pages/developers/DevSetupPage'));
const HardhatGuidePage = lazy(() => import('./pages/developers/HardhatGuidePage'));
const RemixGuidePage = lazy(() => import('./pages/developers/RemixGuidePage'));

// Validators
const BecomeValidatorPage = lazy(() => import('./pages/validators/BecomeValidatorPage'));
const StakingGuidePage = lazy(() => import('./pages/validators/StakingGuidePage'));

// Wallet
const RamapayOverviewPage = lazy(() => import('./pages/wallet/RamapayOverviewPage'));
const BrowserExtensionPage = lazy(() => import('./pages/wallet/BrowserExtensionPage'));
const MobileAppPage = lazy(() => import('./pages/wallet/MobileAppPage'));

// API
const JsonRpcPage = lazy(() => import('./pages/api/JsonRpcPage'));
const RestApiPage = lazy(() => import('./pages/api/RestApiPage'));

// Page registry mapping page IDs to components
export const pageRegistry: Record<string, React.LazyExoticComponent<React.FC>> = {
  // Getting Started
  'welcome': WelcomePage,
  'overview': OverviewPage,
  'quick-start': QuickStartPage,
  'quickstart': QuickStartPage,
  
  // Network
  'mainnet': MainnetPage,
  'testnet': TestnetPage,
  'rpc-endpoints': RpcEndpointsPage,
  
  // Architecture
  'l3-architecture': L3ArchitecturePage,
  'architecture': L3ArchitecturePage,
  'heimdall': HeimdallPage,
  'bor': BorPage,
  
  // SDK
  'sdk-overview': SdkOverviewPage,
  'sdk-installation': SdkInstallationPage,
  'sdk-ethers': SdkEthersPage,
  'sdk-web3': SdkWeb3Page,
  'sdk-getting-started': SdkOverviewPage,
  
  // Contracts
  'contract-addresses': ContractAddressesPage,
  'contracts': ContractAddressesPage,
  'staking-contracts': StakingContractsPage,
  'bridge-contracts': ContractAddressesPage,
  
  // Validators
  'become-validator': BecomeValidatorPage,
  'validator-requirements': BecomeValidatorPage,
  'staking-rewards': StakingGuidePage,
  'staking-guide': StakingGuidePage,
  
  // Bridge
  'bridge-overview': BridgeOverviewPage,
  'deposit-withdraw': DepositWithdrawPage,
  
  // Developers
  'dev-setup': DevSetupPage,
  'hardhat-guide': HardhatGuidePage,
  'remix-guide': RemixGuidePage,
  
  // Wallet
  'ramapay-setup': RamapayOverviewPage,
  'wallet-integration': RamapayOverviewPage,
  'ramapay-overview': RamapayOverviewPage,
  'ramapay-extension': BrowserExtensionPage,
  'ramapay-mobile': MobileAppPage,
  
  // API
  'rpc-methods': JsonRpcPage,
  'explorer-api': RestApiPage,
  'json-rpc': JsonRpcPage,
  'rest-api': RestApiPage,
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
