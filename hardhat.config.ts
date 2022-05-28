require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require('@nomiclabs/hardhat-waffle')

require('dotenv').config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const DEPLOY_ENDPOINT_ORIGIN = process.env.DEPLOY_ENDPOINT_ORIGIN;
const DEPLOY_ENDPOINT_DESTINATION = process.env.DEPLOY_ENDPOINT_DESTINATION;
const DEPLOY_ACC_KEY = process.env.DEPLOY_ACC_KEY;

//....
module.exports = {
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
    scripts: './scripts',
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
      url: DEPLOY_ENDPOINT_ORIGIN,
      accounts: [DEPLOY_ACC_KEY],
    },
    // Polygon side of the bridge - supported on Mumbai 
    destination: {
      url:DEPLOY_ENDPOINT_DESTINATION,
      accounts: [DEPLOY_ACC_KEY],
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
