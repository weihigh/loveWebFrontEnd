import React from "react";
import classnames from "classnames";

export default class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            "txt" : ""
        }
    }
 
    render(){
        return <div>
            <textarea 
                cols="30" 
                rows="10"
                value={this.state.txt}
                onChange={(e)=>{this.setState({"txt" : e.target.value})}}
            ></textarea>
            <span className={classnames({ "hong": this.state.txt.length > 140})}>字数:{this.state.txt.length}/140</span>
            <button disabled={this.state.txt.length <= 0 || this.state.txt.length > 140}>提交</button>
        </div> 
    }
}