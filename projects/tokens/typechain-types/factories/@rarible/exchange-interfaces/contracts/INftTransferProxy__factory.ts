/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INftTransferProxy,
  INftTransferProxyInterface,
} from "../../../../@rarible/exchange-interfaces/contracts/INftTransferProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC1155Upgradeable",
        name: "token",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "erc1155safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "token",
        type: "address",
      },
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "erc721safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class INftTransferProxy__factory {
  static readonly abi = _abi;
  static createInterface(): INftTransferProxyInterface {
    return new utils.Interface(_abi) as INftTransferProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INftTransferProxy {
    return new Contract(address, _abi, signerOrProvider) as INftTransferProxy;
  }
}
