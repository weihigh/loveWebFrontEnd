import React from "react";
import Bar from "./Bar.js";
 
export default class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            "cart" : [
                {"id" : 10001 , "name" : "电脑" , "price" : 5600 , "amount" : 1 },
                {"id" : 10002 , "name" : "鼠标" , "price" : 200 , "amount" : 1 },
                {"id" : 10003 , "name" : "键盘" , "price" : 300 , "amount" : 1 },
                {"id" : 10004 , "name" : "U盘" , "price" : 500 , "amount" : 3 }
            ]
        }
    }

    //更改某id产品的数量，这个函数传给每个子组件
    setAmount(id , amount){
        this.setState({
            "cart" : this.state.cart.map((item)=>{
                if(item.id != id) return item;
                return {
                    ...item ,
                    amount
                }
            })
        });
    }

    //删除某id的产品，这个函数传给每个子组件
    delThing(id){
        this.setState({
            "cart" : this.state.cart.filter((item)=>{
                return item.id != id;
            })
        })
    }


    //显示总价
    showTotal(){
        var sum = 0;
        this.state.cart.forEach((item) => {
            sum += item.price * item.amount;
        });
        return sum;
    }
 
    render(){
        return <div>
            {JSON.stringify(this.state.cart)}
            <hr />

            {
                this.state.cart.map((item , index) => {
                    return <Bar key={index} thing={this.state.cart[index]} setAmount={this.setAmount.bind(this)} delThing={this.delThing.bind(this)} />
                })
            }
                

            <div className="cl"></div>
            <h1>总价：
                {this.showTotal()}
            </h1>
        </div> 
    }
}