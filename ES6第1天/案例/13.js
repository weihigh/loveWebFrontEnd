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

var xiaoming = new People("小明",12,"男");
// console.log(xiaoming);

console.log(xiaoming.changge === People.prototype.changge); //true
console.log(xiaoming.hasOwnProperty("changge"));		//false
console.log(xiaoming.hasOwnProperty("name"));			//true