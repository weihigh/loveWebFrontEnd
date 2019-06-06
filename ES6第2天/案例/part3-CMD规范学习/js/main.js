define(function(require,exports,module){
	var yuan = require("./yuan.js");
	var fang = require("./fang.js");
	var People = require("./People.js");
	alert(yuan.mianji(10));
	alert(fang.mianji(10,20));

	var xiaoming = new People();
});