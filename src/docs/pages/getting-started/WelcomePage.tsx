import React from 'react';
import { Heading, Paragraph, InfoBox, Grid, Card, List, CodeBlock, Table, Badge } from '../../components/DocsComponents';
import { networkConfig, usefulLinks } from '../../data/docsData';

const WelcomePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Welcome to Ramestta</Heading>
      
      <Paragraph>
        Ramestta is an institutional-grade <strong>Layer-3 blockchain</strong> built on Polygon (L2), 
        secured by Ethereum (L1). Designed for real-world adoption, Ramestta delivers sub-2 second finality, 
        deterministic micro-fees ($0.0002-$0.001), and 65,000+ TPS with 100% EVM equivalence.
      </Paragraph>

      <InfoBox type="info" title="What is Layer-3?">
        Layer-3 (L3) is an application-specific blockchain built on top of Layer-2 solutions like Polygon. 
        This architecture provides the ultimate combination of scalability, security, and cost-efficiency 
        by inheriting trust from Ethereum through Polygon checkpoints.
      </InfoBox>

      <Heading level={2}>Network Architecture</Heading>
      
      <CodeBlock
        title="Network Stack"
        language="text"
        code={`L1: Ethereum (Root Chain)
    ↓ Security & Finality
L2: Polygon (Parent Chain)
    ↓ Checkpoints & Bridge
L3: Ramestta (Application Chain)
    → Fast finality (~2s)
    → Micro-fees ($0.0002-$0.001)
    → 65,000+ TPS`}
      />

      <Heading level={2}>Key Features</Heading>

      <Grid cols={3}>
        <Card
          icon="⚡"
          title="Sub-2 Second Finality"
          description="Programmable finality with instant L3 confirmation, L2 hard finality, and L1 ultimate security."
        />
        <Card
          icon="💰"
          title="Micro-Fees"
          description="Deterministic transaction costs between $0.0002-$0.001 - 1000× cheaper than L1/L2."
        />
        <Card
          icon="🚀"
          title="65,000+ TPS"
          description="Enterprise-grade throughput with horizontal scaling via multi-instance architecture."
        />
        <Card
          icon="🔒"
          title="Ethereum Security"
          description="Inherits trust from Ethereum via Polygon checkpoints with economic guarantees."
        />
        <Card
          icon="🔧"
          title="100% EVM Equivalence"
          description="Fully equivalent to EVM. Migrate from Polygon/Ethereum with zero code changes."
        />
        <Card
          icon="🌐"
          title="Multi-Chain Bridge"
          description="Seamless asset transfers between Polygon and Ramestta via RamaBridge."
        />
      </Grid>

      <Heading level={2}>Quick Stats</Heading>

      <Table
        headers={['Property', 'Value']}
        rows={[
          ['Network Type', <Badge variant="success">Layer-3 (L3)</Badge>],
          ['Chain ID', <code className="text-primary-400">{networkConfig.mainnet.chainId}</code>],
          ['Native Token', 'RAMA'],
          ['Block Time', networkConfig.mainnet.blockTime],
          ['Consensus', networkConfig.mainnet.consensus],
          ['Parent Chain', 'Polygon (Chain ID: 137)'],
          ['Root Chain', 'Ethereum (Chain ID: 1)'],
          ['TPS Capacity', '65,000+'],
          ['Gas Fee Range', '$0.0002 - $0.001']
        ]}
      />

      <Heading level={2}>Ecosystem</Heading>

      <Grid cols={2}>
        <Card
          icon="🔍"
          title="RamaScan"
          description="Block explorer for Ramestta network"
          href={usefulLinks.explorer}
        />
        <Card
          icon="🌉"
          title="RamaBridge"
          description="Cross-chain asset bridge"
          href={usefulLinks.bridge}
        />
        <Card
          icon="💱"
          title="RamaSwap"
          description="Decentralized exchange"
          href={usefulLinks.swap}
        />
        <Card
          icon="💳"
          title="RamaPay"
          description="Self-custody HD wallet"
          href="https://ramestta.com/ramapay"
        />
      </Grid>

      <Heading level={2}>Getting Started</Heading>

      <List
        ordered
        items={[
          'Add Ramestta network to your wallet (MetaMask, RamaPay)',
          'Bridge assets from Polygon to Ramestta via RamaBridge',
          'Start building dApps using our SDK or deploy directly with Hardhat/Remix',
          'Explore the ecosystem: swap tokens, stake RAMA, build on Ramestta'
        ]}
      />

      <InfoBox type="success" title="Ready to Build?">
        Check out our <a href="#" className="text-primary-400 hover:underline">Quick Start Guide</a> to 
        deploy your first smart contract on Ramestta in under 5 minutes!
      </InfoBox>
    </div>
  );
};

export default WelcomePage;
