import{cU as e}from"./Cr10QW3C.js";import{H as t,B as o,P as n,I as a,T as s,C as r,D as i,G as c,a as l,L as d}from"./ASX-TiYY.js";const u=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Ramestta Testnet"}),e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(o,{variant:"warning",children:"Testing"}),e.jsx(o,{variant:"secondary",children:"Chain ID: 1371"})]}),e.jsx(n,{children:"Ramestta Testnet is the testing environment where developers can deploy and test smart contracts without using real assets. Test RAMA tokens have no real value and can be obtained for free from the faucet."}),e.jsx(a,{type:"info",title:"Test Environment",children:"Use testnet for all development and testing. Test tokens are free and the network may be reset periodically. Never rely on testnet for storing valuable data."}),e.jsx(t,{level:2,children:"Network Configuration"}),e.jsx(s,{headers:["Parameter","Value"],rows:[["Network Name","Ramestta Testnet (Pingaksha)"],["Chain ID","1371"],["Chain ID (Hex)","0x55b"],["Currency Symbol","RAMA"],["Currency Decimals","18"],["Block Time","~2 seconds"],["Consensus","Heimdall (PoS) + Bor (EVM)"],["Parent Chain","Polygon Amoy (Chain ID: 80002)"]]}),e.jsx(t,{level:2,children:"RPC Endpoints"}),e.jsx(s,{headers:["Type","URL"],rows:[["HTTP","https://testnet.ramestta.com"],["WebSocket","wss://testnet-ws.ramestta.com"]]}),e.jsx(t,{level:2,children:"Block Explorer"}),e.jsxs(r,{icon:"🔍",title:"Testnet RamaScan",children:[e.jsx("p",{className:"text-gray-400 text-sm mt-2 mb-3",children:"Block explorer for Pingaksha Testnet"}),e.jsx("a",{href:"https://testnet-ramascan.ramestta.com",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline text-sm",children:"https://testnet-ramascan.ramestta.com →"})]}),e.jsx(i,{}),e.jsx(t,{level:2,children:"Get Test Tokens"}),e.jsx(n,{children:"Get free test RAMA tokens from the official faucet:"}),e.jsxs(c,{cols:2,children:[e.jsxs(r,{icon:"🚰",title:"Official Faucet",children:[e.jsx("p",{className:"text-gray-400 text-sm mt-2 mb-3",children:"Request test RAMA tokens every 24 hours"}),e.jsx("a",{href:"https://faucet.ramestta.com",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline text-sm",children:"https://faucet.ramestta.com →"})]}),e.jsx(r,{icon:"📝",title:"How to Use",children:e.jsxs("ul",{className:"text-gray-400 text-sm mt-2 space-y-1",children:[e.jsx("li",{children:"1. Connect your wallet"}),e.jsx("li",{children:"2. Enter your address"}),e.jsx("li",{children:"3. Complete captcha"}),e.jsx("li",{children:'4. Click "Request Tokens"'})]})})]}),e.jsx(a,{type:"warning",title:"Faucet Limits",children:"The faucet has a cooldown period of 24 hours per address. If you need more test tokens for extensive testing, contact the team on Discord."}),e.jsx(t,{level:2,children:"Connect to Testnet"}),e.jsx(t,{level:3,children:"Add to MetaMask"}),e.jsx(l,{code:`// Add Ramestta Testnet to MetaMask programmatically
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x55b', // 1371 in hexadecimal
    chainName: 'Ramestta Testnet',
    rpcUrls: ['https://testnet.ramestta.com'],
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.ramascan.com']
  }]
});`,language:"typescript",title:"Add Testnet"}),e.jsx(t,{level:3,children:"Verify Connection"}),e.jsx(l,{code:`import { ethers } from 'ethers';

// Connect to Ramestta Testnet
const provider = new ethers.JsonRpcProvider('https://testnet.ramestta.com');

// Verify you're on testnet
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId); // 1371n

// IMPORTANT: Always verify chain ID in production
if (network.chainId !== 1371n) {
  throw new Error('Not connected to Ramestta Testnet!');
}`,language:"typescript",title:"verify-testnet.ts"}),e.jsx(i,{}),e.jsx(t,{level:2,children:"Testnet vs Mainnet"}),e.jsx(s,{headers:["Feature","Testnet","Mainnet"],rows:[["Chain ID","21191","21190"],["Token Value","No value","Real value"],["Faucet","Available","N/A"],["Block Explorer","testnet-ramascan.ramestta.com","ramascan.com"],["Use Case","Development & Testing","Production"],["Network Stability","May be reset","Permanent"]]}),e.jsx(t,{level:2,children:"Development Workflow"}),e.jsx(d,{ordered:!0,items:["Get test RAMA from the faucet","Deploy your contracts to testnet","Test all functionality thoroughly","Verify contracts on testnet explorer","Get a security audit (recommended)","Deploy to mainnet when ready"]}),e.jsx(t,{level:2,children:"Testnet Contracts"}),e.jsx(n,{children:"Test versions of core contracts are deployed on Pingaksha Testnet:"}),e.jsx(s,{headers:["Contract","Address"],rows:[["RAMA Token","0x0000000000000000000000000000000000001010"],["WRAMA (Wrapped)","0x...testnet address"],["Test Staking","0x...testnet address"]]}),e.jsx(a,{type:"success",title:"Ready to Test?",children:"Get some test tokens from the faucet and start building! When your application is thoroughly tested, you can deploy to mainnet with confidence."})]});export{u as default};
