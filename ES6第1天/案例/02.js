var [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);

var obj1 = {
	a : 1,
	b : 2,
	c : 3
}

var obj2 = {
	...obj1 , 
	b : 8
}
console.log(obj2);