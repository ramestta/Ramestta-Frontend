import React from 'react';
import { Heading, Paragraph, InfoBox, Grid, Card, List, Divider, Table, CodeBlock } from '../../components/DocsComponents';

const OverviewPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Overview</Heading>
      
      <Paragraph>
        Ramestta is a Proof-of-Stake (PoS) side chain to Polygon, designed by the open source community 
        to achieve true decentralization and reduce transaction fees for the EVM ecosystem. By leveraging 
        Polygon's established infrastructure as its parent chain, Ramestta provides a scalable, secure, 
        and cost-effective platform for decentralized applications.
      </Paragraph>

      <Heading level={2}>Polygon: Ramestta's Foundation</Heading>

      <Paragraph>
        Polygon serves as the foundation and parent chain for Ramestta. As one of the most successful 
        blockchain scaling solutions for Ethereum, Polygon has proven its ability to handle high transaction 
        volumes while maintaining security through its Proof-of-Stake consensus and checkpoint system.
      </Paragraph>

      <InfoBox type="info" title="Why Build on Polygon?">
        Polygon's mature ecosystem, established validator network, and battle-tested bridge infrastructure 
        provide the ideal foundation for Ramestta. This allows Ramestta to focus on application-layer 
        optimizations while inheriting robust security guarantees.
      </InfoBox>

      <Heading level={2}>Ramestta: A Side Chain Solution</Heading>

      <Paragraph>
        Ramestta operates as a side chain, using the Plasma bridge framework to achieve secure and efficient 
        asset transfers. This architecture enables:
      </Paragraph>

      <List
        items={[
          <><strong>Off-chain Computation:</strong> Transaction processing occurs on the Ramestta chain, reducing load on parent chain</>,
          <><strong>Plasma Security:</strong> Assets are secured through the Plasma bridge framework with fraud proofs</>,
          <><strong>Fast Finality:</strong> Transactions confirm in approximately 2 seconds</>,
          <><strong>Low Fees:</strong> Gas costs below $0.01 per transaction</>
        ]}
      />

      <Heading level={2}>Core Benefits</Heading>

      <Grid cols={2}>
        <Card icon="🔒" title="Security">
          <p className="text-gray-400 text-sm mt-2">
            Ramestta uses Proof-of-Stake consensus with validators staking RAMA tokens. The Heimdall 
            consensus layer (based on Tendermint) provides Byzantine fault tolerance requiring 2/3+ 
            validator agreement. Regular checkpoints to Polygon inherit Ethereum's security guarantees.
          </p>
        </Card>
        <Card icon="🔍" title="Transparency">
          <p className="text-gray-400 text-sm mt-2">
            All transactions and validator activities are publicly verifiable through RamaScan block explorer. 
            Smart contract source code can be verified and audited by anyone.
          </p>
        </Card>
        <Card icon="⚡" title="Efficiency">
          <p className="text-gray-400 text-sm mt-2">
            Transactions achieve finality in approximately 2 seconds. The Bor execution layer processes 
            blocks with optimized EVM execution, supporting enterprise-grade throughput.
          </p>
        </Card>
        <Card icon="💰" title="Cost-Effectiveness">
          <p className="text-gray-400 text-sm mt-2">
            Transaction fees are minimal and predictable - below $0.01. EIP-1559 implementation ensures 
            fee predictability while burning the base fee for deflationary tokenomics.
          </p>
        </Card>
        <Card icon="🌐" title="Decentralization">
          <p className="text-gray-400 text-sm mt-2">
            The network is maintained by a globally distributed set of validators. Governance proposals 
            can modify network parameters, ensuring community-driven evolution.
          </p>
        </Card>
        <Card icon="🔧" title="EVM Compatibility">
          <p className="text-gray-400 text-sm mt-2">
            100% EVM compatible - all Ethereum tools, wallets, and contracts work seamlessly. Deploy 
            existing Solidity contracts without any modifications.
          </p>
        </Card>
      </Grid>

      <Divider />

      <Heading level={2}>Architecture Components</Heading>

      <Heading level={3}>Heimdall - Consensus Layer</Heading>
      <Paragraph>
        Heimdall is the heart of the Ramestta network. Based on Tendermint BFT (Byzantine Fault Tolerant) 
        consensus, it manages:
      </Paragraph>
      <List
        items={[
          'Validator set management and staking operations',
          'Block producer selection for each span',
          'Checkpoint submission to Polygon',
          'State synchronization between layers',
          'Governance proposals and parameter updates'
        ]}
      />

      <Heading level={3}>Bor - Execution Layer</Heading>
      <Paragraph>
        Bor is the EVM-compatible execution layer that processes all transactions:
      </Paragraph>
      <List
        items={[
          'Full Ethereum Virtual Machine (EVM) compatibility',
          'Block production following Clique consensus (EIP-225)',
          'State management and smart contract execution',
          'State sync from Polygon via system calls'
        ]}
      />

      <CodeBlock
        title="Key Architecture Parameters"
        language="text"
        code={`Consensus: Proof-of-Stake (Heimdall + Bor)
Block Time: ~2 seconds
Sprint Duration: 16 blocks
Span Duration: 1600 blocks
Producer Count: 4 validators per span
Checkpoint Interval: ~30 minutes to Polygon`}
      />

      <Heading level={2}>Use Cases</Heading>

      <Grid cols={2}>
        <Card icon="🎮" title="Gaming & NFTs">
          <p className="text-gray-400 text-sm mt-2">
            High-frequency in-game transactions, NFT minting, and trading with instant finality 
            and minimal costs enable true blockchain gaming experiences.
          </p>
        </Card>
        <Card icon="💳" title="Payments">
          <p className="text-gray-400 text-sm mt-2">
            Point-of-sale, micro-payments, and streaming payments become viable with sub-cent 
            transaction fees and fast confirmation times.
          </p>
        </Card>
        <Card icon="📊" title="DeFi Applications">
          <p className="text-gray-400 text-sm mt-2">
            Decentralized exchanges, lending protocols, and yield farming with lower costs 
            make DeFi accessible to all users.
          </p>
        </Card>
        <Card icon="🏢" title="Enterprise">
          <p className="text-gray-400 text-sm mt-2">
            Supply chain tracking, identity management, and business operations benefit from 
            predictable costs and fast finality.
          </p>
        </Card>
      </Grid>

      <Heading level={2}>Current Services</Heading>

      <Table
        headers={['Service', 'Description', 'URL']}
        rows={[
          ['RamaScan', 'Block explorer for transactions, contracts, and validators', 'ramascan.com'],
          ['RamaBridge', 'Cross-chain asset transfers between Polygon and Ramestta', 'bridge.ramestta.com'],
          ['RamaSwap', 'Decentralized exchange for token trading', 'swap.ramestta.com'],
          ['RamaPay', 'Self-custody wallet for RAMA and tokens', 'ramestta.com/ramapay'],
          ['Staking Portal', 'Validator and delegator staking interface', 'wallet.ramestta.com']
        ]}
      />

      <InfoBox type="info" title="EIP-1559 Token Economics">
        Ramestta implements EIP-1559, which burns the base fee portion of every transaction. 
        As network usage increases, more RAMA tokens are burned, creating deflationary pressure 
        and aligning network usage with token value.
      </InfoBox>

      <InfoBox type="success" title="Next Steps">
        Ready to start building? Continue to the <a href="/docs?page=quickstart" className="text-primary-400 hover:underline">Quick Start</a> guide to deploy 
        your first contract, or explore the <a href="/docs?page=architecture" className="text-primary-400 hover:underline">Architecture</a> section for deeper 
        technical understanding of Heimdall and Bor.
      </InfoBox>
    </div>
  );
};

export default OverviewPage;
