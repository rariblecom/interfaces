/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AuctionHouseBaseContract
  extends Truffle.Contract<AuctionHouseBaseInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<AuctionHouseBaseInstance>;
}

export interface AuctionBuyOut {
  name: "AuctionBuyOut";
  args: {
    auctionId: BN;
    buyer: string;
    0: BN;
    1: string;
  };
}

export interface AuctionCancelled {
  name: "AuctionCancelled";
  args: {
    auctionId: BN;
    0: BN;
  };
}

export interface AuctionCreated {
  name: "AuctionCreated";
  args: {
    auctionId: BN;
    seller: string;
    0: BN;
    1: string;
  };
}

export interface AuctionFinished {
  name: "AuctionFinished";
  args: {
    auctionId: BN;
    0: BN;
  };
}

export interface AvailableToWithdraw {
  name: "AvailableToWithdraw";
  args: {
    owner: string;
    added: BN;
    total: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface BidPlaced {
  name: "BidPlaced";
  args: {
    auctionId: BN;
    buyer: string;
    endTime: BN;
    0: BN;
    1: string;
    2: BN;
  };
}

export interface MinimalDurationChanged {
  name: "MinimalDurationChanged";
  args: {
    oldValue: BN;
    newValue: BN;
    0: BN;
    1: BN;
  };
}

export interface MinimalStepChanged {
  name: "MinimalStepChanged";
  args: {
    oldValue: BN;
    newValue: BN;
    0: BN;
    1: BN;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface ProxyChange {
  name: "ProxyChange";
  args: {
    assetType: string;
    proxy: string;
    0: string;
    1: string;
  };
}

type AllEvents =
  | AuctionBuyOut
  | AuctionCancelled
  | AuctionCreated
  | AuctionFinished
  | AvailableToWithdraw
  | BidPlaced
  | MinimalDurationChanged
  | MinimalStepChanged
  | OwnershipTransferred
  | ProxyChange;

export interface AuctionHouseBaseInstance extends Truffle.ContractInstance {
  auctionId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  minimalDuration(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  minimalStepBasePoint(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  royaltiesRegistry(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setRoyaltiesRegistry: {
    (
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newRoyaltiesRegistry: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setTransferProxy: {
    (
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      assetType: string,
      proxy: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  changeMinimalDuration: {
    (
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  changeMinimalStep: {
    (
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Used to withdraw faulty bids (bids that failed to return after out-bidding)
   */
  withdrawFaultyBid: {
    (_to: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    auctionId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    minimalDuration(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    minimalStepBasePoint(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    royaltiesRegistry(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setRoyaltiesRegistry: {
      (
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newRoyaltiesRegistry: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setTransferProxy: {
      (
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        assetType: string,
        proxy: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    changeMinimalDuration: {
      (
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    changeMinimalStep: {
      (
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Used to withdraw faulty bids (bids that failed to return after out-bidding)
     */
    withdrawFaultyBid: {
      (_to: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        _to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}