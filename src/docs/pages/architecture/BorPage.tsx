import React from 'react';
import { Heading, Paragraph, InfoBox, Table, Card, Grid, List, Divider, CodeBlock } from '../../components/DocsComponents';

const BorPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Bor</Heading>
      
      <Paragraph>
        Bor is the core execution layer of the Ramestta network, operating on the principles outlined 
        in EIP-225 and following the Clique consensus protocol. It handles all transaction processing, 
        smart contract execution, and state management with full EVM compatibility.
      </Paragraph>

      <InfoBox type="info" title="Geth Fork">
        Bor is a modified fork of Go-Ethereum (Geth), customized for Ramestta's PoS consensus 
        and integration with Heimdall for validator management and block production.
      </InfoBox>

      <Heading level={2}>Validator Committee Selection</Heading>

      <Paragraph>
        Ramestta relies on the Bor layer where a committee of Validators is selected from the 
        validator pool based on their stake. This selection occurs at regular intervals and is 
        shuffled periodically, determined by governance.
      </Paragraph>

      <Heading level={3}>Selection Process</Heading>

      <List
        ordered
        items={[
          'Validators are assigned slots proportionally based on their stake',
          'Historical Polygon block data is used as a seed to shuffle the array',
          'Validators are selected based on producer count maintained by governance',
          'Tendermint\'s proposer selection algorithm chooses a producer for each sprint'
        ]}
      />

      <CodeBlock
        title="Producer Selection Algorithm"
        language="go"
        code={`// SelectNextProducers selects producers for the next span
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
}`}
      />

      <Divider />

      <Heading level={2}>Consensus Mechanics</Heading>

      <Paragraph>
        In Ramestta's Proof-of-Stake system, participants stake RAMA tokens on a designated 
        Polygon smart contract (the "staking contract") to become validators.
      </Paragraph>

      <Heading level={3}>Spans and Sprints</Heading>

      <Grid cols={2}>
        <Card icon="📦" title="Span">
          <p className="text-gray-400 text-sm mt-2">
            A defined set of blocks (1600 blocks) where a specific subset of validators is chosen. 
            Each validator has voting power influencing their selection as block producer.
          </p>
        </Card>
        <Card icon="⚡" title="Sprint">
          <p className="text-gray-400 text-sm mt-2">
            A smaller subset within a span (16 blocks) where a single block producer is designated 
            for block generation. Backup producers exist for failover.
          </p>
        </Card>
      </Grid>

      <CodeBlock
        title="Bor Parameters"
        language="bash"
        code={`heimdalldcli query bor params

# Output:
sprint_duration: 16
span_duration: 1600
producer_count: 4`}
      />

      <Heading level={3}>Block Authorization</Heading>

      <Paragraph>
        Block producers (signers) authorize blocks by signing the block's hash. Bor designates 
        backup producers in case the primary fails to generate a block.
      </Paragraph>

      <List
        items={[
          <><strong>Wiggle Time:</strong> Predefined delay before backup producer starts generating a block</>,
          <><strong>In-turn Difficulty:</strong> Blocks signed in-turn have higher difficulty than out-of-turn</>,
          <><strong>Fork Resolution:</strong> Forks resolved by selecting chain with highest cumulative difficulty</>
        ]}
      />

      <Heading level={3}>Span Structure</Heading>

      <CodeBlock
        title="Span Type"
        language="typescript"
        code={`interface Span {
  ID: number;                        // Span ID
  StartBlock: number;                // First block in span
  EndBlock: number;                  // Last block in span
  ValidatorSet: ValidatorSet;        // All validators for span
  SelectedProducers: Validator[];    // Selected block producers
  ChainID: string;                   // Bor chain ID (1370)
}`}
      />

      <Divider />

      <Heading level={2}>View Change and Span Commitment</Heading>

      <Paragraph>
        At the end of each span, Bor undergoes a view change, fetching new producers for the 
        subsequent span. This involves:
      </Paragraph>

      <List
        ordered
        items={[
          'HTTP call to Heimdall node for new span data',
          'commitSpan call to BorValidatorSet genesis contract',
          'Validation of new producer set',
          'Switch to new validators for block production'
        ]}
      />

      <Divider />

      <Heading level={2}>State Synchronization</Heading>

      <Paragraph>
        Bor features a mechanism to relay events from the Polygon chain. This ensures consistency 
        between Polygon and Ramestta chains.
      </Paragraph>

      <Heading level={3}>State Sync Process</Heading>

      <List
        ordered
        items={[
          'StateSynced event triggered on Polygon StateSender contract',
          'Heimdall validators monitor and validate these events',
          'Events passed to Bor layer at start of every sprint',
          'Bor executes system call to StateReceiver contract',
          'State updated via IStateReceiver.onStateReceive()'
        ]}
      />

      <CodeBlock
        title="State Receiver Interface"
        language="solidity"
        code={`// IStateReceiver interface on Bor
interface IStateReceiver {
    function onStateReceive(
        uint256 stateId,
        bytes calldata data
    ) external;
}

// Bor makes system calls internally with system address
// to change state without a transaction`}
      />

      <Heading level={3}>State-Sync Logs</Heading>

      <Paragraph>
        State-sync logs are handled differently from normal logs in Bor:
      </Paragraph>

      <List
        items={[
          'Bor produces a new transaction/receipt for state-sync after each sprint',
          'Includes all logs for state-sync operations',
          'TX hash derived from block number and block hash',
          'Does not alter consensus logic'
        ]}
      />

      <Divider />

      <Heading level={2}>CLI Commands</Heading>

      <Heading level={3}>Frequently Used Commands</Heading>

      <CodeBlock
        title="Bor IPC Commands"
        language="bash"
        code={`# Connect to Bor IPC
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
exit`}
      />

      <Heading level={3}>Span Queries</Heading>

      <CodeBlock
        title="Query Spans"
        language="bash"
        code={`# Query current span
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
  --chain-id <heimdall-chain-id>`}
      />

      <Heading level={3}>Configuration Commands</Heading>

      <CodeBlock
        title="Sync and Status"
        language="bash"
        code={`# Check Heimdall sync status
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
  -d '{"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}'`}
      />

      <Heading level={3}>Node Management</Heading>

      <CodeBlock
        title="Service Management"
        language="bash"
        code={`# Stop Heimdall and Bor services (Linux packages)
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
sudo kill -9 <PID>`}
      />

      <Heading level={3}>Peer Management</Heading>

      <CodeBlock
        title="Retrieve Peer Details"
        language="bash"
        code={`# Connect to Bor and list peers
bor attach bor.ipc

# Inside console:
admin.peers.forEach(function(value) {
    console.log(value.enode + ',')
})

exit`}
      />

      <Divider />

      <Heading level={2}>RPC Methods</Heading>

      <Table
        headers={['Method', 'Description', 'Example']}
        rows={[
          ['eth_blockNumber', 'Get current block number', 'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","id":1}\''],
          ['eth_getBlockByNumber', 'Get block by number', 'params: ["0x1b4", true]'],
          ['eth_getBalance', 'Get account balance', 'params: ["0x...", "latest"]'],
          ['eth_sendRawTransaction', 'Send signed transaction', 'params: ["0x...signedTx"]'],
          ['bor_getSigners', 'Get block signers', 'params: ["0x1b4"]'],
          ['bor_getCurrentValidators', 'Get current validators', 'params: []']
        ]}
      />

      <Divider />

      <Heading level={2}>Genesis Contracts</Heading>

      <Paragraph>
        Bor includes several genesis contracts deployed at initialization:
      </Paragraph>

      <Table
        headers={['Contract', 'Address', 'Purpose']}
        rows={[
          ['BorValidatorSet', '0x0000...1000', 'Manages validator set, receives span commits'],
          ['StateReceiver', '0x0000...1001', 'Receives state sync from Polygon'],
          ['MRC20 (RAMA)', '0x0000...1010', 'Native RAMA token - gas fees, staking']
        ]}
      />

      <InfoBox type="warning" title="System Addresses">
        Genesis contracts use special system addresses. The system call mechanism allows 
        Bor to change contract state without creating a normal transaction.
      </InfoBox>

      <Heading level={2}>Configuration</Heading>

      <Paragraph>
        Key Bor configuration parameters:
      </Paragraph>

      <Table
        headers={['Parameter', 'Value', 'Description']}
        rows={[
          ['NetworkId', '1370', 'Ramestta mainnet chain ID'],
          ['ChainId', '1370', 'EIP-155 chain identifier'],
          ['Block Time', '~2 seconds', 'Target block interval'],
          ['Sprint', '16 blocks', 'Single producer period'],
          ['Span', '1600 blocks', 'Producer set period'],
          ['Gas Limit', '20,000,000', 'Block gas limit']
        ]}
      />

      <InfoBox type="success" title="Next Steps">
        Learn about <a href="/docs?page=heimdall" className="text-primary-400 hover:underline">Heimdall consensus layer</a> or 
        start <a href="/docs?page=quickstart" className="text-primary-400 hover:underline">deploying smart contracts</a>.
      </InfoBox>
    </div>
  );
};

export default BorPage;
