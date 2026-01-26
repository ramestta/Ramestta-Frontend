import{cU as e}from"./Cr10QW3C.js";import{H as t,P as s,I as n,b as o,a,D as r,L as c}from"./ASX-TiYY.js";const w=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Quick Start Guide"}),e.jsx(s,{children:"Get up and running with Ramestta in under 5 minutes. This guide covers everything from installation to deploying your first smart contract."}),e.jsxs(n,{type:"info",title:"Prerequisites",children:["Before starting, ensure you have:",e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Node.js v18+ installed"}),e.jsx("li",{children:"A web3 wallet (MetaMask, RamaPay, etc.)"}),e.jsx("li",{children:"Basic knowledge of JavaScript/TypeScript"})]})]}),e.jsx(t,{level:2,children:"Step 1: Install the SDK"}),e.jsx(s,{children:"Install the Ramestta SDK and your preferred web3 library plugin:"}),e.jsx(o,{tabs:[{label:"npm",content:e.jsx(a,{code:"npm install @ramestta/sdk @ramestta/sdk-ethers ethers",language:"bash"})},{label:"yarn",content:e.jsx(a,{code:"yarn add @ramestta/sdk @ramestta/sdk-ethers ethers",language:"bash"})},{label:"pnpm",content:e.jsx(a,{code:"pnpm add @ramestta/sdk @ramestta/sdk-ethers ethers",language:"bash"})}]}),e.jsx(t,{level:2,children:"Step 2: Connect to Ramestta"}),e.jsx(s,{children:"Initialize the SDK and connect to the Ramestta network:"}),e.jsx(a,{code:`import { RamaPay } from '@ramestta/sdk';
import { EthersPlugin } from '@ramestta/sdk-ethers';
import { ethers } from 'ethers';

// Initialize SDK with ethers.js plugin
const ramaPay = new RamaPay({
  plugins: [new EthersPlugin()]
});

// Connect to Ramestta Mainnet
const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

// Check connection
const blockNumber = await provider.getBlockNumber();
console.log('Connected! Current block:', blockNumber);`,language:"typescript",title:"connect.ts"}),e.jsx(t,{level:2,children:"Step 3: Connect User Wallet"}),e.jsx(s,{children:"Connect to the user's MetaMask or other web3 wallet and switch to Ramestta network:"}),e.jsx(a,{code:`// Connect to user's wallet
const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    
    // Switch to Ramestta Network
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x55a' }], // 1370 in hex
      });
    } catch (switchError: any) {
      // Chain not added, add it
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x55a',
            chainName: 'Ramestta Mainnet',
            rpcUrls: ['https://blockchain.ramestta.com'],
            nativeCurrency: {
              name: 'RAMA',
              symbol: 'RAMA',
              decimals: 18
            },
            blockExplorerUrls: ['https://ramascan.com']
          }]
        });
      }
    }
    
    console.log('Connected:', accounts[0]);
    return accounts[0];
  }
  throw new Error('MetaMask not installed');
};`,language:"typescript",title:"wallet.ts"}),e.jsx(n,{type:"success",title:"Network Added Automatically",children:"The code above automatically adds Ramestta network to the user's wallet if it's not already configured. Users don't need to manually add network details!"}),e.jsx(t,{level:2,children:"Step 4: Send Your First Transaction"}),e.jsx(s,{children:"Send RAMA tokens from one address to another:"}),e.jsx(a,{code:`import { ethers } from 'ethers';

// Send RAMA tokens
const sendTransaction = async (to: string, amount: string) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const tx = await signer.sendTransaction({
    to: to,
    value: ethers.parseEther(amount)
  });
  
  console.log('Transaction hash:', tx.hash);
  
  // Wait for confirmation
  const receipt = await tx.wait();
  console.log('Confirmed in block:', receipt.blockNumber);
  
  return receipt;
};

// Example: Send 1 RAMA
await sendTransaction('0x742d35Cc6634C0532925a3b844Bc9e7595f...', '1.0');`,language:"typescript",title:"transfer.ts"}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Deploy a Smart Contract"}),e.jsx(s,{children:"Create and deploy a simple smart contract to Ramestta:"}),e.jsx(t,{level:3,children:"Write the Contract"}),e.jsx(a,{code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HelloRamestta {
    string public message;
    address public owner;
    
    event MessageChanged(string newMessage, address changedBy);
    
    constructor() {
        message = "Hello, Ramestta!";
        owner = msg.sender;
    }
    
    function setMessage(string calldata _newMessage) external {
        message = _newMessage;
        emit MessageChanged(_newMessage, msg.sender);
    }
    
    function getBlockInfo() external view returns (uint256 blockNum, uint256 timestamp) {
        return (block.number, block.timestamp);
    }
}`,language:"solidity",title:"HelloRamestta.sol"}),e.jsx(t,{level:3,children:"Deploy with ethers.js"}),e.jsx(a,{code:`import { ethers } from 'ethers';

// Contract ABI and Bytecode (from compilation)
const abi = [...]; // Your contract ABI
const bytecode = '0x...'; // Your contract bytecode

async function deployContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  // Create contract factory
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  
  // Deploy
  console.log('Deploying contract...');
  const contract = await factory.deploy();
  
  // Wait for deployment
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  
  console.log('Contract deployed to:', address);
  console.log('View on RamaScan:', \`https://ramascan.com/address/\${address}\`);
  
  return contract;
}`,language:"typescript",title:"deploy.ts"}),e.jsx(t,{level:3,children:"Using Hardhat"}),e.jsx(s,{children:"For more complex projects, use Hardhat with Ramestta network configuration:"}),e.jsx(a,{code:`// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    ramestta: {
      url: "https://blockchain.ramestta.com",
      chainId: 1370,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000, // 1 gwei
    },
    ramestatestnet: {
      url: "https://testnet.ramestta.com",
      chainId: 1371,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    }
  },
  etherscan: {
    apiKey: {
      ramestta: "YOUR_RAMASCAN_API_KEY"
    },
    customChains: [{
      network: "ramestta",
      chainId: 1370,
      urls: {
        apiURL: "https://ramascan.com/api",
        browserURL: "https://ramascan.com"
      }
    }]
  }
};`,language:"javascript",title:"hardhat.config.js"}),e.jsx(s,{children:"Deploy with Hardhat:"}),e.jsx(a,{code:"npx hardhat run scripts/deploy.js --network ramestta",language:"bash"}),e.jsx(r,{}),e.jsx(t,{level:2,children:"What's Next?"}),e.jsx(s,{children:"Now that you've deployed your first contract, explore more advanced topics:"}),e.jsx(c,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Network Configuration:"})," Learn about Mainnet and Testnet settings"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"SDK Documentation:"})," Deep dive into SDK features and plugins"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Bridge Assets:"})," Transfer tokens between Polygon and Ramestta"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Become a Validator:"})," Run a node and earn staking rewards"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"API Reference:"})," Explore all available RPC methods"]})]}),e.jsx(n,{type:"warning",title:"Security Reminder",children:"Never commit private keys to version control. Use environment variables and .env files (added to .gitignore) to manage sensitive credentials."})]});export{w as default};
