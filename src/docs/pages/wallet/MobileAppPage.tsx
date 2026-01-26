import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge, Card, Grid } from '../../components/DocsComponents';

const MobileAppPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>RamaPay Mobile App</Heading>
      
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="success">Android v3.89</Badge>
        <Badge variant="secondary">iOS Coming Soon</Badge>
      </div>

      <Paragraph>
        RamaPay Mobile is the official Ramestta wallet app for Android devices. It features 
        enterprise-grade security, a built-in dApp browser, Point of Sale (POS) functionality, 
        and full support for 50+ blockchain networks.
      </Paragraph>

      {/* Download */}
      <Heading level={2}>Download</Heading>

      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/20 my-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-4xl">📱</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Google Play Store</h3>
            <p className="text-gray-400 text-sm mb-1">Version 3.89 • Android 7.0+ required</p>
            <p className="text-gray-500 text-xs mb-3">Package: io.ramestta.wallet</p>
            <a 
              href="https://play.google.com/store/apps/details?id=io.ramestta.wallet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
            >
              Download from Play Store →
            </a>
          </div>
        </div>
      </div>

      <Table
        headers={['Specification', 'Requirement']}
        rows={[
          ['Platform', 'Android'],
          ['Min Version', 'Android 7.0 (API 24)'],
          ['Target SDK', 'API 35'],
          ['App Version', '3.89'],
          ['Package ID', 'io.ramestta.wallet'],
          ['License', 'MIT (Open Source)'],
        ]}
      />

      <InfoBox type="info" title="iOS Version">
        The iOS version is currently in development. Follow us on social media for release announcements!
      </InfoBox>

      <Divider />

      {/* Security Features */}
      <Heading level={2}>Security Features</Heading>

      <Paragraph>
        RamaPay Mobile uses multi-layer security to protect your assets:
      </Paragraph>

      <Grid cols={2}>
        <Card icon="🔒" title="Hardware Security">
          <p className="text-gray-400 text-sm">TEE/StrongBox and Secure Enclave for key storage</p>
        </Card>
        <Card icon="👆" title="Biometric Auth">
          <p className="text-gray-400 text-sm">Fingerprint and Face recognition with PIN fallback</p>
        </Card>
        <Card icon="🔐" title="AES-256 Encryption">
          <p className="text-gray-400 text-sm">All sensitive data encrypted locally</p>
        </Card>
        <Card icon="🚫" title="Zero Knowledge">
          <p className="text-gray-400 text-sm">No data uploaded to servers - 100% local storage</p>
        </Card>
      </Grid>

      <Heading level={3}>Security Architecture</Heading>
      <Table
        headers={['Layer', 'Protection']}
        rows={[
          ['Hardware', 'TEE/StrongBox, Secure Enclave, Biometric sensors'],
          ['Encryption', 'AES-256, Local storage, Secure key derivation'],
          ['Architecture', 'No server keys, Local-first, Zero knowledge, Open source'],
        ]}
      />

      <Divider />

      {/* dApp Browser */}
      <Heading level={2}>Built-in dApp Browser</Heading>

      <Paragraph>
        Access Web3 directly from the RamaPay app with the integrated dApp browser:
      </Paragraph>

      <Grid cols={2}>
        <Card icon="🌐" title="Web3 Browser">
          <p className="text-gray-400 text-sm">Injected provider for seamless dApp interaction</p>
        </Card>
        <Card icon="📲" title="WalletConnect">
          <p className="text-gray-400 text-sm">Scan QR codes to connect to desktop dApps</p>
        </Card>
        <Card icon="📜" title="TokenScript">
          <p className="text-gray-400 text-sm">Enhanced token functionality and interactions</p>
        </Card>
        <Card icon="🔗" title="Universal Links">
          <p className="text-gray-400 text-sm">Share payment requests via URL</p>
        </Card>
      </Grid>

      <Heading level={3}>Popular dApps</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
        {['RamaSwap', 'RamaBridge', 'Uniswap', 'OpenSea', 'Aave', 'SushiSwap'].map((dapp) => (
          <div key={dapp} className="bg-gray-800/50 rounded-lg p-3 text-center">
            <div className="text-white font-medium text-sm">{dapp}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm text-center">+ All EVM-compatible dApps</p>

      <Divider />

      {/* Point of Sale (POS) */}
      <Heading level={2}>Point of Sale (POS)</Heading>

      <Paragraph>
        Accept crypto payments for your business with RamaPay's built-in POS system featuring 
        real-time fiat conversion and QR code generation.
      </Paragraph>

      <Heading level={3}>How It Works</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {[
          { step: '1', title: 'Enter Amount', desc: 'Input fiat amount (USD, EUR, INR, etc.)' },
          { step: '2', title: 'Live Conversion', desc: 'Auto-converts to RAMA at live rates' },
          { step: '3', title: 'Generate QR', desc: 'Customer scans QR to pay' },
          { step: '4', title: 'Instant Payment', desc: 'Receive RAMA in your wallet' },
        ].map((item) => (
          <div key={item.step} className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-bold">{item.step}</span>
            </div>
            <div className="text-white font-medium text-sm mb-1">{item.title}</div>
            <div className="text-gray-500 text-xs">{item.desc}</div>
          </div>
        ))}
      </div>

      <Heading level={3}>POS Features</Heading>
      <Table
        headers={['Feature', 'Description']}
        rows={[
          ['Real-time Fiat Conversion', 'Live exchange rates for accurate pricing'],
          ['Multi-Currency Support', 'Accept payments in USD, EUR, INR & more'],
          ['QR Code Generation', 'Instant payment QR with invoice details'],
          ['Transaction History', 'Complete payment records with status'],
          ['5-Minute Rate Lock', 'Rate guaranteed during payment window'],
          ['Offline Storage', 'All data stored locally on device'],
        ]}
      />

      <Heading level={3}>Payment Categories</Heading>
      <div className="flex flex-wrap gap-2 my-4">
        {[
          '🛒 Grocery', '🍽️ Food & Dining', '🛍️ Daily Needs', '💊 Pharmacy',
          '📝 Stationary', '⛽ Fuel/Petrol', '🚗 Transport', '🅿️ Parking',
          '🏠 Rent', '💡 Electricity', '💧 Water Bill', '🔥 Gas Bill',
          '📶 Internet', '📱 Mobile', '🎒 School Fee', '🎓 College'
        ].map((cat) => (
          <span key={cat} className="bg-gray-800/50 rounded-full px-3 py-1 text-sm text-gray-300">
            {cat}
          </span>
        ))}
      </div>

      <Heading level={3}>Business Profile Setup</Heading>
      <Paragraph>
        Set up your merchant profile with business details, contact info, and custom logo for professional invoices:
      </Paragraph>
      <List items={[
        'Business Name - Your company or store name',
        'Business Type - Category of your business',
        'Contact Info - Phone, email for receipts',
        'Custom Logo - Brand your invoices and QR codes',
      ]} />

      <InfoBox type="success" title="100% Privacy Focused">
        All transaction data, business profile, and payment history are stored locally on your device. 
        No data is uploaded to any server - your business data stays with you.
      </InfoBox>

      <Divider />

      {/* Wallet Management */}
      <Heading level={2}>Wallet Management</Heading>

      <Heading level={3}>Import Methods</Heading>
      <Table
        headers={['Method', 'Type', 'Description']}
        rows={[
          ['Seed Phrase', 'HD Wallet', 'Import from MetaMask, Trust Wallet (12/24 words)'],
          ['Private Key', 'Single Address', 'Import individual account'],
          ['Keystore JSON', 'Encrypted', 'Import from Geth, MEW'],
          ['Watch Only', 'View Only', 'Monitor any address without keys'],
          ['Hardware', 'Ledger/Trezor', 'Connect via USB OTG or Bluetooth'],
        ]}
      />

      <Heading level={3}>Bulk Account Creation</Heading>
      <Paragraph>
        Create multiple accounts at once for business or organizational use:
      </Paragraph>
      <List ordered items={[
        'Open Wallet Manager',
        'Select your Master wallet',
        'Tap "Bulk Add"',
        'Enter count (1-50 accounts)',
        'All accounts are derived from same seed phrase',
      ]} />

      <Divider />

      {/* Network Support */}
      <Heading level={2}>Supported Networks</Heading>

      <Heading level={3}>Primary Networks</Heading>
      <Table
        headers={['Network', 'Chain ID', 'RPC URL']}
        rows={[
          ['Ramestta Mainnet', '1370', 'https://blockchain.ramestta.com'],
          ['Ramestta Testnet', '1371', 'https://testnet.ramestta.com'],
        ]}
      />

      <Heading level={3}>Additional Networks (50+)</Heading>
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

      <Divider />

      {/* Getting Started */}
      <Heading level={2}>Getting Started</Heading>

      <Heading level={3}>Create New Wallet</Heading>
      <List ordered items={[
        'Download RamaPay from Play Store',
        'Open the app and tap "Create Wallet"',
        'Set a strong password',
        'Write down your 12-word recovery phrase on paper',
        'Verify by selecting words in correct order',
        'Enable biometric unlock (recommended)',
        'Your wallet is ready!',
      ]} />

      <InfoBox type="warning" title="Backup Your Recovery Phrase">
        <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
          <div>
            <strong className="text-green-400">✅ DO:</strong>
            <ul className="mt-1">
              <li>• Write on paper</li>
              <li>• Store in safe place</li>
              <li>• Make multiple copies</li>
              <li>• Use metal backup</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-400">❌ DON'T:</strong>
            <ul className="mt-1">
              <li>• Screenshot it</li>
              <li>• Store in cloud</li>
              <li>• Share with anyone</li>
              <li>• Enter on websites</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <Divider />

      {/* FAQ */}
      <Heading level={2}>Frequently Asked Questions</Heading>

      <Table
        headers={['Question', 'Answer']}
        rows={[
          ['Is RamaPay free?', 'Yes, the app is free. You only pay network gas fees.'],
          ['Is it open source?', 'Yes, MIT licensed. Based on AlphaWallet.'],
          ['Can I use my MetaMask seed?', 'Yes, import any 12/24 word recovery phrase.'],
          ['How do I backup my wallet?', 'Write down your recovery phrase and store safely.'],
          ['Is iOS supported?', 'Coming soon! Follow our socials for updates.'],
          ['Where is my data stored?', '100% locally on your device. No servers.'],
        ]}
      />

      <InfoBox type="success" title="Need Help?">
        <ul className="text-sm">
          <li>• GitHub: <a href="https://github.com/AamirAlam/RamaPay-android" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">RamaPay Android</a></li>
          <li>• Telegram: <a href="https://t.me/AamirAlam" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">@AamirAlam</a></li>
          <li>• Play Store: <a href="https://play.google.com/store/apps/details?id=io.ramestta.wallet" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Rate & Review</a></li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default MobileAppPage;
