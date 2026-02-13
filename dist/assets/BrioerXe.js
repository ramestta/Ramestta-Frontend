import{cU as e}from"./D5Je1u5Y.js";import{H as t,P as s,I as n,L as o,a,D as r,G as c,C as l,T as i}from"./D_XxTxHm.js";const u=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Bor"}),e.jsx(s,{children:"Bor is the core execution layer of the Ramestta network, operating on the principles outlined in EIP-225 and following the Clique consensus protocol. It handles all transaction processing, smart contract execution, and state management with full EVM compatibility."}),e.jsx(n,{type:"info",title:"Geth Fork",children:"Bor is a modified fork of Go-Ethereum (Geth), customized for Ramestta's PoS consensus and integration with Heimdall for validator management and block production."}),e.jsx(t,{level:2,children:"Validator Committee Selection"}),e.jsx(s,{children:"Ramestta relies on the Bor layer where a committee of Validators is selected from the validator pool based on their stake. This selection occurs at regular intervals and is shuffled periodically, determined by governance."}),e.jsx(t,{level:3,children:"Selection Process"}),e.jsx(o,{ordered:!0,items:["Validators are assigned slots proportionally based on their stake","Historical Polygon block data is used as a seed to shuffle the array","Validators are selected based on producer count maintained by governance","Tendermint's proposer selection algorithm chooses a producer for each sprint"]}),e.jsx(a,{title:"Producer Selection Algorithm",language:"go",code:`// SelectNextProducers selects producers for the next span
// by converting validator power to slots
func SelectNextProducers(
    blkHash common.Hash,
    spanEligibleVals []Validator,
    producerCount uint64,
) (selectedIDs []uint64, error) {
    
    // If validators <= producerCount, select all
    if len(spanEligibleVals) <= int(producerCount) {
        for _, val := range spanEligibleVals {
            selectedIDs = append(selectedIDs, uint64(val.ID))
        }
        return selectedIDs, nil
    }

    // Extract seed from block hash
    seed := ToBytes32(blkHash.Bytes()[:32])
    
    // Convert validator power to slots
    validatorIndices := convertToSlots(spanEligibleVals)
    
    // Shuffle using seed
    selectedIDs, _ = ShuffleList(validatorIndices, seed)
    
    return selectedIDs[:producerCount], nil
}`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Consensus Mechanics"}),e.jsx(s,{children:`In Ramestta's Proof-of-Stake system, participants stake RAMA tokens on a designated Polygon smart contract (the "staking contract") to become validators.`}),e.jsx(t,{level:3,children:"Spans and Sprints"}),e.jsxs(c,{cols:2,children:[e.jsx(l,{icon:"📦",title:"Span",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"A defined set of blocks (1600 blocks) where a specific subset of validators is chosen. Each validator has voting power influencing their selection as block producer."})}),e.jsx(l,{icon:"⚡",title:"Sprint",children:e.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"A smaller subset within a span (16 blocks) where a single block producer is designated for block generation. Backup producers exist for failover."})})]}),e.jsx(a,{title:"Bor Parameters",language:"bash",code:`heimdalldcli query bor params

# Output:
sprint_duration: 16
span_duration: 1600
producer_count: 4`}),e.jsx(t,{level:3,children:"Block Authorization"}),e.jsx(s,{children:"Block producers (signers) authorize blocks by signing the block's hash. Bor designates backup producers in case the primary fails to generate a block."}),e.jsx(o,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Wiggle Time:"})," Predefined delay before backup producer starts generating a block"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"In-turn Difficulty:"})," Blocks signed in-turn have higher difficulty than out-of-turn"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Fork Resolution:"})," Forks resolved by selecting chain with highest cumulative difficulty"]})]}),e.jsx(t,{level:3,children:"Span Structure"}),e.jsx(a,{title:"Span Type",language:"typescript",code:`interface Span {
  ID: number;                        // Span ID
  StartBlock: number;                // First block in span
  EndBlock: number;                  // Last block in span
  ValidatorSet: ValidatorSet;        // All validators for span
  SelectedProducers: Validator[];    // Selected block producers
  ChainID: string;                   // Bor chain ID (1370)
}`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"View Change and Span Commitment"}),e.jsx(s,{children:"At the end of each span, Bor undergoes a view change, fetching new producers for the subsequent span. This involves:"}),e.jsx(o,{ordered:!0,items:["HTTP call to Heimdall node for new span data","commitSpan call to BorValidatorSet genesis contract","Validation of new producer set","Switch to new validators for block production"]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"State Synchronization"}),e.jsx(s,{children:"Bor features a mechanism to relay events from the Polygon chain. This ensures consistency between Polygon and Ramestta chains."}),e.jsx(t,{level:3,children:"State Sync Process"}),e.jsx(o,{ordered:!0,items:["StateSynced event triggered on Polygon StateSender contract","Heimdall validators monitor and validate these events","Events passed to Bor layer at start of every sprint","Bor executes system call to StateReceiver contract","State updated via IStateReceiver.onStateReceive()"]}),e.jsx(a,{title:"State Receiver Interface",language:"solidity",code:`// IStateReceiver interface on Bor
interface IStateReceiver {
    function onStateReceive(
        uint256 stateId,
        bytes calldata data
    ) external;
}

// Bor makes system calls internally with system address
// to change state without a transaction`}),e.jsx(t,{level:3,children:"State-Sync Logs"}),e.jsx(s,{children:"State-sync logs are handled differently from normal logs in Bor:"}),e.jsx(o,{items:["Bor produces a new transaction/receipt for state-sync after each sprint","Includes all logs for state-sync operations","TX hash derived from block number and block hash","Does not alter consensus logic"]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"CLI Commands"}),e.jsx(t,{level:3,children:"Frequently Used Commands"}),e.jsx(a,{title:"Bor IPC Commands",language:"bash",code:`# Connect to Bor IPC
bor attach .bor/data/bor.ipc

# Inside IPC console:
# Get current block
eth.blockNumber

# Get sync status
eth.syncing

# Get node info
admin.nodeInfo

# Get peers
admin.peers

# Get signers for a block
bor.getSigners("0x98b3ea")

# Exit console
exit`}),e.jsx(t,{level:3,children:"Span Queries"}),e.jsx(a,{title:"Query Spans",language:"bash",code:`# Query current span
heimdallcli query bor span latest-span --chain-id <heimdall-chain-id>

# Expected output:
{
  "span_id": 2,
  "start_block": 6656,
  "end_block": 13055,
  "validator_set": {
    "validators": [...],
    "proposer": {...}
  },
  "selected_producers": [...],
  "bor_chain_id": "1370"
}

# Query span by ID
heimdallcli query bor span --span-id <span-id> --chain-id <heimdall-chain-id>

# Propose a new span
heimdallcli tx bor propose-span \\
  --start-block <start-block> \\
  --chain-id <heimdall-chain-id>`}),e.jsx(t,{level:3,children:"Configuration Commands"}),e.jsx(a,{title:"Sync and Status",language:"bash",code:`# Check Heimdall sync status
curl http://localhost:26657/status

# Check latest block height on Heimdall
curl localhost:26657/status

# Check latest block height on Bor
curl http://<your-ip>:8545 \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0", "id":1, "method":"eth_blockNumber", "params":[]}'

# Get Bor signers
curl http://<your-ip>:8545 \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}'`}),e.jsx(t,{level:3,children:"Node Management"}),e.jsx(a,{title:"Service Management",language:"bash",code:`# Stop Heimdall and Bor services (Linux packages)
sudo service heimdalld stop
sudo service bor stop

# Stop services (Binaries)
pkill heimdalld
pkill heimdalld-bridge
cd /path/to/bor && bash stop.sh

# Remove data directories (Linux packages)
sudo rm -rf /etc/heimdall/*
sudo rm -rf /etc/bor/*

# Remove data directories (Binaries)
sudo rm -rf /var/lib/heimdalld/
sudo rm -rf /var/lib/bor

# Terminate Bor process
ps -aux | grep bor
sudo kill -9 <PID>`}),e.jsx(t,{level:3,children:"Peer Management"}),e.jsx(a,{title:"Retrieve Peer Details",language:"bash",code:`# Connect to Bor and list peers
bor attach bor.ipc

# Inside console:
admin.peers.forEach(function(value) {
    console.log(value.enode + ',')
})

exit`}),e.jsx(r,{}),e.jsx(t,{level:2,children:"RPC Methods"}),e.jsx(i,{headers:["Method","Description","Example"],rows:[["eth_blockNumber","Get current block number",`curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","id":1}'`],["eth_getBlockByNumber","Get block by number",'params: ["0x1b4", true]'],["eth_getBalance","Get account balance",'params: ["0x...", "latest"]'],["eth_sendRawTransaction","Send signed transaction",'params: ["0x...signedTx"]'],["bor_getSigners","Get block signers",'params: ["0x1b4"]'],["bor_getCurrentValidators","Get current validators","params: []"]]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Genesis Contracts"}),e.jsx(s,{children:"Bor includes several genesis contracts deployed at initialization:"}),e.jsx(i,{headers:["Contract","Address","Purpose"],rows:[["BorValidatorSet","0x0000...1000","Manages validator set, receives span commits"],["StateReceiver","0x0000...1001","Receives state sync from Polygon"],["MRC20 (RAMA)","0x0000...1010","Native RAMA token - gas fees, staking"]]}),e.jsx(n,{type:"warning",title:"System Addresses",children:"Genesis contracts use special system addresses. The system call mechanism allows Bor to change contract state without creating a normal transaction."}),e.jsx(t,{level:2,children:"Configuration"}),e.jsx(s,{children:"Key Bor configuration parameters:"}),e.jsx(i,{headers:["Parameter","Value","Description"],rows:[["NetworkId","1370","Ramestta mainnet chain ID"],["ChainId","1370","EIP-155 chain identifier"],["Block Time","~2 seconds","Target block interval"],["Sprint","16 blocks","Single producer period"],["Span","1600 blocks","Producer set period"],["Gas Limit","20,000,000","Block gas limit"]]}),e.jsxs(n,{type:"success",title:"Next Steps",children:["Learn about ",e.jsx("a",{href:"/docs?page=heimdall",className:"text-primary-400 hover:underline",children:"Heimdall consensus layer"})," or start ",e.jsx("a",{href:"/docs?page=quickstart",className:"text-primary-400 hover:underline",children:"deploying smart contracts"}),"."]})]});export{u as default};
