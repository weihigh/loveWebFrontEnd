import React from "react";

class Compo1 extends React.Component{
    constructor(props){
        //调用超类的构造函数，语法规定
        super(props);
    }

    render(){
        return <div>
            <h1>哈哈，我是类组件1！</h1>
        </div>
    }
}

export default Compo1;