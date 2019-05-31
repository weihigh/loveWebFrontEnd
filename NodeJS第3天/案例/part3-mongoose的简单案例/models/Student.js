var mongoose = require("mongoose");

//创建schema
var studentSchema = new mongoose.Schema({
	"xuehao" 	: Number, 
	"xingming" 	: String,
	"age" 		: Number,
	"sex" 		: String
});

//通过schema创建model
var Student = mongoose.model("Student" , studentSchema);

//暴露
module.exports = Student;