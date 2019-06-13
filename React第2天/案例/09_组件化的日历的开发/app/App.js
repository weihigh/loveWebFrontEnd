import React from "react";
import MonthView from "./MonthView.js";
import DecadeView from "./DecadeView.js";

 
export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            year : 2017 , 
            month : 11 ,
            view : "month"
        }
    }

    //变为下一月
    goNextMonth(){
        //如果当前是12月，那么下一月就是下一年的1月
        if(this.state.month == 12){
            this.setState({
                year : this.state.year + 1 ,
                month : 1
            });
        }else{
            this.setState({
                month: this.state.month + 1
            });
        }
    }

    //变为上一月
    goPrevMonth() {
        if (this.state.month == 1) {
            this.setState({
                year: this.state.year - 1,
                month: 12
            });
        } else {
            this.setState({
                month: this.state.month - 1
            });
        }
    }

   
    goNextYear() {
 
        this.setState({
            year: this.state.year + 10
        });
    }

    goPrevYear() {
         
        this.setState({
            year: this.state.year - 10
        });
    }

    setYear(year){
        console.log(year);
        this.setState({
            year ,
            "view" : "month"
        });
    }
 
 
    render(){
        return <div>
            {
                this.state.view == "month" 
                ?
                <h3>
                    <button onClick={this.goPrevMonth.bind(this)}>-</button>
                    <a href="javascript:void(0);" onClick={() => { this.setState({ "view": "decade" }) }}>
                        {this.state.year}
                    </a>
                        年
                        {this.state.month}
                    月
                    
                   
                    <button onClick={this.goNextMonth.bind(this)}>+</button>
                </h3> 
                :
                <h3>
                    <button onClick={this.goPrevYear.bind(this)}>-</button>
                    {this.state.year}年
                    <button onClick={this.goNextYear.bind(this)}>+</button>
                </h3>
            }

            {
                this.state.view == "month"
                ?
                <MonthView year={this.state.year} month={this.state.month}></MonthView>
                :
                <DecadeView year={this.state.year} setYear={this.setYear.bind(this)}/>
            }

        </div> 
    }
}