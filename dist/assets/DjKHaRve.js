import{cU as e}from"./voBiVbVd.js";import{H as t,B as o,P as s,I as r,T as n,G as c,a,D as l,C as i,L as d}from"./DUcENubi.js";const u=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Ramestta Mainnet"}),e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(o,{variant:"success",children:"Production"}),e.jsx(o,{variant:"primary",children:"Chain ID: 21190"})]}),e.jsx(s,{children:"Ramestta Mainnet is the production blockchain network for deploying production-ready applications. It uses real RAMA tokens and all transactions are permanent and irreversible."}),e.jsx(r,{type:"warning",title:"Production Environment",children:"Mainnet uses real assets with real value. Always test thoroughly on testnet before deploying to mainnet. Ensure your smart contracts have been audited for security."}),e.jsx(t,{level:2,children:"Network Configuration"}),e.jsx(n,{headers:["Parameter","Value"],rows:[["Network Name","Ramestta Mainnet"],["Chain ID","21190"],["Chain ID (Hex)","0x52c6"],["Currency Symbol","RAMA"],["Currency Decimals","18"],["Block Time","~2 seconds"],["Consensus","Proof-of-Stake (PoS)"],["EVM Version","London"]]}),e.jsx(t,{level:2,children:"RPC Endpoints"}),e.jsx(t,{level:3,children:"HTTP Endpoints"}),e.jsx(n,{headers:["Provider","URL","Rate Limit"],rows:[["Official","https://blockchain.ramestta.com","Unlimited"],["Backup 1","https://rpc2.ramestta.com","Unlimited"],["Backup 2","https://rpc3.ramestta.com","Unlimited"]]}),e.jsx(t,{level:3,children:"WebSocket Endpoints"}),e.jsx(n,{headers:["Provider","URL","Use Case"],rows:[["Official","wss://ws.ramestta.com","Real-time subscriptions"]]}),e.jsx(r,{type:"info",title:"High Availability",children:"For production applications, implement fallback logic to switch between RPC endpoints if one becomes unavailable. This ensures your dApp remains functional."}),e.jsx(t,{level:2,children:"Block Explorer"}),e.jsxs(c,{cols:2,children:[e.jsxs(a,{icon:"🔍",title:"RamaScan",children:[e.jsx("p",{className:"text-gray-400 text-sm mt-2 mb-3",children:"Official block explorer for Ramestta Mainnet"}),e.jsx("a",{href:"https://ramascan.com",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline text-sm",children:"https://ramascan.com →"})]}),e.jsx(a,{icon:"📊",title:"Explorer Features",children:e.jsxs("ul",{className:"text-gray-400 text-sm mt-2 space-y-1",children:[e.jsx("li",{children:"• Transaction tracking"}),e.jsx("li",{children:"• Contract verification"}),e.jsx("li",{children:"• Token transfers"}),e.jsx("li",{children:"• API access"})]})})]}),e.jsx(l,{}),e.jsx(t,{level:2,children:"Connect to Mainnet"}),e.jsx(t,{level:3,children:"Add to MetaMask"}),e.jsx(i,{code:`// Add Ramestta Mainnet to MetaMask programmatically
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x52c6', // 21190 in hexadecimal
    chainName: 'Ramestta Mainnet',
    rpcUrls: ['https://blockchain.ramestta.com'],
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    blockExplorerUrls: ['https://ramascan.com']
  }]
});`,language:"typescript",title:"Add Network"}),e.jsx(s,{children:"Or add manually in MetaMask:"}),e.jsx(d,{ordered:!0,items:["Open MetaMask and click on the network dropdown",'Select "Add Network" → "Add a network manually"',"Enter the network details from the table above",'Click "Save" to add the network']}),e.jsx(t,{level:3,children:"Connect with ethers.js"}),e.jsx(i,{code:`import { ethers } from 'ethers';

// Connect to Ramestta Mainnet
const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');

// Or with WebSocket for real-time updates
const wsProvider = new ethers.WebSocketProvider('wss://ws.ramestta.com');

// Verify connection
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId); // 21190n`,language:"typescript",title:"ethers.js"}),e.jsx(t,{level:3,children:"Connect with Web3.js"}),e.jsx(i,{code:`import Web3 from 'web3';

// Connect to Ramestta Mainnet
const web3 = new Web3('https://blockchain.ramestta.com');

// Verify connection
const chainId = await web3.eth.getChainId();
console.log('Chain ID:', chainId); // 21190n`,language:"typescript",title:"web3.js"}),e.jsx(l,{}),e.jsx(t,{level:2,children:"Core Smart Contracts"}),e.jsx(s,{children:"Key contract addresses deployed on Ramestta Mainnet:"}),e.jsx(n,{headers:["Contract","Address"],rows:[["RAMA Token","0x0000000000000000000000000000000000001010"],["WRAMA (Wrapped)","0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee"],["Staking Manager","0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908"],["Root Chain","0x28e4F3a7f651294B9564800b2D01f35189A5bFbE"]]}),e.jsx(r,{type:"success",title:"Contract Verification",children:"All official contracts are verified and open source on RamaScan. You can view the source code and interact with them directly through the explorer."}),e.jsx(t,{level:2,children:"Getting RAMA"}),e.jsxs(c,{cols:2,children:[e.jsx(a,{icon:"💱",title:"Exchanges",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Purchase RAMA on supported cryptocurrency exchanges"})}),e.jsx(a,{icon:"🌉",title:"Bridge",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Bridge assets from Polygon using RamaBridge"})})]}),e.jsx(t,{level:2,children:"Best Practices"}),e.jsx(d,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Test First:"})," Always deploy and test on Pingaksha Testnet before mainnet"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Security Audits:"})," Get your contracts audited before mainnet deployment"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Gas Estimation:"})," Use proper gas estimation to avoid failed transactions"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Monitoring:"})," Set up transaction monitoring and alerting"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Backup RPC:"})," Implement fallback RPC endpoints for reliability"]})]})]});export{u as default};
