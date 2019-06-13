import React from "react";
import solarLunar from 'solarLunar';
 
export default class MonthView extends React.Component{
    constructor(props){
        super(props);

    }
 
 
    render(){
        const {year , month} = this.props;
       
        //计算三要素
        //① 本月1号星期几
        var benyue1haoxingqiji = (new Date(year , month - 1 , 1)).getDay();
        //② 本月共几天
        var benyuegongjitian = (new Date(new Date(year , month , 1) - 1)).getDate();
        //③ 上月共几天
        var shangyuegongjitian = (new Date(new Date(year , month - 1 , 1) - 1)).getDate();

        //组建数组
        var arr = [];
        //本月1号星期几，就有上个月的几天尾巴
        var count = benyue1haoxingqiji;
        while (count --){
            arr.unshift(shangyuegongjitian--);
        }
        //放本月的日子
        var count = 1;
        var n = benyuegongjitian;
        while(n --){
            arr.push(count++);
        }
        //凑满35项或42项
        var zongxiangshu = arr.length > 35 ? 42 : 35;
        count = 1;
        while(arr.length != zongxiangshu){
            arr.push(count++);
        }

         
        //封装一个函数，根据ARR来返回JSX结构
        function showMonth(){
            var domarr = [];
            for(var i = 0 ; i < arr.length / 7 ; i++){
                var temp = [];
                for(var j = 0 ; j < 7 ; j++){
                        // 这里比较乱，因为加了农历，月份+1、-1
                        if(i * 7 + j < benyue1haoxingqiji){
                            temp.push(
                                <td key={j}>
                                    {arr[i * 7 + j]}
                                    <br />
                                    {solarLunar.solar2lunar(year, month - 1, arr[i * 7 + j]).dayCn}
                                </td>
                            );
                        }else if(i * 7 + j < benyue1haoxingqiji + benyuegongjitian){
                            temp.push(
                                <td key={j}>
                                    {arr[i * 7 + j]}
                                    <br />
                                    {solarLunar.solar2lunar(year, month , arr[i * 7 + j]).dayCn}
                                </td>
                            );
                        }else {
                             temp.push(
                                <td key={j}>
                                    {arr[i * 7 + j]}
                                    <br />
                                    {solarLunar.solar2lunar(year, month + 1, arr[i * 7 + j]).dayCn}
                                </td>
                            );
                        }
                            
                    
                }
                domarr.push(<tr key={i}>{temp}</tr>);
            }
            return domarr;
        }


        return <div>
            <table>
                <tbody>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                    {showMonth()}
                </tbody>
            </table>
        </div> 
    }
}