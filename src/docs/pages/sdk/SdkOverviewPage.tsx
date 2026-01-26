import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge, Tabs } from '../../components/DocsComponents';

const SdkOverviewPage: React.FC = () => {
  const basicUsage = `import { RamaPay } from '@ramestta/sdk';

// Initialize SDK
const ramaPay = new RamaPay({
  network: 'mainnet', // or 'testnet'
});

// Get provider
const provider = ramaPay.getProvider();

// Check balance
const balance = await ramaPay.getBalance('0x742d35Cc...');
console.log('Balance:', balance.formatted, 'RAMA');`;

  const withEthers = `import { RamaPay } from '@ramestta/sdk';
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
const contract = new ethers.Contract(address, abi, signer);`;

  const withWeb3 = `import { RamaPay } from '@ramestta/sdk';
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
const contract = new web3.eth.Contract(abi, address);`;

  return (
    <div>
      <Heading level={1}>SDK Overview</Heading>
      
      <div className="flex items-center gap-3 mb-6">
        <Badge variant="success">Stable</Badge>
        <Badge variant="primary">TypeScript</Badge>
        <Badge variant="secondary">Tree-shakable</Badge>
      </div>

      <Paragraph>
        The Ramestta SDK is a modular TypeScript library for building applications on the 
        Ramestta network. It provides a clean, intuitive API for common blockchain operations 
        with optional plugins for popular web3 libraries.
      </Paragraph>

      <InfoBox type="info" title="Design Philosophy">
        The SDK follows a plugin architecture - install only what you need. The core package 
        is lightweight (~20KB gzipped), with optional plugins for ethers.js and web3.js integration.
      </InfoBox>

      <Heading level={2}>Available Packages</Heading>

      <Table
        headers={['Package', 'Version', 'Description', 'Size']}
        rows={[
          ['@ramestta/sdk', '1.0.0', 'Core SDK with essential features', '~20KB'],
          ['@ramestta/sdk-ethers', '1.0.3', 'ethers.js v6 integration plugin', '~8KB'],
          ['@ramestta/sdk-web3', '1.0.0', 'web3.js v4 integration plugin', '~8KB'],
          ['@ramestta/sdk-react', '1.0.0', 'React hooks & components', '~15KB'],
          ['@ramestta/contracts', '1.1.0', 'Smart contract ABIs & addresses', '~12KB'],
          ['@ramestta/staking-sdk', '1.0.1', 'Staking operations SDK', '~18KB'],
          ['@ramestta/bridge-sdk', '1.0.1', 'Cross-chain bridge SDK', '~22KB'],
        ]}
      />

      <InfoBox type="success" title="npm Organization">
        All packages are published under the <code>@ramestta</code> organization. View all packages at{' '}
        <a href="https://www.npmjs.com/org/ramestta" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          npmjs.com/org/ramestta
        </a>
      </InfoBox>

      <Heading level={2}>Quick Start</Heading>

      <Heading level={3}>Installation</Heading>

      <Tabs
        tabs={[
          {
            label: 'Core Only',
            content: <CodeBlock code="npm install @ramestta/sdk" language="bash" />
          },
          {
            label: 'With ethers.js',
            content: <CodeBlock code="npm install @ramestta/sdk @ramestta/sdk-ethers ethers" language="bash" />
          },
          {
            label: 'With web3.js',
            content: <CodeBlock code="npm install @ramestta/sdk @ramestta/sdk-web3 web3" language="bash" />
          },
          {
            label: 'Install All',
            content: <CodeBlock code="npm install @ramestta/sdk @ramestta/sdk-ethers @ramestta/sdk-web3 @ramestta/sdk-react @ramestta/contracts @ramestta/staking-sdk @ramestta/bridge-sdk" language="bash" />
          }
        ]}
      />

      <Heading level={3}>Basic Usage</Heading>

      <CodeBlock code={basicUsage} language="typescript" title="basic-usage.ts" />

      <Heading level={3}>With ethers.js Plugin</Heading>

      <CodeBlock code={withEthers} language="typescript" title="with-ethers.ts" />

      <Heading level={3}>With web3.js Plugin</Heading>

      <CodeBlock code={withWeb3} language="typescript" title="with-web3.ts" />

      <Divider />

      <Heading level={2}>Core Features</Heading>

      <Grid cols={2}>
        <Card icon="🔗" title="Network Connection">
          <p className="text-gray-400 text-sm mt-2">
            Easy connection to mainnet and testnet with automatic RPC failover
          </p>
        </Card>
        <Card icon="💰" title="Balance & Transfers">
          <p className="text-gray-400 text-sm mt-2">
            Query balances and send transactions with a simple API
          </p>
        </Card>
        <Card icon="📜" title="Contract Interaction">
          <p className="text-gray-400 text-sm mt-2">
            Deploy and interact with smart contracts easily
          </p>
        </Card>
        <Card icon="🔐" title="Wallet Integration">
          <p className="text-gray-400 text-sm mt-2">
            Connect to MetaMask, RamaPay, and other wallets
          </p>
        </Card>
        <Card icon="🌉" title="Bridge Support">
          <p className="text-gray-400 text-sm mt-2">
            Built-in support for RamaBridge operations
          </p>
        </Card>
        <Card icon="📊" title="Utilities">
          <p className="text-gray-400 text-sm mt-2">
            Format conversions, gas estimation, and more
          </p>
        </Card>
      </Grid>

      <Heading level={2}>Plugin System</Heading>

      <Paragraph>
        The SDK uses a plugin system to extend functionality. Plugins are loaded at 
        initialization and can add new features or integrate with external libraries.
      </Paragraph>

      <Heading level={3}>Built-in Plugins</Heading>

      <Table
        headers={['Plugin', 'Package', 'Features']}
        rows={[
          ['EthersPlugin', '@ramestta/sdk-ethers', 'ethers.js provider, signers, contracts'],
          ['Web3Plugin', '@ramestta/sdk-web3', 'web3.js instance, accounts, contracts'],
        ]}
      />

      <InfoBox type="success" title="Choose Your Library">
        Use the plugin that matches your preferred web3 library. Both plugins provide 
        full access to the underlying library while maintaining SDK conventions.
      </InfoBox>

      <Heading level={2}>TypeScript Support</Heading>

      <Paragraph>
        The SDK is written in TypeScript and provides complete type definitions. 
        This enables excellent IDE support with autocomplete, type checking, and documentation.
      </Paragraph>

      <List
        items={[
          'Full type definitions for all APIs',
          'Generic types for custom contract ABIs',
          'Strict null checks and error handling',
          'IntelliSense support in VS Code'
        ]}
      />

      <Heading level={2}>Browser & Node.js Support</Heading>

      <Table
        headers={['Environment', 'Support', 'Notes']}
        rows={[
          ['Node.js', '✅ v18+', 'Full support'],
          ['Browser', '✅ Modern', 'ES2020+ required'],
          ['React Native', '✅', 'With polyfills'],
          ['Electron', '✅', 'Full support'],
        ]}
      />

      <Heading level={2}>Error Handling</Heading>

      <Paragraph>
        The SDK provides typed errors for common failure scenarios:
      </Paragraph>

      <CodeBlock 
        code={`import { RamaPay, RamaError, NetworkError, InsufficientFundsError } from '@ramestta/sdk';

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
}`}
        language="typescript"
        title="error-handling.ts"
      />

      <Heading level={2}>Resources</Heading>

      <Grid cols={2}>
        <Card icon="📦" title="npm">
          <a 
            href="https://www.npmjs.com/package/@ramestta/sdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            @ramestta/sdk →
          </a>
        </Card>
        <Card icon="🐙" title="GitHub">
          <a 
            href="https://github.com/AamirAlam/ramestta-sdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            View source code →
          </a>
        </Card>
      </Grid>
    </div>
  );
};

export default SdkOverviewPage;
