import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const StakingGuidePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Staking Guide</Heading>
      
      <Paragraph>
        Stake your RAMA tokens to earn rewards and help secure the Ramestta network. 
        You can stake as a validator or delegate to existing validators.
      </Paragraph>

      <Heading level={2}>Staking Options</Heading>

      <Table
        headers={['Option', 'Min Stake', 'Requirements', 'Rewards']}
        rows={[
          ['Validator', '10,000 RAMA', 'Run Heimdall & Bor nodes', 'Higher (block rewards + commission)'],
          ['Delegator', '1 RAMA', 'Just RAMA tokens', 'Share of validator rewards minus commission']
        ]}
      />

      <Heading level={2}>Delegate Your RAMA</Heading>

      <Paragraph>
        Delegation is the easiest way to earn staking rewards without running infrastructure.
      </Paragraph>

      <Heading level={3}>Using the Staking Dashboard</Heading>

      <List items={[
        'Go to https://wallet.ramestta.com/staking',
        'Connect your wallet (MetaMask, RamaPay, etc.)',
        'Browse the list of validators',
        'Choose a validator with good uptime and reasonable commission',
        'Click "Delegate" and enter the amount',
        'Confirm the transaction in your wallet'
      ]} />

      <InfoBox type="info" title="Choosing a Validator">
        Look for validators with:
        <ul className="mt-2 ml-4 list-disc">
          <li>High uptime (99%+)</li>
          <li>Reasonable commission (5-20%)</li>
          <li>Active in community</li>
          <li>Not already at stake cap</li>
        </ul>
      </InfoBox>

      <Heading level={3}>Using the SDK</Heading>

      <CodeBlock
        title="Delegate with SDK"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function delegate() {
  // Connect to Polygon (where staking contract lives)
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const staking = new RamesttaStaking(signer);
  
  // Get list of validators
  const validators = await staking.getValidators();
  console.log('Available validators:', validators);
  
  // Choose validator by ID
  const validatorId = 1;
  
  // Approve RAMA for delegation
  const amount = ethers.parseEther('1000'); // 1000 RAMA
  await staking.approve(amount);
  
  // Delegate to validator
  const tx = await staking.delegate(validatorId, amount);
  console.log('Delegation tx:', tx.hash);
  
  // Wait for confirmation
  await tx.wait();
  console.log('Delegation complete!');
}

delegate();`}
      />

      <Heading level={2}>Check Your Stake</Heading>

      <CodeBlock
        title="View Delegation Info"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function checkStake() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  
  const staking = new RamesttaStaking(signer);
  
  // Get delegation info
  const delegation = await staking.getDelegation(address);
  console.log('Delegated amount:', ethers.formatEther(delegation.amount), 'RAMA');
  console.log('Validator ID:', delegation.validatorId);
  console.log('Shares:', ethers.formatEther(delegation.shares));
  
  // Get pending rewards
  const rewards = await staking.getPendingRewards(address);
  console.log('Pending rewards:', ethers.formatEther(rewards), 'RAMA');
  
  // Get all delegations (if delegated to multiple validators)
  const allDelegations = await staking.getAllDelegations(address);
  console.log('All delegations:', allDelegations);
}

checkStake();`}
      />

      <Heading level={2}>Claim Rewards</Heading>

      <CodeBlock
        title="Claim Staking Rewards"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function claimRewards() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const staking = new RamesttaStaking(signer);
  
  // Check pending rewards
  const rewards = await staking.getPendingRewards(await signer.getAddress());
  console.log('Pending rewards:', ethers.formatEther(rewards), 'RAMA');
  
  if (rewards > 0) {
    // Claim all rewards
    const tx = await staking.claimRewards();
    console.log('Claiming rewards:', tx.hash);
    await tx.wait();
    console.log('Rewards claimed!');
  }
}

claimRewards();`}
      />

      <Heading level={2}>Unstake (Withdraw)</Heading>

      <Paragraph>
        To unstake, you need to initiate an unbonding period. After the unbonding period 
        (typically 21 days), you can withdraw your tokens.
      </Paragraph>

      <CodeBlock
        title="Unstake and Withdraw"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function unstake() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const staking = new RamesttaStaking(signer);
  
  // Step 1: Initiate unbonding
  const unbondAmount = ethers.parseEther('500'); // Unbond 500 RAMA
  const unbondTx = await staking.unbond(unbondAmount);
  console.log('Unbonding initiated:', unbondTx.hash);
  await unbondTx.wait();
  
  // Step 2: Check unbonding status
  const unbonding = await staking.getUnbondingInfo(await signer.getAddress());
  console.log('Unbonding amount:', ethers.formatEther(unbonding.amount), 'RAMA');
  console.log('Withdrawable after:', new Date(unbonding.withdrawableTime * 1000));
  
  // Step 3: After unbonding period, claim tokens
  // (This will fail if unbonding period not complete)
  if (Date.now() / 1000 > unbonding.withdrawableTime) {
    const withdrawTx = await staking.claimUnbonded();
    console.log('Withdrawal complete:', withdrawTx.hash);
  }
}

unstake();`}
      />

      <InfoBox type="warning" title="Unbonding Period">
        The unbonding period is approximately 21 days. During this time, your tokens are locked 
        and you won't earn rewards on them.
      </InfoBox>

      <Heading level={2}>Restake (Compound) Rewards</Heading>

      <CodeBlock
        title="Auto-Compound Rewards"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function restake() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  const staking = new RamesttaStaking(signer);
  
  // Get pending rewards
  const rewards = await staking.getPendingRewards(await signer.getAddress());
  
  if (rewards > ethers.parseEther('1')) { // Only restake if > 1 RAMA
    // Restake rewards back to the same validator
    const tx = await staking.restake();
    console.log('Restaking rewards:', tx.hash);
    await tx.wait();
    console.log('Rewards restaked!');
  }
}

// Run every hour for auto-compounding
setInterval(restake, 60 * 60 * 1000);`}
      />

      <Heading level={2}>Staking Rewards</Heading>

      <Table
        headers={['Factor', 'Impact on Rewards']}
        rows={[
          ['Total Network Stake', 'Higher total stake = lower APY per token'],
          ['Your Stake Amount', 'More stake = more rewards'],
          ['Validator Performance', 'Validators with high uptime earn more'],
          ['Validator Commission', 'Lower commission = higher returns for delegators'],
          ['Network Activity', 'More transactions = more fee rewards']
        ]}
      />

      <Heading level={2}>Staking Contract Addresses</Heading>

      <Paragraph>
        Staking happens on Polygon Mainnet (Chain ID: 137). Here are the official contract addresses:
      </Paragraph>

      <Table
        headers={['Contract', 'Network', 'Address']}
        rows={[
          ['StakeManagerProxy', 'Polygon', '0xc032E6C4D196CBf4CceddbA1d18661F7DD57f659'],
          ['StakeManager (impl)', 'Polygon', '0x710c591d0862d33F1dBfC8555778F23709aEA53c'],
          ['StakeManagerExtension', 'Polygon', '0xdb8Bf95B4B10c25c4eE3335d8B4d236988d53E85'],
          ['ValidatorShare', 'Polygon', '0x2A53F2bb6023C262F34Ad936f10105fED67d13BB'],
          ['ValidatorShareFactory', 'Polygon', '0xD7379c8BBFBEBc743cfa0ebF398c80b39c937802'],
          ['StakingInfo', 'Polygon', '0x06FB27902B00a4CCF3850783dAB763364BF8654A'],
          ['StakingNFT', 'Polygon', '0x108E6890F660Dbe4f3554DC43769B4D734555981'],
          ['RAMA Token', 'Polygon', '0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36']
        ]}
      />

      <InfoBox type="info" title="Polygon RPC">
        Connect to Polygon Mainnet using: <code>https://polygon-rpc.com</code> or 
        your own Infura/Alchemy endpoint.
      </InfoBox>

      <InfoBox type="success" title="Start Earning">
        Ready to stake? Visit the <a href="https://wallet.ramestta.com/staking" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Staking Dashboard</a> to 
        delegate your RAMA and start earning rewards today!
      </InfoBox>
    </div>
  );
};

export default StakingGuidePage;
