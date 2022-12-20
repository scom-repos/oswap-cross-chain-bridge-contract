"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1967Proxy = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ERC1967Proxy_json_1 = __importDefault(require("./ERC1967Proxy.json"));
class ERC1967Proxy extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ERC1967Proxy_json_1.default.abi, ERC1967Proxy_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.logic, this.wallet.utils.stringToBytes(params.data)], options);
    }
    parseAdminChangedEvent(receipt) {
        return this.parseEvents(receipt, "AdminChanged").map(e => this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event) {
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "BeaconUpgraded").map(e => this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event) {
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "Upgraded").map(e => this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event) {
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    assign() {
    }
}
exports.ERC1967Proxy = ERC1967Proxy;
ERC1967Proxy._abi = ERC1967Proxy_json_1.default.abi;
