import React from 'react';
import { Heading, Paragraph, InfoBox, Grid, Card, List, Divider } from '../../components/DocsComponents';

const OverviewPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Overview</Heading>
      
      <Paragraph>
        Ramestta represents the next evolution in blockchain scalability - a Layer-3 solution that builds 
        upon Polygon's proven Layer-2 infrastructure while maintaining Ethereum's security guarantees. 
        This document provides a comprehensive overview of Ramestta's architecture, benefits, and use cases.
      </Paragraph>

      <Heading level={2}>The Problem We Solve</Heading>

      <Paragraph>
        Despite significant improvements in blockchain scalability, existing solutions still face challenges:
      </Paragraph>

      <Grid cols={2}>
        <Card icon="💸" title="High Transaction Costs">
          <p className="text-gray-400 text-sm mt-2">
            Even on L2 solutions, transaction costs can be prohibitive for micro-transactions, 
            gaming, and high-frequency applications.
          </p>
        </Card>
        <Card icon="⏱️" title="Slow Finality">
          <p className="text-gray-400 text-sm mt-2">
            Many applications require instant confirmation. Waiting minutes for finality 
            creates poor user experience.
          </p>
        </Card>
        <Card icon="📈" title="Limited Throughput">
          <p className="text-gray-400 text-sm mt-2">
            Mass adoption requires throughput measured in tens of thousands of TPS, 
            not hundreds.
          </p>
        </Card>
        <Card icon="🔧" title="Developer Friction">
          <p className="text-gray-400 text-sm mt-2">
            Migrating between chains often requires code changes, security re-audits, 
            and learning new tooling.
          </p>
        </Card>
      </Grid>

      <Heading level={2}>The Ramestta Solution</Heading>

      <Paragraph>
        Ramestta addresses these challenges through its innovative Layer-3 architecture:
      </Paragraph>

      <List
        items={[
          <><strong>Deterministic Micro-Fees:</strong> Transaction costs between $0.0002-$0.001, making micro-transactions economically viable</>,
          <><strong>Sub-2 Second Finality:</strong> Instant confirmation at L3 level with progressive security through L2 and L1</>,
          <><strong>65,000+ TPS:</strong> Horizontal scaling through multi-instance architecture for enterprise-grade throughput</>,
          <><strong>100% EVM Equivalence:</strong> Not just compatible - fully equivalent. Deploy existing contracts with zero changes</>,
          <><strong>Ethereum Security:</strong> Cryptographic and economic guarantees inherited through Polygon checkpoints</>
        ]}
      />

      <Heading level={2}>Technical Foundation</Heading>

      <Heading level={3}>Polygon: The Parent Chain</Heading>

      <Paragraph>
        Polygon serves as Ramestta's parent chain (L2), providing a highly successful blockchain scaling 
        solution for Ethereum. It enables faster and more cost-effective transactions while maintaining 
        security through its Proof-of-Stake consensus and checkpoint system to Ethereum mainnet.
      </Paragraph>

      <Heading level={3}>Ramestta: The Application Layer</Heading>

      <Paragraph>
        Ramestta operates as a side chain to Polygon, optimized for specific use cases:
      </Paragraph>

      <Grid cols={2}>
        <Card icon="🎮" title="Gaming & Metaverse">
          <p className="text-gray-400 text-sm mt-2">
            High-frequency transactions, NFT minting, and in-game economies with instant finality.
          </p>
        </Card>
        <Card icon="💳" title="Payments">
          <p className="text-gray-400 text-sm mt-2">
            Point-of-sale systems, micro-payments, and payment streaming with near-zero fees.
          </p>
        </Card>
        <Card icon="📊" title="DeFi">
          <p className="text-gray-400 text-sm mt-2">
            High-frequency trading, yield farming, and complex financial instruments.
          </p>
        </Card>
        <Card icon="🏢" title="Enterprise">
          <p className="text-gray-400 text-sm mt-2">
            Supply chain, identity, and business applications requiring predictable costs.
          </p>
        </Card>
      </Grid>

      <Divider />

      <Heading level={2}>Benefits of Ramestta</Heading>

      <Heading level={3}>🔒 Security</Heading>
      <Paragraph>
        Ramestta employs its own Proof-of-Stake consensus mechanism with validators staking RAMA tokens. 
        Security is further enhanced through:
      </Paragraph>
      <List
        items={[
          'Heimdall consensus layer based on Tendermint',
          'Regular checkpoints submitted to Polygon mainnet',
          'Economic security through staked validator tokens',
          'Slashing mechanisms for malicious behavior'
        ]}
      />

      <Heading level={3}>🔍 Transparency</Heading>
      <Paragraph>
        All transactions and activities are publicly verifiable through RamaScan explorer. 
        Smart contract code can be verified and audited by anyone.
      </Paragraph>

      <Heading level={3}>⚡ Efficiency</Heading>
      <Paragraph>
        Transactions are processed in approximately 2 seconds with finality. The network 
        can handle enterprise-grade throughput of 65,000+ transactions per second.
      </Paragraph>

      <Heading level={3}>💰 Cost-Effectiveness</Heading>
      <Paragraph>
        Gas fees are deterministic and predictable, ranging from $0.0002 to $0.001 per transaction. 
        This makes Ramestta ideal for applications requiring high transaction volumes.
      </Paragraph>

      <Heading level={3}>🌐 Decentralization</Heading>
      <Paragraph>
        The network is maintained by a distributed set of validators, ensuring no single entity 
        can control or manipulate the blockchain.
      </Paragraph>

      <InfoBox type="info" title="EIP-1559 Support">
        Ramestta implements EIP-1559 token burning, resulting in more predictable gas fees 
        and deflationary token economics as network usage increases.
      </InfoBox>

      <Heading level={2}>Current Services</Heading>

      <List
        items={[
          <><strong>Ramestta Wallet (RamaPay):</strong> Send, receive, and store assets on the Ramestta network</>,
          <><strong>RamaBridge:</strong> Cross-network deposits and withdrawals between Polygon and Ramestta</>,
          <><strong>Staking:</strong> Earn rewards by staking RAMA tokens as a validator or delegator</>,
          <><strong>RamaSwap:</strong> Decentralized exchange for token swaps</>,
          <><strong>RamaScan:</strong> Block explorer for transaction and contract verification</>
        ]}
      />

      <InfoBox type="success" title="Next Steps">
        Ready to start building? Continue to the <strong>Quick Start</strong> guide to deploy 
        your first contract, or explore the <strong>Architecture</strong> section for deeper 
        technical understanding.
      </InfoBox>
    </div>
  );
};

export default OverviewPage;
