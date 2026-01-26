import React from 'react';
import { Heading, Paragraph, InfoBox, Table, Card, Grid, List, Divider, CodeBlock } from '../../components/DocsComponents';

const L3ArchitecturePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Architecture</Heading>
      
      <Paragraph>
        Ramestta is a Proof-of-Stake side chain to Polygon, built using the same proven architecture 
        that powers Polygon. The network consists of two main layers: Heimdall (consensus) and Bor (execution), 
        working together to provide fast, secure, and low-cost transactions.
      </Paragraph>

      <InfoBox type="info" title="Polygon Heritage">
        Ramestta's architecture is based on Polygon's successful PoS design, using forked and customized 
        versions of Heimdall (Tendermint-based) and Bor (Geth-based) to achieve optimal performance.
      </InfoBox>

      <Heading level={2}>The Layer Stack</Heading>

      <div className="bg-gray-800/50 rounded-lg p-6 my-6">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⟠</span>
              <div>
                <h4 className="text-white font-semibold">Ethereum (Root Chain)</h4>
                <p className="text-gray-400 text-sm">Settlement Layer • Ultimate Security • ~$50B+ Staked</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="text-gray-500">↑ State Commits</div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⬡</span>
              <div>
                <h4 className="text-white font-semibold">Polygon (Parent Chain - ID: 137)</h4>
                <p className="text-gray-400 text-sm">Scaling Layer • Staking Contracts • RootChain</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="text-gray-500">↑ Checkpoints</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔷</span>
              <div>
                <h4 className="text-white font-semibold">Ramestta (PoS Side Chain - ID: 1370)</h4>
                <p className="text-gray-400 text-sm">Application Layer • Heimdall + Bor • ~2s Blocks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <Heading level={2}>Heimdall - Consensus Layer</Heading>

      <Paragraph>
        Heimdall is the heart of the Ramestta network. It manages validators, block producer selection, 
        spans, the state-sync mechanism between Polygon and Ramestta, and other essential aspects of the 
        system. It uses the Cosmos-SDK and a forked version of Tendermint, called Peppermint.
      </Paragraph>

      <Heading level={3}>Key Responsibilities</Heading>

      <Grid cols={2}>
        <Card icon="👥" title="Validator Management">
          <p className="text-gray-400 text-sm mt-2">
            Manages the validator set, staking, delegation, and rewards distribution. Validators 
            stake RAMA tokens on Polygon and are tracked via Heimdall state.
          </p>
        </Card>
        <Card icon="📦" title="Span Management">
          <p className="text-gray-400 text-sm mt-2">
            Defines spans (sets of blocks) and selects block producers for each span. Uses weighted 
            random selection based on validator stake/power.
          </p>
        </Card>
        <Card icon="✅" title="Checkpoints">
          <p className="text-gray-400 text-sm mt-2">
            Creates and submits checkpoints to Polygon containing Merkle root of Bor blocks. 
            Requires 2/3+ validator signatures for submission.
          </p>
        </Card>
        <Card icon="🔄" title="State Sync">
          <p className="text-gray-400 text-sm mt-2">
            Handles state synchronization between Polygon and Ramestta. Listens for StateSynced 
            events and passes them to Bor layer.
          </p>
        </Card>
      </Grid>

      <Heading level={3}>Heimdall Modules</Heading>

      <Table
        headers={['Module', 'Purpose', 'Key Functions']}
        rows={[
          ['Auth', 'Transaction authentication', 'Gas/fees, signatures, replay protection'],
          ['Bank', 'Balance transfers', 'MsgSend, MsgMultiSend between accounts'],
          ['Staking', 'Validator operations', 'Join, exit, stake update, signer change'],
          ['Checkpoint', 'Checkpoint management', 'Propose, ack, no-ack checkpoints'],
          ['Bor', 'Span management', 'Span proposal, producer selection'],
          ['Topup', 'Fee management', 'Top-up Heimdall fees, withdraw'],
          ['Governance', 'Parameter changes', 'Proposals, voting, param updates'],
          ['Chainmanager', 'Chain configuration', 'Contract addresses, chain IDs']
        ]}
      />

      <Heading level={3}>Key Management</Heading>

      <Paragraph>
        Each validator uses two keys to manage activities on Ramestta:
      </Paragraph>

      <List
        items={[
          <><strong>Signer Key (Hot Wallet):</strong> Kept on the node, used for signing Heimdall blocks, checkpoints, and other signing activities. Requires RAMA tokens for Heimdall fees.</>,
          <><strong>Owner Key (Cold Wallet):</strong> Kept secure, used for staking, re-stake, changing signer key, withdraw rewards, and managing delegation. Transactions via Polygon chain.</>
        ]}
      />

      <Divider />

      <Heading level={2}>Bor - Execution Layer</Heading>

      <Paragraph>
        Bor is the core execution layer that processes all transactions. It operates on the principles 
        outlined in EIP-225, following the Clique consensus protocol. Bor produces blocks and executes 
        smart contracts with full EVM compatibility.
      </Paragraph>

      <Heading level={3}>Block Production</Heading>

      <CodeBlock
        title="Bor Parameters"
        language="text"
        code={`Sprint Duration: 16 blocks
Span Duration: 1600 blocks  
Producer Count: 4 validators per span
Block Time: ~2 seconds
Bor Chain ID: 1370`}
      />

      <Heading level={3}>Validator Selection Process</Heading>

      <List
        ordered
        items={[
          'Validators are assigned slots proportionally based on their stake',
          'Historical Polygon block data is used as a seed to shuffle the validator array',
          'Validators are selected based on producer count maintained by governance',
          'Tendermint\'s proposer selection algorithm chooses a producer for each sprint',
          'Backup producers are designated in case primary fails (with wiggle time delay)'
        ]}
      />

      <Heading level={3}>Consensus Mechanics</Heading>

      <Paragraph>
        In Ramestta's PoS system:
      </Paragraph>

      <List
        items={[
          <><strong>Stake:</strong> Participants stake RAMA tokens on Polygon's staking contract to become validators</>,
          <><strong>Selection:</strong> The bor module in Heimdall selects active validators as block producers</>,
          <><strong>Spans:</strong> A span is a defined set of blocks with a specific subset of validators</>,
          <><strong>Sprints:</strong> Within a span, each sprint designates a single block producer</>,
          <><strong>Difficulty:</strong> In-turn blocks have higher difficulty than out-of-turn signatures</>,
          <><strong>Fork Resolution:</strong> Forks are resolved by selecting the chain with highest cumulative difficulty</>
        ]}
      />

      <Divider />
      <Heading level={2}>Checkpoints</Heading>

      <Paragraph>
        Checkpoints are vital components of the Ramestta network, representing snapshots of the Bor chain 
        state. These checkpoints are attested by a majority of the validator set before being validated 
        and submitted on Polygon contracts.
      </Paragraph>

      <Heading level={3}>Checkpoint Lifecycle</Heading>

      <List
        ordered
        items={[
          'Heimdall selects the next proposer using Tendermint\'s leader selection algorithm',
          'Proposer creates checkpoint with Merkle root of Bor blocks',
          'Validators verify and sign the checkpoint (requires 2/3+ agreement)',
          'Checkpoint is submitted to Polygon\'s RootChain contract',
          'Success triggers ACK transaction; failure triggers NO-ACK and proposer change'
        ]}
      />

      <Heading level={3}>Checkpoint Structure</Heading>

      <CodeBlock
        title="CheckpointBlockHeader"
        language="typescript"
        code={`interface CheckpointBlockHeader {
  Proposer: HeimdallAddress;   // Validator who proposed
  StartBlock: number;          // First Bor block in range
  EndBlock: number;            // Last Bor block in range
  RootHash: Hash;              // Merkle root of block hashes
  AccountRootHash: Hash;       // Merkle root of account state
  TimeStamp: number;           // Checkpoint timestamp
}`}
      />

      <InfoBox type="info" title="Root Hash Calculation">
        The RootHash is calculated as a Merkle hash of Bor block hashes from StartBlock to EndBlock. 
        Each block hash = keccak256([block number, time, tx hash, receipt hash]).
      </InfoBox>

      <Divider />

      <Heading level={2}>State Sync</Heading>

      <Paragraph>
        State Sync is the mechanism that transfers data from Polygon to Ramestta. This enables 
        cross-chain communication and ensures consistency between layers.
      </Paragraph>

      <Heading level={3}>How State Sync Works</Heading>

      <List
        ordered
        items={[
          'StateSynced event is triggered on Polygon\'s StateSender contract',
          'Heimdall validators listen for and validate these events',
          'Events are passed to the Bor layer via the state-sync mechanism',
          'Bor executes system calls to update state at the start of every sprint',
          'Receiver contract on Bor implements IStateReceiver interface'
        ]}
      />

      <CodeBlock
        title="State Receiver Interface"
        language="solidity"
        code={`interface IStateReceiver {
    function onStateReceive(
        uint256 stateId,
        bytes calldata data
    ) external;
}`}
      />

      <Heading level={2}>Genesis Contracts</Heading>

      <Paragraph>
        Ramestta deploys several genesis contracts that are essential for network operation:
      </Paragraph>

      <Table
        headers={['Contract', 'Address', 'Purpose']}
        rows={[
          ['BorValidatorSet', '0x0000...1000', 'Manages validator set on Bor'],
          ['StateReceiver', '0x0000...1001', 'Receives state sync from Polygon'],
          ['MRC20 (Native)', '0x0000...1010', 'Native RAMA token contract']
        ]}
      />

      <Heading level={2}>Network Comparison</Heading>

      <Table
        headers={['Metric', 'Ethereum', 'Polygon', 'Ramestta']}
        rows={[
          ['Block Time', '~12 sec', '~2 sec', '~2 sec'],
          ['Consensus', 'PoS (Casper)', 'PoS (Heimdall)', 'PoS (Heimdall)'],
          ['TPS', '~15-30', '~7,000', '65,000+'],
          ['Avg Fee', '$1-100+', '$0.01-0.10', '<$0.01'],
          ['Finality', '~15 min', '~5 min', '~2 sec*'],
          ['EVM', 'Native', 'Compatible', 'Compatible']
        ]}
      />

      <Paragraph className="text-sm text-gray-400">
        * Soft finality at Ramestta level. Full finality achieved after checkpoint to Polygon.
      </Paragraph>

      <Heading level={2}>Use Cases</Heading>

      <Grid cols={3}>
        <Card icon="🎮" title="Gaming">
          <p className="text-gray-400 text-sm mt-2">
            In-game transactions, NFTs, player rewards with instant confirmation
          </p>
        </Card>
        <Card icon="💳" title="Payments">
          <p className="text-gray-400 text-sm mt-2">
            Micro-payments, remittances, point-of-sale with minimal fees
          </p>
        </Card>
        <Card icon="📊" title="DeFi">
          <p className="text-gray-400 text-sm mt-2">
            DEXs, lending, yield farming with fast execution
          </p>
        </Card>
        <Card icon="🎨" title="NFTs">
          <p className="text-gray-400 text-sm mt-2">
            Minting, trading, marketplaces at low cost
          </p>
        </Card>
        <Card icon="🏢" title="Enterprise">
          <p className="text-gray-400 text-sm mt-2">
            Supply chain, identity, records with predictable costs
          </p>
        </Card>
        <Card icon="🌐" title="Social">
          <p className="text-gray-400 text-sm mt-2">
            Social tokens, tipping, community rewards
          </p>
        </Card>
      </Grid>

      <InfoBox type="success" title="Learn More">
        For detailed information about specific components, see the <a href="/docs?page=heimdall" className="text-primary-400 hover:underline">Heimdall</a> and <a href="/docs?page=bor" className="text-primary-400 hover:underline">Bor</a> documentation pages.
      </InfoBox>
    </div>
  );
};

export default L3ArchitecturePage;
