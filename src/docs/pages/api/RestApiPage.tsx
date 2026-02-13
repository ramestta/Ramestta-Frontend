import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge, Card, Grid } from '../../components/DocsComponents';

const RestApiPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>REST API (Blockscout)</Heading>
      
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="primary">Blockscout v9.0.2</Badge>
        <Badge variant="success">GraphQL Support</Badge>
        <Badge variant="primary">Etherscan Compatible</Badge>
      </div>

      <Paragraph>
        RamaScan provides a comprehensive REST API powered by Blockscout. It offers Etherscan-compatible 
        endpoints for easy migration, plus additional Blockscout-specific APIs for advanced querying.
      </Paragraph>

      {/* Base URLs */}
      <Heading level={2}>Base URLs</Heading>

      <Table
        headers={['Environment', 'Base URL', 'Explorer']}
        rows={[
          ['Mainnet', 'https://www.ramascan.com/api', 'https://www.ramascan.com'],
          ['Testnet', 'https://testbackendapi.ramascan.com', 'https://pingaksha.ramascan.com'],
        ]}
      />

      <Heading level={3}>API Documentation</Heading>
      <Grid cols={2}>
        <Card icon="📚" title="REST API">
          <a href="https://www.ramascan.com/api-docs?tab=rest_api" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm">
            ramascan.com/api-docs?tab=rest_api
          </a>
        </Card>
        <Card icon="🔷" title="ETH RPC API">
          <a href="https://www.ramascan.com/api-docs?tab=eth_rpc_api" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm">
            ramascan.com/api-docs?tab=eth_rpc_api
          </a>
        </Card>
        <Card icon="🔗" title="GraphQL API">
          <a href="https://www.ramascan.com/graphiql" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm">
            ramascan.com/graphiql
          </a>
        </Card>
        <Card icon="📊" title="Stats API">
          <a href="https://www.ramascan.com/api-docs" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm">
            ramascan.com/api-docs
          </a>
        </Card>
      </Grid>

      <Divider />

      {/* Authentication */}
      <Heading level={2}>Authentication</Heading>

      <Paragraph>
        Most endpoints are public. For higher rate limits, include an API key:
      </Paragraph>

      <CodeBlock
        title="API Key Header"
        language="bash"
        code={`curl -H "X-API-KEY: your_api_key" "https://www.ramascan.com/api?module=account&action=balance&address=0x..."`}
      />

      <InfoBox type="info" title="Rate Limits">
        <strong>Without API key:</strong> 5 requests/second, 1000/day<br/>
        <strong>With API key:</strong> 20 requests/second, 100000/day<br/>
        Get an API key at <a href="https://www.ramascan.com/account/api-key" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">ramascan.com/account/api-key</a>
      </InfoBox>

      <Divider />

      {/* Account Endpoints */}
      <Heading level={2}>Account Endpoints</Heading>

      <Heading level={3}>Get RAMA Balance</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=balance&address=0x...&tag=latest`}
      />

      <CodeBlock
        title="Response"
        language="json"
        code={`{
  "status": "1",
  "message": "OK",
  "result": "1000000000000000000"  // Balance in wei
}`}
      />

      <Heading level={3}>Get Multiple Balances</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=balancemulti&address=0x...,0x...,0x...&tag=latest`}
      />

      <Heading level={3}>Get Transaction List</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=txlist&address=0x...&startblock=0&endblock=99999999&sort=desc&page=1&offset=10`}
      />

      <CodeBlock
        title="Response"
        language="json"
        code={`{
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
}`}
      />

      <Heading level={3}>Get Internal Transactions</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=txlistinternal&address=0x...`}
      />

      <Heading level={3}>Get Token Transfers (ERC20)</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=tokentx&address=0x...&contractaddress=0x...`}
      />

      <Heading level={3}>Get NFT Transfers (ERC721)</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=account&action=tokennfttx&address=0x...`}
      />

      <Divider />

      {/* Contract Endpoints */}
      <Heading level={2}>Contract Endpoints</Heading>

      <Heading level={3}>Get Contract ABI</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=contract&action=getabi&address=0x...`}
      />

      <Heading level={3}>Get Contract Source Code</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=contract&action=getsourcecode&address=0x...`}
      />

      <Heading level={3}>Verify Contract (Standard JSON Input)</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`POST https://www.ramascan.com/api?module=contract&action=verifysourcecode
Content-Type: application/x-www-form-urlencoded

contractaddress=0x...
sourceCode={"language":"Solidity","sources":...}
codeformat=solidity-standard-json-input
contractname=contracts/MyContract.sol:MyContract
compilerversion=v0.8.20+commit.a1b79de6
constructorArguements=0x...`}
      />

      <Divider />

      {/* Contract Verification with Hardhat */}
      <Heading level={2}>Contract Verification (Hardhat)</Heading>

      <Paragraph>
        The recommended way to verify contracts is using Hardhat with the hardhat-verify plugin.
      </Paragraph>

      <Heading level={3}>Hardhat Configuration</Heading>

      <CodeBlock
        title="hardhat.config.js"
        language="javascript"
        code={`require('dotenv').config();
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
};`}
      />

      <Heading level={3}>Verify Command</Heading>

      <CodeBlock
        title="Terminal"
        language="bash"
        code={`# Verify a contract
npx hardhat verify --network ramestta CONTRACT_ADDRESS "Constructor Arg 1" "Arg 2"

# Example
npx hardhat verify --network ramestta 0x1234567890abcdef... "MyToken" "MTK" "1000000000000000000000000"`}
      />

      <InfoBox type="info" title="Blockscout API Key">
        Blockscout doesn't require a real API key. You can use any string (like "abc") as the API key in the config.
      </InfoBox>

      <Divider />

      {/* Transaction Endpoints */}
      <Heading level={2}>Transaction Endpoints</Heading>

      <Heading level={3}>Get Transaction Status</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=transaction&action=gettxreceiptstatus&txhash=0x...`}
      />

      <CodeBlock
        title="Response"
        language="json"
        code={`{
  "status": "1",
  "message": "OK",
  "result": {
    "status": "1"  // 1 = success, 0 = failed
  }
}`}
      />

      <Heading level={3}>Get Transaction Info</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=transaction&action=gettxinfo&txhash=0x...`}
      />

      <Divider />

      {/* Block Endpoints */}
      <Heading level={2}>Block Endpoints</Heading>

      <Heading level={3}>Get Block Reward</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=block&action=getblockreward&blockno=1234567`}
      />

      <Heading level={3}>Get Block Countdown</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=block&action=getblockcountdown&blockno=9999999`}
      />

      <Divider />

      {/* Token Endpoints */}
      <Heading level={2}>Token Endpoints</Heading>

      <Heading level={3}>Get Token Info</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=token&action=getToken&contractaddress=0x...`}
      />

      <Heading level={3}>Get Token Holders</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=token&action=getTokenHolders&contractaddress=0x...&page=1&offset=100`}
      />

      <Divider />

      {/* Stats Endpoints */}
      <Heading level={2}>Stats Endpoints</Heading>

      <Heading level={3}>Get Total Supply</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=stats&action=coinsupply`}
      />

      <Heading level={3}>Get RAMA Price</Heading>

      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api?module=stats&action=coinprice`}
      />

      <Divider />

      {/* Blockscout v2 API */}
      <Heading level={2}>Blockscout v2 API</Heading>

      <Paragraph>
        Blockscout also provides a modern REST API with more endpoints:
      </Paragraph>

      <Heading level={3}>Get Address Info</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/addresses/0x...`}
      />

      <Heading level={3}>Get Address Transactions</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/addresses/0x.../transactions`}
      />

      <Heading level={3}>Get Address Token Balances</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/addresses/0x.../token-balances`}
      />

      <Heading level={3}>Get Block Info</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/blocks/1234567`}
      />

      <Heading level={3}>Get Transaction Info</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/transactions/0x...`}
      />

      <Heading level={3}>Search</Heading>
      <CodeBlock
        title="Request"
        language="bash"
        code={`GET https://www.ramascan.com/api/v2/search?q=0x...`}
      />

      <Divider />

      {/* GraphQL API */}
      <Heading level={2}>GraphQL API</Heading>

      <Paragraph>
        For complex queries, use the GraphQL endpoint:
      </Paragraph>

      <CodeBlock
        title="GraphQL Query"
        language="graphql"
        code={`# Endpoint: https://www.ramascan.com/graphiql

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
}`}
      />

      <Divider />

      {/* JavaScript SDK */}
      <Heading level={2}>JavaScript Examples</Heading>

      <CodeBlock
        title="Using Fetch API"
        language="typescript"
        code={`const BASE_URL = 'https://www.ramascan.com/api';

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
const abi = await getContractABI('0x...');`}
      />

      <Divider />

      {/* All Endpoints Summary */}
      <Heading level={2}>Endpoint Summary</Heading>

      <Table
        headers={['Module', 'Action', 'Description']}
        rows={[
          ['account', 'balance', 'Get single address balance'],
          ['account', 'balancemulti', 'Get multiple address balances'],
          ['account', 'txlist', 'Get transaction list'],
          ['account', 'txlistinternal', 'Get internal transactions'],
          ['account', 'tokentx', 'Get ERC20 token transfers'],
          ['account', 'tokennfttx', 'Get ERC721 NFT transfers'],
          ['account', 'tokenbalance', 'Get token balance for address'],
          ['contract', 'getabi', 'Get contract ABI'],
          ['contract', 'getsourcecode', 'Get verified source code'],
          ['contract', 'verifysourcecode', 'Verify contract'],
          ['transaction', 'gettxreceiptstatus', 'Get tx receipt status'],
          ['transaction', 'gettxinfo', 'Get transaction details'],
          ['block', 'getblockreward', 'Get block reward info'],
          ['block', 'getblockcountdown', 'Get countdown to block'],
          ['token', 'getToken', 'Get token information'],
          ['token', 'getTokenHolders', 'Get token holders'],
          ['stats', 'coinsupply', 'Get total RAMA supply'],
          ['stats', 'coinprice', 'Get RAMA price'],
        ]}
      />

      <InfoBox type="success" title="More Resources">
        <ul className="text-sm">
          <li>• <a href="https://www.ramascan.com/api-docs" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">RamaScan API Documentation</a></li>
          <li>• <a href="https://docs.blockscout.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Blockscout Documentation</a></li>
          <li>• GitHub: <a href="https://github.com/ramestta" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">github.com/ramestta</a></li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default RestApiPage;
