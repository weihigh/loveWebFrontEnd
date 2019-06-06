function People(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
People.prototype.changge = function(){
	console.log(`我是一个${this.name}，我今年${this.age}岁了`);
}


function Student(name,age,sex,xuehao,banji){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.xuehao = xuehao;
	this.banji = banji;
}
Student.prototype = new People();
Student.prototype.kaoshi = function(){
	console.log(`${this.name}在考试`);
}

var xiaohua = new Student("小花",12,"女",10001,"1班");
xiaohua.changge();
xiaohua.kaoshi();