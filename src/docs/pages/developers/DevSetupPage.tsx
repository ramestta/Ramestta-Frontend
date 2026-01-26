import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge } from '../../components/DocsComponents';

const DevSetupPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Development Setup</Heading>
      
      <Paragraph>
        This guide will help you set up your development environment for building on Ramestta. 
        Whether you're deploying smart contracts or building dApps, this setup will get you started.
      </Paragraph>

      <Heading level={2}>Prerequisites</Heading>

      <List
        items={[
          <><strong>Node.js:</strong> Version 18.x or higher (recommended: 20.x LTS)</>,
          <><strong>npm or yarn:</strong> Package manager for JavaScript</>,
          <><strong>Git:</strong> Version control system</>,
          <><strong>Code Editor:</strong> VS Code recommended with Solidity extension</>
        ]}
      />

      <Heading level={2}>Install Node.js</Heading>

      <CodeBlock
        title="Install Node.js via nvm (recommended)"
        language="bash"
        code={`# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then install Node.js
nvm install 20
nvm use 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x`}
      />

      <Heading level={2}>Project Setup</Heading>

      <Heading level={3}>Option 1: Using Hardhat (Recommended)</Heading>

      <CodeBlock
        title="Create Hardhat Project"
        language="bash"
        code={`# Create project directory
mkdir my-ramestta-project
cd my-ramestta-project

# Initialize npm project
npm init -y

# Install Hardhat and dependencies
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Initialize Hardhat
npx hardhat init

# Select "Create a JavaScript project" or "Create a TypeScript project"`}
      />

      <Heading level={3}>Hardhat Configuration</Heading>

      <CodeBlock
        title="hardhat.config.js"
        language="javascript"
        code={`require("@nomicfoundation/hardhat-toolbox");
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
};`}
      />

      <Heading level={3}>Environment Variables</Heading>

      <CodeBlock
        title=".env"
        language="bash"
        code={`# Your wallet private key (never commit this!)
PRIVATE_KEY=your_private_key_here

# Optional: RamaScan API key for contract verification
RAMASCAN_API_KEY=your_api_key_here`}
      />

      <InfoBox type="warning" title="Security Warning">
        Never commit your <code>.env</code> file to version control. Add it to your <code>.gitignore</code> file.
      </InfoBox>

      <Divider />

      <Heading level={2}>Option 2: Using Foundry</Heading>

      <CodeBlock
        title="Install Foundry"
        language="bash"
        code={`# Install Foundry
curl -L https://foundry.paradigm.xyz | bash

# Restart terminal, then run
foundryup

# Create new project
forge init my-ramestta-project
cd my-ramestta-project`}
      />

      <CodeBlock
        title="foundry.toml"
        language="toml"
        code={`[profile.default]
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
ramestta = { key = "\${RAMASCAN_API_KEY}", url = "https://ramascan.com/api" }`}
      />

      <Divider />

      <Heading level={2}>Install Ramestta SDK</Heading>

      <CodeBlock
        title="Install SDK Packages"
        language="bash"
        code={`# Core SDK with ethers.js support
npm install @ramestta/sdk @ramestta/sdk-ethers ethers

# Or with Web3.js support
npm install @ramestta/sdk @ramestta/sdk-web3 web3

# Contract ABIs and addresses
npm install @ramestta/contracts

# Optional: Staking and Bridge SDKs
npm install @ramestta/staking-sdk @ramestta/bridge-sdk`}
      />

      <Heading level={2}>Wallet Setup</Heading>

      <Heading level={3}>MetaMask Configuration</Heading>

      <Table
        headers={['Parameter', 'Mainnet', 'Testnet']}
        rows={[
          ['Network Name', 'Ramestta Mainnet', 'Ramestta Testnet'],
          ['RPC URL', 'https://blockchain.ramestta.com', 'https://testnet.ramestta.com'],
          ['Chain ID', '1370', '1371'],
          ['Symbol', 'RAMA', 'RAMA'],
          ['Explorer', 'https://ramascan.com', 'https://testnet.ramascan.com']
        ]}
      />

      <CodeBlock
        title="Add Network Programmatically"
        language="javascript"
        code={`// Add Ramestta to MetaMask
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
}`}
      />

      <Heading level={2}>Getting Test Tokens</Heading>

      <Paragraph>
        For testnet development, you'll need test RAMA tokens:
      </Paragraph>

      <List
        ordered
        items={[
          'Visit the Ramestta Faucet at https://faucet.ramestta.com',
          'Connect your wallet or enter your address',
          'Request test tokens (limited per 24 hours)',
          'Wait for the transaction to confirm'
        ]}
      />

      <Heading level={2}>Verify Setup</Heading>

      <CodeBlock
        title="Test Connection"
        language="javascript"
        code={`const { ethers } = require('ethers');

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

testConnection();`}
      />

      <InfoBox type="success" title="Next Steps">
        Your development environment is ready! Continue to the <a href="/docs?page=hardhat-guide" className="text-primary-400 hover:underline">Hardhat Guide</a> to 
        deploy your first smart contract, or check out the <a href="/docs?page=sdk-overview" className="text-primary-400 hover:underline">SDK documentation</a>.
      </InfoBox>
    </div>
  );
};

export default DevSetupPage;
