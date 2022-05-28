import { ethers } from "hardhat";
require('dotenv').config()

const { expect } = require('chai');
const hre = require("hardhat");
const { BigNumber } = require('ethers');

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId
}) => {

  const { deploy, log } = deployments
  const chainId = await getChainId()
  // If we are on Rinkeby, we proceed with deployement!
  if (chainId == ) {

    log("Rinkeby detected! Deploying contracts...")

    let SMALL_BALANCE = ethers.utils.parseUnits("1", 10);
    let MEDIUM_BALANCE = ethers.utils.parseUnits("5", 18);
    let GIANT_BALANCE = ethers.utils.parseUnits("10", 18);


    log("--------------------- Deploying My Token Contract ----------------------")

    const MyToken = await ethers.getContractFactory("ethSideToken");
    const ethSideToken = await MyToken.deploy();
    await ethSideToken.deployed();

    log("My Token Contract deployed to:", ethSideToken.address);

    log("--------------------- Just Checking Up To Here ----------------------")
  
    log("Verify above addresses with: npx hardhat verify --network <network> DEPLOYED_CONTRACT_ADDRESS <'Constructor argument 1'>")

    log("--------------------- Yowza - everything is now set up ----------------------")

  }
}