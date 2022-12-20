import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    govToken: string;
    superTrollNft: string[];
    generalTrollNft: string[];
}
export interface IAddStakesGeneralTrollParams {
    nft: string;
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IAddStakesSuperTrollParams {
    nft: string;
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IAddTrollParams {
    troll: string;
    isSuperTroll: boolean;
    signature: string;
}
export interface IBackerStakingParams {
    backer: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetTrollByNftParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IGetTrollsParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IOnERC721ReceivedParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
    param4: string;
}
export interface IOwnerTrollsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakeGeneralTrollParams {
    trollProfileIndex: number | BigNumber;
    nft: string;
    tokenId: number | BigNumber;
}
export interface IStakeSuperTrollParams {
    trollProfileIndex: number | BigNumber;
    nft: string;
    tokenId: number | BigNumber;
}
export interface IStakeToParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakeToInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakedByParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IStakedByInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IUnstakeGeneralTrollParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IUnstakeSuperTrollParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IUpdateNftParams {
    nft: string;
    trolltype: number | BigNumber;
}
export interface IUpdateTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    signature: string;
}
export declare class OSWAP_MainChainTrollRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.AuthorizeEvent;
    parseBlockNftTokenIdEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent[];
    decodeBlockNftTokenIdEvent(event: Event): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.DeauthorizeEvent;
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): OSWAP_MainChainTrollRegistry.ResumeEvent;
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): OSWAP_MainChainTrollRegistry.ShutdownEvent;
    parseStakeGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeGeneralTrollEvent[];
    decodeStakeGeneralTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeGeneralTrollEvent;
    parseStakeSuperTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeSuperTrollEvent[];
    decodeStakeSuperTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeSuperTrollEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent;
    parseUnstakeGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeGeneralTrollEvent[];
    decodeUnstakeGeneralTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeGeneralTrollEvent;
    parseUnstakeSuperTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeSuperTrollEvent[];
    decodeUnstakeSuperTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeSuperTrollEvent;
    parseUpdateNFTEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateNFTEvent[];
    decodeUpdateNFTEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateNFTEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
    parseUpdateVotingManagerEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent[];
    decodeUpdateVotingManagerEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_MainChainTrollRegistry.UpgradeEvent;
    addStakesGeneralTroll: {
        (params: IAddStakesGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    addStakesSuperTroll: {
        (params: IAddStakesSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    backerStaking: {
        (params: IBackerStakingParams, options?: TransactionOptions): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }[]>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    getStakeTo: {
        (backer: string, options?: TransactionOptions): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }[]>;
    };
    getStakedBy: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<{
            nft: string;
            tokenId: BigNumber;
        }[]>;
    };
    getStakes: {
        (troll: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    getStakesByTrollProfile: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    getTrollByNft: {
        (params: IGetTrollByNftParams, options?: TransactionOptions): Promise<string>;
    };
    getTrollProperties: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<{
            troll: {
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            };
            nfts: {
                nft: string;
                tokenId: BigNumber;
            }[];
            backers: string[];
        }>;
    };
    getTrollPropertiesByAddress: {
        (trollAddress: string, options?: TransactionOptions): Promise<{
            troll: {
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            };
            nfts: {
                nft: string;
                tokenId: BigNumber;
            }[];
            backers: string[];
        }>;
    };
    getTrolls: {
        (params: IGetTrollsParams, options?: TransactionOptions): Promise<{
            owner: string;
            troll: string;
            trollType: BigNumber;
            nftCount: BigNumber;
        }[]>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newTrollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    nftType: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    onERC721Received: {
        (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams, options?: TransactionOptions) => Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    ownerTrolls: {
        (params: IOwnerTrollsParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    ownerTrollsLength: {
        (owner: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    shutdownByVoting: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    stakeGeneralTroll: {
        (params: IStakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    stakeOf: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    stakeSuperTroll: {
        (params: IStakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    stakeTo: {
        (params: IStakeToParams, options?: TransactionOptions): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }>;
    };
    stakeToInv: {
        (params: IStakeToInvParams, options?: TransactionOptions): Promise<{
            backer: string;
            index: BigNumber;
        }>;
    };
    stakeToLength: {
        (backer: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<{
            nft: string;
            tokenId: BigNumber;
        }>;
    };
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<{
            trollProfileIndex: BigNumber;
            index: BigNumber;
        }>;
    };
    stakedByLength: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    totalStake: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    trollNft: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    trollNftInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    trollNftLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    trollProfileInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    trollProfiles: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            owner: string;
            troll: string;
            trollType: BigNumber;
            nftCount: BigNumber;
        }>;
    };
    trollProfilesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    unstakeGeneralTroll: {
        (params: IUnstakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeGeneralTrollParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    unstakeSuperTroll: {
        (params: IUnstakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeSuperTrollParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    updateNft: {
        (params: IUpdateNftParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateNftParams, options?: TransactionOptions) => Promise<void>;
    };
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    updateVotingManager: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    upgrade: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeByAdmin: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_MainChainTrollRegistry {
    interface AddTrollEvent {
        owner: string;
        troll: string;
        trollProfileIndex: BigNumber;
        isSuperTroll: boolean;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BlockNftTokenIdEvent {
        nft: string;
        tokenId: BigNumber;
        blocked: boolean;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ResumeEvent {
        _event: Event;
    }
    interface ShutdownEvent {
        account: string;
        _event: Event;
    }
    interface StakeGeneralTrollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface StakeSuperTrollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnstakeGeneralTrollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface UnstakeSuperTrollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface UpdateNFTEvent {
        nft: string;
        trollType: BigNumber;
        _event: Event;
    }
    interface UpdateTrollEvent {
        trollProfileIndex: BigNumber;
        oldTroll: string;
        newTroll: string;
        _event: Event;
    }
    interface UpdateVotingManagerEvent {
        newVotingManager: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
