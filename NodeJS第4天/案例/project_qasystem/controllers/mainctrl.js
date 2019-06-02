//显示首页
exports.showIndex = function(req,res){
	res.render("index" , {
		"column" : "index",
		"login" : req.session.login ,
		"email" : req.session.email
	});
}