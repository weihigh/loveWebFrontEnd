import React from "react";
import classnames from "classnames";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            txt : ""
        }
    }
    
    setTxt(txt){
        this.setState({
            txt
        });
    }
  
    render() {
        return <div>
            <textarea cols="30" rows="10" onChange={(e)=>{this.setTxt(e.target.value)}}></textarea>
            <span className={classnames({"hong" : this.state.txt.length > 140})}>
                字数：{this.state.txt.length}/140
            </span>
            <button disabled={this.state.txt.length > 140 || this.state.txt.length == 0}>发布</button>
        </div>
    }
}