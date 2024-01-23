/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BeaconProxy,
  BeaconProxyInterface,
} from "../../../../@openzeppelin/contracts/proxy/BeaconProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526040516108443803806108448339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b50604052506100e3915050565b6100ed82826100f4565b505061047e565b6101078261024960201b6100311760201c565b6101425760405162461bcd60e51b81526004018080602001828103825260258152602001806107c56025913960400191505060405180910390fd5b6101ba826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b5051610249602090811b61003117901c565b6101f55760405162461bcd60e51b81526004018080602001828103825260348152602001806108106034913960400191505060405180910390fd5b6000805160206107848339815191528281558151156102445761024261021961024f565b836040518060600160405280602181526020016107a4602191396102c260201b6100371760201c565b505b505050565b3b151590565b60006102596103c7565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029157600080fd5b505afa1580156102a5573d6000803e3d6000fd5b505050506040513d60208110156102bb57600080fd5b5051905090565b60606102cd84610249565b6103085760405162461bcd60e51b81526004018080602001828103825260268152602001806107ea6026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b602083106103455780518252601f199092019160209182019101610326565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146103a5576040519150601f19603f3d011682016040523d82523d6000602084013e6103aa565b606091505b5090925090506103bb8282866103da565b925050505b9392505050565b6000805160206107848339815191525490565b606083156103e95750816103c0565b8251156103f95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561044357818101518382015260200161042b565b50505050905090810190601f1680156104705780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102f78061048d6000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a61013b565b6101ae565b565b3b151590565b606061004284610031565b61007d5760405162461bcd60e51b815260040180806020018281038252602681526020018061029c6026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b602083106100ba5780518252601f19909201916020918201910161009b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461011a576040519150601f19603f3d011682016040523d82523d6000602084013e61011f565b606091505b509150915061012f8282866101d2565b925050505b9392505050565b6000610145610276565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017d57600080fd5b505afa158015610191573d6000803e3d6000fd5b505050506040513d60208110156101a757600080fd5b5051905090565b3660008037600080366000845af43d6000803e8080156101cd573d6000f35b3d6000fd5b606083156101e1575081610134565b8251156101f15782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561023b578181015183820152602001610223565b50505050905090810190601f1680156102685780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50549056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a26469706673582212200d13fbc9dd1124e596f23eb7f271a5a242d59277784a0254458aae2e0fa4bbd364736f6c63430007060033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";

type BeaconProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BeaconProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BeaconProxy__factory extends ContractFactory {
  constructor(...args: BeaconProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    beacon: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<BeaconProxy> {
    return super.deploy(beacon, data, overrides || {}) as Promise<BeaconProxy>;
  }
  override getDeployTransaction(
    beacon: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(beacon, data, overrides || {});
  }
  override attach(address: string): BeaconProxy {
    return super.attach(address) as BeaconProxy;
  }
  override connect(signer: Signer): BeaconProxy__factory {
    return super.connect(signer) as BeaconProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BeaconProxyInterface {
    return new utils.Interface(_abi) as BeaconProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as BeaconProxy;
  }
}
