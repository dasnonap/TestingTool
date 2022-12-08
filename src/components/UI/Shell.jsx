import React from "react";

const Shell = (props) => {
    return (
        <div className={props.class || `shell`}>
            {props.children}
        </div>
    );
};

export default Shell;