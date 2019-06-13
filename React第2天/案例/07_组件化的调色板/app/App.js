import React from "react";
import Bar from "./Bar.js";
 
export default class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            r : 100,
            g : 200,
            b : 123
        }
    }

    setColor(k , v){
        this.setState({
            [k] : v
        });
    }
 
    render(){
        return <div>
            <div className="box" style={{ "backgroundColor": `rgb(${this.state.r} , ${this.state.g} ,${this.state.b} )`}}></div>
            {/* 将state的对象变为数组，然后遍历 */}
            {
                Object.keys(this.state).map((item , index) => {
                    return <Bar key={index} color={item} v={this.state[item]} setColor={this.setColor.bind(this)}></Bar>
                })
            }
        </div> 
    }
}