//得到内置http模块
var http = require("http");

//创建服务器，使用createServer方法来创建服务器。
//回调函数中有一个req参数表示请求，res参数表示响应。
var server = http.createServer(function(req,res){
	//设置UTF-8字符集：
	res.setHeader("Content-Type","text/html;charset=UTF8");
	//输出
	res.end("<h1>你好，NodeJS我来了</h1>");
});

//监听，我们的默认80端口已经被阿帕奇占用了，所以我们监听3000端口。
server.listen(3000);