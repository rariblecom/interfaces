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
  PayableOverrides,
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
  PromiseOrValue,
} from "./common";

export declare namespace RaribleExchangeWrapper {
  export type PurchaseDetailsStruct = {
    marketId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    fees: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type PurchaseDetailsStructOutput = [
    number,
    BigNumber,
    BigNumber,
    string
  ] & { marketId: number; amount: BigNumber; fees: BigNumber; data: string };
}

export interface RaribleExchangeWrapperInterface extends utils.Interface {
  functions: {
    "blur()": FunctionFragment;
    "exchangeV2()": FunctionFragment;
    "looksRare()": FunctionFragment;
    "looksRareV2()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause(bool)": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "seaPort_1_1()": FunctionFragment;
    "seaPort_1_4()": FunctionFragment;
    "seaPort_1_5()": FunctionFragment;
    "sudoswap()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "weth()": FunctionFragment;
    "wyvernExchange()": FunctionFragment;
    "x2y2()": FunctionFragment;
    "singlePurchase((uint8,uint256,uint256,bytes),address,address)": FunctionFragment;
    "bulkPurchase((uint8,uint256,uint256,bytes)[],address,address,bool)": FunctionFragment;
    "approveWETH(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "blur"
      | "exchangeV2"
      | "looksRare"
      | "looksRareV2"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "owner"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "seaPort_1_1"
      | "seaPort_1_4"
      | "seaPort_1_5"
      | "sudoswap"
      | "supportsInterface"
      | "transferOwnership"
      | "weth"
      | "wyvernExchange"
      | "x2y2"
      | "singlePurchase"
      | "bulkPurchase"
      | "approveWETH"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "blur", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exchangeV2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "looksRare", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "looksRareV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pause",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seaPort_1_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seaPort_1_4",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seaPort_1_5",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sudoswap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wyvernExchange",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "x2y2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "singlePurchase",
    values: [
      RaribleExchangeWrapper.PurchaseDetailsStruct,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bulkPurchase",
    values: [
      RaribleExchangeWrapper.PurchaseDetailsStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approveWETH",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(functionFragment: "blur", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchangeV2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "looksRare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "looksRareV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seaPort_1_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seaPort_1_4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seaPort_1_5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sudoswap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wyvernExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "x2y2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "singlePurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bulkPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveWETH",
    data: BytesLike
  ): Result;

  events: {
    "Execution(bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Execution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
}

export interface ExecutionEventObject {
  result: boolean;
}
export type ExecutionEvent = TypedEvent<[boolean], ExecutionEventObject>;

export type ExecutionEventFilter = TypedEventFilter<ExecutionEvent>;

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

export interface PausedEventObject {
  paused: boolean;
}
export type PausedEvent = TypedEvent<[boolean], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RaribleExchangeWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RaribleExchangeWrapperInterface;

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
    blur(overrides?: CallOverrides): Promise<[string]>;

    exchangeV2(overrides?: CallOverrides): Promise<[string]>;

    looksRare(overrides?: CallOverrides): Promise<[string]>;

    looksRareV2(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    seaPort_1_1(overrides?: CallOverrides): Promise<[string]>;

    seaPort_1_4(overrides?: CallOverrides): Promise<[string]>;

    seaPort_1_5(overrides?: CallOverrides): Promise<[string]>;

    sudoswap(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    wyvernExchange(overrides?: CallOverrides): Promise<[string]>;

    x2y2(overrides?: CallOverrides): Promise<[string]>;

    singlePurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct,
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bulkPurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct[],
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      allowFail: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * approves weth for a list of the addresses
     * @param transferProxies - array of addresses to approve WETH for
     */
    approveWETH(
      transferProxies: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  blur(overrides?: CallOverrides): Promise<string>;

  exchangeV2(overrides?: CallOverrides): Promise<string>;

  looksRare(overrides?: CallOverrides): Promise<string>;

  looksRareV2(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
   */
  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    _paused: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  seaPort_1_1(overrides?: CallOverrides): Promise<string>;

  seaPort_1_4(overrides?: CallOverrides): Promise<string>;

  seaPort_1_5(overrides?: CallOverrides): Promise<string>;

  sudoswap(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  wyvernExchange(overrides?: CallOverrides): Promise<string>;

  x2y2(overrides?: CallOverrides): Promise<string>;

  singlePurchase(
    purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct,
    feeRecipientFirst: PromiseOrValue<string>,
    feeRecipientSecond: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bulkPurchase(
    purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct[],
    feeRecipientFirst: PromiseOrValue<string>,
    feeRecipientSecond: PromiseOrValue<string>,
    allowFail: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * approves weth for a list of the addresses
   * @param transferProxies - array of addresses to approve WETH for
   */
  approveWETH(
    transferProxies: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    blur(overrides?: CallOverrides): Promise<string>;

    exchangeV2(overrides?: CallOverrides): Promise<string>;

    looksRare(overrides?: CallOverrides): Promise<string>;

    looksRareV2(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    pause(
      _paused: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    seaPort_1_1(overrides?: CallOverrides): Promise<string>;

    seaPort_1_4(overrides?: CallOverrides): Promise<string>;

    seaPort_1_5(overrides?: CallOverrides): Promise<string>;

    sudoswap(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    wyvernExchange(overrides?: CallOverrides): Promise<string>;

    x2y2(overrides?: CallOverrides): Promise<string>;

    singlePurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct,
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    bulkPurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct[],
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      allowFail: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * approves weth for a list of the addresses
     * @param transferProxies - array of addresses to approve WETH for
     */
    approveWETH(
      transferProxies: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Execution(bool)"(result?: null): ExecutionEventFilter;
    Execution(result?: null): ExecutionEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(bool)"(paused?: null): PausedEventFilter;
    Paused(paused?: null): PausedEventFilter;
  };

  estimateGas: {
    blur(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeV2(overrides?: CallOverrides): Promise<BigNumber>;

    looksRare(overrides?: CallOverrides): Promise<BigNumber>;

    looksRareV2(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    seaPort_1_1(overrides?: CallOverrides): Promise<BigNumber>;

    seaPort_1_4(overrides?: CallOverrides): Promise<BigNumber>;

    seaPort_1_5(overrides?: CallOverrides): Promise<BigNumber>;

    sudoswap(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    wyvernExchange(overrides?: CallOverrides): Promise<BigNumber>;

    x2y2(overrides?: CallOverrides): Promise<BigNumber>;

    singlePurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct,
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bulkPurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct[],
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      allowFail: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * approves weth for a list of the addresses
     * @param transferProxies - array of addresses to approve WETH for
     */
    approveWETH(
      transferProxies: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    blur(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    looksRare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    looksRareV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    seaPort_1_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seaPort_1_4(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seaPort_1_5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sudoswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wyvernExchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    x2y2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    singlePurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct,
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bulkPurchase(
      purchaseDetails: RaribleExchangeWrapper.PurchaseDetailsStruct[],
      feeRecipientFirst: PromiseOrValue<string>,
      feeRecipientSecond: PromiseOrValue<string>,
      allowFail: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * approves weth for a list of the addresses
     * @param transferProxies - array of addresses to approve WETH for
     */
    approveWETH(
      transferProxies: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}