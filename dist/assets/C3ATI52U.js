import{cU as e}from"./RZk19cD8.js";import{H as t,P as n,a,I as s,D as r,T as o}from"./D1yRkveG.js";const l=()=>e.jsxs("div",{children:[e.jsx(t,{level:1,children:"Hardhat Guide"}),e.jsx(n,{children:"Hardhat is a development environment for Ethereum software that makes it easy to compile, deploy, test, and debug your smart contracts. This guide shows how to use Hardhat with Ramestta."}),e.jsx(t,{level:2,children:"Project Setup"}),e.jsx(a,{title:"Initialize Project",language:"bash",code:`# Create and enter project directory
mkdir ramestta-hardhat && cd ramestta-hardhat

# Initialize npm and Hardhat
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv

# Initialize Hardhat project
npx hardhat init
# Choose "Create a JavaScript project"`}),e.jsx(t,{level:2,children:"Configure for Ramestta"}),e.jsx(a,{title:"hardhat.config.js",language:"javascript",code:`require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    // Ramestta Mainnet
    ramestta: {
      url: "https://blockchain.ramestta.com",
      chainId: 1370,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000, // 1 gwei
    },
    // Ramestta Testnet
    ramesttaTestnet: {
      url: "https://testnet.ramestta.com", 
      chainId: 1371,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000,
    }
  },
  etherscan: {
    apiKey: {
      ramestta: process.env.RAMASCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "ramestta",
        chainId: 1370,
        urls: {
          apiURL: "https://ramascan.com/api",
          browserURL: "https://ramascan.com"
        }
      },
      {
        network: "ramesttaTestnet",
        chainId: 1371,
        urls: {
          apiURL: "https://testbackendapi.ramascan.com",
          browserURL: "https://pingaksha.ramascan.com"
        }
      }
    ]
  }
};`}),e.jsx(a,{title:".env",language:"bash",code:`PRIVATE_KEY=your_wallet_private_key_here
RAMASCAN_API_KEY=your_ramascan_api_key`}),e.jsxs(s,{type:"warning",title:"Security",children:["Never commit your ",e.jsx("code",{children:".env"})," file. Add it to ",e.jsx("code",{children:".gitignore"}),"."]}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Write a Smart Contract"}),e.jsx(a,{title:"contracts/HelloRamestta.sol",language:"solidity",code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloRamestta {
    string public message;
    address public owner;
    uint256 public messageCount;
    
    event MessageUpdated(
        string newMessage, 
        address indexed updatedBy, 
        uint256 timestamp
    );
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    constructor(string memory _initialMessage) {
        message = _initialMessage;
        owner = msg.sender;
        messageCount = 0;
    }
    
    function setMessage(string calldata _newMessage) external {
        message = _newMessage;
        messageCount++;
        emit MessageUpdated(_newMessage, msg.sender, block.timestamp);
    }
    
    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid address");
        owner = _newOwner;
    }
    
    function getInfo() external view returns (
        string memory currentMessage,
        address currentOwner,
        uint256 totalMessages,
        uint256 blockNumber
    ) {
        return (message, owner, messageCount, block.number);
    }
}`}),e.jsx(t,{level:2,children:"Compile Contract"}),e.jsx(a,{title:"Compile",language:"bash",code:`npx hardhat compile

# Output:
# Compiled 1 Solidity file successfully`}),e.jsx(t,{level:2,children:"Write Deployment Script"}),e.jsx(a,{title:"scripts/deploy.js",language:"javascript",code:`const hre = require("hardhat");

async function main() {
  console.log("Deploying HelloRamestta contract...");
  
  // Get the contract factory
  const HelloRamestta = await hre.ethers.getContractFactory("HelloRamestta");
  
  // Deploy with initial message
  const contract = await HelloRamestta.deploy("Hello from Ramestta!");
  
  // Wait for deployment
  await contract.waitForDeployment();
  
  const address = await contract.getAddress();
  console.log("HelloRamestta deployed to:", address);
  console.log("View on RamaScan: https://ramascan.com/address/" + address);
  
  // Verify the deployment
  const message = await contract.message();
  console.log("Initial message:", message);
  
  return address;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`}),e.jsx(t,{level:2,children:"Deploy to Ramestta"}),e.jsx(a,{title:"Deploy Commands",language:"bash",code:`# Deploy to Ramestta Testnet first
npx hardhat run scripts/deploy.js --network ramesttaTestnet

# After testing, deploy to Mainnet
npx hardhat run scripts/deploy.js --network ramestta`}),e.jsx(s,{type:"info",title:"Gas Costs",children:"Ramestta has very low gas costs. A typical contract deployment costs less than $0.10 worth of RAMA."}),e.jsx(r,{}),e.jsx(t,{level:2,children:"Verify Contract"}),e.jsx(a,{title:"Verify on RamaScan",language:"bash",code:`# Verify with constructor arguments
npx hardhat verify --network ramestta <CONTRACT_ADDRESS> "Hello from Ramestta!"

# Example:
npx hardhat verify --network ramestta 0x1234...5678 "Hello from Ramestta!"`}),e.jsx(t,{level:2,children:"Write Tests"}),e.jsx(a,{title:"test/HelloRamestta.test.js",language:"javascript",code:`const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloRamestta", function () {
  let contract;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const HelloRamestta = await ethers.getContractFactory("HelloRamestta");
    contract = await HelloRamestta.deploy("Initial Message");
    await contract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the initial message", async function () {
      expect(await contract.message()).to.equal("Initial Message");
    });

    it("Should set the right owner", async function () {
      expect(await contract.owner()).to.equal(owner.address);
    });
  });

  describe("setMessage", function () {
    it("Should update the message", async function () {
      await contract.setMessage("New Message");
      expect(await contract.message()).to.equal("New Message");
    });

    it("Should increment messageCount", async function () {
      await contract.setMessage("Message 1");
      await contract.setMessage("Message 2");
      expect(await contract.messageCount()).to.equal(2);
    });

    it("Should emit MessageUpdated event", async function () {
      await expect(contract.setMessage("Test"))
        .to.emit(contract, "MessageUpdated")
        .withArgs("Test", owner.address, await getBlockTimestamp());
    });
  });

  describe("transferOwnership", function () {
    it("Should transfer ownership", async function () {
      await contract.transferOwnership(addr1.address);
      expect(await contract.owner()).to.equal(addr1.address);
    });

    it("Should revert if not owner", async function () {
      await expect(
        contract.connect(addr1).transferOwnership(addr1.address)
      ).to.be.revertedWith("Not owner");
    });
  });
});

async function getBlockTimestamp() {
  const block = await ethers.provider.getBlock("latest");
  return block.timestamp;
}`}),e.jsx(a,{title:"Run Tests",language:"bash",code:`# Run all tests
npx hardhat test

# Run with gas reporting
REPORT_GAS=true npx hardhat test

# Run specific test file
npx hardhat test test/HelloRamestta.test.js`}),e.jsx(t,{level:2,children:"Interact with Deployed Contract"}),e.jsx(a,{title:"scripts/interact.js",language:"javascript",code:`const hre = require("hardhat");

async function main() {
  // Replace with your deployed contract address
  const contractAddress = "0x...";
  
  // Get contract instance
  const HelloRamestta = await hre.ethers.getContractFactory("HelloRamestta");
  const contract = HelloRamestta.attach(contractAddress);
  
  // Read current message
  const currentMessage = await contract.message();
  console.log("Current message:", currentMessage);
  
  // Update message
  console.log("Updating message...");
  const tx = await contract.setMessage("Updated via Hardhat!");
  await tx.wait();
  
  // Read updated message
  const newMessage = await contract.message();
  console.log("New message:", newMessage);
  
  // Get contract info
  const info = await contract.getInfo();
  console.log("Contract Info:", {
    message: info.currentMessage,
    owner: info.currentOwner,
    totalMessages: info.totalMessages.toString(),
    blockNumber: info.blockNumber.toString()
  });
}

main().catch(console.error);`}),e.jsx(t,{level:2,children:"Hardhat Tasks"}),e.jsx(a,{title:"Custom Hardhat Task",language:"javascript",code:`// Add to hardhat.config.js

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, hre) => {
    const balance = await hre.ethers.provider.getBalance(taskArgs.account);
    console.log(hre.ethers.formatEther(balance), "RAMA");
  });

task("block", "Prints current block number")
  .setAction(async (_, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log("Current block:", blockNumber);
  });

// Usage:
// npx hardhat balance --account 0x... --network ramestta
// npx hardhat block --network ramestta`}),e.jsx(t,{level:2,children:"Useful Commands"}),e.jsx(o,{headers:["Command","Description"],rows:[["npx hardhat compile","Compile all contracts"],["npx hardhat test","Run all tests"],["npx hardhat run scripts/deploy.js --network ramestta","Deploy to mainnet"],["npx hardhat verify --network ramestta <address> <args>","Verify contract"],["npx hardhat console --network ramestta","Interactive console"],["npx hardhat clean","Clear cache and artifacts"],["npx hardhat node","Start local Hardhat node"]]}),e.jsxs(s,{type:"success",title:"Next Steps",children:["Your contract is deployed! Check it on ",e.jsx("a",{href:"https://ramascan.com",target:"_blank",rel:"noopener noreferrer",className:"text-primary-400 hover:underline",children:"RamaScan"}),", or learn about ",e.jsx("a",{href:"/docs?page=sdk-overview",className:"text-primary-400 hover:underline",children:"integrating with the SDK"}),"."]})]});export{l as default};
