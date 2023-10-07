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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RoyaltyArtBlocksInterface extends utils.Interface {
  functions: {
    "getRoyaltyData(uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getRoyaltyData"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRoyaltyData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRoyaltyData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RoyaltyArtBlocks extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltyArtBlocksInterface;

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
    getRoyaltyData(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        artistAddress: string;
        additionalPayee: string;
        additionalPayeePercentage: BigNumber;
        royaltyFeeByID: BigNumber;
      }
    >;
  };

  getRoyaltyData(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber] & {
      artistAddress: string;
      additionalPayee: string;
      additionalPayeePercentage: BigNumber;
      royaltyFeeByID: BigNumber;
    }
  >;

  callStatic: {
    getRoyaltyData(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        artistAddress: string;
        additionalPayee: string;
        additionalPayeePercentage: BigNumber;
        royaltyFeeByID: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getRoyaltyData(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRoyaltyData(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}