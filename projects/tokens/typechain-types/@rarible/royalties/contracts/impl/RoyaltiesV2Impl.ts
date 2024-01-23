/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
} from "../../../../common";

export declare namespace LibPart {
  export type PartStruct = {
    account: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type PartStructOutput = [string, BigNumber] & {
    account: string;
    value: BigNumber;
  };
}

export interface RoyaltiesV2ImplInterface extends utils.Interface {
  functions: {
    "getRaribleV2Royalties(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRaribleV2Royalties" | "royaltyInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRaribleV2Royalties",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRaribleV2Royalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;

  events: {
    "RoyaltiesSet(uint256,tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoyaltiesSet"): EventFragment;
}

export interface RoyaltiesSetEventObject {
  tokenId: BigNumber;
  royalties: LibPart.PartStructOutput[];
}
export type RoyaltiesSetEvent = TypedEvent<
  [BigNumber, LibPart.PartStructOutput[]],
  RoyaltiesSetEventObject
>;

export type RoyaltiesSetEventFilter = TypedEventFilter<RoyaltiesSetEvent>;

export interface RoyaltiesV2Impl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltiesV2ImplInterface;

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
    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;
  };

  getRaribleV2Royalties(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  royaltyInfo(
    id: PromiseOrValue<BigNumberish>,
    _salePrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
  >;

  callStatic: {
    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { receiver: string; royaltyAmount: BigNumber }
    >;
  };

  filters: {
    "RoyaltiesSet(uint256,tuple[])"(
      tokenId?: null,
      royalties?: null
    ): RoyaltiesSetEventFilter;
    RoyaltiesSet(tokenId?: null, royalties?: null): RoyaltiesSetEventFilter;
  };

  estimateGas: {
    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRaribleV2Royalties(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      id: PromiseOrValue<BigNumberish>,
      _salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
