import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Tabs } from '../../components/DocsComponents';

const SdkEthersPage: React.FC = () => {
  const installCode = `npm install @ramestta/sdk @ramestta/sdk-ethers ethers`;

  const basicSetup = `import { RamaPay } from '@ramestta/sdk';
import { EthersPlugin } from '@ramestta/sdk-ethers';
import { ethers } from 'ethers';

// Initialize SDK with ethers.js plugin
const ramaPay = new RamaPay({
  network: 'mainnet',
  plugins: [new EthersPlugin()]
});

// Access the ethers provider
const provider = ramaPay.ethers.provider;

// Get a signer (from browser wallet)
const browserProvider = new ethers.BrowserProvider(window.ethereum);
const signer = await browserProvider.getSigner();`;

  const readContract = `import { ethers } from 'ethers';

// ERC-20 Token ABI (minimal)
const erc20Abi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
];

// Create contract instance
const tokenAddress = '0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee'; // WRAMA
const contract = new ethers.Contract(tokenAddress, erc20Abi, provider);

// Read contract data
const name = await contract.name();
const symbol = await contract.symbol();
const decimals = await contract.decimals();
const totalSupply = await contract.totalSupply();

console.log(\`Token: \${name} (\${symbol})\`);
console.log(\`Decimals: \${decimals}\`);
console.log(\`Total Supply: \${ethers.formatUnits(totalSupply, decimals)}\`);`;

  const writeContract = `import { ethers } from 'ethers';

// ERC-20 ABI with write functions
const erc20Abi = [
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
];

// Connect contract with signer for write operations
const browserProvider = new ethers.BrowserProvider(window.ethereum);
const signer = await browserProvider.getSigner();
const contract = new ethers.Contract(tokenAddress, erc20Abi, signer);

// Transfer tokens
const recipient = '0x742d35Cc6634C0532925a3b844Bc9e7595f...';
const amount = ethers.parseUnits('100', 18); // 100 tokens

const tx = await contract.transfer(recipient, amount);
console.log('Transaction hash:', tx.hash);

// Wait for confirmation
const receipt = await tx.wait();
console.log('Confirmed in block:', receipt.blockNumber);`;

  const eventListening = `import { ethers } from 'ethers';

// Create WebSocket provider for real-time events
const wsProvider = new ethers.WebSocketProvider('wss://ws.ramestta.com');
const contract = new ethers.Contract(tokenAddress, erc20Abi, wsProvider);

// Listen for Transfer events
contract.on('Transfer', (from, to, value, event) => {
  console.log('Transfer detected:');
  console.log(\`  From: \${from}\`);
  console.log(\`  To: \${to}\`);
  console.log(\`  Value: \${ethers.formatUnits(value, 18)}\`);
  console.log(\`  Block: \${event.log.blockNumber}\`);
});

// Query historical events
const filter = contract.filters.Transfer(null, recipientAddress);
const events = await contract.queryFilter(filter, -1000); // Last 1000 blocks

events.forEach(event => {
  console.log(\`Transfer from \${event.args.from}: \${ethers.formatUnits(event.args.value, 18)}\`);
});`;

  const deployContract = `import { ethers } from 'ethers';

// Contract ABI and bytecode (from compilation)
const abi = [
  'constructor(string name, string symbol)',
  'function name() view returns (string)',
  'function mint(address to, uint256 amount)',
  'event Minted(address to, uint256 amount)',
];
const bytecode = '0x608060405234801561001057600080fd5b50...';

async function deployToken(name: string, symbol: string) {
  const browserProvider = new ethers.BrowserProvider(window.ethereum);
  const signer = await browserProvider.getSigner();
  
  // Create contract factory
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  
  // Deploy with constructor arguments
  console.log('Deploying contract...');
  const contract = await factory.deploy(name, symbol);
  
  // Wait for deployment
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  
  console.log(\`Contract deployed to: \${address}\`);
  return contract;
}

// Deploy
const myToken = await deployToken('My Token', 'MTK');`;

  const gasEstimation = `import { ethers } from 'ethers';

// Estimate gas for a transaction
const estimateGas = async () => {
  const browserProvider = new ethers.BrowserProvider(window.ethereum);
  const signer = await browserProvider.getSigner();
  
  const contract = new ethers.Contract(tokenAddress, erc20Abi, signer);
  
  // Estimate gas for transfer
  const gasEstimate = await contract.transfer.estimateGas(
    recipient,
    ethers.parseUnits('100', 18)
  );
  
  console.log('Estimated gas:', gasEstimate.toString());
  
  // Get current gas price
  const feeData = await browserProvider.getFeeData();
  console.log('Gas price:', ethers.formatUnits(feeData.gasPrice, 'gwei'), 'gwei');
  
  // Calculate total cost
  const totalCost = gasEstimate * feeData.gasPrice;
  console.log('Estimated cost:', ethers.formatEther(totalCost), 'RAMA');
  
  return { gasEstimate, gasPrice: feeData.gasPrice, totalCost };
};`;

  return (
    <div>
      <Heading level={1}>ethers.js Plugin</Heading>
      
      <Paragraph>
        The <code>@ramestta/sdk-ethers</code> plugin provides seamless integration with 
        ethers.js v6, the most popular Ethereum library. This guide covers installation, 
        setup, and common usage patterns.
      </Paragraph>

      <InfoBox type="info" title="ethers.js v6">
        This plugin is designed for ethers.js v6. If you're using v5, some API calls 
        may differ. Check the ethers.js migration guide for differences.
      </InfoBox>

      <Heading level={2}>Installation</Heading>

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

      <Heading level={2}>Basic Setup</Heading>

      <CodeBlock code={basicSetup} language="typescript" title="setup.ts" />

      <Divider />

      <Heading level={2}>Reading Contract Data</Heading>

      <Paragraph>
        Read data from smart contracts using the provider (no signer needed for read-only calls):
      </Paragraph>

      <CodeBlock code={readContract} language="typescript" title="read-contract.ts" />

      <Heading level={2}>Writing to Contracts</Heading>

      <Paragraph>
        For write operations, you need a signer (connected wallet):
      </Paragraph>

      <CodeBlock code={writeContract} language="typescript" title="write-contract.ts" />

      <InfoBox type="warning" title="Transaction Fees">
        Write operations require RAMA tokens to pay for gas. Make sure your wallet 
        has sufficient balance before sending transactions.
      </InfoBox>

      <Heading level={2}>Event Listening</Heading>

      <Paragraph>
        Listen for contract events in real-time using WebSocket provider:
      </Paragraph>

      <CodeBlock code={eventListening} language="typescript" title="events.ts" />

      <Heading level={2}>Deploying Contracts</Heading>

      <Paragraph>
        Deploy new smart contracts using ContractFactory:
      </Paragraph>

      <CodeBlock code={deployContract} language="typescript" title="deploy.ts" />

      <Heading level={2}>Gas Estimation</Heading>

      <Paragraph>
        Estimate gas costs before sending transactions:
      </Paragraph>

      <CodeBlock code={gasEstimation} language="typescript" title="gas-estimation.ts" />

      <Divider />

      <Heading level={2}>API Reference</Heading>

      <Heading level={3}>EthersPlugin Class</Heading>

      <Table
        headers={['Property', 'Type', 'Description']}
        rows={[
          ['provider', 'JsonRpcProvider', 'Read-only provider instance'],
          ['wsProvider', 'WebSocketProvider', 'WebSocket provider for events'],
          ['signer', 'Signer | null', 'Connected signer if available'],
        ]}
      />

      <Heading level={3}>Common Methods</Heading>

      <Table
        headers={['Method', 'Returns', 'Description']}
        rows={[
          ['getProvider()', 'JsonRpcProvider', 'Get the HTTP provider'],
          ['getWsProvider()', 'WebSocketProvider', 'Get WebSocket provider'],
          ['getSigner()', 'Signer', 'Get connected signer'],
          ['connect(wallet)', 'void', 'Connect a wallet as signer'],
        ]}
      />

      <Heading level={2}>Resources</Heading>

      <Grid cols={2}>
        <Card icon="📦" title="npm Package">
          <a 
            href="https://www.npmjs.com/package/@ramestta/sdk-ethers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            @ramestta/sdk-ethers →
          </a>
        </Card>
        <Card icon="📚" title="ethers.js Docs">
          <a 
            href="https://docs.ethers.org/v6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            ethers.js v6 Documentation →
          </a>
        </Card>
      </Grid>
    </div>
  );
};

export default SdkEthersPage;
