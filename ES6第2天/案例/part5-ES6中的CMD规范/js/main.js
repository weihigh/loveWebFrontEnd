import * as yuan from "./yuan.js";
import * as fang from "./fang.js";
import People , {lajihanshu} from "./People.js";

console.log(yuan.zhouchang(10));
console.log(yuan.mianji(10));
console.log(fang.zhouchang(10,20));
console.log(fang.mianji(10,20));

var xiaoming = new People("小明",12,"男");
xiaoming.haha();

lajihanshu();