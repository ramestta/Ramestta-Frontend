import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge } from '../../components/DocsComponents';

const MainnetPage: React.FC = () => {
  const networkParams = `// Add Ramestta Mainnet to MetaMask programmatically
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
});`;

  const ethersConnection = `import { ethers } from 'ethers';

// Connect to Ramestta Mainnet
const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');

// Or with WebSocket for real-time updates
const wsProvider = new ethers.WebSocketProvider('wss://ws.ramestta.com');

// Verify connection
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId); // 21190n`;

  const web3Connection = `import Web3 from 'web3';

// Connect to Ramestta Mainnet
const web3 = new Web3('https://blockchain.ramestta.com');

// Verify connection
const chainId = await web3.eth.getChainId();
console.log('Chain ID:', chainId); // 21190n`;

  return (
    <div>
      <Heading level={1}>Ramestta Mainnet</Heading>
      
      <div className="flex items-center gap-3 mb-6">
        <Badge variant="success">Production</Badge>
        <Badge variant="primary">Chain ID: 21190</Badge>
      </div>

      <Paragraph>
        Ramestta Mainnet is the production blockchain network for deploying production-ready 
        applications. It uses real RAMA tokens and all transactions are permanent and irreversible.
      </Paragraph>

      <InfoBox type="warning" title="Production Environment">
        Mainnet uses real assets with real value. Always test thoroughly on testnet before 
        deploying to mainnet. Ensure your smart contracts have been audited for security.
      </InfoBox>

      <Heading level={2}>Network Configuration</Heading>

      <Table
        headers={['Parameter', 'Value']}
        rows={[
          ['Network Name', 'Ramestta Mainnet'],
          ['Chain ID', '21190'],
          ['Chain ID (Hex)', '0x52c6'],
          ['Currency Symbol', 'RAMA'],
          ['Currency Decimals', '18'],
          ['Block Time', '~2 seconds'],
          ['Consensus', 'Proof-of-Stake (PoS)'],
          ['EVM Version', 'London'],
        ]}
      />

      <Heading level={2}>RPC Endpoints</Heading>

      <Heading level={3}>HTTP Endpoints</Heading>

      <Table
        headers={['Provider', 'URL', 'Rate Limit']}
        rows={[
          ['Official', 'https://blockchain.ramestta.com', 'Unlimited'],
          ['Backup 1', 'https://rpc2.ramestta.com', 'Unlimited'],
          ['Backup 2', 'https://rpc3.ramestta.com', 'Unlimited'],
        ]}
      />

      <Heading level={3}>WebSocket Endpoints</Heading>

      <Table
        headers={['Provider', 'URL', 'Use Case']}
        rows={[
          ['Official', 'wss://ws.ramestta.com', 'Real-time subscriptions'],
        ]}
      />

      <InfoBox type="info" title="High Availability">
        For production applications, implement fallback logic to switch between RPC endpoints 
        if one becomes unavailable. This ensures your dApp remains functional.
      </InfoBox>

      <Heading level={2}>Block Explorer</Heading>

      <Grid cols={2}>
        <Card icon="🔍" title="RamaScan">
          <p className="text-gray-400 text-sm mt-2 mb-3">
            Official block explorer for Ramestta Mainnet
          </p>
          <a 
            href="https://ramascan.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            https://ramascan.com →
          </a>
        </Card>
        <Card icon="📊" title="Explorer Features">
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>• Transaction tracking</li>
            <li>• Contract verification</li>
            <li>• Token transfers</li>
            <li>• API access</li>
          </ul>
        </Card>
      </Grid>

      <Divider />

      <Heading level={2}>Connect to Mainnet</Heading>

      <Heading level={3}>Add to MetaMask</Heading>

      <CodeBlock code={networkParams} language="typescript" title="Add Network" />

      <Paragraph>
        Or add manually in MetaMask:
      </Paragraph>

      <List
        ordered
        items={[
          'Open MetaMask and click on the network dropdown',
          'Select "Add Network" → "Add a network manually"',
          'Enter the network details from the table above',
          'Click "Save" to add the network'
        ]}
      />

      <Heading level={3}>Connect with ethers.js</Heading>

      <CodeBlock code={ethersConnection} language="typescript" title="ethers.js" />

      <Heading level={3}>Connect with Web3.js</Heading>

      <CodeBlock code={web3Connection} language="typescript" title="web3.js" />

      <Divider />

      <Heading level={2}>Core Smart Contracts</Heading>

      <Paragraph>
        Key contract addresses deployed on Ramestta Mainnet:
      </Paragraph>

      <Table
        headers={['Contract', 'Address']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010'],
          ['WRAMA (Wrapped)', '0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee'],
          ['Staking Manager', '0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908'],
          ['Root Chain', '0x28e4F3a7f651294B9564800b2D01f35189A5bFbE'],
        ]}
      />

      <InfoBox type="success" title="Contract Verification">
        All official contracts are verified and open source on RamaScan. You can view the 
        source code and interact with them directly through the explorer.
      </InfoBox>

      <Heading level={2}>Getting RAMA</Heading>

      <Grid cols={2}>
        <Card icon="💱" title="Exchanges">
          <p className="text-gray-400 text-sm mt-2">
            Purchase RAMA on supported cryptocurrency exchanges
          </p>
        </Card>
        <Card icon="🌉" title="Bridge">
          <p className="text-gray-400 text-sm mt-2">
            Bridge assets from Polygon using RamaBridge
          </p>
        </Card>
      </Grid>

      <Heading level={2}>Best Practices</Heading>

      <List
        items={[
          <><strong>Test First:</strong> Always deploy and test on Pingaksha Testnet before mainnet</>,
          <><strong>Security Audits:</strong> Get your contracts audited before mainnet deployment</>,
          <><strong>Gas Estimation:</strong> Use proper gas estimation to avoid failed transactions</>,
          <><strong>Monitoring:</strong> Set up transaction monitoring and alerting</>,
          <><strong>Backup RPC:</strong> Implement fallback RPC endpoints for reliability</>
        ]}
      />
    </div>
  );
};

export default MainnetPage;
