import React from "react";

function Main(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Main;
