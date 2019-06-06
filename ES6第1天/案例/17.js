var fs = require("fs");

function duwenjian(url){
	return new Promise((resolve , reject) => {
		fs.readFile(url , (err , data) => {
			if(err){
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}

duwenjian("./txt/1231231.txt")
.then(
	(data)=>{
		console.log(data.toString());
		return duwenjian("./txt/2.txt");
	},
	(err)=>{
		console.log("读取失败");
	}
)
.then((data)=>{
	console.log(data.toString());
	return duwenjian("./txt/3.txt");
})
.then((data)=>{
	console.log(data.toString());
})