var xiaoming = {
	"name" : "小明",
	"age" : 12,
	"sex" : "男",
	"friends" : [
		{
			"id" : 1,
			"name" : "小红",
			"age" : 13
		},
		{
			"id" : 2,
			"name" : "小强",
			"age" : 14
		},
		{
			"id" : 3,
			"name" : "小刚炮",
			"age" : 18
		}
	]
}

var xiaoming2 = {
	...xiaoming ,
	"friends" : [
		...xiaoming.friends,
		{
			"id" : xiaoming.friends.reduce(function(a,b){
				return a.id > b.id ? a : b;
			}).id + 1 ,
			"name" : "老王" ,
			"age" : 88
		}
	]
}

 
console.log(xiaoming2);