import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge } from '../../components/DocsComponents';

const TestnetPage: React.FC = () => {
  const networkParams = `// Add Ramestta Testnet to MetaMask programmatically
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
});`;

  const faucetCode = `// Request test tokens programmatically (if API available)
const requestTestTokens = async (address: string) => {
  const response = await fetch('https://faucet.ramestta.com/api/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address })
  });
  
  const result = await response.json();
  console.log('Faucet TX:', result.txHash);
  return result;
};`;

  const testnetConnection = `import { ethers } from 'ethers';

// Connect to Ramestta Testnet
const provider = new ethers.JsonRpcProvider('https://testnet.ramestta.com');

// Verify you're on testnet
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId); // 1371n

// IMPORTANT: Always verify chain ID in production
if (network.chainId !== 1371n) {
  throw new Error('Not connected to Ramestta Testnet!');
}`;

  return (
    <div>
      <Heading level={1}>Ramestta Testnet</Heading>
      
      <div className="flex items-center gap-3 mb-6">
        <Badge variant="warning">Testing</Badge>
        <Badge variant="secondary">Chain ID: 1371</Badge>
      </div>

      <Paragraph>
        Ramestta Testnet is the testing environment where developers can deploy 
        and test smart contracts without using real assets. Test RAMA tokens have no real value 
        and can be obtained for free from the faucet.
      </Paragraph>

      <InfoBox type="info" title="Test Environment">
        Use testnet for all development and testing. Test tokens are free and the network 
        may be reset periodically. Never rely on testnet for storing valuable data.
      </InfoBox>

      <Heading level={2}>Network Configuration</Heading>

      <Table
        headers={['Parameter', 'Value']}
        rows={[
          ['Network Name', 'Ramestta Testnet (Pingaksha)'],
          ['Chain ID', '1371'],
          ['Chain ID (Hex)', '0x55b'],
          ['Currency Symbol', 'RAMA'],
          ['Currency Decimals', '18'],
          ['Block Time', '~2 seconds'],
          ['Consensus', 'Heimdall (PoS) + Bor (EVM)'],
          ['Parent Chain', 'Polygon Amoy (Chain ID: 80002)'],
        ]}
      />

      <Heading level={2}>RPC Endpoints</Heading>

      <Table
        headers={['Type', 'URL']}
        rows={[
          ['HTTP', 'https://testnet.ramestta.com'],
          ['WebSocket', 'wss://testnet-ws.ramestta.com'],
        ]}
      />

      <Heading level={2}>Block Explorer</Heading>

      <Card icon="🔍" title="Testnet RamaScan">
        <p className="text-gray-400 text-sm mt-2 mb-3">
          Block explorer for Pingaksha Testnet
        </p>
        <a 
          href="https://testnet-ramascan.ramestta.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
        >
          https://testnet-ramascan.ramestta.com →
        </a>
      </Card>

      <Divider />

      <Heading level={2}>Get Test Tokens</Heading>

      <Paragraph>
        Get free test RAMA tokens from the official faucet:
      </Paragraph>

      <Grid cols={2}>
        <Card icon="🚰" title="Official Faucet">
          <p className="text-gray-400 text-sm mt-2 mb-3">
            Request test RAMA tokens every 24 hours
          </p>
          <a 
            href="https://faucet.ramestta.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            https://faucet.ramestta.com →
          </a>
        </Card>
        <Card icon="📝" title="How to Use">
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>1. Connect your wallet</li>
            <li>2. Enter your address</li>
            <li>3. Complete captcha</li>
            <li>4. Click "Request Tokens"</li>
          </ul>
        </Card>
      </Grid>

      <InfoBox type="warning" title="Faucet Limits">
        The faucet has a cooldown period of 24 hours per address. If you need more test 
        tokens for extensive testing, contact the team on Discord.
      </InfoBox>

      <Heading level={2}>Connect to Testnet</Heading>

      <Heading level={3}>Add to MetaMask</Heading>

      <CodeBlock code={networkParams} language="typescript" title="Add Testnet" />

      <Heading level={3}>Verify Connection</Heading>

      <CodeBlock code={testnetConnection} language="typescript" title="verify-testnet.ts" />

      <Divider />

      <Heading level={2}>Testnet vs Mainnet</Heading>

      <Table
        headers={['Feature', 'Testnet', 'Mainnet']}
        rows={[
          ['Chain ID', '21191', '21190'],
          ['Token Value', 'No value', 'Real value'],
          ['Faucet', 'Available', 'N/A'],
          ['Block Explorer', 'testnet-ramascan.ramestta.com', 'ramascan.com'],
          ['Use Case', 'Development & Testing', 'Production'],
          ['Network Stability', 'May be reset', 'Permanent'],
        ]}
      />

      <Heading level={2}>Development Workflow</Heading>

      <List
        ordered
        items={[
          'Get test RAMA from the faucet',
          'Deploy your contracts to testnet',
          'Test all functionality thoroughly',
          'Verify contracts on testnet explorer',
          'Get a security audit (recommended)',
          'Deploy to mainnet when ready'
        ]}
      />

      <Heading level={2}>Testnet Contracts</Heading>

      <Paragraph>
        Test versions of core contracts are deployed on Pingaksha Testnet:
      </Paragraph>

      <Table
        headers={['Contract', 'Address']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010'],
          ['WRAMA (Wrapped)', '0x...testnet address'],
          ['Test Staking', '0x...testnet address'],
        ]}
      />

      <InfoBox type="success" title="Ready to Test?">
        Get some test tokens from the faucet and start building! When your application 
        is thoroughly tested, you can deploy to mainnet with confidence.
      </InfoBox>
    </div>
  );
};

export default TestnetPage;
