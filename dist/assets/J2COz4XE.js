import{cU as e}from"./Cr10QW3C.js";import{H as t,B as n,P as a,T as o,I as c,D as r,a as s,L as i}from"./ASX-TiYY.js";const d=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"JSON-RPC API"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[e.jsx(n,{variant:"primary",children:"ETH RPC"}),e.jsx(n,{variant:"success",children:"EVM Compatible"}),e.jsx(n,{variant:"primary",children:"Blockscout v9.0.2"})]}),e.jsx(a,{children:"Ramestta supports the standard Ethereum JSON-RPC API, making it compatible with all Ethereum tools, libraries, and applications. The RPC is powered by Bor (Polygon fork) and fully compatible with Web3.js, Ethers.js, and all EVM tooling."}),e.jsx(t,{level:2,children:"RPC Endpoints"}),e.jsx(t,{level:3,children:"Mainnet (Chain ID: 1370)"}),e.jsx(o,{headers:["Type","URL"],rows:[["HTTP RPC (Primary)","https://blockchain.ramestta.com"],["HTTP RPC (Secondary)","https://blockchain2.ramestta.com"],["WebSocket","wss://blockchain.ramestta.com/ws"]]}),e.jsx(t,{level:3,children:"Testnet (Chain ID: 1371)"}),e.jsx(o,{headers:["Type","URL"],rows:[["HTTP RPC","https://testnet.ramestta.com"],["WebSocket","wss://testnet.ramestta.com/ws"]]}),e.jsxs(c,{type:"info",title:"Chain ID in Hex",children:["Mainnet: ",e.jsx("code",{children:"0x55a"})," (1370) | Testnet: ",e.jsx("code",{children:"0x55b"})," (1371)"]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Standard Ethereum Methods"}),e.jsxs(a,{children:["Ramestta supports all standard Ethereum JSON-RPC methods. See the"," ",e.jsx("a",{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"Ethereum JSON-RPC Specification"})," ","for complete details."]}),e.jsx(t,{level:3,children:"eth_chainId"}),e.jsx(a,{children:"Returns the chain ID of the network."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'`}),e.jsx(s,{title:"Response",language:"json",code:`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x55a"  // 1370 (Mainnet)
}`}),e.jsx(t,{level:3,children:"eth_blockNumber"}),e.jsx(a,{children:"Returns the current block number."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'`}),e.jsx(t,{level:3,children:"eth_getBalance"}),e.jsx(a,{children:"Returns the RAMA balance of an address in wei."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":["0x742d35Cc6634C0532925a3b844Bc9e7595f00000","latest"],
    "id":1
  }'`}),e.jsx(t,{level:3,children:"eth_gasPrice"}),e.jsx(a,{children:"Returns the current gas price in wei."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":1}'`}),e.jsx(t,{level:3,children:"eth_sendRawTransaction"}),e.jsx(a,{children:"Submits a signed transaction to the network."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_sendRawTransaction",
    "params":["0xf86c...signed_tx_data"],
    "id":1
  }'`}),e.jsx(t,{level:3,children:"eth_call"}),e.jsx(a,{children:"Executes a contract call without creating a transaction (read-only)."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_call",
    "params":[{
      "to":"0x0000000000000000000000000000000000001010",
      "data":"0x70a08231000000000000000000000000..."
    },"latest"],
    "id":1
  }'`}),e.jsx(t,{level:3,children:"eth_getTransactionReceipt"}),e.jsx(a,{children:"Returns the receipt of a transaction by hash."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_getTransactionReceipt",
    "params":["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],
    "id":1
  }'`}),e.jsx(t,{level:3,children:"eth_getLogs"}),e.jsx(a,{children:"Returns logs matching a filter (useful for querying events)."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
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
  }'`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Bor-Specific Methods"}),e.jsx(a,{children:"Ramestta runs Bor (a Polygon fork), which includes additional RPC methods for validator and block producer information."}),e.jsx(t,{level:3,children:"bor_getAuthor"}),e.jsx(a,{children:"Returns the author (block producer) of a block."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"bor_getAuthor",
    "params":["latest"],
    "id":1
  }'`}),e.jsx(t,{level:3,children:"bor_getCurrentValidators"}),e.jsx(a,{children:"Returns the current validator set."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"bor_getCurrentValidators","params":[],"id":1}'`}),e.jsx(t,{level:3,children:"bor_getCurrentProposer"}),e.jsx(a,{children:"Returns the current block proposer."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"bor_getCurrentProposer","params":[],"id":1}'`}),e.jsx(t,{level:3,children:"bor_getRootHash"}),e.jsx(a,{children:"Returns the root hash for a given span of blocks."}),e.jsx(s,{title:"Request",language:"bash",code:`curl -X POST https://blockchain.ramestta.com \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc":"2.0",
    "method":"bor_getRootHash",
    "params":[0, 1000],
    "id":1
  }'`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"WebSocket Subscriptions"}),e.jsx(s,{title:"Subscribe to New Blocks",language:"javascript",code:`const WebSocket = require('ws');
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
});`}),e.jsx(s,{title:"Subscribe to Pending Transactions",language:"javascript",code:`// Subscribe to pending transactions
ws.send(JSON.stringify({
  jsonrpc: '2.0',
  id: 2,
  method: 'eth_subscribe',
  params: ['newPendingTransactions']
}));`}),e.jsx(s,{title:"Subscribe to Contract Logs",language:"javascript",code:`// Subscribe to Transfer events on MRC20 contract
ws.send(JSON.stringify({
  jsonrpc: '2.0',
  id: 3,
  method: 'eth_subscribe',
  params: ['logs', {
    address: '0x0000000000000000000000000000000000001010',
    topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef']
  }]
}));`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"All Supported Methods"}),e.jsx(o,{headers:["Method","Description"],rows:[["eth_chainId","Returns chain ID (0x55a for mainnet)"],["eth_blockNumber","Current block number"],["eth_getBalance","Address RAMA balance"],["eth_getStorageAt","Contract storage at position"],["eth_getTransactionCount","Nonce of address"],["eth_getCode","Contract bytecode"],["eth_getBlockByNumber","Block by number"],["eth_getBlockByHash","Block by hash"],["eth_getTransactionByHash","Transaction by hash"],["eth_getTransactionByBlockHashAndIndex","Transaction by block hash and index"],["eth_getTransactionByBlockNumberAndIndex","Transaction by block number and index"],["eth_getTransactionReceipt","Transaction receipt"],["eth_call","Contract read call"],["eth_estimateGas","Estimate gas usage"],["eth_sendRawTransaction","Send signed transaction"],["eth_getLogs","Query event logs"],["eth_gasPrice","Current gas price"],["eth_feeHistory","Fee history for blocks"],["eth_maxPriorityFeePerGas","Max priority fee"],["eth_subscribe","WebSocket subscription"],["eth_unsubscribe","Remove subscription"],["bor_getAuthor","Block author/producer"],["bor_getCurrentValidators","Current validator set"],["bor_getCurrentProposer","Current proposer"],["bor_getRootHash","Root hash for span"],["net_version","Network ID"],["net_listening","Is node listening"],["net_peerCount","Number of peers"],["web3_clientVersion","Client version"],["web3_sha3","Keccak-256 hash"]]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Using with Libraries"}),e.jsx(t,{level:3,children:"Ethers.js"}),e.jsx(s,{title:"ethers-example.ts",language:"typescript",code:`import { ethers } from 'ethers';

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
console.log('Latest block:', block.number);`}),e.jsx(t,{level:3,children:"Web3.js"}),e.jsx(s,{title:"web3-example.js",language:"javascript",code:`const Web3 = require('web3');

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
console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Rate Limits & Best Practices"}),e.jsxs(c,{type:"warning",title:"Public RPC Limits",children:["Public RPC endpoints have rate limits to ensure fair usage:",e.jsxs("ul",{className:"mt-2 text-sm",children:[e.jsx("li",{children:"• ~100 requests per second per IP"}),e.jsx("li",{children:"• WebSocket connections limited per IP"}),e.jsx("li",{children:"• Large eth_getLogs queries may be rate limited"})]})]}),e.jsx(t,{level:3,children:"Best Practices"}),e.jsx(i,{items:["Use both primary and secondary RPC endpoints for redundancy","Implement exponential backoff for retries","Cache responses where appropriate (block data, receipts)","Use WebSocket for real-time data instead of polling","Consider running your own Bor node for production","Use batch requests to reduce API calls"]}),e.jsx(c,{type:"success",title:"More Resources",children:e.jsxs("ul",{className:"text-sm",children:[e.jsxs("li",{children:["• ",e.jsx("a",{href:"https://www.ramascan.com/api-docs?tab=eth_rpc_api",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"RamaScan ETH RPC API Docs"})]}),e.jsxs("li",{children:["• ",e.jsx("a",{href:"https://docs.blockscout.com/for-users/api/eth-rpc",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"Blockscout ETH RPC Reference"})]}),e.jsxs("li",{children:["• GitHub: ",e.jsx("a",{href:"https://github.com/ramestta",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"github.com/ramestta"})]})]})})]});export{d as default};
