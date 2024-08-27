import React from "react";

import {PropTypes} from 'prop-types';

export const SecondCounter = (props) => {
    return(
        <>
            <div className="col-1 text-white d-flex align-items-center justify-content-center " style={{backgroundColor:'#070707', fontSize:`5rem`, border:`2px, #484948, solid`}}>{props.unit}</div>
        </>
    )
}
