import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IOnERC721ReceivedParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
    param4: string;
}
export declare class ERC721Holder extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
    onERC721Received: {
        (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
