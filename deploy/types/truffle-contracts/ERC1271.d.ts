/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ERC1271Contract extends Truffle.Contract<ERC1271Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC1271Instance>;
}

type AllEvents = never;

export interface ERC1271Instance extends Truffle.ContractInstance {
  ERC1271_INTERFACE_ID(txDetails?: Truffle.TransactionDetails): Promise<string>;

  ERC1271_RETURN_INVALID_SIGNATURE(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  ERC1271_RETURN_VALID_SIGNATURE(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Function must be implemented by deriving contract
   * @param _hash Arbitrary length data signed on the behalf of address(this)
   * @param _signature Signature byte array associated with _data
   */
  isValidSignature(
    _hash: string,
    _signature: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    ERC1271_INTERFACE_ID(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    ERC1271_RETURN_INVALID_SIGNATURE(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    ERC1271_RETURN_VALID_SIGNATURE(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Function must be implemented by deriving contract
     * @param _hash Arbitrary length data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data
     */
    isValidSignature(
      _hash: string,
      _signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
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