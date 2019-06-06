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
// ② 宫保鸡丁售价变为26
// ③ 增加一个新菜：红烧茄子，19元
// ④ 售价20以上的菜都不卖了

var xingcanting1 = {
    ...canting,
    "cai":{
        ...canting.cai,
        "recai":canting.cai.recai.filter(function(item){
            return item.name !="宫保鸡丁";
        })
    }
};
var xingcanting2 = {
    ...canting,
    "cai":{
        ...canting.cai,
        "recai":canting.cai.recai.map(function(item){
            if(item.name=="宫保鸡丁"){
                return{
                  ...item,
                    "price" : 26
                }
            }
            else{
                return item;
            }
        })
    }
};
var xingcanting3 ={
    ...canting,
    "cai":{
        ...canting.cai,
        "recai":[...canting.cai.recai,{"name" : "红烧茄子","price" : 19}]
    }
};
var xingcanting4 = {
    ...canting,
    "cai":{
            "liangcai":canting.cai.liangcai.filter(function(item){return item.price<20;}),
            "recai":canting.cai.recai.filter(function(item){return item.price<20;})
    }
};

