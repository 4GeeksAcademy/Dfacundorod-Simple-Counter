import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {SecondCounter} from './secondCounter';

let initialValue = 0;
export const Count = ()=>{
    initialValue++
    return(

        <div className="container-fluid d-inline-flex justify-content-center pt-5" style={{height: `20vh`}}>
            <div className="col-1 text-white d-flex align-items-center justify-content-center" style={{backgroundColor:'#070707', fontSize:`5rem`, border:`2px, #484948, solid`}}>
                <FontAwesomeIcon icon={faClock} />
            </div>
            <SecondCounter unit={Math.floor(initialValue/100000)%10} />
            <SecondCounter unit={Math.floor(initialValue/10000)%10} />
            <SecondCounter unit={Math.floor(initialValue/1000)%10} />
            <SecondCounter unit={Math.floor(initialValue/100)%10} />
            <SecondCounter unit={Math.floor(initialValue/10)%10} />
            <SecondCounter unit={Math.floor(initialValue%10)} />
        </div>
)
}