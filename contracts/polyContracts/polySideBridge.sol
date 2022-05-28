// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../IERC20ChildToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract polySideBridge is Ownable {
    bool bridgeState;
    IERC20ChildToken private polySideToken;
    address public gatewayAddress;

    event bridgeInitialized(uint256 indexed timestamp);
    event tokensBridged(
        address indexed requester,
        bytes32 indexed ethDepositHash,
        uint256 amount,
        uint256 timestamp
    );
    event tokensReturned(
        address indexed requester,
        bytes32 indexed polyDepositHash,
        uint256 amount,
        uint256 timestamp
    );

    modifier bridgeIsInitialized() {
        require(bridgeState, "Bridge is not initialized");
        _;
    }
    modifier onlyGateway() {
        require(
            msg.sender == gatewayAddress,
            "Only gateway can call this function"
        );
        _;
    }

    constructor(address _gatewayAddress) {
        gatewayAddress = _gatewayAddress;
    }

    function initializeBridge(address _polySideTokenAddress)
        external
        onlyOwner
    {
        polySideToken = IERC20ChildToken(_polySideTokenAddress);
        bridgeState = true;
        emit bridgeInitialized(block.timestamp);
    }

    function bridgeTokensToPoly(
        address _requester,
        uint256 _bridgedAmount,
        bytes32 _ethDepositHash
    ) external bridgeIsInitialized onlyGateway {
        polySideToken.mint(_requester, _bridgedAmount);
        emit tokensBridged(
            _requester,
            _ethDepositHash,
            _bridgedAmount,
            block.timestamp
        );
    }

    function returnTokensFromPoly(
        address _requester,
        uint256 _bridgedAmount,
        bytes32 _polyDepositHash
    ) external onlyGateway {
        polySideToken.burn(_bridgedAmount);
        emit tokensReturned(
            _requester,
            _polyDepositHash,
            _bridgedAmount,
            block.timestamp
        );
    }
}
