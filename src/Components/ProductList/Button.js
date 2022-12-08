import React from "react";

export default function Button(props){
    return (
        <button className="btn btn-primary me-3" onClick={props.eventHandler}>{props.children}</button>
    )
}