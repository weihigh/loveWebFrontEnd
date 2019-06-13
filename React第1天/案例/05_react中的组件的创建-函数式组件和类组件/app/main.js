import React from "react";
import ReactDOM from "react-dom";

import Compo1 from "./Compo1.js";
import Compo2 from "./Compo2.js";

//定义一个函数，函数的名字是大写的，暗示这是一个组件
function ShowHello({a=10000}){
    return <h1>你好！我爱你{a}年！</h1>;
}

//定义一个函数，函数的名字是大写的，暗示这个是一个组件
//这个组件的内容含有其他组件，组件套用组件！
function ShowMain(){
    return <section>
        <div>广告</div>
        <ShowHello></ShowHello>
    </section>
}
  
ReactDOM.render(
    <div>
        {/* 使用函数式组件 */}
        <ShowHello a={34}></ShowHello>
        <ShowHello a={123}></ShowHello>
        <ShowHello></ShowHello>

        {/* 使用大组件，大组件里面会自动有小组件 */}
        <ShowMain></ShowMain>

        {/* 使用类组件 */}
        <Compo1></Compo1>
        <Compo1></Compo1>
        <Compo1></Compo1>
        <Compo1></Compo1>
        <Compo2 a={5566}></Compo2>
    </div>
    ,
    document.querySelector("#app-container")
);