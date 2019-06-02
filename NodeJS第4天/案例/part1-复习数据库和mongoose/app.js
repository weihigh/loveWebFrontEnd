var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cwgl_system");

var Dog = require("./models/Dog.js");


Dog.create({
	"name" : "小白" ,
	"color" : "白色" ,
	"age" : 2 
},(err)=>{
	console.log(err);
});

