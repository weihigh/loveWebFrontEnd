var nzh = require("nzh").cn;

module.exports = function(res , pathname){
	res.setHeader("Content-Type" , "text/html;charset=UTF8");
	//尝试得到qian后面的部分
	var money = pathname.match(/\/qian\/(.+)$/)[1];
	var toMoney = nzh.toMoney(money);
	//nzh这个包有一个特点，当你toMondy转一个不合法的输入的时候，会返回原串
	if(money == toMoney){
		res.end("不合法的输入");
	}else{
		res.end(toMoney);
	}
}