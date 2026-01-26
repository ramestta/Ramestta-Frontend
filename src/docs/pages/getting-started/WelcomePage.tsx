import React from 'react';
import { Heading, Paragraph, InfoBox, Grid, Card, List, CodeBlock, Table, Badge, Divider } from '../../components/DocsComponents';
import { networkConfig, usefulLinks } from '../../data/docsData';

const WelcomePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>🤝 Welcome to Ramestta</Heading>
      
      <Paragraph>
        Ramestta was proposed by the open source community with a vision to achieve true decentralization 
        and reduce transaction fees for the EVM ecosystem. Built as a <strong>Proof-of-Stake side chain</strong> to 
        Polygon, Ramestta inherits the best features of Polygon's Layer-2 architecture while providing 
        even greater scalability, speed, and cost-efficiency.
      </Paragraph>

      <InfoBox type="info" title="Community-Driven Development">
        Ramestta is developed and maintained by an open source community committed to building a truly 
        decentralized, accessible, and efficient blockchain platform for everyone.
      </InfoBox>

      <Heading level={2}>Our Foundation: Polygon</Heading>
      
      <Paragraph>
        Polygon serves as Ramestta's foundation and parent chain. As one of the most successful 
        blockchain scaling solutions, Polygon provides the security infrastructure and proven technology 
        that Ramestta builds upon. This relationship enables Ramestta to benefit from:
      </Paragraph>

      <List
        items={[
          'Proven Proof-of-Stake consensus mechanism',
          'Established validator ecosystem and security model',
          'Battle-tested bridge infrastructure via Plasma framework',
          'Direct connection to Ethereum\'s security guarantees'
        ]}
      />

      <Heading level={2}>Ramestta PoS Chain</Heading>

      <Paragraph>
        Ramestta uses side-chains for off-chain computation, employing the Plasma bridge framework 
        for secure asset transfers. This architecture enables significantly faster and cheaper 
        transactions compared to Layer-1 solutions.
      </Paragraph>

      <Grid cols={3}>
        <Card
          icon="⚡"
          title="Speed"
          description="Faster transaction processing than Polygon with ~2 second block times and instant finality."
        />
        <Card
          icon="📈"
          title="Scalability"
          description="High throughput capable of 65,000+ transactions per second through optimized block production."
        />
        <Card
          icon="🔄"
          title="Flexibility"
          description="Full EVM compatibility enables deployment of any Ethereum smart contract without modifications."
        />
        <Card
          icon="💰"
          title="Low Cost"
          description="Transaction fees below $0.01, making micro-transactions and high-frequency operations economically viable."
        />
        <Card
          icon="🔒"
          title="Security"
          description="Proof-of-Stake consensus with validator staking and regular checkpoints to parent chain."
        />
        <Card
          icon="🌐"
          title="Decentralization"
          description="Distributed validator network ensures no single entity can control the blockchain."
        />
      </Grid>

      <Heading level={2}>Architecture Overview</Heading>
      
      <CodeBlock
        title="Network Stack"
        language="text"
        code={`Layer 1: Ethereum (Root Chain)
    ↓ State Commits & Security
Layer 2: Polygon (Parent Chain - ID: 137)
    ↓ Checkpoints & Plasma Bridge
Ramestta: PoS Side Chain (ID: 1370)
    → Heimdall (Consensus Layer - Tendermint BFT)
    → Bor (Execution Layer - EVM)
    → ~2 second blocks
    → Sub-cent transaction fees`}
      />

      <Heading level={2}>Core Benefits</Heading>

      <Grid cols={2}>
        <Card icon="🔒" title="Security">
          <p className="text-gray-400 text-sm mt-2">
            Ramestta employs Proof-of-Stake consensus with validators staking RAMA tokens. 
            The Heimdall consensus layer provides Byzantine fault tolerance with 2/3+ validator agreement.
            Regular checkpoints to Polygon ensure security inheritance from Ethereum.
          </p>
        </Card>
        <Card icon="🔍" title="Transparency">
          <p className="text-gray-400 text-sm mt-2">
            All transactions and activities are publicly verifiable through the RamaScan block explorer. 
            Smart contract code can be verified and audited by anyone in the community.
          </p>
        </Card>
        <Card icon="⚡" title="Efficiency">
          <p className="text-gray-400 text-sm mt-2">
            Transactions are processed with ~2 second finality. The optimized Bor execution layer 
            enables high throughput while maintaining full EVM compatibility.
          </p>
        </Card>
        <Card icon="💰" title="Cost-Effectiveness">
          <p className="text-gray-400 text-sm mt-2">
            Transaction fees are predictable and minimal - below $0.01 per transaction. 
            EIP-1559 implementation burns a portion of fees, creating deflationary tokenomics.
          </p>
        </Card>
        <Card icon="🌐" title="Decentralization">
          <p className="text-gray-400 text-sm mt-2">
            The network is maintained by a distributed set of validators across multiple regions. 
            No single entity can control or manipulate the blockchain operations.
          </p>
        </Card>
        <Card icon="🔧" title="Developer Friendly">
          <p className="text-gray-400 text-sm mt-2">
            100% EVM equivalence means existing Ethereum tools work seamlessly. Deploy contracts 
            with Hardhat, Remix, or any standard tooling with zero code changes.
          </p>
        </Card>
      </Grid>

      <Divider />

      <Heading level={2}>Quick Stats</Heading>

      <Table
        headers={['Property', 'Value']}
        rows={[
          ['Network Type', <Badge variant="success">PoS Side Chain</Badge>],
          ['Mainnet Chain ID', <code className="text-primary-400">{networkConfig.mainnet.chainId}</code>],
          ['Testnet Chain ID', <code className="text-primary-400">1371</code>],
          ['Native Token', 'RAMA'],
          ['Block Time', '~2 seconds'],
          ['Consensus', 'Heimdall (Tendermint BFT) + Bor (EVM)'],
          ['Parent Chain', 'Polygon (Chain ID: 137)'],
          ['Fee Model', 'EIP-1559 (Base fee + Priority fee)'],
          ['Token Burning', 'Yes - EIP-1559 burns base fee']
        ]}
      />

      <Heading level={2}>Ecosystem</Heading>

      <Paragraph>
        The Ramestta ecosystem includes everything you need to build, deploy, and interact with 
        decentralized applications:
      </Paragraph>

      <Grid cols={2}>
        <Card
          icon="🔍"
          title="RamaScan"
          description="Full-featured block explorer for Ramestta network - view transactions, blocks, contracts, and validators"
          href={usefulLinks.explorer}
        />
        <Card
          icon="🌉"
          title="RamaBridge"
          description="Cross-chain bridge for secure asset transfers between Polygon and Ramestta using Plasma framework"
          href={usefulLinks.bridge}
        />
        <Card
          icon="💱"
          title="RamaSwap"
          description="Decentralized exchange for trading tokens on Ramestta with low fees and fast execution"
          href={usefulLinks.swap}
        />
        <Card
          icon="💳"
          title="RamaPay"
          description="Self-custody HD wallet for managing RAMA and other tokens across the ecosystem"
          href="https://ramestta.com/ramapay"
        />
        <Card
          icon="💎"
          title="Staking"
          description="Stake RAMA tokens to become a validator or delegate to earn rewards and secure the network"
          href="https://wallet.ramestta.com"
        />
        <Card
          icon="📚"
          title="Developer SDK"
          description="Complete SDK packages for JavaScript/TypeScript including @ramestta/sdk, contracts, and bridge utilities"
          href="https://www.npmjs.com/org/ramestta"
        />
      </Grid>

      <Heading level={2}>Getting Started</Heading>

      <Paragraph>
        Follow these steps to start building on Ramestta:
      </Paragraph>

      <List
        ordered
        items={[
          'Add Ramestta network to your wallet (MetaMask, RamaPay, or any Web3 wallet)',
          'Get RAMA tokens - bridge from Polygon via RamaBridge or acquire through supported exchanges',
          'Explore the network using RamaScan block explorer',
          'Start building - deploy smart contracts using Hardhat, Remix, or our SDK',
          'Join the community - participate in governance and help shape the future of Ramestta'
        ]}
      />

      <InfoBox type="success" title="Ready to Build?">
        Check out our <a href="/docs?page=quickstart" className="text-primary-400 hover:underline">Quick Start Guide</a> to 
        deploy your first smart contract on Ramestta, or explore the <a href="/docs?page=sdk-getting-started" className="text-primary-400 hover:underline">SDK documentation</a> to 
        integrate Ramestta into your application!
      </InfoBox>

      <Heading level={2}>Network Details</Heading>

      <CodeBlock
        title="Add Ramestta to MetaMask"
        language="javascript"
        code={`// Mainnet Configuration
Network Name: Ramestta Mainnet
RPC URL: https://blockchain.ramestta.com
Chain ID: 1370
Currency Symbol: RAMA
Block Explorer: https://ramascan.com

// Testnet Configuration  
Network Name: Ramestta Testnet
RPC URL: https://testnet.ramestta.com
Chain ID: 1371
Currency Symbol: RAMA
Block Explorer: https://testnet.ramascan.com`}
      />

      <InfoBox type="warning" title="Important Links">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Official Website: <a href="https://ramestta.com" className="text-primary-400 hover:underline">ramestta.com</a></li>
          <li>Documentation: <a href="https://docs.ramestta.com" className="text-primary-400 hover:underline">docs.ramestta.com</a></li>
          <li>GitHub: <a href="https://github.com/ramestta" className="text-primary-400 hover:underline">github.com/ramestta</a></li>
          <li>npm Packages: <a href="https://www.npmjs.com/org/ramestta" className="text-primary-400 hover:underline">npmjs.com/org/ramestta</a></li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default WelcomePage;
