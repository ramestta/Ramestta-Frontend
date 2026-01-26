import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const StakingContractsPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Staking Contracts</Heading>
      
      <Paragraph>
        The Ramestta staking system is built on a set of smart contracts deployed on the Polygon 
        network. These contracts manage validator registration, delegation, rewards distribution, 
        and the overall security of the network.
      </Paragraph>

      <Heading level={2}>Contract Architecture</Heading>

      <Paragraph>
        The staking contracts follow a proxy-upgradeable pattern for maintainability:
      </Paragraph>

      <List items={[
        'StakeManager - Main staking logic and validator management',
        'ValidatorShare - Individual validator delegation pools',
        'StakingInfo - Events and indexing for staking data',
        'SlashingManager - Handles validator slashing',
        'StakingNFT - ERC721 tokens representing validator positions'
      ]} />

      <Heading level={2}>Deployed Addresses</Heading>

      <Heading level={3}>Polygon Mainnet (Chain ID: 137)</Heading>

      <InfoBox type="info" title="Important">
        All staking operations happen on Polygon Mainnet, not on Ramestta. Validators stake 
        RAMA tokens on Polygon to secure the Ramestta network.
      </InfoBox>

      <Table
        headers={['Contract', 'Address', 'Description']}
        rows={[
          ['StakeManagerProxy', '0xc032E6C4D196CBf4CceddbA1d18661F7DD57f659', 'Main staking contract (proxy)'],
          ['StakeManager (impl)', '0x710c591d0862d33F1dBfC8555778F23709aEA53c', 'Implementation contract'],
          ['StakeManagerExtension', '0xdb8Bf95B4B10c25c4eE3335d8B4d236988d53E85', 'Extension logic'],
          ['ValidatorShare', '0x2A53F2bb6023C262F34Ad936f10105fED67d13BB', 'Delegation share template'],
          ['ValidatorShareFactory', '0xD7379c8BBFBEBc743cfa0ebF398c80b39c937802', 'Creates ValidatorShare contracts'],
          ['StakingInfo', '0x06FB27902B00a4CCF3850783dAB763364BF8654A', 'Staking events & indexing'],
          ['StakingNFT', '0x108E6890F660Dbe4f3554DC43769B4D734555981', 'Validator position NFTs'],
          ['SlashingManager', '0xae032F1be5d139a679d975dB379E27aF2107D7D7', 'Slashing logic'],
          ['RAMA Token', '0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36', 'Native staking token']
        ]}
      />

      <Heading level={2}>StakeManager Contract</Heading>

      <Paragraph>
        The StakeManager is the core contract handling all staking operations.
      </Paragraph>

      <Heading level={3}>Key Functions</Heading>

      <CodeBlock
        title="Staking Functions"
        language="solidity"
        code={`// Stake tokens to become a validator
function stake(
    uint256 amount,
    uint256 heimdallFee,
    bool acceptDelegation,
    bytes calldata signerPubkey
) external;

// Unstake tokens (starts unbonding period)
function unstake(uint256 validatorId) external;

// Claim staked tokens after unbonding
function unstakeClaim(uint256 validatorId) external;

// Restake rewards
function restake(uint256 validatorId, uint256 amount, bool restakeRewards) external;

// Withdraw rewards
function withdrawRewards(uint256 validatorId) external;

// Update commission rate
function updateCommissionRate(uint256 validatorId, uint256 newCommissionRate) external;

// Update signer address
function updateSigner(uint256 validatorId, bytes calldata signerPubkey) external;`}
      />

      <Heading level={3}>View Functions</Heading>

      <CodeBlock
        title="Read Functions"
        language="solidity"
        code={`// Get validator info
function validators(uint256 validatorId) external view returns (
    uint256 amount,
    uint256 reward,
    uint256 activationEpoch,
    uint256 deactivationEpoch,
    uint256 jailEndEpoch,
    address signer,
    address contractAddress,
    uint256 commissionRate,
    uint256 lastCommissionUpdate,
    uint256 delegatorsReward,
    uint256 delegatedAmount,
    uint256 initialRewardPerStake
);

// Get total staked
function totalStaked() external view returns (uint256);

// Get current epoch
function currentEpoch() external view returns (uint256);

// Check if validator is active
function isActiveValidator(uint256 validatorId) external view returns (bool);`}
      />

      <Heading level={2}>ValidatorShare Contract</Heading>

      <Paragraph>
        Each validator has a ValidatorShare contract that manages delegations.
      </Paragraph>

      <CodeBlock
        title="Delegation Functions"
        language="solidity"
        code={`// Buy voucher (delegate)
function buyVoucher(uint256 _amount, uint256 _minSharesToMint) external returns (uint256);

// Sell voucher (request unbond)
function sellVoucher_new(uint256 claimAmount, uint256 maximumSharesToBurn) external;

// Unstake claim (withdraw after unbonding)
function unstakeClaimTokens_new(uint256 unbondNonce) external returns (uint256);

// Withdraw rewards
function withdrawRewards() external;

// Restake rewards
function restake() external returns (uint256, uint256);

// Get liquid rewards
function getLiquidRewards(address user) external view returns (uint256);

// Get total stake
function getTotalStake(address user) external view returns (uint256, uint256);`}
      />

      <Heading level={2}>Contract ABIs</Heading>

      <CodeBlock
        title="Import ABIs"
        language="typescript"
        code={`import { 
  STAKE_MANAGER_ABI,
  VALIDATOR_SHARE_ABI,
  STAKING_INFO_ABI,
  SLASHING_MANAGER_ABI
} from '@ramestta/contracts';

// Or import from JSON
import StakeManagerABI from '@ramestta/contracts/abis/StakeManager.json';
import ValidatorShareABI from '@ramestta/contracts/abis/ValidatorShare.json';`}
      />

      <Heading level={2}>Usage Examples</Heading>

      <Heading level={3}>Check Validator Info</Heading>

      <CodeBlock
        title="Read Validator Data"
        language="typescript"
        code={`import { ethers } from 'ethers';
import { STAKE_MANAGER_ABI, CONTRACT_ADDRESSES } from '@ramestta/contracts';

const provider = new ethers.JsonRpcProvider('https://polygon-rpc.com');

const stakeManager = new ethers.Contract(
  CONTRACT_ADDRESSES.polygon.STAKE_MANAGER,
  STAKE_MANAGER_ABI,
  provider
);

// Get validator info
const validatorId = 1;
const validator = await stakeManager.validators(validatorId);

console.log('Validator Info:', {
  stakedAmount: ethers.formatEther(validator.amount),
  pendingRewards: ethers.formatEther(validator.reward),
  commissionRate: validator.commissionRate.toString() + '%',
  signer: validator.signer,
  delegatedAmount: ethers.formatEther(validator.delegatedAmount),
  isActive: validator.deactivationEpoch.toString() === '0'
});`}
      />

      <Heading level={3}>Delegate to Validator</Heading>

      <CodeBlock
        title="Delegate Tokens"
        language="typescript"
        code={`import { ethers } from 'ethers';
import { 
  VALIDATOR_SHARE_ABI, 
  ERC20_ABI,
  CONTRACT_ADDRESSES 
} from '@ramestta/contracts';

async function delegateToValidator(
  signer: ethers.Signer,
  validatorShareAddress: string,
  amount: bigint
) {
  // First approve RAMA tokens
  const ramaToken = new ethers.Contract(
    CONTRACT_ADDRESSES.polygon.RAMA_TOKEN,
    ERC20_ABI,
    signer
  );
  
  const approveTx = await ramaToken.approve(validatorShareAddress, amount);
  await approveTx.wait();
  console.log('Approved RAMA tokens');
  
  // Buy voucher (delegate)
  const validatorShare = new ethers.Contract(
    validatorShareAddress,
    VALIDATOR_SHARE_ABI,
    signer
  );
  
  const minShares = 1; // Minimum shares to receive
  const delegateTx = await validatorShare.buyVoucher(amount, minShares);
  const receipt = await delegateTx.wait();
  
  console.log('Delegated successfully:', receipt.hash);
  return receipt;
}

// Usage
const amount = ethers.parseEther('1000'); // 1000 RAMA
await delegateToValidator(signer, '0x...validatorShareAddress', amount);`}
      />

      <Heading level={3}>Claim Delegation Rewards</Heading>

      <CodeBlock
        title="Claim Rewards"
        language="typescript"
        code={`async function claimDelegationRewards(
  signer: ethers.Signer,
  validatorShareAddress: string
) {
  const validatorShare = new ethers.Contract(
    validatorShareAddress,
    VALIDATOR_SHARE_ABI,
    signer
  );
  
  // Check pending rewards
  const userAddress = await signer.getAddress();
  const rewards = await validatorShare.getLiquidRewards(userAddress);
  console.log('Pending rewards:', ethers.formatEther(rewards), 'RAMA');
  
  if (rewards > 0n) {
    const tx = await validatorShare.withdrawRewards();
    const receipt = await tx.wait();
    console.log('Rewards claimed:', receipt.hash);
    return receipt;
  }
  
  console.log('No rewards to claim');
  return null;
}`}
      />

      <Heading level={3}>Unbond Delegation</Heading>

      <CodeBlock
        title="Unbond and Withdraw"
        language="typescript"
        code={`async function unbondDelegation(
  signer: ethers.Signer,
  validatorShareAddress: string,
  amount: bigint
) {
  const validatorShare = new ethers.Contract(
    validatorShareAddress,
    VALIDATOR_SHARE_ABI,
    signer
  );
  
  // Get current shares
  const userAddress = await signer.getAddress();
  const [totalStake, shares] = await validatorShare.getTotalStake(userAddress);
  
  // Calculate shares to burn
  const sharesToBurn = (shares * amount) / totalStake;
  
  // Request unbond (starts 21-day unbonding period)
  const tx = await validatorShare.sellVoucher_new(amount, sharesToBurn);
  const receipt = await tx.wait();
  
  console.log('Unbonding started:', receipt.hash);
  console.log('Tokens available after ~21 days');
  
  return receipt;
}

// After unbonding period, claim tokens
async function claimUnbondedTokens(
  signer: ethers.Signer,
  validatorShareAddress: string,
  unbondNonce: number
) {
  const validatorShare = new ethers.Contract(
    validatorShareAddress,
    VALIDATOR_SHARE_ABI,
    signer
  );
  
  const tx = await validatorShare.unstakeClaimTokens_new(unbondNonce);
  const receipt = await tx.wait();
  
  console.log('Tokens claimed:', receipt.hash);
  return receipt;
}`}
      />

      <Heading level={2}>Events</Heading>

      <Table
        headers={['Event', 'Description', 'Parameters']}
        rows={[
          ['Staked', 'New stake added', 'signer, validatorId, amount, total'],
          ['Unstaked', 'Validator unstaked', 'user, validatorId, amount'],
          ['StakeUpdate', 'Stake amount changed', 'validatorId, newAmount'],
          ['RewardClaimed', 'Rewards withdrawn', 'validatorId, amount'],
          ['ShareMinted', 'Delegation added', 'validatorId, user, amount, tokens'],
          ['ShareBurned', 'Delegation removed', 'validatorId, user, amount, tokens'],
          ['Slashed', 'Validator slashed', 'validatorId, amount']
        ]}
      />

      <InfoBox type="warning" title="Gas Costs">
        Staking operations are on Polygon and require POL for gas. Keep some POL in your wallet 
        for transaction fees.
      </InfoBox>

      <InfoBox type="success" title="SDK Recommended">
        For easier staking operations, use the <a href="/docs?page=staking-guide" className="text-primary-400 hover:underline">@ramestta/staking-sdk</a> which 
        handles all the complexity for you.
      </InfoBox>
    </div>
  );
};

export default StakingContractsPage;
