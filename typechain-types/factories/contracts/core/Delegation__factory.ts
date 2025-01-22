/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Delegation,
  DelegationInterface,
} from "../../../contracts/core/Delegation";

const _abi = [
  {
    inputs: [],
    name: "AddressNotEligible",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyRemoved",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStatusApproveRequest",
    type: "error",
  },
  {
    inputs: [],
    name: "NikNeedRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEligible",
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
    name: "ProviderNotEligible",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestAlreadyExist",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestNotFound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ApproveDelegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditorAddress",
        type: "address",
      },
    ],
    name: "CreditorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "debtorAddress",
        type: "address",
      },
    ],
    name: "DebtorAdded",
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
        name: "consumer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "RequestCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "nik",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Delegation.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "StatusUpdated",
    type: "event",
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
] as const;

export class Delegation__factory {
  static readonly abi = _abi;
  static createInterface(): DelegationInterface {
    return new Interface(_abi) as DelegationInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Delegation {
    return new Contract(address, _abi, runner) as unknown as Delegation;
  }
}
