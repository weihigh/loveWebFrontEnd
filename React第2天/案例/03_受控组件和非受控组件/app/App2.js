import React from "react";

export default class App2 extends React.Component {
    constructor(props) {
        super(props);

    }

    submitHandeler() {
        var name = this.refs.nameTxt.value;
        var age = this.refs.ageTxt.value;

        alert("提交了数据" + name + age);
    }

    render() {
        return <div>
            <h3>非受控组件：</h3>
            <p>
                姓名：
                <input type="text" ref="nameTxt" />
            </p>
            <p>
                年龄：
                <input type="text" ref="ageTxt" />
            </p>
            <button onClick={this.submitHandeler.bind(this)}>提交</button>
        </div>
    }
}