var pinyin = require("pinyin");

module.exports = function(res , pathname){
	res.setHeader("Content-Type" , "text/html;charset=UTF8");
	//尝试得到qian后面的部分
	//先验证用户输入的是不是有三个/部分
	var word = decodeURIComponent(pathname.match(/\/pinyin\/(.+)$/)[1]);

	res.end(pinyin(word).toString());
}