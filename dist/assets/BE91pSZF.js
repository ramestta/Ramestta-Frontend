import{cU as e}from"./RZk19cD8.js";import{H as t,P as n,L as i,I as r,T as o,a}from"./D1yRkveG.js";const l=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Staking Contracts"}),e.jsx(n,{children:"The Ramestta staking system is built on a set of smart contracts deployed on the Polygon network. These contracts manage validator registration, delegation, rewards distribution, and the overall security of the network."}),e.jsx(t,{level:2,children:"Contract Architecture"}),e.jsx(n,{children:"The staking contracts follow a proxy-upgradeable pattern for maintainability:"}),e.jsx(i,{items:["StakeManager - Main staking logic and validator management","ValidatorShare - Individual validator delegation pools","StakingInfo - Events and indexing for staking data","SlashingManager - Handles validator slashing","StakingNFT - ERC721 tokens representing validator positions"]}),e.jsx(t,{level:2,children:"Deployed Addresses"}),e.jsx(t,{level:3,children:"Polygon Mainnet (Chain ID: 137)"}),e.jsx(r,{type:"info",title:"Important",children:"All staking operations happen on Polygon Mainnet, not on Ramestta. Validators stake RAMA tokens on Polygon to secure the Ramestta network."}),e.jsx(o,{headers:["Contract","Address","Description"],rows:[["StakeManagerProxy","0xc032E6C4D196CBf4CceddbA1d18661F7DD57f659","Main staking contract (proxy)"],["StakeManager (impl)","0x710c591d0862d33F1dBfC8555778F23709aEA53c","Implementation contract"],["StakeManagerExtension","0xdb8Bf95B4B10c25c4eE3335d8B4d236988d53E85","Extension logic"],["ValidatorShare","0x2A53F2bb6023C262F34Ad936f10105fED67d13BB","Delegation share template"],["ValidatorShareFactory","0xD7379c8BBFBEBc743cfa0ebF398c80b39c937802","Creates ValidatorShare contracts"],["StakingInfo","0x06FB27902B00a4CCF3850783dAB763364BF8654A","Staking events & indexing"],["StakingNFT","0x108E6890F660Dbe4f3554DC43769B4D734555981","Validator position NFTs"],["SlashingManager","0xae032F1be5d139a679d975dB379E27aF2107D7D7","Slashing logic"],["RAMA Token","0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36","Native staking token"]]}),e.jsx(t,{level:2,children:"StakeManager Contract"}),e.jsx(n,{children:"The StakeManager is the core contract handling all staking operations."}),e.jsx(t,{level:3,children:"Key Functions"}),e.jsx(a,{title:"Staking Functions",language:"solidity",code:`// Stake tokens to become a validator
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
function updateSigner(uint256 validatorId, bytes calldata signerPubkey) external;`}),e.jsx(t,{level:3,children:"View Functions"}),e.jsx(a,{title:"Read Functions",language:"solidity",code:`// Get validator info
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
function isActiveValidator(uint256 validatorId) external view returns (bool);`}),e.jsx(t,{level:2,children:"ValidatorShare Contract"}),e.jsx(n,{children:"Each validator has a ValidatorShare contract that manages delegations."}),e.jsx(a,{title:"Delegation Functions",language:"solidity",code:`// Buy voucher (delegate)
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
function getTotalStake(address user) external view returns (uint256, uint256);`}),e.jsx(t,{level:2,children:"Contract ABIs"}),e.jsx(a,{title:"Import ABIs",language:"typescript",code:`import { 
  STAKE_MANAGER_ABI,
  VALIDATOR_SHARE_ABI,
  STAKING_INFO_ABI,
  SLASHING_MANAGER_ABI
} from '@ramestta/contracts';

// Or import from JSON
import StakeManagerABI from '@ramestta/contracts/abis/StakeManager.json';
import ValidatorShareABI from '@ramestta/contracts/abis/ValidatorShare.json';`}),e.jsx(t,{level:2,children:"Usage Examples"}),e.jsx(t,{level:3,children:"Check Validator Info"}),e.jsx(a,{title:"Read Validator Data",language:"typescript",code:`import { ethers } from 'ethers';
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
});`}),e.jsx(t,{level:3,children:"Delegate to Validator"}),e.jsx(a,{title:"Delegate Tokens",language:"typescript",code:`import { ethers } from 'ethers';
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
await delegateToValidator(signer, '0x...validatorShareAddress', amount);`}),e.jsx(t,{level:3,children:"Claim Delegation Rewards"}),e.jsx(a,{title:"Claim Rewards",language:"typescript",code:`async function claimDelegationRewards(
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
}`}),e.jsx(t,{level:3,children:"Unbond Delegation"}),e.jsx(a,{title:"Unbond and Withdraw",language:"typescript",code:`async function unbondDelegation(
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
}`}),e.jsx(t,{level:2,children:"Events"}),e.jsx(o,{headers:["Event","Description","Parameters"],rows:[["Staked","New stake added","signer, validatorId, amount, total"],["Unstaked","Validator unstaked","user, validatorId, amount"],["StakeUpdate","Stake amount changed","validatorId, newAmount"],["RewardClaimed","Rewards withdrawn","validatorId, amount"],["ShareMinted","Delegation added","validatorId, user, amount, tokens"],["ShareBurned","Delegation removed","validatorId, user, amount, tokens"],["Slashed","Validator slashed","validatorId, amount"]]}),e.jsx(r,{type:"warning",title:"Gas Costs",children:"Staking operations are on Polygon and require POL for gas. Keep some POL in your wallet for transaction fees."}),e.jsxs(r,{type:"success",title:"SDK Recommended",children:["For easier staking operations, use the ",e.jsx("a",{href:"/docs?page=staking-guide",className:"text-primary-400 hover:underline",children:"@ramestta/staking-sdk"})," which handles all the complexity for you."]})]});export{l as default};
