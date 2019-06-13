import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a : 100
        }
    }

    add(){
        this.setState({
            a : Number(this.state.a) + 5
        });
    }

    rangeChangeHandeler(a){
        this.setState({
            a
        });
    }

    render(){
        return <div>
            <input 
                type="range" 
                min="0" 
                max="255" 
                value={this.state.a} 
                onChange={(event) => {this.rangeChangeHandeler(event.target.value)}}
            />
            {this.state.a}
            <button onClick={this.add.bind(this)}>按我加1</button>
        </div>
    }
}