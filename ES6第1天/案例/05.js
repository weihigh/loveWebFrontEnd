// var arr = ["白板","幺鸡","二条","三万","四筒"];
// arr.forEach(function(item , index){
// 	console.log(item + "下标为" + index);
// });

//****************************
// var arr = [43,4,23,23,34,23];
// var arr2 = arr.map(function(item){
// 	return item * 2;
// });
// console.log(arr2);

//****************************
// var arr = [3,43,25,43,543,645,765,7,23,432,4,324,23,43,45];
// var arr2 = arr.filter(function(item){
// 	return item % 2 == 0;
// });

// console.log(arr2);

//****************************
// var arr = [
// 	{"name":"小明" , "fenshu" :66},
// 	{"name":"小红" , "fenshu" :16},
// 	{"name":"小强" , "fenshu" :26},
// 	{"name":"小刚" , "fenshu" :86}
// ];

// var arr2 = arr.filter(function(item){
// 	return item.fenshu >= 60;
// });

// console.log(arr2);

//****************************
// var arr = ["白板","幺鸡","二条","三万","四筒"];
// var result = arr.reduce(function(a,b){
// 	console.log(a,b);
// 	return "★";
// });

// console.log(result);

//**************************
// var arr = [3,4,5,2,2];
// var result = arr.reduce(function(a,b){
// 	return a + b;
// });
// console.log(result);

//***************************
var arr = [4,43,5,436,45,623,4,324,23,443,53,65,46,45,6,234,324];
var result = arr.reduce(function(a,b){
	return a >= b ? a : b;
});
console.log(result);