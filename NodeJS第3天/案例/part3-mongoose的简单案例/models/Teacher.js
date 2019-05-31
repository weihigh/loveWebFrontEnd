var mongoose = require("mongoose");

//创建schema
var teacherSchema = new mongoose.Schema({
	"gonghao" : Number ,
	"xingming" : String,
	"age" : Number
});

//通过schema创建model
var Teacher = mongoose.model("Teacher" , teacherSchema);

//暴露
module.exports = Teacher;