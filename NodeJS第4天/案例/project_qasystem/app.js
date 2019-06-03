//引用模块
var express = require("express");
var mongoose = require("mongoose");
var session = require("express-session");

var mainctrl = require("./controllers/mainctrl.js");
var registctrl = require("./controllers/registctrl.js");
var loginctrl = require("./controllers/loginctrl.js");

//创建app对象
var app = express();

//设置模板引擎
app.set("view engine" , "ejs");

//数据库
mongoose.connect("mongodb://localhost/qasystem",{useMongoClient:true});

//使用session，这里的语句照抄，不要求懂：
app.set('trust proxy', 1);
app.use(session({
	resave : false,
	secret: 'qasystem',
	saveUninitialized: true,
	cookie: { maxAge: 86400 }	//session能够存储的时间
}));

//静态化www文件夹
app.use(express.static("www"));

//路由清单
app.get("/" 		, 	mainctrl.showIndex);
app.get("/regist" 	, 	registctrl.showRegist);
app.post("/regist"  ,   registctrl.doRegist);
app.checkout("/regist"  , registctrl.checkUserExist);
app.get("/login"		, loginctrl.showLogin);
app.post("/login"		, loginctrl.doLogin);

//监听
app.listen(3000);
console.log("程序已经运行在3000端口！");