import React from "react";
import NavigationComponent from "./NavigationComponent";
// import '../styles/HeaderComponent.css';
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

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="shell">
                <div className="header__inner">
                    <NavigationComponent nav_items={left_side_menu} />

                    <div className="header__logo">
                        <img src={logo} alt="Main menu logo"></img>
                    </div>

                    <NavigationComponent nav_items={right_side_menu} />
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;