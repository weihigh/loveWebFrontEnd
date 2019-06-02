var express = require("express");
var app = express();

app.use("/public" , express.static("public"));

app.get("/" , function(req,res){
	res.send("<h1>我是首页</h1>");
});

var count = 0;
app.get("/chaxun/*" , function(req,res,next){
	count++;
	next();
});

app.get("/chaxun/:banji/:xuehao" , function(req,res){
	res.send("查询" + req.params.banji + "班" + req.params.xuehao + "号，次数" + count);
});
 
app.listen(3000);