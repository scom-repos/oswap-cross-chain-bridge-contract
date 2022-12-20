export default {
"abi":[
{"inputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"_trollRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Penalty","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"backerBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"trollBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalShares","type":"uint256"}],"name":"Stake","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"approvalDecrement","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"trollBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalShares","type":"uint256"}],"name":"Unstake","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"address","name":"msgSender","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"signers","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"UnstakeApproval","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"backerBalance","type":"uint256"}],"name":"UnstakeRequest","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_ConfigStore","name":"newConfigStore","type":"address"}],"name":"UpdateConfigStore","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_SideChainTrollRegistry","name":"newTrollRegistry","type":"address"}],"name":"UpdateTrollRegistry","type":"event"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"backerStakes","outputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"pendingWithdrawal","type":"uint256"},{"internalType":"uint256","name":"approvedWithdrawal","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"bridgeVault","outputs":[{"internalType":"contract IOSWAP_BridgeVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"contract OSWAP_ConfigStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"getBackers","outputs":[{"internalType":"address[]","name":"backers","type":"address[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"hashUnstakeRequest","outputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"contract IOSWAP_BridgeVault","name":"_bridgeVault","type":"address"}],"name":"initAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastTrollTxCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"}],"name":"maxWithdrawal","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"penalizeSuperTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"stakedByInv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"stakedByLength","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"transactionsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"trollRegistry","outputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"trollStakesBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"trollStakesTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"unstakeApprove","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"unstakeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"updateConfigStore","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"updateTrollRegistry","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"usedNonce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"msgSender","type":"address"},{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"bytes32","name":"paramsHash","type":"bytes32"}],"name":"verifyStakedValue","outputs":[{"internalType":"uint256","name":"superTrollCount","type":"uint256"},{"internalType":"uint256","name":"totalStake","type":"uint256"},{"internalType":"uint256[]","name":"signers","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"60a06040523480156200001157600080fd5b50604051620038b9380380620038b983398101604081905262000034916200018f565b6001600055600380546001600160a01b0319166001600160a01b03831690811790915560408051634eb4ee2760e11b81529051639d69dc4e91600480820192602092909190829003018186803b1580156200008e57600080fd5b505afa158015620000a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c991906200018f565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200012957600080fd5b505afa1580156200013e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016491906200018f565b60601b6001600160601b0319166080525060018054336001600160a01b0319909116179055620001cf565b600060208284031215620001a257600080fd5b8151620001af81620001b6565b9392505050565b6001600160a01b0381168114620001cc57600080fd5b50565b60805160601c6136af6200020a600039600081816101ad01528181610bde01528181610c8901528181610ce10152611c6b01526136af6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063842c4835116100ee578063ac03e9f011610097578063c2a672e011610071578063c2a672e0146104ba578063c9168b72146104cd578063e62d51cb146104ed578063fd99a7461461050d57600080fd5b8063ac03e9f014610400578063b5155a1b14610420578063becbab1f1461043357600080fd5b80639682e6c8116100c85780639682e6c8146103785780639886f99a146103cd5780639d69dc4e146103e057600080fd5b8063842c4835146103485780638658dae214610350578063944e86441461037057600080fd5b806336ec587b116101505780637b0472f01161012a5780637b0472f0146102ef5780637b77404414610302578063810129081461031557600080fd5b806336ec587b1461029c5780635a812465146102b15780635e1b7083146102c457600080fd5b806330167bec1161018157806330167bec1461023a5780633043ef751461025a57806330fed7791461027a57600080fd5b806305268cff146101a857806325ba4f8b146101f957806327afd02814610227575b600080fd5b6101cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610219610207366004613208565b60086020526000908152604090205481565b6040519081526020016101f0565b61021961023536600461303a565b610516565b6003546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b610219610268366004613208565b60009081526006602052604090205490565b61028d610288366004613074565b610578565b6040516101f0939291906133d3565b6102af6102aa366004613175565b610622565b005b6102af6102bf36600461303a565b61081d565b6102196102d236600461323a565b600760209081526000928352604080842090915290825290205481565b6102196102fd36600461325f565b610908565b6101cf61031036600461325f565b6111d0565b610338610323366004613208565b600c6020526000908152604090205460ff1681565b60405190151581526020016101f0565b6102af611215565b61021961035e366004613208565b60096020526000908152604090205481565b6102af6113b1565b6103ad61038636600461303a565b60056020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016101f0565b6102af6103db366004613208565b611546565b6002546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6004546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6102af61042e36600461325f565b611753565b61021961044136600461313a565b604080514660208083019190915230606090811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009081168486015297901b90961660548201526068810194909452608884019290925260a8808401919091528151808403909101815260c89092019052805191012090565b6102af6104c836600461310e565b61198d565b6104e06104db366004613208565b611d21565b6040516101f09190613306565b6102196104fb36600461303a565b600b6020526000908152604090205481565b610219600a5481565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832080548085526009845282852054600890945291842054600182015491939161056691906134b3565b6105709190613478565b949350505050565b600454600090819060609073ffffffffffffffffffffffffffffffffffffffff163314610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064015b60405180910390fd5b61061287878787611d9a565b9250925092509450945094915050565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260409020805484146106b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c69642074726f6c6c50726f66696c65496e6465780000000000000060448201526064016105fd565b806002015483111561071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c69642073686172657320616d6f756e74000000000000000000000060448201526064016105fd565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168486015289901b166054830152606882018790526088820186905260a88083018690528351808403909101815260c890920190925280519101206000906107a29033908a908a90611d9a565b92505050838260030160008282546107ba9190613460565b9091555050604051339073ffffffffffffffffffffffffffffffffffffffff8816907f444d4debec68e4ad79ae18986a68000cafdda9e97e6a878376dfcbd2425af4aa9061080b9085908990613360565b60405180910390a35050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461084157600080fd5b60045473ffffffffffffffffffffffffffffffffffffffff16156108c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6164647265737320616c7265616479207365740000000000000000000000000060448201526064016105fd565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600060026000541415610977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105fd565b6002600055600354604080517f5c975abb000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921691635c975abb91600480820192602092909190829003018186803b1580156109e757600080fd5b505afa1580156109fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1f91906131e6565b15610a86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b6003546040517fef9414fc0000000000000000000000000000000000000000000000000000000081526004810185905260009173ffffffffffffffffffffffffffffffffffffffff169063ef9414fc90602401604080518083038186803b158015610af057600080fd5b505afa158015610b04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2891906130d0565b915060019050816004811115610b4057610b4061359b565b14610ba7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612053757065722054726f6c6c00000000000000000000000000000060448201526064016105fd565b8215610d7e576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610c3557600080fd5b505afa158015610c49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6d9190613221565b9050610cb173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333087612556565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610d3857600080fd5b505afa158015610d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d709190613221565b610d7a91906134f0565b9350505b336000908152600560205260409020600181015415610fe15780548514610fdc576002810154158015610db357506003810154155b610e19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f796f7520686176652070656e64696e67207769746864726177616c000000000060448201526064016105fd565b805460008181526009602090815260408083205460089092528220546001850154610e4491906134b3565b610e4e9190613478565b905080600860008481526020019081526020016000206000828254610e7391906134f0565b9091555050600183015460008381526009602052604081208054909190610e9b9084906134f0565b90915550610eab90508187613460565b9550610eb682612638565b60018301546040805191825260006020830152839133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a360018301546000838152600860209081526040808320546009909252808320549051869433947fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c194610f6794898552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a350506000858152600660208181526040808420805460078452828620338088529085529286208190559383526001808501825590855291842090920180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169092179091558683558201555b611043565b848155600085815260066020818152604080842080546007845282862033808852908552928620819055938352600184018155845292200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790555b600085815260086020526040902054801561108257600086815260096020526040902054819061107390876134b3565b61107d9190613478565b611084565b845b9350600084116110f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c0000000000000000000000000000000060448201526064016105fd565b6000868152600960205260408120805486929061110e908490613460565b909155505060008681526008602052604081208054879290611131908490613460565b925050819055508382600101600082825461114c9190613460565b9091555050600182015460008781526008602090815260408083205460098352928190205481518a8152928301899052828201949094526060820192909252608081019290925251879133917f2f7d5e2f3bc7e053f23dbf8061040964cd3b5cd1999f5821bd7e443b4b7776969181900360a00190a3505060016000555092915050565b600660205281600052604060002081815481106111ec57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600254604080517fef060951000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163ef060951916004808301926020929190829003018186803b15801561128057600080fd5b505afa158015611294573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b89190613057565b905073ffffffffffffffffffffffffffffffffffffffff8116611337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b600354604080517fbba588ca000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bba588ca916004808301926020929190829003018186803b15801561141c57600080fd5b505afa158015611430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114549190613057565b905073ffffffffffffffffffffffffffffffffffffffff81166114d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f2e622d86c9281f3be677f792b9721012fb471d4892cc764f6acd70b50d390701906020016113a6565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115ae57600080fd5b505afa1580156115c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e691906131e6565b1561164d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b3360009081526005602052604090208054806116c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f742061206261636b6572000000000000000000000000000000000000000060448201526064016105fd565b828260010160008282546116d991906134f0565b92505081905550828260020160008282546116f49190613460565b9091555050600182015461170b5761170b81612638565b6001820154604080518581526020810192909252829133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a3505050565b60035473ffffffffffffffffffffffffffffffffffffffff1633146117d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f742066726f6d20726567697374727900000000000000000000000000000060448201526064016105fd565b60008281526008602052604090205481111561184c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70656e616c747920657863656564732074726f6c6c2062616c616e636500000060448201526064016105fd565b6000828152600860205260408120805483929061186a9084906134f0565b909155505060008281526008602052604090205461194f5760008281526008602090815260408083208390556009825280832083905560069091528120805490915b818110156119345760008382815481106118c8576118c86135f9565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff168083526005825260408084208481556001810185905560028101859055600301849055898452600783528084209184529152812055508061192c81613533565b9150506118ac565b50600084815260066020526040812061194c91612fc3565b50505b817f28c619c49605c492d23419d5ffca91159426d25afdf8eec9d22f690c4350a3c58260405161198191815260200190565b60405180910390a25050565b600260005414156119fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105fd565b6002600055600354604080517f5c975abb000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921691635c975abb91600480820192602092909190829003018186803b158015611a6a57600080fd5b505afa158015611a7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aa291906131e6565b15611b09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090206003810154821115611b9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f616d6f756e7420657863656564656420617070726f76616c000000000000000060448201526064016105fd565b8054600382018054849190600090611bb59084906134f0565b9250508190555082826002016000828254611bd091906134f0565b90915550506000818152600960209081526040808320546008909252822054611bf990866134b3565b611c039190613478565b905083600960008481526020019081526020016000206000828254611c2891906134f0565b909155505060008281526008602052604081208054839290611c4b9084906134f0565b90915550611c92905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168683612820565b600082815260086020908152604080832054600983529281902054815185815292830188905290820187905260608201929092526080810191909152829073ffffffffffffffffffffffffffffffffffffffff8716907fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c19060a00160405180910390a350506001600055505050565b600081815260066020908152604091829020805483518184028101840190945280845260609392830182828015611d8e57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611d63575b50505050509050919050565b6000818152600c6020526040812054819060609060ff1615611e18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f6e636520757365640000000000000000000000000000000000000000000060448201526064016105fd565b6000848152600c6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858067ffffffffffffffff811115611e6957611e69613628565b604051908082528060200260200182016040528015611e92578160200160208202803683370190505b5092506000805b8281101561228f576000611f5c8b8b84818110611eb857611eb86135f9565b9050602002810190611eca91906133fb565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018e9052605c019150611f389050565b6040516020818303038152906040528051906020012061287b90919063ffffffff16565b905073ffffffffffffffffffffffffffffffffffffffff8116611fdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e657200000000000000000000000000000000000060448201526064016105fd565b6003546040517f3820a52600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526000921690633820a5269060240160206040518083038186803b15801561204757600080fd5b505afa15801561205b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207f9190613221565b90506000811180156120bc57508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16115b1561227c57808784815181106120d4576120d46135f9565b60209081029190910101526003546040517f82ad711900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906382ad71199060440160206040518083038186803b15801561215157600080fd5b505afa158015612165573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061218991906131e6565b156121a0578861219881613533565b99505061225d565b6003546040517f09a34aa400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906309a34aa49060440160206040518083038186803b15801561221257600080fd5b505afa158015612226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224a91906131e6565b1561225d578561225981613533565b9650505b6000818152600860205260409020546122769089613460565b97508193505b50508061228890613533565b9050611e99565b5050506000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ee53f4cb6040518163ffffffff1660e01b815260040160606040518083038186803b1580156122ff57600080fd5b505afa158015612313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123379190613281565b925092509250828410156123cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f4f535741505f4272696467655661756c743a204d696e696e756d2067656e657260448201527f616c2074726f6c6c20636f756e74206e6f74206d65740000000000000000000060648201526084016105fd565b8187101561245d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f535741505f4272696467655661756c743a204d696e696e756d20737570657260448201527f2074726f6c6c20636f756e74206e6f74206d657400000000000000000000000060648201526084016105fd565b6000600a6000815461246e90613533565b918290555073ffffffffffffffffffffffffffffffffffffffff8d166000908152600b602052604090205490915081906124a9908490613460565b10806124b55750818111155b61251b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f746f6f20736f6f6e00000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff909b166000908152600b602052604090209a909a55509398929750909550909350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526126329085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261289f565b50505050565b6000818152600760209081526040808320338452825280832054848452600690925282205490919061266c906001906134f0565b905080821461278a576000838152600660205260409020805482908110612695576126956135f9565b600091825260208083209091015485835260069091526040909120805473ffffffffffffffffffffffffffffffffffffffff90921691849081106126db576126db6135f9565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9490941693909317909255848152600782526040808220600690935281208054859392919084908110612757576127576135f9565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff1683528201929092526040019020555b60008381526006602052604090208054806127a7576127a76135ca565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055909201909255938152600784526040808220338352909452928320929092555050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526128769084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016125b0565b505050565b600080600061288a85856129ab565b9150915061289781612a1b565b509392505050565b6000612901826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612c779092919063ffffffff16565b805190915015612876578080602001905181019061291f91906131e6565b612876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fd565b6000808251604114156129e25760208301516040840151606085015160001a6129d687828585612c90565b94509450505050612a14565b825160401415612a0c5760208301516040840151612a01868383612da8565b935093505050612a14565b506000905060025b9250929050565b6000816004811115612a2f57612a2f61359b565b1415612a385750565b6001816004811115612a4c57612a4c61359b565b1415612ab4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105fd565b6002816004811115612ac857612ac861359b565b1415612b30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105fd565b6003816004811115612b4457612b4461359b565b1415612bd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105fd565b6004816004811115612be657612be661359b565b1415612c74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105fd565b50565b6060612c868484600085612df0565b90505b9392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612cc75750600090506003612d9f565b8460ff16601b14158015612cdf57508460ff16601c14155b15612cf05750600090506004612d9f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612d44573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612d9857600060019250925050612d9f565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831660ff84901c601b01612de287828885612c90565b935093505050935093915050565b606082471015612e82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fd565b843b612eea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612f1391906132ea565b60006040518083038185875af1925050503d8060008114612f50576040519150601f19603f3d011682016040523d82523d6000602084013e612f55565b606091505b5091509150612f65828286612f70565b979650505050505050565b60608315612f7f575081612c89565b825115612f8f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd9190613382565b5080546000825590600052602060002090810190612c7491905b80821115612ff15760008155600101612fdd565b5090565b60008083601f84011261300757600080fd5b50813567ffffffffffffffff81111561301f57600080fd5b6020830191508360208260051b8501011115612a1457600080fd5b60006020828403121561304c57600080fd5b8135612c8981613657565b60006020828403121561306957600080fd5b8151612c8981613657565b6000806000806060858703121561308a57600080fd5b843561309581613657565b9350602085013567ffffffffffffffff8111156130b157600080fd5b6130bd87828801612ff5565b9598909750949560400135949350505050565b600080604083850312156130e357600080fd5b82516130ee81613657565b60208401519092506005811061310357600080fd5b809150509250929050565b6000806040838503121561312157600080fd5b823561312c81613657565b946020939093013593505050565b6000806000806080858703121561315057600080fd5b843561315b81613657565b966020860135965060408601359560600135945092505050565b60008060008060008060a0878903121561318e57600080fd5b863567ffffffffffffffff8111156131a557600080fd5b6131b189828a01612ff5565b90975095505060208701356131c581613657565b95989497509495604081013595506060810135946080909101359350915050565b6000602082840312156131f857600080fd5b81518015158114612c8957600080fd5b60006020828403121561321a57600080fd5b5035919050565b60006020828403121561323357600080fd5b5051919050565b6000806040838503121561324d57600080fd5b82359150602083013561310381613657565b6000806040838503121561327257600080fd5b50508035926020909101359150565b60008060006060848603121561329657600080fd5b8351925060208401519150604084015190509250925092565b600081518084526020808501945080840160005b838110156132df578151875295820195908201906001016132c3565b509495945050505050565b600082516132fc818460208701613507565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561335457835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101613322565b50909695505050505050565b60408152600061337360408301856132af565b90508260208301529392505050565b60208152600082518060208401526133a1816040850160208701613507565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b8381528260208201526060604082015260006133f260608301846132af565b95945050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261343057600080fd5b83018035915067ffffffffffffffff82111561344b57600080fd5b602001915036819003821315612a1457600080fd5b600082198211156134735761347361356c565b500190565b6000826134ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156134eb576134eb61356c565b500290565b6000828210156135025761350261356c565b500390565b60005b8381101561352257818101518382015260200161350a565b838111156126325750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156135655761356561356c565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612c7457600080fdfea26469706673582212204bfd696c95e9612598b44e874f7db7cc0561745032e574b0c6b7196ed42d1d9764736f6c63430008060033"
}