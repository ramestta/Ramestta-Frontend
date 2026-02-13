import{cU as e}from"./RZk19cD8.js";import{H as t,P as r,T as s,D as a,a as n,I as o,L as i}from"./D1yRkveG.js";const b=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"RPC Endpoints"}),e.jsx(r,{children:"Ramestta provides multiple RPC (Remote Procedure Call) endpoints for interacting with the blockchain. These endpoints support standard Ethereum JSON-RPC methods and are compatible with all major web3 libraries."}),e.jsx(t,{level:2,children:"Mainnet Endpoints"}),e.jsx(t,{level:3,children:"HTTP Endpoints"}),e.jsx(s,{headers:["Endpoint","URL","Status"],rows:[["Primary","https://blockchain.ramestta.com","✅ Active"],["Secondary","https://blockchain2.ramestta.com","✅ Active"]]}),e.jsx(t,{level:3,children:"WebSocket Endpoints"}),e.jsx(s,{headers:["Endpoint","URL","Use Case"],rows:[["Primary WS","wss://blockchain.ramestta.com/ws","Real-time subscriptions"]]}),e.jsx(t,{level:2,children:"Testnet Endpoints"}),e.jsx(s,{headers:["Type","URL"],rows:[["HTTP RPC","https://testnet.ramestta.com"],["WebSocket","wss://testnet.ramestta.com/ws"],["Block Explorer","https://pingaksha.ramascan.com"],["Backend API","https://testbackendapi.ramascan.com"],["Faucet","https://testnet-faucet.ramascan.com"]]}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Making RPC Calls"}),e.jsx(t,{level:3,children:"Using cURL"}),e.jsx(n,{code:`# Get current block number
curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

# Response: {"jsonrpc":"2.0","id":1,"result":"0x1a2b3c"}`,language:"bash",title:"curl-example.sh"}),e.jsx(t,{level:3,children:"Batch Requests"}),e.jsx(r,{children:"For efficiency, you can batch multiple RPC calls into a single HTTP request:"}),e.jsx(n,{code:`// Batch multiple requests for efficiency
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
};`,language:"typescript",title:"batch-request.ts"}),e.jsx(t,{level:3,children:"WebSocket Subscriptions"}),e.jsx(r,{children:"Use WebSocket connections for real-time updates:"}),e.jsx(n,{code:`import { ethers } from 'ethers';

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
});`,language:"typescript",title:"websocket.ts"}),e.jsx(a,{}),e.jsx(t,{level:2,children:"High Availability Setup"}),e.jsx(r,{children:"For production applications, implement fallback providers:"}),e.jsx(n,{code:`import { ethers } from 'ethers';

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
const balance = await provider.getBalance(address);`,language:"typescript",title:"fallback-provider.ts"}),e.jsx(o,{type:"info",title:"Best Practice",children:"Always implement retry logic and fallback endpoints in production applications. Network issues can occur, and having backup endpoints ensures your dApp remains functional."}),e.jsx(t,{level:2,children:"API Key Authentication"}),e.jsx(r,{children:"If using a premium RPC service that requires authentication:"}),e.jsx(n,{code:`// Add custom headers for API key authentication (if required)
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
};`,language:"typescript",title:"authenticated-rpc.ts"}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Supported Methods"}),e.jsx(r,{children:"Ramestta RPC endpoints support all standard Ethereum JSON-RPC methods:"}),e.jsx(t,{level:3,children:"Chain Methods"}),e.jsx(s,{headers:["Method","Description"],rows:[["eth_chainId","Returns the chain ID"],["eth_blockNumber","Returns current block number"],["eth_gasPrice","Returns current gas price"],["eth_feeHistory","Returns historical gas data"],["net_version","Returns network ID"]]}),e.jsx(t,{level:3,children:"Account Methods"}),e.jsx(s,{headers:["Method","Description"],rows:[["eth_getBalance","Returns account balance"],["eth_getCode","Returns contract code"],["eth_getTransactionCount","Returns nonce"],["eth_getStorageAt","Returns storage value"]]}),e.jsx(t,{level:3,children:"Transaction Methods"}),e.jsx(s,{headers:["Method","Description"],rows:[["eth_sendRawTransaction","Submit signed transaction"],["eth_getTransactionByHash","Get transaction by hash"],["eth_getTransactionReceipt","Get transaction receipt"],["eth_estimateGas","Estimate gas for transaction"],["eth_call","Execute contract call (read-only)"]]}),e.jsx(t,{level:3,children:"Block Methods"}),e.jsx(s,{headers:["Method","Description"],rows:[["eth_getBlockByNumber","Get block by number"],["eth_getBlockByHash","Get block by hash"],["eth_getBlockTransactionCountByNumber","Transaction count in block"]]}),e.jsx(t,{level:3,children:"Log Methods"}),e.jsx(s,{headers:["Method","Description"],rows:[["eth_getLogs","Get logs matching filter"],["eth_newFilter","Create new log filter"],["eth_getFilterChanges","Poll filter for changes"],["eth_uninstallFilter","Remove filter"]]}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Rate Limits"}),e.jsx(o,{type:"warning",title:"Rate Limiting",children:"Public endpoints may have rate limits during high traffic. For high-volume applications, consider running your own node or using a premium RPC service."}),e.jsx(s,{headers:["Endpoint Type","Rate Limit"],rows:[["Public HTTP","100 requests/second"],["Public WebSocket","50 subscriptions"],["Premium","Unlimited"]]}),e.jsx(t,{level:2,children:"Troubleshooting"}),e.jsx(i,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Connection refused:"})," Check your internet connection and firewall settings"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Rate limited:"})," Implement exponential backoff or use multiple endpoints"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Invalid response:"})," Verify the RPC method and parameters are correct"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Timeout:"})," Increase timeout settings or try a different endpoint"]})]})]});export{b as default};
