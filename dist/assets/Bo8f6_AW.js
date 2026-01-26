import{cU as e}from"./Cr10QW3C.js";import{H as t,B as s,P as i,L as n,D as a,I as c,G as h,C as r,a as o,T as d}from"./ASX-TiYY.js";const x=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"RamaPay Browser Extension"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[e.jsx(s,{variant:"primary",children:"Chrome"}),e.jsx(s,{variant:"primary",children:"Brave"}),e.jsx(s,{variant:"primary",children:"Edge"}),e.jsx(s,{variant:"success",children:"Live"})]}),e.jsx(i,{children:"The RamaPay browser extension brings the full power of the Ramestta wallet to your desktop browser. Connect to dApps, manage tokens, and interact with Web3 directly from Chrome, Brave, or Edge."}),e.jsx(t,{level:2,children:"Installation"}),e.jsx("div",{className:"bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20 my-6",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsx("div",{className:"text-4xl",children:"🧩"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Chrome Web Store"}),e.jsx("p",{className:"text-gray-400 text-sm mb-3",children:"Available for Chrome, Brave, and Edge browsers"}),e.jsx("a",{href:"https://chromewebstore.google.com/detail/neacbhpcglflokldfphkinnmdpfccgld",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors",children:"Add to Browser →"})]})]})}),e.jsx(t,{level:3,children:"Installation Steps"}),e.jsx(n,{ordered:!0,items:['Click the "Add to Browser" button above or search "RamaPay" in Chrome Web Store','Click "Add to Chrome" on the extension page','Confirm by clicking "Add extension" in the popup',"Pin the extension by clicking the puzzle icon → Pin RamaPay","Click the RamaPay icon to begin setup"]}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Initial Setup"}),e.jsx(t,{level:3,children:"Create New Wallet"}),e.jsx(n,{ordered:!0,items:['Click "Create New Wallet"',"Set a strong password (minimum 8 characters)","Write down your 12-word recovery phrase on paper","Verify the phrase by selecting words in order","Your wallet is ready to use!"]}),e.jsx(t,{level:3,children:"Import Existing Wallet"}),e.jsx(n,{ordered:!0,items:['Click "Import Wallet"',"Enter your 12 or 24-word recovery phrase","Set a password for this browser",'Click "Import" to restore your accounts']}),e.jsx(c,{type:"warning",title:"Security Warning",children:"Never enter your recovery phrase on any website! The extension popup is the only place where you should enter sensitive information."}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Features"}),e.jsxs(h,{cols:2,children:[e.jsx(r,{icon:"🔗",title:"dApp Connection",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Seamlessly connect to any Web3 dApp with one click"})}),e.jsx(r,{icon:"💸",title:"Send & Receive",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Transfer RAMA and tokens to any address"})}),e.jsx(r,{icon:"🔄",title:"Network Switch",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Quickly switch between Ramestta, Ethereum, Polygon, etc."})}),e.jsx(r,{icon:"📜",title:"Transaction History",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"View all your past transactions"})}),e.jsx(r,{icon:"🎨",title:"NFT Gallery",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"View your NFT collections"})}),e.jsx(r,{icon:"🔐",title:"Hardware Wallet",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Connect Ledger and Trezor devices"})})]}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Connecting to dApps"}),e.jsx(i,{children:"RamaPay injects a Web3 provider into web pages, allowing dApps to detect and connect to your wallet."}),e.jsx(t,{level:3,children:"Connection Flow"}),e.jsx(n,{ordered:!0,items:["Visit a Ramestta dApp (e.g., RamaSwap, RamaBridge)",'Click "Connect Wallet" on the dApp',"RamaPay popup will appear","Review the connection request and site URL",'Click "Connect" to approve',"You can now interact with the dApp!"]}),e.jsx(t,{level:3,children:"Compatible dApps"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 my-4",children:["RamaSwap","RamaBridge","Uniswap","OpenSea","Aave","SushiSwap"].map(l=>e.jsx("div",{className:"bg-gray-800/50 rounded-lg p-3 text-center",children:e.jsx("div",{className:"text-white font-medium text-sm",children:l})},l))}),e.jsx("p",{className:"text-gray-400 text-sm text-center",children:"+ All EVM-compatible dApps"}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Developer Integration"}),e.jsx(i,{children:"RamaPay follows the EIP-1193 standard, making it compatible with all Web3 libraries."}),e.jsx(o,{title:"Detect RamaPay Extension",language:"javascript",code:`// Check if RamaPay is installed
if (typeof window.ethereum !== 'undefined') {
  console.log('Wallet detected!');
  
  // Check if it's specifically RamaPay
  if (window.ethereum.isRamaPay) {
    console.log('RamaPay extension detected!');
  }
}`}),e.jsx(o,{title:"Request Account Connection",language:"javascript",code:`// Request connection to user's wallet
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
}`}),e.jsx(o,{title:"Switch to Ramestta Network",language:"javascript",code:`// Add and switch to Ramestta Mainnet
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
}`}),e.jsx(o,{title:"Send Transaction",language:"javascript",code:`// Send RAMA to an address
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
}`}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Pre-configured Networks"}),e.jsx(d,{headers:["Network","Chain ID","RPC URL","Explorer"],rows:[["Ramestta Mainnet","1370","https://blockchain.ramestta.com","https://ramascan.com"],["Ramestta Testnet","1371","https://testnet.ramestta.com","https://testnet.ramascan.com"],["Polygon Mainnet","137","https://polygon-rpc.com","https://polygonscan.com"],["Ethereum Mainnet","1","https://eth.llamarpc.com","https://etherscan.io"]]}),e.jsx(a,{}),e.jsx(t,{level:2,children:"Troubleshooting"}),e.jsx(d,{headers:["Issue","Solution"],rows:[["Extension not appearing","Click puzzle icon in Chrome toolbar and pin RamaPay"],["dApp not detecting wallet","Refresh the page or disable other wallet extensions"],["Transaction stuck pending",'Try increasing gas price or use "Speed Up" option'],["Wrong network connected","Click network name in extension and switch to Ramestta"],["Forgot password","Use your recovery phrase to import wallet with new password"]]}),e.jsx(c,{type:"success",title:"Need Help?",children:e.jsxs("ul",{className:"text-sm",children:[e.jsxs("li",{children:["• Telegram: ",e.jsx("a",{href:"https://t.me/AamirAlam",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"@AamirAlam"})]}),e.jsxs("li",{children:["• GitHub Issues: ",e.jsx("a",{href:"https://github.com/AamirAlam/RamaPay",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"Report a bug"})]})]})})]});export{x as default};
