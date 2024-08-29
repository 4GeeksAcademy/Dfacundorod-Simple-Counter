import React from "react";
import { SecondCounter } from "./secondCounter";




let initialValue = 0;
let isRuning = false ;
let intervalId = null;
export const CountWithButtons =() => {
    function start(){
        if(!isRuning){
            isRuning=true;
            intervalId = setInterval(() => {
            initialValue+=1
        }, 1000)}}
    function pause(){
        if(isRuning==true){
            clearInterval(intervalId)
            isRuning=false;
        }
    }
    function reStart(){
        pause()
        initialValue = 0;
    }
    
    return (
        <>
        <div className="gap-2 d-flex justify-content-center pt-5">
            <button className="btn btn-primary" type="button" onClick={reStart}>Restart</button>
            <button className="btn btn-primary" type="button" onClick={start}>Play</button>
            <button className="btn btn-primary" type="button" onClick={pause}>Pause</button>
        </div>

        <div className="container-fluid d-flex justify-content-center pt-3">
        <SecondCounter unit={Math.floor(initialValue/100000)%10} />
        <SecondCounter unit={Math.floor(initialValue/10000)%10} />
        <SecondCounter unit={Math.floor(initialValue/1000)%10} />
        <SecondCounter unit={Math.floor(initialValue/100)%10} />
        <SecondCounter unit={Math.floor(initialValue/10)%10} />
        <SecondCounter unit={Math.floor(initialValue%10)} />
        </div>
        </>
    )
}