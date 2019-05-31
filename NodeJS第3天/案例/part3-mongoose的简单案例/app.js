var mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/xsgl');

//连接我们的model
var Student = require("./models/Student.js");
var Teacher = require("./models/Teacher.js");


//【增 - 方法1】
var xiaohong = new Student({
	"xuehao" 	: 10002, 
	"xingming" 	: "小红",
	"age" 		: 9,
	"sex" 		: "女"
});

xiaohong.save((err)=>{
	!err && console.log("成功");
});

//【增 - 方法2】
// Student.create({
// 	"xuehao" 	: 10003, 
// 	"xingming" 	: "小花",
// 	"age" 		: 5,
// 	"sex" 		: "女"
// },(err)=>{
// 	!err && console.log("成功");
// });


//【删 - 方法1】
// Student.find({"xingming" : "小红"} , function(err , results){
// 	var zhegeren = results[0];
// 	zhegeren.remove((err)=>{
// 		!err && console.log("成功");
// 	});
// });

//【删 - 方法2】
// Student.remove({"xingming" : "小花"} , (err)=>{
// 	!err && console.log("成功");
// });



// 【改 - 方法1】
// Student.find({"xingming" : "小明"} , function(err , results){
// 	var thepeople = results[0];

// 	thepeople.sex = "女";

// 	thepeople.save((err)=>{
// 		!err && console.log("成功");
// 	})
// });


// 【改 - 方法2】
// Student.update({"xingming" : "小明"} , {"$set" : {"age" : 99}} , function(err){
// 	!err && console.log("成功");
// });