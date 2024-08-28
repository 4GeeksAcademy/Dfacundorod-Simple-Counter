import React from "react";

import { Count } from "./count";
import {CountWithButtons} from './countWithButtons'


export function Home(){
    return(
        <>
        <Count />
        <CountWithButtons />
        </>);
}
