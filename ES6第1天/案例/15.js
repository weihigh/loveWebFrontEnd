class People{
	constructor(name , age , sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	changge(){
		console.log("我是一个" + this.name + "今年" + this.age + "岁啦！！");
	}

	goDie(){
		console.log("死啦");
	}
}

class Student extends People{
	constructor(name , age , sex , xuehao , banji){
		super(name , age , sex);
		this.xuehao = xuehao;
		this.banji = banji;
	}

	kaoshi(){
		console.log(`${this.name}在考试`);
	}
}

var xiaohua = new Student("小花",12,"女",10001,"1班");
xiaohua.changge();
xiaohua.kaoshi();

console.log(xiaohua.kaoshi === Student.prototype.kaoshi);
console.log(xiaohua.changge === People.prototype.changge);