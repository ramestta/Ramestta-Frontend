import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge, Card, Grid } from '../../components/DocsComponents';

const JsonRpcPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>JSON-RPC API</Heading>
      
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="primary">ETH RPC</Badge>
        <Badge variant="success">EVM Compatible</Badge>
        <Badge variant="primary">Blockscout v9.0.2</Badge>
      </div>

      <Paragraph>
        Ramestta supports the standard Ethereum JSON-RPC API, making it compatible with all 
        Ethereum tools, libraries, and applications. The RPC is powered by Bor (Polygon fork) 
        and fully compatible with Web3.js, Ethers.js, and all EVM tooling.
      </Paragraph>

      {/* RPC Endpoints */}
      <Heading level={2}>RPC Endpoints</Heading>

      <Heading level={3}>Mainnet (Chain ID: 1370)</Heading>
      <Table
        headers={['Type', 'URL']}
        rows={[
          ['HTTP RPC (Primary)', 'https://blockchain.ramestta.com'],
          ['HTTP RPC (Secondary)', 'https://blockchain2.ramestta.com'],
          ['WebSocket', 'wss://blockchain.ramestta.com/ws'],
        ]}
      />

      <Heading level={3}>Testnet (Chain ID: 1371)</Heading>
      <Table
        headers={['Type', 'URL']}
        rows={[
          ['HTTP RPC', 'https://testnet.ramestta.com'],
          ['WebSocket', 'wss://testnet.ramestta.com/ws'],
        ]}
      />

      <InfoBox type="info" title="Chain ID in Hex">
        Mainnet: <code>0x55a</code> (1370) | Testnet: <code>0x55b</code> (1371)
      </InfoBox>

      <Divider />

      {/* Standard Ethereum Methods */}
      <Heading level={2}>Standard Ethereum Methods</Heading>

      <Paragraph>
        Ramestta supports all standard Ethereum JSON-RPC methods. See the{' '}
        <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
          Ethereum JSON-RPC Specification
        </a>{' '}for complete details.
      </Paragraph>

      <Heading level={3}>eth_chainId</Heading>
      <Paragraph>Returns the chain ID of the network.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'`}
      />

      <CodeBlock
        title="Response"
        language="json"
        code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x55a"  // 1370 (Mainnet)
}`}
      />

      <Heading level={3}>eth_blockNumber</Heading>
      <Paragraph>Returns the current block number.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'`}
      />

      <Heading level={3}>eth_getBalance</Heading>
      <Paragraph>Returns the RAMA balance of an address in wei.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":["0x742d35Cc6634C0532925a3b844Bc9e7595f00000","latest"],
    "id":1
  }'`}
      />

      <Heading level={3}>eth_gasPrice</Heading>
      <Paragraph>Returns the current gas price in wei.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":1}'`}
      />

      <Heading level={3}>eth_sendRawTransaction</Heading>
      <Paragraph>Submits a signed transaction to the network.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_sendRawTransaction",
    "params":["0xf86c...signed_tx_data"],
    "id":1
  }'`}
      />

      <Heading level={3}>eth_call</Heading>
      <Paragraph>Executes a contract call without creating a transaction (read-only).</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_call",
    "params":[{
      "to":"0x0000000000000000000000000000000000001010",
      "data":"0x70a08231000000000000000000000000..."
    },"latest"],
    "id":1
  }'`}
      />

      <Heading level={3}>eth_getTransactionReceipt</Heading>
      <Paragraph>Returns the receipt of a transaction by hash.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_getTransactionReceipt",
    "params":["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],
    "id":1
  }'`}
      />

      <Heading level={3}>eth_getLogs</Heading>
      <Paragraph>Returns logs matching a filter (useful for querying events).</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_getLogs",
    "params":[{
      "fromBlock":"0x1",
      "toBlock":"latest",
      "address":"0x0000000000000000000000000000000000001010",
      "topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]
    }],
    "id":1
  }'`}
      />

      <Divider />

      {/* Bor-Specific Methods */}
      <Heading level={2}>Bor-Specific Methods</Heading>

      <Paragraph>
        Ramestta runs Bor (a Polygon fork), which includes additional RPC methods for 
        validator and block producer information.
      </Paragraph>

      <Heading level={3}>bor_getAuthor</Heading>
      <Paragraph>Returns the author (block producer) of a block.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"bor_getAuthor",
    "params":["latest"],
    "id":1
  }'`}
      />

      <Heading level={3}>bor_getCurrentValidators</Heading>
      <Paragraph>Returns the current validator set.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"bor_getCurrentValidators","params":[],"id":1}'`}
      />

      <Heading level={3}>bor_getCurrentProposer</Heading>
      <Paragraph>Returns the current block proposer.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"bor_getCurrentProposer","params":[],"id":1}'`}
      />

      <Heading level={3}>bor_getRootHash</Heading>
      <Paragraph>Returns the root hash for a given span of blocks.</Paragraph>

      <CodeBlock
        title="Request"
        language="bash"
        code={`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"bor_getRootHash",
    "params":[0, 1000],
    "id":1
  }'`}
      />

      <Divider />

      {/* WebSocket Subscriptions */}
      <Heading level={2}>WebSocket Subscriptions</Heading>

      <CodeBlock
        title="Subscribe to New Blocks"
        language="javascript"
        code={`const WebSocket = require('ws');
const ws = new WebSocket('wss://blockchain.ramestta.com/ws');

ws.on('open', () => {
  // Subscribe to new block headers
  ws.send(JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_subscribe',
    params: ['newHeads']
  }));
});

ws.on('message', (data) => {
  const response = JSON.parse(data);
  if (response.method === 'eth_subscription') {
    console.log('New block:', response.params.result.number);
  }
});`}
      />

      <CodeBlock
        title="Subscribe to Pending Transactions"
        language="javascript"
        code={`// Subscribe to pending transactions
ws.send(JSON.stringify({
  jsonrpc: '2.0',
  id: 2,
  method: 'eth_subscribe',
  params: ['newPendingTransactions']
}));`}
      />

      <CodeBlock
        title="Subscribe to Contract Logs"
        language="javascript"
        code={`// Subscribe to Transfer events on MRC20 contract
ws.send(JSON.stringify({
  jsonrpc: '2.0',
  id: 3,
  method: 'eth_subscribe',
  params: ['logs', {
    address: '0x0000000000000000000000000000000000001010',
    topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef']
  }]
}));`}
      />

      <Divider />

      {/* All Supported Methods */}
      <Heading level={2}>All Supported Methods</Heading>

      <Table
        headers={['Method', 'Description']}
        rows={[
          ['eth_chainId', 'Returns chain ID (0x55a for mainnet)'],
          ['eth_blockNumber', 'Current block number'],
          ['eth_getBalance', 'Address RAMA balance'],
          ['eth_getStorageAt', 'Contract storage at position'],
          ['eth_getTransactionCount', 'Nonce of address'],
          ['eth_getCode', 'Contract bytecode'],
          ['eth_getBlockByNumber', 'Block by number'],
          ['eth_getBlockByHash', 'Block by hash'],
          ['eth_getTransactionByHash', 'Transaction by hash'],
          ['eth_getTransactionByBlockHashAndIndex', 'Transaction by block hash and index'],
          ['eth_getTransactionByBlockNumberAndIndex', 'Transaction by block number and index'],
          ['eth_getTransactionReceipt', 'Transaction receipt'],
          ['eth_call', 'Contract read call'],
          ['eth_estimateGas', 'Estimate gas usage'],
          ['eth_sendRawTransaction', 'Send signed transaction'],
          ['eth_getLogs', 'Query event logs'],
          ['eth_gasPrice', 'Current gas price'],
          ['eth_feeHistory', 'Fee history for blocks'],
          ['eth_maxPriorityFeePerGas', 'Max priority fee'],
          ['eth_subscribe', 'WebSocket subscription'],
          ['eth_unsubscribe', 'Remove subscription'],
          ['bor_getAuthor', 'Block author/producer'],
          ['bor_getCurrentValidators', 'Current validator set'],
          ['bor_getCurrentProposer', 'Current proposer'],
          ['bor_getRootHash', 'Root hash for span'],
          ['net_version', 'Network ID'],
          ['net_listening', 'Is node listening'],
          ['net_peerCount', 'Number of peers'],
          ['web3_clientVersion', 'Client version'],
          ['web3_sha3', 'Keccak-256 hash'],
        ]}
      />

      <Divider />

      {/* Using with Libraries */}
      <Heading level={2}>Using with Libraries</Heading>

      <Heading level={3}>Ethers.js</Heading>
      <CodeBlock
        title="ethers-example.ts"
        language="typescript"
        code={`import { ethers } from 'ethers';

// Connect to Ramestta Mainnet
const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');

// Or use secondary RPC for load balancing
// const provider = new ethers.JsonRpcProvider('https://blockchain2.ramestta.com');

// Get network info
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId); // 1370n

// Get balance
const balance = await provider.getBalance('0x...');
console.log('Balance:', ethers.formatEther(balance), 'RAMA');

// Get block
const block = await provider.getBlock('latest');
console.log('Latest block:', block.number);`}
      />

      <Heading level={3}>Web3.js</Heading>
      <CodeBlock
        title="web3-example.js"
        language="javascript"
        code={`const Web3 = require('web3');

// Connect to Ramestta
const web3 = new Web3('https://blockchain.ramestta.com');

// Get chain ID
const chainId = await web3.eth.getChainId();
console.log('Chain ID:', chainId); // 1370

// Get balance
const balance = await web3.eth.getBalance('0x...');
console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'RAMA');

// Get gas price
const gasPrice = await web3.eth.getGasPrice();
console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');`}
      />

      <Divider />

      {/* Rate Limits & Best Practices */}
      <Heading level={2}>Rate Limits & Best Practices</Heading>

      <InfoBox type="warning" title="Public RPC Limits">
        Public RPC endpoints have rate limits to ensure fair usage:
        <ul className="mt-2 text-sm">
          <li>• ~100 requests per second per IP</li>
          <li>• WebSocket connections limited per IP</li>
          <li>• Large eth_getLogs queries may be rate limited</li>
        </ul>
      </InfoBox>

      <Heading level={3}>Best Practices</Heading>
      <List items={[
        'Use both primary and secondary RPC endpoints for redundancy',
        'Implement exponential backoff for retries',
        'Cache responses where appropriate (block data, receipts)',
        'Use WebSocket for real-time data instead of polling',
        'Consider running your own Bor node for production',
        'Use batch requests to reduce API calls',
      ]} />

      <InfoBox type="success" title="More Resources">
        <ul className="text-sm">
          <li>• <a href="https://www.ramascan.com/api-docs?tab=eth_rpc_api" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">RamaScan ETH RPC API Docs</a></li>
          <li>• <a href="https://docs.blockscout.com/for-users/api/eth-rpc" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Blockscout ETH RPC Reference</a></li>
          <li>• GitHub: <a href="https://github.com/ramestta" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">github.com/ramestta</a></li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default JsonRpcPage;
