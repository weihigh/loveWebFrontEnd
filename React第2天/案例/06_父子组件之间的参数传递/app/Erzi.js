import React from "react";
 
export default class Erzi extends React.Component{
    constructor(props){
        super(props);
       
    }
 
    render(){
        return <div>
            <h1>我是儿子组件，我收到了父亲的传给我的a是{this.props.a}</h1>
            <button onClick={() => { this.props.addA()}}>我是儿子中的按钮</button>
        </div> 
    }
}