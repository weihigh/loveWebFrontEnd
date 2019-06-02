var express = require("express");
var app = express();
var formidable = require("formidable");
//引入苦工（就是我们的model）
var todo = require("./models/todo.js");

//静态化www文件夹
app.use(express.static("www"));

//罗列中间件

//列出所有的todo
app.get("/todo" , function(req,res){
	//当用户访问/todo命令苦工读取数据库
	todo.allTodo(function(data){
		//呈递在页面上
		res.json({"results" : data});
	});
});

//增加todo
app.post("/todo" , function(req,res){
	//识别用户传入的title
	var form = new formidable.IncomingForm();

	form.parse(req , function(err , fields , files){
		var title = fields.title;
		todo.addTodo(title , function(){
			res.json({"result" : 1});
		})
	});
});

//删除todo
app.delete("/todo/:id" , function(req,res){
	var id = req.params.id;

	//命令苦工删除
	todo.removeTodo(id , function(){
		res.json({"result" : 1});
	});
});


//更改todo
app.patch("/todo/:id" , function(req,res){
	var id = req.params.id;

	var form = new formidable.IncomingForm();

	form.parse(req , function(err , fields , files){
		//命令苦工删除
		todo.updateTodo(id , fields.k , fields.v , function(){
			res.json({"result" : 1});
		});
	});
});

//监听端口
app.listen(3000);