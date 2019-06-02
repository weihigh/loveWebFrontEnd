var express = require("express");
var app = express();
var url = require("url");
var formidable = require('formidable');

app.use(express.static("www"));

//识别GET请求
app.get("/tijiao" , function(req,res){
	//GET请求识别参数其实就是解析URL，所以使用url内置模块来解析。
	var query = url.parse(req.url , true).query;
	console.log("服务器收到了前端交来的GET数据" , query);
	res.json({"result" : 1});
});

//识别POST请求
app.post("/tijiao" , function(req,res){
	//formidable对象里面有一个叫做IncomingForm的方法，一被new调用将返回一个表单处理工具的实例
	var form = new formidable.IncomingForm();

	//使用parse方法来转换req中的请求，变为fields数据域和files文件域
	form.parse(req , function(err , fields , files){
		console.log("服务器收到了前端的POST的数据" , fields);

		res.json({"result" : 1})
	});
});

//识别DELETE请求
app.delete("/tijiao" , function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req , (err , fields , files) => {
		console.log("服务器收到DELETE请求参数" , fields);
		res.json({"result" : 1});
	});
});

//识别CHECKOUT请求
app.checkout("/tijiao" , function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req , (err , fields , files) => {
		console.log("服务器收到CHECKOUT请求参数" , fields);
		res.json({"result" : 1});
	});
});

//识别PATCH请求
app.patch("/tijiao" , function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req , (err , fields , files) => {
		console.log("服务器收到PATCH请求参数" , fields);
		res.json({"result" : 1});
	});
});



app.listen(3000);