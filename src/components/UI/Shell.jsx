import React from "react";

const Shell = (props) => {
    return (
        <div className={props.className || `shell`}>
            {props.children}
        </div>
    );
};

export default Shell;