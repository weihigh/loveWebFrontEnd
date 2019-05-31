var express = require("express");
var mongoose = require('mongoose');
var formidable = require("formidable");

var app = express();

//链接数据库
mongoose.connect('mongodb://localhost/diaocha');

//我们自己的模型
var Survey = require("./models/Survey.js");

//静态www
app.use(express.static("www"));

//中间件
app.post("/tijiao" , function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req , function(err , fields){
		Survey.create({
			"timu1" : fields.timu1 ,
			"timu2" : fields.timu2 ,
			"timu3" : fields.timu3 ,
			"date" : new Date()
		},function(err){
			res.json({"result" : err ? -1 : 1});
		});
	});
});

//结果查询
app.get("/jieguo/:tihao" , function(req,res){
	var tihao = req.params.tihao;
	if(tihao == 1){
		//nodejs是单线程的，异步操作越多，效率越高。
		//就好比一个服务员的餐厅。
		Survey.count({"timu1" : "A"} , function(err , count_a){
			Survey.count({"timu1" : "B"} , function(err , count_b){
				Survey.count({"timu1" : "C"} , function(err , count_c){
					res.json({"A" : count_a , "B" : count_b , "C" : count_c});
				});
			});
		});
	}else if(tihao == 2){
		Survey.count({"timu2" : "A"} , function(err , count_a){
			Survey.count({"timu2" : "B"} , function(err , count_b){
				Survey.count({"timu2" : "C"} , function(err , count_c){
					Survey.count({"timu2" : "D"} , function(err , count_d){
						res.json({"A" : count_a , "B" : count_b , "C" : count_c , "D" : count_d});
					});
				});
			});
		});
	}else if(tihao == 3){
		var sum = 0;
		//计算总和
		Survey.find({} , function(err , results){
			results.forEach(function(data){
				sum += Number(data.timu3);
			});
			//平均数：
			res.json({"result" : sum / results.length})
		});
	}
});

//监听
app.listen(3000);