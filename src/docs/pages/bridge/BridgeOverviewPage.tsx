import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, Card, Grid, List, Divider, Badge } from '../../components/DocsComponents';

const BridgeOverviewPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Bridge Overview</Heading>
      
      <div className="flex items-center gap-3 mb-6">
        <Badge variant="primary">RamaBridge</Badge>
        <Badge variant="success">Live</Badge>
      </div>

      <Paragraph>
        RamaBridge enables seamless transfer of assets between Polygon and Ramestta networks. 
        The bridge uses a secure checkpoint mechanism to ensure safe and verifiable transfers.
      </Paragraph>

      {/* Bridge Diagram - Mobile Responsive */}
      <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 min-w-[280px]">
          {/* Polygon Network */}
          <div className="text-center flex-shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-500/20 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">⬡</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">Polygon</div>
            <div className="text-gray-400 text-xs sm:text-sm">Parent Chain</div>
          </div>
          
          {/* Bridge Arrow - Rotates on mobile */}
          <div className="flex-shrink-0 py-2 sm:py-0">
            <div className="flex sm:flex-row flex-col items-center gap-2">
              <div className="hidden sm:block w-8 md:w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="sm:hidden h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              <div className="text-xl sm:text-2xl">🌉</div>
              <div className="hidden sm:block w-8 md:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <div className="sm:hidden h-6 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500"></div>
            </div>
            <div className="text-center mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">RamaBridge</div>
          </div>
          
          {/* Ramestta Network */}
          <div className="text-center flex-shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-500/20 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🔷</span>
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">Ramestta</div>
            <div className="text-gray-400 text-xs sm:text-sm">PoS Chain</div>
          </div>
        </div>
      </div>

      <Heading level={2}>How It Works</Heading>

      <Heading level={3}>Deposits (Polygon → Ramestta)</Heading>

      <List
        ordered
        items={[
          'User initiates deposit on Polygon network',
          'Tokens are locked in the bridge contract on Polygon',
          'Heimdall validators detect the deposit event',
          'Validators reach consensus and create state sync',
          'Equivalent tokens are minted/released on Ramestta',
          'User receives tokens on Ramestta (~5-10 minutes)'
        ]}
      />

      <Heading level={3}>Withdrawals (Ramestta → Polygon)</Heading>

      <List
        ordered
        items={[
          'User initiates withdrawal on Ramestta network',
          'Tokens are burned/locked on Ramestta',
          'Transaction is included in next checkpoint',
          'Checkpoint is submitted to Polygon (~30 minutes)',
          'User claims tokens on Polygon with proof',
          'Tokens are released from bridge contract'
        ]}
      />

      <InfoBox type="info" title="Withdrawal Time">
        Withdrawals take longer than deposits due to the checkpoint mechanism. 
        This ensures cryptographic security of the transfer.
      </InfoBox>

      <Divider />

      <Heading level={2}>Supported Assets</Heading>

      <Paragraph>
        The following assets can be bridged between Polygon and Ramestta:
      </Paragraph>

      <Table
        headers={['Asset', 'Type', 'Polygon Address', 'Ramestta Address']}
        rows={[
          ['RAMA', 'ERC-20', '0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36', '0x0000...1010 (Native)'],
          ['WRAMA', 'ERC-20', '0x3413e262742c22BeEd13f778C26cacBd726C3aa8', '0x27d20dE66C83d5C...'],
          ['Custom ERC-20', 'ERC-20', 'Mapped via bridge', 'Mapped via bridge'],
          ['ERC-721 NFTs', 'NFT', 'Mapped via predicate', 'Mapped via predicate'],
        ]}
      />

      <InfoBox type="info" title="Token Mapping">
        Custom tokens need to be mapped before they can be bridged. Contact the Ramestta team 
        to request token mapping for your project.
      </InfoBox>

      <Heading level={2}>Bridge Contract Addresses</Heading>

      <Heading level={3}>Polygon (L2 Parent Chain)</Heading>

      <Table
        headers={['Contract', 'Address']}
        rows={[
          ['RootChainProxy', '0x32BC23e5FFf7D567313dB4F41A5125Ad9D9Bca63'],
          ['DepositManagerProxy', '0x81ebFB0c73d3165c4719E9604cDa55eF91226dAf'],
          ['WithdrawManagerProxy', '0x6e07F852bAC263492e8C710dB7c0d59275268db8'],
          ['StateSender', '0xE0C9051E655380D1d880b9B0f4b500cEbD09278f'],
          ['ERC20Predicate', '0xC0dA09523c92714d0Df17e72966B3B80f228df8e'],
          ['ERC721Predicate', '0x02F08C48DaB9739C49A1F6C681B32fEFeCa9F1A9'],
        ]}
      />

      <Heading level={3}>Ramestta (L3 Network)</Heading>

      <Table
        headers={['Contract', 'Address']}
        rows={[
          ['ChildChain', '0x0000000000000000000000000000000000001001'],
          ['StateReceiver', '0x0000000000000000000000000000000000001001'],
          ['MRC20 (RAMA)', '0x0000000000000000000000000000000000001010'],
        ]}
      />

      <Heading level={2}>Bridge Fees</Heading>

      <Table
        headers={['Operation', 'Network Fee', 'Bridge Fee']}
        rows={[
          ['Deposit', 'Polygon gas (~$0.01)', 'Free'],
          ['Withdrawal', 'Ramestta gas (~$0.0002)', 'Free'],
          ['Claim (Polygon)', 'Polygon gas (~$0.01)', 'N/A'],
        ]}
      />

      <InfoBox type="success" title="No Bridge Fees">
        RamaBridge does not charge any fees for transfers. You only pay network 
        gas fees on the respective chains.
      </InfoBox>

      <Divider />

      <Heading level={2}>Using the Bridge</Heading>

      <Heading level={3}>Via Web Interface</Heading>

      <Paragraph>
        The easiest way to use the bridge is through our web interface:
      </Paragraph>

      <Card icon="🌉" title="RamaBridge">
        <p className="text-gray-400 text-sm mt-2 mb-3">
          Bridge assets between Polygon and Ramestta
        </p>
        <a 
          href="https://bridge.ramestta.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
        >
          https://bridge.ramestta.com →
        </a>
      </Card>

      <Heading level={3}>Via SDK</Heading>

      <CodeBlock
        code={`import { RamaPay } from '@ramestta/sdk';

const ramaPay = new RamaPay({ network: 'mainnet' });

// Deposit from Polygon to Ramestta
const deposit = await ramaPay.bridge.deposit({
  token: 'USDT',
  amount: '100', // 100 USDT
});

console.log('Deposit TX:', deposit.hash);
console.log('Expected arrival: ~5-10 minutes');

// Check deposit status
const status = await ramaPay.bridge.getDepositStatus(deposit.hash);
console.log('Status:', status); // 'pending' | 'confirmed' | 'completed'`}
        language="typescript"
        title="bridge-sdk.ts"
      />

      <Heading level={3}>Via Smart Contract</Heading>

      <CodeBlock
        code={`import { ethers } from 'ethers';

// Polygon side: Deposit Manager
const DEPOSIT_MANAGER = '0x...';
const depositManagerAbi = [
  'function depositERC20(address token, address user, uint256 amount)',
  'function depositERC20ForUser(address token, address user, uint256 amount)',
];

// Approve tokens first
const token = new ethers.Contract(tokenAddress, erc20Abi, signer);
await token.approve(DEPOSIT_MANAGER, amount);

// Make deposit
const depositManager = new ethers.Contract(DEPOSIT_MANAGER, depositManagerAbi, signer);
const tx = await depositManager.depositERC20ForUser(tokenAddress, userAddress, amount);
await tx.wait();

console.log('Deposit initiated:', tx.hash);`}
        language="typescript"
        title="bridge-contract.ts"
      />

      <Divider />

      <Heading level={2}>Security</Heading>

      <Grid cols={2}>
        <Card icon="🔒" title="Checkpoint Verification">
          <p className="text-gray-400 text-sm mt-2">
            All withdrawals require checkpoint proof verified by Polygon validators
          </p>
        </Card>
        <Card icon="👥" title="Multi-Validator Consensus">
          <p className="text-gray-400 text-sm mt-2">
            Deposits require 2/3+ validator signatures before processing
          </p>
        </Card>
        <Card icon="⏱️" title="Challenge Period">
          <p className="text-gray-400 text-sm mt-2">
            Withdrawals have a challenge period for fraud detection
          </p>
        </Card>
        <Card icon="📝" title="Audited Contracts">
          <p className="text-gray-400 text-sm mt-2">
            Bridge contracts are open source and audited
          </p>
        </Card>
      </Grid>

      <Heading level={2}>Troubleshooting</Heading>

      <List
        items={[
          <><strong>Deposit not arriving:</strong> Wait 10-15 minutes. Check transaction on Polygon explorer.</>,
          <><strong>Withdrawal stuck:</strong> Wait for next checkpoint (~30 min). Verify on RamaScan.</>,
          <><strong>Claim failing:</strong> Ensure you have POL for gas on Polygon.</>,
          <><strong>Token not showing:</strong> Add token contract address manually to your wallet.</>
        ]}
      />

      <InfoBox type="warning" title="Need Help?">
        If your bridge transaction is stuck for more than 2 hours, contact support on 
        Discord with your transaction hash.
      </InfoBox>
    </div>
  );
};

export default BridgeOverviewPage;
