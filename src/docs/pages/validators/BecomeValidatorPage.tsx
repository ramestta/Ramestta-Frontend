import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const BecomeValidatorPage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Become a Validator</Heading>
      
      <Paragraph>
        Validators are essential to the Ramestta network, securing the blockchain and earning 
        rewards. This guide explains the requirements and steps to become a validator.
      </Paragraph>

      <InfoBox type="info" title="Two Nodes Required">
        Ramestta uses a dual-node architecture. You need to run both <strong>Heimdall</strong> (consensus) 
        and <strong>Bor</strong> (execution) nodes.
      </InfoBox>

      <Heading level={2}>Hardware Requirements</Heading>

      <Table
        headers={['Component', 'Minimum', 'Recommended']}
        rows={[
          ['CPU', '8 cores', '16+ cores'],
          ['RAM', '32 GB', '64 GB'],
          ['Storage', '2 TB SSD', '4 TB NVMe SSD'],
          ['Network', '1 Gbps', '10 Gbps'],
          ['OS', 'Ubuntu 20.04 LTS', 'Ubuntu 22.04 LTS']
        ]}
      />

      <InfoBox type="warning" title="Storage Growth">
        The blockchain grows approximately 1-2 GB per day. Plan for at least 2 TB of storage with 
        room for growth.
      </InfoBox>

      <Heading level={2}>Staking Requirements</Heading>

      <List items={[
        'Minimum stake: 10,000 RAMA',
        'RAMA tokens for transaction fees (~100 RAMA recommended)',
        'ETH for Polygon parent chain transactions',
        'Stable internet connection with static IP recommended'
      ]} />

      <Heading level={2}>Step 1: Setup Heimdall Node</Heading>

      <CodeBlock
        title="Install Heimdall"
        language="bash"
        code={`# Clone Heimdall repository
git clone https://github.com/ramestta/heimdall.git
cd heimdall

# Build from source
make build

# Verify installation
./build/heimdalld version

# Initialize Heimdall
heimdalld init --chain=mainnet

# Download genesis file
wget https://raw.githubusercontent.com/ramestta/launch/master/mainnet-v1/without-sentry/heimdall/config/genesis.json -O ~/.heimdalld/config/genesis.json`}
      />

      <Heading level={2}>Step 2: Configure Heimdall</Heading>

      <Paragraph>
        Configure Heimdall by editing two configuration files. The first is the Tendermint config:
      </Paragraph>

      <CodeBlock
        title="~/.heimdalld/config/config.toml"
        language="toml"
        code={`# Tendermint configuration
moniker = "your-validator-name"

[rpc]
laddr = "tcp://127.0.0.1:26657"
cors_allowed_origins = []

[p2p]
laddr = "tcp://0.0.0.0:26656"
seeds = "f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656"
persistent_peers = ""
max_num_inbound_peers = 50
max_num_outbound_peers = 25
addr_book_strict = false
pex = true

[mempool]
size = 5000
max_txs_bytes = 1073741824

[consensus]
timeout_propose = "5s"
timeout_propose_delta = "500ms"
timeout_prevote = "1s"
timeout_prevote_delta = "500ms"
timeout_precommit = "1s"
timeout_precommit_delta = "500ms"
timeout_commit = "1s"`}
      />

      <Paragraph>
        Then configure the Heimdall-specific settings:
      </Paragraph>

      <CodeBlock
        title="~/.heimdalld/config/heimdall-config.toml"
        language="toml"
        code={`# Polygon RPC endpoint (required for staking validation)
eth_rpc_url = "https://polygon-mainnet.infura.io/v3/YOUR_INFURA_KEY"

# Bor RPC endpoint (local Bor node)
bor_rpc_url = "http://localhost:8545"

# Tendermint RPC (local Heimdall)
tendermint_rpc_url = "http://0.0.0.0:26657"

# Heimdall REST server
heimdall_rest_server = "http://0.0.0.0:1317"

# Checkpoint configuration
checkpoint_poll_interval = "5m0s"
syncer_poll_interval = "1m0s"
no_ack_wait_time = "30m0s"

# Gas settings for Polygon transactions
main_chain_gas_limit = "5000000"
main_chain_max_gas_price = "400000000000"

# Chain ID
chain = "heimdall-1370"`}
      />

      <InfoBox type="warning" title="Infura/Alchemy Required">
        You need a Polygon RPC endpoint (Infura, Alchemy, or your own Polygon node) for Heimdall 
        to verify checkpoints on Polygon. Get a free API key at <a href="https://infura.io" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">infura.io</a> or <a href="https://alchemy.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">alchemy.com</a>.
      </InfoBox>

      <Heading level={2}>Step 3: Setup Bor Node</Heading>

      <CodeBlock
        title="Install Bor"
        language="bash"
        code={`# Clone Bor repository
git clone https://github.com/ramestta/bor.git
cd bor

# Build from source
make bor

# Verify installation
./build/bin/bor version

# Initialize Bor
bor init --chain mainnet

# Download genesis file
wget https://raw.githubusercontent.com/ramestta/launch/master/mainnet-v1/without-sentry/bor/genesis.json -O ~/genesis.json
bor init ~/genesis.json`}
      />

      <Heading level={2}>Step 4: Configure Bor</Heading>

      <CodeBlock
        title="~/.bor/config.toml"
        language="toml"
        code={`[Node]
DataDir = "/var/lib/bor"
KeyStoreDir = "/var/lib/bor/keystore"

[Node.HTTPServer]
Enabled = true
ListenAddr = "0.0.0.0:8545"
Vhosts = ["*"]
Corsdomain = ["*"]
API = ["eth", "net", "web3", "txpool", "bor"]

[Node.P2P]
ListenAddr = "0.0.0.0:30303"
MaxPeers = 50
NoDiscovery = false

[Eth]
NetworkId = 1370
SyncMode = "full"

[Eth.TxPool]
Locals = []
NoLocals = false
Journal = ""
Rejournal = "1h0m0s"
PriceLimit = 1000000000
PriceBump = 10
AccountSlots = 16
GlobalSlots = 32768
AccountQueue = 64
GlobalQueue = 131072
Lifetime = "3h0m0s"

[Eth.Miner]
GasFloor = 20000000
GasCeil = 20000000
GasPrice = 1000000000
Recommit = "2s"`}
      />

      <Heading level={2}>Step 5: Create Validator Key</Heading>

      <CodeBlock
        title="Generate Keys"
        language="bash"
        code={`# Generate Heimdall validator key
heimdalld generate-validatorkey <your-eth-private-key>

# The validator key will be stored at:
# ~/.heimdalld/config/priv_validator_key.json

# Generate Bor keystore
bor account new --datadir ~/.bor

# You'll be prompted to enter a password
# Save the password in a secure file

# Create password file
echo "your-secure-password" > ~/.bor/password.txt
chmod 600 ~/.bor/password.txt`}
      />

      <InfoBox type="warning" title="Security">
        Keep your validator keys secure! Never share <code>priv_validator_key.json</code> or your 
        keystore password.
      </InfoBox>

      <Heading level={2}>Step 6: Start Services</Heading>

      <CodeBlock
        title="Create Systemd Services"
        language="bash"
        code={`# Create Heimdall service
sudo tee /etc/systemd/system/heimdalld.service > /dev/null <<EOF
[Unit]
Description=Heimdall Daemon
After=network.target

[Service]
User=$USER
Type=simple
ExecStart=/usr/local/bin/heimdalld start
Restart=on-failure
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF

# Create Bor service
sudo tee /etc/systemd/system/bor.service > /dev/null <<EOF
[Unit]
Description=Bor Daemon
After=network.target heimdalld.service
Requires=heimdalld.service

[Service]
User=$USER
Type=simple
ExecStart=/usr/local/bin/bor server --config ~/.bor/config.toml
Restart=on-failure
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF

# Enable and start services
sudo systemctl daemon-reload
sudo systemctl enable heimdalld bor
sudo systemctl start heimdalld

# Wait for Heimdall to sync, then start Bor
# Check sync status:
curl -s localhost:26657/status | jq '.result.sync_info'`}
      />

      <Heading level={2}>Step 7: Stake and Register</Heading>

      <Paragraph>
        After your nodes are synced, register as a validator on the staking contract:
      </Paragraph>

      <CodeBlock
        title="Register Validator (using SDK)"
        language="javascript"
        code={`import { RamesttaStaking } from '@ramestta/staking-sdk';
import { ethers } from 'ethers';

async function registerValidator() {
  const provider = new ethers.JsonRpcProvider('https://polygon-rpc.com');
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  
  const staking = new RamesttaStaking(signer);
  
  // Approve RAMA tokens for staking
  const stakeAmount = ethers.parseEther('10000'); // 10,000 RAMA
  await staking.approve(stakeAmount);
  
  // Stake and become validator
  const tx = await staking.stake(stakeAmount, {
    heimdallFee: ethers.parseEther('10'),
    acceptDelegation: true,
    commissionRate: 10 // 10% commission
  });
  
  console.log('Validator registered:', tx.hash);
}

registerValidator();`}
      />

      <Heading level={2}>Monitoring Your Validator</Heading>

      <CodeBlock
        title="Monitor Commands"
        language="bash"
        code={`# Check Heimdall sync status
curl -s localhost:26657/status | jq '.result.sync_info'

# Check Bor sync status
curl -X POST -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \\
  http://localhost:8545

# Check validator signing info
curl -s localhost:26657/validators | jq

# View Heimdall logs
journalctl -u heimdalld -f

# View Bor logs
journalctl -u bor -f`}
      />

      <Heading level={2}>Validator Rewards</Heading>

      <Table
        headers={['Reward Type', 'Description', 'Rate']}
        rows={[
          ['Block Rewards', 'Rewards for producing blocks', 'Variable based on total stake'],
          ['Checkpoint Rewards', 'Rewards for signing checkpoints', 'Shared among signers'],
          ['Commission', 'Percentage from delegators', '0-100% (you set)'],
          ['Transaction Fees', 'Fees from transactions in blocks', 'Varies by network usage']
        ]}
      />

      <InfoBox type="success" title="Support">
        Need help? Join the <a href="https://t.me/rabordev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Ramestta Telegram</a> for 
        validator support and discussions.
      </InfoBox>
    </div>
  );
};

export default BecomeValidatorPage;
