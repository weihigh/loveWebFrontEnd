var fs = require("fs");

fs.readFile("./txt/1.txt",(err,data)=>{
	console.log(data.toString());
	fs.readFile("./txt/2.txt",(err,data)=>{
		console.log(data.toString());
		fs.readFile("./txt/3.txt",(err,data)=>{
			console.log(data.toString());
		});
	});
});