import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //state中show属性和盒子的上树情况对应；
        //true上树，false下树
        this.state = {
            "show" : true
        }
    }

    //按钮的监听
    changeshu(){
        this.setState({
            "show" : !this.state.show
        });
    }
    
    render() {
        //下面这个函数，根据state中的show不同返回一个div盒子或者null，从而决定了盒子是否上树
        const showBox = () => {
            return this.state.show ? <div className="box"></div> : null;
        }

        const buttonTxt = () => {
            return this.state.show ? "按我下树" : "按我上树";
        }

        return <div>
            <button onClick={this.changeshu.bind(this)}> {buttonTxt()} </button>
            {showBox()}
        </div>
    }
}