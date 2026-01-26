import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Tabs } from '../../components/DocsComponents';

const SdkWeb3Page: React.FC = () => {
  const installCode = `npm install @ramestta/sdk @ramestta/sdk-web3 web3`;

  const basicSetup = `import { RamaPay } from '@ramestta/sdk';
import { Web3Plugin } from '@ramestta/sdk-web3';
import Web3 from 'web3';

// Initialize SDK with web3.js plugin
const ramaPay = new RamaPay({
  network: 'mainnet',
  plugins: [new Web3Plugin()]
});

// Access the web3 instance
const web3 = ramaPay.web3.instance;

// Check connection
const chainId = await web3.eth.getChainId();
console.log('Connected to chain:', chainId); // 21190n`;

  const connectWallet = `import Web3 from 'web3';

// Connect to browser wallet
const connectWallet = async () => {
  if (typeof window.ethereum === 'undefined') {
    throw new Error('MetaMask not installed');
  }
  
  // Create web3 instance with browser provider
  const web3 = new Web3(window.ethereum);
  
  // Request account access
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });
  
  // Switch to Ramestta network
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: Web3.utils.toHex(21190) }],
    });
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: Web3.utils.toHex(21190),
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
  
  console.log('Connected account:', accounts[0]);
  return { web3, account: accounts[0] };
};`;

  const readContract = `import Web3 from 'web3';

// ERC-20 Token ABI
const erc20Abi = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function'
  }
];

// Create contract instance
const web3 = new Web3('https://blockchain.ramestta.com');
const tokenAddress = '0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee';
const contract = new web3.eth.Contract(erc20Abi, tokenAddress);

// Read contract data
const name = await contract.methods.name().call();
const symbol = await contract.methods.symbol().call();
const decimals = await contract.methods.decimals().call();

console.log(\`Token: \${name} (\${symbol}), Decimals: \${decimals}\`);

// Get balance
const balance = await contract.methods.balanceOf(userAddress).call();
const formatted = Web3.utils.fromWei(balance, 'ether');
console.log(\`Balance: \${formatted} \${symbol}\`);`;

  const writeContract = `import Web3 from 'web3';

// ERC-20 ABI with transfer function
const erc20Abi = [
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function'
  }
];

const transferTokens = async (to: string, amount: string) => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];
  
  const contract = new web3.eth.Contract(erc20Abi, tokenAddress);
  
  // Convert amount to wei
  const amountWei = Web3.utils.toWei(amount, 'ether');
  
  // Send transaction
  const receipt = await contract.methods.transfer(to, amountWei).send({
    from: from,
    gas: '100000',
  });
  
  console.log('Transaction hash:', receipt.transactionHash);
  console.log('Block number:', receipt.blockNumber);
  
  return receipt;
};

// Transfer 100 tokens
await transferTokens('0x742d35Cc...', '100');`;

  const eventListening = `import Web3 from 'web3';

// Create WebSocket connection for events
const web3 = new Web3('wss://ws.ramestta.com');
const contract = new web3.eth.Contract(erc20Abi, tokenAddress);

// Subscribe to Transfer events
contract.events.Transfer({
  fromBlock: 'latest'
})
.on('data', (event) => {
  console.log('Transfer event:');
  console.log('  From:', event.returnValues.from);
  console.log('  To:', event.returnValues.to);
  console.log('  Value:', Web3.utils.fromWei(event.returnValues.value, 'ether'));
  console.log('  Block:', event.blockNumber);
})
.on('error', (error) => {
  console.error('Event error:', error);
});

// Get past events
const pastEvents = await contract.getPastEvents('Transfer', {
  filter: { to: userAddress },
  fromBlock: 0,
  toBlock: 'latest'
});

pastEvents.forEach(event => {
  console.log(\`Transfer from \${event.returnValues.from}: \${Web3.utils.fromWei(event.returnValues.value, 'ether')}\`);
});`;

  const deployContract = `import Web3 from 'web3';

// Contract ABI and bytecode
const abi = [...]; // Your contract ABI
const bytecode = '0x608060405234801561001057600080fd5b50...';

const deployContract = async () => {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];
  
  // Create contract instance
  const contract = new web3.eth.Contract(abi);
  
  // Deploy with constructor arguments
  const deployTx = contract.deploy({
    data: bytecode,
    arguments: ['My Token', 'MTK'] // Constructor args
  });
  
  // Estimate gas
  const gas = await deployTx.estimateGas({ from });
  console.log('Estimated gas:', gas);
  
  // Send deployment transaction
  const deployed = await deployTx.send({
    from,
    gas: Math.ceil(gas * 1.2), // Add 20% buffer
  });
  
  console.log('Contract deployed to:', deployed.options.address);
  return deployed;
};`;

  const utilityMethods = `import Web3 from 'web3';

// ----------------
// Unit Conversions
// ----------------
const amountWei = Web3.utils.toWei('1.5', 'ether');    // 1500000000000000000
const amountEth = Web3.utils.fromWei('1500000000000000000', 'ether'); // 1.5

// ----------------
// Address Utilities
// ----------------
const isValid = Web3.utils.isAddress('0x742d35Cc...');  // true
const checksummed = Web3.utils.toChecksumAddress('0x742d35cc...');

// ----------------
// Hex Conversions
// ----------------
const hexNumber = Web3.utils.toHex(21190);  // '0x52c6'
const number = Web3.utils.hexToNumber('0x52c6');  // 21190

// ----------------
// Hashing
// ----------------
const keccak = Web3.utils.keccak256('Hello Ramestta');
const sha3 = Web3.utils.sha3('Hello Ramestta');

// ----------------
// ABI Encoding
// ----------------
const encoded = Web3.eth.abi.encodeParameters(
  ['uint256', 'string'],
  [100, 'hello']
);`;

  return (
    <div>
      <Heading level={1}>web3.js Plugin</Heading>
      
      <Paragraph>
        The <code>@ramestta/sdk-web3</code> plugin provides integration with web3.js v4, 
        another popular Ethereum library with a different API style. This guide covers 
        installation, setup, and common usage patterns.
      </Paragraph>

      <InfoBox type="info" title="web3.js v4">
        This plugin is designed for web3.js v4. The v4 release introduced significant 
        changes from v1.x, including TypeScript support and ESM modules.
      </InfoBox>

      <Heading level={2}>Installation</Heading>

      <Tabs
        tabs={[
          {
            label: 'npm',
            content: <CodeBlock code="npm install @ramestta/sdk @ramestta/sdk-web3 web3" language="bash" />
          },
          {
            label: 'yarn',
            content: <CodeBlock code="yarn add @ramestta/sdk @ramestta/sdk-web3 web3" language="bash" />
          },
          {
            label: 'pnpm',
            content: <CodeBlock code="pnpm add @ramestta/sdk @ramestta/sdk-web3 web3" language="bash" />
          }
        ]}
      />

      <Heading level={2}>Basic Setup</Heading>

      <CodeBlock code={basicSetup} language="typescript" title="setup.ts" />

      <Heading level={2}>Connect Wallet</Heading>

      <Paragraph>
        Connect to the user's browser wallet and switch to Ramestta network:
      </Paragraph>

      <CodeBlock code={connectWallet} language="typescript" title="connect-wallet.ts" />

      <Divider />

      <Heading level={2}>Reading Contract Data</Heading>

      <Paragraph>
        Read data from smart contracts using the <code>call()</code> method:
      </Paragraph>

      <CodeBlock code={readContract} language="typescript" title="read-contract.ts" />

      <Heading level={2}>Writing to Contracts</Heading>

      <Paragraph>
        For write operations, use the <code>send()</code> method with a connected account:
      </Paragraph>

      <CodeBlock code={writeContract} language="typescript" title="write-contract.ts" />

      <InfoBox type="warning" title="Gas Fees">
        Write operations require RAMA tokens for gas. Ensure your wallet has sufficient 
        balance. You can estimate gas before sending to avoid transaction failures.
      </InfoBox>

      <Heading level={2}>Event Listening</Heading>

      <Paragraph>
        Subscribe to contract events in real-time:
      </Paragraph>

      <CodeBlock code={eventListening} language="typescript" title="events.ts" />

      <Heading level={2}>Deploying Contracts</Heading>

      <Paragraph>
        Deploy new smart contracts to Ramestta:
      </Paragraph>

      <CodeBlock code={deployContract} language="typescript" title="deploy.ts" />

      <Heading level={2}>Utility Methods</Heading>

      <Paragraph>
        web3.js provides many useful utility functions:
      </Paragraph>

      <CodeBlock code={utilityMethods} language="typescript" title="utilities.ts" />

      <Divider />

      <Heading level={2}>web3.js vs ethers.js</Heading>

      <Table
        headers={['Feature', 'web3.js', 'ethers.js']}
        rows={[
          ['Bundle Size', 'Larger (~500KB)', 'Smaller (~120KB)'],
          ['API Style', 'Callback/Promise', 'Promise/async'],
          ['TypeScript', 'v4+ native', 'Native'],
          ['Contract calls', 'contract.methods.fn().call()', 'contract.fn()'],
          ['Send tx', 'contract.methods.fn().send()', 'contract.fn()'],
          ['Unit conversion', 'Web3.utils.toWei()', 'ethers.parseEther()'],
        ]}
      />

      <InfoBox type="success" title="Choose Based on Preference">
        Both libraries work great with Ramestta. Choose based on your team's familiarity, 
        bundle size requirements, and API preferences.
      </InfoBox>

      <Heading level={2}>Resources</Heading>

      <Grid cols={2}>
        <Card icon="📦" title="npm Package">
          <a 
            href="https://www.npmjs.com/package/@ramestta/sdk-web3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            @ramestta/sdk-web3 →
          </a>
        </Card>
        <Card icon="📚" title="web3.js Docs">
          <a 
            href="https://docs.web3js.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            web3.js Documentation →
          </a>
        </Card>
      </Grid>
    </div>
  );
};

export default SdkWeb3Page;
