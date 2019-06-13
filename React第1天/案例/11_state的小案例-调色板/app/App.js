import React from "react";
import classnames from "classnames";

export default class App extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            "r" : 100,
            "g" : 200,
            "b" : 123
        }
    }
 
    //设置颜色
    setColor(k,v){
        this.setState({
            [k] : v
        });
    };

    render() {
        return <div>
            <div 
                className="box"
                style={{ "backgroundColor": `rgb(${this.state.r},${this.state.g},${this.state.b})`}}
            ></div>
            <p>
                r : 
                <input 
                    type="range" 
                    min={0}
                    max={255} 
                    value={this.state.r}
                    onChange={(e)=>{this.setColor("r",e.target.value)}}
                />
                {this.state.r}
            </p>
            <p>
                g : 
                <input 
                    type="range" 
                    min={0} 
                    max={255} 
                    value={this.state.g}
                    onChange={(e) => { this.setColor("g", e.target.value) }}
                 />
                {this.state.g}
            </p>
            <p>
                b :
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={this.state.b}
                    onChange={(e) => { this.setColor("b", e.target.value) }}
                />
                {this.state.b}
            </p>
        </div>
    }
}