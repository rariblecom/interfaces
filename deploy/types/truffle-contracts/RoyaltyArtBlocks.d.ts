/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface RoyaltyArtBlocksContract
  extends Truffle.Contract<RoyaltyArtBlocksInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<RoyaltyArtBlocksInstance>;
}

type AllEvents = never;

export interface RoyaltyArtBlocksInstance extends Truffle.ContractInstance {
  getRoyaltyData(
    _tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: string; 2: BN; 3: BN }>;

  methods: {
    getRoyaltyData(
      _tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: string; 2: BN; 3: BN }>;
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