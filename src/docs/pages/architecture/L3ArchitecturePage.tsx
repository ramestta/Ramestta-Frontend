import React from 'react';
import { Heading, Paragraph, InfoBox, Table, Card, Grid, List, Divider } from '../../components/DocsComponents';

const L3ArchitecturePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>L3 Architecture</Heading>
      
      <Paragraph>
        Ramestta is a Layer-3 (L3) blockchain that operates on top of Polygon (Layer-2), 
        which itself is built on Ethereum (Layer-1). This multi-layer architecture provides 
        the best combination of security, scalability, and cost-efficiency.
      </Paragraph>

      <InfoBox type="info" title="What is Layer-3?">
        Layer-3 solutions are application-specific chains built on top of Layer-2 networks. 
        They inherit security from lower layers while achieving higher throughput and lower 
        costs through specialized optimizations.
      </InfoBox>

      <Heading level={2}>The Layer Stack</Heading>

      <div className="bg-gray-800/50 rounded-lg p-6 my-6">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔷</span>
              <div>
                <h4 className="text-white font-semibold">Layer 3: Ramestta</h4>
                <p className="text-gray-400 text-sm">Application Layer • High TPS • Micro-fees</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="text-gray-500">↓ Checkpoints</div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⬡</span>
              <div>
                <h4 className="text-white font-semibold">Layer 2: Polygon</h4>
                <p className="text-gray-400 text-sm">Scaling Layer • Parent Chain • Security Anchor</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="text-gray-500">↓ State Commits</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⟠</span>
              <div>
                <h4 className="text-white font-semibold">Layer 1: Ethereum</h4>
                <p className="text-gray-400 text-sm">Settlement Layer • Ultimate Security • Decentralization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heading level={2}>Why Layer-3?</Heading>

      <Heading level={3}>Scalability Benefits</Heading>

      <Table
        headers={['Metric', 'Ethereum (L1)', 'Polygon (L2)', 'Ramestta (L3)']}
        rows={[
          ['TPS', '~15-30', '~7,000', '65,000+'],
          ['Block Time', '~12 sec', '~2 sec', '~2 sec'],
          ['Avg Gas Cost', '$1-100+', '$0.01-0.10', '$0.0002-0.001'],
          ['Finality', '~15 min', '~5 min', '~2 sec*'],
        ]}
      />

      <Paragraph className="text-sm text-gray-400">
        * Soft finality at L3 level. Full finality inherited through checkpoint system.
      </Paragraph>

      <Heading level={3}>Key Advantages</Heading>

      <Grid cols={2}>
        <Card icon="⚡" title="Ultra-Low Fees">
          <p className="text-gray-400 text-sm mt-2">
            By operating at L3, transaction costs are minimized to fractions of a cent, 
            enabling micro-transactions and high-frequency operations.
          </p>
        </Card>
        <Card icon="🚀" title="Massive Throughput">
          <p className="text-gray-400 text-sm mt-2">
            Dedicated block space means no competition with other dApps. 
            65,000+ TPS with room to scale horizontally.
          </p>
        </Card>
        <Card icon="🔒" title="Inherited Security">
          <p className="text-gray-400 text-sm mt-2">
            Security guarantees flow from Ethereum through Polygon. No need to 
            bootstrap a new security model from scratch.
          </p>
        </Card>
        <Card icon="🔄" title="EVM Equivalence">
          <p className="text-gray-400 text-sm mt-2">
            100% compatible with Ethereum tooling. Deploy existing contracts 
            with zero code changes.
          </p>
        </Card>
      </Grid>

      <Divider />

      <Heading level={2}>Architecture Components</Heading>

      <Heading level={3}>Consensus Layer: Heimdall</Heading>

      <Paragraph>
        Heimdall is Ramestta's proof-of-stake consensus layer, based on Tendermint BFT:
      </Paragraph>

      <List
        items={[
          'Manages validator set and staking',
          'Creates and submits checkpoints to Polygon',
          'Handles state sync between layers',
          'Provides Byzantine fault tolerance',
          'Achieves consensus with 2/3+ validator agreement'
        ]}
      />

      <Heading level={3}>Execution Layer: Bor</Heading>

      <Paragraph>
        Bor is the EVM-compatible execution layer that processes transactions:
      </Paragraph>

      <List
        items={[
          'Full EVM compatibility (London fork)',
          'Processes blocks and executes transactions',
          'Maintains state and contract storage',
          'Produces blocks selected by Heimdall',
          'Supports all Ethereum opcodes and precompiles'
        ]}
      />

      <Heading level={2}>Security Model</Heading>

      <Heading level={3}>Multi-Layer Security</Heading>

      <div className="bg-gray-800/50 rounded-lg p-4 my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 text-gray-400">Layer</th>
              <th className="text-left py-2 text-gray-400">Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-2 text-white">Ramestta (L3)</td>
              <td className="py-2 text-gray-300">PoS validators with RAMA staking</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-2 text-white">Polygon (L2)</td>
              <td className="py-2 text-gray-300">Checkpoints + PoS with MATIC staking</td>
            </tr>
            <tr>
              <td className="py-2 text-white">Ethereum (L1)</td>
              <td className="py-2 text-gray-300">PoS with ETH staking (~$50B+ staked)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Heading level={3}>Checkpoint System</Heading>

      <Paragraph>
        Ramestta periodically submits checkpoints to Polygon, which include:
      </Paragraph>

      <List
        items={[
          'Merkle root of all blocks since last checkpoint',
          'Validator signatures (requires 2/3+ agreement)',
          'State root for verification',
          'Checkpoint interval: configurable (typically every 256 blocks)'
        ]}
      />

      <InfoBox type="success" title="Finality Guarantees">
        Transactions receive soft finality within ~2 seconds at L3. After checkpoint 
        submission to Polygon (~30 min), transactions gain L2 security. Full Ethereum 
        security is achieved after Polygon's checkpoint to Ethereum (~2-3 hours).
      </InfoBox>

      <Heading level={2}>Data Availability</Heading>

      <Paragraph>
        All transaction data is available on-chain at the Ramestta layer. The checkpoint 
        system ensures that even if Ramestta validators become unavailable, users can 
        reconstruct state and withdraw assets using checkpoint proofs.
      </Paragraph>

      <Heading level={2}>Comparison with Other L3 Approaches</Heading>

      <Table
        headers={['Approach', 'Ramestta', 'Rollups', 'Validiums']}
        rows={[
          ['Data Availability', 'On-chain (L3)', 'On-chain (L1)', 'Off-chain'],
          ['Execution', 'L3 validators', 'Sequencer + L1', 'Off-chain'],
          ['Finality', '~2s soft, hours hard', 'Minutes to hours', 'Varies'],
          ['Cost', 'Ultra-low', 'Low', 'Very low'],
          ['Complexity', 'Moderate', 'High', 'High'],
        ]}
      />

      <Heading level={2}>Use Cases</Heading>

      <Paragraph>
        The L3 architecture makes Ramestta ideal for:
      </Paragraph>

      <Grid cols={3}>
        <Card icon="🎮" title="Gaming">
          <p className="text-gray-400 text-sm mt-2">
            In-game transactions, NFTs, player rewards
          </p>
        </Card>
        <Card icon="💳" title="Payments">
          <p className="text-gray-400 text-sm mt-2">
            Micro-payments, remittances, POS
          </p>
        </Card>
        <Card icon="📊" title="DeFi">
          <p className="text-gray-400 text-sm mt-2">
            DEXs, lending, yield farming
          </p>
        </Card>
        <Card icon="🎨" title="NFTs">
          <p className="text-gray-400 text-sm mt-2">
            Minting, trading, marketplaces
          </p>
        </Card>
        <Card icon="🏢" title="Enterprise">
          <p className="text-gray-400 text-sm mt-2">
            Supply chain, identity, records
          </p>
        </Card>
        <Card icon="🌐" title="Social">
          <p className="text-gray-400 text-sm mt-2">
            Social tokens, tipping, rewards
          </p>
        </Card>
      </Grid>
    </div>
  );
};

export default L3ArchitecturePage;
