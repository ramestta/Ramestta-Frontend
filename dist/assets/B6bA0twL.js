import{cU as e}from"./D5Je1u5Y.js";import{H as a,P as n,I as i,a as t,D as s,G as c,C as l,T as o,L as r}from"./D_XxTxHm.js";const m=()=>e.jsxs("div",{children:[e.jsx(a,{level:1,children:"Heimdall"}),e.jsx(n,{children:"Heimdall is the heart of the Ramestta network. It manages validators, block producer selection, spans, the state-sync mechanism between Polygon and Ramestta, and other essential aspects of the system. It uses the Cosmos-SDK and a forked version of Tendermint, called Peppermint."}),e.jsx(i,{type:"info",title:"Cosmos-SDK Based",children:"Heimdall removes some modules from Cosmos-SDK but mostly uses a customized version while following the same patterns. This provides a battle-tested foundation for consensus."}),e.jsx(a,{level:2,children:"Heimdall and Bor Integration"}),e.jsxs(n,{children:["Heimdall's ",e.jsx("code",{children:"bor"})," module is responsible for managing span intervals and coordinating interactions with the Bor chain. It determines when a new span can be proposed based on the current block number and span boundaries."]}),e.jsx(t,{title:"Span Proposal Conditions",language:"text",code:`A new span can be proposed when:
- Current Bor block number 'n' is within current span range
- n >= span.StartBlock AND n < span.EndBlock
- Validators on Heimdall can then propose a new span`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Authentication Module"}),e.jsxs(n,{children:["Heimdall's ",e.jsx("code",{children:"auth"})," module handles transaction authentication, specifying base transaction and account types. It performs all basic transaction validity checks including signatures, nonces, and auxiliary fields."]}),e.jsx(a,{level:3,children:"Gas and Fees"}),e.jsx(n,{children:"Fees serve two purposes: limiting state growth and providing anti-spam protection. Since Heimdall doesn't support custom contracts, it uses fixed cost transactions. Validators top up their accounts on Polygon and receive tokens on Heimdall via the Topup module."}),e.jsx(a,{level:3,children:"Account Structure"}),e.jsx(t,{title:"BaseAccount",language:"typescript",code:`interface BaseAccount {
  Address: HeimdallAddress;    // Account address
  Coins: Coins;                // Token balances
  PubKey: PubKey;              // Public key
  AccountNumber: number;       // Account number
  Sequence: number;            // Nonce for replay protection
}`}),e.jsx(a,{level:3,children:"Auth CLI Commands"}),e.jsx(t,{title:"Show Account",language:"bash",code:`# Display account details
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
sequence: 0`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Key Management"}),e.jsx(n,{children:"Each validator uses two keys to manage activities on Ramestta. This separation ensures an efficient tradeoff between security and ease of use."}),e.jsxs(c,{cols:2,children:[e.jsx(l,{icon:"🔑",title:"Signer Key (Hot)",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Kept on the validator node for signing Heimdall blocks, checkpoints, and other signing activities. Requires RAMA on Heimdall for fees and POL on Polygon for checkpoints."})}),e.jsx(l,{icon:"🔐",title:"Owner Key (Cold)",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Kept secure, used for staking, re-stake, changing signer key, withdrawing rewards, and managing delegation. All transactions through Polygon chain."})})]}),e.jsx(a,{level:3,children:"Signer Change"}),e.jsx(t,{title:"SignerChange Event",language:"solidity",code:`// Emitted on Polygon StakingInfo.sol when signer changes
event SignerChange(
  uint256 indexed validatorId,
  address indexed oldSigner,
  address indexed newSigner,
  bytes signerPubkey
);`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Balance Transfers"}),e.jsxs(n,{children:["Heimdall's ",e.jsx("code",{children:"bank"})," module handles balance transfers between accounts, corresponding to the bank module from cosmos-sdk."]}),e.jsx(t,{title:"Send Balance",language:"bash",code:`# Send 1000 RAMA tokens to an address
heimdallcli tx bank send <address> 1000rama --chain-id <chain-id>`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Staking Module"}),e.jsx(n,{children:"The staking module manages validator-related transactions and state. Validators stake tokens on Polygon and become validators. Transactions on Heimdall acknowledge the Polygon stake changes, and once majority agrees, validator info is saved to Heimdall state."}),e.jsx(a,{level:3,children:"Staking Messages"}),e.jsx(o,{headers:["Message","Purpose","Trigger"],rows:[["MsgValidatorJoin","New validator joins","Staked event on Polygon"],["MsgStakeUpdate","Stake amount changes","StakeUpdate event (restake/delegation)"],["MsgValidatorExit","Validator exits","UnstakeInit event on Polygon"],["MsgSignerUpdate","Signer key changes","SignerChange event on Polygon"]]}),e.jsx(a,{level:3,children:"Staking CLI Commands"}),e.jsx(t,{title:"Validator Commands",language:"bash",code:`# Query validator info by signer address
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
  --chain-id <chain-id>`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Checkpoints"}),e.jsx(n,{children:"Checkpoints are vital components representing snapshots of the Bor chain state. They are attested by a majority of validators before being submitted to Polygon contracts."}),e.jsx(a,{level:3,children:"Checkpoint Lifecycle"}),e.jsx(r,{ordered:!0,items:["Heimdall selects proposer using Tendermint's leader selection algorithm","Proposer creates checkpoint with Merkle root of Bor blocks","Validators sign the checkpoint (requires 2/3+ agreement)","Checkpoint submitted to Polygon RootChain contract","Success: ACK transaction updates checkpoint count","Failure: NO-ACK triggers proposer change after timeout"]}),e.jsx(a,{level:3,children:"Checkpoint Structure"}),e.jsx(t,{title:"CheckpointBlockHeader",language:"typescript",code:`interface CheckpointBlockHeader {
  Proposer: HeimdallAddress;    // Validator proposing checkpoint
  StartBlock: number;           // First Bor block in range
  EndBlock: number;             // Last Bor block in range  
  RootHash: HeimdallHash;       // Merkle root of block hashes
  AccountRootHash: HeimdallHash; // Merkle root of validator accounts
  TimeStamp: number;            // Checkpoint timestamp
}`}),e.jsx(a,{level:3,children:"Root Hash Calculation"}),e.jsx(t,{title:"Block Hash Formula",language:"text",code:`// Each block hash:
blockHash = keccak256([number, time, tx hash, receipt hash])

// Merkle root of all blocks:
B(1) = keccak256([number, time, tx_hash, receipt_hash])
B(2) = keccak256([number, time, tx_hash, receipt_hash])
...
B(n) = keccak256([number, time, tx_hash, receipt_hash])

checkpoint_root_hash = Merkle[B(1), B(2), ..., B(n)]`}),e.jsx(a,{level:3,children:"Checkpoint CLI Commands"}),e.jsx(t,{title:"Checkpoint Commands",language:"bash",code:`# Print checkpoint parameters
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
heimdallcli tx checkpoint send-noack --chain-id <chain-id>`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Topup Module"}),e.jsx(n,{children:"Topups are amounts used to pay fees on the Heimdall chain. There are two ways to topup:"}),e.jsx(r,{items:["When joining as validator, specify topup amount in addition to stake","Call top-up function directly on Polygon staking contract"]}),e.jsx(t,{title:"Topup CLI Commands",language:"bash",code:`# Topup Heimdall fee
heimdallcli tx topup fee \\
  --log-index <log-index> \\
  --tx-hash <transaction-hash> \\
  --validator-id <validator-id> \\
  --chain-id <heimdall-chain-id>

# Withdraw fee
heimdallcli tx topup withdraw --chain-id <heimdall-chain-id>

# Check topup balance
heimdallcli query auth account <validator-address> --trust-node`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Chain Management"}),e.jsx(n,{children:"The chain manager module provides necessary dependencies like contract addresses, bor_chain_id, and tx_confirmation_time. Parameters can be updated through governance."}),e.jsx(t,{title:"Chain Params CLI",language:"bash",code:`heimdallcli query chainmanager params --trust-node

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
  validator_set_address: "0x..."`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Governance"}),e.jsx(n,{children:"Heimdall's governance operates identically to Cosmos-sdk's x/gov module. Token holders influence decisions by voting on proposals - each token equals one vote."}),e.jsx(a,{level:3,children:"Governance Process"}),e.jsx(r,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Proposal Submission:"})," Validators submit proposals with a deposit"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Deposit Period:"})," Proposal must reach minimum deposit to proceed"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Voting Period:"})," Validators cast votes on qualifying proposals"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Tallying:"})," Votes counted based on quorum, threshold, and veto params"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Execution:"})," Approved param changes automatically applied to state"]})]}),e.jsx(a,{level:3,children:"Governance CLI Commands"}),e.jsx(t,{title:"Governance Commands",language:"bash",code:`# Check governance parameters
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
heimdallcli tx gov vote 1 "Yes" --validator-id 1 --chain-id <heimdall-chain-id>`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Advanced Gas Management"}),e.jsx(a,{level:3,children:"Block and Transaction Limits"}),e.jsx(t,{title:"Gas Limits",language:"text",code:`Max Gas Per Block: 10,000,000 (10 Million)
Max Bytes Per Block: 22,020,096 (21 MB)

// Checkpoint transactions are special:
// - Require Merkle proof verification
// - Use full block gas limit (10M)
// - Block contains only checkpoint tx`}),e.jsx(a,{level:3,children:"Replay Protection"}),e.jsx(n,{children:"Heimdall uses sequence numbers for replay protection. The Ante Handler increments the sequence number after each successful transaction, ensuring uniqueness and preventing replay attacks."}),e.jsxs(i,{type:"success",title:"Next Steps",children:["Learn about the ",e.jsx("a",{href:"/docs?page=bor",className:"text-primary-400 hover:underline",children:"Bor execution layer"})," or explore ",e.jsx("a",{href:"/docs?page=contracts",className:"text-primary-400 hover:underline",children:"smart contract deployment"}),"."]}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Network Configuration"}),e.jsx(n,{children:"Use the following details to connect to the Ramestta network for Heimdall node operations and development."}),e.jsx(a,{level:3,children:"Mainnet"}),e.jsx(o,{headers:["Parameter","Value"],rows:[["Network Name","Ramestta Mainnet"],["Chain ID","1370"],["Chain ID (Hex)","0x55a"],["Currency Symbol","RAMA"],["Decimals","18"],["RPC URL (Primary)","https://blockchain.ramestta.com"],["RPC URL (Backup)","https://blockchain2.ramestta.com"],["Block Explorer","https://ramascan.com"],["Network Type","Layer-3"],["Block Time","~2 seconds"],["Consensus","Proof-of-Stake (Heimdall + Bor)"]]}),e.jsx(a,{level:3,children:"Testnet (Pingaksha)"}),e.jsx(o,{headers:["Parameter","Value"],rows:[["Network Name","Ramestta Testnet (Pingaksha)"],["Chain ID","1371"],["Chain ID (Hex)","0x55b"],["Currency Symbol","RAMA"],["RPC URL","https://testnet.ramestta.com"],["Block Explorer","https://pingaksha.ramascan.com"],["API","https://testbackendapi.ramascan.com"],["Faucet","https://testnet-faucet.ramascan.com"]]}),e.jsx(a,{level:3,children:"MetaMask Configuration"}),e.jsx(t,{title:"Add Ramestta Mainnet to MetaMask",language:"typescript",code:`await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x55a',
    chainName: 'Ramestta Mainnet',
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    rpcUrls: [
      'https://blockchain.ramestta.com',
      'https://blockchain2.ramestta.com'
    ],
    blockExplorerUrls: ['https://ramascan.com']
  }]
});`}),e.jsx(t,{title:"Add Ramestta Testnet to MetaMask",language:"typescript",code:`await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x55b',
    chainName: 'Ramestta Testnet (Pingaksha)',
    nativeCurrency: {
      name: 'RAMA',
      symbol: 'RAMA',
      decimals: 18
    },
    rpcUrls: ['https://testnet.ramestta.com'],
    blockExplorerUrls: ['https://pingaksha.ramascan.com']
  }]
});`}),e.jsx(s,{}),e.jsx(a,{level:2,children:"Heimdall Node Ports"}),e.jsx(o,{headers:["Port","Service","Description"],rows:[["26656","P2P","Tendermint peer-to-peer communication"],["26657","RPC","Tendermint RPC endpoint"],["1317","REST API","Cosmos REST/LCD server"],["8545","Bor RPC","EVM JSON-RPC (Bor node)"],["8546","Bor WebSocket","Bor WebSocket endpoint"]]}),e.jsx(a,{level:2,children:"Heimdall REST Endpoints"}),e.jsx(t,{title:"Useful Heimdall REST Queries",language:"bash",code:`# Check node status
curl http://localhost:26657/status

# Get latest block
curl http://localhost:26657/block

# Get validator set
curl http://localhost:1317/staking/validator-set

# Get latest checkpoint
curl http://localhost:1317/checkpoints/latest

# Get account balance
curl http://localhost:1317/auth/accounts/<address>

# Get span details
curl http://localhost:1317/bor/span/<span-id>`}),e.jsxs(i,{type:"info",title:"Full Deployment Guide",children:["For step-by-step Heimdall and Bor node setup, see the"," ",e.jsx("a",{href:"/docs?page=become-validator",className:"text-primary-400 hover:underline",children:"Become a Validator"})," guide."]})]});export{m as default};
