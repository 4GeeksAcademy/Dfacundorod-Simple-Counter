//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home";

const root= ReactDOM.createRoot(document.getElementById('app'));
function Render(){
    root.render(<Home/>)

}
window.onload = setInterval(() => {
    Render()
}, 1000);