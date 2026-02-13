import{cU as e}from"./RZk19cD8.js";import{H as t,B as n,P as r,I as i,T as o,b as c,a as s,D as d,G as l,C as a,L as m}from"./D1yRkveG.js";const j=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"SDK Overview"}),e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(n,{variant:"success",children:"Stable"}),e.jsx(n,{variant:"primary",children:"TypeScript"}),e.jsx(n,{variant:"secondary",children:"Tree-shakable"})]}),e.jsx(r,{children:"The Ramestta SDK is a modular TypeScript library for building applications on the Ramestta network. It provides a clean, intuitive API for common blockchain operations with optional plugins for popular web3 libraries."}),e.jsx(i,{type:"info",title:"Design Philosophy",children:"The SDK follows a plugin architecture - install only what you need. The core package is lightweight (~20KB gzipped), with optional plugins for ethers.js and web3.js integration."}),e.jsx(t,{level:2,children:"Available Packages"}),e.jsx(o,{headers:["Package","Version","Description","Size"],rows:[["@ramestta/sdk","1.0.0","Core SDK with essential features","~20KB"],["@ramestta/sdk-ethers","1.0.3","ethers.js v6 integration plugin","~8KB"],["@ramestta/sdk-web3","1.0.0","web3.js v4 integration plugin","~8KB"],["@ramestta/sdk-react","1.0.0","React hooks & components","~15KB"],["@ramestta/contracts","1.1.0","Smart contract ABIs & addresses","~12KB"],["@ramestta/staking-sdk","1.0.1","Staking operations SDK","~18KB"],["@ramestta/bridge-sdk","1.0.1","Cross-chain bridge SDK","~22KB"]]}),e.jsxs(i,{type:"success",title:"npm Organization",children:["All packages are published under the ",e.jsx("code",{children:"@ramestta"})," organization. View all packages at"," ",e.jsx("a",{href:"https://www.npmjs.com/org/ramestta",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"npmjs.com/org/ramestta"})]}),e.jsx(t,{level:2,children:"Quick Start"}),e.jsx(t,{level:3,children:"Installation"}),e.jsx(c,{tabs:[{label:"Core Only",content:e.jsx(s,{code:"npm install @ramestta/sdk",language:"bash"})},{label:"With ethers.js",content:e.jsx(s,{code:"npm install @ramestta/sdk @ramestta/sdk-ethers ethers",language:"bash"})},{label:"With web3.js",content:e.jsx(s,{code:"npm install @ramestta/sdk @ramestta/sdk-web3 web3",language:"bash"})},{label:"Install All",content:e.jsx(s,{code:"npm install @ramestta/sdk @ramestta/sdk-ethers @ramestta/sdk-web3 @ramestta/sdk-react @ramestta/contracts @ramestta/staking-sdk @ramestta/bridge-sdk",language:"bash"})}]}),e.jsx(t,{level:3,children:"Basic Usage"}),e.jsx(s,{code:`import { RamaPay } from '@ramestta/sdk';

// Initialize SDK
const ramaPay = new RamaPay({
  network: 'mainnet', // or 'testnet'
});

// Get provider
const provider = ramaPay.getProvider();

// Check balance
const balance = await ramaPay.getBalance('0x742d35Cc...');
console.log('Balance:', balance.formatted, 'RAMA');`,language:"typescript",title:"basic-usage.ts"}),e.jsx(t,{level:3,children:"With ethers.js Plugin"}),e.jsx(s,{code:`import { RamaPay } from '@ramestta/sdk';
import { EthersPlugin } from '@ramestta/sdk-ethers';
import { ethers } from 'ethers';

// Initialize with ethers.js plugin
const ramaPay = new RamaPay({
  network: 'mainnet',
  plugins: [new EthersPlugin()]
});

// Access ethers provider
const provider = ramaPay.ethers.provider;
const signer = ramaPay.ethers.signer;

// Use ethers.js features
const contract = new ethers.Contract(address, abi, signer);`,language:"typescript",title:"with-ethers.ts"}),e.jsx(t,{level:3,children:"With web3.js Plugin"}),e.jsx(s,{code:`import { RamaPay } from '@ramestta/sdk';
import { Web3Plugin } from '@ramestta/sdk-web3';
import Web3 from 'web3';

// Initialize with web3.js plugin
const ramaPay = new RamaPay({
  network: 'mainnet',
  plugins: [new Web3Plugin()]
});

// Access web3 instance
const web3 = ramaPay.web3.instance;

// Use web3.js features
const contract = new web3.eth.Contract(abi, address);`,language:"typescript",title:"with-web3.ts"}),e.jsx(d,{}),e.jsx(t,{level:2,children:"Core Features"}),e.jsxs(l,{cols:2,children:[e.jsx(a,{icon:"🔗",title:"Network Connection",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Easy connection to mainnet and testnet with automatic RPC failover"})}),e.jsx(a,{icon:"💰",title:"Balance & Transfers",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Query balances and send transactions with a simple API"})}),e.jsx(a,{icon:"📜",title:"Contract Interaction",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Deploy and interact with smart contracts easily"})}),e.jsx(a,{icon:"🔐",title:"Wallet Integration",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Connect to MetaMask, RamaPay, and other wallets"})}),e.jsx(a,{icon:"🌉",title:"Bridge Support",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Built-in support for RamaBridge operations"})}),e.jsx(a,{icon:"📊",title:"Utilities",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Format conversions, gas estimation, and more"})})]}),e.jsx(t,{level:2,children:"Plugin System"}),e.jsx(r,{children:"The SDK uses a plugin system to extend functionality. Plugins are loaded at initialization and can add new features or integrate with external libraries."}),e.jsx(t,{level:3,children:"Built-in Plugins"}),e.jsx(o,{headers:["Plugin","Package","Features"],rows:[["EthersPlugin","@ramestta/sdk-ethers","ethers.js provider, signers, contracts"],["Web3Plugin","@ramestta/sdk-web3","web3.js instance, accounts, contracts"]]}),e.jsx(i,{type:"success",title:"Choose Your Library",children:"Use the plugin that matches your preferred web3 library. Both plugins provide full access to the underlying library while maintaining SDK conventions."}),e.jsx(t,{level:2,children:"TypeScript Support"}),e.jsx(r,{children:"The SDK is written in TypeScript and provides complete type definitions. This enables excellent IDE support with autocomplete, type checking, and documentation."}),e.jsx(m,{items:["Full type definitions for all APIs","Generic types for custom contract ABIs","Strict null checks and error handling","IntelliSense support in VS Code"]}),e.jsx(t,{level:2,children:"Browser & Node.js Support"}),e.jsx(o,{headers:["Environment","Support","Notes"],rows:[["Node.js","✅ v18+","Full support"],["Browser","✅ Modern","ES2020+ required"],["React Native","✅","With polyfills"],["Electron","✅","Full support"]]}),e.jsx(t,{level:2,children:"Error Handling"}),e.jsx(r,{children:"The SDK provides typed errors for common failure scenarios:"}),e.jsx(s,{code:`import { RamaPay, RamaError, NetworkError, InsufficientFundsError } from '@ramestta/sdk';

try {
  await ramaPay.sendTransaction({...});
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.log('Not enough RAMA for transaction');
  } else if (error instanceof NetworkError) {
    console.log('Network connection failed');
  } else if (error instanceof RamaError) {
    console.log('SDK error:', error.message);
  }
}`,language:"typescript",title:"error-handling.ts"}),e.jsx(t,{level:2,children:"Resources"}),e.jsxs(l,{cols:2,children:[e.jsx(a,{icon:"📦",title:"npm",children:e.jsx("a",{href:"https://www.npmjs.com/package/@ramestta/sdk",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline text-sm",children:"@ramestta/sdk →"})}),e.jsx(a,{icon:"🐙",title:"GitHub",children:e.jsx("a",{href:"https://github.com/AamirAlam/ramestta-sdk",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline text-sm",children:"View source code →"})})]})]});export{j as default};
