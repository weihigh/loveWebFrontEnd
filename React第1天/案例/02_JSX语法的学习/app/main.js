import React from "react";
import ReactDOM from "react-dom";

const power = a => a * a;

//定义一个函数，这个函数返回jsx
const sayHello = (sex) =>{
    if(sex == "男"){
        return <div>
            <b>欢迎你！先生！请你购买：</b>
            <ul>
                <li>刮胡刀</li>
                <li>香烟</li>
            </ul>
         </div>;
    }else{
        return <div>
            <b>欢迎你！女士！请你购买：</b>
            <ul>
                <li>化妆品</li>
                <li>香包</li>
            </ul>
        </div>;
    }
}

//返回一个图片的地址
const showPic = (picname) => {
    if(picname == "孙杨"){
        return "images/0.jpg";
    } else if (picname == "女排") {
        return "images/1.jpg";
    }
}

var w = 200;

const arr = [<p key={1}>哈哈</p>, <p key={2}>嘻嘻</p>, <p key={3}>么么哒</p>];

const element = <div>
    <h1>我是React！哈哈嘿嘿，爱你{5000*2}年！</h1>
    <h1>我是React！哈哈嘿嘿，爱你{power(100)}年！</h1>
    {sayHello('女')}
    <div>
        <img src={showPic('孙杨')} width={w}/>
    </div>
    <div className="spec">我是重要的文字</div>
    <div>
        {arr}
    </div>
</div>;

ReactDOM.render(
    element
    ,
    document.querySelector("#app-container")
);