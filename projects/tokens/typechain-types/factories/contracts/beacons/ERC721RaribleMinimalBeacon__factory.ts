/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721RaribleMinimalBeacon,
  ERC721RaribleMinimalBeaconInterface,
} from "../../../contracts/beacons/ERC721RaribleMinimalBeacon";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105d73803806105d78339818101604052602081101561003357600080fd5b505180600061004061009a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100938161009e565b5050610114565b3390565b6100b18161010e60201b6103821760201c565b6100ec5760405162461bcd60e51b81526004018080602001828103825260338152602001806105a46033913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b610481806101236000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610084578063715018a6146100a85780638da5cb5b146100b0578063f2fde38b146100b8575b600080fd5b6100826004803603602081101561007257600080fd5b50356001600160a01b03166100de565b005b61008c610192565b604080516001600160a01b039092168252519081900360200190f35b6100826101a1565b61008c61025f565b610082600480360360208110156100ce57600080fd5b50356001600160a01b031661026e565b6100e6610388565b6001600160a01b03166100f761025f565b6001600160a01b031614610152576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61015b8161038c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001546001600160a01b031690565b6101a9610388565b6001600160a01b03166101ba61025f565b6001600160a01b031614610215576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b610276610388565b6001600160a01b031661028761025f565b6001600160a01b0316146102e2576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166103275760405162461bcd60e51b81526004018080602001828103825260268152602001806103f36026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b3390565b61039581610382565b6103d05760405162461bcd60e51b81526004018080602001828103825260338152602001806104196033913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374a2646970667358221220bc9ea683ee55728c7a17e2d39018735b4fc1fd08aa72dcf66a319ceaff07a0b564736f6c634300070600335570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";

type ERC721RaribleMinimalBeaconConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721RaribleMinimalBeaconConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721RaribleMinimalBeacon__factory extends ContractFactory {
  constructor(...args: ERC721RaribleMinimalBeaconConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    impl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721RaribleMinimalBeacon> {
    return super.deploy(
      impl,
      overrides || {}
    ) as Promise<ERC721RaribleMinimalBeacon>;
  }
  override getDeployTransaction(
    impl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(impl, overrides || {});
  }
  override attach(address: string): ERC721RaribleMinimalBeacon {
    return super.attach(address) as ERC721RaribleMinimalBeacon;
  }
  override connect(signer: Signer): ERC721RaribleMinimalBeacon__factory {
    return super.connect(signer) as ERC721RaribleMinimalBeacon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RaribleMinimalBeaconInterface {
    return new utils.Interface(_abi) as ERC721RaribleMinimalBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721RaribleMinimalBeacon {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721RaribleMinimalBeacon;
  }
}
