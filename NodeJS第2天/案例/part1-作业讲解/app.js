var http = require("http");
var url = require("url");
var showqian = require("./controllers/showqian.js");
var showriqi = require("./controllers/showriqi.js");
var showpinyin = require("./controllers/showpinyin.js");
var fs = require("fs");

var server = http.createServer(function(req,res){
	//得到用户访问的地址的主干部分
	var pathname = url.parse(req.url , true).pathname;

	if(pathname == "/"){
		res.setHeader("Content-Type" , "text/html;charset=UTF8");
		fs.readFile("./public/index.html" , function(err , data){
			res.end(data);
		});
	}else if(/\/qian\/.+$/.test(pathname)){
		//如果URL匹配了/qian/...的模式，此时调用外部的函数
		showqian(res , pathname);
	}else if(/\/riqi\/.+$/.test(pathname)){
		showriqi(res , pathname);
	}else if(/\/pinyin\/.+$/.test(pathname)){
		showpinyin(res , pathname);
	}else{
		res.statusCode = 404;
		res.setHeader("Content-Type" , "text/html;charset=UTF8");
		res.end("<h1>没有这个页面</h1>");
	}
});

server.listen(3000);