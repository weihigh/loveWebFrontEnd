var canting = {
	"name" : "全聚德",
	"cai" : {
		"liangcai" : [
			{
				"name" : "凉拌西红柿",
				"price" : 15
			},
			{
				"name" : "拍黄瓜",
				"price" : 18
			}
		],
		"recai" : [
			{
				"name" : "宫保鸡丁",
				"price" : 25
			},
			{
				"name" : "红烧肉",
				"price" : 45
			},
			{
				"name" : "辣子鸡",
				"price" : 35
			}
		]
	}
}

// 题目：
// ① 宫保鸡丁不卖了
var canting1 = {
	...canting , 
	"cai" : {
		...canting.cai ,
		"recai" : canting.cai.recai.filter(function(item){
			return item.name != "宫保鸡丁";
		})
	}
}

// ② 宫保鸡丁售价变为26
var canting2 = {
	...canting , 
	"cai" : {
		...canting.cai ,
		"recai" : canting.cai.recai.map(function(item){
			if(item.name == "宫保鸡丁") {
				return {
					...item ,
					"price" : 26
				}
			}
			return item;
		})
	}
}

// ③ 增加一个新菜：红烧茄子，19元
var canting3 = {
	...canting , 
	"cai" : {
		...canting.cai ,
		"recai" : [
			...canting.cai.recai ,
			{
				"name" : "红烧茄子" ,
				"price" : 19
			}
		]
	}
}
// ④ 售价20以上的热菜都不卖了
var canting4 = {
	...canting , 
	"cai" : {
		...canting.cai ,
		"recai" : canting.cai.recai.filter(function(item){
			return item.price <= 20
		})
	}
}

console.log(JSON.stringify(canting4));
 

