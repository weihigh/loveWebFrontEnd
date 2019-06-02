var http = require("http");
var fs = require("fs");

//创建一个服务器
var server = http.createServer(function(req,res){
	
	//输出访问的URL地址
	if(req.url == "/mingxing/wjk"){
		//设置UTF8
		res.setHeader("Content-Type","text/html;charset=UTF8");
		//需要读取文件
		fs.readFile("./public/wangjunkai.html" , function(err , data){
			res.end(data);
		});
	}else if(req.url == "/shuaige/lh"){
		//设置UTF8
		res.setHeader("Content-Type","text/html;charset=UTF8");
		//需要读取文件
		fs.readFile("./public/luhan.html" , function(err , data){
			res.end(data);
		});
	}else if(req.url == "/mingxing/wangjunkai.png"){
		//设置UTF8
		res.setHeader("Content-Type","image/png");
		//需要读取文件
		fs.readFile("./public/wangjunkai.png" , function(err , data){
			res.end(data);
		});
	}else if(req.url == "/mingxing/goupi.css"){
		//设置UTF8
		res.setHeader("Content-Type","text/css");
		//需要读取文件
		fs.readFile("./public/css.css" , function(err , data){
			res.end(data);
		});
	}else{
		res.end("没有这个页面！");
	}
});

//监听
server.listen(3000);