import React from 'react';
import { Heading, Paragraph, CodeBlock, InfoBox, Table, List, Divider, Badge } from '../../components/DocsComponents';

const RemixGuidePage: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Remix IDE Guide</Heading>
      
      <Paragraph>
        Remix IDE is a powerful browser-based development environment for Solidity smart contracts. 
        It's perfect for learning, quick prototyping, and deploying contracts to Ramestta without 
        any local setup required.
      </Paragraph>

      <InfoBox type="info" title="No Installation Required">
        Remix runs entirely in your browser at <a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">remix.ethereum.org</a>.
        Just connect your wallet and start coding!
      </InfoBox>

      <Heading level={2}>Step 1: Configure MetaMask</Heading>

      <Paragraph>
        Before using Remix with Ramestta, add the network to MetaMask:
      </Paragraph>

      <Table
        headers={['Setting', 'Mainnet Value', 'Testnet Value']}
        rows={[
          ['Network Name', 'Ramestta Mainnet', 'Ramestta Testnet'],
          ['RPC URL', 'https://blockchain.ramestta.com', 'https://testnet.ramestta.com'],
          ['Chain ID', '1370', '1371'],
          ['Currency Symbol', 'RAMA', 'RAMA'],
          ['Block Explorer', 'https://ramascan.com', 'https://pingaksha.ramascan.com']
        ]}
      />

      <Heading level={2}>Step 2: Open Remix IDE</Heading>

      <List items={[
        'Go to https://remix.ethereum.org',
        'Accept the welcome popup',
        'You\'ll see the File Explorer on the left side'
      ]} />

      <Heading level={2}>Step 3: Create a Smart Contract</Heading>

      <Paragraph>
        Create a new file in the <code>contracts</code> folder:
      </Paragraph>

      <List items={[
        'Click the "contracts" folder in File Explorer',
        'Click the "New File" button',
        'Name it "HelloRamestta.sol"',
        'Paste the following code:'
      ]} />

      <CodeBlock
        title="HelloRamestta.sol"
        language="solidity"
        code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title HelloRamestta
 * @dev A simple contract to store and retrieve a message
 */
contract HelloRamestta {
    string public message;
    address public owner;
    uint256 public lastUpdated;
    
    event MessageChanged(string newMessage, address changedBy);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this");
        _;
    }
    
    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
        lastUpdated = block.timestamp;
    }
    
    function setMessage(string calldata _newMessage) external {
        message = _newMessage;
        lastUpdated = block.timestamp;
        emit MessageChanged(_newMessage, msg.sender);
    }
    
    function getDetails() external view returns (
        string memory currentMessage,
        address contractOwner,
        uint256 lastUpdate
    ) {
        return (message, owner, lastUpdated);
    }
}`}
      />

      <Heading level={2}>Step 4: Compile the Contract</Heading>

      <List items={[
        'Click the "Solidity Compiler" icon in the left sidebar (or press Ctrl+S)',
        'Select compiler version 0.8.20 or higher',
        'Click "Compile HelloRamestta.sol"',
        'Green checkmark appears when compilation succeeds'
      ]} />

      <InfoBox type="info" title="Compiler Settings">
        Enable optimization with 200 runs for gas-efficient deployment. Find this under "Advanced Configurations".
      </InfoBox>

      <Heading level={2}>Step 5: Connect to Ramestta</Heading>

      <List items={[
        'Click the "Deploy & Run Transactions" icon in the left sidebar',
        'Under "Environment", select "Injected Provider - MetaMask"',
        'MetaMask will popup - approve the connection',
        'Make sure MetaMask is set to Ramestta Mainnet (Chain ID 1370) or Testnet (1371)',
        'Your account address and RAMA balance will appear'
      ]} />

      <Heading level={2}>Step 6: Deploy the Contract</Heading>

      <List items={[
        'Select "HelloRamestta" from the CONTRACT dropdown',
        'Enter your initial message in the "Deploy" input field (e.g., "Hello Ramestta!")',
        'Click "Deploy"',
        'MetaMask will ask you to confirm the transaction',
        'Confirm and wait for deployment'
      ]} />

      <CodeBlock
        title="Example Deployment"
        language="text"
        code={`Deploy Input: "Hello from Remix!"

Expected Transaction:
- Gas Limit: ~250,000
- Gas Price: 1 gwei
- Estimated Cost: ~0.00025 RAMA`}
      />

      <Heading level={2}>Step 7: Interact with Your Contract</Heading>

      <Paragraph>
        After deployment, your contract appears under "Deployed Contracts":
      </Paragraph>

      <List items={[
        'Click on your contract to expand it',
        'Blue buttons (view functions) - free, no gas',
        'Orange buttons (write functions) - require gas',
        'Click "message" to read the current message',
        'Enter a new message and click "setMessage" to update'
      ]} />

      <Divider />

      <Heading level={2}>Token Contract Example</Heading>

      <Paragraph>
        Here's a simple ERC20 token you can deploy on Ramestta:
      </Paragraph>

      <CodeBlock
        title="MyToken.sol"
        language="solidity"
        code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint8 private _decimals;
    
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals_,
        uint256 initialSupply
    ) ERC20(name, symbol) Ownable(msg.sender) {
        _decimals = decimals_;
        _mint(msg.sender, initialSupply * 10**decimals_);
    }
    
    function decimals() public view override returns (uint8) {
        return _decimals;
    }
    
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
    
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}`}
      />

      <InfoBox type="warning" title="OpenZeppelin in Remix">
        Remix automatically fetches OpenZeppelin contracts from npm. Just import them and Remix handles the rest.
      </InfoBox>

      <Heading level={2}>NFT Contract Example</Heading>

      <CodeBlock
        title="MyNFT.sol"
        language="solidity"
        code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public mintPrice = 0.01 ether; // 0.01 RAMA
    
    constructor() ERC721("Ramestta NFT", "RNFT") Ownable(msg.sender) {}
    
    function mint(string memory uri) external payable returns (uint256) {
        require(msg.value >= mintPrice, "Insufficient payment");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        
        return tokenId;
    }
    
    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }
    
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    // Required overrides
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}`}
      />

      <Divider />

      <Heading level={2}>Verify Contract on RamaScan</Heading>

      <Paragraph>
        After deploying via Remix, verify your contract on RamaScan:
      </Paragraph>

      <List items={[
        'Go to https://ramascan.com and find your contract',
        'Click "Contract" tab → "Verify & Publish"',
        'Select "Solidity (Single file)" or "Solidity (Multi-Part files)"',
        'Choose the same compiler version used in Remix',
        'Enable "Optimization" if you used it (200 runs)',
        'Paste your source code',
        'If using imports, flatten your contract first',
        'Click "Verify & Publish"'
      ]} />

      <Heading level={2}>Flatten Contract for Verification</Heading>

      <Paragraph>
        If your contract uses imports, flatten it in Remix:
      </Paragraph>

      <List items={[
        'Right-click on your contract file',
        'Select "Flatten"',
        'A new flattened file will be created',
        'Use this for RamaScan verification'
      ]} />

      <Heading level={2}>Remix Plugins</Heading>

      <Paragraph>
        Useful Remix plugins for development:
      </Paragraph>

      <Table
        headers={['Plugin', 'Description']}
        rows={[
          ['Solidity Unit Testing', 'Write and run tests directly in Remix'],
          ['Contract Verification', 'Verify contracts on block explorers'],
          ['Gas Profiler', 'Analyze gas consumption of functions'],
          ['Sourcify', 'Decentralized source code verification'],
          ['Debugger', 'Step through transactions to find bugs'],
          ['Static Analysis', 'Find common vulnerabilities']
        ]}
      />

      <Heading level={2}>Common Issues & Solutions</Heading>

      <Table
        headers={['Issue', 'Solution']}
        rows={[
          ['MetaMask not connecting', 'Refresh page, unlock MetaMask, try different browser'],
          ['Wrong network', 'Switch MetaMask to Ramestta (Chain ID 1370 or 1371)'],
          ['Insufficient funds', 'Get RAMA from faucet (testnet) or exchange'],
          ['Transaction stuck', 'Increase gas price or wait for network'],
          ['Contract not visible', 'Scroll down in "Deployed Contracts" section'],
          ['Import not found', 'Check import path, Remix fetches from npm automatically']
        ]}
      />

      <InfoBox type="success" title="Ready to Deploy">
        You now know how to compile, deploy, and verify contracts using Remix IDE on Ramestta. 
        For larger projects, consider using <a href="/docs?page=hardhat-guide" className="text-primary-400 hover:underline">Hardhat</a> for 
        better testing and tooling.
      </InfoBox>
    </div>
  );
};

export default RemixGuidePage;
