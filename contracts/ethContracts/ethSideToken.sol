// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ethSideToken is ERC20 {
    
    uint256 public _initialSupply = 100 * 10 ** 18; // A general value for supply

    constructor() ERC20("ethSideToken", "EST") {
        _mint(msg.sender, _initialSupply);
    }

}