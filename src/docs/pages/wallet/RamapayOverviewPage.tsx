import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge, Card, Grid } from '../../components/DocsComponents';

const RamapayOverviewPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>RamaPay Wallet</Heading>
      
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="primary">Official Wallet</Badge>
        <Badge variant="success">Open Source</Badge>
        <Badge variant="primary">v3.89</Badge>
      </div>

      <Paragraph>
        RamaPay is the official self-custody HD wallet for the Ramestta ecosystem. Available as a 
        browser extension and mobile app, it provides enterprise-grade security, multi-network support, 
        and seamless Web3 integration. Based on the battle-tested AlphaWallet codebase.
      </Paragraph>

      {/* Why RamaPay Section */}
      <Heading level={2}>Why RamaPay?</Heading>

      <Grid cols={3}>
        <Card icon="🔷" title="Native Ramestta">
          <p className="text-gray-400 text-sm">First-class Mainnet & Testnet integration with Chain ID 1370/1371</p>
        </Card>
        <Card icon="🔐" title="Self-Custody">
          <p className="text-gray-400 text-sm">Your keys, your crypto. No server-side key storage.</p>
        </Card>
        <Card icon="📖" title="Open Source">
          <p className="text-gray-400 text-sm">MIT licensed, community-driven development on GitHub</p>
        </Card>
        <Card icon="🌐" title="Multi-Network">
          <p className="text-gray-400 text-sm">50+ EVM blockchains including Ethereum, Polygon, BSC</p>
        </Card>
        <Card icon="🏢" title="Enterprise Ready">
          <p className="text-gray-400 text-sm">Bulk wallet creation (1-50 accounts) for businesses</p>
        </Card>
        <Card icon="⚔️" title="Battle-Tested">
          <p className="text-gray-400 text-sm">Based on AlphaWallet with millions of users</p>
        </Card>
      </Grid>

      <Divider />

      {/* Key Features */}
      <Heading level={2}>Key Features</Heading>

      <Heading level={3}>🔒 Security First</Heading>
      <Table
        headers={['Feature', 'Description']}
        rows={[
          ['Hardware-Backed Keys', 'TEE/StrongBox on Android, Secure Enclave on iOS'],
          ['AES-256 Encryption', 'All sensitive data encrypted locally'],
          ['Biometric Auth', 'Face ID, Fingerprint, with PIN fallback'],
          ['Zero Knowledge', 'No data uploaded to servers - 100% local'],
          ['Memory Safe', 'Keys never persist in memory unencrypted'],
        ]}
      />

      <Heading level={3}>💰 Token Management</Heading>
      <List items={[
        'ERC-20: Full support for fungible tokens',
        'ERC-721: NFT viewing and transfers',
        'ERC-1155: Multi-token standard support',
        'ERC-875: Batch token transfers',
        'Auto-detection of new tokens',
      ]} />

      <Heading level={3}>🌐 Web3 & DeFi</Heading>
      <Table
        headers={['Feature', 'Description']}
        rows={[
          ['Built-in dApp Browser', 'Injected Web3 provider for all sites'],
          ['WalletConnect v2', 'Connect to desktop dApps via QR scan'],
          ['TokenScript', 'Enhanced token functionality'],
          ['Universal Links', 'Share payment requests via URL'],
        ]}
      />

      <Divider />

      {/* Supported Networks */}
      <Heading level={2}>Supported Networks</Heading>

      <Paragraph>
        RamaPay supports Ramestta plus 50+ EVM-compatible blockchains:
      </Paragraph>

      <Heading level={3}>Primary Networks</Heading>
      <Table
        headers={['Network', 'Symbol', 'Chain ID', 'RPC Endpoint']}
        rows={[
          ['Ramestta Mainnet', 'RAMA', '1370', 'https://blockchain.ramestta.com'],
          ['Ramestta Testnet', 'RAMA', '1371', 'https://testnet.ramestta.com'],
        ]}
      />

      <Heading level={3}>Additional Networks</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        {[
          { name: 'Ethereum', id: 1 },
          { name: 'Polygon', id: 137 },
          { name: 'BNB Chain', id: 56 },
          { name: 'Avalanche', id: 43114 },
          { name: 'Arbitrum', id: 42161 },
          { name: 'Optimism', id: 10 },
          { name: 'Base', id: 8453 },
          { name: 'Fantom', id: 250 },
        ].map((network) => (
          <div key={network.id} className="bg-gray-800/50 rounded-lg p-3 text-center">
            <div className="text-white font-medium text-sm">{network.name}</div>
            <div className="text-gray-500 text-xs">ID: {network.id}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm text-center">+ 40 more networks</p>

      <Divider />

      {/* HD Wallet System */}
      <Heading level={2}>HD Wallet System</Heading>

      <Paragraph>
        RamaPay uses BIP44 hierarchical deterministic (HD) wallet derivation. One seed phrase 
        generates unlimited addresses while maintaining easy backup and recovery.
      </Paragraph>

      <InfoBox type="info" title="BIP44 Derivation Path">
        <code className="text-green-400">m / 44' / 60' / 0' / 0 / index</code>
        <ul className="mt-2 text-sm">
          <li>• Index 0 = Main account</li>
          <li>• Index 1 = Savings account</li>
          <li>• Index 2 = Business account</li>
          <li>• Index N = Any additional accounts</li>
        </ul>
      </InfoBox>

      <Grid cols={3}>
        <Card icon="📝" title="Single Backup">
          <p className="text-gray-400 text-sm">One 12/24 word phrase backs up all accounts</p>
        </Card>
        <Card icon="♾️" title="Unlimited Addresses">
          <p className="text-gray-400 text-sm">Generate billions of addresses from one seed</p>
        </Card>
        <Card icon="🔄" title="Easy Recovery">
          <p className="text-gray-400 text-sm">Restore all accounts with your seed phrase</p>
        </Card>
      </Grid>

      <Divider />

      {/* Wallet Import Methods */}
      <Heading level={2}>Wallet Import Methods</Heading>

      <Table
        headers={['Method', 'Type', 'Description']}
        rows={[
          ['Seed Phrase', 'HD', 'Import from MetaMask, Trust Wallet, etc. (12/24 words)'],
          ['Private Key', 'Legacy', 'Import single address using private key'],
          ['Keystore JSON', 'Legacy', 'Import from Geth, MyEtherWallet'],
          ['Watch Only', 'View', 'Monitor any address without private key'],
          ['Hardware Wallet', 'HW', 'Connect Ledger or Trezor'],
        ]}
      />

      <InfoBox type="warning" title="Seed Phrase Security">
        <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
          <div>
            <strong className="text-green-400">✅ DO:</strong>
            <ul className="mt-1">
              <li>• Write on paper</li>
              <li>• Make 2-3 copies</li>
              <li>• Store separately</li>
              <li>• Use metal backup</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-400">❌ DON'T:</strong>
            <ul className="mt-1">
              <li>• Take screenshots</li>
              <li>• Use cloud storage</li>
              <li>• Email/text yourself</li>
              <li>• Keep only one copy</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <Divider />

      {/* Master & Sub-Accounts */}
      <Heading level={2}>Master & Sub-Accounts</Heading>

      <Paragraph>
        RamaPay supports bulk account creation (1-50 at once) and multiple master wallets 
        for powerful organization:
      </Paragraph>

      <Heading level={3}>Bulk Account Creation</Heading>
      <Table
        headers={['Use Case', 'Recommended Accounts']}
        rows={[
          ['Personal', '2-5 accounts'],
          ['Business', '10-20 accounts'],
          ['Exchange/Trading', '50+ accounts'],
          ['Gaming/Testing', '5-10 accounts'],
          ['Privacy-focused', '10+ accounts'],
        ]}
      />

      <Heading level={3}>Steps to Bulk Create</Heading>
      <List ordered items={[
        'Open Wallet Manager',
        'Select your Master wallet',
        'Tap "Bulk Add"',
        'Enter the count (1-50)',
        'Complete! All accounts derived from same seed',
      ]} />

      <Divider />

      {/* Download Links */}
      <Heading level={2}>Get RamaPay</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-6 rounded-xl border border-purple-500/20">
          <div className="text-3xl mb-3">📱</div>
          <h3 className="text-xl font-bold text-white mb-2">Android App</h3>
          <p className="text-gray-400 text-sm mb-1">v3.89 • Android 7.0+</p>
          <p className="text-gray-500 text-xs mb-4">Package: io.ramestta.wallet</p>
          <a 
            href="https://play.google.com/store/apps/details?id=io.ramestta.wallet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
          >
            Download from Play Store →
          </a>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20">
          <div className="text-3xl mb-3">🌐</div>
          <h3 className="text-xl font-bold text-white mb-2">Browser Extension</h3>
          <p className="text-gray-400 text-sm mb-1">Chrome • Brave • Edge</p>
          <p className="text-gray-500 text-xs mb-4">Chrome Web Store</p>
          <a 
            href="https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
          >
            Add to Chrome →
          </a>
        </div>
      </div>

      <InfoBox type="info" title="iOS Coming Soon">
        iOS version is currently in development. Join our Telegram for updates!
      </InfoBox>

      <Divider />

      {/* Technical Specs */}
      <Heading level={2}>Technical Specifications</Heading>

      <Table
        headers={['Specification', 'Value']}
        rows={[
          ['Mobile Package', 'io.ramestta.wallet'],
          ['Mobile Version', '3.89'],
          ['Min Android SDK', 'API 24 (Android 7.0)'],
          ['Target SDK', 'API 35'],
          ['Extension Store', 'Chrome Web Store'],
          ['Supported Browsers', 'Chrome, Brave, Edge'],
          ['License', 'MIT'],
          ['Based On', 'AlphaWallet'],
        ]}
      />

      <InfoBox type="success" title="Documentation & Support">
        <ul className="text-sm">
          <li>• GitHub: <a href="https://github.com/AamirAlam/RamaPay-android" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">RamaPay Android</a></li>
          <li>• Telegram: <a href="https://t.me/AamirAlam" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">@AamirAlam</a></li>
          <li>• See the <a href="/docs?page=ramapay-extension" className="text-primary-400 hover:underline">Browser Extension Guide</a> and <a href="/docs?page=ramapay-mobile" className="text-primary-400 hover:underline">Mobile App Guide</a> for detailed instructions.</li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default RamapayOverviewPage;
