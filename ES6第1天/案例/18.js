var fs = require("fs");

function duwenjian(url){
	return new Promise((resolve , reject) => {
		fs.readFile(url , (err , data) => {
			resolve(data.toString());
		});
	});
}

//异步函数
async function main(){
	var data1 = await duwenjian("./txt/1.txt");
	console.log(data1);

	var data2 = await duwenjian("./txt/2.txt");
	console.log(data2);

	var data3 = await duwenjian("./txt/3.txt");
	console.log(data3);
}
main();