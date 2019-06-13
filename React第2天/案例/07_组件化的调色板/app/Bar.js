import React from "react";

 
export default class Bar extends React.Component{
    constructor(props){
        super(props);
        
    }
 
    render(){
        return <div>
            <p>
                <input 
                    type="range" 
                    value={this.props.v} 
                    min={0} 
                    max={255}
                    onChange={(e) => { this.props.setColor(this.props.color,e.target.value)}}
                /> 
                {this.props.v} 
                <input
                    type="number"
                    value={this.props.v}
                    min={0}
                    max={255}
                    onChange={(e) => { this.props.setColor(this.props.color, e.target.value) }}
                /> 
            </p>
        </div> 
    }
}