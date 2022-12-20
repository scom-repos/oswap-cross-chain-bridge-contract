import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    logic: string;
    data: string;
}
export declare class ERC1967Proxy extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: number | BigNumber | TransactionOptions): Promise<string>;
    parseAdminChangedEvent(receipt: TransactionReceipt): ERC1967Proxy.AdminChangedEvent[];
    decodeAdminChangedEvent(event: Event): ERC1967Proxy.AdminChangedEvent;
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.BeaconUpgradedEvent[];
    decodeBeaconUpgradedEvent(event: Event): ERC1967Proxy.BeaconUpgradedEvent;
    parseUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.UpgradedEvent[];
    decodeUpgradedEvent(event: Event): ERC1967Proxy.UpgradedEvent;
    private assign;
}
export declare module ERC1967Proxy {
    interface AdminChangedEvent {
        previousAdmin: string;
        newAdmin: string;
        _event: Event;
    }
    interface BeaconUpgradedEvent {
        beacon: string;
        _event: Event;
    }
    interface UpgradedEvent {
        implementation: string;
        _event: Event;
    }
}
