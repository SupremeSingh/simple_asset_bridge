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
} from "../../common";

export interface EthSideBridgeInterface extends utils.Interface {
  functions: {
    "ethSideToken()": FunctionFragment;
    "gatewayAddress()": FunctionFragment;
    "lockEthSideToken(address,uint256,bytes32)": FunctionFragment;
    "unlockEthSideToken(address,uint256,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ethSideToken"
      | "gatewayAddress"
      | "lockEthSideToken"
      | "unlockEthSideToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ethSideToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gatewayAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockEthSideToken",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockEthSideToken",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ethSideToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gatewayAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockEthSideToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockEthSideToken",
    data: BytesLike
  ): Result;

  events: {
    "tokensLocked(address,bytes32,uint256,uint256)": EventFragment;
    "tokensUnlocked(address,bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "tokensLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "tokensUnlocked"): EventFragment;
}

export interface tokensLockedEventObject {
  requester: string;
  ethDepositHash: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type tokensLockedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  tokensLockedEventObject
>;

export type tokensLockedEventFilter = TypedEventFilter<tokensLockedEvent>;

export interface tokensUnlockedEventObject {
  requester: string;
  polyDepositHash: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type tokensUnlockedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  tokensUnlockedEventObject
>;

export type tokensUnlockedEventFilter = TypedEventFilter<tokensUnlockedEvent>;

export interface EthSideBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EthSideBridgeInterface;

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
    ethSideToken(overrides?: CallOverrides): Promise<[string]>;

    gatewayAddress(overrides?: CallOverrides): Promise<[string]>;

    lockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ethSideToken(overrides?: CallOverrides): Promise<string>;

  gatewayAddress(overrides?: CallOverrides): Promise<string>;

  lockEthSideToken(
    _requester: string,
    _bridgedAmount: BigNumberish,
    _ethDepositHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockEthSideToken(
    _requester: string,
    _bridgedAmount: BigNumberish,
    _polyDepositHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ethSideToken(overrides?: CallOverrides): Promise<string>;

    gatewayAddress(overrides?: CallOverrides): Promise<string>;

    lockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "tokensLocked(address,bytes32,uint256,uint256)"(
      requester?: string | null,
      ethDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensLockedEventFilter;
    tokensLocked(
      requester?: string | null,
      ethDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensLockedEventFilter;

    "tokensUnlocked(address,bytes32,uint256,uint256)"(
      requester?: string | null,
      polyDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensUnlockedEventFilter;
    tokensUnlocked(
      requester?: string | null,
      polyDepositHash?: BytesLike | null,
      amount?: null,
      timestamp?: null
    ): tokensUnlockedEventFilter;
  };

  estimateGas: {
    ethSideToken(overrides?: CallOverrides): Promise<BigNumber>;

    gatewayAddress(overrides?: CallOverrides): Promise<BigNumber>;

    lockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ethSideToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gatewayAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _ethDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockEthSideToken(
      _requester: string,
      _bridgedAmount: BigNumberish,
      _polyDepositHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
