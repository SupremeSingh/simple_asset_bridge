/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EthSideToken,
  EthSideTokenInterface,
} from "../../../contracts/ethContracts/EthSideToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_initialSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405268056bc75e2d6310000060055534801561001d57600080fd5b506040518060400160405280600c81526020016b32ba3429b4b232aa37b5b2b760a11b815250604051806040016040528060038152602001621154d560ea1b8152508160039080519060200190610075929190610186565b508051610089906004906020840190610186565b50505061009e336005546100a360201b60201c565b610280565b6001600160a01b0382166100fd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825461010f919061021f565b90915550506001600160a01b0382166000908152602081905260408120805483929061013c90849061021f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b82805461019290610245565b90600052602060002090601f0160209004810192826101b457600085556101fa565b82601f106101cd57805160ff19168380011785556101fa565b828001600101855582156101fa579182015b828111156101fa5782518255916020019190600101906101df565b5061020692915061020a565b5090565b5b80821115610206576000815560010161020b565b6000821982111561024057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061025957607f821691505b6020821081141561027a57634e487b7160e01b600052602260045260246000fd5b50919050565b61089b80620002906000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a457c2d714610172578063a9059cbb14610185578063c3b2d33714610198578063dd62ed3e146101a157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101b4565b6040516100ce91906107af565b60405180910390f35b6100ea6100e5366004610785565b610246565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610749565b61025e565b604051601281526020016100ce565b6100ea61013c366004610785565b610282565b6100fe61014f3660046106f4565b6001600160a01b031660009081526020819052604090205490565b6100c16102a4565b6100ea610180366004610785565b6102b3565b6100ea610193366004610785565b610333565b6100fe60055481565b6100fe6101af366004610716565b610341565b6060600380546101c39061082a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ef9061082a565b801561023c5780601f106102115761010080835404028352916020019161023c565b820191906000526020600020905b81548152906001019060200180831161021f57829003601f168201915b5050505050905090565b60003361025481858561036c565b5060019392505050565b60003361026c858285610490565b61027785858561050a565b506001949350505050565b6000336102548185856102958383610341565b61029f9190610804565b61036c565b6060600480546101c39061082a565b600033816102c18286610341565b9050838110156103265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610277828686840361036c565b60003361025481858561050a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103ce5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161031d565b6001600160a01b03821661042f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161031d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061049c8484610341565b9050600019811461050457818110156104f75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161031d565b610504848484840361036c565b50505050565b6001600160a01b03831661056e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161031d565b6001600160a01b0382166105d05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161031d565b6001600160a01b038316600090815260208190526040902054818110156106485760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161031d565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061067f908490610804565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106cb91815260200190565b60405180910390a3610504565b80356001600160a01b03811681146106ef57600080fd5b919050565b60006020828403121561070657600080fd5b61070f826106d8565b9392505050565b6000806040838503121561072957600080fd5b610732836106d8565b9150610740602084016106d8565b90509250929050565b60008060006060848603121561075e57600080fd5b610767846106d8565b9250610775602085016106d8565b9150604084013590509250925092565b6000806040838503121561079857600080fd5b6107a1836106d8565b946020939093013593505050565b600060208083528351808285015260005b818110156107dc578581018301518582016040015282016107c0565b818111156107ee576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561082557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061083e57607f821691505b6020821081141561085f57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220eb5c3ec7295045e8436d923970beedee6d246195be187557f583b1b42690eb3264736f6c63430008070033";

type EthSideTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthSideTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthSideToken__factory extends ContractFactory {
  constructor(...args: EthSideTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EthSideToken> {
    return super.deploy(overrides || {}) as Promise<EthSideToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EthSideToken {
    return super.attach(address) as EthSideToken;
  }
  override connect(signer: Signer): EthSideToken__factory {
    return super.connect(signer) as EthSideToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthSideTokenInterface {
    return new utils.Interface(_abi) as EthSideTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthSideToken {
    return new Contract(address, _abi, signerOrProvider) as EthSideToken;
  }
}