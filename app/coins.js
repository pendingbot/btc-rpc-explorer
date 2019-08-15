var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var mona = require("./coins/mona.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"MONA": mona,

	"coins":["BTC", "LTC", "MONA"]
};
