import React from "react";
import logo from '../images/logo.png';
import NavigationComponent from "./NavigationComponent";

let footer_menu_items = [
    {   
        'id'    : '1',
        'title' : 'Home',
        'url'   : '#home',
    },
    {
        'id'    : '2',
        'title' : 'About',
        'url'   : '#about',
    },
    {   
        'id'    : '3',
        'title' : 'Sign In',
        'url'   : 'sign_in',
    },
    {   
        'id'    : '4',
        'title' : 'Sign Up',
        'url'   : 'sign_up'
    }
];

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="shell">
                <div className="footer__inner">
                    <div className="footer__cols">
                        <div className="footer__col">
                            <div className="footer__logo">
                                <img src={logo} alt="Footer menu logo"></img>
                            </div>
                        </div>

                        <div className="footer__col">
                            <div className="footer__menu">
                                <NavigationComponent nav_items={footer_menu_items}/>
                            </div>
                        </div>
                    </div>   
                    
                    <div className="footer__copyright">
                        Made by Ivan Mihov
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;