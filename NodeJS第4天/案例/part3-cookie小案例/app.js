var express = require("express");
var cookieParser = require('cookie-parser');
var app = express();

//模板引擎
app.set("view engine" , "ejs");
//让服务器拥有解析cookie的能力
app.use(cookieParser());
 
//访问首页的时候
app.get("/" , function(req,res){
	//读取cookie使用模板引擎，在模板中用for循环展开
	res.render("shouye" , {
		"lishijilu" : req.cookies.visited || []
	});
});


//访问内容页的时候
app.get("/:city" , function(req,res){
	//如果这个访问者还没有信物，此时就给他创建一个初始数组信物
	if(!req.cookies.visited){
		var visitedArr = [req.params.city];
	}else{
		//如果这个访问者有信物了，此时往它的cookie中push一项即可。
		var visitedArr = req.cookies.visited;
		if(visitedArr.indexOf(req.params.city) == -1){
			visitedArr.push(req.params.city);
		}
	}
	//写cookie，这是写cookie的语句。
	res.cookie('visited', visitedArr, { maxAge: 86400 });

	res.send("<h1>" + req.params.city + "攻略</h1>")
});

app.listen(3000);