// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract ethSideBridge {
    IERC20 public ethSideToken;
    address public gatewayAddress;

    event tokensLocked(
        address indexed requester,
        bytes32 indexed ethDepositHash,
        uint256 amount,
        uint256 timestamp
    );
    event tokensUnlocked(
        address indexed requester,
        bytes32 indexed polyDepositHash,
        uint256 amount,
        uint256 timestamp
    );

    modifier onlyGateway() {
        require(
            msg.sender == gatewayAddress,
            "Only gateway can call this function"
        );
        _;
    }

    constructor(address _gatewayAddress, address _ethSideTokenAddress) {
        ethSideToken = IERC20(_ethSideTokenAddress);
        gatewayAddress = _gatewayAddress;
    }

    function lockEthSideToken(
        address _requester,
        uint256 _bridgedAmount,
        bytes32 _ethDepositHash
    ) external onlyGateway {
        emit tokensLocked(
            _requester,
            _ethDepositHash,
            _bridgedAmount,
            block.timestamp
        );
    }

    function unlockEthSideToken(
        address _requester,
        uint256 _bridgedAmount,
        bytes32 _polyDepositHash
    ) external onlyGateway {
        ethSideToken.transfer(_requester, _bridgedAmount);
        emit tokensUnlocked(
            _requester,
            _polyDepositHash,
            _bridgedAmount,
            block.timestamp
        );
    }
}
