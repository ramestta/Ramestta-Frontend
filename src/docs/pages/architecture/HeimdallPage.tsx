import React from 'react';
import { Heading, Paragraph, InfoBox, Table, Card, Grid, List, Divider, CodeBlock } from '../../components/DocsComponents';

const HeimdallPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Heimdall</Heading>
      
      <Paragraph>
        Heimdall is the heart of the Ramestta network. It manages validators, block producer selection, 
        spans, the state-sync mechanism between Polygon and Ramestta, and other essential aspects of the 
        system. It uses the Cosmos-SDK and a forked version of Tendermint, called Peppermint.
      </Paragraph>

      <InfoBox type="info" title="Cosmos-SDK Based">
        Heimdall removes some modules from Cosmos-SDK but mostly uses a customized version 
        while following the same patterns. This provides a battle-tested foundation for consensus.
      </InfoBox>

      <Heading level={2}>Heimdall and Bor Integration</Heading>

      <Paragraph>
        Heimdall's <code>bor</code> module is responsible for managing span intervals and coordinating 
        interactions with the Bor chain. It determines when a new span can be proposed based on the 
        current block number and span boundaries.
      </Paragraph>

      <CodeBlock
        title="Span Proposal Conditions"
        language="text"
        code={`A new span can be proposed when:
- Current Bor block number 'n' is within current span range
- n >= span.StartBlock AND n < span.EndBlock
- Validators on Heimdall can then propose a new span`}
      />

      <Divider />

      <Heading level={2}>Authentication Module</Heading>

      <Paragraph>
        Heimdall's <code>auth</code> module handles transaction authentication, specifying base 
        transaction and account types. It performs all basic transaction validity checks including 
        signatures, nonces, and auxiliary fields.
      </Paragraph>

      <Heading level={3}>Gas and Fees</Heading>

      <Paragraph>
        Fees serve two purposes: limiting state growth and providing anti-spam protection. Since 
        Heimdall doesn't support custom contracts, it uses fixed cost transactions. Validators 
        top up their accounts on Polygon and receive tokens on Heimdall via the Topup module.
      </Paragraph>

      <Heading level={3}>Account Structure</Heading>

      <CodeBlock
        title="BaseAccount"
        language="typescript"
        code={`interface BaseAccount {
  Address: HeimdallAddress;    // Account address
  Coins: Coins;                // Token balances
  PubKey: PubKey;              // Public key
  AccountNumber: number;       // Account number
  Sequence: number;            // Nonce for replay protection
}`}
      />

      <Heading level={3}>Auth CLI Commands</Heading>

      <CodeBlock
        title="Show Account"
        language="bash"
        code={`# Display account details
heimdalld show-account

# Expected output:
{
  "address": "0x68243159a498cf20d945cf3E4250918278BA538E",
  "pub_key": "0x040a9f6879c7cdab7ecc67e157cda15e8b2ddbde..."
}

# Query account details with balance
heimdallcli query auth account 0x68243159a498cf20d945cf3E4250918278BA538E --trust-node

# Expected output:
address: 0x68243159a498cf20d945cf3e4250918278ba538e
coins:
- denom: RAMA
  amount: "1000000000000000000000"
accountnumber: 0
sequence: 0`}
      />

      <Divider />

      <Heading level={2}>Key Management</Heading>

      <Paragraph>
        Each validator uses two keys to manage activities on Ramestta. This separation ensures 
        an efficient tradeoff between security and ease of use.
      </Paragraph>

      <Grid cols={2}>
        <Card icon="🔑" title="Signer Key (Hot)">
          <p className="text-gray-400 text-sm mt-2">
            Kept on the validator node for signing Heimdall blocks, checkpoints, and other 
            signing activities. Requires RAMA on Heimdall for fees and POL on Polygon for checkpoints.
          </p>
        </Card>
        <Card icon="🔐" title="Owner Key (Cold)">
          <p className="text-gray-400 text-sm mt-2">
            Kept secure, used for staking, re-stake, changing signer key, withdrawing rewards, 
            and managing delegation. All transactions through Polygon chain.
          </p>
        </Card>
      </Grid>

      <Heading level={3}>Signer Change</Heading>

      <CodeBlock
        title="SignerChange Event"
        language="solidity"
        code={`// Emitted on Polygon StakingInfo.sol when signer changes
event SignerChange(
  uint256 indexed validatorId,
  address indexed oldSigner,
  address indexed newSigner,
  bytes signerPubkey
);`}
      />

      <Divider />

      <Heading level={2}>Balance Transfers</Heading>

      <Paragraph>
        Heimdall's <code>bank</code> module handles balance transfers between accounts, 
        corresponding to the bank module from cosmos-sdk.
      </Paragraph>

      <CodeBlock
        title="Send Balance"
        language="bash"
        code={`# Send 1000 RAMA tokens to an address
heimdallcli tx bank send <address> 1000rama --chain-id <chain-id>`}
      />

      <Divider />

      <Heading level={2}>Staking Module</Heading>

      <Paragraph>
        The staking module manages validator-related transactions and state. Validators stake 
        tokens on Polygon and become validators. Transactions on Heimdall acknowledge the 
        Polygon stake changes, and once majority agrees, validator info is saved to Heimdall state.
      </Paragraph>

      <Heading level={3}>Staking Messages</Heading>

      <Table
        headers={['Message', 'Purpose', 'Trigger']}
        rows={[
          ['MsgValidatorJoin', 'New validator joins', 'Staked event on Polygon'],
          ['MsgStakeUpdate', 'Stake amount changes', 'StakeUpdate event (restake/delegation)'],
          ['MsgValidatorExit', 'Validator exits', 'UnstakeInit event on Polygon'],
          ['MsgSignerUpdate', 'Signer key changes', 'SignerChange event on Polygon']
        ]}
      />

      <Heading level={3}>Staking CLI Commands</Heading>

      <CodeBlock
        title="Validator Commands"
        language="bash"
        code={`# Query validator info by signer address
heimdallcli query staking validator-info \\
  --validator=<signer-address> \\
  --chain-id <chain-id>

# Query validator info by ID
heimdallcli query staking validator-info \\
  --id=<validator-id> \\
  --chain-id=<chain-id>

# Send validator join transaction
heimdallcli tx staking validator-join \\
  --signer-pubkey <signer-public-key> \\
  --tx-hash <tx-hash> \\
  --log-index <log-index> \\
  --chain-id <chain-id>`}
      />

      <Divider />

      <Heading level={2}>Checkpoints</Heading>

      <Paragraph>
        Checkpoints are vital components representing snapshots of the Bor chain state. They are 
        attested by a majority of validators before being submitted to Polygon contracts.
      </Paragraph>

      <Heading level={3}>Checkpoint Lifecycle</Heading>

      <List
        ordered
        items={[
          'Heimdall selects proposer using Tendermint\'s leader selection algorithm',
          'Proposer creates checkpoint with Merkle root of Bor blocks',
          'Validators sign the checkpoint (requires 2/3+ agreement)',
          'Checkpoint submitted to Polygon RootChain contract',
          'Success: ACK transaction updates checkpoint count',
          'Failure: NO-ACK triggers proposer change after timeout'
        ]}
      />

      <Heading level={3}>Checkpoint Structure</Heading>

      <CodeBlock
        title="CheckpointBlockHeader"
        language="typescript"
        code={`interface CheckpointBlockHeader {
  Proposer: HeimdallAddress;    // Validator proposing checkpoint
  StartBlock: number;           // First Bor block in range
  EndBlock: number;             // Last Bor block in range  
  RootHash: HeimdallHash;       // Merkle root of block hashes
  AccountRootHash: HeimdallHash; // Merkle root of validator accounts
  TimeStamp: number;            // Checkpoint timestamp
}`}
      />

      <Heading level={3}>Root Hash Calculation</Heading>

      <CodeBlock
        title="Block Hash Formula"
        language="text"
        code={`// Each block hash:
blockHash = keccak256([number, time, tx hash, receipt hash])

// Merkle root of all blocks:
B(1) = keccak256([number, time, tx_hash, receipt_hash])
B(2) = keccak256([number, time, tx_hash, receipt_hash])
...
B(n) = keccak256([number, time, tx_hash, receipt_hash])

checkpoint_root_hash = Merkle[B(1), B(2), ..., B(n)]`}
      />

      <Heading level={3}>Checkpoint CLI Commands</Heading>

      <CodeBlock
        title="Checkpoint Commands"
        language="bash"
        code={`# Print checkpoint parameters
heimdallcli query checkpoint params --trust-node
# Output: checkpoint_buffer_time: 16m40s

# Send checkpoint transaction
heimdallcli tx checkpoint send-checkpoint \\
  --start-block=<start-block> \\
  --end-block=<end-block> \\
  --root-hash=<root-hash> \\
  --account-root-hash=<account-root-hash> \\
  --chain-id=<chain-id>

# Send ACK (after successful Polygon submission)
heimdallcli tx checkpoint send-ack \\
  --tx-hash=<checkpoint-tx-hash> \\
  --log-index=<checkpoint-event-log-index> \\
  --header=<checkpoint-index> \\
  --chain-id=<chain-id>

# Send NO-ACK (on checkpoint failure)
heimdallcli tx checkpoint send-noack --chain-id <chain-id>`}
      />

      <Divider />

      <Heading level={2}>Topup Module</Heading>

      <Paragraph>
        Topups are amounts used to pay fees on the Heimdall chain. There are two ways to topup:
      </Paragraph>

      <List
        items={[
          'When joining as validator, specify topup amount in addition to stake',
          'Call top-up function directly on Polygon staking contract'
        ]}
      />

      <CodeBlock
        title="Topup CLI Commands"
        language="bash"
        code={`# Topup Heimdall fee
heimdallcli tx topup fee \\
  --log-index <log-index> \\
  --tx-hash <transaction-hash> \\
  --validator-id <validator-id> \\
  --chain-id <heimdall-chain-id>

# Withdraw fee
heimdallcli tx topup withdraw --chain-id <heimdall-chain-id>

# Check topup balance
heimdallcli query auth account <validator-address> --trust-node`}
      />

      <Divider />

      <Heading level={2}>Chain Management</Heading>

      <Paragraph>
        The chain manager module provides necessary dependencies like contract addresses, 
        bor_chain_id, and tx_confirmation_time. Parameters can be updated through governance.
      </Paragraph>

      <CodeBlock
        title="Chain Params CLI"
        language="bash"
        code={`heimdallcli query chainmanager params --trust-node

# Expected output:
tx_confirmation_time: 12s
chain_params:
  bor_chain_id: "1370"
  rama_token_address: "0x..."
  staking_manager_address: "0x..."
  root_chain_address: "0x..."
  staking_info_address: "0x..."
  state_sender_address: "0x..."
  state_receiver_address: "0x..."
  validator_set_address: "0x..."`}
      />

      <Divider />

      <Heading level={2}>Governance</Heading>

      <Paragraph>
        Heimdall's governance operates identically to Cosmos-sdk's x/gov module. Token holders 
        influence decisions by voting on proposals - each token equals one vote.
      </Paragraph>

      <Heading level={3}>Governance Process</Heading>

      <List
        items={[
          <><strong>Proposal Submission:</strong> Validators submit proposals with a deposit</>,
          <><strong>Deposit Period:</strong> Proposal must reach minimum deposit to proceed</>,
          <><strong>Voting Period:</strong> Validators cast votes on qualifying proposals</>,
          <><strong>Tallying:</strong> Votes counted based on quorum, threshold, and veto params</>,
          <><strong>Execution:</strong> Approved param changes automatically applied to state</>
        ]}
      />

      <Heading level={3}>Governance CLI Commands</Heading>

      <CodeBlock
        title="Governance Commands"
        language="bash"
        code={`# Check governance parameters
heimdallcli query gov params --trust-node

# Submit a proposal
heimdallcli tx gov submit-proposal \\
  --validator-id 1 param-change proposal.json \\
  --chain-id <heimdall-chain-id>

# List all proposals
heimdallcli query gov proposals --trust-node

# Query specific proposal
heimdallcli query gov proposal 1 --trust-node

# Vote on a proposal
heimdallcli tx gov vote 1 "Yes" --validator-id 1 --chain-id <heimdall-chain-id>`}
      />

      <Divider />

      <Heading level={2}>Advanced Gas Management</Heading>

      <Heading level={3}>Block and Transaction Limits</Heading>

      <CodeBlock
        title="Gas Limits"
        language="text"
        code={`Max Gas Per Block: 10,000,000 (10 Million)
Max Bytes Per Block: 22,020,096 (21 MB)

// Checkpoint transactions are special:
// - Require Merkle proof verification
// - Use full block gas limit (10M)
// - Block contains only checkpoint tx`}
      />

      <Heading level={3}>Replay Protection</Heading>

      <Paragraph>
        Heimdall uses sequence numbers for replay protection. The Ante Handler increments 
        the sequence number after each successful transaction, ensuring uniqueness and 
        preventing replay attacks.
      </Paragraph>

      <InfoBox type="success" title="Next Steps">
        Learn about the <a href="/docs?page=bor" className="text-primary-400 hover:underline">Bor execution layer</a> or 
        explore <a href="/docs?page=contracts" className="text-primary-400 hover:underline">smart contract deployment</a>.
      </InfoBox>
    </div>
  );
};

export default HeimdallPage;
