import React from "react";
import Baba from "./Baba";
 
export default class App extends React.Component{
    constructor(props){
        super(props);
        
    }
 
    render(){
        return <div>
            <Baba></Baba>
        </div> 
    }
}