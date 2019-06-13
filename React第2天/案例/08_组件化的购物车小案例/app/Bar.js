import React from "react";
 
export default class Bar extends React.Component{
    constructor(props){
        super(props);
        
        
    }

    //减号的事件监听
    minus(){
        //如果当前数量是1件，用户还点击了减号，此时表示用户可能不想买了
        if (this.props.thing.amount == 1) {
            if(confirm(`你真的不再购买${this.props.thing.name}了么？`)){
                this.props.delThing(this.props.thing.id);
                return;
            }
            return;
        }  

        this.props.setAmount(this.props.thing.id , this.props.thing.amount - 1);
    }
 
    render(){
        var {id , amount , name , price} = this.props.thing;

        return <div className="cl">
            <div className="grid">
                {name}
            </div>
            <div className="grid">
                {price}
            </div>
            <div className="grid">
                <button 
                    onClick={this.minus.bind(this)}
                >-</button>

                {" "}

                <input 
                    className="amountTxt" 
                    type="text" 
                    value={amount}
                    onChange={(e)=>{this.props.setAmount(id , Number(e.target.value))}}
                />

                {" "}

                <button 
                    onClick={()=>{this.props.setAmount(id , amount + 1)}}
                >+</button>
            </div>
            <div className="grid">
                {amount * price}
            </div>
        </div> 
    }
}