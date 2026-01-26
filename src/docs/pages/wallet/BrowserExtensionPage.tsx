import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge, Card, Grid } from '../../components/DocsComponents';

const BrowserExtensionPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>RamaPay Browser Extension</Heading>
      
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="primary">Chrome</Badge>
        <Badge variant="primary">Brave</Badge>
        <Badge variant="primary">Edge</Badge>
        <Badge variant="success">Live</Badge>
      </div>

      <Paragraph>
        The RamaPay browser extension brings the full power of the Ramestta wallet to your desktop browser. 
        Connect to dApps, manage tokens, and interact with Web3 directly from Chrome, Brave, or Edge.
      </Paragraph>

      {/* Installation */}
      <Heading level={2}>Installation</Heading>

      <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20 my-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-4xl">🧩</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Chrome Web Store</h3>
            <p className="text-gray-400 text-sm mb-3">Available for Chrome, Brave, and Edge browsers</p>
            <a 
              href="https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              Add to Browser →
            </a>
          </div>
        </div>
      </div>

      <Heading level={3}>Installation Steps</Heading>
      <List ordered items={[
        'Click the "Add to Browser" button above or search "RamaPay" in Chrome Web Store',
        'Click "Add to Chrome" on the extension page',
        'Confirm by clicking "Add extension" in the popup',
        'Pin the extension by clicking the puzzle icon → Pin RamaPay',
        'Click the RamaPay icon to begin setup',
      ]} />

      <Divider />

      {/* Setup */}
      <Heading level={2}>Initial Setup</Heading>

      <Heading level={3}>Create New Wallet</Heading>
      <List ordered items={[
        'Click "Create New Wallet"',
        'Set a strong password (minimum 8 characters)',
        'Write down your 12-word recovery phrase on paper',
        'Verify the phrase by selecting words in order',
        'Your wallet is ready to use!',
      ]} />

      <Heading level={3}>Import Existing Wallet</Heading>
      <List ordered items={[
        'Click "Import Wallet"',
        'Enter your 12 or 24-word recovery phrase',
        'Set a password for this browser',
        'Click "Import" to restore your accounts',
      ]} />

      <InfoBox type="warning" title="Security Warning">
        Never enter your recovery phrase on any website! The extension popup is the only 
        place where you should enter sensitive information.
      </InfoBox>

      <Divider />

      {/* Supported Features */}
      <Heading level={2}>Features</Heading>

      <Grid cols={2}>
        <Card icon="🔗" title="dApp Connection">
          <p className="text-gray-400 text-sm">Seamlessly connect to any Web3 dApp with one click</p>
        </Card>
        <Card icon="💸" title="Send & Receive">
          <p className="text-gray-400 text-sm">Transfer RAMA and tokens to any address</p>
        </Card>
        <Card icon="🔄" title="Network Switch">
          <p className="text-gray-400 text-sm">Quickly switch between Ramestta, Ethereum, Polygon, etc.</p>
        </Card>
        <Card icon="📜" title="Transaction History">
          <p className="text-gray-400 text-sm">View all your past transactions</p>
        </Card>
        <Card icon="🎨" title="NFT Gallery">
          <p className="text-gray-400 text-sm">View your NFT collections</p>
        </Card>
        <Card icon="🔐" title="Hardware Wallet">
          <p className="text-gray-400 text-sm">Connect Ledger and Trezor devices</p>
        </Card>
      </Grid>

      <Divider />

      {/* Connect to dApps */}
      <Heading level={2}>Connecting to dApps</Heading>

      <Paragraph>
        RamaPay injects a Web3 provider into web pages, allowing dApps to detect and connect to your wallet.
      </Paragraph>

      <Heading level={3}>Connection Flow</Heading>
      <List ordered items={[
        'Visit a Ramestta dApp (e.g., RamaSwap, RamaBridge)',
        'Click "Connect Wallet" on the dApp',
        'RamaPay popup will appear',
        'Review the connection request and site URL',
        'Click "Connect" to approve',
        'You can now interact with the dApp!',
      ]} />

      <Heading level={3}>Compatible dApps</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
        {['RamaSwap', 'RamaBridge', 'Uniswap', 'OpenSea', 'Aave', 'SushiSwap'].map((dapp) => (
          <div key={dapp} className="bg-gray-800/50 rounded-lg p-3 text-center">
            <div className="text-white font-medium text-sm">{dapp}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm text-center">+ All EVM-compatible dApps</p>

      <Divider />

      {/* Developer Integration */}
      <Heading level={2}>Developer Integration</Heading>

      <Paragraph>
        RamaPay follows the EIP-1193 standard, making it compatible with all Web3 libraries.
      </Paragraph>

      <CodeBlock
        title="Detect RamaPay Extension"
        language="javascript"
        code={`// Check if RamaPay is installed
if (typeof window.ethereum !== 'undefined') {
  console.log('Wallet detected!');
  
  // Check if it's specifically RamaPay
  if (window.ethereum.isRamaPay) {
    console.log('RamaPay extension detected!');
  }
}`}
      />

      <CodeBlock
        title="Request Account Connection"
        language="javascript"
        code={`// Request connection to user's wallet
async function connectWallet() {
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    
    console.log('Connected account:', accounts[0]);
    return accounts[0];
  } catch (error) {
    if (error.code === 4001) {
      console.log('User rejected connection');
    } else {
      console.error('Connection error:', error);
    }
  }
}`}
      />

      <CodeBlock
        title="Switch to Ramestta Network"
        language="javascript"
        code={`// Add and switch to Ramestta Mainnet
async function switchToRamestta() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x55a' }], // 1370 in hex
    });
  } catch (switchError) {
    // Network not added, let's add it
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x55a',
          chainName: 'Ramestta Mainnet',
          nativeCurrency: {
            name: 'RAMA',
            symbol: 'RAMA',
            decimals: 18
          },
          rpcUrls: ['https://blockchain.ramestta.com'],
          blockExplorerUrls: ['https://ramascan.com']
        }]
      });
    }
  }
}`}
      />

      <CodeBlock
        title="Send Transaction"
        language="javascript"
        code={`// Send RAMA to an address
async function sendTransaction(to, amountInRama) {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });
  
  const amountInWei = (parseFloat(amountInRama) * 1e18).toString(16);
  
  const txHash = await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
      from: accounts[0],
      to: to,
      value: '0x' + amountInWei,
      gas: '0x5208', // 21000 gas
    }]
  });
  
  console.log('Transaction hash:', txHash);
  return txHash;
}`}
      />

      <Divider />

      {/* Network Configuration */}
      <Heading level={2}>Pre-configured Networks</Heading>

      <Table
        headers={['Network', 'Chain ID', 'RPC URL', 'Explorer']}
        rows={[
          ['Ramestta Mainnet', '1370', 'https://blockchain.ramestta.com', 'https://ramascan.com'],
          ['Ramestta Testnet', '1371', 'https://testnet.ramestta.com', 'https://testnet.ramascan.com'],
          ['Polygon Mainnet', '137', 'https://polygon-rpc.com', 'https://polygonscan.com'],
          ['Ethereum Mainnet', '1', 'https://eth.llamarpc.com', 'https://etherscan.io'],
        ]}
      />

      <Divider />

      {/* Troubleshooting */}
      <Heading level={2}>Troubleshooting</Heading>

      <Table
        headers={['Issue', 'Solution']}
        rows={[
          ['Extension not appearing', 'Click puzzle icon in Chrome toolbar and pin RamaPay'],
          ['dApp not detecting wallet', 'Refresh the page or disable other wallet extensions'],
          ['Transaction stuck pending', 'Try increasing gas price or use "Speed Up" option'],
          ['Wrong network connected', 'Click network name in extension and switch to Ramestta'],
          ['Forgot password', 'Use your recovery phrase to import wallet with new password'],
        ]}
      />

      <InfoBox type="success" title="Need Help?">
        <ul className="text-sm">
          <li>• Telegram: <a href="https://t.me/AamirAlam" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">@AamirAlam</a></li>
          <li>• GitHub Issues: <a href="https://github.com/AamirAlam/RamaPay" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Report a bug</a></li>
        </ul>
      </InfoBox>
    </div>
  );
};

export default BrowserExtensionPage;
