var yuan = require("./yuan.js");
var fang = require("./fang.js");

var [a,b,c] = [1,2,3];	//自动解构
var obj = {
	"a" : 1 , 
	"b" : 2 ,
	"c" : 3
};

var obj1 = {
	...obj ,
	"b" : 8
};

alert(yuan.mianji(33));