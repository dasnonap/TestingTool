import React from "react";

const Button = props => {
    return (
        <a
            href={props.url || `#`} 
            className={props.class || `btn`}
            target={props.target || `self`}
            onClick={props.onClick || '' }
        >
            {props.children}
        </a>
    );
};

export default Button;