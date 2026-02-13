// Documentation Data - Central data store for all documentation content
// Easy to add, remove, or modify documentation sections

export interface DocSection {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  order: number;
}

export interface DocPage {
  id: string;
  sectionId: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  lastUpdated: string;
}

// Documentation Sections
export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    description: 'Introduction to Ramestta Network',
    order: 1
  },
  {
    id: 'network',
    title: 'Network',
    icon: '🌐',
    description: 'Network configuration and details',
    order: 2
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: '🏗️',
    description: 'Technical architecture overview',
    order: 3
  },
  {
    id: 'developers',
    title: 'Developers',
    icon: '👨‍💻',
    description: 'Developer guides and tutorials',
    order: 4
  },
  {
    id: 'sdk',
    title: 'SDK Reference',
    icon: '📦',
    description: 'Official SDK documentation',
    order: 5
  },
  {
    id: 'contracts',
    title: 'Smart Contracts',
    icon: '📜',
    description: 'Contract addresses and ABIs',
    order: 6
  },
  {
    id: 'validators',
    title: 'Validators',
    icon: '🔐',
    description: 'Validator and staking guides',
    order: 7
  },
  {
    id: 'bridge',
    title: 'Bridge',
    icon: '🌉',
    description: 'Cross-chain bridge documentation',
    order: 8
  },
  {
    id: 'wallet',
    title: 'RamaPay Wallet',
    icon: '💳',
    description: 'Wallet and extension guides',
    order: 9
  },
  {
    id: 'api',
    title: 'API Reference',
    icon: '🔌',
    description: 'REST and RPC API documentation',
    order: 10
  }
];

// Documentation Pages
export const docPages: DocPage[] = [
  // Getting Started
  {
    id: 'welcome',
    sectionId: 'getting-started',
    title: 'Welcome to Ramestta',
    slug: 'welcome',
    description: 'Introduction to Ramestta Layer-3 blockchain',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'overview',
    sectionId: 'getting-started',
    title: 'Overview',
    slug: 'overview',
    description: 'Ramestta network overview and features',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'quick-start',
    sectionId: 'getting-started',
    title: 'Quick Start',
    slug: 'quick-start',
    description: 'Get started with Ramestta in 5 minutes',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  // Network
  {
    id: 'mainnet',
    sectionId: 'network',
    title: 'Mainnet',
    slug: 'mainnet',
    description: 'Ramestta Mainnet configuration',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'testnet',
    sectionId: 'network',
    title: 'Testnet',
    slug: 'testnet',
    description: 'Ramestta Testnet configuration',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'rpc-endpoints',
    sectionId: 'network',
    title: 'RPC Endpoints',
    slug: 'rpc-endpoints',
    description: 'Available RPC endpoints',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  // Architecture
  {
    id: 'l3-architecture',
    sectionId: 'architecture',
    title: 'L3 Architecture',
    slug: 'l3-architecture',
    description: 'Layer-3 architecture overview',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'heimdall',
    sectionId: 'architecture',
    title: 'Heimdall',
    slug: 'heimdall',
    description: 'Consensus layer documentation',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'bor',
    sectionId: 'architecture',
    title: 'Bor',
    slug: 'bor',
    description: 'Execution layer documentation',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  // Developers
  {
    id: 'dev-setup',
    sectionId: 'developers',
    title: 'Development Setup',
    slug: 'dev-setup',
    description: 'Setting up development environment',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'hardhat-guide',
    sectionId: 'developers',
    title: 'Hardhat Guide',
    slug: 'hardhat-guide',
    description: 'Deploy contracts with Hardhat',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'remix-guide',
    sectionId: 'developers',
    title: 'Remix Guide',
    slug: 'remix-guide',
    description: 'Deploy contracts with Remix IDE',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  // SDK
  {
    id: 'sdk-overview',
    sectionId: 'sdk',
    title: 'SDK Overview',
    slug: 'sdk-overview',
    description: 'Ramestta SDK introduction',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'sdk-installation',
    sectionId: 'sdk',
    title: 'Installation',
    slug: 'sdk-installation',
    description: 'Installing the SDK packages',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'sdk-ethers',
    sectionId: 'sdk',
    title: 'Ethers.js Plugin',
    slug: 'sdk-ethers',
    description: '@ramestta/sdk-ethers documentation',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'sdk-web3',
    sectionId: 'sdk',
    title: 'Web3.js Plugin',
    slug: 'sdk-web3',
    description: '@ramestta/sdk-web3 documentation',
    order: 4,
    lastUpdated: '2026-01-26'
  },
  // Contracts
  {
    id: 'contract-addresses',
    sectionId: 'contracts',
    title: 'Contract Addresses',
    slug: 'contract-addresses',
    description: 'Deployed contract addresses',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'staking-contracts',
    sectionId: 'contracts',
    title: 'Staking Contracts',
    slug: 'staking-contracts',
    description: 'Staking contract documentation',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  // Validators
  {
    id: 'become-validator',
    sectionId: 'validators',
    title: 'Become a Validator',
    slug: 'become-validator',
    description: 'How to become a validator',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'staking-guide',
    sectionId: 'validators',
    title: 'Staking Guide',
    slug: 'staking-guide',
    description: 'Staking RAMA tokens',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  // Bridge
  {
    id: 'bridge-overview',
    sectionId: 'bridge',
    title: 'Bridge Overview',
    slug: 'bridge-overview',
    description: 'Cross-chain bridge introduction',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'deposit-withdraw',
    sectionId: 'bridge',
    title: 'Deposit & Withdraw',
    slug: 'deposit-withdraw',
    description: 'How to deposit and withdraw assets',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  // Wallet
  {
    id: 'ramapay-overview',
    sectionId: 'wallet',
    title: 'RamaPay Overview',
    slug: 'ramapay-overview',
    description: 'RamaPay wallet introduction',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'ramapay-extension',
    sectionId: 'wallet',
    title: 'Browser Extension',
    slug: 'ramapay-extension',
    description: 'Chrome extension guide',
    order: 2,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'ramapay-mobile',
    sectionId: 'wallet',
    title: 'Mobile App',
    slug: 'ramapay-mobile',
    description: 'Android app guide',
    order: 3,
    lastUpdated: '2026-01-26'
  },
  // API
  {
    id: 'json-rpc',
    sectionId: 'api',
    title: 'JSON-RPC API',
    slug: 'json-rpc',
    description: 'JSON-RPC API reference',
    order: 1,
    lastUpdated: '2026-01-26'
  },
  {
    id: 'rest-api',
    sectionId: 'api',
    title: 'REST API',
    slug: 'rest-api',
    description: 'REST API reference',
    order: 2,
    lastUpdated: '2026-01-26'
  }
];

// Network Configuration Data
export const networkConfig = {
  mainnet: {
    chainId: 1370,
    chainName: 'Ramestta Mainnet',
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    rpcUrls: [
      'https://blockchain.ramestta.com',
      'https://blockchain2.ramestta.com'
    ],
    blockExplorerUrls: ['https://ramascan.com'],
    bridgeUrl: 'https://ramabridge.com',
    swapUrl: 'https://ramaswap.com',
    networkType: 'Layer-3',
    parentChain: 'Polygon (Chain ID: 137)',
    blockTime: '~2 seconds',
    consensus: 'Proof-of-Stake'
  },
  testnet: {
    chainId: 1371,
    chainName: 'Ramestta Testnet',
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    rpcUrls: ['https://testnet.ramestta.com'],
    blockExplorerUrls: ['https://pingaksha.ramascan.com'],
    apiUrl: 'https://testbackendapi.ramascan.com',
    faucetUrl: 'https://testnet-faucet.ramascan.com',
    networkType: 'Layer-3',
    parentChain: 'Polygon Amoy (Chain ID: 80002)',
    blockTime: '~2 seconds',
    consensus: 'Proof-of-Stake'
  }
};

// SDK Packages Data
export const sdkPackages = [
  {
    name: '@ramestta/sdk',
    version: '1.0.0',
    description: 'Core SDK for Ramestta Network',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/sdk',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-sdk',
    features: ['POSClient', 'Network Constants', 'Core Contracts', 'TypeScript Support']
  },
  {
    name: '@ramestta/sdk-ethers',
    version: '1.0.3',
    description: 'Ethers.js plugin for @ramestta/sdk',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/sdk-ethers',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-sdk-ethers',
    features: ['Web3ClientPlugin', 'Ethers v5 & v6 Support', 'Provider Integration']
  },
  {
    name: '@ramestta/sdk-web3',
    version: '1.0.0',
    description: 'Web3.js plugin for @ramestta/sdk',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/sdk-web3',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-sdk-web3',
    features: ['Web3ClientPlugin', 'Web3.js Support', 'Provider Integration']
  },
  {
    name: '@ramestta/sdk-react',
    version: '1.0.0',
    description: 'React hooks and components for Ramestta',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/sdk-react',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-sdk-react',
    features: ['React Hooks', 'Wallet Components', 'Context Providers', 'TypeScript Support']
  },
  {
    name: '@ramestta/contracts',
    version: '1.1.0',
    description: 'Smart contract ABIs and addresses',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/contracts',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-contracts',
    features: ['Contract ABIs', 'Type Definitions', 'Contract Addresses', 'Deployment Scripts']
  },
  {
    name: '@ramestta/staking-sdk',
    version: '1.0.1',
    description: 'SDK for staking operations on Ramestta',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/staking-sdk',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-staking-sdk',
    features: ['Validator Staking', 'Delegation', 'Rewards Claiming', 'Unstaking']
  },
  {
    name: '@ramestta/bridge-sdk',
    version: '1.0.1',
    description: 'SDK for cross-chain bridge operations',
    npmUrl: 'https://www.npmjs.com/package/@ramestta/bridge-sdk',
    githubUrl: 'https://github.com/Ramestta-Blockchain/ramestta-bridge-sdk',
    features: ['Deposit', 'Withdraw', 'Proof Generation', 'Status Tracking']
  }
];

// Contract Addresses
export const contractAddresses = {
  mainnet: {
    parent: { // Polygon Mainnet
      RootChain: '0x32BC23e5FFf7D567313dB4F41A5125Ad9D9Bca63',
      StakeManager: '0x73fA0adc27bE0732dfeE02A3E8a95f3434E95037',
      StakingInfo: '0x8a50eEe459d0D06C987485B013a7f5Ab7D315A06',
      StateSender: '0xF79DA6C4c31F3F7C06E0F39e0CC4e73D0E6C4f71',
      DepositManager: '0x7D1A6a8D85E0C54f5C79AAf8E9A2F5EBC9E1b5C8',
      WithdrawManager: '0x3E4b2C8A92d1F9E2aB6c5D7E8F0A1B2C3D4E5F60',
      ERC20Predicate: '0x4A5B6C7D8E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3B',
      ERC721Predicate: '0x5B6C7D8E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C',
      RamaToken: '0x54AdE0D23E3D8A9F3c0D4E5F6A7B8C9D0E1F2A3B'
    },
    child: { // Ramestta Mainnet
      StateReceiver: '0x0000000000000000000000000000000000001001',
      BorValidatorSet: '0x0000000000000000000000000000000000001000',
      ChildChain: '0x0000000000000000000000000000000000001002',
      ChildERC20: '0x0000000000000000000000000000000000001010'
    }
  },
  testnet: {
    parent: { // Mumbai
      RootChain: '0x...',
      StakeManager: '0x...',
      StateSender: '0x...'
    },
    child: { // Ramestta Testnet
      StateReceiver: '0x0000000000000000000000000000000000001001',
      BorValidatorSet: '0x0000000000000000000000000000000000001000'
    }
  }
};

// Useful Links
export const usefulLinks = {
  website: 'https://ramestta.com',
  docs: '/docs?page=welcome',
  explorer: 'https://ramascan.com',
  bridge: 'https://ramabridge.com',
  swap: 'https://ramaswap.com',
  staking: 'https://staking.ramestta.com',
  github: 'https://github.com/Ramestta-Blockchain',
  npm: 'https://www.npmjs.com/~ramestta',
  discord: 'https://discord.gg/ramestta',
  telegram: 'https://t.me/ramestta',
  twitter: 'https://twitter.com/raboramestta',
  chainlist: 'https://chainlist.org/chain/1370'
};
