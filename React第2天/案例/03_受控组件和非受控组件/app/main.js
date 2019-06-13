import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import App2 from "./App2.js";

ReactDOM.render(
    <div>
        {/* 受控组件 */}
        <App></App>
        {/* 非受控组件 */}
        <App2></App2>
    </div>
    ,
    document.getElementById("app-container")
);