var solarLunar = require("solarlunar");

module.exports = function(res , pathname){
	res.setHeader("Content-Type" , "text/html;charset=UTF8");
	//尝试得到qian后面的部分
	//先验证用户输入的是不是有三个/部分
	if(!/\/riqi\/\d+\/\d+\/\d+$/.test(pathname)){
		res.end("不合法的日期输入");
		return;
	}else{
		//尝试得到年、月、日
		var arr = pathname.match(/\/riqi\/(\d+)\/(\d+)\/(\d+)$/);
		var nian = arr[1];
		var yue = arr[2];
		var ri = arr[3];

		//大小验证
		if(nian < 1900 || nian > 2100){
			res.end("年份必须是1900-2100");
			return;
		}else if(yue < 1 || yue > 12 || ri < 1 || ri > 31){
			res.end("不合法的输入");
			return;
		}else{
			var result = solarLunar.solar2lunar(nian, yue, ri);
			res.end(result.gzYear + result.gzMonth + result.gzDay);
			return;
		}
	}
}