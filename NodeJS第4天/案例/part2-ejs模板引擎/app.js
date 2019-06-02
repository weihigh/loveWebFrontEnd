var express = require("express");
var app = express();

//设置默认模板引擎为ejs
app.set("view engine" , "ejs");
app.set("views" , "templates");

app.get("/" , function(req,res){
	//我们现在的res有的功能是：
	//res.send()、res.json()、res.jsonp()、res.sendFile()
	//现在多了一个res.render()表示使用模板页面
	//不需要加上views文件夹，因为模板引擎默认就是放在views文件夹中的
	//也不需要加上.ejs后缀
	res.render("shouye" , {
		"xinqing" : "高兴",
		"dongxi" : "苹果叉",
		"qian" : 8000 ,
		"ouxiang" : ["鹿晗","王源","王俊凯","胡歌"]
	});
});

app.listen(3000);