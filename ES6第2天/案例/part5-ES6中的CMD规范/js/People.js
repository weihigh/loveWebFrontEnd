class People{
	constructor(name,age,sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	haha(){
		console.log(`我是${this.name}，哈哈`);
	}
}

//随便一个函数
export const lajihanshu = function(){
	console.log("哈哈");
}

export default People;