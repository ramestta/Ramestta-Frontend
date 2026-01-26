import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge } from '../../components/DocsComponents';

const ContractAddressesPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Contract Addresses</Heading>
      
      <Paragraph>
        This page lists all official smart contract addresses deployed on Ramestta Mainnet 
        and Pingaksha Testnet. Always verify contract addresses before interacting with them.
      </Paragraph>

      <InfoBox type="warning" title="Security Notice">
        Only interact with official contracts listed here. Verify addresses on RamaScan 
        before sending any transactions. Scammers may deploy fake contracts with similar names.
      </InfoBox>

      <Heading level={2}>Mainnet Contracts</Heading>
      
      <Badge variant="success">Chain ID: 21190</Badge>

      <Heading level={3}>Core Contracts</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010', 'Native RAMA token (system contract)'],
          ['WRAMA', '0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee', 'Wrapped RAMA (ERC-20)'],
          ['Root Chain', '0x28e4F3a7f651294B9564800b2D01f35189A5bFbE', 'Root chain manager'],
          ['State Sender', '0x...', 'State sync sender'],
        ]}
      />

      <Heading level={3}>Staking Contracts</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['Staking Manager', '0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908', 'Validator staking manager'],
          ['Staking NFT', '0x...', 'Validator position NFT'],
          ['Stake Registry', '0x...', 'Registry of all stakes'],
          ['Delegation', '0x...', 'Delegation manager'],
        ]}
      />

      <Heading level={3}>Bridge Contracts</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['Deposit Manager', '0x...', 'Handles deposits from Polygon'],
          ['Withdraw Manager', '0x...', 'Handles withdrawals to Polygon'],
          ['ERC20 Predicate', '0x...', 'ERC-20 token bridge'],
          ['ERC721 Predicate', '0x...', 'NFT bridge (ERC-721)'],
          ['ERC1155 Predicate', '0x...', 'Multi-token bridge'],
        ]}
      />

      <Heading level={3}>DeFi Contracts</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RamaSwap Router', '0x...', 'DEX router for swaps'],
          ['RamaSwap Factory', '0x...', 'LP pair factory'],
          ['RAMA-USDT LP', '0x...', 'RAMA/USDT liquidity pool'],
        ]}
      />

      <Divider />

      <Heading level={2}>Testnet Contracts</Heading>
      
      <Badge variant="warning">Chain ID: 21191</Badge>

      <Paragraph>
        Testnet contracts mirror mainnet functionality but use test tokens with no real value.
      </Paragraph>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010', 'Native test RAMA'],
          ['Test WRAMA', '0x...testnet', 'Wrapped test RAMA'],
          ['Test Staking', '0x...testnet', 'Test staking manager'],
          ['Test Bridge', '0x...testnet', 'Test bridge deposit'],
        ]}
      />

      <InfoBox type="info" title="Getting Testnet Tokens">
        Get free test RAMA tokens from the faucet at{' '}
        <a href="https://faucet.ramestta.com" target="_blank" rel="noopener noreferrer" className="text-primary">
          faucet.ramestta.com
        </a>
      </InfoBox>

      <Divider />

      <Heading level={2}>Interacting with Contracts</Heading>

      <Heading level={3}>Using ethers.js</Heading>

      <CodeBlock
        code={`import { ethers } from 'ethers';

// WRAMA contract
const WRAMA_ADDRESS = '0x6a7a08d36AdC8c58D21E5A61E9BAEaE6C0A8F7Ee';
const WRAMA_ABI = [
  'function deposit() payable',
  'function withdraw(uint256 amount)',
  'function balanceOf(address) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
];

const provider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');
const wrama = new ethers.Contract(WRAMA_ADDRESS, WRAMA_ABI, provider);

// Check balance
const balance = await wrama.balanceOf(userAddress);
console.log('WRAMA Balance:', ethers.formatEther(balance));`}
        language="typescript"
        title="interact-with-contracts.ts"
      />

      <Heading level={3}>Contract Verification</Heading>

      <Paragraph>
        All official contracts are verified on RamaScan. You can:
      </Paragraph>

      <List
        items={[
          'View source code and ABI',
          'Read contract state',
          'Write to contracts (with connected wallet)',
          'Verify your own contracts'
        ]}
      />

      <Heading level={2}>Verifying Your Contracts</Heading>

      <Paragraph>
        To verify your deployed contracts on RamaScan:
      </Paragraph>

      <CodeBlock
        code={`# Using Hardhat
npx hardhat verify --network ramestta CONTRACT_ADDRESS "Constructor" "Arguments"

# Using Foundry
forge verify-contract \\
  --chain-id 21190 \\
  --compiler-version v0.8.19 \\
  CONTRACT_ADDRESS \\
  src/MyContract.sol:MyContract`}
        language="bash"
        title="verify-contract.sh"
      />

      <Heading level={2}>Official Resources</Heading>

      <Grid cols={3}>
        <Card icon="🔍" title="RamaScan">
          <a href="https://ramascan.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
            Block Explorer →
          </a>
        </Card>
        <Card icon="🐙" title="GitHub">
          <a href="https://github.com/AamirAlam/ramestta-contracts" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
            Contract Source →
          </a>
        </Card>
        <Card icon="📝" title="Audits">
          <span className="text-gray-400 text-sm">Coming soon</span>
        </Card>
      </Grid>
    </div>
  );
};

export default ContractAddressesPage;
