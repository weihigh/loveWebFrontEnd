// const sum = (a,b) => {
// 	return a + b;
// }

// console.log(sum(3,4));

//*******************************
// const sum = (a,b) => a + b;
// console.log(sum(45,5));

//*******************************
// const fn = (a , b) => (m) => {
// 	return a + b + m;
// }
// console.log(fn(3,4)(5));


// const fn = function(a,b){
// 	return function(m){
// 		return a + b + c
// 	}
// }

//*******************************
// var a = 9;
// var obj = {
// 	a : 1 ,
// 	b : () => {
// 		console.log(this.a);
// 	}
// }
 
// var haha = {
// 	a : 8888
// }

// obj.b();
// obj.b.call(haha);
// obj.b.apply(haha);


//*******************************
// function fn(){
// 	var obj = {
// 		f : () => {
// 			console.log(this);
// 		}
// 	}
// 	return obj;
// }
// fn.m = 123;

// fn().f();

//*******************************
function fun(){
	console.log(this.a);
}

var obj = {
	a : 233 ,
	b : 886
}

var another = {
	a : 6666666666666
}

//.bind()语句，彻底将fun函数的上下文定死了，就是obj对象
fun = fun.bind(obj);

fun();				//233
fun.call(another);	//233
fun.apply(another); //233