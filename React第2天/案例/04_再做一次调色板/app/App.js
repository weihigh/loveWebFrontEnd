import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            r : 100 ,
            g : 200 , 
            b : 123
        }
    }

    changeColor(color , value){
        this.setState({
            [color] : value
        });
    }
    
    render(){
        return <div>
            <div 
                className="box" 
                style={{ "backgroundColor": `rgb(${this.state.r},${this.state.g},${this.state.b})`}}
            ></div>
            <p>
                <button onClick={()=>{this.setState({"r" : this.state.r - 1})}}>-</button>
                <input 
                    type="range" 
                    onChange={(e)=>{this.changeColor("r",e.target.value)}}
                    value={this.state.r}
                    min={0}
                    max={255}
                />
                <button onClick={() => {this.setState({ "r": Number(this.state.r) + 1 }) }}>+</button>
                <input 
                    type="number" 
                    min={0} 
                    max={255} 
                    value={this.state.r}
                    onChange={(e) => { this.changeColor("r", e.target.value) }}
                />
            </p>
            <p>
                <button onClick={() => { this.setState({ "g": this.state.g - 1 }) }}>-</button>
                <input
                    type="range"
                    onChange={(e) => { this.changeColor("g", e.target.value) }}
                    value={this.state.g}
                    min={0}
                    max={255}
                />
                <button onClick={() => { this.setState({ "g": Number(this.state.g) + 1 }) }}>+</button>
                <input
                    type="number"
                    min={0}
                    max={255}
                    value={this.state.g}
                    onChange={(e) => { this.changeColor("g", e.target.value) }}
                />
            </p>
            <p>
                <button onClick={() => { this.setState({ "b": this.state.b - 1 }) }}>-</button>
                <input
                    type="range"
                    onChange={(e) => { this.changeColor("b", e.target.value) }}
                    value={this.state.b}
                    min={0}
                    max={255}
                />
                <button onClick={() => { this.setState({ "b": Number(this.state.b) + 1 }) }}>+</button>
                <input
                    type="number"
                    min={0}
                    max={255}
                    value={this.state.b}
                    onChange={(e) => { this.changeColor("b", e.target.value) }}
                />
            </p>
            
            
        </div> 
    }
}