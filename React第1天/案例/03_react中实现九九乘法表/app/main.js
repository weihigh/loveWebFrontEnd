import React from "react";
import ReactDOM from "react-dom";
 
//函数showJiuJiu将返回一个二维数组，九九乘法表
const showJiuJiu = () => {
    //这是最终要返回的结果，是一个二维数组。
    var result = [];
    for(var i = 1 ; i <= 9 ; i++){
        //某一行的数组
        var temp = [];
        for(var j = 1 ; j <= 9 ; j++){
            if(j <= i){
                temp.push(
                    <td key={j}>
                        {i} * {j} = {i * j}
                    </td>
                );
            }else{
                temp.push(
                     <td key={j} className="noborder"></td>
                );
            }
        }
        result.push(<tr key={i}>{temp}</tr>);
    }
    return result;
}

ReactDOM.render(
    <div>
        <table>
            <tbody>
                {showJiuJiu()}
            </tbody>
        </table>
    </div>
    ,
    document.querySelector("#app-container")
);