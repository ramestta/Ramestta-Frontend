import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Search,
  Activity,
  Coins,
  FileText,
  Image,
  ExternalLink,
  CheckCircle,
  Code,
  Shield,
  Zap,
  Clock,
  Database,
} from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";
import { createPublicClient, http, Block, Transaction, formatGwei } from "viem";
import { mainnet } from "viem/chains";

// --- Viem Client Setup ---
const ramesttaChain = {
  ...mainnet, // Copy properties from a base chain
  id: 1370,
  name: "Ramestta",
  nativeCurrency: { name: "RAMA", symbol: "RAMA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://blockchain.ramestta.com"] },
    public: { http: ["https://blockchain.ramestta.com"] },
  },
  blockExplorers: {
    default: { name: "Ramascan", url: "https://ramascan.com" },
  },
};

const publicClient = createPublicClient({
  chain: ramesttaChain,
  transport: http(),
});

// --- Helper Functions ---
const formatTimestamp = (timestamp: bigint) => {
  const now = Date.now() / 1000;
  const secondsAgo = now - Number(timestamp);
  if (secondsAgo < 60) return `${Math.floor(secondsAgo)} seconds ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minutes ago`;
  return new Date(Number(timestamp) * 1000).toLocaleString();
};

const truncateHash = (hash: string) =>
  `${hash.slice(0, 6)}...${hash.slice(-4)}`;

interface NetworkStat {
  label: string;
  value: string;
}

const ExplorerPage: React.FC = () => {
  const [recentBlocks, setRecentBlocks] = useState<Block[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    []
  );
  const [networkStats, setNetworkStats] = useState<NetworkStat[]>([
    { label: "Block Height", value: "Loading..." },
    { label: "Average Block Time", value: "Loading..." },
    { label: "Gas Price", value: "Loading..." },
    { label: "Total Transactions", value: "2.5M+" }, // Static for now
    { label: "Network Hash Rate", value: "15.2 TH/s" }, // Static
    { label: "Total Supply", value: "1B RAMA" }, // Static
  ]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const latestBlockNumber = await publicClient.getBlockNumber();

        const blockPromises: Promise<Block>[] = [];
        for (let i = 0; i < 5; i++) {
          blockPromises.push(
            publicClient.getBlock({
              blockNumber: latestBlockNumber - BigInt(i),
            })
          );
        }
        const blocks = await Promise.all(blockPromises);
        setRecentBlocks(blocks);

        // Calculate average block time
        if (blocks.length > 1) {
          const blockTimeSum =
            Number(blocks[0].timestamp) -
            Number(blocks[blocks.length - 1].timestamp);
          const avgBlockTime = (blockTimeSum / (blocks.length - 1)).toFixed(2);
          setNetworkStats((prev) =>
            prev.map((stat) =>
              stat.label === "Average Block Time"
                ? { ...stat, value: `${avgBlockTime}s` }
                : stat
            )
          );
        }

        const gasPrice = await publicClient.getGasPrice();

        setNetworkStats((prev) =>
          prev.map((stat) => {
            if (stat.label === "Block Height")
              return { ...stat, value: latestBlockNumber.toString() };
            if (stat.label === "Gas Price")
              return { ...stat, value: `${formatGwei(gasPrice)} Gwei` };
            return stat;
          })
        );

        const transactions: Transaction[] = [];

        for (const block of blocks) {
          if (block.transactions.length > 0) {
            const blockTransactions = await Promise.all(
              block.transactions
                .slice(0, 5)
                .map((txHash) =>
                  publicClient.getTransaction({ hash: txHash as `0x${string}` })
                )
            );
            transactions.push(...blockTransactions);
          }
        }

        setRecentTransactions(transactions.slice(0, 5));
      } catch (err) {
        console.error("Error fetching blockchain data:", err);
        setError(
          "Failed to fetch live data. Please check the console for details."
        );
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds to reduce server load

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Activity,
      title: "Transactions",
      description:
        "View detailed transaction history, gas fees, and execution status",
      count: "2.5M+",
    },
    {
      icon: Coins,
      title: "Tokens",
      description: "Explore all ERC-20 and ERC-721 tokens deployed on Ramestta",
      count: "15K+",
    },
    {
      icon: Search,
      title: "Wallets",
      description:
        "Search and analyze wallet addresses and their transaction history",
      count: "100K+",
    },
    {
      icon: FileText,
      title: "Smart Contracts",
      description: "Browse verified smart contracts with source code and ABI",
      count: "3.5K+",
    },
    {
      icon: Image,
      title: "NFT Transfers",
      description: "Track NFT mints, transfers, and marketplace activities",
      count: "50K+",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ramascan</span>
            <span className="block text-3xl md:text-4xl mt-2">Explorer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore the Ramestta blockchain with our comprehensive block
            explorer. Track transactions, tokens, wallets, smart contracts, and
            NFT transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ramascan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Search className="mr-2" size={20} />
              Browse Ramascan
            </a>
            <Link to="/docs?page=rest-api" className="btn-secondary">API Documentation</Link>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Network Statistics
            </h2>
            <p className="text-xl text-gray-300">
              Real-time Ramestta network metrics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkStats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explorer Features */}
      <section className="section-padding bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What You Can Track
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive blockchain data at your fingertips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 group">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 icon-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <span className="text-primary-400 font-bold text-lg">
                    {feature.count}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Verification Section */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Smart Contract Verification
            </h2>
            <p className="text-xl text-gray-300">
              Verify and publish your contract source code for transparency and trust
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-green-500/30">
                    <CheckCircle className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hardhat Verification</h3>
                    <p className="text-gray-300">Verify contracts directly from your Hardhat deployment scripts with our Blockscout-compatible API.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-blue-500/30">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multi-File Support</h3>
                    <p className="text-gray-300">Upload flattened or multi-file contracts with automatic import resolution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-purple-500/30">
                    <Shield className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proxy Detection</h3>
                    <p className="text-gray-300">Automatic proxy contract detection with implementation linking for upgradeable contracts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Hardhat Configuration</h4>
              <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`// hardhat.config.js
etherscan: {
  apiKey: {
    ramestta: "your-api-key"
  },
  customChains: [{
    network: "ramestta",
    chainId: 1370,
    urls: {
      apiURL: "https://ramascan.com/api",
      browserURL: "https://ramascan.com"
    }
  }]
}`}
                </code>
              </pre>
              <a
                href="https://www.ramascan.com/contract-verification"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-flex items-center"
              >
                Verify Contract <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* API Features Section */}
      <section className="section-padding bg-gray-950">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful API Features
            </h2>
            <p className="text-xl text-gray-300">
              Built on Blockscout v9.0.2 with comprehensive Ethereum-compatible APIs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Rate Limits</h3>
              <p className="text-gray-400 text-sm">10 requests/second for free tier, 100 req/sec for premium</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full Data Access</h3>
              <p className="text-gray-400 text-sm">Complete transaction history, logs, and internal traces</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Updates</h3>
              <p className="text-gray-400 text-sm">WebSocket subscriptions for blocks, transactions, and logs</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Etherscan Compatible</h3>
              <p className="text-gray-400 text-sm">Drop-in replacement for Etherscan API integrations</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Available API Endpoints</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Account balance & transactions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Contract verification & ABI</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Token transfers & holders</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Block & transaction details</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Event logs & internal txns</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>Gas price oracle</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>NFT metadata & transfers</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  <span>GraphQL for complex queries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="section-padding bg-black">
        <div className="container-max">
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent Blocks */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Recent Blocks
              </h2>
              <div className="space-y-4">
                {recentBlocks.length > 0 ? (
                  recentBlocks.map((block) => (
                    <div key={block.number?.toString()} className="card p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className=" w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              #{block.number?.toString().slice(-2)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              Block{" "}
                              <a
                                href={`https://ramascan.com/block/${block.number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:underline"
                              >
                                {block.number?.toString()}
                              </a>
                            </div>
                            <div className="text-sm text-gray-300">
                              {formatTimestamp(block.timestamp)}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary-400 font-semibold">
                            {block.transactions.length} txns
                          </div>
                          <div className="text-sm text-gray-300">
                            Validator: {truncateHash(block.miner)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">Loading blocks...</p>
                )}
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Recent Transactions
              </h2>
              <div className="space-y-4">
                {recentTransactions.length > 0 ? (
                  recentTransactions.map((tx) => (
                    <div key={tx.hash} className="card p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-500/30">
                            <Activity className="text-green-400" size={20} />
                          </div>
                          <div>
                            <div className="font-mono text-sm text-white">
                              <a
                                href={`https://ramascan.com/tx/${tx.hash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:underline"
                              >
                                {truncateHash(tx.hash)}
                              </a>
                            </div>
                            <div className="text-sm text-gray-300">
                              From: {truncateHash(tx.from)} <br /> To:{" "}
                              {tx.to
                                ? truncateHash(tx.to)
                                : "Contract Creation"}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary-400 font-semibold">
                            {(Number(tx.value) / 1e18).toFixed(4)} RAMA
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">Loading transactions...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API & Tools */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Developer Tools</h2>
            <p className="text-xl text-gray-300">
              Integrate Ramestta data into your applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6 icon-bounce">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">REST API</h3>
              <p className="text-gray-300 mb-6">
                Access blockchain data programmatically with our REST API
              </p>
              <a
                href="https://www.ramascan.com/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                API Docs <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
            <div className="card p-8 text-center">
              <div
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 icon-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">GraphQL</h3>
              <p className="text-gray-300 mb-6">
                Query blockchain data efficiently with GraphQL endpoints
              </p>
              <a
                href="https://www.ramascan.com/graphiql"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                GraphQL Docs <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
            <div className="card p-8 text-center">
              <div
                className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 icon-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                <Activity className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">WebSocket</h3>
              <p className="text-gray-300 mb-6">
                Real-time blockchain events and notifications
              </p>
              <Link to="/docs?page=json-rpc" className="btn-secondary">WebSocket Docs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <FloatingParticles />
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Ramestta Today</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Dive deep into the Ramestta blockchain and discover the power of
            transparent, decentralized data exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ramascan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Launch Explorer <ExternalLink className="ml-2" size={16} />
            </a>
            <Link to="/docs?page=dev-setup" className="btn-secondary">Developer Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorerPage;
