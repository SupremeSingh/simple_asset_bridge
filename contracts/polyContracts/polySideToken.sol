// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract polySideToken is ERC20, ERC20Burnable{
    
    uint256 public _initialSupply = 0 * 10 ** 18; // Token must have no supply at the beginning
    address ethPolyBridgeAddress;

    modifier onlyEthPolyBridge() {
        require(msg.sender == ethPolyBridgeAddress, "Only the ethPolyBridge can call this function");
        _;
    }

    constructor(address _ethPolyBridgeAddress) ERC20("polySideToken", "PST") {
        ethPolyBridgeAddress = _ethPolyBridgeAddress;
        _mint(msg.sender, _initialSupply);
    }

    function mint(address _to, uint256 _amount) public onlyEthPolyBridge() {
        _mint(_to, _amount);
    }

    function burn(uint256 _amount) public override onlyEthPolyBridge() {
        super.burn(_amount);
    }

    function burnFrom(address account, uint256 amount) public override virtual onlyEthPolyBridge() {
        _spendAllowance(account, _msgSender(), amount);
        _burn(account, amount);
    }

}