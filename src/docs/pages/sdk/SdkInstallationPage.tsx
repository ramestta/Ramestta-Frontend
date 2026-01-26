import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const SdkInstallationPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>SDK Installation</Heading>
      
      <Paragraph>
        The Ramestta SDK is available as multiple npm packages. Install only what you need 
        for your project.
      </Paragraph>

      <Heading level={2}>Quick Install</Heading>

      <CodeBlock
        title="Install Core SDK"
        language="bash"
        code={`# Using npm
npm install @ramestta/sdk

# Using yarn
yarn add @ramestta/sdk

# Using pnpm
pnpm add @ramestta/sdk`}
      />

      <Heading level={2}>Available Packages</Heading>

      <Table
        headers={['Package', 'Description', 'Install Command']}
        rows={[
          ['@ramestta/sdk', 'Core SDK with essential features', 'npm install @ramestta/sdk'],
          ['@ramestta/sdk-ethers', 'ethers.js v6 integration', 'npm install @ramestta/sdk-ethers ethers'],
          ['@ramestta/sdk-web3', 'web3.js v4 integration', 'npm install @ramestta/sdk-web3 web3'],
          ['@ramestta/sdk-react', 'React hooks & components', 'npm install @ramestta/sdk-react react'],
          ['@ramestta/contracts', 'Contract ABIs & addresses', 'npm install @ramestta/contracts'],
          ['@ramestta/staking-sdk', 'Staking operations', 'npm install @ramestta/staking-sdk'],
          ['@ramestta/bridge-sdk', 'Cross-chain bridge SDK', 'npm install @ramestta/bridge-sdk']
        ]}
      />

      <Heading level={2}>Full Installation</Heading>

      <Paragraph>
        Install all packages for complete functionality:
      </Paragraph>

      <CodeBlock
        title="Install All Packages"
        language="bash"
        code={`npm install @ramestta/sdk @ramestta/sdk-ethers @ramestta/sdk-web3 @ramestta/sdk-react @ramestta/contracts @ramestta/staking-sdk @ramestta/bridge-sdk ethers web3`}
      />

      <Heading level={2}>TypeScript Support</Heading>

      <Paragraph>
        All packages include TypeScript declarations. No additional @types packages needed.
      </Paragraph>

      <CodeBlock
        title="tsconfig.json (recommended)"
        language="json"
        code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}`}
      />

      <Divider />

      <Heading level={2}>Package Details</Heading>

      <Heading level={3}>@ramestta/sdk (Core)</Heading>

      <Paragraph>
        The core package provides essential utilities and types for Ramestta development.
      </Paragraph>

      <CodeBlock
        title="Core SDK Features"
        language="typescript"
        code={`import { 
  RamesttaSDK,
  MAINNET_CONFIG,
  TESTNET_CONFIG,
  formatRama,
  parseRama,
  isValidAddress
} from '@ramestta/sdk';

// Initialize SDK
const sdk = new RamesttaSDK(MAINNET_CONFIG);

// Utility functions
const amount = parseRama('10.5');  // Parse 10.5 RAMA to wei
const display = formatRama(amount); // Format wei to RAMA string
const valid = isValidAddress('0x...'); // Validate address`}
      />

      <Heading level={3}>@ramestta/sdk-ethers</Heading>

      <Paragraph>
        Integration with ethers.js v6 for contract interactions.
      </Paragraph>

      <CodeBlock
        title="Ethers Plugin"
        language="typescript"
        code={`import { RamesttaEthers } from '@ramestta/sdk-ethers';
import { ethers } from 'ethers';

// Browser provider
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

// Initialize with signer
const ramestta = new RamesttaEthers(signer);

// Get balance
const balance = await ramestta.getBalance('0x...');

// Send transaction
const tx = await ramestta.sendTransaction({
  to: '0x...',
  value: ethers.parseEther('1.0')
});`}
      />

      <Heading level={3}>@ramestta/sdk-web3</Heading>

      <Paragraph>
        Integration with web3.js v4 for legacy support.
      </Paragraph>

      <CodeBlock
        title="Web3 Plugin"
        language="typescript"
        code={`import { RamesttaWeb3 } from '@ramestta/sdk-web3';
import Web3 from 'web3';

const web3 = new Web3('https://blockchain.ramestta.com');
const ramestta = new RamesttaWeb3(web3);

// Get block number
const blockNumber = await ramestta.getBlockNumber();

// Get gas price
const gasPrice = await ramestta.getGasPrice();`}
      />

      <Heading level={3}>@ramestta/sdk-react</Heading>

      <Paragraph>
        React hooks and components for building dApps.
      </Paragraph>

      <CodeBlock
        title="React Hooks"
        language="tsx"
        code={`import { 
  RamesttaProvider, 
  useRamestta, 
  useBalance, 
  useContract 
} from '@ramestta/sdk-react';

// Wrap your app
function App() {
  return (
    <RamesttaProvider network="mainnet">
      <YourApp />
    </RamesttaProvider>
  );
}

// Use hooks in components
function Wallet() {
  const { address, connect, disconnect } = useRamestta();
  const { balance, loading } = useBalance(address);
  
  return (
    <div>
      {address ? (
        <>
          <p>Balance: {balance} RAMA</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}`}
      />

      <Heading level={3}>@ramestta/contracts</Heading>

      <Paragraph>
        Pre-compiled contract ABIs and deployed addresses.
      </Paragraph>

      <CodeBlock
        title="Using Contract ABIs"
        language="typescript"
        code={`import { 
  ERC20_ABI, 
  STAKING_ABI,
  CONTRACT_ADDRESSES 
} from '@ramestta/contracts';
import { ethers } from 'ethers';

// Create contract instance
const token = new ethers.Contract(
  CONTRACT_ADDRESSES.mainnet.RAMA_TOKEN,
  ERC20_ABI,
  signer
);

// Interact with contract
const balance = await token.balanceOf(address);
await token.transfer(recipient, amount);`}
      />

      <Heading level={3}>@ramestta/staking-sdk</Heading>

      <Paragraph>
        High-level staking operations for validators and delegators.
      </Paragraph>

      <CodeBlock
        title="Staking SDK"
        language="typescript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';

const staking = new RamesttaStaking(signer);

// Delegate to validator
await staking.delegate(validatorId, amount);

// Claim rewards
await staking.claimRewards();

// Check delegation
const delegation = await staking.getDelegation(address);`}
      />

      <Heading level={3}>@ramestta/bridge-sdk</Heading>

      <Paragraph>
        Cross-chain bridge operations between Polygon and Ramestta.
      </Paragraph>

      <CodeBlock
        title="Bridge SDK"
        language="typescript"
        code={`import { RamesttaBridge } from '@ramestta/bridge-sdk';

const bridge = new RamesttaBridge(polygonSigner, ramesttaSigner);

// Deposit from Polygon to Ramestta
await bridge.deposit(amount);

// Withdraw from Ramestta to Polygon
await bridge.withdraw(amount);

// Check bridge status
const status = await bridge.getStatus(txHash);`}
      />

      <Divider />

      <Heading level={2}>Peer Dependencies</Heading>

      <Table
        headers={['Package', 'Peer Dependencies']}
        rows={[
          ['@ramestta/sdk', 'None'],
          ['@ramestta/sdk-ethers', 'ethers >= 6.0.0'],
          ['@ramestta/sdk-web3', 'web3 >= 4.0.0'],
          ['@ramestta/sdk-react', 'react >= 18.0.0'],
          ['@ramestta/contracts', 'None'],
          ['@ramestta/staking-sdk', 'ethers >= 6.0.0'],
          ['@ramestta/bridge-sdk', 'ethers >= 6.0.0']
        ]}
      />

      <Heading level={2}>Version Compatibility</Heading>

      <InfoBox type="info" title="Version Policy">
        All @ramestta packages follow semantic versioning. Minor and patch updates are 
        backward compatible. Check the changelog before major version upgrades.
      </InfoBox>

      <CodeBlock
        title="Lock Versions (package.json)"
        language="json"
        code={`{
  "dependencies": {
    "@ramestta/sdk": "^1.0.0",
    "@ramestta/sdk-ethers": "^1.0.0",
    "@ramestta/sdk-web3": "^1.0.0",
    "@ramestta/sdk-react": "^1.0.0",
    "@ramestta/contracts": "^1.0.0",
    "@ramestta/staking-sdk": "^1.0.0",
    "@ramestta/bridge-sdk": "^1.0.0"
  }
}`}
      />

      <InfoBox type="success" title="Ready to Code">
        Packages installed! Check the <a href="/docs?page=sdk-ethers" className="text-primary-400 hover:underline">Ethers.js Plugin</a> or 
        <a href="/docs?page=sdk-web3" className="text-primary-400 hover:underline"> Web3.js Plugin</a> documentation for usage examples.
      </InfoBox>
    </div>
  );
};

export default SdkInstallationPage;
