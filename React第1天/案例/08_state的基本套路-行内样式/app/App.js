import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "w" : 600,
            "h" : 300,
            "show" : true
        }
    }

    //改变显示和隐藏
    changeshow(){
        this.setState({
            "show" : !this.state.show
        });
    }

    //设置宽度
    setW(){
        //想要得到文本框的内容，文本框必须有ref属性，这里用this.refs得到
        this.setState({
            "w" : this.refs.wTxt.value
        });
    }

    //设置高度
    setH() {
        //想要得到文本框的内容，文本框必须有ref属性，这里用this.refs得到
        this.setState({
            "h": this.refs.hTxt.value
        });
    }
   
    render() {
        return <div>
            <button onClick={this.changeshow.bind(this)}>按我显示/隐藏</button>

            <br/>
            <br/>
            
            请设置宽度：
            <input type="text" ref="wTxt" />
            <button onClick={this.setW.bind(this)}>设</button>

            请设置高度：
            <input type="text" ref="hTxt"/>
            <button onClick={this.setH.bind(this)}>设</button>

            <br />
            <br />

            <div 
                className="box"
                style={{
                    "width" : this.state.w + "px" , 
                    "height" : this.state.h + "px" , 
                    "display" : this.state.show ? "block" : "none"
                }}
            ></div>
        </div>
    }
}