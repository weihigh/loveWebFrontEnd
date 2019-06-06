var path = require("path");

//进行配置的东西，实际上是本文件的暴露项，要写module.exports
module.exports = {
	//配置入口文件
	entry : "./js/main.js" ,
	//配置产出文件
	output : {
		//产出文件文件夹
		path : path.resolve(__dirname , "dist") ,
		//产出文件的文件名
		filename : "all.js"
	},
	module : {
		rules : [
			{
				"test" : /\.js$/ ,
				"use" : [
					{
						"loader" : "babel-loader" , 
						"options" : {
							"presets" : ["es2015"] ,
							"plugins" : ["transform-object-rest-spread"]
						}
					}
				]
			}
		]
	},
	//实时监测文件更新，一旦文件更新了，就重新合并打包一份
	watch : true
}