import{cU as e}from"./RZk19cD8.js";import{H as t,P as n,T as r,L as s,I as o,a}from"./D1yRkveG.js";const l=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Staking Guide"}),e.jsx(n,{children:"Stake your RAMA tokens to earn rewards and help secure the Ramestta network. You can stake as a validator or delegate to existing validators."}),e.jsx(t,{level:2,children:"Staking Options"}),e.jsx(r,{headers:["Option","Min Stake","Requirements","Rewards"],rows:[["Validator","10,000 RAMA","Run Heimdall & Bor nodes","Higher (block rewards + commission)"],["Delegator","1 RAMA","Just RAMA tokens","Share of validator rewards minus commission"]]}),e.jsx(t,{level:2,children:"Delegate Your RAMA"}),e.jsx(n,{children:"Delegation is the easiest way to earn staking rewards without running infrastructure."}),e.jsx(t,{level:3,children:"Using the Staking Dashboard"}),e.jsx(s,{items:["Go to https://wallet.ramestta.com/staking","Connect your wallet (MetaMask, RamaPay, etc.)","Browse the list of validators","Choose a validator with good uptime and reasonable commission",'Click "Delegate" and enter the amount',"Confirm the transaction in your wallet"]}),e.jsxs(o,{type:"info",title:"Choosing a Validator",children:["Look for validators with:",e.jsxs("ul",{className:"mt-2 ml-4 list-disc",children:[e.jsx("li",{children:"High uptime (99%+)"}),e.jsx("li",{children:"Reasonable commission (5-20%)"}),e.jsx("li",{children:"Active in community"}),e.jsx("li",{children:"Not already at stake cap"})]})]}),e.jsx(t,{level:3,children:"Using the SDK"}),e.jsx(a,{title:"Delegate with SDK",language:"javascript",code:`import { RamesttaStaking } from '@ramestta/staking-sdk';
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

delegate();`}),e.jsx(t,{level:2,children:"Check Your Stake"}),e.jsx(a,{title:"View Delegation Info",language:"javascript",code:`import { RamesttaStaking } from '@ramestta/staking-sdk';
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

checkStake();`}),e.jsx(t,{level:2,children:"Claim Rewards"}),e.jsx(a,{title:"Claim Staking Rewards",language:"javascript",code:`import { RamesttaStaking } from '@ramestta/staking-sdk';
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

claimRewards();`}),e.jsx(t,{level:2,children:"Unstake (Withdraw)"}),e.jsx(n,{children:"To unstake, you need to initiate an unbonding period. After the unbonding period (typically 21 days), you can withdraw your tokens."}),e.jsx(a,{title:"Unstake and Withdraw",language:"javascript",code:`import { RamesttaStaking } from '@ramestta/staking-sdk';
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

unstake();`}),e.jsx(o,{type:"warning",title:"Unbonding Period",children:"The unbonding period is approximately 21 days. During this time, your tokens are locked and you won't earn rewards on them."}),e.jsx(t,{level:2,children:"Restake (Compound) Rewards"}),e.jsx(a,{title:"Auto-Compound Rewards",language:"javascript",code:`import { RamesttaStaking } from '@ramestta/staking-sdk';
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
setInterval(restake, 60 * 60 * 1000);`}),e.jsx(t,{level:2,children:"Staking Rewards"}),e.jsx(r,{headers:["Factor","Impact on Rewards"],rows:[["Total Network Stake","Higher total stake = lower APY per token"],["Your Stake Amount","More stake = more rewards"],["Validator Performance","Validators with high uptime earn more"],["Validator Commission","Lower commission = higher returns for delegators"],["Network Activity","More transactions = more fee rewards"]]}),e.jsx(t,{level:2,children:"Staking Contract Addresses"}),e.jsx(n,{children:"Staking happens on Polygon Mainnet (Chain ID: 137). Here are the official contract addresses:"}),e.jsx(r,{headers:["Contract","Network","Address"],rows:[["StakeManagerProxy","Polygon","0xc032E6C4D196CBf4CceddbA1d18661F7DD57f659"],["StakeManager (impl)","Polygon","0x710c591d0862d33F1dBfC8555778F23709aEA53c"],["StakeManagerExtension","Polygon","0xdb8Bf95B4B10c25c4eE3335d8B4d236988d53E85"],["ValidatorShare","Polygon","0x2A53F2bb6023C262F34Ad936f10105fED67d13BB"],["ValidatorShareFactory","Polygon","0xD7379c8BBFBEBc743cfa0ebF398c80b39c937802"],["StakingInfo","Polygon","0x06FB27902B00a4CCF3850783dAB763364BF8654A"],["StakingNFT","Polygon","0x108E6890F660Dbe4f3554DC43769B4D734555981"],["RAMA Token","Polygon","0x55a5CC06801bBa4C030568f1A7ee1c753FDcbe36"]]}),e.jsxs(o,{type:"info",title:"Polygon RPC",children:["Connect to Polygon Mainnet using: ",e.jsx("code",{children:"https://polygon-rpc.com"})," or your own Infura/Alchemy endpoint."]}),e.jsxs(o,{type:"success",title:"Start Earning",children:["Ready to stake? Visit the ",e.jsx("a",{href:"https://wallet.ramestta.com/staking",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"Staking Dashboard"})," to delegate your RAMA and start earning rewards today!"]})]});export{l as default};
