import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, List, Tabs, Divider } from '../../components/DocsComponents';

const QuickStartPage: React.FC = () => {
  const installCode = `npm install @ramestta/sdk @ramestta/sdk-ethers ethers`;

  const connectCode = `import { RamaPay } from '@ramestta/sdk';
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
console.log('Connected! Current block:', blockNumber);`;

  const walletCode = `// Connect to user's wallet
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
};`;

  const transferCode = `import { ethers } from 'ethers';

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
await sendTransaction('0x742d35Cc6634C0532925a3b844Bc9e7595f...', '1.0');`;

  const contractCode = `// SPDX-License-Identifier: MIT
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
}`;

  const deployCode = `import { ethers } from 'ethers';

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
}`;

  const hardhatConfig = `// hardhat.config.js
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
    customChains: [
      {
        network: "ramestta",
        chainId: 1370,
        urls: {
          apiURL: "https://ramascan.com/api",
          browserURL: "https://ramascan.com"
        }
      },
      {
        network: "ramestatestnet",
        chainId: 1371,
        urls: {
          apiURL: "https://testbackendapi.ramascan.com",
          browserURL: "https://pingaksha.ramascan.com"
        }
      }
    ]
  }
};`;

  return (
    <div>
      <Heading level={1}>Quick Start Guide</Heading>
      
      <Paragraph>
        Get up and running with Ramestta in under 5 minutes. This guide covers everything 
        from installation to deploying your first smart contract.
      </Paragraph>

      <InfoBox type="info" title="Prerequisites">
        Before starting, ensure you have:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Node.js v18+ installed</li>
          <li>A web3 wallet (MetaMask, RamaPay, etc.)</li>
          <li>Basic knowledge of JavaScript/TypeScript</li>
        </ul>
      </InfoBox>

      <Heading level={2}>Step 1: Install the SDK</Heading>

      <Paragraph>
        Install the Ramestta SDK and your preferred web3 library plugin:
      </Paragraph>

      <Tabs
        tabs={[
          {
            label: 'npm',
            content: <CodeBlock code="npm install @ramestta/sdk @ramestta/sdk-ethers ethers" language="bash" />
          },
          {
            label: 'yarn',
            content: <CodeBlock code="yarn add @ramestta/sdk @ramestta/sdk-ethers ethers" language="bash" />
          },
          {
            label: 'pnpm',
            content: <CodeBlock code="pnpm add @ramestta/sdk @ramestta/sdk-ethers ethers" language="bash" />
          }
        ]}
      />

      <Heading level={2}>Step 2: Connect to Ramestta</Heading>

      <Paragraph>
        Initialize the SDK and connect to the Ramestta network:
      </Paragraph>

      <CodeBlock code={connectCode} language="typescript" title="connect.ts" />

      <Heading level={2}>Step 3: Connect User Wallet</Heading>

      <Paragraph>
        Connect to the user's MetaMask or other web3 wallet and switch to Ramestta network:
      </Paragraph>

      <CodeBlock code={walletCode} language="typescript" title="wallet.ts" />

      <InfoBox type="success" title="Network Added Automatically">
        The code above automatically adds Ramestta network to the user's wallet if it's not 
        already configured. Users don't need to manually add network details!
      </InfoBox>

      <Heading level={2}>Step 4: Send Your First Transaction</Heading>

      <Paragraph>
        Send RAMA tokens from one address to another:
      </Paragraph>

      <CodeBlock code={transferCode} language="typescript" title="transfer.ts" />

      <Divider />

      <Heading level={2}>Deploy a Smart Contract</Heading>

      <Paragraph>
        Create and deploy a simple smart contract to Ramestta:
      </Paragraph>

      <Heading level={3}>Write the Contract</Heading>

      <CodeBlock code={contractCode} language="solidity" title="HelloRamestta.sol" />

      <Heading level={3}>Deploy with ethers.js</Heading>

      <CodeBlock code={deployCode} language="typescript" title="deploy.ts" />

      <Heading level={3}>Using Hardhat</Heading>

      <Paragraph>
        For more complex projects, use Hardhat with Ramestta network configuration:
      </Paragraph>

      <CodeBlock code={hardhatConfig} language="javascript" title="hardhat.config.js" />

      <Paragraph>
        Deploy with Hardhat:
      </Paragraph>

      <CodeBlock code="npx hardhat run scripts/deploy.js --network ramestta" language="bash" />

      <Divider />

      <Heading level={2}>What's Next?</Heading>

      <Paragraph>
        Now that you've deployed your first contract, explore more advanced topics:
      </Paragraph>

      <List
        items={[
          <><strong>Network Configuration:</strong> Learn about Mainnet and Testnet settings</>,
          <><strong>SDK Documentation:</strong> Deep dive into SDK features and plugins</>,
          <><strong>Bridge Assets:</strong> Transfer tokens between Polygon and Ramestta</>,
          <><strong>Become a Validator:</strong> Run a node and earn staking rewards</>,
          <><strong>API Reference:</strong> Explore all available RPC methods</>
        ]}
      />

      <InfoBox type="warning" title="Security Reminder">
        Never commit private keys to version control. Use environment variables and 
        .env files (added to .gitignore) to manage sensitive credentials.
      </InfoBox>
    </div>
  );
};

export default QuickStartPage;
