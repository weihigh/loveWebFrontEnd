var http = require("http");

var server = http.createServer(function(req,res){
	//设置UTF8
	res.setHeader("Content-Type","text/html;charset=UTF8");

	//得到用户的url
	var url = req.url;
	//用正则拆
	var arr = url.match(/\/user\/(.+)\/(.+)$/);

	//验证是否提炼成为了数组
	if(!arr){
		res.end("<h1>没有这个网址</h1>");
		return;
	}

	//得到$1，就是正则中的第一个()
	var $1 = arr[1];
	//得到$2，就是正则中的第二个()
	var $2 = arr[2];

	
	//模拟数据库
	var users = {
		"wangjunkai" : "王俊凯" ,
		"liyifeng" : "李易峰",
		"luhan" : "鹿晗",
		"wuyifan" : "吴亦凡"
	};

	var list = {
		"post" : "文章",
		"ask" : "提问",
		"answers" : "回答",
		"pins" : "想法"
	};

	res.end("<h1>欢迎查看" + users[$1] + "的" + list[$2] + "</h1>");
});

server.listen(3000);