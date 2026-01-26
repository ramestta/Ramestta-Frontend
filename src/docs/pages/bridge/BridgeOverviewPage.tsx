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

      <div className="bg-gray-800/50 rounded-lg p-6 my-6">
        <div className="flex items-center justify-between gap-8">
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">⬡</span>
            </div>
            <div className="text-white font-semibold">Polygon</div>
            <div className="text-gray-400 text-sm">L2 Network</div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="text-2xl">🌉</div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-400">RamaBridge</div>
          </div>
          
          <div className="text-center flex-1">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🔷</span>
            </div>
            <div className="text-white font-semibold">Ramestta</div>
            <div className="text-gray-400 text-sm">L3 Network</div>
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

      <Table
        headers={['Asset', 'Type', 'Polygon Address', 'Ramestta Address']}
        rows={[
          ['MATIC', 'Native', 'Native', '0x...mapped'],
          ['RAMA', 'ERC-20', '0x...polygon', 'Native'],
          ['USDT', 'ERC-20', '0x...polygon', '0x...ramestta'],
          ['USDC', 'ERC-20', '0x...polygon', '0x...ramestta'],
          ['WETH', 'ERC-20', '0x...polygon', '0x...ramestta'],
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
          <><strong>Claim failing:</strong> Ensure you have MATIC for gas on Polygon.</>,
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
