import React from "react";
import { SecondCounter } from "./secondCounter";


export const CuentaRegresiva =()=>{

    return (
        <>
        <form id='form' className="row g-3 d-flex justify-content-center pt-5">
            <div className="col-auto ">
                <label htmlFor="initialValue" className="visually-hidden">Initial Value</label>
                <input type="number"  className="form-control" id="initialValue" placeholder="Initial Value" onChange={regresive}/>
            </div>
            <div className="col-4">
                <button type="submit" className="btn btn-primary mb-3">Confirm</button>
            </div>
        </form>
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
