import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);
        //这个就叫做内部state，英语叫做local state
        this.state = {
            "a" : 100 ,
            "arr" : [1,2,3,4]
        }
    }

    add(){
        this.setState({
            "a" : this.state.a + 1
        });
    }

    changeul(){
        this.setState({
            "arr" : [5,6,7,8,9]
        });
        alert("我进行了最小量更新！没有删除4个li，增加5个li！而是增加了1个li，改变了所有li的innerHTML！");
    }

    render(){
        return <div>
            <h1>{this.state.a}</h1>
            <button onClick={this.add.bind(this)}>按我加1</button>

            <ul>
                {
                    this.state.arr.map((item , index) => {
                        return <li key={index} id={'li' + index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={this.changeul.bind(this)}>按我改变列表</button>
        </div>
    }
}