// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { ethers } from "hardhat";
require('dotenv').config()

const GATEWAY_URL = process.env.GATEWAY_ACC_KEY || "";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the token contract to deploy
  const EthToken = await ethers.getContractFactory("ethSideToken");
  const ethSideToken = await EthToken.deploy();

  await ethSideToken.deployed();

  console.log("Token deployed to:", ethSideToken.address);

    // We get the bridge contract to deploy
    const EthBridge = await ethers.getContractFactory("ethSideBridge");
    const ethSideBridge = await EthBridge.deploy(GATEWAY_URL, ethSideToken.address);
  
    await ethSideBridge.deployed();
  
    console.log("Bridge deployed to:", ethSideBridge.address);

  console.log("Verify above addresses with: npx hardhat verify --network <network> DEPLOYED_CONTRACT_ADDRESS <'Constructor argument 1'>")

  console.log("--------------------- Yowza - everything is now set up ----------------------")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
