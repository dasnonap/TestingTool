import React from "react";
import NavigationComponent from "./Navigation";
import logo from '../images/logo.png';

let left_side_menu = [
    {   
        'id'    : '1',
        'title' : 'Home',
        'url'   : '#home',
    },
    {
        'id'    : '2',
        'title' : 'About',
        'url'   : '#about',
    }
];

let right_side_menu = [
    {   
        'id'    : '1',
        'title' : 'Sign In',
        'url'   : 'sign_in',
    },
    {   
        'id'    : '2',
        'title' : 'Sign Up',
        'url'   : 'sign_up'
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="shell">
                <div className="header__inner">
                    <NavigationComponent nav_items={left_side_menu} />

                    <div className="header__logo">
                        <a href="/" className="img">
                            <img src={logo} alt="Main menu logo"></img>
                        </a>
                    </div>

                    <NavigationComponent nav_items={right_side_menu} />
                </div>
            </div>
        </div>

    );
};

export default Header;