var obj = {
	"0" : "甲",
	"1" : "乙",
	"2" : "丙",
	"length" : 3
};

//传统方法：
var realObj1 = [].slice.call(obj);
console.log(realObj1);


// 今天学习的
// var realObj2 = [...obj];
// console.log(realObj2);		//可以面试的时候写，仅限于类数组对象是arguments

//新方法
var realObj3 = Array.from(obj);
console.log(realObj3);