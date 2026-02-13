import{cU as e}from"./D5Je1u5Y.js";import{H as t,P as r,L as s,a,I as n,D as o,T as i}from"./D_XxTxHm.js";const d=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Development Setup"}),e.jsx(r,{children:"This guide will help you set up your development environment for building on Ramestta. Whether you're deploying smart contracts or building dApps, this setup will get you started."}),e.jsx(t,{level:2,children:"Prerequisites"}),e.jsx(s,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Node.js:"})," Version 18.x or higher (recommended: 20.x LTS)"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"npm or yarn:"})," Package manager for JavaScript"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Git:"})," Version control system"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Code Editor:"})," VS Code recommended with Solidity extension"]})]}),e.jsx(t,{level:2,children:"Install Node.js"}),e.jsx(a,{title:"Install Node.js via nvm (recommended)",language:"bash",code:`# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then install Node.js
nvm install 20
nvm use 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x`}),e.jsx(t,{level:2,children:"Project Setup"}),e.jsx(t,{level:3,children:"Option 1: Using Hardhat (Recommended)"}),e.jsx(a,{title:"Create Hardhat Project",language:"bash",code:`# Create project directory
mkdir my-ramestta-project
cd my-ramestta-project

# Initialize npm project
npm init -y

# Install Hardhat and dependencies
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Initialize Hardhat
npx hardhat init

# Select "Create a JavaScript project" or "Create a TypeScript project"`}),e.jsx(t,{level:3,children:"Hardhat Configuration"}),e.jsx(a,{title:"hardhat.config.js",language:"javascript",code:`require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    ramestta: {
      url: "https://blockchain.ramestta.com",
      chainId: 1370,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000, // 1 gwei
    },
    ramesttaTestnet: {
      url: "https://testnet.ramestta.com",
      chainId: 1371,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000,
    }
  },
  etherscan: {
    apiKey: {
      ramestta: process.env.RAMASCAN_API_KEY || "YOUR_API_KEY"
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
};`}),e.jsx(t,{level:3,children:"Environment Variables"}),e.jsx(a,{title:".env",language:"bash",code:`# Your wallet private key (never commit this!)
PRIVATE_KEY=your_private_key_here

# Optional: RamaScan API key for contract verification
RAMASCAN_API_KEY=your_api_key_here`}),e.jsxs(n,{type:"warning",title:"Security Warning",children:["Never commit your ",e.jsx("code",{children:".env"})," file to version control. Add it to your ",e.jsx("code",{children:".gitignore"})," file."]}),e.jsx(o,{}),e.jsx(t,{level:2,children:"Option 2: Using Foundry"}),e.jsx(a,{title:"Install Foundry",language:"bash",code:`# Install Foundry
curl -L https://foundry.paradigm.xyz | bash

# Restart terminal, then run
foundryup

# Create new project
forge init my-ramestta-project
cd my-ramestta-project`}),e.jsx(a,{title:"foundry.toml",language:"toml",code:`[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc = "0.8.20"
optimizer = true
optimizer_runs = 200

[rpc_endpoints]
ramestta = "https://blockchain.ramestta.com"
ramestta_testnet = "https://testnet.ramestta.com"

[etherscan]
ramestta = { key = "\${RAMASCAN_API_KEY}", url = "https://ramascan.com/api" }`}),e.jsx(o,{}),e.jsx(t,{level:2,children:"Install Ramestta SDK"}),e.jsx(a,{title:"Install SDK Packages",language:"bash",code:`# Core SDK with ethers.js support
npm install @ramestta/sdk @ramestta/sdk-ethers ethers

# Or with Web3.js support
npm install @ramestta/sdk @ramestta/sdk-web3 web3

# Contract ABIs and addresses
npm install @ramestta/contracts

# Optional: Staking and Bridge SDKs
npm install @ramestta/staking-sdk @ramestta/bridge-sdk`}),e.jsx(t,{level:2,children:"Wallet Setup"}),e.jsx(t,{level:3,children:"MetaMask Configuration"}),e.jsx(i,{headers:["Parameter","Mainnet","Testnet"],rows:[["Network Name","Ramestta Mainnet","Pingaksha Testnet"],["RPC URL","https://blockchain.ramestta.com","https://testnet.ramestta.com"],["Chain ID","1370","1371"],["Symbol","RAMA","RAMA"],["Explorer","https://ramascan.com","https://pingaksha.ramascan.com"],["API","https://ramascan.com/api","https://testbackendapi.ramascan.com"],["Faucet","N/A","https://testnet-faucet.ramascan.com"]]}),e.jsx(a,{title:"Add Network Programmatically",language:"javascript",code:`// Add Ramestta to MetaMask
async function addRamesttaNetwork() {
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x55a', // 1370 in hex
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
    console.log('Ramestta network added!');
  } catch (error) {
    console.error('Failed to add network:', error);
  }
}`}),e.jsx(t,{level:2,children:"Getting Test Tokens"}),e.jsx(r,{children:"For testnet development, you'll need test RAMA tokens:"}),e.jsx(s,{ordered:!0,items:["Visit the Ramestta Faucet at https://testnet-faucet.ramascan.com","Connect your wallet or enter your address","Request test tokens (limited per 24 hours)","Wait for the transaction to confirm"]}),e.jsx(t,{level:2,children:"Verify Setup"}),e.jsx(a,{title:"Test Connection",language:"javascript",code:`const { ethers } = require('ethers');

async function testConnection() {
  const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');
  
  const network = await provider.getNetwork();
  console.log('Network:', network.name);
  console.log('Chain ID:', network.chainId);
  
  const blockNumber = await provider.getBlockNumber();
  console.log('Latest Block:', blockNumber);
  
  const gasPrice = await provider.getFeeData();
  console.log('Gas Price:', ethers.formatUnits(gasPrice.gasPrice, 'gwei'), 'gwei');
}

testConnection();`}),e.jsxs(n,{type:"success",title:"Next Steps",children:["Your development environment is ready! Continue to the ",e.jsx("a",{href:"/docs?page=hardhat-guide",className:"text-primary-400 hover:underline",children:"Hardhat Guide"})," to deploy your first smart contract, or check out the ",e.jsx("a",{href:"/docs?page=sdk-overview",className:"text-primary-400 hover:underline",children:"SDK documentation"}),"."]})]});export{d as default};
