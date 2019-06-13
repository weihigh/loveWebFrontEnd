import React from "react";
import classnames from "classnames";
 
export default class DecadeView extends React.Component{
    constructor(props){
        super(props);

    }
 
 
    render(){
        var year = this.props.year;
        var setYear = this.props.setYear;
        //这一年代的开头
        var zheyiniansuochudeniandaikaitou = year - year % 10;
        //上一年代的开头
        var shangyiniandaikaitou = zheyiniansuochudeniandaikaitou - 10;
        //下一年代的开头
        var xiayiniandaikaitou = zheyiniansuochudeniandaikaitou + 10;

        function showTable(){
            var arr = [];
            for(let i = 0 ; i < 10 ; i++){
                var temp = [
                    <td 
                        key={0} 
                        onClick={() => {setYear(shangyiniandaikaitou + i)}}
                    >
                        {shangyiniandaikaitou + i}
                    </td> ,
                    <td 
                        key={1} 
                        className={classnames({ "hong": year == zheyiniansuochudeniandaikaitou + i })} 
                        onClick={() => { setYear(zheyiniansuochudeniandaikaitou + i) }}
                    >
                        {zheyiniansuochudeniandaikaitou + i}
                    </td> ,
                    <td 
                        key={2} 
                        onClick={() => {setYear(xiayiniandaikaitou + i)}}
                    >
                        {xiayiniandaikaitou + i}
                    </td> 
                ];
                arr.push(<tr key={i}>{temp}</tr>);
            }
            return arr;
        }

        return <div>
           <table>
                <tbody>
                    {showTable()}
                </tbody>
            </table>
        </div> 
    }
}