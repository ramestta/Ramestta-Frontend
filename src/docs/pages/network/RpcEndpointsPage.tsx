import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Tabs, Divider } from '../../components/DocsComponents';

const RpcEndpointsPage: React.FC = () => {
  const curlExample = `# Get current block number
curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

# Response: {"jsonrpc":"2.0","id":1,"result":"0x1a2b3c"}`;

  const batchRequest = `// Batch multiple requests for efficiency
const batchRequests = async () => {
  const response = await fetch('https://blockchain.ramestta.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 },
      { jsonrpc: '2.0', method: 'eth_gasPrice', params: [], id: 2 },
      { jsonrpc: '2.0', method: 'eth_chainId', params: [], id: 3 },
    ])
  });
  
  const results = await response.json();
  return results;
};`;

  const wsExample = `import { ethers } from 'ethers';

// Connect via WebSocket
const wsProvider = new ethers.WebSocketProvider('wss://blockchain.ramestta.com/ws');

// Subscribe to new blocks
wsProvider.on('block', (blockNumber) => {
  console.log('New block:', blockNumber);
});

// Subscribe to pending transactions
wsProvider.on('pending', (txHash) => {
  console.log('Pending TX:', txHash);
});

// Subscribe to specific address
const address = '0x742d35Cc6634C0532925a3b844Bc9e7595f...';
wsProvider.on({ address }, (log) => {
  console.log('Address activity:', log);
});`;

  const fallbackProvider = `import { ethers } from 'ethers';

// Create provider with automatic fallback
const createFallbackProvider = () => {
  const providers = [
    new ethers.JsonRpcProvider('https://blockchain.ramestta.com'),
    new ethers.JsonRpcProvider('https://blockchain2.ramestta.com'),
  ];
  
  // FallbackProvider automatically switches on failure
  return new ethers.FallbackProvider(providers, 1370);
};

// Usage
const provider = createFallbackProvider();
const balance = await provider.getBalance(address);`;

  const customHeaders = `// Add custom headers for API key authentication (if required)
const provider = new ethers.JsonRpcProvider({
  url: 'https://blockchain.ramestta.com',
  headers: {
    'X-API-Key': 'your-api-key',
  }
});

// Or with fetch for more control
const rpcCall = async (method: string, params: any[] = []) => {
  const response = await fetch('https://blockchain.ramestta.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'your-api-key',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method,
      params,
      id: Date.now(),
    })
  });
  
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.result;
};`;

  return (
    <div>
      <Heading level={1}>RPC Endpoints</Heading>
      
      <Paragraph>
        Ramestta provides multiple RPC (Remote Procedure Call) endpoints for interacting 
        with the blockchain. These endpoints support standard Ethereum JSON-RPC methods 
        and are compatible with all major web3 libraries.
      </Paragraph>

      <Heading level={2}>Mainnet Endpoints</Heading>

      <Heading level={3}>HTTP Endpoints</Heading>

      <Table
        headers={['Endpoint', 'URL', 'Status']}
        rows={[
          ['Primary', 'https://blockchain.ramestta.com', '✅ Active'],
          ['Secondary', 'https://blockchain2.ramestta.com', '✅ Active'],
        ]}
      />

      <Heading level={3}>WebSocket Endpoints</Heading>

      <Table
        headers={['Endpoint', 'URL', 'Use Case']}
        rows={[
          ['Primary WS', 'wss://blockchain.ramestta.com/ws', 'Real-time subscriptions'],
        ]}
      />

      <Heading level={2}>Testnet Endpoints</Heading>

      <Table
        headers={['Type', 'URL']}
        rows={[
          ['HTTP', 'https://testnet.ramestta.com'],
          ['WebSocket', 'wss://testnet.ramestta.com/ws'],
        ]}
      />

      <Divider />

      <Heading level={2}>Making RPC Calls</Heading>

      <Heading level={3}>Using cURL</Heading>

      <CodeBlock code={curlExample} language="bash" title="curl-example.sh" />

      <Heading level={3}>Batch Requests</Heading>

      <Paragraph>
        For efficiency, you can batch multiple RPC calls into a single HTTP request:
      </Paragraph>

      <CodeBlock code={batchRequest} language="typescript" title="batch-request.ts" />

      <Heading level={3}>WebSocket Subscriptions</Heading>

      <Paragraph>
        Use WebSocket connections for real-time updates:
      </Paragraph>

      <CodeBlock code={wsExample} language="typescript" title="websocket.ts" />

      <Divider />

      <Heading level={2}>High Availability Setup</Heading>

      <Paragraph>
        For production applications, implement fallback providers:
      </Paragraph>

      <CodeBlock code={fallbackProvider} language="typescript" title="fallback-provider.ts" />

      <InfoBox type="info" title="Best Practice">
        Always implement retry logic and fallback endpoints in production applications. 
        Network issues can occur, and having backup endpoints ensures your dApp remains functional.
      </InfoBox>

      <Heading level={2}>API Key Authentication</Heading>

      <Paragraph>
        If using a premium RPC service that requires authentication:
      </Paragraph>

      <CodeBlock code={customHeaders} language="typescript" title="authenticated-rpc.ts" />

      <Divider />

      <Heading level={2}>Supported Methods</Heading>

      <Paragraph>
        Ramestta RPC endpoints support all standard Ethereum JSON-RPC methods:
      </Paragraph>

      <Heading level={3}>Chain Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_chainId', 'Returns the chain ID'],
          ['eth_blockNumber', 'Returns current block number'],
          ['eth_gasPrice', 'Returns current gas price'],
          ['eth_feeHistory', 'Returns historical gas data'],
          ['net_version', 'Returns network ID'],
        ]}
      />

      <Heading level={3}>Account Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_getBalance', 'Returns account balance'],
          ['eth_getCode', 'Returns contract code'],
          ['eth_getTransactionCount', 'Returns nonce'],
          ['eth_getStorageAt', 'Returns storage value'],
        ]}
      />

      <Heading level={3}>Transaction Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_sendRawTransaction', 'Submit signed transaction'],
          ['eth_getTransactionByHash', 'Get transaction by hash'],
          ['eth_getTransactionReceipt', 'Get transaction receipt'],
          ['eth_estimateGas', 'Estimate gas for transaction'],
          ['eth_call', 'Execute contract call (read-only)'],
        ]}
      />

      <Heading level={3}>Block Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_getBlockByNumber', 'Get block by number'],
          ['eth_getBlockByHash', 'Get block by hash'],
          ['eth_getBlockTransactionCountByNumber', 'Transaction count in block'],
        ]}
      />

      <Heading level={3}>Log Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_getLogs', 'Get logs matching filter'],
          ['eth_newFilter', 'Create new log filter'],
          ['eth_getFilterChanges', 'Poll filter for changes'],
          ['eth_uninstallFilter', 'Remove filter'],
        ]}
      />

      <Divider />

      <Heading level={2}>Rate Limits</Heading>

      <InfoBox type="warning" title="Rate Limiting">
        Public endpoints may have rate limits during high traffic. For high-volume applications, 
        consider running your own node or using a premium RPC service.
      </InfoBox>

      <Table
        headers={['Endpoint Type', 'Rate Limit']}
        rows={[
          ['Public HTTP', '100 requests/second'],
          ['Public WebSocket', '50 subscriptions'],
          ['Premium', 'Unlimited'],
        ]}
      />

      <Heading level={2}>Troubleshooting</Heading>

      <List
        items={[
          <><strong>Connection refused:</strong> Check your internet connection and firewall settings</>,
          <><strong>Rate limited:</strong> Implement exponential backoff or use multiple endpoints</>,
          <><strong>Invalid response:</strong> Verify the RPC method and parameters are correct</>,
          <><strong>Timeout:</strong> Increase timeout settings or try a different endpoint</>
        ]}
      />
    </div>
  );
};

export default RpcEndpointsPage;
