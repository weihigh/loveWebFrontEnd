import React, { Component } from 'react'

export default class Compo2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>我是组件2！哈哈哈哈{this.props.a}</h1>
            </div>
        )
    }
}
