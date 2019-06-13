import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            name : "",
            age : ""
        }
    }

    submitHandeler(){
       alert("提交了！" + JSON.stringify(this.state)); 
    }

    changeName(name){
        this.setState({
            name
        });
    }

    changeAge(age){
        this.setState({
            age
        });
    }
 
    render(){
        return <div>
            <h3>受控组件：</h3>
            <p>
                姓名：
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={(e)=>{ this.changeName(e.target.value) }}
                />
            </p>
            <p>
                年龄：
                <input 
                    type="text" 
                    value={this.state.age}
                    onChange={(e) => { this.changeAge(e.target.value) }}
                />
                {
                    this.state.age != "" && (this.state.age > 120 || this.state.age <= 10 || parseInt(this.state.age) != this.state.age)
                    ?
                        <span style={{ "color": "red"}}>年龄不合法！必须是11~120之间</span>
                    :
                    null
                }
            </p>
            <button onClick={this.submitHandeler.bind(this)}>提交</button>

            <hr />
        </div> 
    }
}