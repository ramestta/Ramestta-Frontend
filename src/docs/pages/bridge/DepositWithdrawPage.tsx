import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const DepositWithdrawPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Deposit & Withdraw</Heading>
      
      <Paragraph>
        Transfer assets between Polygon and Ramestta networks using the official bridge. 
        Deposits typically take 5-10 minutes, while withdrawals require a checkpoint 
        confirmation (up to 30 minutes).
      </Paragraph>

      <Heading level={2}>Bridge Overview</Heading>

      <Table
        headers={['Direction', 'From', 'To', 'Time']}
        rows={[
          ['Deposit', 'Polygon (POL)', 'Ramestta (RAMA)', '~5-10 minutes'],
          ['Withdraw', 'Ramestta (RAMA)', 'Polygon (POL)', '~30 minutes (checkpoint)']
        ]}
      />

      <InfoBox type="info" title="Supported Assets">
        The bridge supports RAMA tokens and ERC20 tokens that have been mapped. 
        Native POL cannot be bridged directly.
      </InfoBox>

      <Heading level={2}>Using the Bridge UI</Heading>

      <Heading level={3}>Deposit (Polygon → Ramestta)</Heading>

      <List items={[
        'Go to https://wallet.ramestta.com/bridge',
        'Connect your wallet (MetaMask, RamaPay)',
        'Ensure you\'re on Polygon network',
        'Select "Deposit" tab',
        'Enter the amount of RAMA to deposit',
        'Click "Approve" (first time only)',
        'Click "Deposit"',
        'Confirm transaction in wallet',
        'Wait for Polygon confirmation (~2 min)',
        'Wait for Ramestta confirmation (~5-10 min)',
        'Funds appear on Ramestta!'
      ]} />

      <Heading level={3}>Withdraw (Ramestta → Polygon)</Heading>

      <List items={[
        'Go to https://wallet.ramestta.com/bridge',
        'Connect your wallet',
        'Ensure you\'re on Ramestta network',
        'Select "Withdraw" tab',
        'Enter the amount to withdraw',
        'Click "Withdraw"',
        'Confirm transaction in wallet',
        'Wait for Ramestta confirmation (~2 sec)',
        'Wait for checkpoint (~30 min)',
        'Click "Claim" to finalize on Polygon',
        'Confirm claim transaction',
        'Funds appear on Polygon!'
      ]} />

      <InfoBox type="warning" title="Checkpoint Requirement">
        Withdrawals require a checkpoint to be submitted to Polygon. Checkpoints are submitted 
        approximately every 30 minutes by Heimdall validators.
      </InfoBox>

      <Divider />

      <Heading level={2}>Using the Bridge SDK</Heading>

      <Heading level={3}>Installation</Heading>

      <CodeBlock
        title="Install Bridge SDK"
        language="bash"
        code={`npm install @ramestta/bridge-sdk ethers`}
      />

      <Heading level={3}>Initialize Bridge</Heading>

      <CodeBlock
        title="Setup Bridge"
        language="typescript"
        code={`import { RamesttaBridge } from '@ramestta/bridge-sdk';
import { ethers } from 'ethers';

// Connect to both networks
const polygonProvider = new ethers.JsonRpcProvider('https://polygon-rpc.com');
const ramesttaProvider = new ethers.JsonRpcProvider('https://blockchain.ramestta.com');

// Create signers (same wallet on both networks)
const polygonSigner = new ethers.Wallet(PRIVATE_KEY, polygonProvider);
const ramesttaSigner = new ethers.Wallet(PRIVATE_KEY, ramesttaProvider);

// Initialize bridge
const bridge = new RamesttaBridge({
  polygonSigner,
  ramesttaSigner
});`}
      />

      <Heading level={3}>Deposit Tokens</Heading>

      <CodeBlock
        title="Deposit from Polygon to Ramestta"
        language="typescript"
        code={`async function depositToRamestta(amount: string) {
  const amountWei = ethers.parseEther(amount);
  
  // Step 1: Approve tokens (only needed once per token)
  console.log('Approving tokens...');
  const approveTx = await bridge.approve(amountWei);
  await approveTx.wait();
  console.log('Approval confirmed');
  
  // Step 2: Deposit
  console.log('Depositing to Ramestta...');
  const depositTx = await bridge.deposit(amountWei);
  const receipt = await depositTx.wait();
  console.log('Deposit transaction:', receipt.hash);
  
  // Step 3: Wait for bridge completion
  console.log('Waiting for Ramestta confirmation...');
  const status = await bridge.waitForDeposit(receipt.hash);
  
  if (status.completed) {
    console.log('Deposit complete!');
    console.log('Ramestta tx:', status.ramesttaTxHash);
  }
  
  return status;
}

// Usage
await depositToRamestta('100'); // Deposit 100 RAMA`}
      />

      <Heading level={3}>Withdraw Tokens</Heading>

      <CodeBlock
        title="Withdraw from Ramestta to Polygon"
        language="typescript"
        code={`async function withdrawToPolygon(amount: string) {
  const amountWei = ethers.parseEther(amount);
  
  // Step 1: Initiate withdrawal on Ramestta
  console.log('Starting withdrawal...');
  const withdrawTx = await bridge.withdraw(amountWei);
  const receipt = await withdrawTx.wait();
  console.log('Withdrawal tx:', receipt.hash);
  
  // Step 2: Wait for checkpoint (can take up to 30 minutes)
  console.log('Waiting for checkpoint...');
  const checkpoint = await bridge.waitForCheckpoint(receipt.hash, {
    onProgress: (status) => {
      console.log('Status:', status.message);
    }
  });
  console.log('Checkpoint included:', checkpoint.checkpointId);
  
  // Step 3: Claim on Polygon
  console.log('Claiming on Polygon...');
  const claimTx = await bridge.claim(receipt.hash);
  const claimReceipt = await claimTx.wait();
  console.log('Claim complete:', claimReceipt.hash);
  
  return claimReceipt;
}

// Usage
await withdrawToPolygon('100'); // Withdraw 100 RAMA`}
      />

      <Heading level={3}>Check Bridge Status</Heading>

      <CodeBlock
        title="Monitor Bridge Transaction"
        language="typescript"
        code={`async function checkBridgeStatus(txHash: string, type: 'deposit' | 'withdraw') {
  const status = await bridge.getStatus(txHash, type);
  
  console.log('Bridge Status:', {
    type: status.type,
    amount: ethers.formatEther(status.amount),
    sourceTx: status.sourceTxHash,
    destTx: status.destinationTxHash,
    status: status.status, // 'pending' | 'confirming' | 'completed' | 'failed'
    checkpoint: status.checkpointId,
    estimatedTime: status.estimatedCompletionTime
  });
  
  return status;
}

// Check all pending transfers
async function getPendingTransfers() {
  const address = await polygonSigner.getAddress();
  const pending = await bridge.getPendingTransfers(address);
  
  console.log('Pending Deposits:', pending.deposits);
  console.log('Pending Withdrawals:', pending.withdrawals);
  console.log('Ready to Claim:', pending.claimable);
  
  return pending;
}`}
      />

      <Heading level={2}>Bridge Contract Addresses</Heading>

      <Paragraph>
        Official bridge contracts deployed on Polygon Mainnet (Chain ID: 137):
      </Paragraph>

      <Table
        headers={['Contract', 'Network', 'Address']}
        rows={[
          ['RootChainProxy', 'Polygon', '0x32BC23e5FFf7D567313dB4F41A5125Ad9D9Bca63'],
          ['DepositManagerProxy', 'Polygon', '0x81ebFB0c73d3165c4719E9604cDa55eF91226dAf'],
          ['WithdrawManagerProxy', 'Polygon', '0x6e07F852bAC263492e8C710dB7c0d59275268db8'],
          ['StateSender', 'Polygon', '0xE0C9051E655380D1d880b9B0f4b500cEbD09278f'],
          ['ERC20Predicate', 'Polygon', '0xC0dA09523c92714d0Df17e72966B3B80f228df8e'],
          ['ChildChain/StateReceiver', 'Ramestta', '0x0000000000000000000000000000000000001001']
        ]}
      />

      <Heading level={2}>Manual Bridge Interaction</Heading>

      <Paragraph>
        For advanced users who want to interact with contracts directly:
      </Paragraph>

      <CodeBlock
        title="Direct Contract Deposit"
        language="typescript"
        code={`import { ethers } from 'ethers';
import { 
  ROOT_CHAIN_MANAGER_ABI,
  ERC20_ABI,
  CONTRACT_ADDRESSES 
} from '@ramestta/contracts';

async function manualDeposit(signer: ethers.Signer, amount: bigint) {
  const ramaToken = CONTRACT_ADDRESSES.polygon.RAMA_TOKEN;
  const rootChainManager = CONTRACT_ADDRESSES.polygon.ROOT_CHAIN_MANAGER;
  const predicateAddress = CONTRACT_ADDRESSES.polygon.ERC20_PREDICATE;
  
  // 1. Approve predicate
  const token = new ethers.Contract(ramaToken, ERC20_ABI, signer);
  await (await token.approve(predicateAddress, amount)).wait();
  
  // 2. Deposit via RootChainManager
  const manager = new ethers.Contract(rootChainManager, ROOT_CHAIN_MANAGER_ABI, signer);
  const userAddress = await signer.getAddress();
  
  // Encode deposit data
  const depositData = ethers.AbiCoder.defaultAbiCoder().encode(
    ['uint256'],
    [amount]
  );
  
  const tx = await manager.depositFor(
    userAddress,
    ramaToken,
    depositData
  );
  
  return await tx.wait();
}`}
      />

      <Heading level={2}>Troubleshooting</Heading>

      <Table
        headers={['Issue', 'Solution']}
        rows={[
          ['Deposit not appearing', 'Wait 10-15 minutes for state sync to complete'],
          ['Withdraw stuck', 'Checkpoint may be delayed, wait up to 1 hour'],
          ['Claim failing', 'Ensure checkpoint is confirmed, check proof'],
          ['Insufficient gas', 'Keep POL for Polygon, RAMA for Ramestta'],
          ['Wrong network', 'Ensure wallet is on correct network for each step'],
          ['Amount mismatch', 'Check token decimals (usually 18)']
        ]}
      />

      <InfoBox type="info" title="Bridge Support">
        For bridge issues, join the <a href="https://t.me/rabordev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Ramestta Telegram</a> for 
        community support.
      </InfoBox>

      <InfoBox type="success" title="Bridge Ready">
        Ready to transfer assets! Use the <a href="https://wallet.ramestta.com/bridge" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Bridge UI</a> for 
        the easiest experience, or the SDK for programmatic access.
      </InfoBox>
    </div>
  );
};

export default DepositWithdrawPage;
