var mongoose = require("mongoose");

//创建schema
var schema = new mongoose.Schema({
	"timu1" : String , 
	"timu2" : [String] ,
	"timu3" : Number ,
	"date" : Date
});

//通过schema创建model
module.exports = mongoose.model("Survey" , schema);