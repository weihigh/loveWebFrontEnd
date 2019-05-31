var MongoClient = require('mongodb').MongoClient;

//数据库的地址，最末尾的斜杠是数据库的名字
var url = 'mongodb://localhost:27017/xsgl';

//连接数据库
MongoClient.connect(url, function(err, db) {
	if(!err){
		console.log("数据库连接成功");
	}else{
		console.log("数据库连接失败");
		return;
	}
	

	//查询
	// db.collection("banji0716").find({}).toArray(function(err , docs){
	// 	console.log(docs);
	// });

	//增加
	db.collection("banji0716").insert({"name":"小张","age":7},function(err){
		if(!err){
			console.log("插入成功");
		}
	});
	
});