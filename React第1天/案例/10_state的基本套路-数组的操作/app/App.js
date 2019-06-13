import React from "react";
import classnames from "classnames";

export default class App extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            "students" : [
                {"id" : 10001 , "name":"小明"},
                {"id" : 10002 , "name":"小花"},
                {"id" : 10003 , "name":"小强"},
                {"id" : 10004 , "name":"小刚炮"}
            ]
        }
    }

    //增
    zeng(){
        var name = this.refs.nameTxt.value;
        this.setState({
            "students" : [
                ...this.state.students , 
                {"id" : this.state.students.reduce((a,b)=>{
                    return a.id > b.id ? a : b;
                }).id + 1, name}
            ]
        });
    }

    //删
    shan(id){
        this.setState({
            "students" : this.state.students.filter((item)=>{
                return item.id != id;
            })
        });
    }
 
    render() {
        return <div>
            <input type="text" ref="nameTxt"/>
            <button onClick={this.zeng.bind(this)}>增</button>

            <ul>
                {
                    this.state.students.map((item , index)=>{
                        return <li key={index}>
                            <b>{item.id}</b> {item.name}
                            <button onClick={()=>{this.shan(item.id)}}>删</button>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}