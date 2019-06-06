// var [a,b,c] = [1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);


// var {a,b,c} = {"a":1,"b":2,"c":3};
// console.log(a);
// console.log(b);
// console.log(c);


//*****************************
// function People({name,age,sex,yuwen,shuxue,yingyu}){
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// 	this.yuwen = yuwen;
// 	this.shuxue = shuxue;
// 	this.yingyu = yingyu;
// }
// var xiaoming = new People({
// 	"name" : "小明",
// 	"age" : 12,
// 	"sex" : "男",
// 	"yuwen" : 34,
// 	"shuxue" : 44,
// 	"yingyu" : 66
// });

// console.log(xiaoming);


//*****************************
// var [a,...b,c] = [1,2,3,4,5,6,7];
// console.log(a);
// console.log(b);
// console.log(c);


//*****************************
// var arr = [1,2,3];
// console.log(...arr);
// console.log(1,2,3);


//*****************************
// var obj1 = {
// 	"a" : 1,
// 	"b" : 2,
// 	"c" : 3
// };

// var obj2 = {
// 	...obj1 ,
// 	"b" : 8
// };

// console.log(obj2);

//*****************************
// const fun = function(){
// 	//下面的语句是一个奇淫技巧，是最快的将类数组对象变为数组的方法
// 	var arr = [...arguments];
// 	console.log(arr);		//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
// 	console.log(Array.isArray(arr)); //true
// }
// fun(1,2,3,4,5,6,7,8);

//*****************************
var [[a,b],[c,d],...e] = [[1,2],[3,4,5],6,7,8,9];
console.log(a);		//1
console.log(b);		//2
console.log(c);		//3
console.log(d);		//4
console.log(e);		//[6,7,8,9]

