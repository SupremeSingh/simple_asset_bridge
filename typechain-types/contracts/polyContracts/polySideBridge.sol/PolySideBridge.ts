/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface PolySideBridgeInterface extends utils.Interface {
  functions: {
    "bridgeTokensToPoly(address,uint256,bytes32)": FunctionFragment;
    "gatewayAddress()": FunctionFragment;
    "initializeBridge(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnTokensFromPoly(address,uint256,bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridgeTokensToPoly"
      | "gatewayAddress"
      | "initializeBridge"
      | "owner"
      | "renounceOwnership"
      | "returnTokensFromPoly"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bridgeTokensToPoly",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gatewayAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeBridge",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokensFromPoly",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeTokensToPoly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gatewayAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokensFromPoly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "bridgeInitialized(uint256)": EventFragment;
    "tokensBridged(address,bytes32,uint256,uint256)": EventFragment;
    "tokensReturned(address,bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "bridgeInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "tokensBridged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "tokensReturned"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface bridgeInitializedEventObject {
  timestamp: BigNumber;
}
export type bridgeInitializedEvent = TypedEvent<
  [BigNumber],
  bridgeInitializedEventObject
>;

export type bridgeInitializedEventFilter =
  TypedEventFilter<bridgeInitializedEvent>;

export interface tokensBridgedEventObject {
  requester: string;
  ethDepositHash: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type tokensBridgedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  tokensBridgedEventObject
>;

export type tokensBridgedEventFilter = TypedEventFilter<tokensBridgedEvent>;

export interface tokensReturnedEventObject {
  requester: string;
  polyDepositHash: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type tokensReturnedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  tokensReturnedEventObject
>;

export type tokensReturnedEventFilter = TypedEventFilter<tokensReturnedEvent>;

export interface PolySideBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PolySideBridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bridgeTokensToPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gatewayAddress(overrides?: CallOverrides): Promise<[string]>;

    initializeBridge(
      _polySideTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnTokensFromPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bridgeTokensToPoly(
    _requester: string,
    _bridgedAmount: BigNumberish,
    _ethDepositHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gatewayAddress(overrides?: CallOverrides): Promise<string>;

  initializeBridge(
    _polySideTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnTokensFromPoly(
    _requester: string,
    _bridgedAmount: BigNumberish,
    _polyDepositHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridgeTokensToPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    gatewayAddress(overrides?: CallOverrides): Promise<string>;

    initializeBridge(
      _polySideTokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnTokensFromPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "bridgeInitialized(uint256)"(
      timestamp?: BigNumberish | null
    ): bridgeInitializedEventFilter;
    bridgeInitialized(
      timestamp?: BigNumberish | null
    ): bridgeInitializedEventFilter;

    "tokensBridged(address,bytes32,uint256,uint256)"(
      requester?: string | null,
      ethDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensBridgedEventFilter;
    tokensBridged(
      requester?: string | null,
      ethDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensBridgedEventFilter;

    "tokensReturned(address,bytes32,uint256,uint256)"(
      requester?: string | null,
      polyDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensReturnedEventFilter;
    tokensReturned(
      requester?: string | null,
      polyDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensReturnedEventFilter;
  };

  estimateGas: {
    bridgeTokensToPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gatewayAddress(overrides?: CallOverrides): Promise<BigNumber>;

    initializeBridge(
      _polySideTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnTokensFromPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeTokensToPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gatewayAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeBridge(
      _polySideTokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnTokensFromPoly(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
