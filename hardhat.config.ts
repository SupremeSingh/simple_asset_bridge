import { HardhatUserConfig, task } from "hardhat/config";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-truffle5";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";
import "@typechain/hardhat";
import '@nomiclabs/hardhat-waffle'

require('dotenv').config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const DEPLOY_ENDPOINT_ORIGIN = process.env.DEPLOY_ENDPOINT_ORIGIN;
const DEPLOY_ENDPOINT_DESTINATION = process.env.DEPLOY_ENDPOINT_DESTINATION;
const DEPLOY_ACC_KEY = process.env.DEPLOY_ACC_KEY;

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

//....
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    artifacts: '../web/src/artifacts',
    tests: './test',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      chainId: 5777,
      url: 'http://127.0.0.1:7545',
    },
    // Eth side of the bridge - supported on Ropsten 
    origin: {
      url: process.env.DEPLOY_ENDPOINT_ORIGIN || "",
      accounts:
      DEPLOY_ACC_KEY !== undefined ? [DEPLOY_ACC_KEY] : [],
    },
    // Polygon side of the bridge - supported on Mumbai 
    destination: {
      url: process.env.DEPLOY_ENDPOINT_DESTINATION || "",
      accounts:
      DEPLOY_ACC_KEY !== undefined ? [DEPLOY_ACC_KEY] : [],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;