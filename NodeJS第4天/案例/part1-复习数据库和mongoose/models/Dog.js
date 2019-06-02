var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	"name" : String ,
	"color" : String ,
	"age" : Number ,
	"pinzhong" : {
		"type" : String ,
		"default" : "中型犬"
	}
});

module.exports = mongoose.model("Dog" , schema);