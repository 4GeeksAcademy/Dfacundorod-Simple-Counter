import React from "react";
import {SecondCounter} from './SecondCounter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

let initialValue = 0
export function Home(){
    initialValue++
    let digitOne=Math.floor(initialValue%10);
    let digitTwo=Math.floor(initialValue/10)%10;
    let digitTree=Math.floor(initialValue/100)%10;
    let digitFour=Math.floor(initialValue/1000)%10;
    let digitFive=Math.floor(initialValue/10000)%10;
    let digitSix=Math.floor(initialValue/100000)%10;
    return (<div className="container-fluid d-inline-flex justify-content-center pt-5" style={{height: `20vh`}}>
        <div className="col-1 text-white d-flex align-items-center justify-content-center" style={{backgroundColor:'#070707', fontSize:`5rem`, border:`2px, #484948, solid`}}>
        <FontAwesomeIcon icon={faClock} />
        </div>
        <SecondCounter unit={digitSix} />
        <SecondCounter unit={digitFive} />
        <SecondCounter unit={digitFour} />
        <SecondCounter unit={digitTree} />
        <SecondCounter unit={digitTwo} />
        <SecondCounter unit={digitOne} />
        </div>);
}
