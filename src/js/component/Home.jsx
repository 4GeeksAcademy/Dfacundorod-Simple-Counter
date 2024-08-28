import React from "react";

import { CuentaRegresiva } from "./cuentaRegresiva";
import { Count } from "./count";
import {CountWithButtons} from './countWithButtons'


export function Home(){
    return(
        <>
        <Count />
        <CuentaRegresiva />
        <CountWithButtons />
        </>);
}
