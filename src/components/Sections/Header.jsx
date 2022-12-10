import React from "react";
import Navigation from "./Navigation";
import logo from '../../images/logo.png';

const Header = props => {
    return (
        <div className="header">
            <div className="shell">
                <div className="header__inner">
                    { props.leftMenu ?
                        <Navigation nav_items={props.leftMenu} />
                    : '' }

                    <div className="header__logo">
                        <a href="/" className="img">
                            <img src={logo} alt="Main menu logo"></img>
                        </a>
                    </div>

                    { props.rightMenu ? 
                        <Navigation nav_items={props.rightMenu} />
                    : '' }
                </div>
            </div>
        </div>
    );
};

export default Header;