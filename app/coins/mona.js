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
	targetBlockTimeSeconds: 90,
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
			date: "2014-03-18",
			blockHeight: 80000,
			blockHash: "c99b83da7328b58251d16f4646da222b0280f180bd208efa5e3256c9eb6ea2be",
			summary: "HardFork(KGW)",
			referenceUrl: "https://chaintools.mona-coin.de/block/c99b83da7328b58251d16f4646da222b0280f180bd208efa5e3256c9eb6ea2be"
		},
		{
			type: "blockheight",
			date: "2014-05-19",
			blockHeight: 140000,
			blockHash: "d362c1bd7aeae0a892000a7d82e0570de633a396c5cc1a3b2ef3b99dcab5be9f",
			summary: "HardFork(Digishield)",
			referenceUrl: "https://chaintools.mona-coin.de/block/d362c1bd7aeae0a892000a7d82e0570de633a396c5cc1a3b2ef3b99dcab5be9f"
		},
		{
			type: "blockheight",
			date: "2015-09-27",
			blockHeight: 450000,
			blockHash: "5673823195ab7bf3319edaddaff782662e3fc75761de98b347605fea9350f821",
			summary: "HardFork(Lyra2rev2 and DGWv3)",
			referenceUrl: "https://chaintools.mona-coin.de/block/5673823195ab7bf3319edaddaff782662e3fc75761de98b347605fea9350f821"
		},
		{
			type: "blockheight",
			date: "2017-03-14",
			blockHeight: 937440,
			blockHash: "7b29137343ada47206f33e84c9acb2b33d818ef9800658b57c7766a06ce5a696",
			summary: "Segwit signaring start",
			referenceUrl: "https://askmona.org/4847?n=1000#res_63"
		},
		{
			type: "blockheight",
			date: "2017-04-16",
			blockHeight: 967022,
			blockHash: "56c4d13e0f304a5aa72bf7ebd3b26a0d35810391f56769a096cbd87fabdae139",
			summary: "Segwit signaring 75% over",
			referenceUrl: "https://askmona.org/4847?n=1000#res_258"
		},
		{
			type: "blockheight",
			date: "2017-04-17",
			blockHeight: 968596,
			blockHash: "191f83431b2e7755a1f1309ce4cf1bb71711b88b4edfca4843cb285931e2b6ba",
			summary: "Segwit locked-in",
			referenceUrl: "https://askmona.org/4847?n=1000#res_342"
		},
		{
			type: "blockheight",
			date: "2017-04-27",
			blockHeight: 977759,
			blockHash: "ecc773c827a8cde039f6dfcdee2de981b747f58aa1bc4dddcb28e3c857dbc860",
			summary: "Segwit activated",
			referenceUrl: "https://askmona.org/4847?n=1000#res_430"
		},
		{
			type: "tx",
			date: "2017-04-28",
			txid: "634d6f8a46982bafd1ec030048c0b6a70f79ce329812e3d76abe41c914bcb2cd",
			summary: "First Lighting channel on the Monacoin chain",
			alertBodyHtml: "The monacoin's First lightning open channnel transaction.",
			referenceUrl: "https://askmona.org/4955?n=1000#res_10/"
		},
		{
			type: "tx",
			date: "2017-04-28",
			txid: "240b2e75b45f57831aedd4fbc17ec424283fc2cc33db65fc585b2e8b095d38d2",
			summary: "The monacoin's First lightning close channnel transaction.",
			alertBodyHtml: "The monacoin's First lightning close channnel transaction.",
			referenceUrl: "https://askmona.org/4955?n=1000#res_46/"
		},
		{
			type: "blockheight",
			date: "2017-11-19",
			blockHeight: 1166000,
			blockHash: "fe31a64dd400203bbad8265d482019f590f1977f50a15f59d4a4a27e137aac85",
			summary: "Proof of Burn was started for Monaparty.",
			referenceUrl: "https://www.monaparty.me/burn-event/"
		},
		{
			type: "blockheight",
			date: "2017-12-04",
			blockHeight: 1179440,
			blockHash: "4451ade20372b15d4d24b07222c7754d693b606415a04aa9eea234a12dc7750f",
			summary: "Proof of Burn was ended for Monaparty.",
			referenceUrl: "https://www.monaparty.me/burn-event/"
		},
		{
			type: "tx",
			date: "2018-01-19",
			txid: "ca62e63121842332e9a29ea43cf6be30dd3e1dd4d7a9f0cee0d3ea556e42027e",
			summary: "The monacoin's atomicswap transaction.",
			alertBodyHtml: "This is the first monacoin's atomicswap transaction?",
			referenceUrl: "https://twitter.com/WakiyamaP/status/954345184103342081/"
		},
		{
			type: "blockheight",
			date: "2019-01-14",
			blockHeight: 1550921,
			blockHash: "4fbce9a4c1ce671dc1f28c22ed7afd0c660820258c9af909ce37819a5a2d9702",
			summary: "The first block mined by monad(golang client).",
			referenceUrl: "https://twitter.com/WakiyamaP/status/1084729252434432000/"
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
