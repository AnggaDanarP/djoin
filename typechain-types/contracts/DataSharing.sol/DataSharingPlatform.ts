/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface DataSharingPlatformInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCreditor"
      | "addDebtor"
      | "addDebtorToCreditor"
      | "delegate"
      | "getActiveCreditorsByStatus"
      | "getDebtor"
      | "getDebtorDataActiveCreditors"
      | "owner"
      | "removeCreditor"
      | "removeDebtor"
      | "renounceOwnership"
      | "requestDelegation"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApproveDelegate"
      | "CreditorAdded"
      | "DebtorAdded"
      | "OwnershipTransferred"
      | "RequestCreated"
      | "StatusUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addCreditor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addDebtor",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addDebtorToCreditor",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegate",
    values: [BytesLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveCreditorsByStatus",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtor",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtorDataActiveCreditors",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeCreditor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDebtor",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestDelegation",
    values: [BytesLike, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCreditor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addDebtor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addDebtorToCreditor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActiveCreditorsByStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDebtor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDebtorDataActiveCreditors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCreditor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDebtor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace ApproveDelegateEvent {
  export type InputTuple = [
    consumer: AddressLike,
    provider: AddressLike,
    nik: BytesLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    consumer: string,
    provider: string,
    nik: string,
    timestamp: bigint
  ];
  export interface OutputObject {
    consumer: string;
    provider: string;
    nik: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreditorAddedEvent {
  export type InputTuple = [creditorAddress: AddressLike];
  export type OutputTuple = [creditorAddress: string];
  export interface OutputObject {
    creditorAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DebtorAddedEvent {
  export type InputTuple = [nik: BytesLike, debtorAddress: AddressLike];
  export type OutputTuple = [nik: string, debtorAddress: string];
  export interface OutputObject {
    nik: string;
    debtorAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestCreatedEvent {
  export type InputTuple = [
    consumer: AddressLike,
    provider: AddressLike,
    nik: BytesLike,
    timestamp: BigNumberish,
    metadata: string
  ];
  export type OutputTuple = [
    consumer: string,
    provider: string,
    nik: string,
    timestamp: bigint,
    metadata: string
  ];
  export interface OutputObject {
    consumer: string;
    provider: string;
    nik: string;
    timestamp: bigint;
    metadata: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StatusUpdatedEvent {
  export type InputTuple = [
    nik: BytesLike,
    creditor: AddressLike,
    status: BigNumberish
  ];
  export type OutputTuple = [nik: string, creditor: string, status: bigint];
  export interface OutputObject {
    nik: string;
    creditor: string;
    status: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DataSharingPlatform extends BaseContract {
  connect(runner?: ContractRunner | null): DataSharingPlatform;
  waitForDeployment(): Promise<this>;

  interface: DataSharingPlatformInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addCreditor: TypedContractMethod<
    [creditorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  addDebtor: TypedContractMethod<
    [nik: BytesLike, debtorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  addDebtorToCreditor: TypedContractMethod<
    [nik: BytesLike, creditor: AddressLike],
    [void],
    "nonpayable"
  >;

  delegate: TypedContractMethod<
    [_nik: BytesLike, _consumer: AddressLike, _status: BigNumberish],
    [void],
    "nonpayable"
  >;

  getActiveCreditorsByStatus: TypedContractMethod<
    [_nik: BytesLike, _status: BigNumberish],
    [string[]],
    "view"
  >;

  getDebtor: TypedContractMethod<[nik: BytesLike], [string], "view">;

  getDebtorDataActiveCreditors: TypedContractMethod<
    [_nik: BytesLike],
    [[string[], bigint[]]],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  removeCreditor: TypedContractMethod<
    [creditorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  removeDebtor: TypedContractMethod<[nik: BytesLike], [void], "nonpayable">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestDelegation: TypedContractMethod<
    [_nik: BytesLike, _creditor: AddressLike, _metadata: string],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCreditor"
  ): TypedContractMethod<[creditorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addDebtor"
  ): TypedContractMethod<
    [nik: BytesLike, debtorAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addDebtorToCreditor"
  ): TypedContractMethod<
    [nik: BytesLike, creditor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delegate"
  ): TypedContractMethod<
    [_nik: BytesLike, _consumer: AddressLike, _status: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getActiveCreditorsByStatus"
  ): TypedContractMethod<
    [_nik: BytesLike, _status: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDebtor"
  ): TypedContractMethod<[nik: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getDebtorDataActiveCreditors"
  ): TypedContractMethod<[_nik: BytesLike], [[string[], bigint[]]], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeCreditor"
  ): TypedContractMethod<[creditorAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeDebtor"
  ): TypedContractMethod<[nik: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestDelegation"
  ): TypedContractMethod<
    [_nik: BytesLike, _creditor: AddressLike, _metadata: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ApproveDelegate"
  ): TypedContractEvent<
    ApproveDelegateEvent.InputTuple,
    ApproveDelegateEvent.OutputTuple,
    ApproveDelegateEvent.OutputObject
  >;
  getEvent(
    key: "CreditorAdded"
  ): TypedContractEvent<
    CreditorAddedEvent.InputTuple,
    CreditorAddedEvent.OutputTuple,
    CreditorAddedEvent.OutputObject
  >;
  getEvent(
    key: "DebtorAdded"
  ): TypedContractEvent<
    DebtorAddedEvent.InputTuple,
    DebtorAddedEvent.OutputTuple,
    DebtorAddedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RequestCreated"
  ): TypedContractEvent<
    RequestCreatedEvent.InputTuple,
    RequestCreatedEvent.OutputTuple,
    RequestCreatedEvent.OutputObject
  >;
  getEvent(
    key: "StatusUpdated"
  ): TypedContractEvent<
    StatusUpdatedEvent.InputTuple,
    StatusUpdatedEvent.OutputTuple,
    StatusUpdatedEvent.OutputObject
  >;

  filters: {
    "ApproveDelegate(address,address,bytes32,uint256)": TypedContractEvent<
      ApproveDelegateEvent.InputTuple,
      ApproveDelegateEvent.OutputTuple,
      ApproveDelegateEvent.OutputObject
    >;
    ApproveDelegate: TypedContractEvent<
      ApproveDelegateEvent.InputTuple,
      ApproveDelegateEvent.OutputTuple,
      ApproveDelegateEvent.OutputObject
    >;

    "CreditorAdded(address)": TypedContractEvent<
      CreditorAddedEvent.InputTuple,
      CreditorAddedEvent.OutputTuple,
      CreditorAddedEvent.OutputObject
    >;
    CreditorAdded: TypedContractEvent<
      CreditorAddedEvent.InputTuple,
      CreditorAddedEvent.OutputTuple,
      CreditorAddedEvent.OutputObject
    >;

    "DebtorAdded(bytes32,address)": TypedContractEvent<
      DebtorAddedEvent.InputTuple,
      DebtorAddedEvent.OutputTuple,
      DebtorAddedEvent.OutputObject
    >;
    DebtorAdded: TypedContractEvent<
      DebtorAddedEvent.InputTuple,
      DebtorAddedEvent.OutputTuple,
      DebtorAddedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RequestCreated(address,address,bytes32,uint256,string)": TypedContractEvent<
      RequestCreatedEvent.InputTuple,
      RequestCreatedEvent.OutputTuple,
      RequestCreatedEvent.OutputObject
    >;
    RequestCreated: TypedContractEvent<
      RequestCreatedEvent.InputTuple,
      RequestCreatedEvent.OutputTuple,
      RequestCreatedEvent.OutputObject
    >;

    "StatusUpdated(bytes32,address,uint8)": TypedContractEvent<
      StatusUpdatedEvent.InputTuple,
      StatusUpdatedEvent.OutputTuple,
      StatusUpdatedEvent.OutputObject
    >;
    StatusUpdated: TypedContractEvent<
      StatusUpdatedEvent.InputTuple,
      StatusUpdatedEvent.OutputTuple,
      StatusUpdatedEvent.OutputObject
    >;
  };
}
