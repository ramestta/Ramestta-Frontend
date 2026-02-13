import{cU as e}from"./D5Je1u5Y.js";import{H as a,B as c,P as n,T as i,G as l,C as r,D as s,a as t,I as o}from"./D_XxTxHm.js";const u=()=>e.jsxs("div",{children:[e.jsx(a,{level:1,children:"REST API (Blockscout)"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[e.jsx(c,{variant:"primary",children:"Blockscout v9.0.2"}),e.jsx(c,{variant:"success",children:"GraphQL Support"}),e.jsx(c,{variant:"primary",children:"Etherscan Compatible"})]}),e.jsx(n,{children:"RamaScan provides a comprehensive REST API powered by Blockscout. It offers Etherscan-compatible endpoints for easy migration, plus additional Blockscout-specific APIs for advanced querying."}),e.jsx(a,{level:2,children:"Base URLs"}),e.jsx(i,{headers:["Environment","Base URL","Explorer"],rows:[["Mainnet","https://www.ramascan.com/api","https://www.ramascan.com"],["Testnet","https://testbackendapi.ramascan.com","https://pingaksha.ramascan.com"]]}),e.jsx(a,{level:3,children:"API Documentation"}),e.jsxs(l,{cols:2,children:[e.jsx(r,{icon:"📚",title:"REST API",children:e.jsx("a",{href:"https://www.ramascan.com/api-docs?tab=rest_api",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline text-sm",children:"ramascan.com/api-docs?tab=rest_api"})}),e.jsx(r,{icon:"🔷",title:"ETH RPC API",children:e.jsx("a",{href:"https://www.ramascan.com/api-docs?tab=eth_rpc_api",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline text-sm",children:"ramascan.com/api-docs?tab=eth_rpc_api"})}),e.jsx(r,{icon:"🔗",title:"GraphQL API",children:e.jsx("a",{href:"https://www.ramascan.com/graphiql",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline text-sm",children:"ramascan.com/graphiql"})}),e.jsx(r,{icon:"📊",title:"Stats API",children:e.jsx("a",{href:"https://www.ramascan.com/api-docs",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline text-sm",children:"ramascan.com/api-docs"})})]}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Authentication"}),e.jsx(n,{children:"Most endpoints are public. For higher rate limits, include an API key:"}),e.jsx(t,{title:"API Key Header",language:"bash",code:'curl -H "X-API-KEY: your_api_key" "https://www.ramascan.com/api?module=account&action=balance&address=0x..."'}),e.jsxs(o,{type:"info",title:"Rate Limits",children:[e.jsx("strong",{children:"Without API key:"})," 5 requests/second, 1000/day",e.jsx("br",{}),e.jsx("strong",{children:"With API key:"})," 20 requests/second, 100000/day",e.jsx("br",{}),"Get an API key at ",e.jsx("a",{href:"https://www.ramascan.com/account/api-key",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"ramascan.com/account/api-key"})]}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Account Endpoints"}),e.jsx(a,{level:3,children:"Get RAMA Balance"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=balance&address=0x...&tag=latest"}),e.jsx(t,{title:"Response",language:"json",code:`{
  "status": "1",
  "message": "OK",
  "result": "1000000000000000000"  // Balance in wei
}`}),e.jsx(a,{level:3,children:"Get Multiple Balances"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=balancemulti&address=0x...,0x...,0x...&tag=latest"}),e.jsx(a,{level:3,children:"Get Transaction List"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=txlist&address=0x...&startblock=0&endblock=99999999&sort=desc&page=1&offset=10"}),e.jsx(t,{title:"Response",language:"json",code:`{
  "status": "1",
  "message": "OK",
  "result": [
    {
      "blockNumber": "1234567",
      "timeStamp": "1706300000",
      "hash": "0x...",
      "from": "0x...",
      "to": "0x...",
      "value": "1000000000000000000",
      "gas": "21000",
      "gasPrice": "1000000000",
      "gasUsed": "21000",
      "isError": "0",
      "txreceipt_status": "1"
    }
  ]
}`}),e.jsx(a,{level:3,children:"Get Internal Transactions"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=txlistinternal&address=0x..."}),e.jsx(a,{level:3,children:"Get Token Transfers (ERC20)"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=tokentx&address=0x...&contractaddress=0x..."}),e.jsx(a,{level:3,children:"Get NFT Transfers (ERC721)"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=account&action=tokennfttx&address=0x..."}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Contract Endpoints"}),e.jsx(a,{level:3,children:"Get Contract ABI"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=contract&action=getabi&address=0x..."}),e.jsx(a,{level:3,children:"Get Contract Source Code"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=contract&action=getsourcecode&address=0x..."}),e.jsx(a,{level:3,children:"Verify Contract (Standard JSON Input)"}),e.jsx(t,{title:"Request",language:"bash",code:`POST https://www.ramascan.com/api?module=contract&action=verifysourcecode
Content-Type: application/x-www-form-urlencoded

contractaddress=0x...
sourceCode={"language":"Solidity","sources":...}
codeformat=solidity-standard-json-input
contractname=contracts/MyContract.sol:MyContract
compilerversion=v0.8.20+commit.a1b79de6
constructorArguements=0x...`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Contract Verification (Hardhat)"}),e.jsx(n,{children:"The recommended way to verify contracts is using Hardhat with the hardhat-verify plugin."}),e.jsx(a,{level:3,children:"Hardhat Configuration"}),e.jsx(t,{title:"hardhat.config.js",language:"javascript",code:`require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');

module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    ramestta: {
      url: 'https://blockchain.ramestta.com',
      chainId: 1370,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    ramesttaTestnet: {
      url: 'https://testnet.ramestta.com',
      chainId: 1371,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: {
      ramestta: 'abc', // Any string works for Blockscout
      ramesttaTestnet: 'abc'
    },
    customChains: [
      {
        network: 'ramestta',
        chainId: 1370,
        urls: {
          apiURL: 'https://www.ramascan.com/api',
          browserURL: 'https://www.ramascan.com'
        }
      },
      {
        network: 'ramesttaTestnet',
        chainId: 1371,
        urls: {
          apiURL: 'https://testbackendapi.ramascan.com',
          browserURL: 'https://pingaksha.ramascan.com'
        }
      }
    ]
  }
};`}),e.jsx(a,{level:3,children:"Verify Command"}),e.jsx(t,{title:"Terminal",language:"bash",code:`# Verify a contract
npx hardhat verify --network ramestta CONTRACT_ADDRESS "Constructor Arg 1" "Arg 2"

# Example
npx hardhat verify --network ramestta 0x1234567890abcdef... "MyToken" "MTK" "1000000000000000000000000"`}),e.jsx(o,{type:"info",title:"Blockscout API Key",children:`Blockscout doesn't require a real API key. You can use any string (like "abc") as the API key in the config.`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Transaction Endpoints"}),e.jsx(a,{level:3,children:"Get Transaction Status"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=transaction&action=gettxreceiptstatus&txhash=0x..."}),e.jsx(t,{title:"Response",language:"json",code:`{
  "status": "1",
  "message": "OK",
  "result": {
    "status": "1"  // 1 = success, 0 = failed
  }
}`}),e.jsx(a,{level:3,children:"Get Transaction Info"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=transaction&action=gettxinfo&txhash=0x..."}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Block Endpoints"}),e.jsx(a,{level:3,children:"Get Block Reward"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=block&action=getblockreward&blockno=1234567"}),e.jsx(a,{level:3,children:"Get Block Countdown"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=block&action=getblockcountdown&blockno=9999999"}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Token Endpoints"}),e.jsx(a,{level:3,children:"Get Token Info"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=token&action=getToken&contractaddress=0x..."}),e.jsx(a,{level:3,children:"Get Token Holders"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=token&action=getTokenHolders&contractaddress=0x...&page=1&offset=100"}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Stats Endpoints"}),e.jsx(a,{level:3,children:"Get Total Supply"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=stats&action=coinsupply"}),e.jsx(a,{level:3,children:"Get RAMA Price"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api?module=stats&action=coinprice"}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Blockscout v2 API"}),e.jsx(n,{children:"Blockscout also provides a modern REST API with more endpoints:"}),e.jsx(a,{level:3,children:"Get Address Info"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/addresses/0x..."}),e.jsx(a,{level:3,children:"Get Address Transactions"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/addresses/0x.../transactions"}),e.jsx(a,{level:3,children:"Get Address Token Balances"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/addresses/0x.../token-balances"}),e.jsx(a,{level:3,children:"Get Block Info"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/blocks/1234567"}),e.jsx(a,{level:3,children:"Get Transaction Info"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/transactions/0x..."}),e.jsx(a,{level:3,children:"Search"}),e.jsx(t,{title:"Request",language:"bash",code:"GET https://www.ramascan.com/api/v2/search?q=0x..."}),e.jsx(s,{}),e.jsx(a,{level:2,children:"GraphQL API"}),e.jsx(n,{children:"For complex queries, use the GraphQL endpoint:"}),e.jsx(t,{title:"GraphQL Query",language:"graphql",code:`# Endpoint: https://www.ramascan.com/graphiql

query {
  address(hash: "0x...") {
    hash
    fetchedCoinBalance
    fetchedCoinBalanceBlockNumber
    contractCode
    smartContract {
      name
      compilerVersion
      optimization
    }
  }
  
  transaction(hash: "0x...") {
    hash
    blockNumber
    fromAddressHash
    toAddressHash
    value
    gas
    gasPrice
    gasUsed
    status
  }
}`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"JavaScript Examples"}),e.jsx(t,{title:"Using Fetch API",language:"typescript",code:`const BASE_URL = 'https://www.ramascan.com/api';

// Get balance
async function getBalance(address: string): Promise<string> {
  const response = await fetch(
    \`\${BASE_URL}?module=account&action=balance&address=\${address}&tag=latest\`
  );
  const data = await response.json();
  
  if (data.status !== '1') {
    throw new Error(data.message);
  }
  
  return data.result; // Balance in wei
}

// Get transactions
async function getTransactions(address: string, page = 1): Promise<any[]> {
  const response = await fetch(
    \`\${BASE_URL}?module=account&action=txlist&address=\${address}&sort=desc&page=\${page}&offset=25\`
  );
  const data = await response.json();
  
  return data.result || [];
}

// Get contract ABI
async function getContractABI(address: string): Promise<any> {
  const response = await fetch(
    \`\${BASE_URL}?module=contract&action=getabi&address=\${address}\`
  );
  const data = await response.json();
  
  if (data.status !== '1') {
    throw new Error('Contract not verified or ABI not available');
  }
  
  return JSON.parse(data.result);
}

// Usage
const balance = await getBalance('0x...');
const txs = await getTransactions('0x...');
const abi = await getContractABI('0x...');`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Endpoint Summary"}),e.jsx(i,{headers:["Module","Action","Description"],rows:[["account","balance","Get single address balance"],["account","balancemulti","Get multiple address balances"],["account","txlist","Get transaction list"],["account","txlistinternal","Get internal transactions"],["account","tokentx","Get ERC20 token transfers"],["account","tokennfttx","Get ERC721 NFT transfers"],["account","tokenbalance","Get token balance for address"],["contract","getabi","Get contract ABI"],["contract","getsourcecode","Get verified source code"],["contract","verifysourcecode","Verify contract"],["transaction","gettxreceiptstatus","Get tx receipt status"],["transaction","gettxinfo","Get transaction details"],["block","getblockreward","Get block reward info"],["block","getblockcountdown","Get countdown to block"],["token","getToken","Get token information"],["token","getTokenHolders","Get token holders"],["stats","coinsupply","Get total RAMA supply"],["stats","coinprice","Get RAMA price"]]}),e.jsx(o,{type:"success",title:"More Resources",children:e.jsxs("ul",{className:"text-sm",children:[e.jsxs("li",{children:["• ",e.jsx("a",{href:"https://www.ramascan.com/api-docs",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"RamaScan API Documentation"})]}),e.jsxs("li",{children:["• ",e.jsx("a",{href:"https://docs.blockscout.com/",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"Blockscout Documentation"})]}),e.jsxs("li",{children:["• GitHub: ",e.jsx("a",{href:"https://github.com/ramestta",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"github.com/ramestta"})]})]})})]});export{u as default};
