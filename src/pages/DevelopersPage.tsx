// import React from 'react';
// import { Code, Book, Github, Zap, CheckCircle, ExternalLink } from 'lucide-react';
// import FloatingParticles from '../components/FloatingParticles';

// const DevelopersPage: React.FC = () => {
//   const compatibleTools = [
//     { name: 'MetaMask', description: 'Browser wallet integration', status: 'Available' },
//     { name: 'Remix', description: 'Online Solidity IDE', status: 'Available' },
//     { name: 'Hardhat & Truffle', description: 'Development frameworks', status: 'Available' },
//     { name: 'Web3.js / Ethers.js', description: 'JavaScript libraries', status: 'Available' },
//     { name: 'WalletConnect', description: 'Wallet connection protocol', status: 'Available' },
//     { name: 'OpenZeppelin', description: 'Smart contract libraries', status: 'Available' }
//   ];

//   const comingSoon = [
//     { name: 'Faucet for Testnet', description: 'Get test tokens for development' },
//     { name: 'Dev Grant Program', description: 'Funding for promising projects' },
//     { name: 'Dev Console', description: 'Streamlined contract deployment' },
//     { name: 'Verified Contracts', description: 'Contract verification via Ramascan' }
//   ];

//   const quickStart = [
//     {
//       step: 1,
//       title: 'Add Network to MetaMask',
//       description: 'Configure your wallet with Ramestta network settings'
//     },
//     {
//       step: 2,
//       title: 'Get Test Tokens',
//       description: 'Use our faucet to get tokens for development (coming soon)'
//     },
//     {
//       step: 3,
//       title: 'Deploy Contract',
//       description: 'Use Remix, Hardhat, or Truffle to deploy your smart contracts'
//     },
//     {
//       step: 4,
//       title: 'Interact & Test',
//       description: 'Test your dApp and interact with deployed contracts'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Hero Section */}
//       <section className="gradient-bg text-white section-padding">
//         <FloatingParticles />
//         <div className="container-max">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Build on
//               <span className="block text-gradient">
//                 Ramestta
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
//               Get started in minutes with the same tools you already know and love.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="https://docs.ramestta.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-primary"
//               >
//                 <Book className="mr-2" size={20} />
//                 Read Developer Docs
//               </a>
//               <a
//                 href="https://www.npmjs.com/~ramestta"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 <Github className="mr-2" size={20} />
//                 NPM - Ramestta SDKs
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Network Configuration */}
//       <section className="section-padding bg-black">
//         <div className="container-max">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-6">Get Started in Minutes</h2>
//             <p className="text-xl text-gray-300">Add Ramestta to your development environment</p>
//           </div>
//           <div className="max-w-4xl mx-auto">
//             <div className="card p-8">
//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
//                 <div className="feature-icon mr-3">
//                   <Code className="text-white relative z-10" size={28} />
//                 </div>
//                 Network Configuration
//               </h3>
//               <div className="bg-gray-950/80 rounded-lg p-6 overflow-x-auto border border-gray-700 shimmer-effect">
//                 <pre className="text-green-400 text-sm">
//                   {`{
//   "chainId": 1370,
//   "rpc": "https://blockchain.ramestta.com",
//   "explorer": "https://ramascan.com",
//   "name": "Ramestta Mainnet",
//   "symbol": "RAMA",
//   "decimals": 18
// }`}
//                 </pre>
//               </div>
//               <div className="mt-6 flex flex-col sm:flex-row gap-4">
//                 <button className="btn-primary flex-1">
//                   Add to MetaMask
//                 </button>
//                 <button className="btn-secondary flex-1">
//                   Copy Configuration
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Start Guide */}
//       <section className="section-padding bg-gray-950">
//         <div className="container-max">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-6">Quick Start Guide</h2>
//             <p className="text-xl text-gray-300">Follow these steps to deploy your first contract</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {quickStart.map((item, index) => (
//               <div key={index} className="card p-6 text-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
//                   <span className="text-white font-bold text-lg">{item.step}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compatible Tools */}
//       <section className="section-padding bg-black">
//         <div className="container-max">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-6">Compatible With</h2>
//             <p className="text-xl text-gray-300">Use your favorite development tools without any changes</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {compatibleTools.map((tool, index) => (
//               <div key={index} className="card p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
//                   <div className="flex items-center text-green-400">
//                     <CheckCircle size={20} className="mr-1 icon-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
//                     <span className="text-sm font-medium">{tool.status}</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-300">{tool.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Coming Soon */}
//       <section className="section-padding bg-gray-950 text-white">
//         <div className="container-max">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
//             <p className="text-xl text-gray-300">Exciting developer tools and programs on the horizon</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {comingSoon.map((item, index) => (
//               <div key={index} className="card p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
//                     <Zap className="text-white icon-bounce" size={20} style={{ animationDelay: `${index * 0.3}s` }} />
//                   </div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                 </div>
//                 <p className="text-gray-300">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources */}
//       <section className="section-padding gradient-bg text-white">
//         <FloatingParticles />
//         <div className="container-max">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6">Developer Resources</h2>
//             <p className="text-xl text-gray-200 mb-8">Everything you need to build on Ramestta</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="card p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
//                 <Book className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Documentation</h3>
//               <p className="text-gray-200 mb-6">Comprehensive guides and API references</p>
//               <a
//                 href="https://docs.ramestta.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 Read Docs <ExternalLink className="ml-2" size={16} />
//               </a>
//             </div>
//             <div className="card p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
//                 <Code className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Setup Guide</h3>
//               <p className="text-gray-200 mb-6">Step-by-step development environment setup</p>
//               <a
//                 href="https://docs.ramestta.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 Setup Guide <ExternalLink className="ml-2" size={16} />
//               </a>
//             </div>
//             <div className="card p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
//                 <Github className="text-white" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">NPM SDKs</h3>
//               <p className="text-gray-200 mb-6">Open-source SDKs and example projects</p>
//               <a
//                 href="https://www.npmjs.com/~ramestta"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 View NPM <ExternalLink className="ml-2" size={16} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DevelopersPage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Book, Github, Zap, CheckCircle, ExternalLink, Package, Copy, Terminal, Globe, FlaskConical, Fuel, Search, Server } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import toast from 'react-hot-toast';

const DevelopersPage: React.FC = () => {
  const compatibleTools = [
    { name: 'MetaMask', description: 'Browser wallet integration', status: 'Available' },
    { name: 'Remix', description: 'Online Solidity IDE', status: 'Available' },
    { name: 'Hardhat & Truffle', description: 'Development frameworks', status: 'Available' },
    { name: 'Web3.js / Ethers.js', description: 'JavaScript libraries', status: 'Available' },
    { name: 'WalletConnect', description: 'Wallet connection protocol', status: 'Available' },
    { name: 'OpenZeppelin', description: 'Smart contract libraries', status: 'Available' }
  ];

  const comingSoon = [
    { name: 'Dev Grant Program', description: 'Funding for promising projects' },
    { name: 'Dev Console', description: 'Streamlined contract deployment' },
    { name: 'Verified Contracts', description: 'Contract verification via Ramascan' }
  ];

  const quickStart = [
    {
      step: 1,
      title: 'Add Network to MetaMask',
      description: 'Configure your wallet with Ramestta mainnet & testnet settings'
    },
    {
      step: 2,
      title: 'Get Test Tokens',
      description: 'Use our faucet at testnet-faucet.ramascan.com to get free test RAMA'
    },
    {
      step: 3,
      title: 'Deploy Contract',
      description: 'Use Remix, Hardhat, or Truffle to deploy your smart contracts'
    },
    {
      step: 4,
      title: 'Interact & Test',
      description: 'Test your dApp and interact with deployed contracts'
    }
  ];

  const configData = `{
  "chainId": 1370,
  "chainName": "Ramestta Mainnet",
  "nativeCurrency": {
    "name": "RAMA",
    "symbol": "RAMA",
    "decimals": 18
  },
  "rpcUrls": [
    "https://blockchain.ramestta.com",
    "https://blockchain2.ramestta.com"
  ],
  "blockExplorerUrls": ["https://ramascan.com"],
  "networkType": "Layer-3",
  "blockTime": "~2 seconds",
  "consensusType": "Proof-of-Stake"
}`;

  const testnetConfigData = `{
  "chainId": 1371,
  "chainName": "Pingaksha Testnet",
  "nativeCurrency": {
    "name": "RAMA",
    "symbol": "RAMA",
    "decimals": 18
  },
  "rpcUrls": ["https://testnet.ramestta.com"],
  "blockExplorerUrls": ["https://pingaksha.ramascan.com"],
  "apiUrl": "https://testbackendapi.ramascan.com",
  "faucetUrl": "https://testnet-faucet.ramascan.com",
  "networkType": "Layer-3",
  "blockTime": "~2 seconds",
  "consensusType": "Proof-of-Stake"
}`;

  const [activeNetwork, setActiveNetwork] = useState<'mainnet' | 'testnet'>('mainnet');

  const handleAddToMetaMask = async () => {
    if (typeof window.ethereum === 'undefined') {
      toast.error('MetaMask is not installed. Please install MetaMask first.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }
    try {
      await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x55a',
          chainName: 'Ramestta Mainnet',
          nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
          rpcUrls: ['https://blockchain.ramestta.com', 'https://blockchain2.ramestta.com'],
          blockExplorerUrls: ['https://ramascan.com']
        }]
      });
      toast.success('Ramestta Mainnet added to MetaMask!');
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error('Request rejected by user');
      } else {
        toast.error('Failed to add network to MetaMask');
      }
    }
  };

  const handleAddTestnetToMetaMask = async () => {
    if (typeof window.ethereum === 'undefined') {
      toast.error('MetaMask is not installed. Please install MetaMask first.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }
    try {
      await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x55b',
          chainName: 'Pingaksha Testnet',
          nativeCurrency: { name: 'RAMA', symbol: 'RAMA', decimals: 18 },
          rpcUrls: ['https://testnet.ramestta.com'],
          blockExplorerUrls: ['https://pingaksha.ramascan.com']
        }]
      });
      toast.success('Pingaksha Testnet added to MetaMask!');
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error('Request rejected by user');
      } else {
        toast.error('Failed to add testnet to MetaMask');
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(configData).then(() => {
      toast.success("Configuration copied successfully!");
    }).catch(() => {
      toast.error("Failed to copy configuration");
    });
  };

  const handleCopySDK = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(message);
    }).catch(() => {
      toast.error("Failed to copy");
    });
  };

  const sdkInstallCommand = 'npm install @ramestta/sdk @ramestta/sdk-ethers ethers';
  
  const sdkUsageCode = `import { POSClient, use } from "@ramestta/sdk";
import { Web3ClientPlugin } from "@ramestta/sdk-ethers";
import { ethers } from "ethers";

// Install the plugin
use(Web3ClientPlugin);

// Create providers
const polygonProvider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
const ramesttaProvider = new ethers.providers.JsonRpcProvider("https://blockchain.ramestta.com");

// Initialize
const posClient = new POSClient();
await posClient.init({
    network: "mainnet",
    version: "v1",
    parent: { provider: polygonSigner },   // L2 Polygon
    child: { provider: ramesttaSigner }    // L3 Ramestta
});`;

  const sdkPackages = [
    { name: '@ramestta/sdk', version: '1.0.0', url: 'https://www.npmjs.com/package/@ramestta/sdk', desc: 'Core SDK' },
    { name: '@ramestta/sdk-ethers', version: '1.0.3', url: 'https://www.npmjs.com/package/@ramestta/sdk-ethers', desc: 'Ethers.js Plugin' },
    { name: '@ramestta/sdk-web3', version: '1.0.0', url: 'https://www.npmjs.com/package/@ramestta/sdk-web3', desc: 'Web3.js Plugin' },
    { name: '@ramestta/sdk-react', version: '1.0.0', url: 'https://www.npmjs.com/package/@ramestta/sdk-react', desc: 'React Hooks & Components' },
    { name: '@ramestta/contracts', version: '1.1.0', url: 'https://www.npmjs.com/package/@ramestta/contracts', desc: 'Smart Contracts & ABIs' },
    { name: '@ramestta/staking-sdk', version: '1.0.1', url: 'https://www.npmjs.com/package/@ramestta/staking-sdk', desc: 'Staking SDK' },
    { name: '@ramestta/bridge-sdk', version: '1.0.1', url: 'https://www.npmjs.com/package/@ramestta/bridge-sdk', desc: 'Bridge SDK' },
  ];

  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
  const injectGlobalStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0) translateX(20px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(10px) rotate(270deg);
        }
        100% {
          transform: translateY(0) translateX(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  };
  
  // Call this once when the component mounts
  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }
  

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build on
              <span className="block text-gradient font-ramestta">
                Ramestta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              100% EVM-Equivalent. Zero Code Changes. Zero Migration Friction.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Migrate from Polygon or Ethereum with a single RPC endpoint change — existing audits remain valid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs?page=welcome"
                className="btn-primary"
              >
                <Book className="mr-2" size={20} />
                Read Developer Docs
              </Link>
              <a
                href="https://www.npmjs.com/~ramestta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="mr-2" size={20} />
                NPM - Ramestta SDKs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Network Configuration */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Get Started in Minutes</h2>
            <p className="text-xl text-gray-300">Add Ramestta to your development environment</p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Network Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-800/60 rounded-xl p-1 border border-gray-700">
                <button
                  onClick={() => setActiveNetwork('mainnet')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeNetwork === 'mainnet'
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🟢 Mainnet (Chain ID: 1370)
                </button>
                <button
                  onClick={() => setActiveNetwork('testnet')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeNetwork === 'testnet'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🟡 Testnet (Chain ID: 1371)
                </button>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="feature-icon mr-3">
                  <Code className="text-white relative z-10" size={28} />
                </div>
                {activeNetwork === 'mainnet' ? 'Mainnet' : 'Pingaksha Testnet'} Configuration
              </h3>
              <div className="bg-gray-950/80 rounded-lg p-6 overflow-x-auto border border-gray-700 shimmer-effect">
                <pre className="text-green-400 text-sm">
                  {activeNetwork === 'mainnet' ? configData : testnetConfigData}
                </pre>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={activeNetwork === 'mainnet' ? handleAddToMetaMask : handleAddTestnetToMetaMask}
                  className="btn-primary flex-1"
                >
                  Add {activeNetwork === 'mainnet' ? 'Mainnet' : 'Testnet'} to MetaMask
                </button>
                <button
                  onClick={() => {
                    const data = activeNetwork === 'mainnet' ? configData : testnetConfigData;
                    navigator.clipboard.writeText(data).then(() => {
                      toast.success(`${activeNetwork === 'mainnet' ? 'Mainnet' : 'Testnet'} configuration copied!`);
                    }).catch(() => toast.error('Failed to copy'));
                  }}
                  className="btn-secondary flex-1"
                >
                  <Copy className="mr-2" size={16} />
                  Copy Configuration
                </button>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeNetwork === 'mainnet' ? (
                <>
                  <a href="https://ramascan.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-primary-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Search className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Explorer</p>
                        <p className="text-gray-400 text-xs">ramascan.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://blockchain.ramestta.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-primary-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Server className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">RPC</p>
                        <p className="text-gray-400 text-xs">blockchain.ramestta.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://ramabridge.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-primary-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Globe className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Bridge</p>
                        <p className="text-gray-400 text-xs">ramabridge.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://ramaswap.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-primary-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Zap className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Swap</p>
                        <p className="text-gray-400 text-xs">ramaswap.com</p>
                      </div>
                    </div>
                  </a>
                </>
              ) : (
                <>
                  <a href="https://pingaksha.ramascan.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-yellow-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Search className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Testnet Explorer</p>
                        <p className="text-gray-400 text-xs">pingaksha.ramascan.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://testbackendapi.ramascan.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-yellow-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Server className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Testnet API</p>
                        <p className="text-gray-400 text-xs">testbackendapi.ramascan.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://testnet.ramestta.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-yellow-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Globe className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Testnet RPC</p>
                        <p className="text-gray-400 text-xs">testnet.ramestta.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://testnet-faucet.ramascan.com" target="_blank" rel="noopener noreferrer" className="card p-4 hover:border-yellow-500/50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Fuel className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Testnet Faucet</p>
                        <p className="text-gray-400 text-xs">Get free test RAMA</p>
                      </div>
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ramestta SDK Section */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Package size={18} className="text-primary-400" />
              <span className="text-primary-400 font-semibold">NEW</span>
              <span className="text-gray-300">v1.0.0 Released</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Official Ramestta SDK</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build cross-chain applications with our official TypeScript/JavaScript SDK. 
              Bridge assets between Polygon (L2) and Ramestta (L3) seamlessly.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* SDK Packages Table */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Package className="mr-3 text-primary-400" size={24} />
                Available Packages
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Package</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Version</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sdkPackages.map((pkg, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 px-4">
                          <code className="text-primary-400 font-mono">{pkg.name}</code>
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-medium">{pkg.version}</span>
                        </td>
                        <td className="py-3 px-4 text-gray-300">{pkg.desc}</td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 inline-flex items-center cursor-pointer relative z-10"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(pkg.url, '_blank');
                            }}
                          >
                            npm <ExternalLink className="ml-1" size={12} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Install Command */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Terminal className="mr-3 text-primary-400" size={24} />
                  Installation
                </h3>
              </div>
              <div className="bg-gray-950/80 rounded-lg p-4 border border-gray-700 flex items-center justify-between">
                <code className="text-green-400 font-mono text-sm">{sdkInstallCommand}</code>
                <button
                  onClick={() => handleCopySDK(sdkInstallCommand, "Install command copied!")}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded"
                >
                  <Copy size={18} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Package size={16} className="text-primary-400" />
                  2 Packages
                </span>
                <span className="flex items-center gap-2">
                  <Code size={16} className="text-green-400" />
                  Ethers.js Support
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  TypeScript Ready
                </span>
              </div>
            </div>

            {/* Usage Example */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Code className="mr-3 text-primary-400" size={24} />
                  Quick Start Example
                </h3>
                <button
                  onClick={() => handleCopySDK(sdkUsageCode, "Code example copied!")}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded flex items-center gap-2 text-sm"
                >
                  <Copy size={16} />
                  Copy
                </button>
              </div>
              <div className="bg-gray-950/80 rounded-lg p-6 border border-gray-700 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-green-400 font-mono whitespace-pre">{sdkUsageCode}</code>
                </pre>
              </div>
            </div>

            {/* SDK Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="card p-5 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">POSClient</h4>
                <p className="text-gray-400 text-sm">Bridge assets between Polygon L2 and Ramestta L3</p>
              </div>
              <div className="card p-5 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Ethers.js Plugin</h4>
                <p className="text-gray-400 text-sm">Native ethers.js integration with Web3ClientPlugin</p>
              </div>
              <div className="card p-5 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Network Constants</h4>
                <p className="text-gray-400 text-sm">Pre-configured network settings and contracts</p>
              </div>
              <div className="card p-5 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Full TypeScript</h4>
                <p className="text-gray-400 text-sm">Complete type definitions for better DX</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <a
                href="https://www.npmjs.com/package/@ramestta/sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <Package className="mr-2" size={20} />
                View Full Documentation
                <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Quick Start Guide</h2>
            <p className="text-xl text-gray-300">Follow these steps to deploy your first contract</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Tools */}
      <section className="section-padding bg-black">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Compatible With</h2>
            <p className="text-xl text-gray-300">Use your favorite development tools without any changes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compatibleTools.map((tool, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  <div className="flex items-center text-green-400">
                    <CheckCircle size={20} className="mr-1 icon-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                    <span className="text-sm font-medium">{tool.status}</span>
                  </div>
                </div>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-gray-950 text-white">
        <CubeBackground />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
            <p className="text-xl text-gray-300">Exciting developer tools and programs on the horizon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoon.map((item, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="text-white icon-bounce" size={20} style={{ animationDelay: `${index * 0.3}s` }} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Developer Resources</h2>
            <p className="text-xl text-gray-200 mb-8">Everything you need to build on Ramestta</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Book className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-200 mb-6">Comprehensive guides and API references</p>
              <Link
                to="/docs?page=welcome"
                className="btn-secondary"
              >
                Read Docs
              </Link>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Setup Guide</h3>
              <p className="text-gray-200 mb-6">Step-by-step development environment setup</p>
              <Link
                to="/docs?page=environment-setup"
                className="btn-secondary"
              >
                Setup Guide
              </Link>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Github className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">NPM SDKs</h3>
              <p className="text-gray-200 mb-6">Open-source SDKs and example projects</p>
              <a
                href="https://www.npmjs.com/~ramestta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View NPM <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopersPage;
