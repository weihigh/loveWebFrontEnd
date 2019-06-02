var nzh = require("nzh");
var solarLunar = require("solarlunar");
var xlsx = require("node-xlsx");
var fs = require("fs");
var pinyin = require("pinyin");

//API看来的
var nzhcn = nzh.cn; 
console.log(nzhcn.toMoney(12321));

//API看来的
var obj = solarLunar.solar2lunar(1997, 5, 8);
console.log(obj.gzYear + obj.gzMonth + obj.gzDay);


//API看来的
var data = [["国家","人口","GDP"],["中国",13,200],["印度",15,1],["日本",1,0.08]];
var buffer = xlsx.build([{name: "各国数据", data: data}]); // Returns a buffer
fs.writeFile("./老板请您简约.xlsx" , buffer);

//API看来的
console.log(pinyin("我爱鹿晗"));