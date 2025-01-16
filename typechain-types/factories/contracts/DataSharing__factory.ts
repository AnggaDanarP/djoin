/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DataSharing,
  DataSharingInterface,
} from "../../contracts/DataSharing";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidHash",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPermission",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedAccess",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ApprovalLogged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "DataAccessed",
    type: "event",
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
        name: "requester",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RequestSubmitted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
    ],
    name: "accessData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
    ],
    name: "approveRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
    ],
    name: "getDataOwner",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
    ],
    name: "getRequestDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "requester",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "hashedNIK",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct DataSharing.Request",
        name: "",
        type: "tuple",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "registerDataOwner",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "hashedNIK",
        type: "bytes32",
      },
    ],
    name: "submitRequest",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50338061003757604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61004081610046565b50610096565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610642806100a56000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b1461010e578063bc610d921461011f578063e4b1a79514610132578063f2fde38b146101f4578063fe2bf0151461020757600080fd5b80631981882114610098578063715018a6146100de57806376ba6009146100e857806376dea57c146100fb575b600080fd5b6100c16100a6366004610589565b6000908152600260205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e661021a565b005b6100e66100f6366004610589565b61022e565b6100e6610109366004610589565b6102ef565b6000546001600160a01b03166100c1565b6100e661012d3660046105be565b6103b9565b6101b6610140366004610589565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260016020818152604092839020835160808101855281546001600160a01b031681529281015491830191909152600281015460ff16151592820192909252600390910154606082015290565b6040516100d5919081516001600160a01b03168152602080830151908201526040808301511515908201526060918201519181019190915260800190565b6100e66102023660046105ea565b610425565b6100e6610215366004610589565b610468565b61022261050c565b61022c6000610539565b565b60008181526002602052604090205481906001600160a01b0316331461026757604051631a27eac360e11b815260040160405180910390fd5b600082815260016020526040902080546001600160a01b031661029d57604051634345326f60e11b815260040160405180910390fd5b60028101805460ff19166001179055604051339084907fc363fee962e13ccd6983c249f82db773c7946019fb2470847aeae1ace425c034906102e29042815260200190565b60405180910390a3505050565b8061030c576040516257c03760e51b815260040160405180910390fd5b6040805160808101825233808252602080830185815260008486018181524260608701818152898452600180875293899020975188546001600160a01b0319166001600160a01b039091161788559351928701929092555160028601805460ff191691151591909117905590516003909401939093559251918252839290917f155f4d73b13766a8a6b03108d878d694ad6bb84df55913698a2d67c9bfbd45c0910160405180910390a350565b6103c161050c565b6000828152600260205260409020546001600160a01b0316156103f757604051634345326f60e11b815260040160405180910390fd5b60009182526002602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b61042d61050c565b6001600160a01b03811661045c57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61046581610539565b50565b600081815260016020818152604092839020835160808101855281546001600160a01b031681529281015491830191909152600281015460ff161515928201839052600301546060820152906104d157604051631a27eac360e11b815260040160405180910390fd5b604051428152339083907f554e51ea234d304e78671e3aa226c22e05c12b17c32df0b342cfe6eb886d46f79060200160405180910390a35050565b6000546001600160a01b0316331461022c5760405163118cdaa760e01b8152336004820152602401610453565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561059b57600080fd5b5035919050565b80356001600160a01b03811681146105b957600080fd5b919050565b600080604083850312156105d157600080fd5b823591506105e1602084016105a2565b90509250929050565b6000602082840312156105fc57600080fd5b610605826105a2565b939250505056fea26469706673582212207450d719a3e4f26638548c25e85aa7bf548feb753502501f2fec4fffc8a9ccfb64736f6c63430008180033";

type DataSharingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataSharingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataSharing__factory extends ContractFactory {
  constructor(...args: DataSharingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DataSharing & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataSharing__factory {
    return super.connect(runner) as DataSharing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataSharingInterface {
    return new Interface(_abi) as DataSharingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DataSharing {
    return new Contract(address, _abi, runner) as unknown as DataSharing;
  }
}
