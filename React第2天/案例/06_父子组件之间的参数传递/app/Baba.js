import React from "react";
import Erzi from "./Erzi.js";
 
export default class Baba extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            a : 100 
        }
    }

    addA(){
        this.setState({
            a : this.state.a + 1
        });
    }
 
    render(){
        return <div>
            <h1>我是爸爸组件，a值是{this.state.a}</h1>
            <button onClick={()=>{this.setState({"a" : this.state.a + 1})}}>我是爸爸的按钮</button>
            <hr />
            <Erzi a={this.state.a} addA={this.addA.bind(this)}></Erzi>
        </div> 
    }
}