var express = require("express");
var formidable = require("formidable");
var session = require('express-session')

var app = express();
app.set("view engine" , "ejs");

//使用session，这里的语句照抄，不要求懂：
app.set('trust proxy', 1);
app.use(session({
	secret: 'lalala',
	saveUninitialized: true,
	cookie: { maxAge: 86400 }
}));


//首页
app.get("/" , function(req,res){
	//呈递模板，把登录信息也带上去：
	res.render("shouye" , {
		login : req.session.login ,
		yonghuming : req.session.yonghuming ,
		anlian : req.session.anlian
	});
});

//登录
app.post("/login" , function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req , function(err , fields){
		//下发session，这里服务器就会设置乱码。
		req.session.login = true;
		req.session.yonghuming = fields.yonghuming;
		req.session.anlian = fields.anlian;

		res.redirect("/");
		 
	});
});

app.listen(3000);