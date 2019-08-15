var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"MONA",
		multiplier:1,
		default:true,
		values:["", "mona", "MONA"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mMona",
		multiplier:1000,
		values:["mmona"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"satoshi",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
];

module.exports = {
	name:"Monacoin",
	ticker:"MONA",
	logoUrl:"/img/logo/mona.svg",
	siteTitle:"Monacoin Explorer",
	nodeTitle:"Monacoin Full Node",
	nodeUrl:"https://monacoin.org/",
	demoSiteUrl: "https://chaintools.mona-coin.de",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/pendingbot/monacoin-pool-list/master/pools.json",
	],
	maxBlockWeight: 4000000,
	targetBlockTimeSeconds: 150,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"MONA":currencyUnits[0], "mMona":currencyUnits[1], "bits":currencyUnits[2], "satoshi":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHash: "ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6",
	genesisCoinbaseTransactionId: "35e405a8a46f4dbc1941727aaf338939323c3b955232d0317f8731fe07ac4ba6",
	genesisCoinbaseTransaction: {
		"txid":"35e405a8a46f4dbc1941727aaf338939323c3b955232d0317f8731fe07ac4ba6",
		"hash":"35e405a8a46f4dbc1941727aaf338939323c3b955232d0317f8731fe07ac4ba6",
		"blockhash":"ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6",
		"version":1,
		"locktime":0,
		"size":222,
		"vsize":222,
		"time":1388479472,
		"blocktime":1388479472,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d01044c564465632e20333174682032303133204a6170616e2c205468652077696e6e696e67206e756d62657273206f6620746865203230313320596561722d456e64204a756d626f204c6f74746572793a32332d313330393136"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"asm":"040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9 OP_CHECKSIG",
					"hex":"41040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9ac",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"MTXGFakp6JUSpdYhf63fN3Yx5Rz88pantR"
					]
				}
			}
		]
	},
	historicalData: [
		{
			type: "blockheight",
			date: "2013-12-31",
			blockHeight: 0,
			blockHash: "ff9f1c0116d19de7c9963845e129f9ed1bfc0b376eb54fd7afa42e0d418c8bb6",
			summary: "The Monacoin genesis block.",
			alertBodyHtml: "This is the first block in the Monacoin blockchain.",
			referenceUrl: "https://gist.github.com/wakiyamap/441a784b3af3faf36970859d4fe231d5"
		},
		{
			type: "blockheight",
			date: "2015-09-27",
			blockHeight: 450000,
			blockHash: "5673823195ab7bf3319edaddaff782662e3fc75761de98b347605fea9350f821",
			summary: "HardFork(Lyra2rev2 and DGWv3)",
			referenceUrl: "https://blockbook.electrum-mona.org/block/5673823195ab7bf3319edaddaff782662e3fc75761de98b347605fea9350f821"
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Monacoin/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return {"usd":responseBody[0].price_usd};
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 210000);

		return eras[index];
	}
};
