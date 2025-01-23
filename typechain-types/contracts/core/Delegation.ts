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

export interface DelegationInterface extends Interface {
  getFunction(
    nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreditorAdded"
      | "DebtorAdded"
      | "Delegate"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace CreditorAddedEvent {
  export type InputTuple = [creditorAddress: BytesLike];
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

export namespace DelegateEvent {
  export type InputTuple = [
    nik: BytesLike,
    creditorConsumerCode: BytesLike,
    creditorProviderCode: BytesLike,
    status: BigNumberish
  ];
  export type OutputTuple = [
    nik: string,
    creditorConsumerCode: string,
    creditorProviderCode: string,
    status: bigint
  ];
  export interface OutputObject {
    nik: string;
    creditorConsumerCode: string;
    creditorProviderCode: string;
    status: bigint;
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

export interface Delegation extends BaseContract {
  connect(runner?: ContractRunner | null): Delegation;
  waitForDeployment(): Promise<this>;

  interface: DelegationInterface;

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

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

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
    key: "Delegate"
  ): TypedContractEvent<
    DelegateEvent.InputTuple,
    DelegateEvent.OutputTuple,
    DelegateEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "CreditorAdded(bytes32)": TypedContractEvent<
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

    "Delegate(bytes32,bytes32,bytes32,uint8)": TypedContractEvent<
      DelegateEvent.InputTuple,
      DelegateEvent.OutputTuple,
      DelegateEvent.OutputObject
    >;
    Delegate: TypedContractEvent<
      DelegateEvent.InputTuple,
      DelegateEvent.OutputTuple,
      DelegateEvent.OutputObject
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
  };
}
