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
  const PolyToken = await ethers.getContractFactory("polySideToken");
  const polySideToken = await PolyToken.deploy();

  await polySideToken.deployed();

  console.log("Token deployed to:", polySideToken.address);

    // We get the bridge contract to deploy
    const PolyBridge = await ethers.getContractFactory("polySideBridge");
    const polySideBridge = await PolyBridge.deploy(GATEWAY_URL, polySideToken.address);
  
    await polySideBridge.deployed();
  
    console.log("Bridge deployed to:", polySideBridge.address);

  console.log("Verify above addresses with: npx hardhat verify --network <network> DEPLOYED_CONTRACT_ADDRESS <'Constructor argument 1'>")

  console.log("--------------------- Yowza - everything is now set up ----------------------")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
