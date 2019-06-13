import React from "react";
import classnames from "classnames";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            "cu" : false,
            "xie" : true ,
            "xian" : true
        }
    }

    //设置粗
    setCu(e){
        this.setState({
            "cu" : e.target.checked
        });
    }

    //设置斜
    setXie(e) {
        this.setState({
            "xie": e.target.checked
        });
    }

    //设置线
    setXian(e) {
        this.setState({
            "xian": e.target.checked
        });
    }
    

    render() {
        return <div>
            <p 
                className={
                    classnames({
                        "xie" : this.state.xie , 
                        "cu" : this.state.cu ,
                        "xian" : this.state.xian
                    })
                }
            >
                文字
            </p>
            <input type="checkbox" checked={this.state.cu} onChange={(e) => { this.setCu(e)}} /> 粗
            <input type="checkbox" checked={this.state.xie} onChange={(e) => { this.setXie(e) }} /> 斜
            <input type="checkbox" checked={this.state.xian} onChange={(e) => { this.setXian(e) }} /> 下划线
        </div>
    }
}