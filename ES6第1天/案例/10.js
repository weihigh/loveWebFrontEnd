// var a = 1;
// var b = 2;
// var c = 3;

// var obj = {
// 	a ,
// 	b ,
// 	c
// }

// console.log(obj);

//******************************

// var result = (function(){
// 	var s = 0;
// 	for (var i = 0; i <= 100; i++) {
// 		s += i;
// 	};
// 	return s;
// })();

// var json = {result};

// console.log(json);

//******************************
// var obj = {
// 	a : 1,
// 	fn(){
// 		console.log(this.a);
// 	}
// }
// obj.fn();

//******************************
// var obj = {
// 	"k0" : "甲",
// 	"k1" : "乙",
// 	"k2" : "丙"
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


//******************************
// console.log(NaN == NaN); //false
// console.log(+0 == -0);  //true

// console.log(Object.is(NaN , NaN));		//true
// console.log(Object.is(+0 , -0));		//false


//******************************
// var arr1 = [1,2,3];
// var arr2 = [1,2,3];

// console.log(Object.is(arr1 , arr2));	//false

//******************************
// var obj1 = {"a" :1 , "b" : 2 , "c" : 3};
// var obj2 = {"b" :4 , "c" : 5 , "d" : 6};
// var obj3 = {"c" :7 , "d" : 8 , "e" : 9};

// Object.assign(obj1 , obj2 , obj2);

// console.log(obj1);

//******************************
//如果是男生，统计肺活量
//如果是女生，统计胸围

var sex ="男";

if(sex == "男"){
	var k = "feihuoliang";
}else{
	var k = "xiongwei";
}

var obj = {
	"name" : "小明",
	"sex" : sex,
	[k] : 130
}

console.log(obj);