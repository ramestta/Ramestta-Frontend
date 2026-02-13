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

      <Heading level={2}>Mainnet Contracts (Ramestta)</Heading>
      
      <Badge variant="success">Chain ID: 1370</Badge>

      <Heading level={3}>Core Contracts</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010', 'Native RAMA token (system contract)'],
          ['WRAMA', '0x27d20dE66C83d5CbD7D9c09E3Ef1F3b99f7aC788', 'Wrapped RAMA (ERC-20)'],
          ['BorValidatorSet', '0x0000000000000000000000000000000000001000', 'Bor validator set contract'],
          ['StateReceiver', '0x0000000000000000000000000000000000001001', 'State receiver for sync'],
        ]}
      />

      <Heading level={3}>Staking Contracts (on Polygon)</Heading>
      
      <Paragraph>
        Staking contracts are deployed on Polygon Mainnet (Chain ID: 137) for security. 
        All validator registration and delegation happens on Polygon.
      </Paragraph>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['StakeManagerProxy', '0xc032E6C4D196CBf4CceddbA1d18661F7DD57f659', 'Main staking contract (proxy)'],
          ['StakeManager (impl)', '0x710c591d0862d33F1dBfC8555778F23709aEA53c', 'Implementation contract'],
          ['StakeManagerExtension', '0xdb8Bf95B4B10c25c4eE3335d8B4d236988d53E85', 'Extension logic'],
          ['ValidatorShare', '0x2A53F2bb6023C262F34Ad936f10105fED67d13BB', 'Delegation share template'],
          ['ValidatorShareFactory', '0xD7379c8BBFBEBc743cfa0ebF398c80b39c937802', 'Creates ValidatorShare contracts'],
          ['StakingInfo', '0x06FB27902B00a4CCF3850783dAB763364BF8654A', 'Staking events emitter'],
          ['StakingNFT', '0x108E6890F660Dbe4f3554DC43769B4D734555981', 'Validator position NFT'],
          ['RAMA Token (Polygon)', '0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36', 'RAMA on Polygon for staking'],
        ]}
      />

      <Heading level={3}>Bridge Contracts (on Polygon)</Heading>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RootChain', '0x602C6E68c571E8D87Df17BccCf37A0cf8e1BfAF0', 'Root chain implementation'],
          ['RootChainProxy', '0x32BC23e5FFf7D567313dB4F41A5125Ad9D9Bca63', 'Root chain checkpoint proxy'],
          ['DepositManager', '0x5C20eBdD45C0e2FFb394f41F310c9eB9CdBEaCD5', 'Deposit implementation'],
          ['DepositManagerProxy', '0x81ebFB0c73d3165c4719E9604cDa55eF91226dAf', 'Deposit handler proxy'],
          ['WithdrawManager', '0xa643b9C389B557695025DBBb775bC4942601C5Ab', 'Withdraw implementation'],
          ['WithdrawManagerProxy', '0x6e07F852bAC263492e8C710dB7c0d59275268db8', 'Withdrawal handler proxy'],
          ['StateSender', '0xE0C9051E655380D1d880b9B0f4b500cEbD09278f', 'State sync sender'],
          ['ERC20Predicate', '0xC0dA09523c92714d0Df17e72966B3B80f228df8e', 'ERC-20 token bridge'],
          ['ERC721Predicate', '0x02F08C48DaB9739C49A1F6C681B32fEFeCa9F1A9', 'NFT bridge (ERC-721)'],
          ['MintableERC721Predicate', '0xc4E350f980f5c5f7D05c2FA7C8B71801F28Ca21b', 'Mintable NFT bridge'],
        ]}
      />

      <Heading level={3}>Token Contracts (on Ramestta)</Heading>

      <Table
        headers={['Token', 'Address', 'Type']}
        rows={[
          ['RAMA', '0x0000000000000000000000000000000000001010', 'Native'],
          ['WRAMA', '0x27d20dE66C83d5CbD7D9c09E3Ef1F3b99f7aC788', 'ERC-20'],
          ['USDT', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 'ERC-20'],
          ['USDC', '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', 'ERC-20'],
        ]}
      />

      <Divider />

      <Heading level={2}>Testnet Contracts (Pingaksha)</Heading>
      
      <Badge variant="warning">Chain ID: 1371</Badge>

      <Paragraph>
        Testnet contracts mirror mainnet functionality but use test tokens with no real value.
      </Paragraph>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['RAMA Token', '0x0000000000000000000000000000000000001010', 'Native test RAMA'],
          ['WRAMA', '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 'Wrapped test RAMA'],
          ['BorValidatorSet', '0x0000000000000000000000000000000000001000', 'Testnet validator set'],
          ['StateReceiver', '0x0000000000000000000000000000000000001001', 'Testnet state receiver'],
        ]}
      />

      <InfoBox type="info" title="Getting Testnet Tokens">
        Get free test RAMA tokens from the faucet at{' '}
        <a href="https://testnet-faucet.ramascan.com" target="_blank" rel="noopener noreferrer" className="text-primary">
          testnet-faucet.ramascan.com
        </a>
      </InfoBox>

      <Divider />

      <Heading level={2}>Interacting with Contracts</Heading>

      <Heading level={3}>Using ethers.js</Heading>

      <CodeBlock
        code={`import { ethers } from 'ethers';

// WRAMA contract on Ramestta Mainnet
const WRAMA_ADDRESS = '0x27d20dE66C83d5CbD7D9c09E3Ef1F3b99f7aC788';
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
  --chain-id 1370 \\
  --compiler-version v0.8.20 \\
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
          <a href="https://github.com/ramestta" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
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
